const image = document.getElementById('smiley');
let animation = requestAnimationFrame(moveDown); 
let position = 0;

function moveDown(){
	animation = requestAnimationFrame(moveDown);
	image.style.position = "relative";
	if (position < screen.height){
		position += 1
		image.style.top = position + 'px';
	}
	else{
		position = -200;
	}
}

function pause(){
	image.style.animationPlayState = "paused";
	cancelAnimationFrame(animation);
	
}

function play(){
	image.style.animationPlayState = "running";
	cancelAnimationFrame(animation);
	animation = requestAnimationFrame(moveDown);
}

document.getElementById("stop").addEventListener('click', pause); 
document.getElementById("go").addEventListener('click', play);