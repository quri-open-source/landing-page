document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    let slides = Array.from(track.children);

    // Clones
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    firstClone.classList.add("clone");
    lastClone.classList.add("clone");

    // Insertar clones
    track.appendChild(firstClone);
    track.insertBefore(lastClone, slides[0]);

    // Actualizar lista
    slides = Array.from(track.children);

    let currentIndex = 0;
    let slideWidth = slides[0].getBoundingClientRect().width;

    function setPosition(index) {
      slideWidth = slides[0].getBoundingClientRect().width; // Siempre recalcular
      track.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    setPosition(currentIndex);

    // Botones
    document.querySelector(".carousel-button.next").addEventListener("click", () => {
      if (currentIndex >= slides.length - 1) return;
      currentIndex++;
      track.style.transition = "transform 0.4s ease-in-out";
      setPosition(currentIndex);
    });

    document.querySelector(".carousel-button.prev").addEventListener("click", () => {
      if (currentIndex <= 0) return;
      currentIndex--;
      track.style.transition = "transform 0.4s ease-in-out";
      setPosition(currentIndex);
    });

    // Salto cuando se detecta clon
    track.addEventListener("transitionend", () => {
      if (slides[currentIndex].classList.contains("clone")) {
        track.style.transition = "none";
        if (currentIndex === slides.length - 1) {
          currentIndex = 1;
        } else if (currentIndex === 0) {
          currentIndex = slides.length - 2;
        }
        setPosition(currentIndex);
      }
    });

    // Resize
    window.addEventListener("resize", () => {
      slideWidth = slides[0].getBoundingClientRect().width;
      track.style.transition = "none";
      setPosition(currentIndex);
    });
  });
