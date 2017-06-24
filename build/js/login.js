webpackJsonp([16],{

/***/ 40:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vue = __webpack_require__(1); /**
                                   * Created by xuanyuan on 2016/11/6.
                                   */

__webpack_require__(4);
__webpack_require__(3);
__webpack_require__(2);
__webpack_require__(5);
__webpack_require__(40);

var parObj = EventUtils.urlExtrac(window.location);
var regExp = {
    mobile: /^1[34578]\d{9}$/,
    email: /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,
    password: /^[a-zA-Z0-9]{6,16}$/,
    phone: /^0\d{2,3}-\d{7,8}(-\d{1,6})?$/
};

var appTop = new Vue({
    el: "#app-top",
    data: {
        displayCity: decodeURI(parObj.address)
    }
});
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
            unableCode: false
        },
        login: {
            account: window.localStorage && localStorage.loginName ? localStorage.loginName : "",
            // account: "",
            password: window.localStorage && localStorage.password ? localStorage.password : ""
            // password: ""
        },
        banner: {
            showindex: Math.floor(3 * Math.random()),
            images: [{ url: "images/bg-2.jpg", website: "http://www.baidu.com" }, { url: "images/banner-lanlan.jpg", website: "http://www.xinchuang.sitekc.com/index.jsp" }, { url: "images/bg-recruit.jpg", website: "http://www.qq.com" }]
        },
        show: {
            regis: parObj.newAcc == "1"
        },
        validText: "获取验证码"
    },
    methods: {
        checkAccount: function checkAccount() {
            if (this.register.account != "") {
                EventUtils.ajaxReq("/center/user/checkLoginName", "post", { loginName: this.register.account }, function (resp, status) {
                    if (resp.data.result == "1") {
                        appCont.register.isRegis = true;
                    } else {
                        appCont.register.isRegis = false;
                    }
                });
            }
        },
        showAgreement: function showAgreement() {
            appModal.showModal = true;
        },
        accontType: function accontType(index) {
            if (index == 0) {
                return "手机号";
            } else {
                return "邮箱";
            }
        },
        toAdsWebsite: function toAdsWebsite() {
            var link = appCont.banner.images[appCont.banner.showindex].website;
            window.open(link, "_blank");
        },
        regisEv: function regisEv() {
            if (!(0, _jquery2.default)(".check-agreement .check-box").hasClass("selected")) {
                swal({
                    title: "",
                    text: "请接受我们的服务条款",
                    type: "warning"
                });
                return;
            }
            var postdata = {
                loginName: this.register.account,
                password: this.register.password,
                code: this.register.validcode,
                userType: this.register.userType
            };
            var callback = function callback(resp, status) {
                if (resp.data) {
                    var parstring = "userType=" + appCont.register.userType + "&userId=" + resp.data.userId + "&loginId=" + resp.data.loginIdentifier + "&addr=" + parObj.address;
                    window.location.href = "vCards.html?" + window.btoa(parstring);
                } else {
                    swal({
                        title: "",
                        text: resp.info,
                        type: "error"
                    });
                    appCont.register.account = "";
                    appCont.register.password = "";
                    appCont.register.validcode = "";
                }
            };
            EventUtils.ajaxReq('/center/user/register', 'post', postdata, callback);
        },
        loginEv: function loginEv() {
            if (this.login.account == "") {
                swal({
                    title: "",
                    text: "请输入用户名！",
                    type: "warning"
                });
                return false;
            } else if (!regExp.mobile.test(this.login.account) && !regExp.email.test(this.login.account)) {
                swal({
                    title: "",
                    text: "用户名格式错误!",
                    type: "error"
                });
                return false;
            } else if (this.login.password == "") {
                swal({
                    title: "",
                    text: "请输入密码！",
                    type: "warning"
                });
                return false;
            }
            var postdata = {
                loginName: this.login.account,
                password: this.login.password
            };
            console.log(postdata);
            var callback = function callback(resp, status) {
                if (resp.code == "10002") {
                    swal({
                        title: "",
                        text: resp.info,
                        type: "error"
                    });
                    return false;
                }
                if (localStorage) {
                    if ((0, _jquery2.default)(".login .check-box").hasClass("selected")) {
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
            };
            EventUtils.ajaxReq('/center/user/login', 'post', postdata, callback);
        },
        reqValidCode: function reqValidCode(obj) {
            this.register.unableCode = true;
            var start = 0;
            var timer = setInterval(function () {
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
            EventUtils.ajaxReq(posturl, 'post', postdata, function (resp, status) {
                swal({
                    title: "",
                    text: resp.info,
                    type: "success"
                });
            });
        }
    },
    watch: {
        "register.account": function registerAccount(curval) {
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
        "register.password": function registerPassword(curval) {
            if (regExp.password.test(curval)) {
                this.register.isPassValid = true;
            } else {
                this.register.isPassValid = false;
            }
        }
    },
    computed: {
        "validUnable": function validUnable() {
            return !this.register.isAccValid || !this.register.isPassValid;
        },
        "regisUnable": function regisUnable() {
            return !this.register.isAccValid || !this.register.isPassValid || this.register.validcode == "";
        }
    },
    mounted: function mounted() {
        var timerindex = Math.floor(3 * Math.random());
        setInterval(function () {
            appCont.banner.showindex = timerindex % 3;
            timerindex++;
        }, 10000);
        EventUtils.placeholderFill();
    }
});

var appModal = new Vue({
    el: "#app-modal",
    data: {
        showModal: false
    },
    methods: {
        hideModal: function hideModal() {
            this.showModal = false;
        }
    },
    mounted: function mounted() {
        (0, _jquery2.default)(".agreementBox").height(EventUtils.getViewport().height - 100);
        EventUtils.absCenter((0, _jquery2.default)(".agreementBox"));
    }
});

//

//
function _init() {
    loginEventBind();
    regisEventBind();
    initSize();
}
_init();

// 初始化页面元素大小
function initSize() {
    var contHeight = EventUtils.getViewport().height - (0, _jquery2.default)(".top").outerHeight(true) - (0, _jquery2.default)(".bot").outerHeight(true);
    (0, _jquery2.default)(".banner").height(contHeight);
    console.log((0, _jquery2.default)("body").width(), (0, _jquery2.default)("body").height());
    (0, _jquery2.default)(".banner-frame").width(EventUtils.getViewport().width);
    (0, _jquery2.default)(".banner-frame").height((0, _jquery2.default)("body").height());
}

//登录框事件绑定
function loginEventBind() {
    (0, _jquery2.default)(".login .login-footer").click(function () {
        (0, _jquery2.default)(".login").fadeOut();
        (0, _jquery2.default)(".regis").fadeIn("slow");
    });
    (0, _jquery2.default)(".check-box").click(function () {
        (0, _jquery2.default)(this).toggleClass("selected");
    });
}
//注册框事件绑定
function regisEventBind() {
    (0, _jquery2.default)(".logBox .log-nav li").click(function () {
        (0, _jquery2.default)(".logBox .log-nav .on").removeClass("on");
        (0, _jquery2.default)(this).addClass("on");
    });
    (0, _jquery2.default)(".regis .login-footer").click(function () {
        (0, _jquery2.default)(".regis").fadeOut();
        (0, _jquery2.default)(".login").fadeIn("slow");
    });
}

/***/ })

},[64]);