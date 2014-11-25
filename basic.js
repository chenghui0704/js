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
myArray = [];//仍然是 [1, 2, 3]
myArray.length = 0;// 正确的方法是保持引用

//合并数组
var mergeTo = [4,5,6];
var mergeFrom = [7,8,9];
Array.prototype.push.apply(mergeTo, mergeFrom);




