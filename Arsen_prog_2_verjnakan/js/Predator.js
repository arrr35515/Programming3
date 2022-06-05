
class Predator {

    constructor(x,y,tip=3,noteat_lim=15,eat_mull_lim=2) {
        this.x=x;
        this.y=y;
        this.tip=tip;
        this.noteat = 0;
        this.eat_mull =0;

    }

    qayl() {
    	let newCellr;
    	if (this.chooseCell(2,false)[0]==undefined&&this.chooseCell(0,false)[0]==undefined) {
			this.noteat+=0.2;
    	}
    	else if(this.chooseCell(2,false)[0]!=undefined){
    		newCellr =this.chooseCell(2);
		    this.eat_mull++;
		    this.noteat=0;
    	}
    	else if(this.chooseCell(1,false)[0]!=undefined){
			this.noteat+=0.2;
    	}
    	else if(this.chooseCell(0,false)[0]!=undefined){
    		newCellr = this.chooseCell(0);
    		
    	 	this.noteat++;
    	}


        if (this.eat_mull>=5&&newCellr[0]!=undefined) {
            this.eat_mull=0;
            var object_=new Predator(this.x,this.y);
            this.mull(newCellr[0],newCellr[1],2,object_);
        }
        else if(this.noteat>=10){
            this.del();
        }
    	else if (newCellr!=undefined) {
    		this.eat(newCellr[0],newCellr[1],2);
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

    chooseCell(character,rand_on=true) {
         let found = [],
         directions=this.new_directions_8(this.x,this.y);

           for (var i in directions) {
               var x = directions[i][0];
               var y = directions[i][1];
               if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
               if (matrix[y][x] == character) {
                   found.push(directions[i]);
               }
           }
           }
          if (rand_on){ found=random(found); }
           return found;
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
