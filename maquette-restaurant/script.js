"use strict";

/* Accordion */


const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(e) {
    e.target.classList.toggle("active");
    let panel = e.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

/* Carroussel */

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