user={
	x:0,
	y:0,
	w:false,
	s:false,
	a:false,
	d:false,
	clic:(elevn,on_off)=>{
		if (on_off) {
			if (event.code=="KeyW"){ user.w="w";}
			if (event.code=="KeyS"){ user.s="s";}
			if (event.code=="KeyA"){ user.a="a";}
			if (event.code=="KeyD"){ user.d="d";}
		}
		else{
			if (event.code=="KeyW"){ user.w=false;}
			if (event.code=="KeyS"){ user.s=false;}
			if (event.code=="KeyA"){ user.a=false;}
			if (event.code=="KeyD"){ user.d=false;}
		}
	},
	proverka:(x,y)=>{
			
			if (matrix[y][x]!=6) {
				matrix[user.y][user.x]=0;
				if (matrix[y][x]!=5) {
					del(x,y,4);
				}
				matrix[y][x]=4;
				user.x=x;
				user.y=y;
			}
	},
	control_klav:()=>{
		if(user.w=="w"&&user.y>0){
			user.proverka(user.x,user.y-1);
		}
		if(user.s=="s"&&user.y<matrix.length-1){
			user.proverka(user.x,user.y+1);
		}
		if(user.a=="a"&&user.x>0){
			user.proverka(user.x-1,user.y);
		}
		if(user.d=="d"&&user.x<matrix[0].length-1){
			user.proverka(user.x+1,user.y);
		}
	}

}