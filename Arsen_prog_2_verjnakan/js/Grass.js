
	class Grass { 
	    constructor(x, y, tip=1) {
	       this.x=x;
	        this.y=y;
	        this.tip=tip;
	       this.multiply = 0;
	       this.directions = [
	        [this.x - 1, this.y - 1],
	        [this.x    , this.y - 1],
	        [this.x + 1, this.y - 1],
	        [this.x - 1, this.y    ],
	        [this.x + 1, this.y    ],
	        [this.x - 1, this.y + 1],
	        [this.x    , this.y + 1],
	        [this.x + 1, this.y + 1]
	    ];
	    }

	    chooseCell(character) {
		   var found = [];
		   for (var i in this.directions) {
		       var x = this.directions[i][0];
		       var y = this.directions[i][1];
		       if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
		       if (matrix[y][x] == character) {
		           found.push(this.directions[i]);
		       }
		   }
		   }
		   return found;
		}

		mul() {
		    this.multiply++;
		    var newCell = random(this.chooseCell(0));
		   
		    if (this.multiply >= 6 && newCell) {
		        var newGrass = new Grass(newCell[0], newCell[1], this.index);
		        _ArrObject[1].push(newGrass);
		        matrix[newCell[1]][newCell[0]] = 1;
		        this.multiply = 0;  
		    }
		    else if(this.multiply>6){
 				this.multiply = 0;  
		    }
		}

		new_directions_8(x,y){
    return [
        [x - 1, y - 1],
        [x    , y - 1],
        [x + 1, y - 1],
        [x - 1, y    ],
        [x + 1, y    ],
        [x - 1, y + 1],
        [x    , y + 1],
        [x + 1, y + 1]  ];
    }


    del(x=this.x,y=this.y,tip=this.tip){
    	for (var i in _ArrObject[tip]) {
  		  if (x == _ArrObject[tip][i].x && y == _ArrObject[tip][i].y) {
    		    _ArrObject[tip].splice(i, 1);
    		   break;
   		  }
		}	
		matrix[y][x] = 0;
    }

    eat(x,y,tip_del){
        matrix[this.y][this.x]=0;
        this.x=x;
        this.y=y;
    	matrix[this.y][this.x] = this.tip;

    	for (var i in _ArrObject[tip_del]) {
  		  if (x== _ArrObject[tip_del][i].x && y == _ArrObject[tip_del][i].y) {
    		    _ArrObject[tip_del].splice(i, 1);
    		   break;
   		  }
		}
    }
    mull(new_x,new_y,tip_del,object_){
   		let x=this.x,y=this.y;
   		this.eat(new_x,new_y,tip_del);
        _ArrObject[this.tip].push(object_);
        matrix[y][x]=this.tip;
   }

	}
