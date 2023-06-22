/*Menu Hamburguesa*/
const boton = document.querySelector('#boton');
const menu = document.querySelector('#menu');

boton.addEventListener('click', () => {
    console.log('click')
    menu.classList.toggle('hidden')
})


/*BOTONES DE NEVEGACION*/
const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.carousel-slide');
const indicatorsContainer = document.querySelector('.carousel-indicators');

let currentSlide = 0;

// Create indicators
slides.forEach((slide, index) => {
  const button = document.createElement('button');
  button.addEventListener('click', () => {
    goToSlide(index);
  });
  indicatorsContainer.appendChild(button);
});

// Set first slide as active
slides[currentSlide].classList.add('active');
indicatorsContainer.children[currentSlide].classList.add('active');

function goToSlide(index) {
  if (index < 0 || index >= slides.length) return;

  slides[currentSlide].classList.remove('active');
  indicatorsContainer.children[currentSlide].classList.remove('active');

  slides[index].classList.add('active');
  indicatorsContainer.children[index].classList.add('active');

  currentSlide = index;
};

// Automatic slide change
setInterval(() => {
  let index = currentSlide + 1;
  if (index >= slides.length) {
    index = 0;
  }
  goToSlide(index);
}, 5000);



