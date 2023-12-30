
let typeSplit = new SplitType('[animate]', {
  types: 'lines, words, chars',
  tagName: 'span'
})
gsap.from('[animate] .word', {
	y: '100%',
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  ease: 'power1.out',
})
gsap.from('.btn', {
  opacity:0,
  y:'-150%',
  duration:3
})
gsap.from('.imgCont', {
  opacity:0,
  x:'80%',
  duration:2,
})
gsap.from('.back', {
  opacity:0,
  x:'50%',
  delay:1
})
gsap.from("nav", {
  opacity:0,
  y:'-50%',
  duration:1,
})

  var sideBar = document.querySelector('.sideBar');
  var close = document.querySelector(".close");
function togglesideBar() {
  sideBar.style.visibility = (sideBar.style.visibility === "visible") ? "hidden" : "visible";
  sideBar.style.transform = (sideBar.style.transform === "translateX(0%)") ? "translateX(-100%)" : "translateX(0%)";
}


var menu = document.querySelector(".menu");
    menu.addEventListener("click", function(){
        gsap.from(".menuItems li",{
           x: '-80%',
           duration: 0.5,
           stagger: 0.1,
           ease: 'power1.in',
        })
    })