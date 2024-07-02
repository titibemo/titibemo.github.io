"use strict";

const skills = document.querySelector(".skills");
const  options = {
    threshold: 0.5
    
};

const observer1 = new IntersectionObserver(setIndicator1, options);

observer1.observe(skills);

    function setIndicator1 (entries) {

        const entry = entries[0];
   
        if ( (entry.isIntersecting && window.innerWidth > 700) ){
            entry.target.style.animationName = "apparition";
            entry.target.style.animationDuration = "3s";
            opacity();

        }
        console.log(entries);
    }

function opacity(){
    skills.style.opacity = 1;
}



    ////////////////////


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