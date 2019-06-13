// Part 1

const smiley = document.querySelector('#smiley');
function mousePosition(event) {
  let xPos = event.clientX; 
  let yPos = event.clientY; 

  updatePosition(xPos, yPos);
}

function updatePosition(xPos, yPos) {
  let xMove = (xPos - 5);  
  let yMove = (yPos - 5); 

  smiley.style.left = xMove + 'px';
  smiley.style.top = yMove + 'px';
}

function pause(){
	image.style.animationPlayState = "paused";
	cancelAnimationFrame(animation);
	
}

window.addEventListener('mousemove', mousePosition);
window.addEventListener("click", pause);





