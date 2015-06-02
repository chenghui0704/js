//构造url
var map = {
    "userid": uid
};
var parameters = util.buildUrlParameter(map);
var url = "${rc.contextPath}/device/getuserdevices.json?" + parameters;
util.ajax(url, {}, function(info) {

});

//在离开页面或者刷新页面时执行绑定的事件
$(window).bind('beforeunload', function() {

});

//页面图标
<link rel="Shortcut Icon" href="/wfd.backend/fav.ico"/>


//表单密码加密
//http://www-cs-students.stanford.edu/~tjw/jsbn/
<script src="js/jquery.cookie.js"></script>
<script src="js/prng4.js"></script>
<script src="js/rng.js"></script>
<script src="js/jsbn.js"></script>
<script src="js/rsa.js"></script>

<input type="password" value="" class="input-style" placeholder="输入密码" id="admin-password-input"  style="margin-top:28px;"/>

$(".admin-submit").click(function(){
	do();
});

//键盘控制
$("#admin-password-input").keydown(function(e){
if(e.keyCode==13){
	do();
}
});
function do(){
	var username = $("#admin-username").val();
	var password = $("#admin-password-input").val();
	if(username&&username!=""&&password&&password!=""){
		var publicKey="xxx";// too long，从后台传到前台
		var rsa = new RSAKey();
		rsa.setPublic(publicKey, "10001");
		$("#admin-password").val(rsa.encrypt(password));
		$("#admin-form").submit();
	}else{
		$("#admin-error").css("display","block");
		$("#admin-error").text("用户名或密码不能为空");
	}
}
//数组插入元素
Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

/* 
 *  方法:Array.remove(dx) 
 *  功能:根据元素值删除数组元素. 
 *  参数:元素值
 *  返回:在原数组上修改数组 
 *  作者：pxp 
 */  
Array.prototype.indexOf = function (val) {  
    for (var i = 0; i < this.length; i++) {  
        if (this[i] == val) {  
            return i;  
        }  
    }  
    return -1;  
};  
Array.prototype.removevalue = function (val) {  
    var index = this.indexOf(val);  
    if (index > -1) {  
        this.splice(index, 1);  
    }  
};

//Display or hide the matched elements with a sliding motion.
$("").slideToggle();


//跳转到指定页面
location.href='url';

//string转number
var foo = ['1', '4', '2', '10', '3'];
var numbers = foo.map(function(num) {return parseInt(num, 10)});

var numbers = foo.map(Number);
//number转string
var strings = numbers.map(String);


//节点加载后执行
$(document).ready(function() {
//
})

//查找项复位
var type=util.getQueryString('type');
$("#searchKey").val(type==null?1:type);
//end


// Prevent the form from submitting
$( "form" ).submit(function( event ) {
    event.preventDefault();
});

//将class为time的节点值变成时间型数据
$(".time").each(function(){
	if($(this).html()=="0"||$(this).html()==""){
		$(this).html("暂无");
	}else
		$(this).html(util.getDateTime(parseInt($(this).html().replace(/,/ig,''))));
});

//类数组对象转换为数组对象
function list() {
  return Array.prototype.slice.call(arguments, 0);
}

var list1 = list(1, 2, 3); // [1, 2, 3]


//清空数组
var myArray = yourArray = [1, 2, 3];
myArray = [];//yourArray仍然是[1, 2, 3]

// var myArray = yourArray = [1, 2, 3];
// undefined
// myArray = [];
// []
// yourArray
// [1, 2, 3]

myArray.length = 0;// 正确的方法是保持引用
// var myArray = yourArray = [1, 2, 3];
// undefined
// myArray
// [1, 2, 3]
// yourArray
// [1, 2, 3]
// myArray.length = 0;
// 0
// yourArray
// []

//合并数组
var mergeTo = [4,5,6];
var mergeFrom = [7,8,9];
Array.prototype.push.apply(mergeTo, mergeFrom);


// 删除属性的唯一方法是使用 delete 操作符；
// 设置属性为 undefined 或者 null 并不能真正的删除属性， 
// 而仅仅是移除了属性和值的关联。
var obj = {
    bar: 1,
    foo: 2,
    baz: 3
};
obj.bar = undefined;
obj.foo = null;
delete obj.baz;

for(var i in obj) {
    if (obj.hasOwnProperty(i)) {
        console.log(i, '' + obj[i]);
    }
}
// bar undefined VM114:13
// foo null VM114:13
// undefined


// 要提防原型链过长带来的性能问题，并知道如何通过缩短原型链来提高性能。 
// 更进一步，绝对不要扩展内置类型的原型，除非是为了和新的 JavaScript 引擎兼容。



// hasOwnProperty 是 JavaScript 中唯一一个处理属性但是不查找原型链的函数。

// 修改Object.prototype
Object.prototype.bar = 1; 
var foo = {goo: undefined};

foo.bar; // 1
'bar' in foo; // true

foo.hasOwnProperty('bar'); // false
foo.hasOwnProperty('goo'); // true
//只有 hasOwnProperty 可以给出正确和期望的结果，这在遍历对象的属性时会很有用。 没有其它方法可以用来排除原型链上的属性，
//而不是定义在对象自身上的属性。

// JavaScript 不会保护 hasOwnProperty 被非法占用，因此如果一个对象碰巧存在这个属性，
// 就需要使用外部的 hasOwnProperty 函数来获取正确的结果。

var foo = {
    hasOwnProperty: function() {
        return false;
    },
    bar: 'Here be dragons'
};

foo.hasOwnProperty('bar'); // 总是返回 false

// 使用其它对象的 hasOwnProperty，并将其上下文设置为foo
({}).hasOwnProperty.call(foo, 'bar'); // true

// 当检查对象上某个属性是否存在时，hasOwnProperty 是唯一可用的方法。 同时在使用 for in loop 遍历对象时，
// 推荐总是使用 hasOwnProperty 方法， 这将会避免原型对象扩展带来的干扰。
for(var i in foo) {
    if (foo.hasOwnProperty(i)) {
        console.log(i);
    }
}


Foo.method = function() {
    function test() {
        // this 将会被设置为全局对象（译者注：浏览器环境中也就是 window 对象）
    }
    test();
}

// 一个常见的误解是 test 中的 this 将会指向 Foo 对象，实际上不是这样子的。
// 为了在 test 中获取对 Foo 对象的引用，我们需要在 method 函数内部创建一个局部变量指向 Foo 对象。

Foo.method = function() {
    var that = this;
    function test() {
        // 使用 that 来指向 Foo 对象
    }
    test();
}


for(var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);  
    }, 1000);
}
// 上面的代码不会输出数字 0 到 9，而是会输出数字 10 十次。
// 当 console.log 被调用的时候，匿名函数保持对外部变量 i 的引用，此时 for循环已经结束， i 的值被修改成了 10.
// 为了得到想要的结果，需要在每次循环中创建变量 i 的拷贝。
// 避免引用错误
// 为了正确的获得循环序号，最好使用 匿名包装器（译者注：其实就是我们通常说的自执行匿名函数）。
for(var i = 0; i < 10; i++) {
    (function(e) {
        setTimeout(function() {
            console.log(e);  
        }, 1000);
    })(i);
}

// 有另一个方法完成同样的工作，那就是从匿名包装器中返回一个函数。这和上面的代码效果一样。
for(var i = 0; i < 10; i++) {
    setTimeout((function(e) {
        return function() {
            console.log(e);
        }
    })(i), 1000)
}

//清除timeout
var t1 = setTimeout(function() {}, 10);
clearTimeout(t1);

// arguments 对象

// JavaScript 中每个函数内都能访问一个特别变量 arguments。这个变量维护着所有传递到这个函数中的参数列表。
// arguments 变量不是一个数组（Array）。 尽管在语法上它有数组相关的属性 length，
// 但它不从 Array.prototype 继承，实际上它是一个对象（Object）。
// 因此，无法对 arguments 变量使用标准的数组方法，比如 push, pop 或者 slice。 虽然使用 for 循环遍历也是可以的，
// 但是为了更好的使用数组方法，最好把它转化为一个真正的数组。
// 转化为数组
// 下面的代码将会创建一个新的数组，包含所有 arguments 对象中的元素。
Array.prototype.slice.call(arguments);
// 这个转化比较慢，在性能不好的代码中不推荐这种做法。
 
var SomeImportantThing;
// 其它一些代码，可能会初始化 SomeImportantThing，也可能不会

// 检查是否已经被初始化
if (!SomeImportantThing) {
    SomeImportantThing = {};
}
// 或者
SomeImportantThing = SomeImportantThing || {};


// 推荐使用匿名包装器（译者注：也就是自执行的匿名函数）来创建命名空间。
// 这样不仅可以防止命名冲突， 而且有利于程序的模块化。
(function() {
    // 函数创建一个命名空间

    window.foo = function() {
        // 对外公开的函数，创建了闭包
    };

})(); // 立即执行此匿名函数



// 应该尽量避免使用数组构造函数创建新数组。推荐使用数组的字面语法。它们更加短小和简洁，因此增加了代码的可读性。
var array=[];


//等于操作符
""           ==   "0"           // false
0            ==   ""            // true
0            ==   "0"           // true
false        ==   "false"       // false
false        ==   "0"           // true
false        ==   undefined     // false
false        ==   null          // false
null         ==   undefined     // true
" \t\r\n"    ==   0             // true

// 严格等于操作符
""           ===   "0"           // false
0            ===   ""            // false
0            ===   "0"           // false
false        ===   "false"       // false
false        ===   "0"           // false
false        ===   undefined     // false
false        ===   null          // false
null         ===   undefined     // false
" \t\r\n"    ===   0             // false

// 强烈推荐使用严格等于操作符。如果类型需要转换，应该在比较之前显式的转换， 而不是使用语言本身复杂的强制转换规则



// 通过使用 否 操作符两次，可以把一个值转换为布尔型。

!!'foo';   // true
!!'';      // false
!!'0';     // true
!!'1';     // true
!!'-1'     // true
!!{};      // true
!!true;    // true


// 绝对不要使用 eval，任何使用它的代码都会在它的工作方式，性能和安全性方面受到质疑。 
// 如果一些情况必须使用到 eval 才能正常工作，首先它的设计会受到质疑，这不应该是首选的解决方案，
// 一个更好的不使用 eval 的解决方案应该得到充分考虑并优先采用。


// 建议绝对不要省略分号，同时也提倡将花括号和相应的表达式放在一行， 
// 对于只有一行代码的 if 或者 else 表达式，也不应该省略花括号。 
// 这些良好的编程习惯不仅可以提到代码的一致性，而且可以防止解析器改变代码行为的错误处理。


// setInterval 的堆调用
// setTimeout 只会执行回调函数一次，不过 setInterval - 正如名字建议的 - 会每隔 X 毫秒执行函数一次。 但是却不鼓励使用这个函数。
// 当回调函数的执行被阻塞时，setInterval 仍然会发布更多的回调指令。在很小的定时间隔情况下，这会导致回调函数被堆积起来。

function foo(){
    // 阻塞执行 1 秒
}
setInterval(foo, 100);



// 处理可能的阻塞调用
// 最简单也是最容易控制的方案，是在回调函数内部使用 setTimeout 函数。

function foo(){
    // 阻塞执行 1 秒
    setTimeout(foo, 100);
}
foo();

// 这样不仅封装了 setTimeout 回调函数，而且阻止了调用指令的堆积，可以有更多的控制。
// foo 函数现在可以控制是否继续执行还是终止执行。

// 手工清空定时器
// 可以通过将定时时产生的 ID 标识传递给 clearTimeout 或者 clearInterval 函数来清除定时， 至于使用哪个函数取决于调用的时候使用的是 setTimeout 还是 setInterval。

var id = setTimeout(foo, 1000);
clearTimeout(id);

// 清除所有定时器
// 由于没有内置的清除所有定时器的方法，可以采用一种暴力的方式来达到这一目的。
// 清空"所有"的定时器
for(var i = 1; i < 1000; i++) {
    clearTimeout(i);
}
// 可能还有些定时器不会在上面代码中被清除（译者注：如果定时器调用时返回的 ID 值大于 1000），
// 因此我们可以事先保存所有的定时器 ID，然后一把清除。


// 隐藏使用 eval
// setTimeout 和 setInterval 也接受第一个参数为字符串的情况。 这个特性绝对不要使用，因为它在内部使用了 eval。
// 注意: 由于定时器函数不是 ECMAScript 的标准，如何解析字符串参数在不同的 JavaScript 引擎实现中可能不同。 事实上，微软的 JScript 会使用 Function 构造函数来代替 eval 的使用。
function foo() {
    // 将会被调用
}
function bar() {
    function foo() {
        // 不会被调用
    }
    setTimeout('foo()', 1000);
}
bar();

// 由于 eval 在这种情况下不是被直接调用，因此传递到 setTimeout 的字符串会自全局作用域中执行； 
// 因此，上面的回调函数使用的不是定义在 bar 作用域中的局部变量 foo。
// 建议不要在调用定时器函数时，为了向回调函数传递参数而使用字符串的形式。


function foo(a, b, c) {}
// 不要这样做
setTimeout('foo(1, 2, 3)', 1000)
// 可以使用匿名函数完成相同功能
setTimeout(function() {
    foo(1, 2, 3);
}, 1000)

// 绝对不要使用字符串作为 setTimeout 或者 setInterval 的第一个参数， 这么写的代码明显质量很差。
// 当需要向回调函数传递参数时，可以创建一个匿名函数，在函数内执行真实的回调函数。


// http://www.cnblogs.com/mountain-mist/articles/1600995.html
判断变量null或者undefined
在 DOM 应用中，一般只需要用 (!exp) 来判断就可以了
因为 DOM 应用中，可能返回 null，可能返回 undefined，如果具体判断 null 还是 undefined 会使程序过于复杂。


$("#datepicker1").datepicker();
$("#datepicker1").datepicker("setDate",new Date(Date.now()-24*3600*1000));

//boilerplate
(function(util,$,undefined){

}(window.util=window.util||{},jQuery));


//让方法立即执行
//(1,2,3)逗号表达式，返回值：3
(function(argument) {
    alert(argument);
})([(1,2,3)])

apply,call
对于第一个参数意义都一样，但对第二个参数：
apply传入的是一个参数数组，也就是将多个参数组合成为一个数组传入，而call则作为call的参数传入（从第二个参数开始）。
如 func.call(func1,var1,var2,var3)对应的apply写法为：func.apply(func1,[var1,var2,var3])


// new
> new('')
TypeError: string is not a function
    at repl:1:2
    at REPLServer.self.eval (repl.js:110:21)
    at Interface.<anonymous> (repl.js:239:12)
    at Interface.emit (events.js:95:17)
    at Interface._onLine (readline.js:202:10)
    at Interface._line (readline.js:531:8)
    at Interface._ttyWrite (readline.js:760:14)
    at ReadStream.onkeypress (readline.js:99:10)
    at ReadStream.emit (events.js:98:17)
    at emitKey (readline.js:1095:12)
> new Function
[Function]
> new(Function)
[Function]
> new(function(){})
{}
> var s=new(function(){})
undefined
> s
{}



<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/jquery-2.0.0.min.js">\x3C/script>')</script>
上面，我们使用了“||”运算符判断window.jQuery是否为未定义类型，
如果window.jQuery未定义执行后面的代码加载本地jQuery脚本，
HTML5 Boilerplate就使用以上的方法处理CDN内容加载失败的情况。

$.data('')得到的数据，如果是数字，则会转换成数值型，但是$.attr('data-*')则不会转成数值型，而会变成string型
所以如果使用attr获取值，就使用＝＝判断，而不是＝＝＝



jquery绑定事件用on，取消绑定用off
$('document').on('click', '.selector', function(event) {
    event.preventDefault();
    /* Act on the event */
});
绑定一次用one
