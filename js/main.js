/**
 * Main JavaScript - Landing Page
 * Funcionalidades interativas e melhorias de UX
 */

(function() {
    'use strict';

    // ===================================
    // Mobile Navigation Toggle
    // ===================================
    const initMobileNav = function() {
        const navToggle = document.querySelector('.nav__toggle');
        const navMenu = document.querySelector('.nav__menu');
        const navLinks = document.querySelectorAll('.nav__link');

        if (!navToggle || !navMenu) return;

        // Toggle menu mobile
        navToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
            });
        });

        // Fechar menu ao pressionar ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
                navToggle.focus();
            }
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.nav') && navMenu.classList.contains('active')) {
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
            }
        });
    };

    // ===================================
    // Smooth Scroll para Links Âncora
    // ===================================
    const initSmoothScroll = function() {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');

                // Ignorar links apenas com "#"
                if (href === '#') {
                    e.preventDefault();
                    return;
                }

                const target = document.querySelector(href);

                if (target) {
                    e.preventDefault();

                    // Scroll suave com offset para header fixo
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Foco no elemento para acessibilidade
                    target.setAttribute('tabindex', '-1');
                    target.focus();
                }
            });
        });
    };

    // ===================================
    // Scroll Animation (Fade In)
    // ===================================
    const initScrollAnimations = function() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Elementos para animar
        const animatedElements = document.querySelectorAll(
            '.feature__card, .about__text, .about__image, .cta__content'
        );

        // Adicionar classe para animação
        animatedElements.forEach(function(el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(el);
        });

        // CSS para animação
        const style = document.createElement('style');
        style.textContent = `
            .animate-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(style);
    };

    // ===================================
    // Header Shadow no Scroll
    // ===================================
    const initHeaderScroll = function() {
        const header = document.querySelector('.header');
        if (!header) return;

        let lastScroll = 0;
        const scrollThreshold = 10;

        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;

            if (currentScroll > scrollThreshold) {
                header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.1)';
            }

            lastScroll = currentScroll;
        });
    };

    // ===================================
    // Active Navigation Link
    // ===================================
    const initActiveNav = function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav__link');

        if (!sections.length || !navLinks.length) return;

        window.addEventListener('scroll', function() {
            let current = '';
            const scrollY = window.pageYOffset;

            sections.forEach(function(section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                const offset = 100;

                if (scrollY >= sectionTop - offset) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(function(link) {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href === '#' + current) {
                    link.classList.add('active');
                }
            });
        });
    };

    // ===================================
    // Acessibilidade: Focus Management
    // ===================================
    const initAccessibility = function() {
        // Adicionar estilo para link ativo na navegação
        const style = document.createElement('style');
        style.textContent = `
            .nav__link.active {
                color: var(--color-primary) !important;
                background-color: var(--color-background-alt);
            }
        `;
        document.head.appendChild(style);

        // Melhorar navegação por teclado em cards
        const cards = document.querySelectorAll('.feature__card');
        cards.forEach(function(card) {
            if (!card.querySelector('a, button')) {
                card.setAttribute('tabindex', '0');
                card.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        this.click();
                    }
                });
            }
        });
    };

    // ===================================
    // Performance: Lazy Loading (se houver imagens futuras)
    // ===================================
    const initLazyLoading = function() {
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img[loading="lazy"]');
            images.forEach(function(img) {
                img.src = img.dataset.src || img.src;
            });
        }
    };

    // ===================================
    // Inicialização
    // ===================================
    const init = function() {
        // Verificar se DOM está carregado
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initAll);
        } else {
            initAll();
        }
    };

    const initAll = function() {
        initMobileNav();
        initSmoothScroll();
        initScrollAnimations();
        initHeaderScroll();
        initActiveNav();
        initAccessibility();
        initLazyLoading();

        // Log de inicialização (apenas em desenvolvimento)
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('Landing Page initialized successfully');
        }
    };

    // Iniciar aplicação
    init();
})();

// ===================================
// Expor funções globalmente se necessário
// ===================================
if (typeof window !== 'undefined') {
    window.LandingPage = {
        // Adicionar métodos públicos se necessário
        version: '1.0.0'
    };
}
