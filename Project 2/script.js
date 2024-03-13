var bx = document.querySelector(".box")
var icn= document.querySelector("i")

bx.addEventListener('dblclick',function(){
    icn.style.transform = 'translate(-50%, -50%) scale(1)'
    icn.style.opacity=.7
    setTimeout(function(){
        icn.style.opacity=0
        }, 1000)
    setTimeout(function(){
    icn.style.transform = 'translate(-50%, -50%) scale(0)'
    }, 2000)
})