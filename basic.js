

//构造url
var map={"userid":uid};
var parameters=util.buildUrlParameter(map);
var url="${rc.contextPath}/device/getuserdevices.json?"+parameters;
util.ajax(url,{},function(info){
	
});

//在离开页面或者刷新页面时执行绑定的事件
$(window).bind('beforeunload', function() {

});
