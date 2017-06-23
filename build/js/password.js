webpackJsonp([15],{

/***/ 42:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vue = __webpack_require__(1);
__webpack_require__(4);
__webpack_require__(3);
__webpack_require__(2);
__webpack_require__(5);
__webpack_require__(42);
var regExp = {
    mobile: /^1[34578]\d{9}$/,
    email: /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,
    password: /^[a-zA-Z0-9]{6,16}$/
};
var parObj = EventUtils.urlExtrac(window.location);
var imgHtml = "";
// EventUtils.ajaxReq("/sys/img", "GET", {}, function(resp, status) {
//     $(".code-pic")[0].src = "http://www.xiaoqiztc.com/easily_xq_WebApi/sys/img";
// imgHtml = "<img src='http://192.168.0.104:8080/easily_xq_WebApi/sys/img'/>";
// $(".step-cont-1 .pic-code")[0].src = 
// imgHtml = "<img style='" + resp + "' />"
// $(".step-cont-1 .pic-code").text(resp);
// })

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
            userId: ""
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
        }
    },
    methods: {
        switchcode: function switchcode() {
            // console.log(1);
            EventUtils.ajaxReq("/sys/img", "get", {}, function (resp, status) {
                (0, _jquery2.default)(".code-pic")[0].src = "http://www.xiaoqiztc.com/easily_xq_WebApi/sys/img?" + Math.random();
            });
        },
        nextstep: function nextstep(index) {
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
                    // console.log(postdata);
                };EventUtils.ajaxReq("/sys/getOldConection?", "get", postdata, function (resp, status) {
                    console.log(resp);
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
                    }
                });
            }
        },
        postcode: function postcode(type, obj) {
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
                    (0, _jquery2.default)(obj).attr("disabled", true);
                    var timer = setInterval(function () {
                        start++;
                        if (start == 60) {
                            obj.innerHTML = "发送验证码";
                            (0, _jquery2.default)(obj).attr("disabled", false);
                            clearInterval(timer);
                        } else {
                            obj.innerHTML = "重新获取 (" + (60 - start) + "s)";
                        }
                    }, 1000);
                    var postdata = {
                        email: appCont.userInfo.email,
                        type: 3
                    };
                    EventUtils.ajaxReq("/sys/emailCode", "post", postdata, function (resp, status) {
                        if (resp.code == "00000") {
                            swal({
                                title: "",
                                text: "验证码发送成功！",
                                type: "success"
                            });
                        } else {
                            swal({
                                title: "",
                                text: resp.info,
                                type: "error"
                            });
                        }
                    });
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
                    (0, _jquery2.default)(obj).attr("disabled", true);
                    var timer = setInterval(function () {
                        start++;
                        if (start == 60) {
                            obj.innerHTML = "发送验证码";
                            (0, _jquery2.default)(obj).attr("disabled", false);
                            clearInterval(timer);
                        } else {
                            obj.innerHTML = "重新获取 (" + (60 - start) + "s)";
                        }
                    }, 1000);
                    var postdata = {
                        mobile: appCont.userInfo.mobile,
                        type: 3
                    };
                    EventUtils.ajaxReq("/sys/mobileCode", "post", postdata, function (resp, status) {
                        if (resp.code == "00000") {
                            swal({
                                title: "",
                                text: "验证码发送成功！",
                                type: "success"
                            });
                        } else {
                            swal({
                                title: "",
                                text: resp.info,
                                type: "error"
                            });
                        }
                    });
                }
            }
        },
        selectway: function selectway(way, obj) {
            (0, _jquery2.default)(".backway-navs .on").removeClass("on");
            (0, _jquery2.default)(obj).addClass("on");
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
        pswViaEmail: function pswViaEmail() {
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
            };
            EventUtils.ajaxReq("/sys/checkCode", "get", postdata, function (resp, status) {
                console.log(resp);
                if (resp.data.result == "1") {
                    appCont.show.step2 = false;
                    appCont.show.step3 = true;
                }
            });
            this.hint = "";
            this.show.hint = false;
        },
        pswViaMobile: function pswViaMobile() {
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
            };
            EventUtils.ajaxReq("/sys/checkCode", "get", postdata, function (resp, status) {
                console.log(resp);
                if (resp.data.result == "1") {
                    appCont.show.step2 = false;
                    appCont.show.step3 = true;
                }
            });
            this.hint = "";
            this.show.hint = false;
        },
        checkpass: function checkpass(type, obj) {
            if (type == "new") {
                if (variableUtils.regExp.password.test(this.userInfo.newPass)) {
                    (0, _jquery2.default)(obj).removeClass("wrong").addClass("right");
                } else if (this.userInfo.newPass != "") {
                    (0, _jquery2.default)(obj).removeClass("right").addClass("wrong");
                } else {
                    (0, _jquery2.default)(obj).removeClass("wrong");
                }
            } else {
                if (this.userInfo.repeatPass == this.userInfo.newPass) {
                    (0, _jquery2.default)(obj).removeClass("wrong").addClass("right");
                } else if (this.userInfo.repeatPass != "") {
                    (0, _jquery2.default)(obj).removeClass("right").addClass("wrong");
                } else {
                    (0, _jquery2.default)(obj).removeClass("wrong");
                }
            }
        },
        resetPsw: function resetPsw() {
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
            };
            console.log(postdata);
            EventUtils.ajaxReq("/center/user/resetPassword", "post", postdata, function (resp, status) {
                if (resp.code == "00000") {
                    swal({
                        title: "",
                        text: "密码修改成功，将自动跳转到登陆页面！",
                        type: "success",
                        showConfirmButton: false
                    });
                    setTimeout(function () {
                        window.location.href = EventUtils.securityUrl("login.html?newAcc=0");
                    }, 1000);
                } else {
                    swal({
                        title: "",
                        text: resp.info,
                        type: "error"
                    });
                }
                console.log(resp);
            });
            this.hint = "";
            this.show.hint = false;
        }
    },
    mounted: function mounted() {
        (0, _jquery2.default)(".code-pic")[0].src = "http://www.xiaoqiztc.com/easily_xq_WebApi/sys/img";
    }
});

var appFooter = new Vue({
    el: "#app-footer",
    methods: {
        homeLink: function homeLink() {
            var link = "index.html?";
            if (parObj.userId) {
                link += "userId=" + parObj.userId;
            }
            window.location.href = EventUtils.security(link);
        }
    }
});

/***/ })

},[65]);