(function(util,$,undefined){
	// json传入的必须是字典数据，不要传入字符串
	util.ajax = function(url, json, callback) {
		$.ajax({
			type : "POST",
			// 默认为异步
			async : true,
			url : url,
			dataType : "json",
			data:json,
			//data : JSON.stringify(json),
			//contentType : 'application/json; charset=utf-8',
			success : callback,
		});
	};
	// json传入的必须是字典数据，不要传入字符串
	util.ajaxget = function(url, json, callback) {
		$.ajax({
			type : "GET",
			//将get方法设置为同步
			async : false,
			url : url,
			dataType : "json",
			data : json,
			success : callback,
		});
	};
	// 数组是否含有指定元素
	util.arrayContains = function(arr, str) {
		var i = arr.length;
		while (i--) {
			if (arr[i] === str) {
				return true;
			}
		}
		return false;
	};
	// 数组中指定字符串的位置
	util.arrayIndex = function(arr, str) {
		var i = arr.length;
		while (i--) {
			if (arr[i] === str) {
				return i;
			}
		}
		return -1;
	};
	// 含有map的数组中指定map的位置
	util.arrayMapIndex = function(arr, map) {
		var i = arr.length;
		while (i--) {
			if (util.mapCompare(arr[i], map)) {
				return i;
			}
		}
		return -1;
	};
	// 数组删除元素
	util.arrayPop = function(arr, dx) {
		if (isNaN(dx) || dx > this.length) {
			return false;
		}
		for (var i = 0, n = 0; i < arr.length; i++) {
			if (arr[i] != arr[dx]) {
				arr[n++] = arr[i]
			}
		}
		arr.length -= 1
	};
	// 比较两个map是否相等
	util.mapCompare = function(map1, map2) {
		for ( var i in map1)
			if (map1[i] != map2[i])
				return false;
		for ( var i in map2)
			if (map2[i] != map1[i])
				return false;
		return true;
	};
	// 计算时间差，日期差
	util.timeDifference = function(startTime, endTime) {
		var diffDetail         = {};
		// 毫秒差
		diffDetail.msDiff      = endTime - startTime;
		// 分钟差
		diffDetail.minutesDiff = Math.floor(diffDetail.msDiff / (60 * 1000));
		// 小时差
		diffDetail.hoursDiff   = Math.floor(diffDetail.minutesDiff / 60);
		// 天数差
		diffDetail.daysDiff    = Math.floor(diffDetail.hoursDiff / 24);
		return diffDetail;
	};
	// 睡眠多少时间
	util.sleep = function(seconds) {
		var milliSeconds = seconds * 1000;
		var startTime    = new Date().getTime();
		while (new Date().getTime() < startTime + milliSeconds)
			;
	};
	// 判断变量类型
	util.getObjectType = function(o) {
		var _t;
		return ((_t = typeof (o)) == "object" ? Object.prototype.toString.call(
				o).slice(8, -1) : _t).toLowerCase();
	};
	// 获取url中的指定参数
	util.getQueryString = function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r   = window.location.search.substr(1).match(reg);
		if (r != null)
			return (r[2]);
		return null;
	};
	// 替换url中的指定参数值
	util.replaceQueryString = function(key,value) {
		var url=window.location.origin+window.location.pathname;
		var splits=window.location.search.substring(1).split("&");
		var b=false;
		var prefix="?";
		if(splits.length!=1||splits[0]!="")
			for(var i in splits){
				//i:'0'
				//'0'==0:true
				if(i==0) {
					url+="?";
					prefix="";
				}
				var _splits=splits[i].split("=");
				if(_splits[0]==key){
					url+=prefix+key+"="+value;
					b=true;
				}
				else
					url+=prefix+splits[i];
				prefix="&";
			}
		//若参数中无此key，则添加到url中
		if(b==false){
			url+=prefix+key+"="+value;
		}
		return url;
	};
	//将long型时间转换成yyyy-mm-dd hh:mm:ss格式
	util.getDateTime = function(date) {
		var ts = date || 0;
		var t,y,m,d,h,i,s;
		t = ts ? new Date(ts) : new Date();
		y = t.getFullYear();
		m = t.getMonth()+1;
		d = t.getDate();
		h = t.getHours();
		i = t.getMinutes();
		s = t.getSeconds();
		return y+'-'+(m<10?'0'+m:m)+'-'+(d<10?'0'+d:d)+' '+(h<10?'0'+h:h)+':'+(i<10?'0'+i:i)+':'+(s<10?'0'+s:s);
	};
	//将long型时间转换成yyyy-mm-dd格式
	util.getDate = function(date) {
		var ts = date || 0;
		var t,y,m,d;
		t = ts ? new Date(ts) : new Date();
		y = t.getFullYear();
		m = t.getMonth()+1;
		d = t.getDate();
		return y+'-'+(m<10?'0'+m:m)+'-'+(d<10?'0'+d:d);
	};
	//将long型时间转换成hh:mm:ss格式
	util.getTime = function(date) {
		var ts = date || 0;
		var t,y,m,d,h,i,s;
		t = ts ? new Date(ts) : new Date();
		h = t.getHours();
		i = t.getMinutes();
		s = t.getSeconds();
		return (h<10?'0'+h:h)+':'+(i<10?'0'+i:i)+':'+(s<10?'0'+s:s);
	};
	util.getDayAndHourAndMinute = function(date) {
		var ts = date || 0;
		var t,y,m,d,h,i,s;
		t = ts ? new Date(ts) : new Date();
		h = t.getHours();
		i = t.getMinutes();
		d = t.getDate();
		return d+"/"+(h<10?'0'+h:h)+':'+(i<10?'0'+i:i);
	};
	//将map型数据转换成url的parameter
	util.buildUrlParameter = function(map){		
		var url="";
		var index=0;
		for(var i in map){
			if(!map[i])
				continue;
			if(index==0)
				url+=i+"="+map[i];
			else
				url+="&"+i+"="+map[i];
			index++;
		}
		return url;
	};
	//将与url匹配的链接高亮显示
	util.highlightLink = function(node){
		var url=location.href.split(/\?/)[0];
		var index=url.lastIndexOf("/");
		var p=url.substring(index+1);
		if(p=="")
			return;
		$(node).each(function(){
			if(this.href.match(p)){
				$(this).css({
					"color":'#269abc',
					"background-color": "#f5f5f5"
				});
			}
		});
	};
	//判断是否为数字
	util.isNumber = function(val){
		return /^\d+$/ig.test(val);
	};
	//生成翻页符
	//当前数据个数
	//pageSize和currentPage的url参数名
	//翻页符节点的ID：'#node'
	util.setPageIdentifier = function(currentSize,pageSizeName,currentPageName,nodeName){
		var pageSize;
		var a=this.getQueryString(pageSizeName);
		if(a==null||isNaN(Number(a)))
			pageSize=10;
		else 
			pageSize=parseInt(a);

		var currentPage;
		var b=this.getQueryString(currentPageName);
		if(b==null||isNaN(Number(b)))
			currentPage=1;
		else 
			currentPage=parseInt(b);

		//当currentPage大于pageIdentifierCount时，出现翻页符
		//上一页和下一页不受影响
		var pageIdentifierCount=3;

		var lastPage=true;
		var nextPage=false;
		if(pageSize==currentSize)
			nextPage=true;
		
		if(currentPage==1)
			lastPage=false;
		
		if(lastPage==true){
			var url=this.replaceQueryString(currentPageName,currentPage-1);
			$(nodeName).append("<li><a href='"+url+"'>上一页</a></li>");
		}

		if(currentPage>pageIdentifierCount){
			for(var i=currentPage-pageIdentifierCount;i<currentPage;i++){
				var url=this.replaceQueryString(currentPageName,i);
				$(nodeName).append("<li><a href='"+url+"'>"+i+"</a></li>");
			}
		}

		//对当前页加标记
		$(nodeName).append("<li><a class='currentPage'>"+currentPage+"</a></li>");

		if(nextPage==true){
			var url=this.replaceQueryString(currentPageName,currentPage+1);
			$(nodeName).append("<li><a href='"+url+"'>下一页</a></li>");
		}
			
	};
	
}(window.util=window.util||{},jQuery));

window.log = function(text){
	console.log(text);
}