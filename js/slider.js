
let slider = document.querySelector('.slider')
let sliderInner = document.querySelector('.slider-inner');

let pressed = false;
let startX, x;
console.dir(sliderInner);
slider.addEventListener('click', (e) => {
     pressed =true;
     startX = e.offsetX - sliderInner.offsetLeft;
     slider.style.cursor = 'grabbing';
     console.log(startX, sliderInner.offsetLeft)
});

slider.addEventListener('mouseenter', (e)=> {
    slider.style.cursor= 'grab';
    console.log('I entered')
});

slider.addEventListener('mouseleave', (e)=> {
    pressed= false;
});

slider.addEventListener('mouseup', (e) => {
    pressed = false;
});


window.addEventListener('mouseup', (e)=> {
    pressed =false;
})
slider.addEventListener('mousemove', (e)=> {
    if(!pressed) return;
    e.preventDefault();
    console.log('I am moving')
    x = e.offsetX - startX;
    sliderInner.style.left = `${x}px`;
    checkBounding();
});

function checkBounding() {
    console.log('I am checking it'+ sliderInner.style.left)
    if(parseInt(sliderInner.style.left) > 0 ){
        sliderInner.style.left = 0;
    }
    
    if(sliderInner.offsetRight > 0) {
        
    }

    if(sliderInner.getBoundingClientRect().right < slider.getBoundingClientRect().right){
        sliderInner.style.left = `${-slider.offsetWidth}px` ;
    }
}