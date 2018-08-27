/**
 * 获取input标签file的绝对路径，解决fakepath问题，兼容各种浏览器
 * 
 * @param  {[file]} file 文件对象，一般为this.files[0]
 * @return {[type]} 一个二进制URL对象：blob:http://doamin.com/5376c16a-02f9-489f-b30c-97a1808d5724
 */
function getObjectURL(file) {
	var url = null;
	if (window.createObjcectURL != undefined) {
		url = window.createOjcectURL(file);
	} else if (window.URL != undefined) {
		url = window.URL.createObjectURL(file);
	} else if (window.webkitURL != undefined) {
		url = window.webkitURL.createObjectURL(file);
	}
	return url;
}

/**
 * 判空函数
 * @param  {[type]}  val [description] 字符串入参
 * @return {Boolean}     [description]
 */
function isBlank(val){
	return ((undefined == val) || (null == val) || ("undefined" == val) || ("" == val))
}

/**
 * 转为unicode编码函数
 * @param  {[type]} str [description] 字符串入参
 * @return {[type]}     [description]
 */
function encodeUnicode(str){
	var res = [];
	for(var i = 0; i < str.length; i++){
		res[i] = ("00" + str.charCodeAt(i).toString(16).slice(-4));
	}
	return "\\u" + res.join("\\u");
}

/**
 * unicode解码函数
 * @param  {[type]} str [description] 需要解码的字符串
 * @return {[type]}     [description]
 */
function decodeUnicode(str){
	str = str.replace(/\\/g,"%");
	return unescape(str);
}