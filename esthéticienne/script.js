"use strict";

const arrow = document.querySelector('.arrow');
const menu = document.querySelector('.menu');

menu.addEventListener("mouseover", changeArrow);


function changeArrow(){
    if(true)
    arrow.style.color = "green";
    else   arrow.style.color = "black";
}