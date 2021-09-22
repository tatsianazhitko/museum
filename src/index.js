import './scss/styles.scss';

const prev = document.getElementById('btn-left');
const next = document.getElementById('btn-right');
const slides = document.querySelectorAll('.slider-img');
const dots = document.querySelectorAll('.slider-dot');
const number = document.getElementById('slider-number');

let index = 0;

const setActiveSlide = n => {
  for (const slide of slides) {
    slide.classList.remove('active');
  }
  for (const dot of dots) {
    dot.classList.remove('active');
  }
  console.log(n);
  slides[n].classList.add('active');
  dots[n].classList.add('active');
  number.innerHTML = '0' + (n + 1);
}

const nextSlide = () => {
  console.log(index);
  if ( index == slides.length - 1) {
    index = 0;
    setActiveSlide(index);


  } else {
    index++;
    console.log(index);
    setActiveSlide(index);
  }

}

const prevSlide = () => {
  if ( index == 0) {
    index = slides.length - 1;
    setActiveSlide(index);
  } else {
    index--;
    setActiveSlide(index);
  }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

dots.forEach((element, indexDot) => {
  element.addEventListener('click', ()=>{
    index = indexDot;
    setActiveSlide(index);
  })
});
