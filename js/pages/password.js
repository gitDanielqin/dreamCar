import $ from "../libs/jquery-3.1.0.min";
var Vue = require("../libs/vue");
require("../common/common")
require("../../css/base.css")
require("../../css/password.css")
var regExp = {
    mobile: /^1[34578]\d{9}$/,
    email: /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,
    password: /^[a-zA-Z0-9]{6,16}$/
}
var imgHtml = ""
EventUtils.ajaxReq("/sys/img", "GET", {}, function(resp, status) {
    // imgHtml = "<img src='http://192.168.0.104:8080/easily_xq_WebApi/sys/img'/>";
    // imgHtml = "<img style='" + resp + "' />"
    $(".step-cont-1 .pic-code").text(resp);
})

var appCont = new Vue({
    el: "#app-content",
    data: {
        show: {
            step1: false,
            step2: true,
            step3: false,
            email: true,
            mobile: false,
            hint: false
        },
        account: {
            email: "pheonixqin@qq.com",
            mobile: "18868965654",
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
            repeatPass: "",
            picCodePass: ""
        },
    },
    methods: {
        switchcode: function() {
            EventUtils.ajaxReq("/sys/img", "get", {}, function(resp, status) {
                // imgHtml = "<img src='"++"'/>";
                $(".step-cont-1 .pic-code").html(resp);
            })
        },
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
                console.log(postdata);
                EventUtils.ajaxReq("/sys/checkImg", "post", postdata, function(resp, status) {
                    console.log(resp);
                })
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
                        console.log(resp);
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
                console.log(resp);
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
                this.hint = "验证码不能为空！";
                this.show.hint = true;
                return false;
            }
            if (variableUtils.regExp.password.test(this.userInfo.newPass)) {
                this.hint = "密码格式不正确！";
                this.show.hint = true;
                return false;
            }
            if (this.userInfo.repeatPass != this.userInfo.newPass) {
                this.hint = "两次密码输入不一致！";
                this.show.hint = true;
                return false;
            }
            if (this.userInfo.picCodePass == "") {
                this.hint = "验证码不能为空！";
                this.show.hint = true;
                return false;
            }
            this.hint = "";
            this.show.hint = false;
        }
    }
})