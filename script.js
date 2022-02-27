var toggleButton = document.getElementsByClassName('toggle_button')[0]
var navbarLinks = document.getElementsByClassName('navbar_links')[0]
var ContactButton= document.getElementsByClassName('Contact_b')[0]

toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active')
    
})

// Wrap every letter in a span
var textWrapper = document.querySelector('.moving .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.moving .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.moving .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.moving',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });