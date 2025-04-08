const bird = document.getElementById('bird');
const pipesContainer = document.getElementById('pipes');

let birdY = 250;
let gravity = 2;
let isJumping = false;

document.addEventListener('keydown', () => {
  birdY -= 50;
  if (birdY < 0) birdY = 0;
});

function generatePipes() {
  const pipeTop = document.createElement('img');
  pipeTop.src = 'assets/pipe-top.png';
  pipeTop.classList.add('pipe', 'pipe-top');

  const pipeBottom = document.createElement('img');
  pipeBottom.src = 'assets/pipe-bottom.png';
  pipeBottom.classList.add('pipe', 'pipe-bottom');

  let gap = 150;
  let topHeight = Math.floor(Math.random() * 200) + 50;
  let bottomHeight = 600 - topHeight - gap;

  pipeTop.style.height = topHeight + 'px';
  pipeTop.style.left = '400px';

  pipeBottom.style.height = bottomHeight + 'px';
  pipeBottom.style.left = '400px';

  pipesContainer.appendChild(pipeTop);
  pipesContainer.appendChild(pipeBottom);

  let pipeX = 400;

  const move = setInterval(() => {
    pipeX -= 2;
    pipeTop.style.left = pipeX + 'px';
    pipeBottom.style.left = pipeX + 'px';

    if (pipeX < -60) {
      clearInterval(move);
      pipesContainer.removeChild(pipeTop);
      pipesContainer.removeChild(pipeBottom);
    }
  }, 20);
}

setInterval(() => {
  birdY += gravity;
  if (birdY > 560) birdY = 560;
  bird.style.top = birdY + 'px';
}, 20);

setInterval(generatePipes, 2000);
