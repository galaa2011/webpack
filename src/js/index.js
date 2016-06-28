require('../css/main.css');
let _code = require('../data/code');
// let _split = require('../data/split');

// require.ensure(['../data/code'], function(require) {
// 	var _code = require('../data/code');
// 	console.log(_code);
// });


// var load = require("bundle!../data/code.js");
// load(function(fileJsExports) {
//     console.log(fileJsExports);
// });

function loadCode(path) {


	// 生成两个文件1.1.js和2.2.js，分别对应code.js和split.js
	// let load = require("bundle!../data/" + path);
	// load(function(fileJsExports) {
	// 	console.log(fileJsExports);
	// });



	// 生成一个文件1.1.js，包含code和split内容
	// require.ensure([], function(require) {
	// 	let _code = require('../data/' + path);
	// 	console.log(_code);
	// });

	
}
loadCode('code');

class Code {
	constructor(remark) {
		this.remark = remark;
	}
	run() {
		alert(this.remark);
	}
}
let obj = {
	a: 1,
};
let loginBtn = $('#loginBtn');
let code = new Code('webpack 学习课程');
code.run();