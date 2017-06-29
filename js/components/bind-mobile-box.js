var Vue = require("../libs/vue.min");
(function() {
    var mobileTempl = '<div class="bind-change mobile-bind">\
        <h2 class="bind-title">更换手机号<i class="pic-wrapper close" @click.stop="closeMobile"><i class="pic-icon icon-close"></i></i>\
        </h2>\
        <div class="bind-form">\
            <h3 class="bind-form-title">请输入新的手机号，完成手机号绑定</h3>\
            <p><input type="text" placeholder="请输入手机号" v-model="mobile" class="input-mobile"></p>\
            <p><input type="text" placeholder="请输入短信认证码" v-model="validcode" class="input-code"><button @click.stop="codeRequest($event.target)"  class="code-request">获取验证码</button></p>\
            <p><input type="password" placeholder="请输入登录密码" v-model="password" class="input-password"></p>\
            <div class="btn-submit"><button @click.stop="bindConfirm">完成绑定</button><button @click.stop="closeMobile">返回</button></div>\
        </div>\
    </div>';
    Vue.component("bind-mobile-box", {
        template: mobileTempl,
        props: ["userid"],
        data: function() {
            return {
                mobile: "",
                validcode: "",
                password: ""
            }
        },
        methods: {
            codeRequest: function(obj) {
                if (this.mobile == "") {
                    swal({
                        title: "",
                        text: "手机号不能为空！",
                        type: "warning"
                    });
                    return false;
                }
                if (!variableUtils.regExp.mobile.test(this.mobile)) {
                    swal({
                        title: "",
                        text: "请输入合法的手机号！",
                        type: "warning"
                    });
                    return false;
                }
                $(obj).attr("disabled", true);
                var start = 0;
                var timer = setInterval(function() {
                    start++;
                    $(obj).html("重新获取 (" + (60 - start) + "s)");
                    if (start == 60) {
                        $(obj).html("获取验证码");
                        $(obj).attr("disabled", false);
                        clearInterval(timer);
                    }
                }, 1000);
                var postdata = {
                    mobile: this.mobile,
                    type: 2
                };
                EventUtils.ajaxReq('/sys/mobileCode', 'post', postdata, function(resp, status) {
                    swal({
                        title: "",
                        text: resp.info,
                        type: "warning"
                    })
                });
            },
            bindConfirm: function() {
                if (this.mobile == "" || this.password == "" || this.code == "") {
                    swal({
                        title: "",
                        text: "请检查信息是否完整！",
                        type: "warning"
                    });
                    return false;
                }
                if (!variableUtils.regExp.mobile.test(this.mobile)) {
                    swal({
                        title: "",
                        text: "请输入正确的手机号！",
                        type: "warning"
                    });
                    return false;
                }
                var postdata = {
                    userId: this.userid,
                    code: this.validcode,
                    password: this.password,
                    conection: this.mobile,
                    type: 0
                };
                var _this = this;
                EventUtils.ajaxReq('/sys/modifyConection?', 'post', postdata, function(resp, status) {
                    if (resp.code == "00000") {
                        swal({
                            title: "",
                            text: resp.info,
                            type: "success",
                            timer: 2000,
                            showConfirmButton: false,
                        });
                        _this.mobile = "";
                        _this.password = "";
                        _this.validcode = "";
                        _this.$emit("closebox");
                    } else {
                        swal({
                            title: "",
                            text: resp.info,
                            type: "warning"
                        });
                    }
                });

            },
            closeMobile: function() {
                this.$emit("closebox");
            }
        }
    });
})()