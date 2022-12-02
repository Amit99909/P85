canvas = document.getElementById("myCanvas");

car_height= 50;
car_width= 50;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

car_x = 250;
car_y = 5;

function add() {
	src="car2.png"
	src="concrete-road.png"
	src="parkingLot.png"
	//upload car, and background images on the canvas.
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	src="parkingLot.png"
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.

	src="car2.png"
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	car_y = car_y-2;
}

function down()
{
	car_y = car_y+2;
}

function left()
{
	car_x = car_x-2;
}

function right()
{
	car_x = car_x+2;
}
