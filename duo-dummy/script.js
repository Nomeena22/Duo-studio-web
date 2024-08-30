function loco(){ 
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco();
var crsr = document.querySelector(".cursor");
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
      crsr.style.left = dets.x -15 + "px";
      crsr.style.top = dets.y -15 + "px";
})

var headings = document.querySelectorAll("#nav-center>h4");
var purple1 = document.querySelector("#purple>#purple-inn-1");
var purple2 = document.querySelector("#purple>#purple-inn-2");
var purple3 = document.querySelector("#purple>#purple-inn-3")
var purple = document.querySelector("#purple")
headings.forEach(function(dets){
  if(dets.textContent == "Work"){
    dets.addEventListener("mouseenter",function(){
      purple.style.display = "flex";
      purple1.style.display= "flex";
    })
    dets.addEventListener("mouseleave",function(){
      purple.style.display = "none";
      purple1.style.display = "none";
    })
  }
  else if (dets.textContent == "Studio"){
    dets.addEventListener("mouseenter",function(){
      purple.style.display = "flex";
      purple2.style.display= "flex";
    })
    dets.addEventListener("mouseleave",function(){
      purple.style.display = "none";
      purple2.style.display = "none";
    })
  } 
  else{
    dets.addEventListener("mouseenter",function(){
      purple.style.display = "flex";
      purple3.style.display= "flex";
    })
    dets.addEventListener("mouseleave",function(){
      purple.style.display = "none";
      purple3.style.display = "none";
    })
  }
})


var video = document.querySelector("#page1>video")


video.addEventListener("mouseenter",function(){
  crsr.textContent = "sounds on";
  crsr.style.width = "100px";
  crsr.style.height= "20px";
  crsr.style.borderRadius = "50px";
  crsr.style.textAlign = "center";
  crsr.style.mixBlendMode = "normal"
  crsr.style.paddingTop = "2px"
  crsr.style.color = "black"
  });
let flag = 0;
video.addEventListener("click",function(){
  if (flag==0){
    video.muted = !video.muted;
    crsr.textContent = "sounds off";
    flag = 1; 
  }
  else {
    video.muted = !video.muted;
    crsr.textContent = "sounds on";
    flag = 0; 
  }
  
})
video.addEventListener("mouseleave",function(){
  crsr.textContent = "";
  crsr.style = "none";
  
})
var tl = gsap.timeline({
  scrollTrigger:{
    trigger:"#page1 h1",
    scroller: ".main",
    start:"top 35%",
    end:"top 0",
    scrub:3
  }
})

tl.to("#page1 h1",{
  x:-100,
  
},"a")
tl.to("#page1 h2",{
  x:100,
  
  },"a"
)

tl.to("#page1>video",{
  width: "95%",
},"a")

var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page1 h1 ",
    scroller: ".main",
    start:"top -120%%",
    end:"top -130%",
    scrub:3
  }
})
tl2.to(".main",{
  backgroundColor: "#fff",
})


var cards = document.querySelectorAll("#page3>.pg3-cards");
cards.forEach(function(dets){
  dets.addEventListener("mouseenter",function(){
    crsr.textContent = "View";
    crsr.style.width = "70px";
    crsr.style.height= "25px";
    crsr.style.borderRadius = "50px";
    crsr.style.textAlign = "center";
    crsr.style.paddingTop = "5px";
    crsr.style.color = "black";
  
});
dets.addEventListener("mouseleave",function(){
    crsr.textContent = "";
    crsr.style = "none";
    
  });
});
gsap.to("#page4",{
  backgroundColor:"#0F0D0D",
  scrollTrigger:{
    trigger:"#page4",
    scroller: ".main",
    start:"top top",
    end:"top 1%",
    scrub:3
  }
})

var boxes = document.querySelectorAll(".box");

boxes.forEach(function(dets){
  
  dets.addEventListener("mouseenter",function(){    
    var pic = dets.getAttribute("data-image");
    crsr.style.width = "300px";
    crsr.style.height = "300px";
    crsr.style.borderRadius = "0";
    crsr.style.backgroundImage = `url(${pic})`
    crsr.style.zIndex = "99"
  })

  dets.addEventListener("mouseleave",function(){
    crsr.style.width = "20px";
    crsr.style.height = "20px";
    crsr.style.borderRadius = "50%";
    crsr.style.backgroundImage = "none"
    crsr.style.zIndex = "9"
  })
})

var movediv= document.querySelector(".footer-top-right-inn");
movediv.addEventListener("mousemove",function(dets){
  movediv.style.left = dets.x*0.2 +"px";
  movediv.style.top = dets.y*0.2 +"px";

})
movediv.addEventListener("mouseleave",function(dets){
  movediv.style.justifyContent = "center";
  movediv.style.alignItems = "center";
})
