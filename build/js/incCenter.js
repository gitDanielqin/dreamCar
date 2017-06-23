webpackJsonp([1],{

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Created by ezgoing on 14/9/2014.
 */



(function (factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        factory(jQuery);
    }
})(function ($) {
    var cropbox = function cropbox(options, el) {
        var el = el || $(options.imageBox),
            obj = {
            state: {},
            ratio: 1,
            options: options,
            imageBox: el,
            thumbBox: el.find(options.thumbBox),
            spinner: el.find(options.spinner),
            image: new Image(),
            getDataURL: function getDataURL() {
                var width = this.thumbBox.width(),
                    height = this.thumbBox.height(),
                    canvas = document.createElement("canvas"),
                    dim = el.css('background-position').split(' '),
                    size = el.css('background-size').split(' '),
                    dx = parseInt(dim[0]) - el.width() / 2 + width / 2,
                    dy = parseInt(dim[1]) - el.height() / 2 + height / 2,
                    dw = parseInt(size[0]),
                    dh = parseInt(size[1]),
                    sh = parseInt(this.image.height),
                    sw = parseInt(this.image.width);

                canvas.width = width;
                canvas.height = height;
                var context = canvas.getContext("2d");
                context.drawImage(this.image, 0, 0, sw, sh, dx, dy, dw, dh);
                var imageData = canvas.toDataURL('image/png');
                return imageData;
            },
            getBlob: function getBlob() {
                var imageData = this.getDataURL();
                var b64 = imageData.replace('data:image/png;base64,', '');
                var binary = atob(b64);
                var array = [];
                for (var i = 0; i < binary.length; i++) {
                    array.push(binary.charCodeAt(i));
                }
                return new Blob([new Uint8Array(array)], { type: 'image/png' });
            },
            zoomIn: function zoomIn() {
                this.ratio *= 1.1;
                setBackground();
            },
            zoomOut: function zoomOut() {
                this.ratio *= 0.9;
                setBackground();
            }
        },
            setBackground = function setBackground() {
            var w = parseInt(obj.image.width) * obj.ratio;
            var h = parseInt(obj.image.height) * obj.ratio;

            var pw = (el.width() - w) / 2;
            var ph = (el.height() - h) / 2;

            el.css({
                'background-image': 'url(' + obj.image.src + ')',
                'background-size': w + 'px ' + h + 'px',
                'background-position': pw + 'px ' + ph + 'px',
                'background-repeat': 'no-repeat' });
        },
            imgMouseDown = function imgMouseDown(e) {
            e.stopImmediatePropagation();

            obj.state.dragable = true;
            obj.state.mouseX = e.clientX;
            obj.state.mouseY = e.clientY;
        },
            imgMouseMove = function imgMouseMove(e) {
            e.stopImmediatePropagation();

            if (obj.state.dragable) {
                var x = e.clientX - obj.state.mouseX;
                var y = e.clientY - obj.state.mouseY;

                var bg = el.css('background-position').split(' ');

                var bgX = x + parseInt(bg[0]);
                var bgY = y + parseInt(bg[1]);

                el.css('background-position', bgX + 'px ' + bgY + 'px');

                obj.state.mouseX = e.clientX;
                obj.state.mouseY = e.clientY;
            }
        },
            imgMouseUp = function imgMouseUp(e) {
            e.stopImmediatePropagation();
            obj.state.dragable = false;
        },
            zoomImage = function zoomImage(e) {
            e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0 ? obj.ratio *= 1.1 : obj.ratio *= 0.9;
            setBackground();
            return false;
        };

        obj.spinner.show();
        obj.image.onload = function () {
            obj.spinner.hide();
            setBackground();

            el.bind('mousedown', imgMouseDown);
            el.bind('mousemove', imgMouseMove);
            $(window).bind('mouseup', imgMouseUp);
            el.bind('mousewheel DOMMouseScroll', zoomImage);
        };
        obj.image.src = options.imgSrc;
        el.on('remove', function () {
            $(window).unbind('mouseup', imgMouseUp);
        });

        return obj;
    };

    jQuery.fn.cropbox = function (options) {
        return new cropbox(options, this);
    };
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var Vue = __webpack_require__(1);
(function () {
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
        data: function data() {
            return {
                email: "",
                validcode: "",
                password: ""
            };
        },
        methods: {
            codeRequest: function codeRequest(obj) {
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
                var timer = setInterval(function () {
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
                EventUtils.ajaxReq('/sys/emailCode', 'post', postdata, function (resp, status) {
                    swal({
                        title: "",
                        text: resp.info,
                        type: "warning"
                    });
                });
            },
            bindConfirm: function bindConfirm() {
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
                EventUtils.ajaxReq('/sys/modifyConection?', 'post', postdata, function (resp, status) {
                    if (resp.code == "00000") {
                        swal({
                            title: "",
                            text: resp.info,
                            type: "success",
                            timer: 1500,
                            showConfirmButton: false
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
            closeBox: function closeBox() {
                this.$emit("closebox");
            }
        }
    });
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var Vue = __webpack_require__(1);
(function () {
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
        data: function data() {
            return {
                mobile: "",
                validcode: "",
                password: ""
            };
        },
        methods: {
            codeRequest: function codeRequest(obj) {
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
                var timer = setInterval(function () {
                    start++;
                    if (start == 60) {
                        $(obj).html("获取验证码");
                        $(obj).attr("disabled", false);
                        clearInterval(timer);
                    }
                    $(obj).html("重新获取 (" + (60 - start) + "s)");
                }, 1000);
                var postdata = {
                    mobile: this.mobile,
                    type: 2
                };
                EventUtils.ajaxReq('/sys/mobileCode', 'post', postdata, function (resp, status) {
                    swal({
                        title: "",
                        text: resp.info,
                        type: "warning"
                    });
                });
            },
            bindConfirm: function bindConfirm() {
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
                EventUtils.ajaxReq('/sys/modifyConection?', 'post', postdata, function (resp, status) {
                    if (resp.code == "00000") {
                        swal({
                            title: "",
                            text: resp.info,
                            type: "success",
                            timer: 2000,
                            showConfirmButton: false
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
            closeMobile: function closeMobile() {
                this.$emit("closebox");
            }
        }
    });
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var Vue = __webpack_require__(1);
(function () {
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
        data: function data() {
            return {
                oldpsw: "",
                newpsw: "",
                dbpsw: "",
                validcode: ""
            };
        },
        methods: {
            switchCode: function switchCode() {
                EventUtils.ajaxReq("/sys/img", "get", {}, function (resp, status) {
                    $(".conf-psw-varifycode img")[0].src = "http://www.xiaoqiztc.com/easily_xq_WebApi/sys/img?" + Math.random();
                });
            },
            confirm: function confirm() {
                var isFilled = true;
                $(".conf-psw-form input").each(function (index) {
                    if ($(this).val() == "") {
                        $(this).addClass("hint-nullable");
                        isFilled = false;
                    } else {
                        $(this).removeClass("hint-nullable");
                    }
                });
                if (!isFilled) {
                    swal({
                        title: "",
                        text: "请检查信息是否完整！",
                        type: "warning"
                    });
                    EventUtils.ajaxReq("/sys/img", "get", {}, function (resp, status) {
                        $(".conf-psw-varifycode img")[0].src = "http://www.xiaoqiztc.com/easily_xq_WebApi/sys/img?" + Math.random();
                    });
                    return false;
                }
                if (!variableUtils.regExp.password.test(this.newpsw)) {
                    swal({
                        title: "",
                        text: "新密码格式不正确！",
                        type: "warning"
                    });
                    EventUtils.ajaxReq("/sys/img", "get", {}, function (resp, status) {
                        $(".conf-psw-varifycode img")[0].src = "http://www.xiaoqiztc.com/easily_xq_WebApi/sys/img?" + Math.random();
                    });
                    return false;
                }
                if (this.newpsw != this.dbpsw) {
                    swal({
                        title: "",
                        text: "两次密码输入不一致！",
                        type: "warning"
                    });
                    EventUtils.ajaxReq("/sys/img", "get", {}, function (resp, status) {
                        $(".conf-psw-varifycode img")[0].src = "http://www.xiaoqiztc.com/easily_xq_WebApi/sys/img?" + Math.random();
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
                EventUtils.ajaxReq("/center/user/modifyPassword", "post", postdata, function (resp, status) {
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
                        EventUtils.ajaxReq("/sys/img", "get", {}, function (resp, status) {
                            $(".conf-psw-varifycode img")[0].src = "http://www.xiaoqiztc.com/easily_xq_WebApi/sys/img?" + Math.random();
                        });
                    };
                });
                this.oldpsw = "";
                this.newpsw = "";
                this.dbpsw = "";
                this.validcode = "";
            }
        }
    });
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var Vue = __webpack_require__(1);
(function () {
    var freshTempl = '<div>\
        <div class="refresh-box fresh-box" v-show="fresh.show">\
            <h2 class="refresh-hd">\
                <span class="refresh-header">刷新提示</span>\
                <ul class="lis-inline fresh-navs">\
                    <li><span class="on fresh-tab" @click.stop="selectFreshWay(\'smart\',$event.target)">智能刷新</span></li>\
                    <li><span class="fresh-tab" @click.stop="selectFreshWay(\'sofort\',$event.target)">普通刷新</span></li>\
                </ul>\
                <span class="pic-wrapper refresh-closer fr" @click="closeFresh">\
                    <i class="pic-icon"></i>\
               </span>\
            </h2>\
            <div v-show="fresh.smart">\
                <div class="refresh-cont" v-show="!barcode.smart">\
                    <p class="refresh-title"><img src="images/fresh-title.png" /></p>\
                    <table class="fresh-smart-list">\
                        <tr v-for="(item,index) in fresh.content">\
                            <td style="width:210px"><span class="icon-radio" :class="{\'on\':index==0}" @click="selectfreshitem(index,$event.target)"><i class="pic-icon"></i></span>{{item.content.split(";")[0]}}</td>\
                            <td style="width:90px;"><span class="color-orange-fc">{{item.amount}}</span>元</td>\
                            <td>{{item.content.split(";")[1]}}</td>\
                        </tr>\
                    </table>\
                    <p class="refresh-ps">注：每6小时执行一次，购买后立即执行。</p>\
                </div>\
                <div class="refresh-barcode" v-show="barcode.smart"><img :src="barcode.imgsrc" /><p>打开支付宝，扫一扫立即支付！</p></div>\
                <div class="refresh-bot">\
                    <p style="line-height:50px">应付金额<span style="color:#fc4f05;">{{fresh.sum}}</span>元<span class="price-pre">原价：{{fresh.presum}}元</span></p>\
                    <!--<p style="line-height:20px"><i class="pic-icon icon-checkbox on" @click="checkAutopay($event.target)"></i>自动续费<span style="color:#fc4f05;">{{fresh.discount}}</span></p>-->\
                    <p style="line-height:20px">账户余额：<span class="color-orange-fc">{{account.money}}</span>元</p>\
                    <p class="autopay-hint"><span class="disNo">（系统将在智能刷新到期后自动帮您续费，可通过选中自动续费启用或取消）</span></p>\
                    <button class="refresh-barcodepay" v-show="fresh.sum>account.money" @click.stop="freshAction($event.target)">扫一扫，立即支付</button>\
                    <button type="button" class="refresh-btn" @click="freshAction($event.target)">{{fresh.smartBtn}}</button>\
                </div>\
            </div>\
            <div v-show="!fresh.smart">\
                <div class="refresh-cont-normal-free" v-show="account.freeFreshTimes>0&&!barcode.normal">\
                    <p style="color:#ec7d0e;">信息刷新后：排名靠前，时间显示最新，能获得更多浏览机会</p>\
                    <p><span style="color:#fc4f05;">智能刷新</span>，效果翻倍，每次最低仅需<span style="color:#fc4f05;">0.7</span>元</p>\
                    <p style="font-size:18px; line-height:123px;">本次刷新<span style="color:#fc4f05;">免费</span>，是否确定刷新？</p>\
                </div>\
                <div class="refresh-cont-normal" v-show="account.freeFreshTimes==0&&!barcode.normal">\
                    <p style="color:#ec7d0e;">信息刷新后：排名靠前，时间显示最新，能获得更多浏览机会</p>\
                    <p><span style="color:#fc4f05;">智能刷新</span>，效果翻倍，每次最低仅需<span style="color:#fc4f05;">0.7</span>元</p>\
                    <p>提示：免费刷新次数已经用完，不享有免费刷新。</p>\
                    <p>本次刷新需要扣除推广金 <span style="color:#fc4f05;">1.0</span>元，是否确定刷新？</p>\
                </div>\
                <div class="refresh-barcode" v-show="barcode.normal"><img :src="barcode.imgsrc" /><p>打开支付宝，扫一扫立即支付！</p></div>\
                <div class="refresh-bot refresh-bot-normal">\
                    <span style="display:block;" v-show="account.freeFreshTimes==0">您的校企余额：<b style="color:#fc4f05;">{{regMoney(account.money)}}</b>元</span><button type="button" class="fresh-sofort-btn" @click="freshAction($event.target)">{{fresh.sofortBtn}}</button>\
                    <button class="refresh-barcodepay" v-show="fresh.sum>account.money" @click="freshAction($event.target)">扫一扫，立即支付</button>\
                </div>\
            </div>\
        </div>\
        <div class="refresh-hint-box fresh-hint-box" v-show="!fresh.show">\
            <h2 class="refresh-hint-hd">帖子刷新提示\
                <span class="pic-wrapper refresh-closer fr" @click="closeFresh">\
                    <i class="pic-icon"></i>\
               </span>\
            </h2>\
            <div class="refresh-hint-content">\
                <p class="LH43 fSize18">成功刷新<span class="color-orange-fc">1</span>条信息，并从余额中扣除<span class="color-orange-fc">{{fresh.sum}}</span>元</p>\
                <p class="LH40 fSize14">同类别的信息有刷新间隔限制，必须等上一条信息刷新成功后，系统才能帮您执行刷新请求。</p>\
                <div class="refresh-text-box">\
                    <h3>刷新内容</h3>\
                    <p class="fSize14 LH43"><span class="stick-name">{{fresh.title}}</span>您的信息已<span class="color-orange-fc">刷新成功</span>，正在让更多的客户<span class="color-orange-fc">查看</span></p>\
                    <p class="sticky-time">执行刷新时间： {{fresh.time}}</p>\
                    <p class="LH58 t-center fSize14">智能刷新，低价获得更多展示，每次刷新<span class="color-orange-fc">0.7</span>元起<button class="color-blue" @click="toSmartFresh">立即使用</button></p>\
                </div>\
            </div>\
        </div>\
    </div>';
    var freshbox = Vue.component("fresh-box", {
        template: freshTempl,
        props: ["freshitem", "userid", "showfresh"],
        data: function data() {
            var freshObj = {
                account: {
                    freeFreshTimes: 0,
                    money: 0
                },
                fresh: {
                    show: true,
                    title: "",
                    content: [],
                    sum: 4,
                    presum: 4,
                    time: "",
                    tarifId: 5,
                    discount: "9折",
                    smartBtn: "立即充值",
                    sofortBtn: "立即刷新",
                    smart: true
                },
                barcode: {
                    smart: false,
                    normal: false,
                    imgsrc: ""
                }
            };
            return freshObj;
        },
        methods: {
            checkAutopay: function checkAutopay(obj) {
                $(obj).toggleClass("on");
            },
            freshAction: function freshAction(obj) {
                if ($(obj).html() == "立即刷新" || $(obj).hasClass("refresh-barcodepay")) {
                    console.log(this.freshitem);
                    this.fresh.title = this.freshitem.title;
                    if (this.freshitem.demandId) {
                        //刷新校企合作需求
                        if (!this.fresh.smart) {
                            freshRequest(this.userid, this.freshitem.demandId, 1, 9, this);
                        } else {
                            freshRequest(this.userid, this.freshitem.demandId, 1, this.fresh.tarifId, this);
                        }
                    }
                    if (this.freshitem.jobFairId) {
                        //刷新招聘会需求
                        if (!this.fresh.smart) {
                            freshRequest(this.userid, this.freshitem.jobFairId, 3, 9, this);
                        } else {
                            freshRequest(this.userid, this.freshitem.jobFairId, 3, this.fresh.tarifId, this);
                        }
                    }
                    if (this.freshitem.recruitId) {
                        //刷新直聘需求
                        if (!this.fresh.smart) {
                            freshRequest(this.userid, this.freshitem.recruitId, 2, 9, this);
                        } else {
                            freshRequest(this.userid, this.freshitem.recruitId, 2, this.fresh.tarifId, this);
                        }
                    }
                }
                if ($(obj).html() == "立即充值") {
                    window.location.href = "recharge.html?userId=" + this.userid;
                }
            },
            selectfreshitem: function selectfreshitem(index, obj) {
                $(".fresh-smart-list .icon-radio").removeClass("on");
                $(obj).addClass("on");
                switch (index) {
                    case 0:
                        this.fresh.presum = 1 * 4;
                        this.fresh.sum = 4;
                        this.fresh.tarifId = 5;
                        break;
                    case 1:
                        this.fresh.presum = 1 * 4 * 3;
                        this.fresh.sum = this.fresh.presum * 0.9.toFixed(1);
                        this.fresh.tarifId = 6;
                        break;
                    case 2:
                        this.fresh.presum = 1 * 4 * 5;
                        this.fresh.sum = Math.floor(this.fresh.presum * 0.8).toFixed(1);
                        this.fresh.tarifId = 7;
                        break;
                    case 3:
                        this.fresh.presum = 1 * 4 * 10;
                        this.fresh.sum = Math.floor(this.fresh.presum * 0.7).toFixed(1);
                        this.fresh.tarifId = 8;
                        break;
                    default:
                }
            },
            selectFreshWay: function selectFreshWay(way, obj) {
                $(".fresh-navs .on").removeClass("on");
                $(obj).addClass("on");
                if (way == "smart") {
                    this.fresh.smart = true;
                } else {
                    this.fresh.smart = false;
                }
            },
            closeFresh: function closeFresh() {
                this.fresh.show = true;
                this.$emit("closefresh");
            },
            toSmartFresh: function toSmartFresh() {
                this.fresh.show = true;
            },
            regMoney: function regMoney(money) {
                if (money) {
                    return money.toFixed(2);
                } else {
                    return 0;
                }
            }
        },
        watch: {
            "showfresh": function showfresh(curval) {
                //初始化
                if (curval) {
                    initFresh(this);
                } else {
                    this.fresh.show = true;
                    this.fresh.smart = true;
                }
            },
            "fresh.smart": function freshSmart(curval) {
                //当上面分页切换时，重置总计价格
                if (curval) {
                    $(".fresh-smart-list .icon-radio.on").removeClass("on");
                    $(".fresh-smart-list .icon-radio:first").addClass("on");
                    this.fresh.sum = this.fresh.content[0].amount;
                    this.fresh.presum = 4;
                } else {
                    if (this.account.freeFreshTimes > 0) {
                        this.fresh.sum = 0;
                    } else {
                        this.fresh.sum = 1;
                    }
                }
            },
            "fresh.sum": function freshSum(curval) {
                this.fresh.sofortBtn = curval > this.account.money ? "立即充值" : "立即刷新";
                this.fresh.smartBtn = curval > this.account.money ? "立即充值" : "立即刷新";
            },
            "account.money": function accountMoney(curval) {
                this.fresh.sofortBtn = this.fresh.sum > curval ? "立即充值" : "立即刷新";
                this.fresh.smartBtn = this.fresh.sum > curval ? "立即充值" : "立即刷新";
            },
            "fresh.show": function freshShow(curval) {
                if (curval) {
                    initFresh(this);
                } else {
                    EventUtils.absCenter($(".fresh-hint-box"));
                }
            }
        },
        mounted: function mounted() {
            var _this = this;
            //获取刷新模板信息
            var postdata = {
                userId: this.userid,
                type: 1
            };
            EventUtils.ajaxReq("/sys/getRefreshHotInfoList", "post", postdata, function (resp, status) {
                if (resp.data) {
                    //   console.log(resp.data);
                    resp.data.shift();
                    _this.fresh.content = resp.data;
                }
            });
        }
    });

    //刷新请求
    function freshRequest(userId, pushId, type, tarifId, freshObj) {
        var postdata = {
            userId: userId,
            pushId: pushId,
            contentType: type,
            id: tarifId
        };
        console.log(postdata);
        EventUtils.ajaxReq("/sys/refresh", "post", postdata, function (resp, status) {
            //    console.log(resp);
            console.log(resp);
            if (resp.code == "00000") {
                if (resp.data.payImg) {
                    if (freshObj.fresh.smart) {
                        freshObj.barcode.smart = true;
                    } else {
                        freshObj.barcode.normal = true;
                    }
                    freshObj.barcode.imgsrc = resp.data.payImg;
                    //轮询查看是否支付成功
                    var paycheckdata = {
                        userId: userId,
                        orderId: resp.data.orderId
                    };
                    var timer = setInterval(function () {
                        EventUtils.ajaxReq("/sys/getOrderStatus", "get", paycheckdata, function (resp, status) {
                            console.log(resp);
                            if (resp.code == "00000") {
                                clearInterval(timer);
                                swal({
                                    title: "",
                                    text: "支付成功！",
                                    type: "success",
                                    timer: 2000,
                                    showConfirmButton: false
                                });
                                freshObj.barcode.smart = false;
                                freshObj.barcode.normal = false;
                            }
                        });
                    }, 1000);
                } else {
                    freshObj.fresh.time = resp.data;
                    freshObj.fresh.show = false;
                }
            }
        });
    }
    //初始化刷新盒子
    function initFresh(freshObj) {
        $(".fresh-navs .on").removeClass("on");
        $(".fresh-navs .fresh-tab:first").addClass("on");
        $(".fresh-smart-list .icon-radio.on").removeClass("on");
        $(".fresh-smart-list .icon-radio:first").addClass("on");
        EventUtils.ajaxReq("/center/user/getAccount", "get", { userId: freshObj.userid }, function (resp, status) {
            console.log(resp);
            freshObj.account.money = resp.data.useableBalance;
            freshObj.account.freeFreshTimes = resp.data.freeRefresh;
            freshObj.fresh.sum = freshObj.fresh.content[0].amount;
            freshObj.fresh.presum = 4;
            freshObj.fresh.smart = true;
            freshObj.barcode.smart = false;
            freshObj.barcode.normal = false;
            freshObj.fresh.show = true;
        });
    }
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var Vue = __webpack_require__(1);
(function () {
    var stickTempl = '<div>\
        <div class="refresh-box sticky-box" v-show="sticky.show">\
            <h2 class="refresh-hd">\
                <span class="refresh-header">置顶提示</span>\
                <ul class="lis-inline fresh-navs stick-navs">\
                    <li><span class="on" @click.stop="selectStickWay(\'sofort\',$event.target)">立即置顶</span></li>\
                    <!--<li><span @click.stop="selectStickWay(\'plan\',$event.target)">计划置顶</span></li>-->\
                </ul>\
                <span class="pic-wrapper refresh-closer fr" @click="closeSticky">\
                   <i class="pic-icon"></i>\
              </span>\
            </h2>\
            <div v-show="sticky.sofort">\
                <div class="refresh-cont" v-show="!barcode.sofort">\
                    <p class="stick-cont-title">信息置顶，排名提前到第一页，获得海量曝光，效果翻倍，赶快来试试吧！</p>\
                    <table class="sticky-sofort-list">\
                        <tr v-for="(item,index) in sticky.content">\
                            <td class="W210"><span class="icon-radio" :class="{\'on\':index==0}" @click="selectStickyItem(index,$event.target)"><i class="pic-icon"></i></span>{{item.content.split(";")[0]}}</td>\
                            <td class="W90"><span class="color-orange-fc">{{item.amount}}</span>元</td>\
                            <td>{{item.content.split(";")[1]}}</td>\
                        </tr>\
                    </table>\
                    <p class="refresh-ps">注：每24小时执行一次，购买后立即执行。</p>\
                </div>\
                <div class="refresh-barcode" v-show="barcode.sofort"><img :src="barcode.imgsrc" /><p>打开支付宝，扫一扫立即支付！</p></div>\
                <div class="refresh-bot">\
                    <p class="LH50">应付金额<span class="color-orange-fc">{{sticky.sum}}</span>元<span class="price-pre">原价：{{sticky.presum}}元</span></p>\
                    <!--<p class="LH20"><i class="pic-icon icon-checkbox on" @click="checkAutopay($event.target)"></i>自动续费<span class="color-orange-fc">{{sticky.discount}}</span></p>-->\
                    <p class="LH20">账户余额：<span class="color-orange-fc">{{account.money}}</span>元</p>\
                    <p class="autopay-hint"><span class="disNo">（系统将在智能置顶到期后自动帮您续费，可通过选中自动续费启用或取消）</span></p>\
                    <button type="button" class="refresh-btn" @click="stickAction($event.target)">{{sticky.sofortBtn}}</button>\
                    <button type="button" class="refresh-barcodepay" v-show="sticky.sum>account.money" @click="stickAction($event.target)">扫一扫，立即支付</button>\
                </div>\
            </div>\
            <div v-show="!sticky.sofort">\
                <div class="refresh-cont paLeft50 paBot20">\
                    <p class="LH52 fSize14 color-orange2">信息置顶，排名提前到第一页，获得海量曝光，效果翻倍，赶快来试试吧！</p>\
                    <p class="LH26 fSize16"><label class="plan-label">计划时间</label><input type="text" class="date-input" placeholder="2016-12-17" />到<input type="text" class="date-input" placeholder="2016-12-17" /></p>\
                    <p class="maT11 LH34"><label class="plan-label">置顶时段</label></p>\
                    <table class="plan-sticky-table">\
                        <tr>\
                            <th>时间</th>\
                            <th>星期一</th>\
                            <th>星期二</th>\
                            <th>星期三</th>\
                            <th>星期四</th>\
                            <th>星期五</th>\
                            <th>星期六</th>\
                            <th>星期日</th>\
                        </tr>\
                        <tr>\
                            <td class="td-title">全天置顶</td>\
                            <td name="1"></td>\
                            <td name="2"></td>\
                            <td name="3"></td>\
                            <td name="4"></td>\
                            <td name="5"></td>\
                            <td name="6"></td>\
                            <td name="7"></td>\
                        </tr>\
                        <tr>\
                            <td class="td-title">早8点-晚8点</td>\
                            <td name="1"></td>\
                            <td name="2"></td>\
                            <td name="3"></td>\
                            <td name="4"></td>\
                            <td name="5"></td>\
                            <td name="6"></td>\
                            <td name="7"></td>\
                        </tr>\
                        <tr>\
                            <td class="td-title">不置顶</td>\
                            <td name="1"></td>\
                            <td name="2"></td>\
                            <td name="3"></td>\
                            <td name="4"></td>\
                            <td name="5"></td>\
                            <td name="6"></td>\
                            <td name="7"></td>\
                        </tr>\
                    </table>\
                </div>\
                <div class="stick-bot-plan">\
                    <ul class="LH36">\
                        <li>总计价格：<span class="color-orange-fc">{{sticky.sum}}</span>元</li>\
                        <li>账户余额：<span class="color-orange-fc">{{account.money}}</span>元</li>\
                    </ul>\
                    <button type="button" class="refresh-btn plan-btn">{{sticky.planBtn}}</button>\
                </div>\
            </div>\
        </div>\
        <div class="refresh-hint-box stick-hint-box" v-show="!sticky.show">\
            <h2 class="refresh-hint-hd">帖子置顶提示\
                <span class="pic-wrapper refresh-closer fr" @click="closeSticky">\
                   <i class="pic-icon"></i>\
              </span>\
            </h2>\
            <div class="refresh-hint-content">\
                <p class="LH43 fSize18">成功置顶<span class="color-orange-fc">1</span>条信息，并从余额中扣除<span class="color-orange-fc">{{sticky.sum}}</span>元</p>\
                <p class="LH40 fSize14">同类别的信息有置顶间隔限制，必须等上一条信息置顶成功后，系统才能帮您执行置顶请求。</p>\
                <div class="refresh-text-box">\
                    <h3 class="stick-hint-title">置顶内容</h3>\
                    <p class="fSize14 LH43"><span class="stick-name">{{sticky.title}}</span>您的信息已<span class="color-orange-fc">置顶成功</span>，正在让更多的客户<span class="color-orange-fc">查看</span></p>\
                    <p class="sticky-time">执行置顶时间：{{sticky.time}}</p>\
                    <p class="LH58 t-center fSize14">计划置顶，低价获得更多展示，每次置顶<span class="color-orange-fc">7</span>元起<button class="color-blue" @click="toPlanSticky">立即使用</button></p>\
                </div>\
            </div>\
        </div>\
    </div>';

    Vue.component("stick-box", {
        template: stickTempl,
        props: ["stickitem", "userid", "showsticky"],
        data: function data() {
            return {
                account: {
                    money: 0
                },
                sticky: {
                    content: [],
                    show: true,
                    sum: 0,
                    presum: 0,
                    tarifId: 1,
                    title: "",
                    time: "16:08:02",
                    discount: "9折",
                    sofortBtn: "立即充值",
                    planBtn: "立即置顶",
                    sofort: true
                },
                barcode: {
                    sofort: false,
                    imgsrc: ""
                }
            };
        },
        methods: {
            checkAutopay: function checkAutopay(obj) {
                $(obj).toggleClass("on");
            },
            stickAction: function stickAction(obj) {
                this.sticky.title = this.stickitem.title;
                if ($(obj).html() == "立即置顶" || $(obj).hasClass("refresh-barcodepay")) {
                    this.sticky.title = this.stickitem.title;
                    if (this.stickitem.demandId) {
                        //刷新校企合作需求
                        if (!this.sticky.sofort) {
                            stickRequest(this.userid, this.stickitem.demandId, 1, 9, this);
                        } else {
                            stickRequest(this.userid, this.stickitem.demandId, 1, this.sticky.tarifId, this);
                        }
                    }
                    if (this.stickitem.jobFairId) {
                        //刷新招聘会需求
                        if (!this.sticky.sofort) {
                            stickRequest(this.userid, this.stickitem.jobFairId, 3, 9, this);
                        } else {
                            stickRequest(this.userid, this.stickitem.jobFairId, 3, this.sticky.tarifId, this);
                        }
                    }
                    if (this.stickitem.recruitId) {
                        //刷新直聘需求
                        if (!this.sticky.sofort) {
                            stickRequest(this.userid, this.stickitem.recruitId, 2, 9, this);
                        } else {
                            stickRequest(this.userid, this.stickitem.recruitId, 2, this.sticky.tarifId, this);
                        }
                    }
                }
                if ($(obj).html() == "立即充值") {
                    window.location.href = "recharge.html?userId=" + this.userid;
                }
            },
            selectStickWay: function selectStickWay(way, obj) {
                $(".stick-navs .on").removeClass("on");
                $(obj).addClass("on");
                if (way == "sofort") {
                    $(".sticky-sofort-list .icon-radio.on").removeClass("on");
                    $(".sticky-sofort-list .icon-radio:first").addClass("on");
                    this.sticky.sofort = true;
                    this.sticky.sum = parseInt(this.sticky.content[0].amount);
                    this.sticky.presum = parseInt(this.sticky.content[0].amount);
                } else {
                    this.sticky.sofort = false;
                    var summe = 0;
                    $(".plan-sticky-table tr").each(function (index) {
                        if (index == 1) {
                            summe += $(this).find("td.on").length * 70;
                        } else if (index == 2) {
                            summe += $(this).find("td.on").length * 50;
                        };
                    });
                    this.sticky.sum = summe;
                }
            },
            selectStickyItem: function selectStickyItem(index, obj) {
                $(".sticky-sofort-list .icon-radio").removeClass("on");
                $(obj).addClass("on");
                this.sticky.sum = parseInt(this.sticky.content[index].amount);
                this.sticky.tarifId = this.sticky.content[index].id;
                switch (index) {
                    case 0:
                        this.sticky.presum = 10;
                        break;
                    case 1:
                        this.sticky.presum = 10 * 3;
                        break;
                    case 2:
                        this.sticky.presum = 10 * 5;
                        break;
                    case 3:
                        this.sticky.presum = 10 * 10;
                        break;
                    default:
                }
            },
            toPlanSticky: function toPlanSticky() {
                var _this = this;
                EventUtils.ajaxReq("/center/user/getAccount", "get", { userId: this.userid }, function (resp, status) {
                    _this.account.money = resp.data.useableBalance;
                    _this.sticky.show = true;
                });
            },
            closeSticky: function closeSticky() {
                this.$emit("closesticky");
            }
        },
        watch: {
            "showsticky": function showsticky(curval) {
                if (curval) {
                    //初始化页面信息 
                    $(".sticky-sofort-list .icon-radio.on").removeClass("on");
                    $(".sticky-sofort-list .icon-radio:first").addClass("on");
                    initSticky(this);
                }
            },
            "sticky.sum": function stickySum(curval) {
                this.sticky.sofortBtn = curval > this.account.money ? "立即充值" : "立即置顶";
                this.sticky.planBtn = curval > this.account.money ? "立即充值" : "立即置顶";
            },
            "account.money": function accountMoney(curval) {
                this.sticky.sofortBtn = this.sticky.sum > curval ? "立即充值" : "立即置顶";
                this.sticky.planBtn = this.sticky.sum > curval ? "立即充值" : "立即置顶";
            },
            "sticky.show": function stickyShow(curval) {
                if (!curval) {
                    EventUtils.absCenter($(".stick-hint-box"));
                } else {
                    initSticky(this);
                }
            }
        },
        mounted: function mounted() {
            var _this = this;
            //获取刷新模板信息
            var postdata = {
                userId: this.userid,
                type: 2
            };
            EventUtils.ajaxReq("/sys/getRefreshHotInfoList", "post", postdata, function (resp, status) {
                if (resp.data) {
                    _this.sticky.content = resp.data;
                }
            });
        }
    });

    function initSticky(stickyObj) {
        stickyObj.sticky.sofort = true;
        stickyObj.sticky.presum = stickyObj.sticky.sum = stickyObj.sticky.content[0].amount;
        EventUtils.ajaxReq("/center/user/getAccount", "get", { userId: stickyObj.userid }, function (resp, status) {
            stickyObj.account.money = resp.data.useableBalance;
            stickyObj.sticky.show = true;
            stickyObj.barcode.sofort = false;
        });
    }

    function stickRequest(userId, pushId, type, tarifId, stickObj) {
        var postdata = {
            userId: userId,
            pushId: pushId,
            contentType: type,
            id: tarifId
        };
        console.log(postdata);
        EventUtils.ajaxReq("/sys/hotUp", "post", postdata, function (resp, statsu) {
            if (resp.code == "00000") {
                if (resp.data.payImg) {
                    stickObj.barcode.sofort = true;
                    stickObj.barcode.imgsrc = resp.data.payImg;
                    //轮询查看是否支付成功
                    var paycheckdata = {
                        userId: userId,
                        orderId: resp.data.orderId
                    };
                    var timer = setInterval(function () {
                        EventUtils.ajaxReq("/sys/getOrderStatus", "get", paycheckdata, function (resp, status) {
                            console.log(resp);
                            if (resp.code == "00000") {
                                clearInterval(timer);
                                swal({
                                    title: "",
                                    text: "支付成功！",
                                    type: "success",
                                    timer: 2000,
                                    showConfirmButton: false
                                });
                                stickObj.barcode.sofort = false;
                            }
                        });
                    }, 1500);
                } else {
                    stickObj.sticky.show = false;
                }
            }
        });
    }
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery, $) {

jQuery.extend({

    createUploadIframe: function createUploadIframe(id, uri) {
        //create frame
        var frameId = 'jUploadFrame' + id;

        if (window.ActiveXObject) {
            var io = document.createElement('<iframe id="' + frameId + '" name="' + frameId + '" />');
            if (typeof uri == 'boolean') {
                io.src = 'javascript:false';
            } else if (typeof uri == 'string') {
                io.src = uri;
            }
        } else {
            var io = document.createElement('iframe');
            io.id = frameId;
            io.name = frameId;
        }
        io.style.position = 'absolute';
        io.style.top = '-1000px';
        io.style.left = '-1000px';

        document.body.appendChild(io);

        return io;
    },
    createUploadForm: function createUploadForm(id, fileElementId) {
        //create form
        var formId = 'jUploadForm' + id;
        var fileId = 'jUploadFile' + id;
        var form = $('<form  action="" method="POST" name="' + formId + '" id="' + formId + '" enctype="multipart/form-data"></form>');
        var oldElement = $('#' + fileElementId);
        var newElement = $(oldElement).clone();
        $(oldElement).attr('id', fileId);
        $(oldElement).before(newElement);
        $(oldElement).appendTo(form);
        //set attributes
        $(form).css('position', 'absolute');
        $(form).css('top', '-1200px');
        $(form).css('left', '-1200px');
        $(form).appendTo('body');
        return form;
    },
    addOtherRequestsToForm: function addOtherRequestsToForm(form, data) {
        // add extra parameter
        var originalElement = $('<input type="hidden" name="" value="">');
        for (var key in data) {
            name = key;
            value = data[key];
            var cloneElement = originalElement.clone();
            cloneElement.attr({ 'name': name, 'value': value });
            $(cloneElement).appendTo(form);
        }
        return form;
    },

    ajaxFileUpload: function ajaxFileUpload(s) {
        // TODO introduce global settings, allowing the client to modify them for all requests, not only timeout
        s = jQuery.extend({}, jQuery.ajaxSettings, s);
        var id = new Date().getTime();
        var form = jQuery.createUploadForm(id, s.fileElementId);
        if (s.data) form = jQuery.addOtherRequestsToForm(form, s.data);
        var io = jQuery.createUploadIframe(id, s.secureuri);
        var frameId = 'jUploadFrame' + id;
        var formId = 'jUploadForm' + id;
        // Watch for a new set of requests
        if (s.global && !jQuery.active++) {
            jQuery.event.trigger("ajaxStart");
        }
        var requestDone = false;
        // Create the request object
        var xml = {};
        if (s.global) jQuery.event.trigger("ajaxSend", [xml, s]);
        // Wait for a response to come back
        var uploadCallback = function uploadCallback(isTimeout) {
            var io = document.getElementById(frameId);
            try {
                if (io.contentWindow) {
                    xml.responseText = io.contentWindow.document.body ? io.contentWindow.document.body.innerHTML : null;
                    xml.responseXML = io.contentWindow.document.XMLDocument ? io.contentWindow.document.XMLDocument : io.contentWindow.document;
                } else if (io.contentDocument) {
                    xml.responseText = io.contentDocument.document.body ? io.contentDocument.document.body.innerHTML : null;
                    xml.responseXML = io.contentDocument.document.XMLDocument ? io.contentDocument.document.XMLDocument : io.contentDocument.document;
                }
            } catch (e) {
                jQuery.handleError(s, xml, null, e);
            }
            if (xml || isTimeout == "timeout") {
                requestDone = true;
                var status;
                try {
                    status = isTimeout != "timeout" ? "success" : "error";
                    // Make sure that the request was successful or notmodified
                    if (status != "error") {
                        // process the data (runs the xml through httpData regardless of callback)
                        var data = jQuery.uploadHttpData(xml, s.dataType);
                        // If a local callback was specified, fire it and pass it the data
                        if (s.success) s.success(data, status);

                        // Fire the global callback
                        if (s.global) jQuery.event.trigger("ajaxSuccess", [xml, s]);
                    } else jQuery.handleError(s, xml, status);
                } catch (e) {
                    status = "error";
                    jQuery.handleError(s, xml, status, e);
                }

                // The request was completed
                if (s.global) jQuery.event.trigger("ajaxComplete", [xml, s]);

                // Handle the global AJAX counter
                if (s.global && ! --jQuery.active) jQuery.event.trigger("ajaxStop");

                // Process result
                if (s.complete) s.complete(xml, status);

                jQuery(io).unbind();

                setTimeout(function () {
                    try {
                        $(io).remove();
                        $(form).remove();
                    } catch (e) {
                        jQuery.handleError(s, xml, null, e);
                    }
                }, 100);

                xml = null;
            }
        };
        // Timeout checker
        if (s.timeout > 0) {
            setTimeout(function () {
                // Check to see if the request is still happening
                if (!requestDone) uploadCallback("timeout");
            }, s.timeout);
        }
        try {
            // var io = $('#' + frameId);
            var form = $('#' + formId);
            $(form).attr('action', s.url);
            $(form).attr('method', 'POST');
            $(form).attr('target', frameId);
            if (form.encoding) {
                form.encoding = 'multipart/form-data';
            } else {
                form.enctype = 'multipart/form-data';
            }
            $(form).submit();
        } catch (e) {
            jQuery.handleError(s, xml, null, e);
        }
        if (window.attachEvent) {
            document.getElementById(frameId).attachEvent('onload', uploadCallback);
        } else {
            document.getElementById(frameId).addEventListener('load', uploadCallback, false);
        }
        return { abort: function abort() {} };
    },

    uploadHttpData: function uploadHttpData(r, type) {
        var data = !type;
        data = type == "xml" || data ? r.responseXML : r.responseText;
        // If the type is "script", eval it in global context
        if (type == "script") jQuery.globalEval(data);
        // Get the JavaScript object, if JSON is used.
        if (type == "json") {
            // If you add mimetype in your response,
            // you have to delete the '<pre></pre>' tag.
            // The pre tag in Chrome has attribute, so have to use regex to remove
            var data = r.responseText;
            var rx = new RegExp("<pre.*?>(.*?)</pre>", "i");
            var am = rx.exec(data);
            //this is the desired data extracted
            var data = am ? am[1] : ""; //the only submatch or empty
            eval("data = " + data);
        }
        // evaluate scripts within html
        if (type == "html") jQuery("<div>").html(data).evalScripts();
        //alert($('param', data).each(function(){alert($(this).attr('value'));}));
        return data;
    },
    handleError: function handleError(s, xml, status, e) {
        // If a local callback was specified, fire it
        if (s.error) s.error(xml, status, e);
        // Fire the global callback
        if (s.global) jQuery.event.trigger("ajaxError", [xml, s, e]);
    }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(0)))

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vue = __webpack_require__(1);
(function () {
    var templCard = '<div class="minicard" v-cloak>\
        <h2 class="card-header"><span class="card-header-title" v-show="cardtype==\'inc\'">企业名片</span><span class="card-header-title" v-show="cardtype==\'uni\'">高校名片</span></h2>\
        <div class="card-body" v-show="cardtype==\'inc\'">\
            <div class="clearfix body-top">\
                <i class="pic-wrapper fl card-avatar"><img :src="infosets.userIcon"></i>\
                <div class="fl">\
                    <h3 class="body-title">{{infosets.userName}}</h3>\
                    <table class="basic-info">\
                        <tr>\
                            <td>企业性质：</td>\
                            <td style="padding-right: 15px;">{{infosets.userProperty}}</td>\
                            <td>企业规模：</td>\
                            <td>{{infosets.userScale}}</td>\
                        </tr>\
                        <tr>\
                            <td>联系方式：</td>\
                            <td style="padding-right: 15px;">{{infosets.mobile}}</td>\
                            <td>企业邮箱：</td>\
                            <td>{{infosets.email}}</td>\
                        </tr>\
                    </table>\
                    <p><label>公司地址：</label>{{infosets.userAddress}}</p>\
                </div>\
            </div>\
            <div class="body-bot">\
                <h3>公司简介</h3>\
                <p>{{infosets.userDiscription}}</p>\
            </div>\
        </div>\
        <div class="card-body" v-show="cardtype==\'uni\'">\
            <div class="clearfix body-top">\
                <i class="pic-wrapper fl card-avatar"><img :src="infosets.userIcon"></i>\
                <div class="fl">\
                    <h3 class="body-title">{{infosets.userName}}</h3>\
                    <table class="basic-info">\
                        <tr>\
                            <td>高校类别：</td>\
                            <td style="padding-right: 15px;">{{infosets.userType}}</td>\
                            <td>高校性质：</td>\
                            <td>{{infosets.userProperty}}</td>\
                        </tr>\
                        <tr>\
                            <td>联系电话：</td>\
                            <td style="padding-right: 15px;">{{infosets.mobile}}</td>\
                            <td>高校邮箱：</td>\
                            <td>{{infosets.email}}</td>\
                        </tr>\
                        <tr>\
                            <td>在校人数：</td>\
                            <td style="padding-right: 15px;">{{infosets.userScale}}</td>\
                            <td>重点专业：</td>\
                            <td>{{infosets.userProfession}}</td>\
                        </tr>\
                    </table>\
                    <p><label>学校地址：</label>{{infosets.userAddress}}</p>\
                </div>\
            </div>\
            <div class="body-bot">\
                <h3>高校简介</h3>\
                <p>{{infosets.userDiscription}}</p>\
            </div>\
        </div>\
        <div class="card-operations">\
            <button class="button-agree" type="button" @click.stop="agreeEv">同意</button>\
            <button class="button-deny" type="button" @click.stop="denyEv">不同意</button>\
        </div>\
    </div>';

    Vue.component("minicard", {
        template: templCard,
        props: ["cardtype", "infosets"],
        methods: {
            agreeEv: function agreeEv() {
                this.$emit("agree");
            },
            denyEv: function denyEv() {
                this.$emit("deny");
            }
        }
    });
})();

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vue = __webpack_require__(1);
(function () {
    var vipRecTempl = '<div class="vip-records-box">\
                        <h3 class="vip-record-head">使用记录</h3>\
                        <ul class="vip-records" v-show="vip.totalitems>0">\
                            <li v-for="record in vip.records"><span class="W182">{{dateExtrac(record.createTime)}}</span><span class="W212">{{typeExtrac(record.orderType)}}：{{record.count}}次</span><span class="W216"><b class="fSize14">{{priceInteger(record.amount,record.orderType)}}</b>{{priceDecimal(record.amount)}} 元</span><span class="">交易完成</span></li>\
                        </ul>\
                        <p class="t-center" v-show="vip.totalitems==0">暂无使用记录~</p>\
                        <div class="more-records" v-show="vip.totalitems>0">\
                            <button class="more-records-btn" v-show="!show.page" @click.stop="showMoreRec">查看更多使用记录</button>\
                            <pagination :showpages="showpage(vip.totalpages)" :totalpages="vip.totalpages" type="coop" @topage="topage" v-show="show.page"></pagination>\
                        </div>\
                    </div>';
    Vue.component("vip-record", {
        template: vipRecTempl,
        props: ["userid"],
        data: function data() {
            return {
                vip: {
                    totalpages: 1,
                    totalitems: 0,
                    records: []
                },
                show: {
                    page: false
                }
            };
        },
        methods: {
            dateExtrac: function dateExtrac(date) {
                if (date) {
                    return date.split(" ")[0];
                } else {
                    return "---";
                }
            },
            typeExtrac: function typeExtrac(type) {
                switch (type) {
                    case "0":
                        return "账户充值";
                    case "1":
                        return "信息刷新";
                    case "2":
                        return "信息置顶";
                }
            },
            showpage: function showpage(totalpages) {
                if (totalpages > 3) {
                    return 3;
                } else {
                    return totalpages;
                }
            },
            topage: function topage(page, type) {
                var postdata = {
                    userId: this.userid,
                    index: page,
                    count: 5
                };
                var _this = this;
                EventUtils.ajaxReq("/sys/getOrderList", "get", postdata, function (resp, status) {
                    if (resp.data) {
                        _this.vip.records = resp.data.list;
                    } else {
                        _this.vip.records = [];
                    }
                });
            },
            showMoreRec: function showMoreRec() {
                this.show.page = true;
            },
            priceInteger: function priceInteger(val, type) {
                var priceInt = parseInt(val);
                if (type != '0') {
                    return "- " + priceInt;
                } else if (priceInt > 0) {
                    return "+ " + priceInt;
                }
            },
            priceDecimal: function priceDecimal(val) {
                var priceF = (parseFloat(val) * 100 - parseInt(val) * 100) % 100;
                //    if(priceF*10%1==0) priceF+="0";
                if (priceF < 10) priceF += "0";
                return "." + priceF;
            }
        },
        mounted: function mounted() {
            var postdata = {
                userId: this.userid,
                index: 1,
                count: 5
            };
            var _this = this;
            EventUtils.ajaxReq("/sys/getOrderList", "get", postdata, function (resp, status) {
                console.log(resp);
                if (resp && resp.data) {
                    _this.vip.totalpages = resp.data.totalPage;
                    _this.vip.records = resp.data.list;
                    _this.vip.totalitems = resp.data.totalRow;
                } else {
                    _this.vip.totalpages = 1;
                    _this.vip.records = [];
                    _this.vip.totalitems = 0;
                }
            });
        },
        components: {
            'pagination': pagination
        }
    });
})();

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vue = __webpack_require__(1);
__webpack_require__(4);
__webpack_require__(3);
__webpack_require__(28);
__webpack_require__(20);
__webpack_require__(6);
__webpack_require__(8);
__webpack_require__(29);
__webpack_require__(22);
__webpack_require__(21);
__webpack_require__(18);
__webpack_require__(25);
__webpack_require__(26);
__webpack_require__(30);
__webpack_require__(23);
__webpack_require__(9);
__webpack_require__(10);
__webpack_require__(17);
__webpack_require__(12);
__webpack_require__(2);
__webpack_require__(5);
__webpack_require__(7);
__webpack_require__(38);
var parObj = EventUtils.urlExtrac(window.location);
var respObj = {}; //请求的本页面的数据集合

function infoRequest() {
    var postdata = {
        userId: parObj.userId || localStorage.userId,
        loginIdentifier: parObj.loginId || localStorage.loginId
    };
    console.log(postdata);
    EventUtils.ajaxReq('/user/company/getInfo', 'get', postdata, function (resp, status) {
        respObj = resp.data;
        console.log(resp);
        if (respObj.userIcon) {
            (0, _jquery2.default)("#avatar-box").html("<img src='" + respObj.userIcon + "' />");
        }
        if (respObj) {
            var portobrief = {
                IncProps: respObj.property,
                IncScale: respObj.scale,
                address: {
                    province: respObj.province,
                    city: respObj.city,
                    district: respObj.area
                },
                email: respObj.email
            };
            appPorto.inc = respObj.name;
            appPorto.briefInfo = portobrief;

            var specialLevel = "";
            if (respObj.isWorld == "1") {
                specialLevel = "世界500强";
                (0, _jquery2.default)(".uni-level input[value='0']").attr("checked", "true");
            } else if (respObj.isCountry == "1") {
                specialLevel = "中国500强";
                (0, _jquery2.default)(".uni-level input[value='1']").attr("checked", "true");
            }
            var resumedata = {
                Inc: respObj.name,
                trade: respObj.type,
                scale: respObj.scale,
                props: respObj.property,
                specialLv: specialLevel,
                intro: respObj.discription != undefined ? respObj.discription : "",
                comLicense: "",
                comLicenseUrl: respObj.imgUrl,
                hasBusLicense: respObj.imgUrl && respObj.imgUrl != "",
                edit: respObj.infoStatus == "0",
                view: respObj.infoStatus != "0"
            };
            appCont.resume = resumedata;
        }
    }

    //获取用户平台信息
    );EventUtils.ajaxReq("/center/user/getInfo", "get", { userId: parObj.userId }, function (resp, status) {
        // 账户信息
        var percent = 0;
        if (resp.data.mobile != "") {
            percent += 50;
        }
        if (resp.data.email != "") {
            percent += 30;
        }
        init_safepos(percent);
        var configdata = {
            loginName: resp.data.loginName,
            userId: parObj.userId,
            safeLevel: percent + "%",
            bind: {
                mobile: resp.data.mobile,
                email: resp.data.email
            }
        };
        appCont.config = configdata;
    });
}

var appTop = new Vue({
    el: "#app-top",
    data: {
        homeLink: EventUtils.securityUrl("index.html?userId=" + parObj.userId)
    },
    methods: {
        showMsgbox: function showMsgbox() {
            appModal.show.message = true;
            appModal.showModal = true;
        }
    }
});

var appPorto = new Vue({
    el: "#app-porto",
    data: {
        viewInfo: true,
        inc: "企业名称",
        database: {
            incprops: xqdatabase.incProps,
            incscale: xqdatabase.incScale,
            addrData: addArray
        },
        briefInfo: {
            IncProps: "民营企业",
            IncScale: "600人以上",
            address: {
                province: "浙江",
                city: "杭州",
                district: "滨江"
            },
            email: "xqztc@qq.com"
        },
        initAddress: {
            province: "",
            city: "",
            district: ""
        },
        cloneInfo: {}
    },
    methods: {
        uploading: function uploading() {
            appModal.showModal = true;
            appModal.show.upload = true;
        },
        save: function save() {
            this.briefInfo.address.province = (0, _jquery2.default)(".edit-brief .sel-province input").val();
            this.briefInfo.address.city = (0, _jquery2.default)(".edit-brief .sel-city input").val();
            this.briefInfo.address.district = (0, _jquery2.default)(".edit-brief .sel-district input").val();
            this.viewInfo = true;
            var postdata = {
                userId: parObj.userId,
                companyId: respObj.companyId,
                //    loginName:parObj.loginName,
                property: this.briefInfo.IncProps,
                province: this.briefInfo.address.province,
                city: this.briefInfo.address.city,
                area: this.briefInfo.address.district,
                email: this.briefInfo.email
            };
            console.log(postdata);
            EventUtils.ajaxReq('/user/company/modifyInfo', 'post', postdata, function (resp, status) {
                console.log(resp);
            });
        },
        cancel: function cancel() {
            this.briefInfo = EventUtils.cloneObj(this.cloneInfo);
            this.viewInfo = true;
        },
        edit: function edit() {
            this.cloneInfo = EventUtils.cloneObj(this.briefInfo);
            this.initAddress = EventUtils.cloneObj(this.briefInfo.address);
            this.viewInfo = false;
            this.$nextTick(function () {
                selectInitInput();
                selectInitPos();
            });
        }
    }
});
// 移除多余的两项
xqdatabase.incProps.remove("中国500强");
xqdatabase.incProps.remove("世界500强");
var appCont = new Vue({
    el: "#app-content",
    data: {
        database: {
            IncScale: xqdatabase.incScale,
            IncProps: xqdatabase.incProps
        },
        account: {
            userId: parObj.userId,
            money: ""
        },
        resume: {
            Inc: "",
            trade: "",
            scale: "",
            props: "民营企业",
            specialLv: "",
            intro: "国际领先的互联网科技公司",
            comLicense: "",
            comLicenseUrl: "",
            hasBusLicense: false,
            edit: false,
            view: true
        },
        require: {
            state: "校企合作",
            demandSrc: 0,
            curpage: 1,
            totalpages: 1,
            totalitems: 0,
            results: [],
            showCombi: true,
            showRecruit: true
        },
        collect: {
            state: "校企合作",
            curpage: 1,
            collectSrc: 0,
            totalpages: 1,
            totalitems: 0,
            results: []
        },
        message: {
            combi: {
                state: "发出的邀请",
                curpage: 1,
                totalpages: 1,
                totalitems: 0,
                msgsrc: 1,
                results: []
            },
            jobfair: {
                state: "发出的邀请",
                curpage: 1,
                totalpages: 1,
                totalitems: 0,
                msgsrc: 2,
                results: []
            },
            recruit: {
                state: "全部状态",
                curpage: 1,
                totalpages: 1,
                totalitems: 0,
                results: []
            }
        },
        vip: {
            tarif: [{ level: "初级会员", prior: 1, refresh: 1, mapping: 8, price: 585, icon: "images/crown-junior.png" }, { level: "中级会员", prior: 2, refresh: 4, mapping: 12, price: 1040, icon: "images/crown-middle.png" }, { level: "高级会员", prior: 4, refresh: 8, mapping: 16, price: 1560, icon: "images/crown-senior.png" }]
        },
        coop: {
            state: "校企合作",
            curpage: 1,
            totalpages: 1,
            totalitems: 0,
            applystatus: 1,
            results: []
        },
        config: {
            loginName: "",
            userId: parObj.userId,
            safeLevel: "80%",
            bind: { mobile: "", email: "" }
        }
    },
    watch: {
        "config.bind.mobile": function configBindMobile(curval) {
            var percent = 0;
            if (this.config.bind.mobile != "") {
                percent += 50;
            }
            if (this.config.bind.email != "") {
                percent += 30;
            }
            init_safepos(percent);
            percent += "%";
            this.config.safeLevel = percent;
        },
        "config.bind.email": function configBindEmail(curval) {
            var percent = 0;
            if (this.config.bind.mobile != "") {
                percent += 50;
            }
            if (this.config.bind.email != "") {
                percent += 30;
            }
            init_safepos(percent);
            percent += "%";
            this.config.safeLevel = percent;
        },
        "require.state": function requireState(curval) {
            if (curval == "校企合作") {
                demandRequest(0, 1);
            } else if (curval == "招聘会") {
                demandRequest(1, 1);
            } else if (curval == "企业直聘") {
                demandRequest(2, 1);
            }
        },
        "collect.state": function collectState(curval) {
            if (curval == "校企合作") {
                collectRequest(0, 1);
            }
            if (curval == "高校招聘会") {
                collectRequest(1, 1);
            }
        },
        "message.combi.state": function messageCombiState(curval) {
            if (curval == "发出的邀请") {
                combiMsgRequest(1, 1);
            } else if (curval == "收到的邀请") {
                combiMsgRequest(2, 1);
            };
            this.message.combi.curpage = 1;
        },
        "message.jobfair.state": function messageJobfairState(curval) {
            if (curval == "发出的邀请") {
                jobfairMsgRequest(1, 1);
            } else {
                jobfairMsgRequest(2, 1);
            }
        },
        "coop.state": function coopState(curval) {
            if (curval == "校企合作") {
                coopRequest(1, 1);
            } else if (curval == "招聘会") {
                coopRequest(2, 1);
            }
        },
        "resume.intro": function resumeIntro(curval) {
            this.resume.intro = EventUtils.limitWords(1000, curval);
        }
    },
    methods: {
        newRequire: function newRequire() {
            if (!respObj.cvStatus || respObj.cvStatus == "0") {
                swal({
                    title: "",
                    text: "请先完善您的企业信息！",
                    type: "warning"
                });
                return false;
            }
            var link = EventUtils.securityUrl("incRequire.html?new=1&userId=" + parObj.userId + "&loginId=" + parObj.loginId);
            window.location.href = link;
        },
        selvipnav: function selvipnav(obj) {
            if ((0, _jquery2.default)(obj).hasClass("vip-li")) {
                if (this.account.money == "") {
                    EventUtils.ajaxReq("/center/user/getAccount", "get", { userId: parObj.userId }, function (resp, status) {
                        appCont.account.money = resp.data.useableBalance;
                    });
                }
                var index = (0, _jquery2.default)(obj).index();
                (0, _jquery2.default)(".vip-navs li.on").removeClass("on");
                (0, _jquery2.default)(obj).addClass("on");
                (0, _jquery2.default)(".vip-cont").removeClass("on");
                (0, _jquery2.default)(".vip-center .vip-cont").eq(index).addClass("on");
            }
        },
        recharge: function recharge() {
            var link = "recharge.html?" + window.btoa("userId=" + parObj.userId);
            //  new EventUtils.submitForm("recharge.html?", { userId: parObj.userId }).post();
            // new EventUtils.submitForm('/Activity/ActivityInformation', { a_id: "1" }).post();
            window.location.href = link;
        },
        priceInteger: function priceInteger(val) {
            return parseInt(val);
        },
        priceDecimal: function priceDecimal(val) {
            var priceF = (parseFloat(val) * 100 - parseInt(val) * 100) % 100;
            priceF = parseInt(priceF);
            if (priceF < 10) priceF += "0";
            return "." + priceF;
        },
        regAddress: function regAddress(address) {
            if (address) {
                return address.split(";").join("-");
            } else {
                return "";
            }
        },
        infoExtrac: function infoExtrac(text) {
            if (text) {
                text = EventUtils.infoExtrac(text);
                return text;
            } else {
                return "";
            }
        },
        infoShow: function infoShow(text, type) {
            return EventUtils.infoShow(text, type);
        },
        dateExtrac: function dateExtrac(date) {
            if (date) {
                return date.split(" ")[0];
            } else {
                return "";
            }
        },
        cityExtrac: function cityExtrac(text) {
            if (text) {
                return text.split(";")[1];
            } else {
                return "";
            }
        },
        requireLink: function requireLink(item) {
            if (item.demandId) {
                var link = "detail-company.html?userId=" + parObj.userId + "&loginId=" + parObj.loginId + "&demandId=" + item.demandId + "&userType=2";
                return EventUtils.securityUrl(link);
            }
            if (item.recruitId) {
                var link = "detail-position.html?userId=" + parObj.userId + "&recruitId=" + item.recruitId;
                return EventUtils.securityUrl(link);
            }
            if (item.jobFairId) {
                var link = "detail-increcruit.html?userId=" + parObj.userId + "&jobfairId=" + item.jobFairId;
                return EventUtils.securityUrl(link);
            }
        },
        collectLink: function collectLink(item) {
            if (item.demandId) {
                var link = "detail-uni.html?userId=" + parObj.userId + "&demandId=" + item.demandId;
                return EventUtils.securityUrl(link);
            }
            if (item.jobFairId) {
                var link = "detail-unirecruit.html?userId=" + parObj.userId + "&jobfairId=" + item.jobFairId;
                return EventUtils.securityUrl(link);
            }
        },
        messageLink: function messageLink(type, id) {
            if (type == "combi") {
                if (appCont.message.combi.msgsrc == 1) {
                    var link = "detail-uni.html?demandId=" + id + "&userId=" + parObj.userId;
                    return EventUtils.securityUrl(link);
                } else {
                    var link = "detail-company.html?demandId=" + id + "&userId=" + parObj.userId;
                    return EventUtils.securityUrl(link);
                }
            }
            if (type == "jobfair") {
                if (appCont.message.jobfair.msgsrc == 1) {
                    var link = "detail-unirecruit.html?jobfairId=" + id + "&userId=" + parObj.userId;
                    return EventUtils.securityUrl(link);
                } else {
                    var link = "detail-increcruit.html?jobfairId=" + id + "&userId=" + parObj.userId;
                    return EventUtils.securityUrl(link);
                }
            }
        },
        coopLink: function coopLink(item) {
            if (item.demandId) {
                if (item.releaseType == "1") {
                    var link = "detail-uni.html?demandId=" + item.demandId + "&userId=" + parObj.userId;
                    return EventUtils.securityUrl(link);
                } else {
                    var link = "detail-company.html?demandId=" + item.demandId + "&userId=" + parObj.userId;
                    return EventUtils.securityUrl(link);
                }
            }
            if (item.jobFairId) {
                var link = "detail-unirecruit.html?jobfairId=" + item.jobFairId + "&userId=" + parObj.userId;
                return EventUtils.securityUrl(link);
            }
        },
        popComment: function popComment(item) {
            if (item.releaseType == "1") {
                //发布者为高校
                appModal.comment.cooperId = item.userId;
            }
            if (item.releaseType == "2") {
                //发布者为企业
                appModal.comment.cooperId = item.applyUserId;
            }
            if (!item.releaseType) {
                // 招聘会
                appModal.comment.cooperId = item.userId;
            }
            appModal.showModal = true;
            appModal.show.comment = true;
        },
        popTrade: function popTrade() {
            appModal.showModal = true;
            appModal.show.trade = true;
        },
        editSwipe: function editSwipe() {
            if (appCont.resume.specialLv == "世界500强") {
                (0, _jquery2.default)(".lv-world").addClass("selected");
            } else if (appCont.resume.specialLv == "中国500强") {
                (0, _jquery2.default)(".lv-china").addClass("selected");
            }
            this.resume.firstEdit = false;
            this.resume.edit = true;
            this.resume.view = false;
            this.$nextTick(function () {
                selectInitInput();
                selectInitPos();
            });
        },
        saveResume: function saveResume() {
            var isFilled = true;
            (0, _jquery2.default)(".resumeCont input[type='text']:visible").each(function () {
                if ((0, _jquery2.default)(this).val() == "") {
                    (0, _jquery2.default)(this).addClass("hint-nullable");
                    isFilled = false;
                } else {
                    (0, _jquery2.default)(this).removeClass("hint-nullable");
                }
            });
            if ((0, _jquery2.default)(".resumeCont textarea").val() == "") {
                (0, _jquery2.default)(".resumeCont textarea").addClass("hint-nullable");
                isFilled = false;
            } else {
                (0, _jquery2.default)(".resumeCont textarea").removeClass("hint-nullable");
            }
            if (!isFilled) {
                swal({
                    title: "",
                    text: "请填写完整您的企业信息！",
                    type: "warning"
                });
                return false;
            }

            if (this.resume.comLicense != "" || this.resume.comLicenseUrl != "") {
                this.resume.hasBusLicense = true;
            } else {
                this.resume.hasBusLicense = false;
            }
            console.log(this.resume.comLicense, 1);
            // this.resume.edit = false;
            // this.resume.view = true;
            //上传许可证等图片文件
            if (this.resume.comLicense != "") {
                var hascomUrl = false;
                _jquery2.default.ajaxFileUpload({
                    url: 'http://www.xiaoqiztc.com/easily_xq_WebApi/sys/imageUpload', //提交的路径
                    secureuri: false, // 是否启用安全提交，默认为false
                    fileElementId: 'file-busi', // file控件id
                    dataType: 'json',
                    data: {
                        userId: parObj.userId,
                        type: 2,
                        fileName: appCont.resume.comLicense //传递参数，用于解析出文件名
                    }, // 键:值，传递文件名
                    success: function success(data, status) {
                        hascomUrl = true;
                        appCont.resume.comLicenseUrl = data.data;
                        console.log(data.data);
                    },
                    error: function error(data, status) {}
                });
            };
            if (this.resume.comLicense != "") {
                //如果用户有上传文件
                setTimeout(function () {
                    if (appCont.resume.comLicense != "" && !hascomUrl) {
                        swal({
                            title: "",
                            text: "文件上传失败，请重新上传！",
                            type: "error"
                        });
                    } else {
                        var postdata = {
                            userId: parObj.userId,
                            companyId: respObj.companyId,
                            name: appCont.resume.Inc,
                            type: appCont.resume.trade,
                            property: appCont.resume.props,
                            scale: appCont.resume.scale,
                            discription: appCont.resume.intro,
                            imgUrl: appCont.resume.comLicenseUrl,
                            isWorld: appCont.resume.specialLv == "世界500强" ? 1 : 0,
                            isCountry: appCont.resume.specialLv == "中国500强" ? 1 : 0
                        };
                        EventUtils.ajaxReq('/user/company/modifyInfo', 'post', postdata, function (resp, status) {
                            appCont.resume.edit = false;
                            appCont.resume.view = true;
                        });
                    }
                }, 500);
            } else {
                var postdata = {
                    userId: parObj.userId,
                    companyId: respObj.companyId,
                    name: appCont.resume.Inc,
                    type: appCont.resume.trade,
                    property: appCont.resume.props,
                    scale: appCont.resume.scale,
                    discription: appCont.resume.intro,
                    imgUrl: appCont.resume.comLicenseUrl,
                    isWorld: appCont.resume.specialLv == "世界500强" ? 1 : 0,
                    isCountry: appCont.resume.specialLv == "中国500强" ? 1 : 0
                };
                EventUtils.ajaxReq('/user/company/modifyInfo', 'post', postdata, function (resp, status) {
                    appCont.resume.edit = false;
                    appCont.resume.view = true;
                });
            }
        },
        checkExlv: function checkExlv(obj) {
            (0, _jquery2.default)(obj).toggleClass("selected");
            if ((0, _jquery2.default)(".lv-world").hasClass("selected")) {
                this.resume.specialLv = "世界500强";
            } else if ((0, _jquery2.default)(".lv-china").hasClass("selected")) {
                this.resume.specialLv = "中国500强";
            } else {
                this.resume.specialLv = "";
            }
        },
        delItem: function delItem(item) {
            if (item.demandId) {
                var postdata = {
                    userId: parObj.userId,
                    loginIdentifier: parObj.loginId,
                    demandId: item.demandId
                };
                EventUtils.ajaxReq("/demand/delInfo", "post", postdata, function (resp, status) {
                    if (appCont.require.results.length == 1 && appCont.require.curpage > 1) {
                        appCont.require.curpage -= 1;
                    }
                    (0, _jquery2.default)(".requireBox .pagination a.page").eq(appCont.require.curpage - 1).parent().trigger("click");
                });
            }
            if (item.jobFairId) {
                var postdata = {
                    userId: parObj.userId,
                    loginIdentifier: parObj.loginId,
                    jobFairId: item.jobFairId
                };
                EventUtils.ajaxReq("/jobfair/delInfo", "post", postdata, function (resp, status) {
                    if (appCont.require.results.length == 1 && appCont.require.curpage > 1) {
                        appCont.require.curpage -= 1;
                    }
                    (0, _jquery2.default)(".requireBox .pagination a.page").eq(appCont.require.curpage - 1).parent().trigger("click");
                });
            }
            if (item.recruitId) {
                var postdata = {
                    userId: parObj.userId,
                    loginIdentifier: parObj.loginId,
                    recruitId: item.recruitId
                };
                EventUtils.ajaxReq("/recruit/delInfo", "post", postdata, function (resp, status) {
                    if (appCont.require.results.length == 1 && appCont.require.curpage > 1) {
                        appCont.require.curpage -= 1;
                    }
                    (0, _jquery2.default)(".requireBox .pagination a.page").eq(appCont.require.curpage - 1).parent().trigger("click");
                });
            }
        },
        modItem: function modItem(item) {
            console.log(item);
            var link = "incRequire.html?new=0&userId=" + parObj.userId + "&loginId=" + parObj.loginId + "&demandSrc=" + appCont.require.demandSrc;
            if (item.demandId) {
                link += "&demandId=" + item.demandId + "&demandType=" + item.demandType;
            }
            if (item.jobFairId) {
                link += "&jobfairId=" + item.jobFairId;
            }
            if (item.recruitId) {
                link += "&recruitId=" + item.recruitId;
            }
            link = EventUtils.securityUrl(link);
            window.open(link, "_blank");
        },
        freshItem: function freshItem(item) {
            appModal.fresh.freshItem = item;
            appModal.showModal = true;
            appModal.show.freshbox = true;
        },
        stickItem: function stickItem(item) {
            appModal.sticky.stickItem = item;
            appModal.showModal = true;
            appModal.show.stickybox = true;
        },
        priceCal1: function priceCal1(val) {
            var priceInt = parseInt(val);
            if (priceInt == 0) {
                return "- " + priceInt;
            } else if (priceInt > 0) {
                return "+ " + priceInt;
            }
        },
        priceCal2: function priceCal2(val) {
            var priceF = (parseFloat(val) * 100 - parseInt(val) * 100) % 100;
            //    if(priceF*10%1==0) priceF+="0";
            if (priceF < 10) priceF += "0";
            return "." + priceF;
        },
        showpage: function showpage(totalpage) {
            if (totalpage < 3) {
                return totalpage;
            } else {
                return 3;
            }
        },
        topage: function topage(page, type) {
            if (type == "require") {
                demandRequest(appCont.require.demandSrc, page);
            } else if (type == "collect") {
                collectRequest(appCont.collect.collectSrc, page);
            } else if (type == "msg-combi") {
                combiMsgRequest(appCont.message.combi.msgsrc, page);
            } else if (type == "msg-jobfair") {
                jobfairMsgRequest(appCont.message.jobfair.msgsrc, page);
            } else if (type == "msg-recruit") {
                recruitMsgRequest(page);
            } else if (type == "coop") {
                coopRequest(appCont.coop.applystatus, page);
            }
        },
        changeComLicense: function changeComLicense(obj) {
            if (obj.files[0].size > 3 * 1024 * 1204) {
                swal({
                    title: "",
                    text: "请上传小于3M的文件！",
                    type: "warning"
                });
                obj.value = "";
            }
            this.resume.comLicense = obj.value;
        },
        showFile: function showFile(fid) {
            if (this.resume.comLicense != "") {
                appModal.preImgUrl = EventUtils.getLocalImgUrl(fid);
            } else if (this.resume.comLicenseUrl != "") {
                appModal.preImgUrl = this.resume.comLicenseUrl;
            }
            appModal.showModal = true;
            appModal.show.preImg = true;
        },
        showPrefile: function showPrefile(type) {
            if (type == "com") {
                appModal.preImgUrl = appCont.resume.comLicenseUrl;
                appModal.showModal = true;
                appModal.show.preImg = true;
            } else if (type == "uni") {
                appModal.preImgUrl = appCont.resume.uniLicenseUrl;
                appModal.showModal = true;
                appModal.show.preImg = true;
            }
        },
        applyCollect: function applyCollect(item) {
            if (item.demandId) {
                var postdata = {
                    userId: parObj.userId,
                    loginIdentifier: parObj.loginId,
                    demandId: item.demandId
                };
                console.log(postdata);
                EventUtils.ajaxReq("/demand/cooperateDemand", "post", postdata, function (resp, status) {
                    console.log(resp);
                    if (resp.data && resp.data.isApply == "0") {
                        swal({
                            title: "",
                            text: "申请已发出！",
                            type: "success"
                        });
                        item.applyStatus = 1;
                    } else {
                        swal({
                            title: "",
                            text: resp.info,
                            type: "error"
                        });
                    }
                });
            }
            if (item.jobFairId) {
                var postdata = {
                    userId: parObj.userId,
                    loginIdentifier: parObj.loginId,
                    jobFairId: item.jobFairId
                };
                EventUtils.ajaxReq("/jobfair/cooperateJobFair", "post", postdata, function (resp, status) {
                    console.log(resp);
                    if (resp.data && resp.data.isApply == "0") {
                        swal({
                            title: "",
                            text: "申请已发出！",
                            type: "success"
                        });
                        item.status = 1;
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
        cancelCollect: function cancelCollect(type, id) {
            if (type == "combi") {
                var postdata = {
                    id: id
                };
                EventUtils.ajaxReq("/demand/delMarkInfo", "post", postdata, function (resp, status) {

                    if (appCont.collect.results.length == 1 && appCont.collect.curpage > 1) {
                        appCont.collect.curpage -= 1;
                    }
                    (0, _jquery2.default)(".collectBox .pagination a.page").eq(appCont.collect.curpage - 1).parent().trigger("click");
                });
            }
            if (type == "jobfair") {
                var postdata = {
                    id: id
                };
                EventUtils.ajaxReq("/jobfair/delMarkInfo", "post", postdata, function (resp, status) {
                    if (appCont.collect.results.length == 1 && appCont.collect.curpage > 1) {
                        appCont.collect.curpage -= 1;
                    }
                    (0, _jquery2.default)(".collectBox .pagination a.page").eq(appCont.collect.curpage - 1).parent().trigger("click");
                });
            }
        },
        modifyMobile: function modifyMobile() {
            appModal.show.mobile = true;
            appModal.showModal = true;
        },
        modifyEmail: function modifyEmail() {
            appModal.show.email = true;
            appModal.showModal = true;
        },
        bindWechat: function bindWechat() {
            appModal.show.wechat = true;
            appModal.showModal = true;
        },
        showCard: function showCard(item) {
            //查看对方名片
            var postdata = {
                userId: item.applyUserId,
                applyId: item.applyId
            };
            if (item.demandId) {
                postdata.applyType = 1;
            }
            if (item.jobFairId) {
                postdata.applyType = 2;
            }
            console.log(postdata);
            EventUtils.ajaxReq("/readcard/getCardInfo", "get", postdata, function (resp, status) {
                console.log(resp);
                appModal.cardInfo.cardtype = "uni";
                appModal.cardInfo.applyId = resp.data.applyId;
                var infosets = resp.data.viewReadCard;
                infosets.userAddress = infosets.userAddress ? infosets.userAddress.split(";").join("") : "不详";
                appModal.cardInfo.infosets = infosets;
                appModal.showModal = true;
                appModal.show.minicard = true;
            });
        },
        wordscal: function wordscal(str) {
            //简介还剩多少字
            return EventUtils.remainWords(1000, str);
        },
        checkCvs: function checkCvs(item) {
            if (item.jobFairId) {
                var link = "HR-center.html?jobfairId=" + item.jobFairId + "&userId=" + parObj.userId + "&loginId=" + parObj.loginId;
            }
            if (item.recruitId) {
                var link = "HR-center.html?recruitId=" + item.recruitId + "&userId=" + parObj.userId + "&loginId=" + parObj.loginId;
            }
            link = EventUtils.securityUrl(link);
            window.location.href = link;
        }
    },
    components: {
        'pagination': pagination
    }
});
var appSider = new Vue({
    el: "#app-side",
    data: {},
    methods: {
        toHR: function toHR() {
            if (parObj.userId) {
                var link = "HR-center.html?userId=" + parObj.userId + "&loginId=" + parObj.loginId;
            }
            link = EventUtils.securityUrl(link);
            window.open(link);
        },
        selnav: function selnav(obj) {
            if ((0, _jquery2.default)(obj).hasClass("sider-li")) {
                (0, _jquery2.default)(".sideBox .sider-li.on").removeClass("on");
                (0, _jquery2.default)(".sideBox .sub-li").hide();
                (0, _jquery2.default)(obj).addClass("on");
                if ((0, _jquery2.default)(obj).children(".sub-li").length > 0) {
                    (0, _jquery2.default)(obj).children(".sub-li").show();
                    (0, _jquery2.default)(obj).find(".sub-item.on").trigger("click");
                }
                if ((0, _jquery2.default)(obj).attr("paneid")) {
                    (0, _jquery2.default)(".content").children().hide();
                    (0, _jquery2.default)(".content").children("." + (0, _jquery2.default)(obj).attr("paneid")).show();
                }
                //需求面板请求结果
                if ((0, _jquery2.default)(obj).attr("paneid") == "requireBox") {
                    demandRequest(appCont.require.demandSrc, 1);
                }
                // 收藏面板请求结果
                if ((0, _jquery2.default)(obj).attr("paneid") == "collectBox") {
                    collectRequest(appCont.collect.collectSrc, 1);
                }
                //校企合作
                if ((0, _jquery2.default)(obj).attr("paneid") == "uni-coop") {
                    coopRequest(appCont.coop.applystatus, 1);
                }
                selectInitPos();
            }
            if ((0, _jquery2.default)(obj).hasClass("sub-item")) {
                (0, _jquery2.default)(obj).siblings(".sub-item.on").removeClass("on");
                (0, _jquery2.default)(obj).addClass("on");
                (0, _jquery2.default)(".content").children().hide();
                (0, _jquery2.default)(".content").children("." + (0, _jquery2.default)(obj).attr("paneid")).show();
                if ((0, _jquery2.default)(obj).attr("paneid") == "combi-msg") {
                    //请求校企合作消息
                    if (appCont.message.combi.state == "发出的邀请") {
                        combiMsgRequest(1, 1);
                    } else {
                        combiMsgRequest(2, 1);
                    }
                }
                if ((0, _jquery2.default)(obj).attr("paneid") == "jobfair-msg") {
                    //请求校企合作消息
                    if (appCont.message.combi.state == "发出的邀请") {
                        jobfairMsgRequest(1, 1);
                    } else {
                        jobfairMsgRequest(2, 1);
                    }
                }
                if ((0, _jquery2.default)(obj).attr("paneid") == "recruit-msg") {
                    recruitMsgRequest(1);
                }
                selectInitPos();
            }
        }
    }
});

var appFooter = new Vue({
    el: "#app-footer",
    data: {
        userId: parObj.userId
    }
});
var appModal = new Vue({
    el: "#app-modal",
    data: {
        account: {
            money: 0,
            userId: parObj.userId,
            freeFreshTimes: 0
        },
        show: {
            stickybox: false,
            freshbox: false,
            minicard: false,
            mobile: false,
            email: false,
            wechat: false,
            preImg: false,
            comment: false,
            trade: false,
            upload: false,
            message: false
        },
        showModal: false,
        preImgUrl: "",
        cardInfo: {
            cardtype: "inc",
            applyId: "",
            infosets: {
                userName: "",
                imgsrc: "",
                userProperty: "",
                userScale: "",
                tel: "",
                email: "",
                address: "",
                userType: "",
                profession: "",
                description: ""
            }
        },
        sticky: {
            stickItem: null
        },
        fresh: {
            freshItem: null
        },
        comment: {
            cooperId: 0,
            text: ""
        },
        checkedTrades: [],
        trades: workareas
        // baseInfo: appPorto.oldInfo,
        // resumeInfo: appCont.resume
    },
    methods: {
        closeMsg: function closeMsg() {
            this.show.message = false;
            this.showModal = false;
        },
        remainText: function remainText(text) {
            return EventUtils.remainWords(400, text);
        },
        checkText: function checkText(type) {
            if (type == "comment") {
                this.comment.text = EventUtils.limitWords(400, this.comment.text);
            }
        },
        confirmComment: function confirmComment() {
            if (this.comment.text == "") {
                swal({
                    title: "",
                    text: "评价内容不能为空！",
                    type: "warning"
                });
                return false;
            }
            var postdata = {
                userId: parObj.userId,
                loginIdentifier: parObj.loginId,
                comment: this.comment.text,
                reportUserId: this.comment.cooperId
            };
            console.log(postdata);
            EventUtils.ajaxReq("/sys/comment", "post", postdata, function (resp, status) {
                appModal.comment.text = "";
                appModal.show.comment = false;
                appModal.showModal = false;
            });
        },
        cancelComment: function cancelComment() {
            this.comment.text = "";
            this.show.comment = false;
            this.showModal = false;
        },
        closeSticky: function closeSticky() {
            this.show.stickybox = false;
            this.showModal = false;
        },
        closeFresh: function closeFresh() {
            this.show.freshbox = false;
            this.showModal = false;
        },
        closeTrade: function closeTrade() {
            this.show.trade = false;
            this.showModal = false;
        },
        checkfunc: function checkfunc(item, target) {
            if (!target.checked) {
                this.checkedTrades.remove(item);
            } else if (this.checkedTrades.length >= 3) {
                target.checked = false;
                return false;
            } else {
                this.checkedTrades.push(item);
            }
        },
        submitTrade: function submitTrade() {
            appCont.resume.trade = (0, _jquery2.default)(".trade-single-table input[type='radio']:checked").val();
            this.show.trade = false;
            this.showModal = false;
        },
        cancelTrade: function cancelTrade() {
            this.show.trade = false;
            this.showModal = false;
        },
        hidemodal: function hidemodal(obj) {
            if ((0, _jquery2.default)(obj).hasClass("modal")) {
                this.showModal = false;
                for (var key in appModal.show) {
                    appModal.show[key] = false;
                }
            }
        },
        closePorto: function closePorto() {
            this.show.upload = false;
            this.showModal = false;
        },
        closeMobile: function closeMobile() {
            EventUtils.ajaxReq("/center/user/getInfo", "get", { userId: parObj.userId }, function (resp, status) {
                appCont.config.bind.mobile = resp.data.mobile;
                appCont.config.bind.email = resp.data.email;
            });
            this.show.mobile = false;
            this.showModal = false;
        },
        closeWechat: function closeWechat() {
            this.show.wechat = false;
            this.showModal = false;
        },
        closeEmail: function closeEmail() {
            EventUtils.ajaxReq("/center/user/getInfo", "get", { userId: parObj.userId }, function (resp, status) {
                appCont.config.bind.mobile = resp.data.mobile;
                appCont.config.bind.email = resp.data.email;
            });
            this.show.email = false;
            this.showModal = false;
        },
        agreeApply: function agreeApply(applyId) {
            var postdata = {
                applyId: applyId,
                result: 1
            };
            EventUtils.ajaxReq("/readcard/disposeDemand", "get", postdata, function (resp, status) {
                combiMsgRequest(2, 1);
                appModal.show.minicard = false;
                appModal.showModal = false;
            });
        },
        denyApply: function denyApply(applyId) {
            var postdata = {
                applyId: applyId,
                result: 2
            };
            EventUtils.ajaxReq("/readcard/disposeDemand", "get", postdata, function (resp, status) {
                combiMsgRequest(2, 1);
                appModal.show.minicard = false;
                appModal.showModal = false;
            });
        }
    },
    watch: {
        "show.message": function showMessage(curval) {
            if (curval) {
                this.$nextTick(function () {
                    EventUtils.absCenter((0, _jquery2.default)("#app-modal .msg-box"));
                });
            } else {
                var postdata = {
                    userId: parObj.userId,
                    index: 1,
                    count: 8
                };
                EventUtils.ajaxReq("/message/getMessageList", "get", postdata, function (resp, status) {
                    if (resp.data && resp.data.count > 0) {
                        (0, _jquery2.default)(".msg-center .msg-info").html(resp.data.count);
                        (0, _jquery2.default)(".msg-center .msg-info").show();
                    } else {
                        (0, _jquery2.default)(".msg-center .msg-info").hide();
                    }
                });
            }
        },
        "show.minicard": function showMinicard(curval) {
            if (curval) {
                EventUtils.absCenter((0, _jquery2.default)(".minicard"));
            }
        },
        "show.preImg": function showPreImg(curval) {
            if (curval) {
                if (curval) {
                    EventUtils.absCenter((0, _jquery2.default)("#app-modal .preview-file"));
                }
            }
        },
        "show.upload": function showUpload(curval) {
            if (curval) {
                this.$nextTick(function () {
                    EventUtils.absCenter((0, _jquery2.default)("#app-modal .porto-upload"));
                });
            }
        },
        'show.trade': function showTrade(curval) {
            if (curval) {
                this.$nextTick(function () {
                    EventUtils.absCenter((0, _jquery2.default)("#app-modal .trade-box"));
                });
            }
        },
        "show.mobile": function showMobile(curval) {
            if (curval) {
                this.$nextTick(function () {
                    EventUtils.absCenter((0, _jquery2.default)("#app-modal .mobile-bind"));
                });
            }
        },
        "show.email": function showEmail(curval) {
            if (curval) {
                this.$nextTick(function () {
                    EventUtils.absCenter((0, _jquery2.default)("#app-modal .email-bind"));
                });
            }
        },
        "show.wechat": function showWechat(curval) {
            if (curval) {
                this.$nextTick(function () {
                    EventUtils.absCenter((0, _jquery2.default)("#app-modal .wechat-bind"));
                });
            }
        },
        "show.comment": function showComment(curval) {
            if (curval) {
                this.$nextTick(function () {
                    EventUtils.absCenter((0, _jquery2.default)("#app-modal .comment-box"));
                });
            }
        },
        "show.stickybox": function showStickybox(curval) {
            if (curval) {
                this.$nextTick(function () {
                    EventUtils.absCenter((0, _jquery2.default)("#app-modal .sticky-box"));
                });
            }
        },
        "show.freshbox": function showFreshbox(curval) {
            if (curval) {
                this.$nextTick(function () {
                    EventUtils.absCenter((0, _jquery2.default)("#app-modal .fresh-box"));
                });
            }
        }
    }
});

infoRequest();

function init_center() {
    //如果有主题跳转信息
    if (parObj.theme) {
        switch (parObj.theme) {
            case "vip":
                (0, _jquery2.default)(".sideBox li[paneid='vip-center']").trigger("click");
                break;
            case "require":
                (0, _jquery2.default)(".sideBox li[paneid='requireBox']").trigger("click");
                break;
            case "combi":
                (0, _jquery2.default)(".sideBox li[paneid='uni-coop']").trigger("click");
                break;
            case "collect":
                (0, _jquery2.default)(".sideBox li[paneid='collectBox']").trigger("click");
                break;
        }
    }
    selectInitInput();
    selectInitPos();
    refreshEventBind();
    uploadEventBind();
}
init_center();

function selectInit() {
    (0, _jquery2.default)(".major-input input").each(function (index) {
        (0, _jquery2.default)(this).width((0, _jquery2.default)(this).width() - 20);
        (0, _jquery2.default)(this).css("padding-right", 20 + "px");
        var bgPos = (0, _jquery2.default)(this).width() + 10 + "px center";
        (0, _jquery2.default)(this).attr("disabled", "true").css("background-position", bgPos);
    });
}

function uploadEventBind() {
    var options = {
        thumbBox: '.thumbBox',
        spinner: '.spinner',
        imgSrc: 'images/avatar.png'
    };
    var cropper = (0, _jquery2.default)('.imgBox').cropbox(options);
    (0, _jquery2.default)('#upload-file').on('change', function () {
        var reader = new FileReader();
        reader.onload = function (e) {
            options.imgSrc = e.target.result;
            cropper = (0, _jquery2.default)('.imgBox').cropbox(options);
        };
        reader.readAsDataURL(this.files[0]);
        this.files = null;
    });
    (0, _jquery2.default)('.zoom-in').on('click', function () {
        cropper.zoomIn();
    });
    (0, _jquery2.default)('.zoom-out').on('click', function () {
        cropper.zoomOut();
    });

    (0, _jquery2.default)('#btnSubmit').on('click', function () {
        var imgsrc = cropper.getDataURL();
        if (imgsrc.length > 500 * 1024) {
            swal({
                title: "",
                text: "请上传小于500K的头像！",
                type: "warning"
            });
            return;
        }
        var postdata = {
            userId: parObj.userId,
            userIcon: imgsrc
        };
        EventUtils.ajaxReq("/center/user/uploadIcon", "post", postdata, function (resp, status) {
            resp.data += "?" + Math.random();
            (0, _jquery2.default)("#avatar-box").html("<img src='" + resp.data + "' />");
        });
        appModal.show.upload = false;
        appModal.showModal = false;
    });
}

function init_safepos(percent) {
    var p_left = Math.floor((0, _jquery2.default)(".safe-range").width() * percent / 100) - 16 + "px";
    (0, _jquery2.default)(".r-pointer").css("left", p_left);
    (0, _jquery2.default)("#safe-progress").css("width", percent + "%");
}

function refreshEventBind() {
    (0, _jquery2.default)(".plan-sticky-table td").click(function () {
        if (!(0, _jquery2.default)(this).hasClass("td-title")) {
            (0, _jquery2.default)(".plan-sticky-table td[name='" + (0, _jquery2.default)(this).attr("name") + "']").removeClass("on");
            (0, _jquery2.default)(this).addClass("on");
            var summe = 0;
            (0, _jquery2.default)(".plan-sticky-table tr").each(function (index) {
                if (index == 1) {
                    summe += (0, _jquery2.default)(this).find("td.on").length * 70;
                } else if (index == 2) {
                    summe += (0, _jquery2.default)(this).find("td.on").length * 50;
                };
            });
            appModal.sticky.sum = summe;
        }
    });
}

//企业需求数据请求
function demandRequest(type, page) {
    appCont.require.curpage = page;
    if (type == 0) {
        // 校企合作
        var postdata = {
            userId: parObj.userId,
            loginIdentifier: parObj.loginId,
            isCenter: 1,
            demandType: 2,
            index: page,
            count: 3
        };
        EventUtils.ajaxReq("/demand/getList", "get", postdata, function (resp, status) {
            if (resp && resp.data) {
                appCont.require.totalpages = resp.data.totalPage;
                appCont.require.results = resp.data.list;
                appCont.require.totalitems = resp.data.totalRow;
            } else {
                appCont.require.totalpages = 1;
                appCont.require.results = [];
                appCont.require.totalitems = 0;
            }
            appCont.require.demandSrc = 0;
        });
    } else if (type == 1) {
        //招聘会
        var postdata = {
            userId: parObj.userId,
            loginIdentifier: parObj.loginId,
            isCenter: 1,
            jobFairType: 2,
            index: page,
            count: 3
        };
        EventUtils.ajaxReq("/jobfair/getList", "get", postdata, function (resp, status) {
            if (resp && resp.data) {
                appCont.require.totalpages = resp.data.totalPage;
                appCont.require.results = resp.data.list;
                appCont.require.totalitems = resp.data.totalRow;
            } else {
                appCont.require.totalpages = 1;
                appCont.require.results = [];
                appCont.require.totalitems = 0;
            }
            appCont.require.demandSrc = 1;
        });
    } else if (type == 2) {
        //企业直聘
        var postdata = {
            userId: parObj.userId,
            loginIdentifier: parObj.loginId,
            isCenter: 1,
            index: page,
            count: 3
        };
        EventUtils.ajaxReq("/recruit/getList", "get", postdata, function (resp, status) {
            console.log(resp);
            if (resp && resp.data) {
                appCont.require.totalpages = resp.data.totalPage;
                appCont.require.results = resp.data.list;
                appCont.require.totalitems = resp.data.totalRow;
            } else {
                appCont.require.totalpages = 1;
                appCont.require.results = [];
                appCont.require.totalitems = 0;
            }
            appCont.require.demandSrc = 2;
        });
    }
}

//企业收藏信息请求
function collectRequest(type, page) {
    appCont.collect.curpage = 1;
    if (type == 0) {
        //校企合作
        var postdata = {
            userId: parObj.userId,
            loginIdentifier: parObj.loginId,
            index: page,
            count: 3
        };
        EventUtils.ajaxReq("/demand/getMarkList", "get", postdata, function (resp, status) {
            console.log(resp);
            if (resp.data) {
                appCont.collect.totalpages = resp.data.totalPage;
                appCont.collect.totalitems = resp.data.totalRow;
                appCont.collect.results = resp.data.list;
            } else {
                appCont.collect.totalpages = 1;
                appCont.collect.results = [];
                appCont.collect.totalitems = 0;
            }
            appCont.collect.collectSrc = 0;
        });
    } else if (type == 1) {
        //招聘会
        var postdata = {
            userId: parObj.userId,
            loginIdentifier: parObj.loginId,
            index: page,
            count: 3
        };
        EventUtils.ajaxReq("/jobfair/getMarkList", "get", postdata, function (resp, status) {
            console.log(resp);
            if (resp.data) {
                appCont.collect.totalpages = resp.data.totalPage;
                appCont.collect.totalitems = resp.data.totalRow;
                appCont.collect.results = resp.data.list;
            } else {
                appCont.collect.totalpages = 1;
                appCont.collect.results = [];
                appCont.collect.totalitems = 0;
            }
            appCont.collect.collectSrc = 1;
        });
    }
}
// 校企合作消息数据请求
function combiMsgRequest(applystatus, page) {
    appCont.message.combi.curpage = page;
    var postdata = {
        userId: parObj.userId,
        applyStatus: applystatus,
        index: page,
        count: 3
    };
    EventUtils.ajaxReq("/demand/getDemandApply", "get", postdata, function (resp, status) {
        console.log(resp);
        if (resp && resp.data) {
            appCont.message.combi.totalitems = resp.data.totalRow;
            appCont.message.combi.totalpages = resp.data.totalPage;
            appCont.message.combi.results = resp.data.list;
        } else {
            appCont.message.combi.results = [];
            appCont.message.combi.totalitems = 0;
            appCont.message.combi.totalpages = 1;
        }
        appCont.message.combi.msgsrc = applystatus;
    });
}
//招聘会消息数据请求
function jobfairMsgRequest(applystatus, page) {
    appCont.message.jobfair.curpage = page;
    var postdata = {
        userId: parObj.userId,
        applyStatus: applystatus,
        index: page,
        count: 3
    };
    EventUtils.ajaxReq("/jobfair/getJobFair", "get", postdata, function (resp, status) {
        console.log(resp);
        if (resp && resp.data) {
            appCont.message.jobfair.totalitems = resp.data.totalRow;
            appCont.message.jobfair.totalpages = resp.data.totalPage;
            appCont.message.jobfair.results = resp.data.list;
        } else {
            appCont.message.jobfair.results = [];
            appCont.message.jobfair.totalitems = 0;
            appCont.message.jobfair.totalpages = 1;
        }
        appCont.message.jobfair.msgsrc = applystatus;
    });
}

//直聘消息数据请求
function recruitMsgRequest(page) {
    appCont.message.recruit.curpage = page;
    var postdata = {
        userId: parObj.userId,
        index: page,
        count: 3
    };
    EventUtils.ajaxReq("/recruit/getReceiveList", "get", postdata, function (resp, status) {
        console.log(resp);
        if (resp && resp.data) {
            appCont.message.recruit.totalitems = resp.data.totalRow;
            appCont.message.recruit.totalpages = resp.data.totalPage;
            appCont.message.recruit.results = resp.data.list;
        } else {
            appCont.message.recruit.results = [];
            appCont.message.recruit.totalpages = 1;
            appCont.message.recruit.totalitems = 0;
        }
    });
}
//校企合作一览
function coopRequest(applyindex, page) {
    appCont.coop.curpage = page;
    var postdata = {
        userId: parObj.userId,
        loginIdentifier: parObj.loginId,
        index: page,
        count: 3,
        applyStatus: applyindex
    };
    console.log(postdata);
    EventUtils.ajaxReq("/demand/getDemandApplyList", "get", postdata, function (resp, status) {
        console.log(resp);
        if (resp && resp.data) {
            appCont.coop.totalitems = resp.data.totalRow;
            appCont.coop.totalpages = resp.data.totalPage;
            appCont.coop.results = resp.data.list;
        } else {
            appCont.coop.results = [];
            appCont.coop.totalitems = 0;
            appCont.coop.totalpages = 1;
        }
        appCont.coop.applystatus = applyindex;
    });
}

/***/ })

},[61]);