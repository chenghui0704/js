
//让方法立即执行
//(1,2,3)逗号表达式，返回值：3
(function(argument) {
	alert(argument);
})([(1,2,3)])

apply,call
对于第一个参数意义都一样，但对第二个参数：
apply传入的是一个参数数组，也就是将多个参数组合成为一个数组传入，而call则作为call的参数传入（从第二个参数开始）。
如 func.call(func1,var1,var2,var3)对应的apply写法为：func.apply(func1,[var1,var2,var3])