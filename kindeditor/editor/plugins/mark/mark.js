KindEditor.plugin('mark', function(K) {
	var editor = this, name = 'mark';
	editor.clickToolbar(name, function() {
	//	editor.appendHtml('</br>This is from mark.js');
	//	editor.exec('bold');
		var html = editor.selectedHtml();
		alert(html);
		html="<span style='font-weight:bold;color:red'>"+html+"</span>";
		var newHtml=editor.count('text');
		alert(newHtml);
		editor.insertHtml(html);
	});
});