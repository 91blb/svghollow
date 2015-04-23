// JavaScript Document
function parsePath(path){
	//先对path进行处理
	//var path="M10,10,L20,20,L30,30z";
	path=path||[];
	//for(var i=0;i<path.length;i+=)
	//var arr=path.split(/[a-z|A-Z| |,]/g);
	var arr=spiltPoint(path);
	//console.log("arr",arr);
}
function spiltPoint(str){
	str=str.replace(","," ");
	str=str.replace("-"," -");
	str=str.replace(/([a-z|A-Z])/g,"$1 ");
	//var arr=[];
	var arr=str.match(/[a-z|A-Z][0-9|-|\.| ]*/g);
	//var arr=
	console.log(arr);
	arr.forEach(parsePoint);
	//return arr;
}
function parsePoint(str){
	//console.log(arguments);
	console.log("parse point",str);
	//console.log("split",str.split);
	var arr=str.split(/\s+/g);
	console.log("arr",arr);
	if(arr[0].charCodeAt[0])
}


function path(){/**/

}


function process(arr){
	var arr_default=[
		[1,1],
		[2,2],
		[3,3],
		[4,4],
		[1,2]
	];
	var input_arr=arr||arr_default;
	//比如示例数据
	//数学上的算法是什么 是圆心对齐 向圆心缩放
	
	//首尾的点如果相同 应该舍去一个
	
	//其余的点需要两个值  绝对值  和相对值  都要运算处理  目标绝对值  目标相对值
	
	//输出目标数组
	
	//将目标数组的顺序由顺时针改为逆时针
	
	
	//第一步 先找到圆心  按这几个点的中位数  如果这里面是相对的偏移量 而不是最终的绝对坐标
	//第二步 先找到
	
}


module.exports=process;

function test(){
	/**/
	var path="M10,10,L20,20,L30,30z";
	var result=parsePath(path);
	console.log("result",result);
}

test();