function f4(){
	console.log("from f4");
}
function f5(){
	console.log("from f5");
	//t5
	setTimeout(function(){
	console.log("from callback5");
	},0);
	//若t5能抢到时间片则可以马上执行，否则就加入到event loop中，等t3t2执行完后再执行；
	//此时t1沉睡尚未结束，因此t5总是比t1
}
function f3(){
	process.nextTick(f4);
}

function f2(){
	f3();
}


function f1(){
	//t1
	setTimeout(function(){
	console.log("from callback1");
	},3200);//event loop中增加一个事件
	//t2
	setTimeout(function(){
	console.log("from callback2");
	},1100);//event loop中增加一个事件
	f2();//将f4置于第一个执行
	//nextTick的执行顺序受前面的nextTick个数决定
	process.nextTick(f4);//将此f4置于第二个执行
	process.nextTick(f5);//将f5置于第三个执行


	//==========possible result 1==========
	//from f4
	//from f4
	//from f5
	//from callback5 f5抢到时间片得以马上执行
	//from callback3
	//from callback2
	//from callback1

	//==========possible result 2==========
	//from f4
	//from f4
	//from f5
	//from callback3
	//from callback2
	//from callback5 f5没抢到时间片，加入到event loop后再执行，此时t1沉睡还未结束
	//from callback1

	//t3
	setTimeout(function(){
	console.log("from callback3");
	},1000);
	//主线程睡眠三秒
	sleep(3);//第1000毫秒后，t3沉睡事件结束，加入到event loop中；第1100毫后t2加入到event loop中；
	//sleep(3)结束后再过200毫秒t1才加入到event loop中；此时event loop中的执行顺序是f4,f4,f5,t3,t2,t1
};

f1();


function sleep(seconds){
	var milliSeconds=seconds*1000;
	var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
}