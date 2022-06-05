var  motikanal=true;

//=======parametri========
var 
rejim="Low",
energi_smerti=-8,
energi_mull=1,

energi_angorcutyan   =  -0.01 ,
energi_sharjum_azat  =  -0.02 ,
energi_kananch       =  -0.2  ,
energi_dexiny        =  2     ;


//========================

class Svin {
	constructor(x=10, y=10,tip=5) {
        this.x=x;
        this.y=y;
        this.tip=tip;
		this.usX=user.x;
		this.usY=user.y;
		this.zagerjka=2;
		this.matrix_lengt_y=matrix.length;
		this.matrix_lengt_x=matrix[0].length;
        this.energi=0;
	}
	 new_directions_8(x,y){
    return [
    	[x    , y    ],
        [x - 1, y - 1],
        [x    , y - 1],
        [x + 1, y - 1],
        [x - 1, y    ],
        [x + 1, y    ],
        [x - 1, y + 1],
        [x    , y + 1],
        [x + 1, y + 1]  ]
    }
    kord_heravorutyun(x,y,x1,y1){
    	return Math.sqrt((x-x1)**2+(y-y1)**2);
    }


    chooseCell(){
    	let kord_qayli=[] , her_dur;
let her;
    	for (var i of this.new_directions_8(this.x,this.y)) {

    		if(i[0]>=0&&i[1]>=0&&i[0]<this.matrix_lengt_x&&i[1]<this.matrix_lengt_y){
                if (matrix[i[1]][i[0]]==2&&rejim=="Low") {
                    return i;
                }
    			 her=this.kord_heravorutyun(i[0],i[1],this.usX,this.usY);


    			if (her>=1&&matrix[i[1]][i[0]]!=5&&matrix[i[1]][i[0]]!=6||her>=1&&i[1]==this.y&&i[0]==this.x) {
	    			

			    	if(kord_qayli[0]==undefined){
			    		kord_qayli=i; her_dur=her; continue;
			    	}
			
                    if (motikanal) {
			    	if (her<her_dur) {kord_qayli=i;her_dur=her;}
                    }
                    if (!motikanal) {
                    if (her>her_dur) {kord_qayli=i;her_dur=her;}
                    }
				}

	    	}
    	}
    	
    	if(kord_qayli[0]!=undefined){
    	return kord_qayli;}
    }
    qayl(){
    	if (this.zagerjka<=0) {
        	this.usX=user.x;
    		this.usY=user.y;
        	let kor=this.chooseCell();
        	if (kor!=undefined&&matrix[kor[1]][kor[0]]!=undefined) {
                this.exanak(kor);
                this.zagerjka+=0.4;
                this.x=kor[0];
                this.y=kor[1];
        	}
            else{
                this.energi+=energi_angorcutyan;

            }
    	}
    	else{
    		 this.zagerjka--;
    	}
    }
    mullr(x,y){
        if (this.energi<-2) {
            this.energi=-2;
        }
        if (energi_dexiny<=0.1&&this.energi<0) {
            this.energi=1;
        }
         if (this.energi>=energi_mull) {
            let object_=new Svin(x,y);
            _ArrObject[5].push(object_);
            matrix[y][x]=5;
            this.energi=0;
         }
    }
    exanak(kor){
       let el= matrix[kor[1]][kor[0]];
        switch(el) {

            case 1: 
                 if (this.energi<=energi_smerti) {
                     del(this.x,this.y,5,1);
                    del(kor[0],kor[1],0,1);
                    this.del();

                    break;
                } 
                
                del(this.x,this.y,0,1);
                del(kor[0],kor[1],0,1);
                this.energi+=energi_kananch;
            break;

            case 2:
            del(this.x,this.y,5,1);
                matrix[this.y][this.x]=0;
                del(kor[0],kor[1],5);
                this.energi+=energi_dexiny;
                this.mullr(this.x,this.y);
                
            break;

            case 3:   
            del(this.x,this.y,5,1);
                this.del();
                del(kor[0],kor[1],0);
            break;
           
          default:
          del(this.x,this.y,5,1);
          if (this.energi<=energi_smerti) {
                    this.del();
                    break;
                }
            matrix[this.y][this.x]=0;
            del(kor[0],kor[1],5);
             this.energi+=energi_sharjum_azat;

        }
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


}