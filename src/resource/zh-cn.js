global.errorCode = {
    10230:"用户身份错误",
    10201:"信息缺失，请补全信息重新提交",
    10202:"验证码错误，请输入正确验证码",
    10203:"密码错误过多，请10分钟后再次登录",
    10204:"账号不存在，请输入正确账号",
    10205:"密码错误，请输入正确密码",
    10014:"参数错误",
    10015:"导入失败",
    10061:"参数缺失",


}

global.getErrorMessage = function (code) {
    if (errorCode[code] != undefined) {
        return errorCode[code];
    } else {
        return code;
    }
}
