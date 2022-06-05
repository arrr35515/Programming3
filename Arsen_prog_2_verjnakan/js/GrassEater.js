
class GrassEater {

    constructor(x,y,tip=2,noteat_lim=5,eat_mull_lim=5) {
        this.x=x;
        this.y=y;
        this.tip=tip;
        this.noteat = 0;
        this.eat_mull =0;
    }

    qayl() {
    	let newCellr;

    	if (this.chooseCell(1,true)==undefined) {
    		newCellr =this.chooseCell(0,true);
    		this.eat_mull=0;
    		this.noteat++;
    	}
    	else{
    		 newCellr =this.chooseCell(1,true);
    		 this.eat_mull++;
    		 this.noteat=0;
    	}

        if (this.eat_mull>=4) {
            this.eat_mull=0;
            var object_=new GrassEater(this.x,this.y);

            this.mull(newCellr[0],newCellr[1],1,object_);
        }
        else if(this.noteat>=50){
            this.del();
        }
    	else if (newCellr!=undefined) {
    		this.eat(newCellr[0],newCellr[1],1);
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
