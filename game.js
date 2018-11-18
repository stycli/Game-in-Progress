var myGamePiece;
var boss;
var projectile;
var playershot;
var keys= [];
//var background;

//window.addEventListener('keydown', moving);
//window.addEventListener('keyup', moving);

window.addEventListener("keydown", function(event){
	keys[event.keyCode] = true;
	console.log(event.keyCode);
}, true);

window.addEventListener("keyup", function(event) {
	keys[event.keyCode] = false;
}, true);

var moveSpeed=5;

var count=0;
//var countbg=0;
setInterval(counter, 100);
//setInterval(counterbg, 50);


function counter(){
	console.log("counter is " + count);
	count++;
	if(count>5){
	count =0;
	}
	switch(count){
	case 0: 
		
		myGamePiece.image.src = "b0001.png";
		break;
	case 1: 
		
		myGamePiece.image.src = "b0002.png";
		break;
	case 2: 
		
		myGamePiece.image.src = "b0003.png";
		break;
	case 3:
		
		myGamePiece.image.src = "b0004.png";
		break;
	case 4: 
		
		myGamePiece.image.src = "b0005.png";
		break;
	case 5: 
		myGamePiece.image.src = "b0006.png";
		break;
}
}
/*function counterbg(){
	console.log("counterbg is " + countbg);
	countbg++;
	if(countbg>19){
	countbg =0;
	}
	if (countbg <10){
		background.image.src = "bg000" + (countbg +1) + ".png";
	}
	else{
		background.image.src = "bg00" + (countbg +1) + ".png";
	}
}
*/	

function startGame() {
	myGameArea.start();
	//background = new component(1200, 550, "bg0001.png", 0,0, "image");
	boss= new component(600, 550, "blue", 600, 0);
	myGamePiece = new component(140, 110, "b0001.png", 100, 100, "image");
	//animate(myGamePiece);
	//projectile = new component (60, 60, "green", 1100, 70);
	playershot = new component(40, 40, "carrot.png", -50, myGampiece.x, "image");
	
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1200;
        this.canvas.height = 550;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
	this.interval = setInterval(updateGameArea, 20);
    },
	clear: function(){
		this.context.clearRect(0,0, this.canvas.width, this.canvas.height);

	}
}


function component(width, height, color, x, y, type) {
 	/*this.type = type;
	
	if (type == "image") {
		
		this.image = new Image();
		
		this.image.src = color;
	}
	
	this.width = width;
    
	this.height = height;  
	
	this.x=x;
	
	this.y=y;
	
	
	this.update = function(){
   	 
		ctx = myGameArea.context;
    	
		if (type == "image") {
	
			ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
	} 
		else {
	ctx.fillStyle = color;
	cts.fillRect(this.x, this.y, this.width, this.height);
	}
	
}*/



 
	this.type = type;
	if(type == "image"){
		this.image= new Image();
		this.image.src = color;
	}
    this.width = width;
    this.height = height;  
	this.x=x;
	this.y=y;
	this.update = function(){
   	 ctx = myGameArea.context;

	if (type == "image"){
		ctx.drawImage(this.image, 
				this.x,
				this.y,
				this.width, this.height);
	}
	else{
    	ctx.fillStyle = color;
   	 ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	/*this.newPos = function(){
		this.x = 600;
		this.y = 225;
	}*/

	}
}

/*switch(count){
	case 0: 
		myGamePiece.image.src = "b0001.png";
		break;
	case 1: 
		myGamePiece.image.src = "b0002.png";
		break;
	case 2: 
		myGamePiece.image.src = "b0003.png";
		break;
	case 3:
		 myGamePiece.image.src = "b0004.png";
		break;
	case 4: 
		myGamePiece.image.src = "b0005.png";
		break;
	case 5: 
		myGamePiece.image.src = "b0006.png";
		break;
}*/
/*if(count == 0){
	myGamePiece.image.src = "b0001.png";
}
else if(count == 1){
	myGamePiece.image.src = "b0002.png";
}
else if(count ==2){
	myGamePiece.image.src = "b0003.png";
}
else if (count ==3){
	myGamePiece.image.src = "b0004.png";
}
else if (count ==4) {
	myGamePiece.image.src = "b0005.png";
}
else if (count == 5) {
	myGamePiece.image.src = "b0006.png";
}
*/



function updateGameArea(){
	myGameArea.clear();
	//background.update();
	//myGamePiece.newPos();
	//boss.update();
	myGamePiece.update();
	//projectile.update();
	
	
	checkKeys();
	gravity();

	
}



function moveUp(){
	if(myGamePiece.y==0){
		myGamePiece.y+=0;
	}
	else{
		myGamePiece.y -=moveSpeed;
	}
	
}
function moveDown(){
	
	if(myGamePiece.y==550){
		myGamePiece.y+=0;
	}
	else{
		myGamePiece.y +=moveSpeed;
	}
}
function moveLeft(){
	
	if(myGamePiece.x<=0){
		myGamePiece.x-=0;
	}
	else{
		myGamePiece.x -= moveSpeed;
	}	
}
function moveRight(){
	if(myGamePiece.x>=1100){
		myGamePiece.x-=0;
	}
	else{
		myGamePiece.x += moveSpeed;
	}
}
	
/*function jump(){
	console.log("this be happening");
	var jump = 10;
	this.interval = clearInterval(updateGameArea);
	if(myGamePiece.y >= 460){
		myGamePiece.y -=jump;
		jump -=1;
	}
	this.interval = setInterval(updateGameArea, 20);	

}*/




/*if(count%2==0){
	myGamePiece.image.src = "1bun.png";
}
else{
	myGamePiece.image.src = "3mmos.gif";	
}*/


var g = 0;


function gravity() {
	
	if(myGamePiece.y < 400) {
		
		if(400 - g < myGamePiece.y) {
					myGamePiece.y = 400;
			
		g = 1;
		
		}
		
		else {
			
			myGamePiece.y += g;
			
			g += 1;
		
		}
	
	}
	
	//console.log(g);
	
	//console.log(myGamePiece.y);

}


var jumpForce = 20;

var hasJumped = false;

function hop(){
	
	if(!hasJumped) {
		
		myGamePiece.y -= jumpForce;
	
	}

}


function fall() {
	
	if(myGamePiece.y >= 400) {
		
		hasJumped = false;

	}
	
	else {
		
		hasJumped = true;
		
		myGamePiece.y -= jumpForce;
	
}
}

function checkKeys(){
	
	if (keys[37]){
	moveLeft();
	}
	if (keys[39]){
	moveRight();
	//myGamePiece.image.src = "b0002.png";
	
	}
	if (keys[17]){
	moveSpeed = 15;
	}
	else{
	moveSpeed = 5;
	}
	if (keys[38]){
	
	myGamePiece.image.src = "b0007.png";
	hop();
	
	
	}	
	
	if(!keys[38]) {
	
	fall();
	
	}

		
	
}	

