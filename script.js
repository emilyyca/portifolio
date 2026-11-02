/**
 * Portfólio Emily Silva — JavaScript Puro
 * Interações refinadas, acessíveis e robustas
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initHeaderScroll();
  initActiveNavSync();
});

/**
 * Menu mobile acessível (abrir, fechar, suporte à tecla Escape e redimensionamento)
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('nav-toggle');
  const primaryNav = document.getElementById('primary-nav');

  if (!toggleBtn || !primaryNav) return;

  const toggleMenu = (shouldOpen) => {
    const isCurrentlyOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
    const nextState = typeof shouldOpen === 'boolean' ? shouldOpen : !isCurrentlyOpen;

    toggleBtn.setAttribute('aria-expanded', String(nextState));
    toggleBtn.setAttribute(
      'aria-label',
      nextState ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
    );
    primaryNav.classList.toggle('is-open', nextState);
  };

  toggleBtn.addEventListener('click', () => toggleMenu());

  // Fecha o menu ao clicar em qualquer link da navegação
  const navLinks = primaryNav.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (primaryNav.classList.contains('is-open')) {
        toggleMenu(false);
      }
    });
  });

  // Fecha o menu ao pressionar a tecla Escape e devolve o foco ao botão
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && primaryNav.classList.contains('is-open')) {
      toggleMenu(false);
      toggleBtn.focus();
    }
  });

  // Fecha automaticamente o menu caso a janela seja redimensionada para desktop
  const desktopQuery = window.matchMedia('(min-width: 769px)');
  const handleMediaChange = (e) => {
    if (e.matches && primaryNav.classList.contains('is-open')) {
      toggleMenu(false);
    }
  };

  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener('change', handleMediaChange);
  } else if (desktopQuery.addListener) {
    desktopQuery.addListener(handleMediaChange);
  }
}

/**
 * Ajuste sutil do cabeçalho ao rolar a página
 */
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Executa no carregamento inicial
}

/**
 * Sincronização acessível do link ativo no menu ao rolar
 * Combina IntersectionObserver com validação de limites (topo e final da página)
 */
function initActiveNavSync() {
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));

  if (!sections.length || !navLinks.length) return;

  const setActiveLink = (currentId) => {
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === `#${currentId}`) {
        link.classList.add('is-active');
      } else {
        link.classList.remove('is-active');
      }
    });
  };

  // Observador de interseção para transições normais
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.getAttribute('id'));
        }
      });
    },
    {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    }
  );

  sections.forEach((section) => observer.observe(section));

  // Fallback suave para limites: topo estrito e rodapé da página
  let ticking = false;
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const viewportHeight = window.innerHeight;
          const totalHeight = document.documentElement.scrollHeight;

          // Se estiver no topo
          if (scrollY < 80) {
            setActiveLink('inicio');
          }
          // Se estiver no final da página (garante ativação do contato mesmo com altura curta)
          else if (scrollY + viewportHeight >= totalHeight - 60) {
            setActiveLink('contato');
          }

          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );
}
