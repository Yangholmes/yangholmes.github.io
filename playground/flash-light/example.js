document.getElementById('button').onclick = render;
function render(){
	//创建临时画布
	var canvas = document.getElementById('canvas1');
	var width = canvas.width = 450//window.innerWidth;
	var height = canvas.height = 300//window.innerHeight;
	var cxt = canvas.getContext('2d');

	cxt.fillStyle = 'red';
	cxt.textBaseline = 'middle';
	cxt.textAlign = 'center';
	cxt.font = '200px "Microsoft YaHei"'

	cxt.fillText("Jay",width/2,height/2);

	var pxs = cxt.getImageData(0,0,canvas.width,canvas.height).data;

	console.log(pxs.length);
	
	var dots = [];
	//圆点直径
	var dis = 10;
	//上次行宽位置
	var lw = width;
	//核心逻辑
	for(var i = 0;i < pxs.length;i += 4*dis){ // 4 elements for 1 pixel
		var l ;
		if(i/4 >= lw){
			lw += dis*width;
			l = i/4;
			l+=(dis-1)*width;
			i = 4 *l;
		}
		if(pxs[i+3] > 0){
			dots.push({x:(i/4)%width,y:((i/4)/width)});
		}
	}
		console.log(dots);
	var canvas1 = document.getElementById('canvas2');
	canvas1.width = 450//window.innerWidth;
	canvas1.height = 300//window.innerWidth;
	
	var cxt1 = canvas1.getContext('2d');
	//cxt1.fillStyle = "rgba(0,255,0,1)";
	//画圆
	for(var j = 0;j< dots.length;j++){
		cxt1.fillStyle = "rgba(0,j,0,1)";
		cxt1.beginPath();
		cxt1.arc(dots[j].x, dots[j].y, dis/2, 0, 2 * Math.PI, true);
		cxt1.closePath();
		cxt1.fill();
	}
}