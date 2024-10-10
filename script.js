var crsr = document.querySelector("#cursor")
var crsrBlur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){
        crsr.style.left = dets.x - 10 + "px"
        crsr.style.top = dets.y - 10 + "px"
        crsrBlur.style.left = dets.x - 150 + "px"
        crsrBlur.style.top = dets.y - 150 + "px"
        
})

let h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3;
        crsr.style.border = "0.5px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E "
    })
})

gsap.to("#nav", {
    backgroundColor : "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end: "top -11%",
        scrub:1,
        
    }
    
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        markers:true,
        start: "top -25%",
        end: "top -70%",
        scrub: 1.8
    }
})
gsap.from("#aboutus img, #about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        // markers: true,
        start:"top 70% ",
        end: "top 65%",
        scrub: 1
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers: true,
        start:"top 70% ",
        end: "top 65%",
        scrub: 1
    }
})

gsap.from("#colon-1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon-1",
        scroller:"body",
        markers: false,
        start: "top 50%",
        end:"top 45%",
        scrub: 4
    }
})

gsap.from("#colon-2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon-1",
        scroller:"body",
        // markers: true,
        start: "top 50%",
        end:"top 45%",
        scrub: 4
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers: true,
        start: "top 75%",
        end:"top 70%",
        scrub: 4
    }
    

})




