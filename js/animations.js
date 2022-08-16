    //animation timeline thing
    $(window).ready(function(){
        inload_animation();
      })
  
      $(window).on("load", function () {
        setTimeout(function (){
          $(".preloader").fadeOut(300);
          afterload_animation();
        }, 1600);
  
      });
  
      function inload_animation() {
        gsap.from(".screen1", {
          width: "0%",
          duration: 1,
          ease: "power3.out",
        });
        gsap.from(".screen2", {
          width: "0%",
          duration: 1,
          ease: "power2.out",
          delay: 0.4,
        });
        gsap.from(".loader", {
          opacity: 0,
          duration: 0.3,
          delay: 1,
        });
      }
  
  
      function afterload_animation(){
        gsap.from(".screen3",{
            width: "0%",
            duration: 0.8,
            ease: "power2.easeInOut",
            delay: 0.8,
        })
        gsap.from(".screen4",{
            width: "0%",
            duration: 0.8,
            ease: "power3.easeInOut",
            delay: 1,
        })
        gsap.from(".name", {
          opacity:0,
          delay: 1.8,
          y: 10,
          duration: 0.5,
          ease: "power3.easeInOut"
        })
        gsap.from(".start-wrapper",{
          opacity: 0,
          delay: 1,
          duration: 0.8,
          ease: "circ2.easeInOut",
        })
        gsap.to(".name-wrapper",{
          backdropFilter: "blur(4px)",
          height: "auto",
          delay: 0.9,
          duration: 0.6,
          ease: "circ2.easeIn",
        })
        gsap.from(".profesions", {
          y: 10,
          opacity: 0,
          delay: 2,
          ease: "circ2.easeIn",
        })
        gsap.to("#canvas", {
          mixBlendMode: "difference",
          duration: 1,
        })
        gsap.from(".canv-anim", {
          opacity: 0,
          delay: 0.8,
          duration:1.2,
        })
      }