
	var cog = new Image();
	var loadingCanvas;
	var ctx;
	function init() {
		loadingCanvas = document.getElementById('myCanvas');
		ctx = loadingCanvas.getContext("2d");
		cog.src = 'EvilFace.png'; 
		setInterval(fillResize,10);
	}
	
	var rotation = 0;
	
	function draw(){
		ctx.globalCompositeOperation = 'source-over';
		ctx.translate(loadingCanvas.width-1100, loadingCanvas.height-600);
		ctx.save();
		ctx.translate(128,128); 
		rotation += 1;
		ctx.rotate(rotation*Math.PI/200); 
		ctx.translate(-256,-256);
		ctx.drawImage(cog,0,0);
		if(rotation == 400) rotation = 0;
		ctx.restore();
	}
	
	function fillResize(){
	
		loadingCanvas.width = window.innerWidth;
		loadingCanvas.height = window.innerHeight;
		ctx.fillStyle = 'black';
		ctx.fillRect(0, 0, loadingCanvas.width, loadingCanvas.height);
		draw();
	}


	