"use strict";


//------------------ intersection observer


const services = document.querySelector(".services");
const jsProducts = document.querySelector(".jsProducts");
const products = document.querySelector(".products");
const options = {
    threshold: 0.5
};

const observerRealisation = new IntersectionObserver(setIndicator1, options);
const observerProducts = new IntersectionObserver(setIndicator2, options);

observerRealisation.observe(services);

    function setIndicator1 (entries) {

        const entry = entries[0];
   
        if ( (entry.isIntersecting && window.innerWidth > 700) ){
            entry.target.style.animationName = "apparition";
            entry.target.style.animationDuration = "3s";
        }
        console.log(entries);
    }

function opacity(){
    services.style.opacity = 1;
}

observerProducts.observe(jsProducts);

    function setIndicator2 (entries) {

        const entry = entries[0];
   
        if ( (entry.isIntersecting && window.innerWidth > 700) ){
          products.style.opacity = "1";
          products.style.animationName = "apparition2";
          products.style.animationDuration = "3s";
        }
        console.log(entries);
    }


//-----------Slider


const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const leftArrow = document.getElementById("left-arrow")
const rightArrow = document.getElementById("right-arrow")
let index = 0;
let a = 1;
let b = -1

leftArrow.addEventListener("click", prevSlide);
rightArrow.addEventListener("click", nextSlide);


function prevSlide(){
  index-= 1;
  changeSlidePrev();
}

function nextSlide(){
  index+= 1;
  changeSlideNext();
}


function changeSlidePrev(){
  
  if(index>slides.length-1)
    index=0;
  
  if(index<0)
    index=slides.length-1;
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
    slides[i].style.animationName = "fadePrev";
    slides[i].style.animationDuration = "1s";
    dots[i].classList.remove("active");
  }
  
  slides[index].style.display = "block";
  dots[index].classList.add("active");
}

function changeSlideNext(){
  
  if(index>slides.length-1)
    index=0;
  
  if(index<0)
    index=slides.length-1;
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
    slides[i].style.animationName = "fadeNext";
    slides[i].style.animationDuration = "1s";
    dots[i].classList.remove("active");
  }
  
  slides[index].style.display = "block";
  dots[index].classList.add("active");
}

changeSlideNext();

// -------------------------------- Parralax --------------------------------
let currentX;
let currentY;
const header = document.querySelector('.header');
const title = document.querySelector('.title');


header.addEventListener("mousemove", moveEffect)

function moveEffect(e){

  console.log(e);
  
    
  currentX = window.innerWidth - e.pageX;
  currentY = window.innerWidth - e.pageY;
  
  title.style.transition = ".1s";
  title.style.top = -currentY/20 + 30 + "px";
  title.style.left = -currentX/20 + 30 + "px";
    
}