var width=0, height=0, dotDiameter=10,
	style = {'fontSize': '250px', 'fontFamily': 'Microsoft Yahei', 'color': 'rgb(255, 255, 255)'};

var canvas = $('#matrix')[0],
		ctx = canvas.getContext('2d');

var dots = [];

var rate = 0.5;

$(function(){
	matrix('马户！帅气！');
	styleCanvas();
	render();
	translation();
});

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

	var pattern = $('#canvas-hide')[0],
		patternCtx = pattern.getContext('2d');

	pattern.width = width;
	pattern.height = height;

	patternCtx.fillStyle = style.color;
	patternCtx.textBaseline = 'top';
	patternCtx.textAlign = 'left';
	patternCtx.font = style.fontSize + ' ' + style.fontFamily;

	patternCtx.fillText(text, 0, 0);

	var pixels = patternCtx.getImageData(0,0,width,height).data,
		//dots = [],
		row = 0;
		dots = [];
	for(var i=0;i<pixels.length;i+=4*dotDiameter){
		if(i/4 >= width*(row-dotDiameter+1)){
			i = row*width*4;
			row = row + dotDiameter;
		}
		if(pixels[i]+pixels[i+1]+pixels[i+2]>0 && pixels[i+3] > 0)
			dots.push({
				x: (i/4)%width,
				y: Math.ceil((i/4)/width)
			});
	}
	return dots;
}

/**
 * set canvas style
 */
var styleCanvas = function(){
	canvas.width = $('body').width();
	// canvas.width = width;
	canvas.height = height;
	ctx.fillStyle = style.color;
	ctx.clearRect(0, 0, width, height);
	ctx.translate($('body').width(), 0);
}

/**
 * draw the dots
 */
var render = function(){
	//画圆
	for(var j = 0;j< dots.length;j++){
		ctx.beginPath();
		// ctx.arc(dots[j].x, dots[j].y, dotDiameter/2, 0, 2 * Math.PI, true);
		ctx.arc(dots[j].x, dots[j].y, dotDiameter/2, 0, 2 * Math.PI, true);
		ctx.closePath();
		ctx.fill();
	}
}

/**
 * animation
 */
var i = 0;
var translation = function(){
	if(typeof rate != 'number') rate = 1;
	x = rate * dotDiameter * -1;

	i += x;
	if(i*-1 >= $('body').width() + width){
		console.log( i );
		ctx.translate(i*-1, 0);
		i=0;
	}
	ctx.save();
	ctx.clearRect(0,0,width,height); // clear canvas
	ctx.translate(x, 0);
	render();
	requestAnimationFrame(translation);
}
