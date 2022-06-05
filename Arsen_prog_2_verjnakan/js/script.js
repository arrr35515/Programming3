	var matrix = [], 
	side =11,    
	_ArrObject=[0,[],[],[],0,[],0];

generator(100,50,300,40,40,50);


window.onkeypress=(event)=>{
	user.clic(event,true);
	if (event.code=="KeyX") {
		generator(100,50,300,40,40,50);
		game_on=true;
	}
	if (event.code=="KeyI") {
		 motikanal= !motikanal;
	}
	if (event.code=="KeyP") {openr();}//panely bacel ppakelu hamar

}
window.onkeyup=(event)=>{
	user.clic(event,false);

}


function setup() {
	// frameRate(1);;
	createCanvas(matrix[0].length * side, matrix.length * side);
	noStroke();	
} 


function draw() {
	 fill("#000");
	rect(0, 0,side*matrix[0].length , side*matrix.length);

	
		for(var i in _ArrObject[1]){
		       _ArrObject[1][i].mul();
		}

	  	for(var j = _ArrObject[2].length-1 ; j>=0 ;j--){
		       _ArrObject[2][j].qayl();
		}
		for(var j = _ArrObject[3].length-1 ; j>=0 ;j--){
		       _ArrObject[3][j].qayl();
		}
		for(var i in _ArrObject[5]){
		       _ArrObject[5][i].qayl();
		}
		

	user.control_klav();

	for (var y = 0; y < matrix.length; y++) {
	    for (var x = 0; x < matrix[y].length; x++) {

		    if (matrix[y][x] != 0) {
		        if (matrix[y][x] == 1) {
		            fill("green");
		        }
		        else if (matrix[y][x] == 2) {
		            fill("#FFDD00");
		        }
		        else if (matrix[y][x] == 3) {
		            fill("#AF001A");
		        }
		         else if (matrix[y][x] == 4) {
		            fill("#940088");
		        }
		        else if (matrix[y][x] == 5) {
		            fill("#B8AE9A");
		        }
		        
		         rect(x * side+.2, y * side+.2, side-.2, side-.2);
	    	}
		}
	}

}


function generator(x=100,y=50,n1=300,n2=50,n3=20,n5=0){//glxavor maricayi mej random tvyalner spami function
	
	matrix=[];
	_ArrObject=[0,[],[],[],0,[],0];
	for (let i =0;i<y;i++) {
		matrix[i]=[];
		for (let g =0;g<x;g++) {
			matrix[i][g]=0;
		}
	}

	for (let i = 0;i<n1;i++) {
		matrix[rand(0,matrix.length-1)][rand(0,matrix[0].length-1)]=1;
	}
	for (let i = 0;i<n2;i++) {
		matrix[rand(0,matrix.length-1)][rand(0,matrix[0].length-1)]=2;
	}
	for (let i = 0;i<n3;i++) {
		matrix[rand(0,matrix.length-1)][rand(0,matrix[0].length-1)]=3;
	}
	for (let i = 0;i<n5;i++) {
		matrix[rand(0,matrix.length-1)][rand(0,matrix[0].length-1)]=5;
	}
	matrix[user.y][user.x]=4;
	spam_matric_object();
}
function spam_matric_object(){
	for(let i = 0; i < matrix.length; ++i){
	   for(let j = 0; j < matrix[i].length; j++){
	       newObject(i,j);
	   }
	}
}
function del(x,y,j=0,tip){
	if (tip==undefined) {tip=matrix[y][x];}
	
    	for (var i in _ArrObject[tip]) {
  		  if (x == _ArrObject[tip][i].x && y == _ArrObject[tip][i].y) {
    		    _ArrObject[tip].splice(i, 1);
    		   break;
   		  }
		}	
		matrix[y][x] = j;
    }

function newObject(i,j){
	if(matrix[i][j] == 1){
	           let GrassNew = new Grass(j,i,1);
	           _ArrObject[1].push(GrassNew);
	       }
	       else if(matrix[i][j] == 2){
	       		let GrassEaterNew = new GrassEater(j,i,2);
	           _ArrObject[2].push(GrassEaterNew);
	       }
	       else if(matrix[i][j] == 3){
	       		let PredatorNew = new Predator(j,i,3);
	       		_ArrObject[3].push(PredatorNew);
	       }
	        else if(matrix[i][j] == 5){
	       		let newSvin = new Svin(j,i,5);
	       		_ArrObject[5].push(newSvin);
	       }	
	       else if(matrix[i][j] == 7){
	       		let newNeyronr = new neyron(j,i,7);
	       		_ArrObject[7].push(newNeyronr);
	       }	
}
function rand(min, max) {
	return Math.round((max - min) * Math.random()) + min;
}
