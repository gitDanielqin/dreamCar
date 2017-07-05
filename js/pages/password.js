import $ from "../libs/jquery-3.1.0.min";
require("../libs/sweetalert.min");
require("../common/common")
var Vue = require("../libs/vue.min");
require("../../css/base.css")
require("../../css/sweetalert.css")
require("../../css/password.css")
var regExp = {
    mobile: /^1[34578]\d{9}$/,
    email: /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,
    password: /^[a-zA-Z0-9]{6,16}$/
}
var parObj = EventUtils.urlExtrac(window.location);
var imgHtml = ""
    // EventUtils.ajaxReq("/sys/img", "GET", {}, function(resp, status) {
    //     $(".code-pic")[0].src = "http://www.xiaoqiztc.com/easily_xq_WebApi/sys/img";
    // imgHtml = "<img src='http://192.168.0.104:8080/easily_xq_WebApi/sys/img'/>";
    // $(".step-cont-1 .pic-code")[0].src = 
    // imgHtml = "<img style='" + resp + "' />"
    // $(".step-cont-1 .pic-code").text(resp);
    // })
function switchCode() {
    $.ajax({
        url: "https://www.xiaoqiztc.com/easily_xq_WebApi/sys/img",
        type: "get",
        async: false,
        data: {},
        success: function(resp, status) {
            $(".code-pic")[0].src = "https://www.xiaoqiztc.com/easily_xq_WebApi/sys/img?" + Math.random();
        },
        error: function(data, status) {
            swal({
                title: "",
                text: "请求服务器数据错误，请稍后重试！",
                type: "warning"
            })
        },
        timeout: 100000
    })
}

var appCont = new Vue({
    el: "#app-content",
    data: {
        show: {
            step1: true,
            step2: false,
            step3: false,
            email: true,
            mobile: false,
            hint: false
        },
        account: {
            email: "",
            mobile: "",
            userId: "",
        },
        hint: "",
        userInfo: {
            account: "",
            picCode: "",
            mobile: "",
            email: "",
            emailValidCode: "",
            mobileValidCode: "",
            newPass: "",
            repeatPass: ""
        },
    },
    methods: {
        switchcode: switchCode,
        nextstep: function(index) {
            if (index == 1) {
                if (this.userInfo.account == "") {
                    this.hint = "账号不能为空！";
                    this.show.hint = true;
                    return false;
                }
                if (!variableUtils.regExp.email.test(this.userInfo.account) && !variableUtils.regExp.mobile.test(this.userInfo.account)) {
                    this.hint = "账号信息格式不正确！";
                    this.show.hint = true;
                    return false;
                }
                if (this.userInfo.picCode == "") {
                    this.hint = "验证码不能为空！";
                    this.show.hint = true;
                    return false;
                }
                var postdata = {
                        loginName: this.userInfo.account,
                        inputRandomCode: this.userInfo.picCode
                    }
                    // //console.log(postdata);
                EventUtils.ajaxReq("/sys/getOldConection?", "get", postdata, function(resp, status) {
                    //console.log(resp);
                    if (resp.data) {
                        appCont.account.email = resp.data.email;
                        appCont.account.mobile = resp.data.mobile;
                        appCont.account.userId = resp.data.userId;
                        appCont.show.step1 = false;
                        appCont.show.step2 = true;
                    } else {
                        swal({
                            title: "",
                            text: resp.info,
                            type: "error"
                        });
                        switchCode();
                    }
                });
                this.show.hint = false;
            }
        },
        postcode: function(type, obj) {
            if (type == "email") {
                if (appCont.userInfo.email == "") {
                    this.hint = "邮箱不能为空！";
                    this.show.hint = true;
                    return false;
                } else if (!variableUtils.regExp.email.test(appCont.userInfo.email)) {
                    this.hint = "邮箱格式不正确！";
                    this.show.hint = true;
                    return false;
                } else if (appCont.userInfo.email != appCont.account.email) {
                    this.hint = "输入的邮箱与绑定邮箱不一致！";
                    this.show.hint = true;
                    return false;
                } else {
                    var start = 0;
                    $(obj).attr("disabled", true);
                    var timer = setInterval(function() {
                        start++;
                        if (start == 60) {
                            obj.innerHTML = "发送验证码";
                            $(obj).attr("disabled", false);
                            clearInterval(timer);
                        } else {
                            obj.innerHTML = "重新获取 (" + (60 - start) + "s)";
                        }
                    }, 1000);
                    var postdata = {
                        email: appCont.userInfo.email,
                        type: 3
                    }
                    EventUtils.ajaxReq("/sys/emailCode", "post", postdata, function(resp, status) {
                        if (resp.code == "00000") {
                            swal({
                                title: "",
                                text: "验证码发送成功！",
                                type: "success",
                            });
                        } else {
                            swal({
                                title: "",
                                text: resp.info,
                                type: "error",
                            });
                        }
                    })
                }
            }
            if (type == "mobile") {
                if (appCont.userInfo.mobile == "") {
                    this.hint = "手机号不能为空！";
                    this.show.hint = true;
                    return false;
                } else if (!variableUtils.regExp.mobile.test(appCont.userInfo.mobile)) {
                    this.hint = "手机号格式不正确！";
                    this.show.hint = true;
                    return false;
                } else if (appCont.userInfo.mobile != appCont.account.mobile) {
                    this.hint = "您输入的手机号码与绑定手机不一致！";
                    this.show.hint = true;
                    return false;
                } else {
                    var start = 0;
                    $(obj).attr("disabled", true);
                    var timer = setInterval(function() {
                        start++;
                        if (start == 60) {
                            obj.innerHTML = "发送验证码";
                            $(obj).attr("disabled", false);
                            clearInterval(timer);
                        } else {
                            obj.innerHTML = "重新获取 (" + (60 - start) + "s)";
                        }
                    }, 1000);
                    var postdata = {
                        mobile: appCont.userInfo.mobile,
                        type: 3
                    }
                    EventUtils.ajaxReq("/sys/mobileCode", "post", postdata, function(resp, status) {
                        if (resp.code == "00000") {
                            swal({
                                title: "",
                                text: "验证码发送成功！",
                                type: "success",
                            });
                        } else {
                            swal({
                                title: "",
                                text: resp.info,
                                type: "error",
                            });
                        }
                    })
                }
            }

        },
        selectway: function(way, obj) {
            $(".backway-navs .on").removeClass("on");
            $(obj).addClass("on");
            if (way == "email") {
                this.show.hint = false;
                this.hint = "";
                this.show.email = true;
                this.show.mobile = false;
            } else if (way == "mobile") {
                this.show.hint = false;
                this.hint = "";
                this.show.email = false;
                this.show.mobile = true;
            }
        },
        pswViaEmail: function() {
            if (appCont.userInfo.email == "") {
                this.hint = "邮箱不能为空！";
                this.show.hint = true;
                return false;
            }
            if (!variableUtils.regExp.email.test(appCont.userInfo.email)) {
                this.hint = "您输入的邮箱格式不正确！";
                this.show.hint = true;
                return false;
            }
            if (appCont.userInfo.emailValidCode == "") {
                this.hint = "验证码不能为空！";
                this.show.hint = true;
                return false;
            }
            var postdata = {
                loginName: this.userInfo.email,
                type: 3,
                code: this.userInfo.emailValidCode
            }
            EventUtils.ajaxReq("/sys/checkCode", "get", postdata, function(resp, status) {
                //console.log(resp);
                if (resp.data.result == "1") {
                    appCont.show.step2 = false;
                    appCont.show.step3 = true;
                }
            })
            this.hint = "";
            this.show.hint = false;
        },
        pswViaMobile: function() {
            if (appCont.userInfo.mobile == "") {
                this.hint = "手机号不能为空！";
                this.show.hint = true;
                return false;
            }
            if (!variableUtils.regExp.mobile.test(appCont.userInfo.mobile)) {
                this.hint = "您输入的手机格式不正确！";
                this.show.hint = true;
                return false;
            }
            if (appCont.userInfo.mobileValidCode == "") {
                this.hint = "验证码不能为空！";
                this.show.hint = true;
                return false;
            }
            var postdata = {
                loginName: this.userInfo.mobile,
                type: 3,
                code: this.userInfo.mobileValidCode
            }
            EventUtils.ajaxReq("/sys/checkCode", "get", postdata, function(resp, status) {
                //console.log(resp);
                if (resp.data.result == "1") {
                    appCont.show.step2 = false;
                    appCont.show.step3 = true;
                }
            })
            this.hint = "";
            this.show.hint = false;
        },
        checkpass: function(type, obj) {
            if (type == "new") {
                if (variableUtils.regExp.password.test(this.userInfo.newPass)) {
                    $(obj).removeClass("wrong").addClass("right");
                } else if (this.userInfo.newPass != "") {
                    $(obj).removeClass("right").addClass("wrong");
                } else {
                    $(obj).removeClass("wrong");
                }
            } else {
                if (this.userInfo.repeatPass == this.userInfo.newPass) {
                    $(obj).removeClass("wrong").addClass("right");
                } else if (this.userInfo.repeatPass != "") {
                    $(obj).removeClass("right").addClass("wrong");
                } else {
                    $(obj).removeClass("wrong");
                }
            }
        },
        resetPsw: function() {
            if (appCont.userInfo.newPass == "") {
                this.hint = "新密码不能为空！";
                this.show.hint = true;
                return false;
            }
            if (!variableUtils.regExp.password.test(this.userInfo.newPass)) {
                this.hint = "密码格式不正确！";
                this.show.hint = true;
                return false;
            }
            if (this.userInfo.repeatPass != this.userInfo.newPass) {
                this.hint = "两次密码输入不一致！";
                this.show.hint = true;
                return false;
            }
            var postdata = {
                    userId: this.account.userId,
                    password: this.userInfo.newPass,
                    dbPassword: this.userInfo.repeatPass
                }
                //console.log(postdata);
            EventUtils.ajaxReq("/center/user/resetPassword", "post", postdata, function(resp, status) {
                if (resp.code == "00000") {
                    swal({
                        title: "",
                        text: "密码修改成功，将自动跳转到登陆页面！",
                        type: "success",
                        showConfirmButton: false
                    });
                    setTimeout(function() {
                        window.location.href = EventUtils.securityUrl("login.html?newAcc=0");
                    }, 1000)
                } else {
                    swal({
                        title: "",
                        text: resp.info,
                        type: "error",
                    });
                }
                //console.log(resp);
            })
            this.hint = "";
            this.show.hint = false;
        }
    },
    mounted: function() {
        $(".code-pic")[0].src = "https://www.xiaoqiztc.com/easily_xq_WebApi/sys/img";
    }
})

var appFooter = new Vue({
    el: "#app-footer",
    methods: {
        homeLink: function() {
            var link = "index.html?";
            if (parObj.userId) {
                link += "userId=" + parObj.userId;
            }
            window.location.href = EventUtils.securityUrl(link);
        },
        footerLink: function(type) {
            var link = "footer-page.html?theme=" + type;
            if (parObj.userId) {
                link += "&userId=" + parObj.userId;
            }
            link = EventUtils.securityUrl(link);
            window.location.href = link;
        }
    }
})

// 清除页面绑定事件
window.onunload = function() {
    appCont.$off();
}