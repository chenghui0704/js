//将需要检查的文本框添加class='checkChanged'
//在页面加载后先保存一份要检查的文本的镜像
var node=".checkChanged";
var content = [];
$(node).each(function() {
    var one = $(this).val();
    content.push(one);
});

//页面刷新或者离开时检查实际内容和镜像内容是否一致
$(window).bind('beforeunload', function() {
		var b = false;
		$(node).each(function(index) {
			var one = $(this).val();
			if (content[index] != one)
				b = true;
		});
		if (b == true)
			return '内容尚未保存';
});
