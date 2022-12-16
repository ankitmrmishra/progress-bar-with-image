const container = document.getElementsByClassName('container')
const containerCircle = document.getElementsByClassName('circles')
const progressBar = document.getElementById('progress')
const steps = document.querySelectorAll('.progress1')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const images = document.getElementById('imgs')

let count = 1 ;


    next.addEventListener('click', () => {
        count++ ;
        

        if(count > steps.length){
            count = steps.length
        }
        images.src = `images/photo-${count}.jpg`
        stepAhead()
    })

      prev.addEventListener('click', () => {
        count-- ;
        

        if(count < 1){
            count = 1
        }
        images.src = `images/photo-${count}.jpg`
        stepAhead()
    })

 function stepAhead(){
    steps.forEach((circle, i) => {
if(i <  count){
    circle.classList.add('active')
}
else{
    circle.classList.remove('active')
}

const activeClasses = document.querySelectorAll('.active')

progressBar.style.width = (activeClasses.length - 1) / (steps.length - 1) * 100 + "%"
        
if(count <= 1){
    prev.disabled = true
}
else if(count >= steps.length){
    next.disabled = true 
}
else {
    prev.disabled = false
    next.disabled = false 
}
    });



 }
 
