var width=0, height=0, dotDiameter=10,
	style = {'fontSize': '250px', 'fontFamily': 'Microsoft Yahei', 'color': 'rgb(255, 0, 0)'};

var canvas = $('#matrix')[0],
		ctx = canvas.getContext('2d');

var text = '你最棒！';

$(function(){
	init();
	play();
});

/**
 * Init setting feature
 */
var init = function(){
	var tips = window.location.search.match(/\?\w+=(\w*)/);
	if(tips){
		text = tips[1];
	}
	$('#menu-icon').click(function(){
		$('#setting form').toggle(500);
	});
	$('#setting form :input[type="button"]').click(function(e){
		if(e.target.value == '确定'){
			var inputs = $('#setting form :input[type!="button"]');
			for(var i=0; i<inputs.length; i++){
				switch(inputs[i].id){
					case 'content': text = inputs[i].value; break;
					case 'font': style.fontFamily = inputs[i].value; break;
					case 'color': style.color = inputs[i].value; break;
					case 'size': style.fontSize = inputs[i].value; break;
					default: break;
				}
			}
			play();
			$('#setting form').hide(500);
		}
		else{
			$('#setting form').hide(500);
		}
	});
}

/**
 * do matrix, render and translation
 */
var play = function(){
	reset();
	matrix(text);
	styleCanvas();
	render();
	translation();
}

/**
 * @param style: plainObject, font-size, font-family and color
 */
var dots = []; // keep text dot model
var matrix = function(text){
	if(style == null){}
	if(text == null){}

	var textDOM = $('.hide').html(text)
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
		row = 0;
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
	ctx.translate($('body').width(), 0);
	ctx.save();
}

/**
 * clear canvas
 */
var reset = function(){
	dots = [];
	traveled = 0;
	window.cancelAnimationFrame(raf);
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
var rate = 0.5,		// translate rate
		traveled = 0, // loop
		raf;
var translation = function(){
	if(typeof rate != 'number') rate = 1;
	var x = rate * dotDiameter * -1;
	traveled += x;
	if(traveled*-1 >= $('body').width() + width){
		ctx.translate(traveled*-1, 0);
		traveled=0;
	}

	ctx.clearRect(0,0,width,height); // clear canvas
	ctx.translate(x, 0);
	render();
	raf = requestAnimationFrame(translation);
}
