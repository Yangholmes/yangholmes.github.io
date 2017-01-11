var width=0, height=0, dotRadius=10, 
	style = {'fontSize': '200px', 'fontFamily': 'Microsoft YaHei', 'color': 'rgb(0, 255, 0)'};

// $.ready()

/**
 * @param style: plainObject, font-size, font-family and color
 */
var matrix = function(text){
	if(style == null){}
	if(text == null){}

	var textDOM = $('<div class="hide">'+text+'</div>')
					.css(style)
					.appendTo($('body'));
		width = Math.ceil(textDOM.width()),
		height = Math.ceil(textDOM.height());

	var pattern = $('canvas')[0],
		patternCtx = pattern.getContext('2d');

	pattern.width = width;
	pattern.height = height;

	patternCtx.fillStyle = style.color;
	patternCtx.textBaseline = 'top';
	patternCtx.textAlign = 'left';
	patternCtx.font = style.fontSize + ' ' + style.fontFamily;

	patternCtx.fillText(text, 0, 0);

	var pixels = patternCtx.getImageData(0,0,width,height).data,
		dots = [],
		row = 0;
	for(var i=0;i<pixels.length;i+=4*dotRadius){
		if(i/4 >= width*(row-dotRadius+1)){
			i = row*width*4;
			row = row + dotRadius;
		}
		if(pixels[i]+pixels[i+1]+pixels[i+2]>0 && pixels[i+3] > 0)
			dots.push({
				x: (i/4)%width, 
				y: Math.ceil((i/4)/width)
			});
	}
	return dots;
}

var render = function(dots){
	var canvas = document.getElementById('matrix');
	canvas.width = width;
	canvas.height = height;
	
	var cxt = canvas.getContext('2d');
	cxt.fillStyle = style.color;
	//画圆
	for(var j = 0;j< dots.length;j++){
		cxt.beginPath();
		cxt.arc(dots[j].x, dots[j].y, dotRadius/2, 0, 2 * Math.PI, true);
		cxt.closePath();
		cxt.fill();
	}
}