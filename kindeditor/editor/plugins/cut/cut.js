KindEditor.plugin('cut', function(K) {
	var editor = this, name = 'cut';
	editor.clickToolbar(name, function() {
		editor.appendHtml('</br>This is from mark.js');
	});
});