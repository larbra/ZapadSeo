let offset = 0
const SliderLine = document.querySelector('.slider-line')

document.querySelector('.slider-next').addEventListener('click', function(){
    offset += 500 
    if(offset > 1500) {
        offset = 0
    }
    SliderLine.style.left = -offset + 'px'
})
document.querySelector('.slider-prev').addEventListener('click', function(){
    offset -= 500 
    if(offset < 0) {
        offset = 1500
    }
    SliderLine.style.left = -offset + 'px'
})