var Vue = require("../libs/vue");
(function() {
    var emailTempl = '<div class="bind-change email-bind">\
        <h2 class="bind-title">更换绑定邮箱<i class="pic-wrapper close" @click.stop="closeBox"><i class="pic-icon icon-close"></i></i>\
        </h2>\
        <div class="bind-form">\
            <h3 class="bind-form-title">请输入新的邮箱，完成邮箱绑定</h3>\
            <p><input type="text" placeholder="请输入邮箱" v-model="email" class="input-email"></p>\
            <p><input type="text" placeholder="请输入验证码" v-model="validcode" class="input-code"><button @click.stop="codeRequest($event.target)"  class="code-request">获取验证码</button></p>\
            <p><input type="password" placeholder="请输入登录密码" v-model="password" class="input-password"></p>\
            <div class="btn-submit"><button @click.stop="bindConfirm">完成绑定</button><button @click.stop="closeBox">返回</button></div>\
        </div>\
    </div>';
    Vue.component("bind-email-box", {
        template: emailTempl,
        props: ["userid"],
        data: function() {
            return {
                email: "",
                validcode: "",
                password: ""
            }
        },
        methods: {
            codeRequest: function(obj) {
                if (this.email == "") {
                    swal({
                        title: "",
                        text: "邮箱不能为空！",
                        type: "warning"
                    });
                    return false;
                }
                if (!variableUtils.regExp.email.test(this.email)) {
                    swal({
                        title: "",
                        text: "请输入合法的邮箱地址！",
                        type: "warning"
                    });
                    return false;
                }
                $(obj).attr("disabled", true);
                var start = 0;
                var timer = setInterval(function() {
                    start++;
                    if (start == 60) {
                        $(obj).html("获取验证码");
                        $(obj).attr("disabled", false);
                        clearInterval(timer);
                    }
                    $(obj).html("重新获取 (" + (60 - start) + "s)");
                }, 1000);
                var postdata = {
                    email: this.email,
                    type: 2
                };
                console.log(postdata);
                EventUtils.ajaxReq('/sys/emailCode', 'post', postdata, function(resp, status) {
                    swal({
                        title: "",
                        text: resp.info,
                        type: "warning"
                    })
                });
            },
            bindConfirm: function() {
                if (this.email == "" || this.password == "" || this.code == "") {
                    swal({
                        title: "",
                        text: "请检查信息是否完整！",
                        type: "warning"
                    });
                    return false;
                }
                if (!variableUtils.regExp.email.test(this.email)) {
                    swal({
                        title: "",
                        text: "请输入正确的邮箱地址！",
                        type: "warning"
                    });
                    return false;
                }
                var postdata = {
                    userId: this.userid,
                    code: this.validcode,
                    password: this.password,
                    conection: this.email,
                    type: 1
                };
                var _this = this;
                EventUtils.ajaxReq('/sys/modifyConection?', 'post', postdata, function(resp, status) {
                    if (resp.code == "00000") {
                        swal({
                            title: "",
                            text: resp.info,
                            type: "success",
                            timer: 1500,
                            showConfirmButton: false,
                        });
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
            closeBox: function() {
                this.$emit("closebox");
            }
        }
    });
})()