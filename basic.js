

//构造url
var map={"userid":uid};
var parameters=util.buildUrlParameter(map);
var url="${rc.contextPath}/device/getuserdevices.json?"+parameters;
util.ajax(url,{},function(info){
	
});