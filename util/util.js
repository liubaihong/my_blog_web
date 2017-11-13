/**
 * Created by suy on 2017/3/16.
 */

const util = {
	/**
	 * 转换object为url字符串
	 * @param {object} data 需要转换成url字符串的object
	 * @return {string} url字符串
	 */
	urlStringify(data) {
		let str = '';
		for(let d in data) {
			str += d + '=' + data[d] + '&';
		}
		return str.substring(0, str.length - 1);
	},
	getBaseInfo() {
		return {
			jwtString: $.cookie('token'),
			userName: decodeURI($.cookie('userCode')),
			userCode: $.cookie('username')
		};
	},
	loadingShow() {
		window.Global.loading++;
	},
	loadingHide() {
		window.Global.loading--;
	},
    downLoad(url,searchParam){
	    url += '&' + this.urlStringify(this.getBaseInfo());
        if(searchParam !=null){
	        let data=searchParam;
	        for(let key in data){
	            url += '&' + key + '=' + data[key];
            }
        }
        window.location.href = url;
    },
    checkIdNo(IdNo){
		var pattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 
		if(!(pattern.test(IdNo))){
			return false;
		}
		return true;
	},
    exportExcel(url,searchParam){
        if(searchParam !=null){
            let data=searchParam;
            for(let key in data){
                url += '&' + key + '=' + data[key];
            }
        }
        window.location.href = url;
    }
};
module.exports = util;