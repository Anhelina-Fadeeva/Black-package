
player = document.querySelector("audio");
source = document.querySelector("#audio source");
gameBlock = document. querySelector("#game");
score = document.querySelector("#score span");
countLifes = 3;	
paket = document.querySelector("#paket");
gameBlock = document. querySelector("#game");
endBlock = document.querySelector("#end");      
start = document. querySelector("#start button");     
startBlock = document. querySelector("#start");
bonusBlock = document. querySelector("#bonus");
soundSwich = "off";
soundButton = document.querySelector("#sound");

soundButton.onclick = function() {
	if (soundSwich == "off") {
		soundButton.children[0].src = "images/6.png";
		player.play();
		soundSwich = "on";
	} else {
		soundButton.children[0].src = "images/5.png";
		player.pause();
		soundSwich = "off";
	}
}

start.onclick = function() {
		startGame();
		createGolova2();	
		createGolova3();
	    createGolova4();
	    createGolova1();	
 }

 function startGame() {
	startBlock.style.display = "none";
	gameBlock.style.display = "block";
	paket = document.querySelector("#paket");  
}

		  
document.onkeydown = function(event) {
    if(event.keyCode == 65 && paket.offsetLeft > 1) {
       paket.style.left = paket.offsetLeft - 90 + "px"; 
    }
    if(event.keyCode == 68 && paket.offsetLeft < 1240) {
       paket.style.left = paket.offsetLeft + 90 + "px";  
    }    
 }
  
function createLifes() {
	let lifesBlock = document.querySelector("#lifes");
		lifesBlock.innerHTML = "";
	    let count = 0;
		while(count < countLifes) {
        let span = document.createElement("span");
        lifesBlock.appendChild(span);   
		count = count + 1;
	}
}

function createGolova1() {
	let golova1 = document.createElement("div");
		golova1.className = "golova type-1";
		golova1.style.left = random(100,document.querySelector("#app").clientWidth + 10) + "px";		
		golova1.style.top = golova1.offsetTop + 10 + "px";
		gameBlock.appendChild(golova1);
		moveGolova1(golova1);
	}
	
function moveGolova1(golova1) {
	let timerID = setInterval(function() {	
		golova1.style.top = golova1.offsetTop + 10 + "px"; 			
		if(golova1.offsetTop > 600) {			
		   golova1.remove();	
		   createGolova1();	
		   clearInterval(timerID);	
		}
			caput(golova1);			
	}, 60);
}

function caput(golova1) {	
	if(golova1.offsetLeft + golova1.clientWidth < paket.offsetLeft + paket.clientWidth
	   && golova1.offsetLeft > paket.offsetLeft
	   && golova1.offsetTop > paket.offsetTop) {
	   score.innerText = Number(score.innerText) + 5;
	   golova1.remove();	
      
       if (Number(score.innerText) >= 70) {
    	bonus(); 
    	} 
    	createGolova1();  
   }
}

function createGolova2() {
	let golova2 = document.createElement("div");		
		golova2.className = "golova type-2";
		golova2.style.left = random(100,document.querySelector("#app").clientWidth + 10) + "px";		
		golova2.style.top = golova2.offsetTop + 10 + "px";
		gameBlock.appendChild(golova2);
		moveGolova2(golova2);
}

g3=10;

function moveGolova2(golova2) {
	let timerIDA = setInterval(function() {	
		if (Number(score.innerText) >=0 && Number(score.innerText) < 5 ) {
			g3=10;
		}
		if (Number(score.innerText) >= 5 && Number(score.innerText) < 10 ) {
			g3=15;
		}
		if (Number(score.innerText) >= 10) {
			g3=20;
		}
		golova2.style.top = golova2.offsetTop + g3 + "px"; 			
		if(golova2.offsetTop > 600) {
		   golova2.remove();
		   createGolova2();										
		   clearInterval(timerIDA);
	}
           caput2(golova2);
  }, 150);
}

		
function caput2(golova2) {	
	if(golova2.offsetLeft + golova2.clientWidth < paket.offsetLeft + paket.clientWidth
	   && golova2.offsetLeft > paket.offsetLeft
	   && golova2.offsetTop > paket.offsetTop) {
	   score.innerText = Number(score.innerText) + 3;	
	   golova2.remove();
	  if (Number(score.innerText) >= 70) {
    	bonus();
    }	
	  createGolova2();	   
   }        
 }
  		   
function createGolova3() {
	let golova3 = document.createElement("div");		
		golova3.className = "golova type-3";
		golova3.style.left = random(100,document.querySelector("#app").clientWidth + 10) + "px";		
		golova3.style.top = golova3.offsetTop + 30 + "px";		
		gameBlock.appendChild(golova3);
		moveGolova3(golova3);
    }

 g3=10;
	
function moveGolova3(golova3) {
	let timerIDA = setInterval(function() {	
		if (Number(score.innerText) >=0 && Number(score.innerText) < 5 ) {
			g3=10;
		}
		if (Number(score.innerText) >= 5 && Number(score.innerText) < 10 ) {
			g3=15;
		}
		if (Number(score.innerText) >= 10) {
			g3=20;
		}
		golova3.style.top = golova3.offsetTop + g3 + "px"; 			
		if(golova3.offsetTop > 600) {
		   golova3.remove();
		   createGolova3();										
		   clearInterval(timerIDA);
	}
           caput3(golova3);
  }, 150);
}

function caput3(golova3) {	
	if(golova3.offsetLeft + golova3.clientWidth < paket.offsetLeft + paket.clientWidth
	   && golova3.offsetLeft > paket.offsetLeft
	   && golova3.offsetTop > paket.offsetTop) {
	   score.innerText = Number(score.innerText) + 1;	   
	 	golova3.remove();
	 	 
	   
    if (Number(score.innerText) >= 70) {
    	bonus();
   }      	
        createGolova3();	 	   
  }        
}

function createGolova4() {
	let golova4 = document.createElement("div");		
		golova4.className = "golova type-4";
		golova4.style.left = random(100,document.querySelector("#app").clientWidth + 10) + "px";		
		golova4.style.top = golova4.offsetTop + 10 + "px";		
		gameBlock.appendChild(golova4);
		moveGolova4(golova4);
	}
	
function moveGolova4(golova4) {
	let timerIDA = setInterval(function() {	
		if (Number(score.innerText) >=0 && Number(score.innerText) < 5 ) {
			g3=10;
		}
		if (Number(score.innerText) >= 5 && Number(score.innerText) < 10 ) {
			g3=15;
		}
		if (Number(score.innerText) >= 10) {
			g3=20;
		}
		golova4.style.top = golova4.offsetTop + g3 + "px"; 			
		if(golova4.offsetTop > 600) {
		   golova4.remove();
		   createGolova4();										
		   clearInterval(timerIDA);
	}
           caput4(golova4);
  }, 100);
}

function caput4(golova4) {	
	if(golova4.offsetLeft + golova4.clientWidth < paket.offsetLeft + paket.clientWidth
	   && golova4.offsetLeft > paket.offsetLeft
	   && golova4.offsetTop > paket.offsetTop) {
	   golova4.remove();	  
	   createGolova4();	
	   die(); 
	      
    }        
}

function createTank1() {
	let tank1 = document.createElement("div");
		tank1.className = "tank type-1";
		tank1.style.left = tank1.offsetLeft + 100 + "px";		
		tank1.style.top = tank1.offsetTop + 345 + "px";
		bonusBlock.appendChild(tank1);
		moveTank1(tank1);
}
	
function moveTank1(tank1) {
	let timerID = setInterval(function() {	
		tank1.style.left = tank1.offsetLeft + 10 + "px"; 			
		if(tank1.offsetLeft > 1300) {			
		   tank1.remove();	
		   createTank1();	
		   clearInterval(timerID);	
		}				
	}, 100);
}
	  

function createBoom() {
	let boom = document.createElement("div");
		boom.className = "boom type-1";
		boom.style.left = boom.offsetLeft + 100 + "px";		
		boom.style.top = boom.offsetTop + 345 + "px";
		bonusBlock.appendChild(boom);				
}

function createFire() {
	let boom2 = document.createElement("div");
		boom2.className = "boom2 type-1";
		boom2.style.left = boom2.offsetLeft + 220 + "px";		
		boom2.style.top = boom2.offsetTop + 200 + "px";
		endBlock.appendChild(boom2);			
}
	
function die() {    
    countLifes = countLifes - 1; 
   	if(countLifes <= 0) {
       endGame();    
    } else {
       createLifes();
    }
}

function bonus() {	
	let bonusBlock = document.querySelector("#bonus");
	bonusBlock.style.display = "block";
	startBlock.style.display = "none";
	gameBlock.style.display = "none";
	createTank1();
	createBoom();
let play2Button = document.querySelector("#bonus button");
	play2Button.onclick = restart;

}

function random(min, max) {
    	let rand = min - 0.5 + Math.random() * (max - min + 1);
    	return Math.round(rand); 
    }

function endGame() {
	let scoreBlock = document.querySelector("#end h3 span");
		scoreBlock.innerText = score.innerText;
		gameBlock.innerHTML = ("");

	let endBlock = document.querySelector("#end");
		endBlock.style.display = "block";
		gameBlock.style.display = "none";
		createFire();

	let restartButton = document.querySelector("#end button");
		restartButton.onclick = restart;   
} 

function restart() {
    location.reload();    	
}	



    
