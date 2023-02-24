let song1;
let song2;
let song3;
let song4;
let song5;
let song6;

let button;	
let dado1;

function setup() {
	createCanvas(400, 400);	
	
	song1 = loadSound('uno.mp3');
	song2 = loadSound('dos.aac');
	song3 = loadSound('tres.mp3');
	song4 = loadSound('cuatro.aac');
	song5 = loadSound('cinco.aac');
	song6 = loadSound('seis.aac');

	boton = createButton('Pulsa para tirar el dado'); 
	boton.size(200,100); 
	boton.mousePressed(lanzar); 
	
	dado1 = new Dado(width/2, height/2, 400); 
	d1 = new Tirar(); 
	dado1.ver();
	dado1.cinco();
	
}

function lanzar(){	
	d1.tirar(); 
	
	dado1.ver(); 
	d1.ver(); 
}


class Dado { 
	
	constructor(_x, _y, _t){ 
		this.x=_x;
		this.y=_y;
		this.t=_t;
	}
	

	ver(){ 
		rectMode(CENTER); 
		noStroke(); //Sin bordes
		fill(255,229,240)
		rect(this.x, this.y, this.t, this.t, this.t/5); 
		fill(0); 
	}
	
	uno(){ 
		ellipse(this.x, this.y, this.t/4, this.t/4); 
		fill(255); 
	}
	
	dos(){ 
		ellipse(this.x/1.6, this.y/1.6, this.t/4, this.t/4);
		ellipse(this.x*1.4, this.y*1.4, this.t/4, this.t/4);
		fill(255);
	}
	
	tres(){ 
		ellipse(this.x/2, this.y/2, this.t/4, this.t/4);
		ellipse(this.x*1.5, this.y*1.5, this.t/4, this.t/4);
		ellipse(this.x, this.y, this.t/4, this.t/4);
		fill(255);
	}
	
	cuatro(){ 
		ellipse(this.x/1.6, this.y/1.6, this.t/4, this.t/4);
		ellipse(this.x*1.4, this.y/1.6, this.t/4, this.t/4);
		ellipse(this.x/1.6, this.y*1.4, this.t/4, this.t/4);
		ellipse(this.x*1.4, this.y*1.4, this.t/4, this.t/4);
		fill(255);
	}
	
	cinco(){ 
		ellipse(this.x/2, this.y/2, this.t/4, this.t/4);
		ellipse(this.x*1.5, this.y/2, this.t/4, this.t/4);
		ellipse(this.x/2, this.y*1.5, this.t/4, this.t/4);
		ellipse(this.x*1.5, this.y*1.5, this.t/4, this.t/4);
		ellipse(this.x, this.y, this.t/4, this.t/4);
		fill(255);
	}
	
	seis(){ 
		ellipse(this.x/2, this.y/2.5, this.t/4, this.t/4);
		ellipse(this.x*1.5, this.y/2.5, this.t/4, this.t/4);
		ellipse(this.x/2, this.y*1.6, this.t/4, this.t/4);
		ellipse(this.x*1.5, this.y*1.6, this.t/4, this.t/4);
		ellipse(this.x/2, this.y, this.t/4, this.t/4);
		ellipse(this.x*1.5, this.y, this.t/4, this.t/4);
		fill(255);
	}
}

class Tirar{ 
	
	constructor(){  
		this.numero=0; 
	}
	
	tirar(){ 
		this.numero=Math.floor( Math.random()*6+1); 
	}
	
	ver(){ //Creamos la funcion ver
		console.log("Has sacado un: " + this.numero); 
		
		if(this.numero===1){ 
			dado1.uno();
			song1.play();
		}
		if(this.numero===2){ 
			dado1.dos();
			song2.play();
		}
		if(this.numero===3){ 
			dado1.tres();
			song3.play();
		}
		if(this.numero===4){ 
			dado1.cuatro();
			song4.play();
		}
		if(this.numero===5){ 
			dado1.cinco();
			song5.play();
		}
		if(this.numero===6){
			dado1.seis();
			song6.play();
		}
	}
}