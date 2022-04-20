const animatedGif = document.getElementById('animated-gif');
const catGif = document.getElementById('cat-gif');

document.addEventListener ('keydown', function(event) {
    jump();
});
function jump () {
  if (animatedGif.classList !='jump') {
    animatedGif.classList.add('jump')
  }
  setTimeout(function() {
   animatedGif.classList.remove('jump')
  }, 300)
}
let isAlive = setInterval (function() {
    let animatedGifTop = parseInt(window.getComputedStyle(animatedGif).getPropertyValue('top'));
    let catGifLeft = parseInt(window.getComputedStyle(catGif).getPropertyValue('left'));
    if (catGifLeft < 50 && catGifLeft > 0 && animatedGifTop >= 140) {
        alert ('Game Over!');
    }
}, 10);

