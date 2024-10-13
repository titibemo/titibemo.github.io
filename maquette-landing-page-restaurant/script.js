"use strict";

// -------------------------------- Parralax --------------------------------
let currentX;
let currentY;
const header = document.querySelector('.header');
const title = document.querySelector('.title');

header.addEventListener("mousemove", moveEffect)

function moveEffect(e){
    
  currentX = window.innerWidth - e.pageX;
  currentY = window.innerWidth - e.pageY;
  
  title.style.transition = ".1s";
  title.style.top = -currentY/20 + 30 + "px";
  title.style.left = -currentX/20 + 30 + "px";
    
}

// -------------------------------- button discover --------------------------------

const linkDiscover = document.querySelector('.discover');

function animationButton(){

  linkDiscover.classList.add("myAnim");
  linkDiscover.style.animation = "myAnim 4s ease 0s 1 normal forwards";

}

animationButton()

// -------------------------------- Section Observer --------------------------------

const description = document.querySelector('.description');
const options = {
  threshold: 0.3
};


const observerRealisation = new IntersectionObserver(setIndicator1, options);

observerRealisation.observe(description);

description.style.opacity = "0";
description.style.transform = "scale(0.2)";

function setIndicator1 (entries) {
  
  const entry = entries[0];
  
  if ( (entry.isIntersecting) ){
    description.style.transition = "5s"
    description.style.opacity = "1";
    description.style.transform = "scale(1)";
  }
  
}


// -------------------------------- I wanna Stage --------------------------------


const cry = document.querySelector('.cry');

document.addEventListener('mousemove', function(e){
  cry.style.position = "absolute";
  cry.style.transform = 'translateY('+(e.clientY-150)+'px)';
  cry.style.transform += 'translateX('+(e.clientX-150)+'px)';            
},false);

// -------------------------------- I wanna Stage --------------------------------

const catchMe = document.querySelector('.catchMe');
catchMe.style.position = "absolute";

catchMe.addEventListener("mouseover", changePosition);

function changePosition(){
  let rand1 = Math.floor(Math.random() * 500)
  let rand2 = Math.floor(Math.random() * 100)
  let rand3 = Math.floor(Math.random() * 100)
  let rand4 = Math.floor(Math.random() * 100)
  catchMe.style.top = `${rand1}`+"px"
  catchMe.style.right = `${rand2}`+"px"
  catchMe.style.left = `${rand3}`+"px"
  catchMe.style.bottom = `${rand3}`+"px"
}



