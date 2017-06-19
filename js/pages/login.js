/**
 * Created by xuanyuan on 2016/11/6.
 */

// import $ from "../libs/jquery-3.1.0.min";
// var Vue = require("../libs/vue");
// require("../libs/sweetalert.min");
// require("../common/common")
// require("../../css/base.css")
// require("../../css/sweetalert.css")
// require("../../css/login.css")

var parObj = EventUtils.urlExtrac(window.location);
var regExp = {
    mobile: /^1[34578]\d{9}$/,
    email: /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,
    password: /^[a-zA-Z0-9]{6,16}$/,
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
            isPassValid: false
        },
        login: {
            account: window.localStorage && localStorage.loginName ? localStorage.loginName : "",
            // account: "",
            password: window.localStorage && localStorage.password ? localStorage.password : ""
                // password: ""
        },
        show: {
            regis: parObj.newAcc == "1",
        },
        validText: "获取验证码"
    },
    methods: {
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
                console.log(resp);
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
            console.log(postdata);
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
            $(obj).attr("disabled", true);
            var start = 0;
            var timer = setInterval(function() {
                start++;
                if (start == 60) {
                    appCont.validText = "获取验证码";
                    $(obj).attr("disabled", false);
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
                    type: "warning"
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
        //     EventUtils.placeholderFill();
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
    var contHeight = EventUtils.getViewport().height - $(".top").outerHeight(true) - $(".bot").outerHeight(true);
    $(".banner").height(contHeight);
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