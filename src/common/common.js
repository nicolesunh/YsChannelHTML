/**
 * Created by Administrator on 2017/8/16.
 */
const commonMethods = {
    setPermission: function (value, item) {
        if (item.indexOf(value) == -1) {
            return false
        }
        else {
            return true
        }
    },
    //时间格式化
    formatDate: function (date, fmt) {
        if (date == null || date == '') {
            return '';
        }
        date = getTimeZoneDate(date);
        function padLeftZero(str) {
            return ('00' + str).substr(str.length);
        }

        function getTimeZoneDate(d) {
            var localTime = d.getTime();
            var localOffset = d.getTimezoneOffset() * 60000; //获得当地时间偏移的毫秒数
            var utc = localTime + localOffset; //utc即GMT时间
            var offset = 8; //以北京时间为例，东8区
            var beijing = utc + (3600000 * offset);
            var nd = new Date(beijing);
            return nd;
        }

        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        let o = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds()
        };
        for (let k in o) {
            if (new RegExp(`(${k})`).test(fmt)) {
                let str = o[k] + '';
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
            }
        }
        return fmt;
    },
    //良民证验证（18位）
    validateChinaCt: function (data) {
        var reg_Card = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
        if (data == '') {
            return false;
        } else {
            if (reg_Card.test(data)) {
                var area = {
                    11: "北京",
                    12: "天津",
                    13: "河北",
                    14: "山西",
                    15: "内蒙古",
                    21: "辽宁",
                    22: "吉林",
                    23: "黑龙江",
                    31: "上海",
                    32: "江苏",
                    33: "浙江",
                    34: "安徽",
                    35: "福建",
                    36: "江西",
                    37: "山东",
                    41: "河南",
                    42: "湖北",
                    43: "湖南",
                    44: "广东",
                    45: "广西",
                    46: "海南",
                    50: "重庆",
                    51: "四川",
                    52: "贵州",
                    53: "云南",
                    54: "西藏",
                    61: "陕西",
                    62: "甘肃",
                    63: "青海",
                    64: "宁夏",
                    65: "新疆",
                    71: "台湾",
                    81: "香港",
                    82: "澳门",
                    91: "国外"
                };

                var idCard = data;
                var ereg;
                var Y, JYM;
                var S, M;
                var idCard_array = new Array();
                idCard_array = idCard.split("");
                //地区检验
                if (area[parseInt(idCard.substr(0, 2))] == null) {
                    return false;
                }

                //身份号码位数及格式检验
                switch (idCard.length) {
                    case 15: {

                        if (((parseInt(idCard.substr(6, 2)) + 1900) % 4 == 0 || ((parseInt(idCard.substr(6, 2)) + 1900) % 100 == 0 && (parseInt(idCard.substr(6, 2)) + 1900) % 4 == 0 )) || ((parseInt(idCard.substr(6, 2)) + 2000) % 4 == 0 || ((parseInt(idCard.substr(6, 2)) + 2000) % 100 == 0 && (parseInt(idCard.substr(6, 2)) + 2000) % 4 == 0 ))) {
                            ereg = /^[0-9]{6}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;//测试出生日期的合法性
                        }
                        else {
                            ereg = /^[0-9]{6}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;//测试出生日期的合法性
                        }
                        if (!ereg.test(idCard)) {
                            return false;
                        }

                        break;
                    }
                    case 18: {
                        //18位身份号码检测
                        //出生日期的合法性检查
                        //闰年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))
                        //平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))
                        if (parseInt(idCard.substr(6, 4)) % 4 == 0 || (parseInt(idCard.substr(6, 4)) % 100 == 0 && parseInt(idCard.substr(6, 4)) % 4 == 0 )) {
                            ereg = /^[0-9]{6}[0-9]{4}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;//闰年出生日期的合法性正则表达式
                        }
                        else {
                            ereg = /^[0-9]{6}[0-9]{4}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;//平年出生日期的合法性正则表达式
                        }
                        if (ereg.test(idCard)) {
                            //测试出生日期的合法性
                            //计算校验位

                            S = (parseInt(idCard_array[0]) + parseInt(idCard_array[10])) * 7
                                + (parseInt(idCard_array[1]) + parseInt(idCard_array[11])) * 9
                                + (parseInt(idCard_array[2]) + parseInt(idCard_array[12])) * 10
                                + (parseInt(idCard_array[3]) + parseInt(idCard_array[13])) * 5
                                + (parseInt(idCard_array[4]) + parseInt(idCard_array[14])) * 8
                                + (parseInt(idCard_array[5]) + parseInt(idCard_array[15])) * 4
                                + (parseInt(idCard_array[6]) + parseInt(idCard_array[16])) * 2
                                + parseInt(idCard_array[7]) * 1
                                + parseInt(idCard_array[8]) * 6
                                + parseInt(idCard_array[9]) * 3;
                        }
                        Y = S % 11;
                        M = "F";
                        JYM = "10X98765432";
                        M = JYM.substr(Y, 1);//判断校验位

                        if (M == idCard_array[17].toLocaleUpperCase()) {
                            return true;
                        }
                        else {
                            return false;
                        }
                        break;

                    }
                    default: {
                        return false;
                        break;
                    }
                }
            }
            else {
                return false;
            }
        }
    }
}

export default commonMethods;