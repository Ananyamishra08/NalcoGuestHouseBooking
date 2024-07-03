var crsr=document.querySelector(".cursor")
var blur=document.querySelector(".cursor-blur")
document.addEventListener("mousemove",function(dets) {
    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";
})

document.addEventListener("mousemove",function(dets) {
    blur.style.left=dets.x-200+"px";
    blur.style.top=dets.y-200+"px";
})
gsap.to(".main",{
    backgroundColor:"#E6EEFE",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})
var crsr=document.querySelector(".cursor")
var blur=document.querySelector(".cursor-blur")
document.addEventListener("mousemove",function(dets) {
    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";
})

document.addEventListener("mousemove",function(dets) {
    blur.style.left=dets.x-200+"px";
    blur.style.top=dets.y-200+"px";
})
gsap.to(".main",{
    backgroundColor:"#E6EEFE",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})
