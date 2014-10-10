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
