//全局变量
var result = [];  //用于保存二叉树节点
var timer; 



//页面加载后执行
window.onload = function(){
	var aBtn = document.getElementsByTagName('input');
	var oWrapper = document.getElementById('wrapper');

	//对按钮进行事件绑定
	aBtn[0].onclick = function(){
		if(timer ==1){
			return;
		};	
		colorInitial();
		firOrder(oWrapper);
		colorChange();
	}

	aBtn[1].onclick = function(){
		if(timer == 1){
			return;
		};	
		colorInitial();
		midOrder(oWrapper);
		colorChange();

		 
	}

	aBtn[2].onclick = function(){
		if(timer == 1){
			return;
		};	
		colorInitial();
		lasOrder(oWrapper);
		colorChange();
	}
}


//使用递归遍历二叉树

//先序遍历
var firOrder = function(node){
	result.push(node);
	if(node.firstElementChild != null){
		firOrder(node.firstElementChild);
	}

	if(node.lastElementChild != null){
		firOrder(node.lastElementChild);
	}
}


//中序遍历
var midOrder = function(node){
	if (node.firstElementChild != null) {
		midOrder(node.firstElementChild);
	}

	result.push(node);
	if(node.lastElementChild != null){
		midOrder(node.lastElementChild);
	}
}

//后序遍历
var lasOrder = function(node){
	if(node.firstElementChild != null){
		lasOrder(node.firstElementChild);
	}

	if (node.lastElementChild != null) {
		lasOrder(node.lastElementChild);
	}
	result.push(node);
}


//颜色改变
var colorChange = function(){
	var i = 0;
	result[i].style.background = 'green';

	timer = setInterval(function(){
		i++;
		if(i < result.length){
			result[i-1].style.background = '#fff ';
			result[i].style.background = 'green';
		}else{
			result[result.length-1].style.background = '#fff';
			clearInterval(timer);
			timer = 2;
		}
	},1000);

	
}


//颜色初始化
function colorInitial(){
	var aDiv = document.getElementsByTagName('div');
	for(var i=0;i<aDiv.length;i++){
		aDiv[i].style.background = '#fff';
	}
}


