window.onload = init();

function init(){
	var checkBtn = document.getElementById('id-check');
	checkBtn.onclick = function(){return onCheck()};
}

function onCheck( btn ){
	var idInput = document.getElementById('id-number');
	var id = idInput.value;
	var check = idCheck(id);
	if(id.length == 17){
		document.getElementById('result').innerHTML = "your id check number is: " + check;
	}
	else if(id.length == 18){
		var result = (id.substr(17,1) == check) ? 'correct!' : 'incorrect!';
		document.getElementById('result').innerHTML = "your check number is: " + check + ", result is: " + result;
	}
	else{
		document.getElementById('result').innerHTML = "sorry, you enter an unreachable is number. ";
	}
}

function idCheck( idNumber ){
	if( !idNumber.constructor === "String" )
		return false;
	//console.log(idNumber);

	var weight = [7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2]; //权重
	var id = idNumber.split(""); //将身份证号拆分成数组
	var sum = 0; //加权和
	var check = ''; //校验码
	var Y = { 	0: '1', 
				1: '0',
				2: 'X',
				3: '9', 
				4: '8', 
				5: '7', 
				6: '6', 
				7: '5', 
				8: '4', 
				9: '3', 
				10: '2' }; //余数-校验码对应表

	for(var i=0;i<17;i++){ //计算加权和
		sum = sum + id[i] * weight[i];
	}

	check = Y[sum % 11] ; //计算余数，查询校验码

	return check;
}