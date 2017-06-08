(function() {
    var pswTempl = '<div>\
                <h2 class="conf-psw-title">修改密码</h2>\
                <form class="conf-psw-form">\
                    <div><label>登陆账号</label><span>{{account.loginName}}</span></div>\
                    <div><label>当前密码</label><input type="password" placeholder="6-16字母、数字、无空格" v-model="oldpsw"/></div>\
                    <div><label>新密码</label><input type="password" placeholder="6-16字母、数字、无空格" v-model="newpsw"/></div>\
                    <div><label>确认密码</label><input type="password" placeholder="6-16字母、数字、无空格" v-model="dbpsw"/></div>\
                    <div><label>验证码</label><input type="text" v-model="validcode"/><i class="conf-psw-varifycode"><img src="http://www.xiaoqiztc.com/easily_xq_WebApi/sys/img" /></i></div>\
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
            confirm: function() {
                if (this.oldpsw == "") {
                    swal({
                        title: "",
                        text: "旧密码不能为空！",
                        type: "warning"
                    });
                    return false;
                }
                if (this.newpsw == "") {
                    swal({
                        title: "",
                        text: "新密码不能为空！",
                        type: "warning"
                    });
                    return false;
                }
                if (!variableUtils.regExp.password.test(this.newpsw)) {
                    swal({
                        title: "",
                        text: "新密码格式不正确！",
                        type: "warning"
                    });
                    return false;
                }
                if (this.newpsw != this.dbpsw) {
                    swal({
                        title: "",
                        text: "两次密码输入不一致！",
                        type: "warning"
                    });
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
                    if (resp.code == "00000") {
                        swal({
                            title: "",
                            text: resp.info,
                            type: "success"
                        });
                    } else {
                        swal({
                            title: "",
                            text: resp.info,
                            type: "error"
                        });
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