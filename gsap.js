var crsr=document.querySelector(".cursor")
var blured=document.querySelector(".cursor-blur")
document.addEventListener("mousemove",function(dets) {
    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";
})

document.addEventListener("mousemove",function(dets) {
    blured.style.left=dets.x-200+"px";
    blured.style.top=dets.y-200+"px";
})
gsap.to(".navelements", {
    duration: 1,
    opacity: 1,
    y: 0,
    stagger: 0.2,
    ease: "power2.out",
    onStart: () => {
      document.querySelectorAll('.navelements').forEach(el => {
        el.classList.add('block', 'rounded-md', 'px-3', 'py-2', 'text-base', 'font-medium', 'text-gray-300', 'hover:bg-gray-700', 'hover:text-white');
      });
    }
  });
  document.querySelectorAll('.navelements').forEach(function (el) {
    // Hover effect
    el.addEventListener('mouseenter', function () {
      gsap.to(el, {
        duration: 0.1,
        scale: 0.95,
        backgroundColor: '#4A5568',
        ease: 'power1.inOut'
      });
    });

    el.addEventListener('mouseleave', function () {
      gsap.to(el, {
        duration: 0.1,
        scale: 1,
        backgroundColor: '',
        ease: 'power1.inOut'
      });
    });

    // Click effect (navigate to href)
    el.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default link behavior

      // Navigate to the link's href after a brief delay
      setTimeout(function () {
        window.location.href = el.href;
      }, 300); // Adjust delay as needed
    });
  });
gsap.to(".main",{
    backgroundColor:"#100C35",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})
