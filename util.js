util = {
	// json传入的必须是字典数据，不要传入字符串
	ajax : function(url, json, callback) {
		$.ajax({
			type : "POST",
			// 默认为异步
			async : true,
			url : url,
			dataType : "json",
			data : JSON.stringify(json),
			contentType : 'application/json; charset=utf-8',
			success : callback,
		});
	},
	// json传入的必须是字典数据，不要传入字符串
	ajaxget : function(url, json, callback) {
		$.ajax({
			type : "GET",
			// 将get方法设置为同步
			async : false,
			url : url,
			dataType : "json",
			data : json,
			success : callback,
		});
	},
	// 数组是否含有指定元素
	arrayContains : function(arr, str) {
		var i = arr.length;
		while (i--) {
			if (arr[i] === str) {
				return true;
			}
		}
		return false;
	},
	// 数组中指定字符串的位置
	arrayIndex : function(arr, str) {
		var i = arr.length;
		while (i--) {
			if (arr[i] === str) {
				return i;
			}
		}
		return -1;
	},
	// 含有map的数组中指定map的位置
	arrayMapIndex : function(arr, map) {
		var i = arr.length;
		while (i--) {
			if (util.mapCompare(arr[i], map)) {
				return i;
			}
		}
		return -1;
	},
	// 数组删除元素
	arrayPop : function(arr, dx) {
		if (isNaN(dx) || dx > this.length) {
			return false;
		}
		for (var i = 0, n = 0; i < arr.length; i++) {
			if (arr[i] != arr[dx]) {
				arr[n++] = arr[i]
			}
		}
		arr.length -= 1
	},
	// 比较两个map是否相等
	mapCompare : function(map1, map2) {
		for ( var i in map1)
			if (map1[i] != map2[i])
				return false;
		for ( var i in map2)
			if (map2[i] != map1[i])
				return false;
		return true;
	},
	// 计算时间差，日期差
	timeDifference : function(startTime, endTime) {
		var diffDetail = {};
		// 毫秒差
		diffDetail.msDiff = endTime - startTime;
		// 分钟差
		diffDetail.minutesDiff = Math.floor(diffDetail.msDiff / (60 * 1000));
		// 小时差
		diffDetail.hoursDiff = Math.floor(diffDetail.minutesDiff / 60);
		// 天数差
		diffDetail.daysDiff = Math.floor(diffDetail.hoursDiff / 24);
		return diffDetail;
	},
	// 睡眠多少时间
	sleep : function(seconds) {
		var milliSeconds = seconds * 1000;
		var startTime = new Date().getTime();
		while (new Date().getTime() < startTime + milliSeconds)
			;
	},
	// 判断变量类型
	getObjectType : function(o) {
		var _t;
		return ((_t = typeof (o)) == "object" ? Object.prototype.toString.call(
				o).slice(8, -1) : _t).toLowerCase();
	},
	// 获取url中的指定参数
	getQueryString : function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null)
			return (r[2]);
		return null;
	},
	getDateTime : function(date) {
		var date = new Date(date);
		var now = "";
		now = date.getFullYear() + "-";
		now += (date.getMonth() + 1) + "-";
		now += date.getDate() + " ";
		now += date.getHours() + ":";
		now += date.getMinutes() + ":";
		now += date.getSeconds() + "";
		return now;
	},
	buildUrlParameter:function(map){
		var url="";
		var index=0;
		for(var i in map){
			if(index==0)
				url+=i+"="+map[i];
			else
				url+="&"+i+"="+map[i];
			index++;
		}
		return url;
	}
};
log = function(text) {
	console.log(text);
};