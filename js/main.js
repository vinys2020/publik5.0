document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Añadir la clase "slide-up" para la animación hacia arriba
          entry.target.classList.add("loaded", "slide-up");
          observer.unobserve(entry.target);
        }
      });
    });

    // Observar todos los elementos con la clase "slide-up"
    const slideUpElements = document.querySelectorAll(".slide-up");
    slideUpElements.forEach(element => {
      observer.observe(element);
    });
  });


  function scrollToTop() {
    window.scrollTo({
        top: 0,
    });
}



window.addEventListener('scroll', function () {
    var scrollTopButton = document.querySelector('.scroll-top');
    if (this.window.pageYOffset > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});




var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 4500, // Cambiar cada 5 segundos (5000 milisegundos)
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,    
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'slide',
  speed: 800,
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper('.mySwiper2', {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true, // Habilitar el bucle continuo
  autoplay: {
    delay: 500, // Retraso de 5 segundos entre transiciones (puedes ajustar según sea necesario)
    disableOnInteraction: false, // No detener el autoplay al interactuar manualmente
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,    
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'slide',
  speed: 1200,
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper('.mySwiper3', {
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false, 

  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,    
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'slide',
  speed: 800,
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

  