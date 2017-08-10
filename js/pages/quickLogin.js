import $ from "../libs/jquery-3.1.0.min";
require("../libs/sweetalert.min");
require("../common/common");
require("../../css/sweetalert.css")


function urlExtracNormal(url) {
    var paraStr = url.search.substr(1);
    var parHash = url.hash.substr(1);
    if (paraStr.indexOf("qq") > -1) { //如果是QQ
        var paraArray = parHash.split("&");
    } else {
        var paraArray = paraStr.split("&");
    }
    var paraObj = {};
    for (var i = 0; i < paraArray.length; i++) {
        var pars = paraArray[i].split("=");
        paraObj[pars[0]] = pars[1];
    };
    if (paraStr.indexOf("qq") > -1) { //如果是QQ
        var pars_qq = paraStr.slice(paraStr.indexOf("qq"), -1);
        paraObj.directway = pars_qq;
    }
    return paraObj;
}

var parObj = urlExtracNormal(window.location);
var redirecUrl = ""; //回调地址
// parObj = {};
var userInfo = {};
if (parObj.directway.indexOf("wechat") > -1) { //如果为微信快速登录
    if (parObj.directway.indexOf("@") > -1) {
        redirecUrl = parObj.directway.slice(parObj.directway.indexOf("@") + 1);
    }
    EventUtils.ajaxReq("/center/user/WechatLogin?code=" + parObj.code, "get", {}, function(resp, status) {
        if (resp.data.status == "0") {
            userInfo.nickName = resp.data.nickName;
            userInfo.userIcon = resp.data.icon;
            userInfo.openId = resp.data.openId;
            $(".bg").show();
            $(".bind-mobile-box").show();
        } else {
            if (resp.data.cardStatus == "0") {
                var parstring = "userType=0&userId=" + resp.data.userId + "&loginId=" + resp.data.loginIdentifier;
                window.location.href = "vCards.html?" + window.btoa(parstring);
            } else {
                var parstring = "userId=" + resp.data.userId + "&loginId=" + resp.data.loginIdentifier;
                if (redirecUrl) {
                    if (redirecUrl.indexOf("?") > -1) {
                        var url_pre = redirecUrl.split("?")[0];
                        var url_para = redirecUrl.split("?")[1];
                        if (url_para) {
                            url_para = window.atob(url_para) + "&" + parstring;
                            url_para = window.btoa(url_para);
                        } else {
                            url_para = window.btoa(parstring);
                        }
                        window.location.href = url_pre + "?" + url_para;
                    } else {
                        window.location.href = redirecUrl + "?" + window.btoa(parstring);
                    }
                } else {
                    window.location.href = "pCenter.html?" + window.btoa(parstring);
                }
            }
        }
    });
} else if (parObj.directway.indexOf("qq") > -1) { //如果为qq快速登录
    if (parObj.directway.indexOf("@") > -1) {
        redirecUrl = parObj.directway.slice(parObj.directway.indexOf("@") + 1);
    }
    EventUtils.ajaxReq("/center/user/QqLogin?accessToken=" + parObj["access_token"], "get", {}, function(resp, status) {
        if (resp.data.status == "0") {
            userInfo.nickName = resp.data.nickName;
            userInfo.userIcon = resp.data.icon;
            userInfo.openId = resp.data.openId;
            $(".bg").show();
            $(".bind-mobile-box").show();
        } else {
            if (resp.data.cardStatus == "0") {
                var parstring = "userType=0&userId=" + resp.data.userId + "&loginId=" + resp.data.loginIdentifier;
                window.location.href = "vCards.html?" + window.btoa(parstring);
            } else {
                var parstring = "userId=" + resp.data.userId + "&loginId=" + resp.data.loginIdentifier;
                if (redirecUrl) {
                    if (redirecUrl.indexOf("?") > -1) {
                        var url_pre = redirecUrl.split("?")[0];
                        var url_para = redirecUrl.split("?")[1];
                        if (url_para) {
                            url_para = window.atob(url_para) + "&" + parstring;
                            url_para = window.btoa(url_para);
                        } else {
                            url_para = window.btoa(parstring);
                        }
                        window.location.href = url_pre + "?" + url_para;
                    } else {
                        window.location.href = redirecUrl + "?" + window.btoa(parstring);
                    }
                } else {
                    window.location.href = "pCenter.html?" + window.btoa(parstring);
                }
            }
        }
    });
} else if (parObj.directway.indexOf("weibo") > -1) {
    if (parObj.directway.indexOf("@") > -1) {
        redirecUrl = parObj.directway.slice(parObj.directway.indexOf("@") + 1);
        console.log(redirecUrl);
    }
    EventUtils.ajaxReq("/center/user/WeboLogin?code=" + parObj.code, "get", {}, function(resp, status) {
        if (resp.data.status == "0") {
            userInfo.nickName = resp.data.nickName;
            userInfo.userIcon = resp.data.icon;
            userInfo.openId = resp.data.openId;
            $(".bg").show();
            $(".bind-mobile-box").show();
        } else {
            if (resp.data.cardStatus == "0") {
                var parstring = "userType=0&userId=" + resp.data.userId + "&loginId=" + resp.data.loginIdentifier;
                window.location.href = "vCards.html?" + window.btoa(parstring);
            } else {
                var parstring = "userId=" + resp.data.userId + "&loginId=" + resp.data.loginIdentifier;
                if (redirecUrl) {
                    if (redirecUrl.indexOf("?") > -1) {
                        var url_pre = redirecUrl.split("?")[0];
                        var url_para = redirecUrl.split("?")[1];
                        if (url_para) {
                            url_para = window.atob(url_para) + "&" + parstring;
                            url_para = window.btoa(url_para);
                        } else {
                            url_para = window.btoa(parstring);
                        }
                        window.location.href = url_pre + "?" + url_para;
                    } else {
                        window.location.href = redirecUrl + "?" + window.btoa(parstring);
                    }
                } else {
                    window.location.href = "pCenter.html?" + window.btoa(parstring);
                }
            }
        }
    });
}
$("#submitBtn").click(function() {
    var postdata = {
        nickName: userInfo.nickName,
        icon: userInfo.userIcon,
        openId: userInfo.openId,
        code: $(".code-data input").val(),
        inputRandomCode: $(".valid-data input").val(),
        phone: $(".mobile-data input").val()
    }
    if (!postdata.code || !postdata.inputRandomCode || !postdata.phone) {
        swal({
            title: "",
            text: "请检查信息是否完整！",
            type: "warning"
        });
        return false;
    }
    if (!variableUtils.regExp.mobile.test(postdata.phone)) {
        swal({
            title: "",
            text: "手机格式不正确！",
            type: "warning"
        });
        return false;
    }
    if (parObj.directway == "qq") {
        postdata.type = 0;
    } else if (parObj.directway == "wechat") {
        postdata.type = 1;
    } else if (parObj.directway == "weibo") {
        postdata.type = 2;
    }
    EventUtils.ajaxReq("/center/user/BindPhone", "post", postdata, function(resp, status) {
        if (resp.data.cardStatus == "0") {
            var parstring = "userType=0&userId=" + resp.data.userId + "&loginId=" + resp.data.loginIdentifier;
            window.location.href = "vCards.html?" + window.btoa(parstring);
        } else {
            var parstring = "userId=" + resp.data.userId + "&loginId=" + resp.data.loginIdentifier;
            window.location.href = "pCenter.html?" + window.btoa(parstring);
        }
    });
})

$(".mobile-data input").bind("input", function() {
    if (!/^\d{0,11}$/.test(this.value)) {
        this.value = this.value.slice(0, -1);
    }
})
$(".valid-data .code-pic").click(function() {
    this.src = "https://www.xiaoqiztc.com/easily_xq_WebApi/sys/img?" + Math.random();
})
$(".code-data button").click(function() {
    var mobile_value = $(".mobile-data input").val();
    if (!variableUtils.regExp.mobile.test(mobile_value)) {
        swal({
            title: "",
            text: "手机格式不正确！",
            type: "warning"
        });
        return false;
    }
    $(this).attr("disabled", true);
    var start = 0;
    var _this = this;
    var timer = setInterval(function() {
        start++;
        if (start == 60) {
            $(_this).html("获取验证码");
            $(_this).attr("disabled", false);
            clearInterval(timer);
        } else {
            $(_this).html("重新获取 (" + (60 - start) + "s)");
        }
    }, 1000);
    var postdata = {
        mobile: mobile_value,
        type: 3
    };
    var callback = function(data, status) {
        swal({
            title: "",
            text: data.info,
            type: "warning"
        })
    };
    EventUtils.ajaxReq('/sys/mobileCode', 'post', postdata, callback);
})