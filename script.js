"use strict";

const ingredients = document.querySelector(".ingredients");
const  options = {
    threshold: 0.5
    
};

const observer1 = new IntersectionObserver(setIndicator1, options);

observer1.observe(ingredients);

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
    ingredients.style.opacity = 1;
    explications.style.opacity = 1;
}



    ////////////////////

const explications = document.querySelector(".explications");



const observer2 = new IntersectionObserver(setIndicator2, options);

observer2.observe(explications);

    function setIndicator2 (entries) {

        const entry = entries[0];
   
        if ( (entry.isIntersecting && window.innerWidth > 700)){
            entry.target.style.animationName = "apparition2";
            entry.target.style.animationDuration = "4s";
            opacity();

        } /*else entry.target.style.animationName = ""*/;
        console.log(entries);
    }
    
/////////////////////////////

let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let p = document.querySelector('.p')

btn1.addEventListener('mouseover', ()=> {
    p.textContent = "Lorsque les temps d'attentes sont très longues, notre recette se pose et regarde pour se divertir quelques series ou films (Majoritairement en anglais !)";    


})

btn2.addEventListener('mouseover', function () {
    p.textContent = "Passionné de guitare acoustique, vous pourrez admirez de temps en temps quelques mélodies interprétées pendant le temps de repos";
})


////////////// carroussel

const buttons = document.querySelectorAll(".btn");

const slides = document.querySelectorAll('.slide');

buttons.forEach((button) =>{
    button.addEventListener('click', (e) => {
        const calcNextSlide = e.target.id === "next" ? 1 : -1;
        const slideActive = document.querySelector(".active");

        let newIndex = calcNextSlide + [...slides].indexOf(slideActive);

        
        if(newIndex < 0){
            newIndex = [...slides].length - 1;
        }
        if (newIndex >= [...slides].length){
            newIndex = 0;
        } 
        
        slides[newIndex].classList.add("active")
        slideActive.classList.remove("active");
        

        
    });
});



