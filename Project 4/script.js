
var itm = document.querySelectorAll('.itms')
// var itmimg = document.querySelector('.itm img')

// console.log(itm)
itm.forEach(function (val) {
    val.addEventListener('mouseenter', function () {
        val.childNodes[3].style.opacity = 1
    })
    val.addEventListener('mouseleave', function () {
        val.childNodes[3].style.opacity = 0
    })
    val.addEventListener('mousemove', function (dtls) {
        val.childNodes[3].style.left = dtls.x + 'px'
        val.childNodes[3].style.top = dtls.y + 'px'
    })
})

// itm.addEventListener('mousemove',function(dtls){
//     itmimg.style.left = dtls.x+'px'
//     itmimg.style.top = dtls.y+'px'
// })
// itm.addEventListener('mouseenter',function(dtls){
//     itmimg.style.opacity = 1
// })
// itm.addEventListener('mouseleave',function(dtls){
//     itmimg.style.opacity = 0
// })