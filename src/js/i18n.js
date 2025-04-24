const i18n = {
    es,
    en
}
  
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