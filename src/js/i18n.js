const i18n = {
    en: {
      description: "QURI is your platform to design, sell, and discover unique T-shirts created by independent artists. Express yourself in style.",
      keywords: "custom t-shirts, t-shirt design, independent artists, original fashion, QURI, creative marketplace",
      about: "About",
      faq: "FAQ",
      pricing: "Pricing",
      join: "Join",
      login: "Login",
      heroTitle: "Design it. Rock it.",
      introSectionTitle1: "Bring your idea to life – effortlessly.",
      introSectionText1: "Designing your own T-shirt should feel as exciting as wearing it...",
      introSectionTitle2: "Support independent artists. Discover your next favorite tee.",
      introSectionText2: "Tired of mass-produced fashion? Our marketplace is a curated space...",
      startCreating: "START CREATING",
      whoAreWe: "Who are we?",
      aboutUsText: "A platform where creativity meets clothing. We help people design, sell, and wear unique T-shirts...",
      howMuchDoesItCost: "How much does it cost?",
      costText: "It's free to get started. We only earn when you do...",
      learnMore: "Learn more",
      socialMedia: "Social Media",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of service",
      home: "Home Page",
      community: "Community",
      company: "Company",
      about_us: "About Us",
      how_it_works: "How it works",
      quri: "QURI",
      sign_in: "Sign in",
      terms_of_service: "Terms of Service",
    },
    es: {
      description: "QURI es tu plataforma para diseñar, vender y descubrir camisetas únicas creadas por artistas independientes. Exprésate con estilo.",
      keywords: "camisetas personalizadas, diseño de camisetas, artistas independientes, moda original, QURI, marketplace creativo",
      about: "Acerca de",
      faq: "Preguntas frecuentes",
      pricing: "Precios",
      join: "Únete",
      login: "Iniciar sesión",
      heroTitle: "Diseñalo. Lúcelo.",
      introSectionTitle1: "Haz realidad tu idea – sin esfuerzo.",
      introSectionText1: "Diseñar tu propia camiseta debe ser tan emocionante como usarla...",
      introSectionTitle2: "Apoya a artistas independientes. Descubre tu próxima camiseta favorita.",
      introSectionText2: "¿Cansado de la moda producida en masa? Nuestro marketplace es un espacio curado...",
      startCreating: "EMPEZAR A CREAR",
      whoAreWe: "¿Quiénes somos?",
      aboutUsText: "Una plataforma donde la creatividad se encuentra con la ropa. Ayudamos a las personas a diseñar, vender y usar camisetas únicas...",
      howMuchDoesItCost: "¿Cuánto cuesta?",
      costText: "Es gratis empezar. Solo ganamos cuando tú lo haces...",
      learnMore: "Aprende más",
      socialMedia: "Redes Sociales",
      privacyPolicy: "Política de privacidad",
      termsOfService: "Términos de servicio",
      home: "Página de inicio",
      community: "Comunidad",
      company: "Empresa",
      about_us: "Sobre nosotros",
      how_it_works: "Cómo funciona",
      quri: "QURI",
      sign_in: "Iniciar sesión",
      terms_of_service: "Términos del servicio",
    }
  };
  
  // Función para cambiar el idioma
  function changeLanguage(lang) {
    console.log("lang", lang);

    const elementsToTranslate = document.querySelectorAll('[i18n]');

    console.log("elementsToTranslate", elementsToTranslate);

    elementsToTranslate.forEach(element => {
      const key = element.getAttribute('i18n');
      if (i18n[lang] && i18n[lang][key]) {
        element.innerText = i18n[lang][key];
      }
      if (element.getAttribute('i18n-alt') && i18n[lang] && i18n[lang][key]) {
        element.setAttribute('alt', i18n[lang][key]);
      }
    });

    // Actualiza el título de la página
    if (i18n[lang] && i18n[lang].title) {
      document.title = i18n[lang].title;
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const dropdownButton = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownButton.addEventListener('click', function (event) {
      // Toggle la visibilidad del menú
      const isExpanded = dropdownButton.getAttribute('aria-expanded') === 'true';
      dropdownButton.setAttribute('aria-expanded', !isExpanded);
      dropdownMenu.style.display = isExpanded ? 'none' : 'block';
    });

    // Cerrar el menú si se hace clic fuera del dropdown
    document.addEventListener('click', function (event) {
      if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none';
        dropdownButton.setAttribute('aria-expanded', 'false');
      }
    });

    // Agregar eventos a los botones del dropdown para cambiar el idioma
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
      button.addEventListener('click', function () {

          
          const lang = button.getAttribute('data-lang');
        changeLanguage(lang);
      });
    });
  });