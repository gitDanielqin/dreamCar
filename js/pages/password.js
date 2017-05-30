var regExp = {
    mobile: /^1[34578]\d{9}$/,
    email: /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,
    password: /^[a-zA-Z0-9]{6,16}$/
}
var appCont = new Vue({
    el: "#app-content",
    data: {
        show: {
            step1: false,
            step2: true,
            step3: false,
            email: true,
            mobile: false,
            mobilehint: false,
            emailhint: false,
            validhint: false,
        },
        account: {
            email: "pheonixqin@qq.com",
            mobile: "18868965654",
        },
        hint: {
            emailhint: "",
            mobilehint: ""
        },
        userInfo: {
            account: "",
            picCode: "",
            mobile: "",
            email: "",
            validCode: "",
            newPass: "",
            repeatPass: "",
            picCodePass: ""
        },
    },
    methods: {
        selectway: function(way, obj) {
            $(".backway-navs .on").removeClass("on");
            $(obj).addClass("on");
            if (way == "email") {
                this.show.emailhint = false;
                this.show.validhint = false;
                this.show.email = true;
                this.show.mobile = false;
            } else if (way == "mobile") {
                this.show.emailhint = false;
                this.show.validhint = false;
                this.show.email = false;
                this.show.mobile = true;
            }
        },
        pswViaEmail: function() {
            if (!regExp.email.test(userInfo.email)) {
                this.hint.emailhint = "您输入的邮箱格式不正确！";
                this.show.emailhint = true;
            } else {
                this.show.emailhint = false;
            }
        },
        pswViaMobile: function() {
            if (!regExp.mobile.test(userInfo.mobile)) {
                this.hint.emailhint = "您输入的手机号码格式不正确！";
                this.show.mobilehint = true;
            } else {
                this.show.mobilehint = false;
            }
        },
        checkpass: function(type, obj) {
            if (type == "new") {
                if (regExp.password.test(this.userInfo.newPass)) {
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
        }
    }
})