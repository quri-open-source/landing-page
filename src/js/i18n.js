const i18n = {
    es,
    en
}
  
  // Función para cambiar el idioma
  function changeLanguage(lang) {
    console.log("lang", lang);
    localStorage.setItem('language', lang);

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
    // Selecciona todos los botones del menú desplegable
    const dropdownButtons = document.querySelectorAll('.dropdown-toggle');
    
    // Itera sobre cada botón para agregar el evento de clic
    dropdownButtons.forEach((dropdownButton) => {
      const dropdownMenu = dropdownButton.nextElementSibling; // El <ul> que contiene las opciones del idioma
  
      // Evento para abrir o cerrar el menú
      dropdownButton.addEventListener('click', function (event) {
        const isExpanded = dropdownButton.getAttribute('aria-expanded') === 'true';
        dropdownButton.setAttribute('aria-expanded', !isExpanded);
        dropdownMenu.style.display = isExpanded ? 'none' : 'block';
      });
  
      // Cerrar el menú si se hace clic fuera de él
      document.addEventListener('click', function (event) {
        if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
          dropdownMenu.style.display = 'none';
          dropdownButton.setAttribute('aria-expanded', 'false');
        }
      });
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
  

  function loadLanguage() {
    const lang = localStorage.getItem('language');
    if (lang) {
      changeLanguage(lang);
    }
  }

  loadLanguage();