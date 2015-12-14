
	var canvas;
	var context;
	var shapes = [];

	
	function Shape(x, y, color, type, num) {
	
		if(num == 1)
		{
			this.x = x;
			this.y = y;
			this.type = type;
			this.r = 25;
			this.num = num;
			this.color = color;
			this.dx = Math.random() * 10 - 5;
			this.dy = Math.random() * 10 - 5;
		}
		
		if(num == 2)
		{
			this.x = x;
			this.y = y;
			this.type = type;
			this.width = 25;
			this.height = 25;
			this.num = num;
			this.color = color;
			this.dx = Math.random() * 4 - 2;
			this.dy = Math.random() * 4 - 2;
		}
		
		if(num == 3)
		{
			this.x = x;
			this.y = y;
			this.type = type;
			this.r = 25;  
			this.num = num;
			this.color = color;
			this.dx = Math.random() * 2 - 1;
			this.dy = Math.random() * 2 - 1;
		}
		
		if(num == 4)
		{
			this.x = x;
			this.y = y;
			this.type = type;
			this.width = 100;
			this.height = 10;
			this.num = num;
			this.color = color;
			this.dx = Math.random() * 2 - 1;
			this.dy = Math.random() * 2 - 1;
		}	
	
	
		if(num == 5)
		{
			this.x = x;
			this.y = y;
			this.type = type;
			this.num = num;
			this.color = color;
			this.dx = Math.random() * 10 - 5;
			this.dy = Math.random() * 10 - 5;
		}
		
		else if(num == 6)
		{
			this.x = x;
			this.y = y;
			this.type = type;
			this.num = num;
			this.color = color;
			this.dx = Math.random() * 10 - 5;
			this.dy = Math.random() * 10 - 5;
		}
	}
	  
    function init() {
        canvas = document.getElementById('canvas');
        context = canvas.getContext("2d")
		
		/*context.font = "100px Comic Sans";
			context.textAlign = 'center';
				var i, n = 0, 
				components = [0, 0, 0], 
				operations = [1, 2, 3];*/
				
			/*function draw(){
	
			context.fillStyle = "rgb("+components.join(',')+")";
			context.textBaseline = 'top'
			  
			context.save();
            context.translate(700, 0);
  		    context.fillText('Click mouse to destroy', 0, components[1]);
            context.restore();
			
			context.save();
			context.translate(500, 400);
			context.rotate(0.1*n++);
			context.textBaseline = 'center';
			context.fillText('Move mouse to create', 0, 0);
			context.restore();
			  
			for(i = 0; i < 3; i++) {
				components[i] += operations[i];
				if ((components[i] >= 256) || (components[i] <= 0)) operations[i] *= -1;
			}  
				setTimeout(draw, 1);
			}
				draw();*/
        window.addEventListener('resize', resizeCanvas, false);
        window.addEventListener('orientationchange', resizeCanvas, false);
        resizeCanvas();
		canvas.onclick = function(event) {
			handleClick(event.clientX, event.clientY);
		};
		
		canvas.addEventListener('mousemove', function(e){
			getMousePos(e.clientX, e.clientY);
		
		}, false);
		setInterval(resizeCanvas, 5);
		
    }
	
	var start = 0;
	var startShape = 0;
	var movingUp = false;
	var start2 = 0;
	var startShape2 = 0;
	var movingUp2 = false;
	
	function drawText() {
		
		/*context.font = "30px Arial";
		context.fillText("", 500, 500);
		context.textAlign = 'center';
		context.textBaseLine = 'middle';*/
		
		context.save();
		context.font = '30px Arial';
		context.fillStyle = 'white';
		context.translate(canvas.width/2, canvas.height/2);
		if(movingUp == false)
		{
			context.rotate(0.010*start++);
			if(start == 40) movingUp = true;
		}
		else if(movingUp == true)
		{
			context.rotate(0.010*start--);
			if(start == 40) movingUp = false;
		}
		
		context.fillText('Or Click the Button to Begin', 0, 0);
		context.textAlign = 'center';
		context.textBaseLine = 'middle';
		context.restore();
		
		context.save();
		context.font = '30px Arial';
		context.fillStyle = 'white';
		context.translate(canvas.width/4, canvas.height/2);
		if(movingUp2 == false)
		{
			context.rotate(0.010*start2++);
			if(start2 == -40) movingUp2 = true;
		}
		else if(movingUp2 == true)
		{
			context.rotate(0.010*start2--);
			if(start2 == 40) movingUp2 = false;
		}
		
		context.fillText('Move to Create, Click to Destroy', 0, 0);
		context.textAlign = 'center';
		context.textBaseLine = 'middle';
		context.restore();
		
		/*context.save();
		context.font = '30px Arial';
		context.translate(canvas.width/8, canvas.height/2);
		if(movingUp2 == false)
		{
			context.rotate(0.010*start2++);
			if(start2 == -40) movingUp2 = true;
		}
		else if(movingUp2 == true)
		{
			context.rotate(0.010*start2--);
			if(start2 == 40) movingUp2 = false;
		}
		
		context.fillText('Or Click Start To Begin!!', 0, 0);
		context.textAlign = 'center';
		context.textBaseLine = 'middle';
		context.restore();*/
	
	
	
	}
	
	function getMousePos(x, y) {
		
		var colors = ["red", "green", "blue", "orange", "purple", "yellow"];
		var type = 'xor';
		var color = colors[Math.floor(Math.random() * colors.length)];
		var num = Math.floor(Math.random() * 6 + 1);
		shapes.push(new Shape(x, y, color, type, num));
		
		for(var i = 0; i < shapes.length; i++)
		{
			drawShape(shapes[i]);
		}
		
	}
	
	
	function handleClick(x, y) {
	    var found = false;
		for (var i = 0; i < shapes.length; i++) {
			d = Math.sqrt((shapes[i].x - x) * (shapes[i].x - x) + (shapes[i].y - y) * (shapes[i].y - y));
			if (d <= 130) {
				shapes.splice(i, 1);
				found = true;
			}
		}
	}
	function drawShape(shape) {
	
		if(shape.num == 1)
		{
			context.beginPath();
			//context.globalCompositeOperation = shape.type;
			context.arc(shape.x, shape.y, shape.r, 0, degreesToRadians(360), true);
			context.fillStyle = shape.color;
			context.fill();
			if (shape.x + shape.dx > canvas.width || shape.x + shape.dx < 0)
				shape.dx = -shape.dx;
			if (shape.y + shape.dy > canvas.height || shape.y + shape.dy < 0)
				shape.dy = -shape.dy;
			shape.x += shape.dx;
			shape.y += shape.dy;
		}
		
		if(shape.num == 2)
		{
			context.beginPath();
			//context.globalCompositeOperation = shape.type;
			context.rect(shape.x, shape.y, shape.width, shape.height);
			context.fillStyle = shape.color;
			context.fill();
			if (shape.x + shape.dx > canvas.width || shape.x + shape.dx < 0)
				shape.dx = -shape.dx;
			if (shape.y + shape.dy > canvas.height || shape.y + shape.dy < 0)
				shape.dy = -shape.dy;
			shape.x += shape.dx;
			shape.y += shape.dy;
		}
		
		if(shape.num == 3)
		{
			context.beginPath();
			//context.globalCompositeOperation = shape.type;
			context.arc(shape.x, shape.y, shape.r, 0, degreesToRadians(270), true);
			context.fillStyle = shape.color;
			context.fill();
			if (shape.x + shape.dx > canvas.width || shape.x + shape.dx < 0)
				shape.dx = -shape.dx;
			if (shape.y + shape.dy > canvas.height || shape.y + shape.dy < 0)
				shape.dy = -shape.dy;
			shape.x += shape.dx;
			shape.y += shape.dy;
		}
		
		if(shape.num == 4)
		{
			context.beginPath();
			//context.globalCompositeOperation = shape.type;
			context.rect(shape.x, shape.y, shape.width, shape.height);
			context.fillStyle = shape.color;
			context.fill();
			if (shape.x + shape.dx > canvas.width || shape.x + shape.dx < 0)
				shape.dx = -shape.dx;
			if (shape.y + shape.dy > canvas.height || shape.y + shape.dy < 0)
				shape.dy = -shape.dy;
			shape.x += shape.dx;
			shape.y += shape.dy;
		}
		
		if(shape.num == 5)
		{
			context.beginPath();
			//context.globalCompositeOperation = shape.type;
			context.arc(shape.x, shape.y+68, 34.5, 5.75, 3.66, false);
			context.quadraticCurveTo(shape.x-3.5, shape.y+15, shape.x, shape.y);
			//context.fillStyle = "grey"
			context.fill();
			if (shape.x + shape.dx > canvas.width || shape.x + shape.dx < 0)
				shape.dx = -shape.dx;
			if (shape.y + shape.dy > canvas.height || shape.y + shape.dy < 0)
				shape.dy = -shape.dy;
			shape.x += shape.dx;
			shape.y += shape.dy;
		}
		
		else if(shape.num == 6)
		{
			context.beginPath();
			//context.globalCompositeOperation = shape.type;
			context.moveTo(shape.x, shape.y);
			context.lineTo(shape.x + 15, shape.y + 30);
			context.lineTo(shape.x - 45, shape.y + 45);
			context.fillStyle = shape.color;
			context.fill();
			if (shape.x + shape.dx > canvas.width || shape.x + shape.dx < 0)
				shape.dx = -shape.dx;
			if (shape.y + shape.dy > canvas.height || shape.y + shape.dy < 0)
				shape.dy = -shape.dy;
			shape.x += shape.dx;
			shape.y += shape.dy;
		}
		
		
	}
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
		fillBackgroundColor();
		for (var i = 0; i < shapes.length; i++) {
			drawShape(shapes[i]);
		}
		drawText();
		
    }
	function fillBackgroundColor() {
		//context.globalCompositeOperation = 'xor';
		context.fillStyle = 'black';
		context.fillRect(0, 0, canvas.width, canvas.height);
	}
	function degreesToRadians(degrees) {
		return (degrees * Math.PI)/180;
	}
	window.onload = init;
	

