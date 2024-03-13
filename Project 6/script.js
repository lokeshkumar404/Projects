var rct = document.querySelector('.container');

rct.addEventListener('mousemove', function (dtls) {
    var rctlocation = rct.getBoundingClientRect();
    var instderctval = dtls.clientX - rctlocation.left;

    if (instderctval < rctlocation.width / 2) {
        var redcolor = gsap.utils.mapRange(0, rctlocation.width / 2, 255, 0, instderctval);
        gsap.to(rct,{
            backgroundColor: `rgb(${redcolor},0,0)`,
            ease: Power4,
        });
    }
    else {
        var bluecolor = gsap.utils.mapRange(rctlocation.width/2, rctlocation.width , 0, 255, instderctval);
        gsap.to(rct,{
            backgroundColor: `rgb(0,0,${bluecolor})`,
            ease: Power4,
        });
    }
})
rct.addEventListener('mouseleave',function(){
    gsap.to(rct,{
        backgroundColor: 'white'
    })
})