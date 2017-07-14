/**
 * Created by xuanyuan on 2016/11/6.
 */

import $ from "../libs/jquery-3.1.0.min";
require("../libs/sweetalert.min");
require("../common/common")
var Vue = require("../libs/vue.min");
require("../../css/base.css")
require("../../css/sweetalert.css")
require("../../css/login.css")

var parObj = EventUtils.urlExtrac(window.location);
var regExp = {
    mobile: /^1[34578]\d{9}$/,
    email: /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,
    password: /^[a-zA-Z0-9\W_]{6,16}$/,
    phone: /^0\d{2,3}-\d{7,8}(-\d{1,6})?$/
}

var appTop = new Vue({
    el: "#app-top",
    data: {
        displayCity: decodeURI(parObj.address)
    }
})
var appCont = new Vue({
    el: "#app-content",
    data: {
        register: {
            account: "",
            password: "",
            validcode: "",
            userType: 0,
            isAccValid: false,
            isRegis: false,
            isPassValid: false,
            unableCode: false,
        },
        login: {
            account: window.localStorage && localStorage.loginName ? localStorage.loginName : "",
            // account: "",
            password: window.localStorage && localStorage.password ? localStorage.password : ""
                // password: ""
        },
        banner: {
            showindex: Math.floor(3 * Math.random()),
            // images: [
            //     { url: "https://www.xiaoqiztc.com/login-pic02.jpg", website: "https://www.xiaoqiztc.com" },
            //     { url: "https://www.xiaoqiztc.com/banner-lanlan.jpg", website: "http://www.xinchuang.sitekc.com/index.jsp" },
            //     { url: "https://www.xiaoqiztc.com/企业.jpg", website: "https://www.xiaoqiztc.com/easily_xq_WebApi/dreamcar/display-company.html?" },
            //     { url: "https://www.xiaoqiztc.com/高校.jpg", website: "https://www.xiaoqiztc.com/easily_xq_WebApi/dreamcar/display-uni.html?" },
            //     { url: "https://www.xiaoqiztc.com/个人.jpg", website: "https://www.xiaoqiztc.com/easily_xq_WebApi/dreamcar/display-position.html?" },
            // ],
            images: [
                { url: "http://os9bwedvi.bkt.clouddn.com/login-pic02.jpg", website: "https://www.xiaoqiztc.com" },
                { url: "http://os9bwedvi.bkt.clouddn.com/banner-lanlan.jpg", website: "http://www.xinchuang.sitekc.com/index.jsp" },
                { url: "http://os9bwedvi.bkt.clouddn.com/企业.jpg", website: "https://www.xiaoqiztc.com/easily_xq_WebApi/dreamcar/display-company.html?" },
                { url: "http://os9bwedvi.bkt.clouddn.com/高校.jpg", website: "https://www.xiaoqiztc.com/easily_xq_WebApi/dreamcar/display-uni.html?" },
                { url: "http://os9bwedvi.bkt.clouddn.com/个人.jpg", website: "https://www.xiaoqiztc.com/easily_xq_WebApi/dreamcar/display-position.html?" },
            ]
        },
        show: {
            regis: parObj.newAcc == "1",
        },
        validText: "获取验证码"
    },
    methods: {
        checkAccount: function() {
            if (this.register.account != "") {
                EventUtils.ajaxReq("/center/user/checkLoginName", "post", { loginName: this.register.account }, function(resp, status) {
                    if (resp.data.result == "1") {
                        appCont.register.isRegis = true;
                    } else {
                        appCont.register.isRegis = false;
                    }
                })
            }
        },
        showAgreement: function() {
            appModal.showModal = true;
        },
        accontType: function(index) {
            if (index == 0) {
                return "手机号"
            } else {
                return "邮箱"
            }
        },
        toAdsWebsite: function() {
            var link = appCont.banner.images[appCont.banner.showindex].website;
            window.open(link, "_blank");
        },
        regisEv: function() {
            if (!$(".check-agreement .check-box").hasClass("selected")) {
                swal({
                    title: "",
                    text: "请接受我们的服务条款",
                    type: "warning"
                })
                return;
            }
            var postdata = {
                loginName: this.register.account,
                password: this.register.password,
                code: this.register.validcode,
                userType: this.register.userType
            };
            var callback = function(resp, status) {
                if (resp.data) {
                    var parstring = "userType=" + appCont.register.userType + "&userId=" + resp.data.userId + "&loginId=" + resp.data.loginIdentifier + "&addr=" + parObj.address;
                    window.location.href = "vCards.html?" + window.btoa(parstring);
                } else {
                    swal({
                        title: "",
                        text: resp.info,
                        type: "error"
                    })
                    appCont.register.account = "";
                    appCont.register.password = "";
                    appCont.register.validcode = "";
                }
            }
            EventUtils.ajaxReq('/center/user/register', 'post', postdata, callback)
        },
        loginEv: function() {
            if (this.login.account == "") {
                swal({
                    title: "",
                    text: "请输入用户名！",
                    type: "warning"
                })
                return false;
            } else if (!regExp.mobile.test(this.login.account) && !regExp.email.test(this.login.account)) {
                swal({
                    title: "",
                    text: "用户名格式错误!",
                    type: "error"
                })
                return false;
            } else if (this.login.password == "") {
                swal({
                    title: "",
                    text: "请输入密码！",
                    type: "warning"
                })
                return false;
            }
            var postdata = {
                loginName: this.login.account,
                password: this.login.password
            };
            //console.log(postdata);
            var callback = function(resp, status) {
                if (resp.code == "10002") {
                    swal({
                        title: "",
                        text: resp.info,
                        type: "error"
                    })
                    return false;
                }
                if (localStorage) {
                    if ($(".login .check-box").hasClass("selected")) {
                        localStorage.loginName = appCont.login.account;
                        localStorage.password = appCont.login.password;
                        localStorage.userId = resp.data.userId;
                        localStorage.loginId = resp.data.loginIdentifier;
                    } else {
                        localStorage.removeItem("loginName");
                        localStorage.removeItem("password");
                        localStorage.removeItem("userId");
                        localStorage.removeItem("loginId");
                    }
                }
                if (resp.data.cardStatus == "0") {
                    var parstring = "userType=" + resp.data.userType + "&userId=" + resp.data.userId + "&loginId=" + resp.data.loginIdentifier;
                    window.location.href = "vCards.html?" + window.btoa(parstring);
                } else {
                    var urlpars = "userId=" + resp.data.userId + "&loginId=" + resp.data.loginIdentifier;
                    urlpars = window.btoa(urlpars);
                    switch (resp.data.userType) {
                        case "0":
                            window.location.href = "pCenter.html?" + urlpars;
                            break;
                        case "1":
                            window.location.href = "uniCenter.html?" + urlpars;
                            break;
                        case "2":
                            window.location.href = "incCenter.html?" + urlpars;
                            break;
                        default:
                    }
                }
            }
            EventUtils.ajaxReq('/center/user/login', 'post', postdata, callback);
        },
        reqValidCode: function(obj) {
            this.register.unableCode = true;
            var start = 0;
            var timer = setInterval(function() {
                start++;
                if (start == 60) {
                    appCont.validText = "获取验证码";
                    appCont.register.unableCode = false;
                    clearInterval(timer);
                } else {
                    appCont.validText = "重新获取 (" + (60 - start) + "s)";
                }
            }, 1000);
            var postdata;
            var posturl;
            if (this.register.userType == 0) {
                postdata = {
                    mobile: this.register.account,
                    type: 0
                };
                posturl = "/sys/mobileCode?";
            } else {
                postdata = {
                    email: this.register.account,
                    type: 0
                };
                posturl = "/sys/emailCode?";
            };
            EventUtils.ajaxReq(posturl, 'post', postdata, function(resp, status) {
                swal({
                    title: "",
                    text: resp.info,
                    type: "success"
                })
            });
        }
    },
    watch: {
        "register.account": function(curval) {
            if (this.register.userType == 0) {
                if (regExp.mobile.test(curval)) {
                    this.register.isAccValid = true;
                } else {
                    this.register.isAccValid = false;
                }
            } else {
                if (regExp.email.test(curval)) {
                    this.register.isAccValid = true;
                } else {
                    this.register.isAccValid = false;
                }
            }
        },
        "register.password": function(curval) {
            if (regExp.password.test(curval)) {
                this.register.isPassValid = true;
            } else {
                this.register.isPassValid = false;
            }
        }
    },
    computed: {
        "validUnable": function() {
            return !this.register.isAccValid || !this.register.isPassValid;
        },
        "regisUnable": function() {
            return !this.register.isAccValid || !this.register.isPassValid || this.register.validcode == "";
        }
    },
    mounted: function() {
        var timerindex = Math.floor(5 * Math.random());
        setInterval(function() {
            appCont.banner.showindex = timerindex % 5;
            timerindex++;
        }, 10000)
        EventUtils.placeholderFill();
    }
})

var appModal = new Vue({
    el: "#app-modal",
    data: {
        showModal: false,
    },
    methods: {
        hideModal: function() {
            this.showModal = false
        },
    },
    mounted: function() {
        $(".agreementBox").height(EventUtils.getViewport().height - 100);
        EventUtils.absCenter($(".agreementBox"));
    }
})

var appFooter = new Vue({
    el: "#app-footer",
    data: {},
    methods: {
        securityUrl: function(url) {
            return EventUtils.securityUrl(url);
        }
    }
})

//
function _init() {
    loginEventBind();
    regisEventBind();
    initSize();
}
_init();

// 初始化页面元素大小
function initSize() {
    var contHeight = EventUtils.getViewport().height - $(".top").outerHeight(true) - $(".bot").outerHeight(true);
    $(".banner").height(contHeight);
    //console.log($("body").width(), $("body").height());
    $(".banner-frame").width(EventUtils.getViewport().width);
    $(".banner-frame").height($("body").height());
}

//登录框事件绑定
function loginEventBind() {
    $(".login .login-footer").click(function() {
        $(".login").fadeOut();
        $(".regis").fadeIn("slow");
    });
    $(".check-box").click(function() {
        $(this).toggleClass("selected")
    })
}
//注册框事件绑定
function regisEventBind() {
    $(".logBox .log-nav li").click(function() {
        $(".logBox .log-nav .on").removeClass("on");
        $(this).addClass("on");
    });
    $(".regis .login-footer").click(function() {
        $(".regis").fadeOut();
        $(".login").fadeIn("slow");
    });
}

// 清除页面绑定事件
window.onunload = function() {
    $(".login .login-footer").click(null);
    $(".check-box").click(null);
    $(".logBox .log-nav li").click(null);
    $(".regis .login-footer").click(null);
    appCont.$off();
}