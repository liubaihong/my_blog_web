/**
 * Created by suy on 2017/3/16.
 */
//let url = 'http://10.213.24.18:8086',
//let url = 'http://10.211.151.97:8083',
let url = 'http://10.211.149.102:8080',
// let url = '',
	config = {
		version: '3.0.0',
		sessionTimeOut: 24 * 3600 * 1000,       /*cookie超时时间*/
		cutTrmNum: 1000,                        /*切终端数量*/
		limitDays: "M|-3"                       /*自定义允许时间跨度，"M|-3"表示允许跨度3个月（月份要用负数），"D|90"表示允许跨度90天*/
	};

config.url = {
	helloWorld: url + "/hello_world?age=26"
};

module.exports = config;