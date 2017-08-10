var Vue = require("../libs/vue.min");
require("../common/common");
(function() {
    var loginTempl = '<div class="dlg-login dlg W670 paBot4  pop-box-shadow">\
            <h2 class="LH-H54 fSize20 color-white paLeft43">登录<i class="pic-wrapper fr maR17 cur-pointer closer" @click="closeLog"><img src="images/icon-close2.png" class="dlg-closer"/> </i></h2>\
            <div class="H348 W660 bg-white maCenter t-center clearfix">\
                <form class="login-form fl paTop4 paRight14">\
                    <div><input type="text" placeholder="请输入已验证手机/邮箱" v-model="login.account" /></div>\
                    <div><input type="password" placeholder="请输入登录密码" v-model="login.password" /></div>\
                    <p class="LH-H50 maT6 fSize14 t-right color-red"><a href="password.html">忘记密码？</a></p>\
                    <button class="W226 H56 fSize20 bg-orange4 color-white" @click.prevent="loginEv">登 录</button>\
                </form>\
                <div class="regis fl H298 maT11 paLeft28 t-left fSize14 paTop18">\
                    <p class="LH-H70">还没有校企账号？</p>\
                    <a class="LH-H26 login-link" :href="securityUrl(\'login.html?newAcc=1\')">请立即注册<i class="maL14 pic-icon"></i></a>\
                    <p class="maT60 LH-H56">使用以下账号直接登录</p>\
                    <p class="paTop25 fast-login t-center">\
                        <i class="pic-icon icon-qq" id="qq_connect_btn" @click.stop="loginQQ"></i>\
                        <i class="pic-icon icon-weibo" style="margin-right:32px;" id="wb_connect_btn" @click.stop="loginWeibo"></i>\
                        <i class="pic-icon icon-wechat " id="wechat_connect_btn " @click.stop="loginWechat"></i>\
                    </p>\
                </div>\
            </div>\
        </div>';
    Vue.component("login-box", {
        template: loginTempl,
        data: function() {
            return {
                login: {
                    account: "",
                    password: ""
                }
            }
        },
        methods: {
            closeLog: function() {
                this.$emit("closelogin");
            },
            loginEv: function() {
                this.$emit("login", this.login);
            },
            securityUrl: function(url) {
                return EventUtils.securityUrl(url);
            },
            loginQQ: function() {
                var path_qq = 'https://www.xiaoqiztc.com/easily_xq_WebApi/dreamcar/quickLogin.html?directway=qq@' + window.location.href;
                window.open('https://graph.qq.com/oauth2.0/authorize?response_type=token&client_id=101417882&redirect_uri=' + path_qq + '&scope=[THE_SCOPE]'); //打开二维码页面，扫码成功后会回调到path地址
            },
            loginWeibo: function() {
                var path_weibo = 'https://www.xiaoqiztc.com/easily_xq_WebApi/dreamcar/quickLogin.html?directway=weibo@' + window.location.href; //登录后回调的地址
                window.open("https://api.weibo.com/oauth2/authorize?client_id=66150529&response_type=code&redirect_uri=" + path_weibo)
                WB2.anyWhere(function(W) {
                    W.widget.connectButton({
                        id: " wb_connect_btn ",
                        type: "4,2 ",
                        callback: {
                            login: function(o) { //登录后的回调函数
                            },
                            logout: function() { //退出后的回调函数
                            }
                        }
                    });
                });
            },
            loginWechat: function() {
                var path_wechat = 'https://www.xiaoqiztc.com/easily_xq_WebApi/dreamcar/quickLogin.html?directway=wechat@' + window.location.href; //登录后回调的地址
                var appid = 'wx2d5a4e37aeed3231'; //注册申请的appid
                window.open('https://open.weixin.qq.com/connect/qrconnect?appid=' + appid + '&redirect_uri=' + path_wechat + '&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect'); //打开二维码页面，扫码成功后会回调到path地址
            }
        }
    });

})()