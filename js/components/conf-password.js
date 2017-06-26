var Vue = require("../libs/vue");
(function() {
    var pswTempl = '<div>\
                <h2 class="conf-psw-title">修改密码</h2>\
                <form class="conf-psw-form">\
                    <div><label>登陆账号</label><span>{{account.loginName}}</span></div>\
                    <div><label>当前密码</label><input type="password" placeholder="6-16字母、数字、无空格" v-model="oldpsw"/></div>\
                    <div><label>新密码</label><input type="password" placeholder="6-16字母、数字、无空格" v-model="newpsw"/></div>\
                    <div><label>确认密码</label><input type="password" placeholder="6-16字母、数字、无空格" v-model="dbpsw"/></div>\
                    <div><label>验证码</label><input type="text" v-model="validcode"/><i class="conf-psw-varifycode"><img src="http://www.xiaoqiztc.com/easily_xq_WebApi/sys/img" /><span class="conf-psw-codetext" @click="switchCode">看不清？换一张</span></i></div>\
                    <div class="conf-psw-confirm"><button type="button" @click="confirm">确认修改</button></div>\
                </form>\
        </div>';
    Vue.component("config-password", {
        template: pswTempl,
        props: ["account", "usertype"],
        data: function() {
            return {
                oldpsw: "",
                newpsw: "",
                dbpsw: "",
                validcode: ""
            }
        },
        methods: {
            switchCode: function() {
                $.ajax({
                    url: "http://www.xiaoqiztc.com/easily_xq_WebApi/sys/img",
                    type: "get",
                    async: false,
                    data: {},
                    success: function(resp, status) {
                        $(".conf-psw-varifycode img")[0].src = "http://www.xiaoqiztc.com/easily_xq_WebApi/sys/img?" + Math.random();
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
            },
            confirm: function() {
                var isFilled = true;
                $(".conf-psw-form input").each(function(index) {
                    if ($(this).val() == "") {
                        $(this).addClass("hint-nullable");
                        isFilled = false;
                    } else {
                        $(this).removeClass("hint-nullable");
                    }
                })
                if (!isFilled) {
                    swal({
                        title: "",
                        text: "请检查信息是否完整！",
                        type: "warning"
                    });
                    EventUtils.ajaxReq("/sys/img", "get", {}, function(resp, status) {
                        $(".conf-psw-varifycode img")[0].src = "http://www.xiaoqiztc.com/easily_xq_WebApi/sys/img?" + Math.random();
                    })
                    return false;
                }
                if (!variableUtils.regExp.password.test(this.newpsw)) {
                    swal({
                        title: "",
                        text: "新密码格式不正确！",
                        type: "warning"
                    });
                    EventUtils.ajaxReq("/sys/img", "get", {}, function(resp, status) {
                        $(".conf-psw-varifycode img")[0].src = "http://www.xiaoqiztc.com/easily_xq_WebApi/sys/img?" + Math.random();
                    })
                    return false;
                }
                if (this.newpsw != this.dbpsw) {
                    swal({
                        title: "",
                        text: "两次密码输入不一致！",
                        type: "warning"
                    });
                    EventUtils.ajaxReq("/sys/img", "get", {}, function(resp, status) {
                        $(".conf-psw-varifycode img")[0].src = "http://www.xiaoqiztc.com/easily_xq_WebApi/sys/img?" + Math.random();
                    })
                    return false;
                }
                var postdata = {
                    userId: this.account.userId,
                    oldPassword: this.oldpsw,
                    password: this.newpsw,
                    dbPassword: this.dbpsw,
                    code: this.validcode,
                    userType: this.usertype
                };
                EventUtils.ajaxReq("/center/user/modifyPassword", "post", postdata, function(resp, status) {
                    console.log(resp);
                    if (resp.code == "00000") {
                        swal({
                            title: "",
                            text: resp.info,
                            type: "success",
                            timer: 1500,
                            showConfirmButton: false
                        });
                    } else {
                        swal({
                            title: "",
                            text: resp.info,
                            type: "error"
                        });
                        EventUtils.ajaxReq("/sys/img", "get", {}, function(resp, status) {
                            $(".conf-psw-varifycode img")[0].src = "http://www.xiaoqiztc.com/easily_xq_WebApi/sys/img?" + Math.random();
                        })
                    };
                });
                this.oldpsw = "";
                this.newpsw = "";
                this.dbpsw = "";
                this.validcode = "";
            }
        }
    })
})()