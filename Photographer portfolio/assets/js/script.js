'use strict';



//add Event on multiple element

const addEventOnElements = function(elements, eventType,callback){
    for(let i=0; i<elements.length; i++){
        elements[i].addEventLiistener(eventType, callback);
    }
}



//PRELOADING

const loadingElement = document.querySelector("[data-loading]");

window.addEventListener("load", function(){
    loadingElement.classList.add("loaded");
    document.body.classList.remove("active");
    
});


//mobile nav toggle

const [navTogglers, navLinks, navbar, overlay] = [
    document.querySelectorAll("[data-nav-toggler]"),
    document.querySelectorAll("[data-nav-link]"),
    document.querySelector("[data-navbar]"),
    document.querySelector("[data-overlay]")
]; 

  const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");
  }

  addEventOnElements(navToggles, "click", toggleNav);

  const closeNav=function(){
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("active");
  }

  addEventOnElements(navLinks,"click", closeNav);



  // HEADER

  const header = document.querySelector("[data-header]");

  const activeElementOnScroll = function(){
    if(window.scrollY > 50)
{
header.classList.add("active");
}  else{
   header.classList.remove() 
}
}
window.addEventListener("scroll",activeElementOnScroll); 




// Text animation effect for hero section


const letterBoxes = document.querySelectorAll("[data-letter-effect]");

let activeLetterBoxIndex = 0;
let lastActiveLetterBoxIndex = 0;
let totalLetterBoxDelay = 0;

const setLetterEffect = function() {
  //loop through all letter boxes
  for(let i=0; i<letterBoxes.length; i++){
    //set animation delay
    let letterAnimationDelay = 0;

    //get all the character from the current letter box
    const letters=letterBoxes[i].textContent.trim();
    //remove all character from the current letter box
    letterBoxes[i].textContent="";

    //loop through all letters
    for(let j=0; j<letters.length; j++){

      //create a span
      const span = document.createElement("span");

      //set animation delay on span             53:18 ended
  }
}

}