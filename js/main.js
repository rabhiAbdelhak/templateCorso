window.onload = () => {
    
// display and hide the menu on mobile screen or desktop

//select the toggle button
let toggleButton = document.querySelector('header .toggle-button');
// select the menu nav
let menu = document.querySelector('.nav');


function toggleMenu(e){
    e.stopPropagation();
    menu.classList.toggle('open');
}


toggleButton.addEventListener('click', toggleMenu)


// slider building
let images = ['images/details-slide-1.jpg', 'images/details-slide-2.jpg', 'images/details-slide-3.jpg'];
// Select the img container 
let img = document.querySelector('.slider .image-container img')
let currentIndex = 0;

let sliderInterval = setInterval(() => {
    currentIndex++;
    img.src = `${images[currentIndex % images.length]}`;

}, 3000);

// a function to be excuted when clicking in one of the next and previous btns
function nextOrPreviousImage(e){
    e.stopPropagation();
    // If the next-button is the clicked btn we should show the next image 
    if(e.target.classList.contains('next-image')){
        currentIndex++;
        img.src = `${images[currentIndex % images.length]}`;
        // else if the previous btn is the clicked one, then we should show the previous image
    }else if(e.target.classList.contains('previous-image')){
        currentIndex--;
        img.src = `${images[currentIndex % images.length]}`;
    }
}

let nextPreviousButtons = document.querySelectorAll('.slider span i');
console.log(nextPreviousButtons)
nextPreviousButtons.forEach(btn => {
    btn.addEventListener('click' , nextOrPreviousImage);
});


// Function to check if an input is done or not 
function checkInput(input){
     let checkboxValid;
     let inputsValid;

     if(input.value == ''){
         input.parentElement.querySelector('.error').style.display = 'block';
         console.log(input.type)
         inputsValid = false;
     }else {
         inputsValid = true
     }

     if(input.type == 'checkbox' && input.checked == false){
        document.querySelector('.error-check').style.display = 'block';
        checkboxValid = false;
     }else {
         checkboxValid = true;
     }
     
     return checkboxValid && inputsValid;

}

// get All inputs of the form 
let inputs = document.querySelectorAll('.register > form input');
// Select the form
let form = document.querySelector('.register form');
let form2 = document.querySelector('.subscribe form');

// on submit the form we check all the input values 
form.addEventListener('submit', (e) => {
    let inputs2 = document.querySelectorAll('.subscribe form input')
     e.preventDefault();
     inputs2.forEach(input => {
         if(!checkInput(input)){
             console.log('%c Somthing went wrong!', 'color: red;')
         }else{
             console.log('%c Form OK !', 'color: green;')
         }
     })
})


// Hide the error message when focus on his input
inputs.forEach(input => {
    
    if(input.type != 'checkbox'){
        input.addEventListener('focus', (e) => {
            e.target.parentElement.querySelector('.error').style.display = 'none';
        } );
    }

    if(input.type == 'checkbox'){
        input.addEventListener('click', (e) => {
              document.querySelector('.error-check').style.display ='none';
        })
    }
})


// Show the light box when click

// select the button fromthe information box
let LightBoxButton = document.querySelector('.requirements .content .informations button');


// show the light box 
function ShowLightBox(e) {
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.model').style.display = 'flex';
}

// Hide the lightBox
function closeModal(e){
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.model').style.display = 'none';
}



LightBoxButton.addEventListener('click', ShowLightBox);


function scrollToSection(e) {
    e.stopPropagation()
    e.preventDefault();
    document.querySelector('.'+ e.target.dataset.section).scrollIntoView({
        behavior: "smooth"
    });
}

// testimonials slider 

// select the slider-inner
let sliderInner = document.querySelector('.testimonials .content .slider-inner');

// get all testimonials 
let testimonials = document.querySelectorAll('.testimonials .content .slider-inner .box');
console.log(testimonials);
let currentTest = 0;

// renistialize the slider-inner 
sliderInner.innerHTML = '';
sliderInner.appendChild(testimonials[0]);

// function to go next or go previous standing on the clicked btn
function nextOrPrevious(){
    if(this.classList.contains('next-test')){
        currentTest++;
        sliderInner.innerHTML = '';
        sliderInner.appendChild(testimonials[currentTest % testimonials.length]);
    }else if(this.classList.contains('previous-test')){
        currentTest--;
        sliderInner.innerHTML = '';
        sliderInner.appendChild(testimonials[currentTest % testimonials.length]);
    }
}

// select next and previous buttons 
let nextPreviousBtn = document.querySelectorAll('.testimonials .content span');
nextPreviousBtn.forEach(btn => {
    btn.addEventListener('click', nextOrPrevious);
})






// goto register button
// select the button 
let goRegisterBtns = document.querySelectorAll('.go-section');

goRegisterBtns.forEach(btn => {
    btn.addEventListener('click', scrollToSection);
})

// close the modal
let BackBtnModal = document.querySelector('.model .informations .back');
BackBtnModal.addEventListener('click', closeModal);


// onscroll events
// / Get the header and calculate his bottom
let header = document.querySelector('header');
let headerBottom = header.offsetHeight + header.offsetTop;
let goTopBtn = document.querySelector('.go-top');

window.addEventListener('scroll' , (e) => {
    if(window.scrollY >= headerBottom){
        goTopBtn.style.transform = 'translateY(0px)';
        header.classList.add('onscroll');
    }else{
        goTopBtn.style.transform = 'translateY(50px)';
        header.classList.remove('onscroll');
    }  
})


}