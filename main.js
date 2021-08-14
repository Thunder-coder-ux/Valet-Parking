canvas = document.getElementById("myCanvas");
ctx = canvas.getConText("2d");

carwidth = 75;
carheight = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

car_x = 5;
car_y = 255;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.carwidth, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, car_x, car_y, carwidth, carheight);
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
	if (car_y >= 0) {
        car_y = car_y - 10;
        console.log("when up arrow is pressed, x = " + car_x + ", y = " + car_y);
        uploadBackground();
        uploadgreencar();
    }
}

function down()
{
	if (car_y <= 300) {
        car_y = car_y + 10;
        console.log("when up arrow is pressed, x = " + car_x + ", y = " + car_y);
        uploadBackground();
        uploadgreencar();
    }
}

function left()
{
	if (car_x >= 0) {
        car_x = car_x - 10;
        console.log("when up arrow is pressed, x = " + car_x + ", y = " + car_y);
        uploadBackground();
        uploadgreencar();
	}
}

function right()
{
	if (car_x <= 700) {
        car_x = car_x + 10;
        console.log("when up arrow is pressed, x = " + car_x + ", y = " + car_y);
        uploadBackground();
        uploadgreencar();
	}
}
