webpackJsonp([2],{

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var Vue = __webpack_require__(1);
(function () {
    var templMajor = '<div style="position:relative" class="pop-major-box">\
          <span @click.stop="pop(1,$event.target)" class="major-input major-input-1"><span class="input-frame"></span><input type="text" placeholder="一级专业" readonly v-model="selMajor" ></span>\
          <span @click.stop="pop(2,$event.target)" class="major-input major-input-2"><span class="input-frame"></span><input type="text" placeholder="二级专业" readonly v-model="selSubMajor"></span>\
          <input type="text" class="ex-major" placeholder="请输入专业名称" v-model="exMajor" v-show="showExMajor"/>\
          <div class="pop-major-1 pop-major" v-show="showMajor1">\
               <h3 class="pop-major-title">专业名称<i class="pic-wrapper major-closer" @click=closePop><span class="pic-icon icon-close"></span></i></h3>\
               <div class="major-table-box pop-box">\
                    <table>\
                         <tr v-for="tr in major.trs">\
                              <td @click="clickMajor($event.target)">{{major.dataArray[tr*4]}}</td>\
                              <td @click="clickMajor($event.target)">{{major.dataArray[tr*4+1]}}</td>\
                              <td @click="clickMajor($event.target)">{{major.dataArray[tr*4+2]}}</td>\
                              <td @click="clickMajor($event.target)">{{major.dataArray[tr*4+3]}}</td>\
                         </tr>\
                    </table>\
               </div>\
          </div>\
          <div class="pop-major-2 pop-major" v-show="showMajor2">\
               <h3 class="pop-major-title">专业名称<i class="pic-wrapper major-closer" @click=closePop><span class="pic-icon icon-close"></span></i></h3>\
               <div class="major-table-box pop-box">\
                    <table>\
                         <tr v-for="tr in submajor.trs">\
                              <td @click="clickSubMajor($event.target)">{{submajor.dataArray[tr*3]}}</td>\
                              <td @click="clickSubMajor($event.target)">{{submajor.dataArray[tr*3+1]}}</td>\
                              <td @click="clickSubMajor($event.target)">{{submajor.dataArray[tr*3+2]}}</td>\
                         </tr>\
                    </table>\
               </div>\
          </div>\
     </div>';
    Vue.component("major-pop", {
        template: templMajor,
        props: ["majordata", "initmajors"],
        data: function data() {
            var major = {
                trs: [],
                dataArray: []
            };
            var submajor = {
                trs: [],
                dataArray: []
            };

            for (var i = 0; i < this.majordata.length; i++) {
                major.dataArray.push(this.majordata[i].major);
                if (i % 4 == 0) {
                    major.trs.push(Math.floor(i / 4));
                }
            };
            submajor.dataArray = this.majordata[0].submajor;
            for (var j = 0; j < submajor.dataArray.length; j++) {
                if (j % 3 == 0) {
                    submajor.trs.push(Math.floor(j / 3));
                }
            }
            var dataBase = {
                showMajor1: false,
                showMajor2: false,
                showExMajor: false,
                major: major,
                submajor: submajor,
                selMajor: "",
                selSubMajor: "",
                exMajor: ""
            };
            return dataBase;
        },
        methods: {
            pop: function pop(index, obj) {
                $(".pop-major").hide();
                $(obj).parent().siblings(".pop-major-" + index).show();
                initPos();
            },
            clickMajor: function clickMajor(obj) {
                this.selMajor = $(obj).html();
                $(".pop-major").hide();
            },
            clickSubMajor: function clickSubMajor(obj) {
                this.selSubMajor = $(obj).html();
                $(".pop-major").hide();
            },
            closePop: function closePop() {
                $(".pop-major").hide();
            }
        },
        mounted: function mounted() {
            initPop();
            if (this.initmajors) {
                this.selMajor = this.initmajors.major;
            }
        },
        watch: {
            "initmajors": function initmajors(curval) {
                if (curval && curval.major) {
                    this.selMajor = curval.major;
                }
            },
            "selMajor": function selMajor(curval) {
                for (var i = 0; i < this.majordata.length; i++) {
                    if (this.majordata[i].major == curval) {
                        this.submajor.dataArray = this.majordata[i].submajor;
                        this.selSubMajor = this.submajor.dataArray[0];
                        this.submajor.trs = [];
                        for (var j = 0; j < this.submajor.dataArray.length; j++) {
                            if (j % 3 == 0) {
                                this.submajor.trs.push(Math.floor(j / 3));
                            }
                        }
                        break;
                    }
                }
            },
            "selSubMajor": function selSubMajor(curval) {
                if (curval == "其他") {
                    this.showExMajor = true;
                } else {
                    this.showExMajor = false;
                }
            }
        }
    });

    function initPos() {
        $(".pop-major-1:visible").each(function () {
            if (!this.initFlag) {
                $(this).css({
                    "left": 0,
                    "top": $(this).siblings(".major-input-1").height() - 2 + "px"
                });
                this.initFlag = true;
            }
        });

        $(".pop-major-2:visible").each(function () {
            if (!this.initFlag) {
                $(this).css({
                    "left": $(this).siblings(".major-input-2").offset().left - $(this).parent(".pop-major-box").offset().left + "px",
                    "top": $(this).siblings(".major-input-2").height() - 2 + "px"
                });
                this.initFlag = true;
            }
        });
    }

    function initPop() {
        $(".pop-major-box .major-input input").each(function () {
            if (!this.initFlag) {
                $(this).width($(this).width() - 20);
                $(this).css("padding-right", 20 + "px");
                var bgPos = $(this).width() + 10 + "px center";
                $(this).css("background-position", bgPos);
                this.initFlag = true;
            }
        });
    }
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

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
                $.ajax({
                    url: "http://www.xiaoqiztc.com/easily_xq_WebApi/sys/img",
                    type: "get",
                    async: false,
                    data: {},
                    success: function success(resp, status) {
                        $(".conf-psw-varifycode img")[0].src = "http://www.xiaoqiztc.com/easily_xq_WebApi/sys/img?" + Math.random();
                    },
                    error: function error(data, status) {
                        swal({
                            title: "",
                            text: "请求服务器数据错误，请稍后重试！",
                            type: "warning"
                        });
                    },
                    timeout: 100000
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

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vue = __webpack_require__(1);
(function () {
    var dateTempl = '<div style="display:inline-block;">\
        <dropdown :options="startyears" class="sel-startyear" v-model="date.startyear" placeholder="开始年份"></dropdown>\
        <dropdown :options="startmonths" class="sel-startmonth" v-model="date.startmonth" placeholder="开始月份"></dropdown><i class="bind-line"></i>\
        <dropdown :options="database.endyears" class="sel-endyear" v-model="date.endyear" classes="endyear" placeholder="结束年份"></dropdown>\
        <dropdown :options="database.endmonths" class="sel-endmonth" v-model="date.endmonth" placeholder="结束月份"></dropdown>\
    </div>';

    Vue.component("date-select", {
        template: dateTempl,
        props: ['startyears', 'startmonths', 'initdate'],
        data: function data() {
            return {
                database: {
                    endyears: [],
                    endmonths: []
                },
                date: {
                    startyear: "",
                    startmonth: "",
                    endyear: "",
                    endmonth: ""
                }
            };
        },
        watch: {
            "date.startyear": function dateStartyear(curval) {
                var years = [];
                for (var i = parseInt(this.startyears[0]); i >= parseInt(curval); i--) {
                    years.push(i);
                }
                this.database.endyears = years;
                if (this.date.endyear < curval) {
                    this.date.endyear = curval;
                }
                if (this.date.endyear != curval) {
                    //改变月份的下拉选项
                    this.database.endmonths = this.startmonths;
                } else {
                    var months = [];
                    for (var j = parseInt(this.date.startmonth); j <= 12; j++) {
                        if (j < 10) {
                            j = "0" + j;
                        };
                        months.push(j);
                    };
                    this.database.endmonths = months;
                    if (parseInt(this.date.endmonth) < parseInt(this.date.startmonth)) {
                        this.date.endmonth = this.date.startmonth;
                    }
                }
            },
            "date.endyear": function dateEndyear(curval) {
                if (this.date.startyear != curval) {
                    //改变月份的下拉选项
                    this.database.endmonths = this.startmonths;
                } else {
                    var months = [];
                    for (var j = parseInt(this.date.startmonth); j <= 12; j++) {
                        if (j < 10) {
                            j = "0" + j;
                        };
                        months.push(j);
                    };
                    this.database.endmonths = months;
                    if (parseInt(this.date.endmonth) < parseInt(this.date.startmonth)) {
                        this.date.endmonth = this.date.startmonth;
                    }
                }
            },
            "date.startmonth": function dateStartmonth(curval) {
                if (this.date.startyear == this.date.endyear) {
                    var months = [];
                    for (var j = parseInt(curval); j <= 12; j++) {
                        if (j < 10) {
                            j = "0" + j;
                        };
                        months.push(j);
                    };
                    this.database.endmonths = months;
                    if (parseInt(this.date.endmonth) < parseInt(this.date.startmonth)) {
                        this.date.endmonth = this.date.startmonth;
                    }
                } else {
                    this.database.endmonths = this.startmonths;
                };
            },
            "initdate": function initdate(_initdate) {
                if (_initdate) {
                    this.date.startyear = _initdate.startyear;
                    this.date.startmonth = _initdate.startmonth;
                    this.date.endyear = _initdate.endyear;
                    this.date.endmonth = _initdate.endmonth;
                }
            }
        },
        mounted: function mounted() {
            this.database.endyears = this.startyears;
            this.database.endmonths = this.startmonths;
            if (this.initdate) {
                this.date.startyear = this.initdate.startyear;
                this.date.startmonth = this.initdate.startmonth;
                this.date.endyear = this.initdate.endyear;
                this.date.endmonth = this.initdate.endmonth;
            }
        }
    });
})();

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var Vue = __webpack_require__(1);
(function () {
    var templpos = '<div class="pos-pop-box W770">\
          <h3 class="LH-H36 bg-gray-e6 fSize14 paLeft30">选择职能<i class="pic-wrapper pos-closer fr maR30" @click.stop="cancel"><i class="pic-icon icon-close"></i></i></h3>\
          <div class="H330">\
               <div class="LH40 paLeft30">\
                    <label class="color-gray6">最多可以选择3项</label>\
                    <ul class="lis-inline selectItems disInline v-mid maL15">\
                         <li v-for="item in selectedItems">{{item}}<img src="images/icon-close-1.png" @click.stop="delItem(item)"/></li>\
                    </ul>\
               </div>\
               <ul class="pos-navs lis-inline LH28 paLeft30 maT8">\
                    <li class="on" @click.stop="clickNav(1)">全部职能<span class="pic-icon icon-arrow-down"></span><i class="blank-bot"></i></li>\
                    <li v-show="posCont.cont2||posCont.cont3" @click.stop="clickNav(2)">{{selpos.pos1}}<span class="pic-icon icon-arrow-down"></span><i class="blank-bot"></i></li>\
                    <li v-show="posCont.cont3">{{selpos.pos2}}<span class="pic-icon icon-arrow-down"></span><i class="blank-bot"></i></li>\
               </ul>\
               <ul class="pos-nav-cont lis-inline" v-show="posCont.cont1">\
                    <li v-for="item in posArray1"><span @click.stop="clickPos(1,item)">{{item}}</span></li>\
               </ul>\
               <ul class="pos-nav-cont lis-inline" v-show="posCont.cont2">\
                    <li v-for="item in posArray2"><span @click.stop="clickPos(2,item)">{{item}}</span></li>\
               </ul>\
               <ul class="pos-nav-cont lis-inline" v-show="posCont.cont3">\
                    <li v-for="item in posArray3"><span @click.stop="clickPos(3,item)">{{item}}</span></li>\
               </ul>\
          </div>\
          <div class="LH-H58 pos-pop-bot bg-gray-e6 t-center">\
               <button @click.stop="confirm">确定</button><button @click.stop="cancel">取消</button>\
          </div>\
     </div>';

    Vue.component("pop-position", {
        template: templpos,
        props: ["posdata"],
        data: function data() {
            var posArray1 = [];
            for (var i = 0; i < this.posdata.length; i++) {
                posArray1.push(this.posdata[i].name);
            };
            var database = {
                posCont: {
                    cont1: true,
                    cont2: false,
                    cont3: false
                },
                selpos: {
                    pos1: "",
                    pos2: "",
                    pos3: ""
                },
                posArray1: posArray1,
                posArray2: [],
                posArray3: [],
                subArray: [],
                selectedItems: []
            };
            return database;
        },
        methods: {
            clickPos: function clickPos(level, item) {
                if (level == 1) {
                    if (item == "不限") {
                        if (this.selectedItems.length < 3) {
                            this.selectedItems = ["全部职能"];
                        }
                        return;
                    }
                    for (var i = 0; i < this.posdata.length; i++) {
                        if (this.posdata[i].name == item) {
                            this.subArray = this.posdata[i].subpos;
                            break;
                        }
                    };
                    this.posArray2 = [];
                    for (var j = 0; j < this.subArray.length; j++) {
                        this.posArray2.push(this.subArray[j].name);
                    };
                    this.selpos.pos1 = item;
                    this.posCont.cont1 = false;
                    this.posCont.cont2 = true;
                    $(".pos-navs .on").removeClass("on");
                    $(".pos-navs li:nth-child(2)").addClass("on");
                } else if (level == 2) {
                    if (item == "不限") {
                        if (this.selectedItems.length < 3) {
                            if (this.selectedItems.indexOf(this.selpos.pos1) < 0) {
                                this.selectedItems.push(this.selpos.pos1);
                            }
                        }
                        return;
                    }
                    for (var i = 0; i < this.subArray.length; i++) {
                        if (this.subArray[i].name == item) {
                            this.posArray3 = this.subArray[i].subpos;
                            break;
                        }
                    }
                    $(".pos-navs .on").removeClass("on");
                    $(".pos-navs li:nth-child(3)").addClass("on");
                    this.selpos.pos2 = item;
                    this.posCont.cont2 = false;
                    this.posCont.cont3 = true;
                } else if (level == 3) {
                    if (this.selectedItems.length < 3) {
                        if (item == "不限") {
                            if (this.selectedItems.indexOf(this.selpos.pos2) < 0) {
                                this.selectedItems.push(this.selpos.pos2);
                            }
                        } else {
                            if (this.selectedItems.indexOf(item) < 0) {
                                this.selectedItems.push(item);
                            }
                        }
                    }
                }
            },
            delItem: function delItem(item) {
                this.selectedItems.remove(item);
            },
            clickNav: function clickNav(num) {
                if (num == 1) {
                    $(".pos-navs .on").removeClass("on");
                    $(".pos-navs li:nth-child(1)").addClass("on");
                    this.posCont.cont2 = false;
                    this.posCont.cont3 = false;
                    this.posCont.cont1 = true;
                } else if (num == 2) {
                    $(".pos-navs .on").removeClass("on");
                    $(".pos-navs li:nth-child(2)").addClass("on");
                    this.posCont.cont1 = false;
                    this.posCont.cont3 = false;
                    this.posCont.cont2 = true;
                }
            },
            confirm: function confirm() {
                this.$emit("confirm", this.selectedItems);
            },
            cancel: function cancel() {
                this.$emit("cancel");
            }
        }
    });
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vue = __webpack_require__(1); /**
                                   * Created by xuanyuan on 2016/11/27.
                                   */

__webpack_require__(4);
__webpack_require__(2);
__webpack_require__(20);
__webpack_require__(6);
__webpack_require__(8);
__webpack_require__(19);
__webpack_require__(32);
__webpack_require__(33);
__webpack_require__(22);
__webpack_require__(21);
__webpack_require__(18);
__webpack_require__(9);
__webpack_require__(23);
__webpack_require__(10);
__webpack_require__(17);
__webpack_require__(12);
__webpack_require__(13);
__webpack_require__(11);
__webpack_require__(3);
__webpack_require__(5);
__webpack_require__(7);
__webpack_require__(41);
var objMe = undefined;
var parObj = EventUtils.urlExtrac(window.location);
var respObj = {}; //请求的本页面的数据集合

function infoRequest() {
    var postdata = {
        userId: parObj.userId || localStorage.userId,
        loginIdentifier: parObj.loginId || localStorage.loginId
    };
    EventUtils.ajaxReq("/user/user/getInfo", "get", postdata, function (resp, status) {
        respObj = resp.data;
        console.log(respObj);
        var briefdata = {
            name: respObj.userInfo.realName,
            gender: respObj.userInfo.sex == "1" ? "男" : "女",
            birthyear: respObj.userInfo.birthday ? respObj.userInfo.birthday.split("-")[0] : "",
            birthmonth: respObj.userInfo.birthday ? respObj.userInfo.birthday.split("-")[1] : "",
            birthday: respObj.userInfo.birthday ? respObj.userInfo.birthday.split("-")[2] : "",
            address: {
                province: respObj.userInfo.province,
                city: respObj.userInfo.city,
                district: respObj.userInfo.area
            },
            phone: respObj.userInfo.mobile,
            state: respObj.userInfo.liveStatus
        };
        appModal.baseInfo = appPorto.briefInfo = briefdata;
        if (!respObj.userInfo.cvStatus || respObj.userInfo.cvStatus == "0") {
            //首次编辑页面信息
            appCont.resume.firstEdit = true;
            (0, _jquery2.default)(".view").hide();
            (0, _jquery2.default)(".edit").show();
        } else {
            //已注册用户进入页面请求简历信息
            appCont.resume.firstEdit = false;
            if (respObj.userInfo.userIcon) {
                (0, _jquery2.default)("#avatar-box").html("<img src='" + respObj.userInfo.userIcon + "' />");
                (0, _jquery2.default)(".porto-img").html("<img src='" + respObj.userInfo.userIcon + "' />");
            }
            var familyStatus = "";
            switch (respObj.userInfo.marryStatus) {
                case "0":
                    familyStatus = "未婚";
                    break;
                case "1":
                    familyStatus = "已婚";
                    break;
                case "2":
                    familyStatus = "离异";
                    break;
            }
            var worksExps = [];
            for (var i = 0; i < respObj.companyList.length; i++) {
                var initdate = {
                    startyear: respObj.companyList[i].startTime ? respObj.companyList[i].startTime.split("-")[0] : "",
                    startmonth: respObj.companyList[i].startTime ? respObj.companyList[i].startTime.split("-")[1] : "",
                    endyear: respObj.companyList[i].endTime ? respObj.companyList[i].endTime.split("-")[0] : "",
                    endmonth: respObj.companyList[i].endTime ? respObj.companyList[i].endTime.split("-")[1] : ""
                };
                var workexp = {
                    show: i == 0,
                    cvCpyId: respObj.companyList[i].cvCpyId,
                    firma: respObj.companyList[i].companyName,
                    trade: respObj.companyList[i].companyType,
                    pos: respObj.companyList[i].position,
                    province: respObj.companyList[i].workAddress ? respObj.companyList[i].workAddress.split(";")[0] : "",
                    city: respObj.companyList[i].workAddress ? respObj.companyList[i].workAddress.split(";")[1] : "",
                    district: respObj.companyList[i].workAddress ? respObj.companyList[i].workAddress.split(";")[2] : "",
                    salary: respObj.companyList[i].salary,
                    initdate: initdate,
                    resp: respObj.companyList[i].content
                };
                worksExps.push(workexp);
            }
            if (worksExps.length == 0) {
                //防止刚开始没有数据
                var worksItem = {
                    show: true,
                    firma: "",
                    trade: "",
                    pos: "",
                    province: "",
                    city: "",
                    district: "",
                    salary: "",
                    startyear: "",
                    startmonth: "",
                    endyear: "",
                    endmonth: "",
                    resp: ""
                };
                worksExps.push(worksItem);
            }
            var edus = [];
            for (var j = 0; j < respObj.eduList.length; j++) {
                var initdate = {
                    startyear: respObj.eduList[j].startTime ? respObj.eduList[j].startTime.split("-")[0] : "",
                    startmonth: respObj.eduList[j].startTime ? respObj.eduList[j].startTime.split("-")[1] : "",
                    endyear: respObj.eduList[j].endTime ? respObj.eduList[j].endTime.split("-")[0] : "",
                    endmonth: respObj.eduList[j].endTime ? respObj.eduList[j].endTime.split("-")[1] : ""
                };
                var edu = {
                    show: j == 0,
                    cvEduId: respObj.eduList[j].cvEduId,
                    uni: respObj.eduList[j].schoolName,
                    major: respObj.eduList[j].professional ? respObj.eduList[j].professional.split(";")[0] : "",
                    submajor: respObj.eduList[j].professional ? respObj.eduList[j].professional.split(";")[1] : "",
                    exmajor: respObj.eduList[j].professional ? respObj.eduList[j].professional.split(";")[2] : "",
                    initdate: initdate,
                    qualification: respObj.eduList[j].qualification
                };
                edus.push(edu);
            }
            if (edus.length == 0) {
                //防止刚开始没有数据
                var eduItem = {
                    show: true,
                    uni: "",
                    major: "",
                    submajor: "",
                    exmajor: "",
                    startyear: "",
                    startmonth: "",
                    endyear: "",
                    endmonth: "",
                    qualification: ""
                };
                edus.push(eduItem);
            }
            var projects = [];
            for (var k = 0; k < respObj.projectList.length; k++) {
                var initdate = {
                    startyear: respObj.projectList[k].startTime ? respObj.projectList[k].startTime.split("-")[0] : "",
                    startmonth: respObj.projectList[k].startTime ? respObj.projectList[k].startTime.split("-")[1] : "",
                    endyear: respObj.projectList[k].endTime ? respObj.projectList[k].endTime.split("-")[0] : "",
                    endmonth: respObj.projectList[k].endTime ? respObj.projectList[k].endTime.split("-")[1] : ""
                };
                var project = {
                    show: k == 0,
                    cvProId: respObj.projectList[k].cvProId,
                    name: respObj.projectList[k].projectName,
                    firma: respObj.projectList[k].companyName,
                    initdate: initdate,
                    desc: respObj.projectList[k].description,
                    resp: respObj.projectList[k].position,
                    achiev: respObj.projectList[k].achievement
                };
                projects.push(project);
            }
            if (projects.length == 0) {
                //防止刚开始没有数据
                var proItem = {
                    show: true,
                    name: "",
                    firma: "",
                    startyear: "",
                    startmonth: "",
                    endyear: "",
                    endmonth: "",
                    desc: "",
                    resp: "",
                    achiev: ""
                };
                projects.push(proItem);
            }
            var cvInfo = {
                firstEdit: false,
                realName: respObj.userInfo.realName,
                family: familyStatus,
                phone: respObj.userInfo.mobile,
                email: respObj.userInfo.email,
                nativePlace: respObj.userInfo.nativePlace,
                nation: respObj.userInfo.nation,
                curWorksIndex: 1,
                expect: {
                    tradeItems: respObj.cvInfo.expJob,
                    posItems: respObj.cvInfo.expJobFunction,
                    province: respObj.cvInfo.expPlace ? respObj.cvInfo.expPlace.split(";")[0] : "",
                    city: respObj.cvInfo.expPlace ? respObj.cvInfo.expPlace.split(";")[1] : "",
                    district: respObj.cvInfo.expPlace ? respObj.cvInfo.expPlace.split(";")[2] : "",
                    salary: respObj.cvInfo.expSalary
                },
                worksExps: worksExps,
                edus: edus,
                projects: projects,
                laSkills: respObj.cvInfo.languages,
                selfEval: respObj.cvInfo.evaluation,
                psInfo: respObj.cvInfo.anymore,
                skills: respObj.cvInfo.speciality
            };
            //计算简历完成度
            resumePercentCalculate(cvInfo);
            appModal.resumeInfo = appCont.resume = cvInfo;
            (0, _jquery2.default)(".edit").hide();
            (0, _jquery2.default)(".view").show();
        }
    });

    //获取用户平台信息
    EventUtils.ajaxReq("/center/user/getInfo", "get", { userId: parObj.userId }, function (resp, status) {
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
            safeLevel: percent + "%",
            userId: parObj.userId,
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
        homeLink: "index.html?" + window.btoa("userId=" + (parObj.userId || localStorage.userId))
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
        database: {
            date: xqdatabase.date,
            addrData: addArray
        },
        viewInfo: true,
        briefInfo: {
            gender: "",
            birthyear: "",
            birthmonth: "",
            birthday: "",
            address: {
                province: "",
                city: "",
                district: ""
            },
            phone: "",
            state: ""
        },
        resumePercent: 0,
        cloneInfo: {},
        initAddress: {
            province: "",
            city: "",
            district: ""
        }
    },
    methods: {
        save: function save() {
            this.briefInfo.address.province = (0, _jquery2.default)("#app-porto .address .sel-province input").val();
            this.briefInfo.address.city = (0, _jquery2.default)("#app-porto .address .sel-city input").val();
            this.briefInfo.address.district = (0, _jquery2.default)("#app-porto .address .sel-district input").val();
            var postdata = {
                id: respObj.userInfo.id,
                userId: parObj.userId,
                loginIdentifier: parObj.loginId,
                sex: this.briefInfo.gender == "男" ? 1 : 2,
                birthday: this.briefInfo.birthyear + "-" + this.briefInfo.birthmonth + "-" + this.briefInfo.birthday,
                liveStatus: this.briefInfo.state,
                province: this.briefInfo.address.province,
                city: this.briefInfo.address.city,
                area: this.briefInfo.address.district
            };
            console.log(postdata);
            EventUtils.ajaxReq('/user/user/modifyInfo', 'post', postdata, function (resp, status) {
                appPorto.viewInfo = true;
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
        },
        age: function age(birthyear) {
            var date = new Date();
            return date.getFullYear() - birthyear;
        },
        showPre: function showPre() {
            if (appCont.resume.firstEdit) {
                //如果是首次编辑预览简历要进行一定的处理
                //期望工作地点              
                appCont.resume.expect.province = (0, _jquery2.default)("#exp-address .sel-province input").val();
                appCont.resume.expect.city = (0, _jquery2.default)("#exp-address .sel-city input").val();
                appCont.resume.expect.district = (0, _jquery2.default)("#exp-address .sel-district input").val();
                //工作经历地址
                var worksArray = (0, _jquery2.default)(".work-address");
                var worksDate = (0, _jquery2.default)(".worksexp-date");
                for (var i = 0; i < appCont.resume.worksExps.length; i++) {
                    appCont.resume.worksExps[i].province = worksArray.eq(i).find(".sel-province input").val();
                    appCont.resume.worksExps[i].city = worksArray.eq(i).find(".sel-city input").val();
                    appCont.resume.worksExps[i].district = worksArray.eq(i).find(".sel-district input").val();
                    appCont.resume.worksExps[i].initdate = {
                        startyear: worksDate.eq(i).find(".sel-startyear input").val(),
                        startmonth: worksDate.eq(i).find(".sel-startmonth input").val(),
                        endyear: worksDate.eq(i).find(".sel-endyear input").val(),
                        endmonth: worksDate.eq(i).find(".sel-endmonth input").val()
                    };
                };
                //专业名称
                var majorArray = (0, _jquery2.default)(".major-name");
                var edusDate = (0, _jquery2.default)(".edus-date");
                for (var j = 0; j < appCont.resume.edus.length; j++) {
                    appCont.resume.edus[j].major = majorArray.eq(j).find(".major-input-1 input").val();
                    appCont.resume.edus[j].submajor = majorArray.eq(j).find(".major-input-2 input").val();
                    appCont.resume.edus[j].exmajor = majorArray.eq(j).find(".ex-major").val();
                    appCont.resume.edus[j].initdate = {
                        startyear: edusDate.eq(j).find(".sel-startyear input").val(),
                        startmonth: edusDate.eq(j).find(".sel-startmonth input").val(),
                        endyear: edusDate.eq(j).find(".sel-endyear input").val(),
                        endmonth: edusDate.eq(j).find(".sel-endmonth input").val()
                    };
                }
                //项目预处理
                var proDate = (0, _jquery2.default)(".projects-date");
                for (var k = 0; k < appCont.resume.projects.length; k++) {
                    appCont.resume.projects[k].initdate = {
                        startyear: proDate.eq(k).find(".sel-startyear input").val(),
                        startmonth: proDate.eq(k).find(".sel-startmonth input").val(),
                        endyear: proDate.eq(k).find(".sel-endyear input").val(),
                        endmonth: proDate.eq(k).find(".sel-endmonth input").val()
                    };
                }
                //语言选项
                var skillArray = [];
                (0, _jquery2.default)(".language-skills input[type='checkbox']").each(function () {
                    if (this.checked) {
                        skillArray.push(this.value);
                    }
                });
                appCont.resume.laSkills = skillArray;
            }
            appModal.showModal = true;
            appModal.show.preview = true;
        },
        uploading: function uploading() {
            appModal.showModal = true;
            appModal.show.upload = true;
        }
    }
});

var provinceArray = [];
for (var i = 0; i < addArray.length; i++) {
    provinceArray.push(addArray[i].name);
}

var appSider = new Vue({
    el: "#app-side",
    data: {},
    methods: {
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
                //我的求职数据请求
                if ((0, _jquery2.default)(obj).attr("paneid") == "jobBox") {
                    posRequest(appCont.myPosList.jobsrc, appCont.myPosList.jobstate, 1);
                }
                selectInitPos();
            }
            if ((0, _jquery2.default)(obj).hasClass("sub-item")) {
                (0, _jquery2.default)(obj).siblings(".sub-item.on").removeClass("on");
                (0, _jquery2.default)(obj).addClass("on");
                (0, _jquery2.default)(".content").children().hide();
                (0, _jquery2.default)(".content").children("." + (0, _jquery2.default)(obj).attr("paneid")).show();
                //我的收藏数据请求
                if ((0, _jquery2.default)(obj).attr("paneid") == "collec-job") {
                    colposRequest(appCont.colPosList.applyindex, 1);
                }
                if ((0, _jquery2.default)(obj).attr("paneid") == "collec-recruitment") {
                    colrecRequest(appCont.colRecList.applyindex, 1);
                }
                selectInitPos();
            }
        }
    }
});
var appCont = new Vue({
    el: "#app-content",
    data: {
        database: {
            date: xqdatabase.date,
            address: {
                province: provinceArray,
                city: ["", ""],
                district: ["", ""]
            },
            addrData: addArray,
            nations: xqdatabase.nations,
            salary: xqdatabase.salary,
            major: majorArray,
            qualification: xqdatabase.scolarship,
            posData: posArray,
            languages: ["英语", "法语", "日语", "韩语", "德语", "俄语", "西班牙语", "葡萄牙语", "阿拉伯语", "其他"]
        },
        resume: {
            firstEdit: true,
            realName: "",
            family: "",
            phone: "",
            email: "",
            nativePlace: "",
            nation: "",
            curWorksIndex: 1,
            expect: {
                tradeItems: "",
                posItems: "",
                province: "",
                city: "",
                district: "",
                salary: ""
            },
            worksExps: [{
                show: true,
                firma: "",
                trade: "",
                pos: "",
                province: "",
                city: "",
                district: "",
                salary: "",
                initdate: "",
                resp: ""
            }],
            edus: [{
                show: true,
                uni: "",
                major: "",
                submajor: "",
                exmajor: "",
                initdate: "",
                qualification: ""
            }],
            projects: [{
                show: true,
                name: "",
                firma: "",
                initdate: "",
                desc: "",
                resp: "",
                achiev: ""
            }],
            laSkills: [],
            selfEval: "",
            psInfo: "",
            skills: ""
        },
        courses: {
            curpage: 1,
            results: [{ name: "课程名称", score: "4.5分", Institute: "开课学院名称", content: "web前端", duration: "学习周期", fee: "学习费用", addr: "学习地点", state: "已开课", comment: "教师评语" }, { name: "课程名称", score: "4.5分", Institute: "开课学院名称", content: "web前端", duration: "学习周期", fee: "学习费用", addr: "学习地点", state: "课程结束", comment: "教师评语" }, { name: "课程名称", score: "4.5分", Institute: "开课学院名称", content: "web前端", duration: "学习周期", fee: "学习费用", addr: "学习地点", state: "未开课", comment: "教师评语" }, { name: "课程名称", score: "4.5分", Institute: "开课学院名称", content: "web前端", duration: "学习周期", fee: "学习费用", addr: "学习地点", state: "已开课", comment: "教师评语" }, { name: "课程名称", score: "4.5分", Institute: "开课学院名称", content: "web前端", duration: "学习周期", fee: "学习费用", addr: "学习地点", state: "已开课", comment: "教师评语" }, { name: "课程名称", score: "4.5分", Institute: "开课学院名称", content: "web前端", duration: "学习周期", fee: "学习费用", addr: "学习地点", state: "已开课", comment: "教师评语" }, { name: "课程名称", score: "4.5分", Institute: "开课学院名称", content: "web前端", duration: "学习周期", fee: "学习费用", addr: "学习地点", state: "已开课", comment: "教师评语" }]
        },
        colStuList: {
            curpage: 1,
            results: [{ name: "课程名称", score: "4.5分", Institute: "开课学院名称", content: "web前端", duration: "学习周期", fee: "学习费用", addr: "学习地点", InScale: 5000 }, { name: "课程名称", score: "4.5分", Institute: "开课学院名称", content: "web前端", duration: "学习周期", fee: "学习费用", addr: "杭州-滨江", InScale: 5000 }, { name: "课程名称", score: "4.5分", Institute: "开课学院名称", content: "web前端", duration: "学习周期", fee: "学习费用", addr: "学习地点", InScale: 5000 }, { name: "课程名称", score: "4.5分", Institute: "开课学院名称", content: "web前端", duration: "学习周期", fee: "学习费用", addr: "学习地点", InScale: 5000 }, { name: "课程名称", score: "4.5分", Institute: "开课学院名称", content: "web前端", duration: "学习周期", fee: "学习费用", addr: "学习地点", InScale: 5000 }, { name: "课程名称", score: "4.5分", Institute: "开课学院名称", content: "web前端", duration: "学习周期", fee: "学习费用", addr: "学习地点", InScale: 5000 }]
        },
        colPosList: {
            curpage: 1,
            totalpages: 1,
            totalitems: 0,
            states: ['全部状态', '未投递', '已投递', '已下线'],
            curstate: "全部状态",
            applyindex: 0,
            results: []
        },
        colRecList: {
            curpage: 1,
            totalpages: 1,
            totalitems: 0,
            states: ['全部状态', '未投递', '已投递', '已下线'],
            curstate: "全部状态",
            applyindex: 0,
            results: []
        },
        myPosList: {
            curpage: 1,
            jobsrc: 1,
            jobstate: 1,
            totalpages: 1,
            totalitems: 0,
            states: ['全部状态', '未查看', '已查看', '已反馈'],
            curstate: "全部状态",
            types: ['招聘会', '企业直聘'],
            curtype: "招聘会",
            results: []
        },
        config: {
            loginName: "",
            userId: parObj.userId,
            safeLevel: "80%",
            bind: { mobile: "", email: "" }
        }
    },
    methods: {
        posLink: function posLink(item) {
            if (item.jobFairId) {
                return "detail-increcruit.html?" + window.btoa("userId=" + parObj.userId + "&jobfairId=" + item.jobFairId);
            }
            if (item.recruitId) {
                return "detail-position.html?" + window.btoa("userId=" + parObj.userId + "&recruitId=" + item.recruitId);
            }
        },
        infoExtrac: function infoExtrac(item) {
            if (item) {
                return EventUtils.infoExtrac(item);
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
        remainText: function remainText(text, type) {
            var wordslimit = 1000;
            switch (type) {
                case "selfeval":
                    wordslimit = 200;
                    break;
                case "psinfo":
                    wordslimit = 200;
                    break;
                case "skill":
                    wordslimit = 100;
                    break;
                default:
                    wordslimit = 1000;
            }
            if (!text) {
                return wordslimit;
            }
            if (wordslimit - text.length < 0) {
                return 0;
            }
            return wordslimit - text.length;
        },
        checkText: function checkText(type, index) {
            if (type == "worksresp") {
                var len = this.resume.worksExps[index].resp.length;
                if (len > 1000) {
                    swal({
                        title: "",
                        text: "最多只能输入1000字！",
                        type: "warning"
                    });
                    this.resume.worksExps[index].resp = this.resume.worksExps[index].resp.slice(0, 1000);
                }
            } else if (type == "prodesc") {
                var len = this.resume.projects[index].desc.length;
                if (len > 1000) {
                    swal({
                        title: "",
                        text: "最多只能输入1000字！",
                        type: "warning"
                    });
                    this.resume.projects[index].desc = this.resume.projects[index].desc.slice(0, 1000);
                }
            } else if (type == "proresp") {
                var len = this.resume.projects[index].resp.length;
                if (len > 1000) {
                    swal({
                        title: "",
                        text: "最多只能输入1000字！",
                        type: "warning"
                    });
                    this.resume.projects[index].resp = this.resume.projects[index].resp.slice(0, 1000);
                }
            } else if (type == "proachiev") {
                var len = this.resume.projects[index].achiev.length;
                if (len > 1000) {
                    swal({
                        title: "",
                        text: "最多只能输入1000字！",
                        type: "warning"
                    });
                    this.resume.projects[index].achiev = this.resume.projects[index].achiev.slice(0, 1000);
                }
            } else if (type == "selfeval") {
                var len = this.resume.selfEval.length;
                if (len > 200) {
                    swal({
                        title: "",
                        text: "最多只能输入200字！",
                        type: "warning"
                    });
                    this.resume.selfEval = this.resume.selfEval.slice(0, 200);
                }
            } else if (type == "psinfo") {
                var len = this.resume.psInfo.length;
                if (len > 200) {
                    swal({
                        title: "",
                        text: "最多只能输入200字！",
                        type: "warning"
                    });
                    this.resume.psInfo = this.resume.psInfo.slice(0, 200);
                }
            } else if (type == "skill") {
                var len = this.resume.skills.length;
                if (len > 100) {
                    swal({
                        title: "",
                        text: "最多只能输入100字！",
                        type: "warning"
                    });
                    this.resume.skills = this.resume.skills.slice(0, 100);
                }
            }
        },
        popTrade: function popTrade(type) {
            appModal.showModal = true;
            appModal.show.trade = true;
        },
        popTradeSingle: function popTradeSingle(index) {
            appModal.showModal = true;
            this.resume.curWorksIndex = index;
            appModal.show.tradeSingle = true;
        },
        popPosition: function popPosition() {
            appModal.showModal = true;
            appModal.show.position = true;
        },
        showPre: function showPre() {
            if (appCont.resume.firstEdit) {
                //如果是首次编辑预览简历要进行一定的处理
                //期望工作地点              
                appCont.resume.expect.province = (0, _jquery2.default)("#exp-address .sel-province input").val();
                appCont.resume.expect.city = (0, _jquery2.default)("#exp-address .sel-city input").val();
                appCont.resume.expect.district = (0, _jquery2.default)("#exp-address .sel-district input").val();
                //工作经历地址
                var worksArray = (0, _jquery2.default)(".work-address");
                var worksDate = (0, _jquery2.default)(".worksexp-date");
                for (var i = 0; i < appCont.resume.worksExps.length; i++) {
                    appCont.resume.worksExps[i].province = worksArray.eq(i).find(".sel-province input").val();
                    appCont.resume.worksExps[i].city = worksArray.eq(i).find(".sel-city input").val();
                    appCont.resume.worksExps[i].district = worksArray.eq(i).find(".sel-district input").val();
                    appCont.resume.worksExps[i].initdate = {
                        startyear: worksDate.eq(i).find(".sel-startyear input").val(),
                        startmonth: worksDate.eq(i).find(".sel-startmonth input").val(),
                        endyear: worksDate.eq(i).find(".sel-endyear input").val(),
                        endmonth: worksDate.eq(i).find(".sel-endmonth input").val()
                        // console.log(appCont.resume.worksExps[i].initdate);
                    };
                };
                //专业名称
                var majorArray = (0, _jquery2.default)(".major-name");
                var edusDate = (0, _jquery2.default)(".edus-date");
                for (var j = 0; j < appCont.resume.edus.length; j++) {
                    appCont.resume.edus[j].major = majorArray.eq(j).find(".major-input-1 input").val();
                    appCont.resume.edus[j].submajor = majorArray.eq(j).find(".major-input-2 input").val();
                    appCont.resume.edus[j].exmajor = majorArray.eq(j).find(".ex-major").val();
                    appCont.resume.edus[j].initdate = {
                        startyear: edusDate.eq(j).find(".sel-startyear input").val(),
                        startmonth: edusDate.eq(j).find(".sel-startmonth input").val(),
                        endyear: edusDate.eq(j).find(".sel-endyear input").val(),
                        endmonth: edusDate.eq(j).find(".sel-endmonth input").val()
                    };
                }
                //项目预处理
                var proDate = (0, _jquery2.default)(".projects-date");
                for (var k = 0; k < appCont.resume.projects.length; k++) {
                    appCont.resume.projects[k].initdate = {
                        startyear: proDate.eq(k).find(".sel-startyear input").val(),
                        startmonth: proDate.eq(k).find(".sel-startmonth input").val(),
                        endyear: proDate.eq(k).find(".sel-endyear input").val(),
                        endmonth: proDate.eq(k).find(".sel-endmonth input").val()
                    };
                }
                //语言选项
                var skillArray = [];
                (0, _jquery2.default)(".language-skills input[type='checkbox']").each(function () {
                    if (this.checked) {
                        skillArray.push(this.value);
                    }
                });
                appCont.resume.laSkills = skillArray;
            }
            appModal.showModal = true;
            appModal.show.preview = true;
            (0, _jquery2.default)(window).scrollTop(0);
        },
        addWorksexp: function addWorksexp() {
            for (var i = 0; i < this.resume.worksExps.length; i++) {
                this.resume.worksExps[i].show = false;
            }
            var worksexp = EventUtils.cloneObj(this.resume.worksExps[0]);
            for (var key in worksexp) {
                worksexp[key] = "";
            }
            worksexp.show = true;
            this.resume.worksExps.push(worksexp);
            this.$nextTick(function () {
                selectInitInput();
                selectInitPos();
            });
        },
        workSwipe: function workSwipe(index) {
            for (var i = 0; i < this.resume.worksExps.length; i++) {
                this.resume.worksExps[i].show = false;
            }
            this.resume.worksExps[index].show = true;
            this.$nextTick(function () {
                selectInitInput();
                selectInitPos();
            });
        },
        addEdu: function addEdu() {
            for (var i = 0; i < this.resume.edus.length; i++) {
                this.resume.edus[i].show = false;
            };
            var edusExp = {
                show: true,
                uni: "",
                major: "",
                submajor: "",
                exmajor: "",
                initdate: "",
                qualification: ""
            };
            this.resume.edus.push(edusExp);
            this.$nextTick(function () {
                selectInitInput();
                selectInitPos();
            });
        },
        eduSwipe: function eduSwipe(index) {
            for (var i = 0; i < this.resume.edus.length; i++) {
                this.resume.edus[i].show = false;
            };
            this.resume.edus[index].show = true;
            this.$nextTick(function () {
                selectInitInput();
                selectInitPos();
            });
        },
        addProject: function addProject() {
            for (var i = 0; i < this.resume.projects.length; i++) {
                this.resume.projects[i].show = false;
            };
            var project = {
                show: true,
                name: "",
                firma: "",
                initdate: "",
                desc: "",
                resp: "",
                achiev: ""
            };
            this.resume.projects.push(project);
            this.$nextTick(function () {
                selectInitInput();
                selectInitPos();
            });
        },
        projectSwipe: function projectSwipe(index) {
            for (var i = 0; i < this.resume.projects.length; i++) {
                this.resume.projects[i].show = false;
            }
            this.resume.projects[index].show = true;
            this.$nextTick(function () {
                selectInitInput();
                selectInitPos();
            });
        },
        submit: function submit() {
            //提交之前对数据进行校验
            var isFilled = true;
            (0, _jquery2.default)(".edit-must input:visible").each(function (index) {
                if (this.value == "") {
                    (0, _jquery2.default)(this).addClass("hint-nullable");
                    isFilled = false;
                }
            });
            if (!isFilled) {
                swal({
                    title: "",
                    text: "请完成必填信息！",
                    type: "warning"
                });
                return false;
            }
            if (!variableUtils.regExp.mobile.test(this.resume.phone)) {
                (0, _jquery2.default)("#cv-mobile").addClass("hint-nullable");
                swal({
                    title: "",
                    text: "请检查手机格式是否正确！",
                    type: "warning"
                });
                return false;
            } else {
                (0, _jquery2.default)("#cv-mobile").removeClass("hint-nullable");
            }
            if (!variableUtils.regExp.email.test(this.resume.email)) {
                (0, _jquery2.default)("#cv-email").addClass("hint-nullable");
                swal({
                    title: "",
                    text: "请检查邮箱格式是否正确！",
                    type: "warning"
                });
                return false;
            } else {
                (0, _jquery2.default)("#cv-email").removeClass("hint-nullable");
            }
            this.resume.firstEdit = false;
            postResume("all");
            resumePercentCalculate(appCont.resume);
            (0, _jquery2.default)(".edit").hide();
            (0, _jquery2.default)(".view").show();
        },
        deleteItem: function deleteItem(type, index) {
            if (type == "worksexp") {
                if (this.resume.worksExps.length > 1) {
                    delItem("work", appCont.resume.worksExps[index].cvCpyId);
                    this.resume.worksExps.splice(index, 1);
                } else {
                    swal({
                        title: "",
                        text: "至少保留一项！",
                        type: "warning"
                    });
                }
            } else if (type == "edu") {
                if (this.resume.edus.length > 1) {
                    delItem("edu", appCont.resume.edus[index].cvEduId);
                    this.resume.edus.splice(index, 1);
                } else {
                    swal({
                        title: "",
                        text: "至少保留一项！",
                        type: "warning"
                    });
                }
            } else if (type == "project") {
                if (this.resume.projects.length > 1) {
                    delItem("project", appCont.resume.projects[index].cvProId);
                    this.resume.projects.splice(index, 1);
                } else {
                    swal({
                        title: "",
                        text: "至少保留一项！",
                        type: "warning"
                    });
                }
            }
        },
        stateCss: function stateCss(state) {
            if (state == "已开课") {
                return "begin";
            } else if (state == "课程结束") {
                return "after";
            } else {
                return "before";
            }
        },
        showResult: function showResult(index, curpage, itemsnum) {
            if (index >= (parseInt(curpage) - 1) * parseInt(itemsnum) && index < parseInt(curpage) * parseInt(itemsnum)) {
                return true;
            } else {
                return false;
            }
        },
        showpage: function showpage(totalpage) {
            if (totalpage < 3) {
                return totalpage;
            } else {
                return 3;
            }
        },
        cancelCollect: function cancelCollect(type, id) {
            switch (type) {
                case "position":
                    var postdata = {
                        id: id
                    };
                    EventUtils.ajaxReq("/recruit/delMarkInfo", "post", postdata, function (resp, status) {
                        if (appCont.colPosList.results.length == 1 && appCont.colPosList.curpage > 1) {
                            appCont.colPosList.curpage -= 1;
                        }
                        (0, _jquery2.default)(".collec-job .pagination a.page").eq(appCont.colPosList.curpage - 1).parent().trigger("click");
                    });
                    break;
                case "jobfair":
                    EventUtils.ajaxReq("/jobfair/delMarkInfo", "post", { id: id }, function (resp, status) {
                        if (appCont.colRecList.results.length == 1 && appCont.colRecList.curpage > 1) {
                            appCont.colRecList.curpage -= 1;
                        }
                        (0, _jquery2.default)(".collec-recruitment .pagination a.page").eq(appCont.colRecList.curpage - 1).parent().trigger("click");
                    });
                    break;
            }
        },
        topage: function topage(page, type) {
            if (type == "course") {
                this.courses.curpage = page;
            } else if (type == "col-study") {
                this.colStuList.curpage = page;
            } else if (type == "col-pos") {
                colposRequest(appCont.colPosList.applyindex, page);
            } else if (type == "col-rec") {
                colrecRequest(appCont.colRecList.applyindex, page);
            } else if (type == "my-pos") {
                posRequest(appCont.myPosList.jobsrc, appCont.myPosList.jobstate, page);
            }
        },
        apply: function apply(type, item) {
            if (type == "recruit") {
                var postdata = {
                    userId: parObj.userId,
                    recruitId: item.recruitId
                };
                EventUtils.ajaxReq("/recruit/cooperateRecruit", "post", postdata, function (resp, status) {
                    console.log(resp);
                    if (resp.data && resp.data.isApply == "0") {
                        swal({
                            title: "",
                            text: "投递成功！",
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
            if (type == "jobfair") {
                var postdata = {
                    userId: parObj.userId,
                    jobFairId: item.jobFairId
                };
                EventUtils.ajaxReq("/jobfair/cooperateJobFair", "post", postdata, function (resp, status) {
                    console.log(resp);
                    if (resp.data && resp.data.isApply == "0") {
                        swal({
                            title: "",
                            text: "投递成功！",
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
        }
    },
    watch: {
        'resume.phone': function resumePhone(curval, oldval) {
            if (!/^\d*$/.test(curval) || curval.length > 11) {
                this.resume.phone = oldval;
            }
        },
        'colPosList.curstate': function colPosListCurstate(curval) {
            switch (curval) {
                case "未投递":
                    colposRequest(1, 1);
                    break;
                case "已投递":
                    colposRequest(2, 1);
                    break;
                case "已下线":
                    colposRequest(3, 1);
                    break;
                default:
                    colposRequest(0, 1);
            }
        },
        'colRecList.curstate': function colRecListCurstate(curval) {
            switch (curval) {
                case "未投递":
                    colrecRequest(1, 1);
                    break;
                case "已投递":
                    colrecRequest(2, 1);
                    break;
                case "已下线":
                    colrecRequest(3, 1);
                    break;
                default:
                    colrecRequest(0, 1);
            }
        },
        'myPosList.curtype': function myPosListCurtype(curval) {
            if (curval == "招聘会") {
                posRequest(1, appCont.myPosList.jobstate, 1);
            }
            if (curval == "企业直聘") {
                posRequest(2, appCont.myPosList.jobstate, 1);
            }
        },
        'myPosList.curstate': function myPosListCurstate(curval) {
            if (curval == "全部状态") {
                posRequest(appCont.myPosList.jobsrc, 1, 1);
            }
            if (curval == "未查看") {
                posRequest(appCont.myPosList.jobsrc, 2, 1);
            }
            if (curval == "已查看") {
                posRequest(appCont.myPosList.jobsrc, 3, 1);
            }
            if (curval == "已反馈") {
                posRequest(appCont.myPosList.jobsrc, 4, 1);
            }
        }
    },
    components: {
        'pagination': pagination
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
        show: {
            trade: false,
            tradeSingle: false,
            preview: false,
            upload: false,
            position: false,
            mobile: false,
            email: false,
            wechat: false,
            message: false
        },
        account: {
            userId: parObj.userId
        },
        checkedTrades: [],
        showModal: false,
        trades: workareas,
        baseInfo: appPorto.briefInfo,
        resumeInfo: appCont.resume,
        database: {
            posdata: posArray
        }
    },
    methods: {
        closePorto: function closePorto() {
            this.show.upload = false;
            this.showModal = false;
        },
        closeTrade: function closeTrade() {
            this.show.trade = false;
            this.show.tradeSingle = false;
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
        submitTrade: function submitTrade(type) {
            if (type == "expect") {
                appCont.resume.expect.tradeItems = this.checkedTrades.join();
                this.show.trade = false;
            } else if (type == "worksexp") {
                var index = appCont.resume.curWorksIndex;
                appCont.resume.worksExps[index].trade = (0, _jquery2.default)(".trade-single-table input[type='radio']:checked").val();
                this.show.tradeSingle = false;
            }
            this.showModal = false;
        },
        cancelTrade: function cancelTrade() {
            this.show.trade = false;
            this.show.tradeSingle = false;
            this.showModal = false;
        },
        submitPos: function submitPos(array) {
            appCont.resume.expect.posItems = array.join();
            this.show.position = false;
            this.showModal = false;
        },
        cancelPos: function cancelPos() {
            this.show.position = false;
            this.showModal = false;
        },
        hidemodal: function hidemodal(obj) {
            if ((0, _jquery2.default)(obj).hasClass("modal")) {
                for (var key in this.show) {
                    this.show[key] = false;
                }
                this.showModal = false;
            }
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
        closeMsg: function closeMsg() {
            this.show.message = false;
            this.showModal = false;
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
        "show.upload": function showUpload(curval) {
            if (curval) {
                this.$nextTick(function () {
                    EventUtils.absCenter((0, _jquery2.default)("#app-modal .porto-upload"));
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
        'show.tradeSingle': function showTradeSingle(curval) {
            if (curval) {
                this.$nextTick(function () {
                    EventUtils.absCenter((0, _jquery2.default)("#app-modal .trade-box-single"));
                });
            }
        },
        'show.trade': function showTrade(curval) {
            if (curval) {
                this.$nextTick(function () {
                    EventUtils.absCenter((0, _jquery2.default)("#app-modal .trade-box-multi"));
                });
            }
        },
        'show.position': function showPosition(curval) {
            if (curval) {
                this.$nextTick(function () {
                    EventUtils.absCenter((0, _jquery2.default)("#app-modal .pos-pop-box"));
                });
            }
        }
    }
});

function init_center() {
    infoRequest();
    selectInitInput();
    selectInitPos();
    init_safepos();
    editEventBind();
    if (parObj.theme) {
        if (parObj.theme.indexOf("collec") >= 0) {
            (0, _jquery2.default)(".sideBox .myCollect").trigger("click");
            (0, _jquery2.default)(".sideBox .myCollect .sub-item:first").trigger("click");
        }
        if (parObj.theme.indexOf("conf") >= 0) {
            (0, _jquery2.default)(".sideBox .myConfig").trigger("click");
            (0, _jquery2.default)(".sideBox .myConfig .sub-item:first").trigger("click");
        } else {
            (0, _jquery2.default)(".sideBox li[paneid='" + parObj.theme + "']").trigger("click");
        }
    }
    //   modalEventBind();
    uploadEventBind();
}
init_center();

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
            (0, _jquery2.default)(".porto-img").html("<img src='" + resp.data + "' />");
        });
        appModal.show.upload = false;
        appModal.showModal = false;
    });
}

// 页面编辑事件绑定
function editEventBind() {
    var oldResume = EventUtils.cloneObj(appCont.resume);

    (0, _jquery2.default)(".resumeBox .btn-edit").click(function () {
        var editName = (0, _jquery2.default)(this).closest(".view-item").attr("name");
        switch (editName) {
            case "work":
                for (var i = 0; i < appCont.resume.worksExps.length; i++) {
                    appCont.resume.worksExps[i].show = false;
                };
                appCont.resume.worksExps[0].show = true;
            case "edu":
                for (var i = 0; i < appCont.resume.edus.length; i++) {
                    appCont.resume.edus[i].show = false;
                };
                appCont.resume.edus[0].show = true;
            case "project":
                for (var i = 0; i < appCont.resume.projects.length; i++) {
                    appCont.resume.projects[i].show = false;
                };
                appCont.resume.projects[0].show = true;
        }
        (0, _jquery2.default)(this).closest(".view-item").hide();
        (0, _jquery2.default)(".resumeBox .edit-item[name=" + editName + "]").show();
        selectInitPos();
        oldResume = EventUtils.cloneObj(appCont.resume);
    });
    (0, _jquery2.default)(".resumeBox .edit-item .buttons button:nth-of-type(1)").click(function () {
        var editBlock = (0, _jquery2.default)(this).closest(".edit-item");
        var viewName = editBlock.attr("name");
        var postdata = {};
        var isFilled = true;
        //校验手机和邮箱格式是否正确
        if (viewName == "basic") {
            (0, _jquery2.default)(".edit-must[name='basic'] input:visible").each(function (index) {
                if (this.value == "") {
                    (0, _jquery2.default)(this).addClass("hint-nullable");
                    isFilled = false;
                }
            });
            if (!isFilled) {
                swal({
                    title: "",
                    text: "请完成所有必填信息！",
                    type: "warning"
                });
                return false;
            }

            if (!variableUtils.regExp.mobile.test(appCont.resume.phone)) {
                (0, _jquery2.default)("#cv-mobile").addClass("hint-nullable");
                swal({
                    title: "",
                    text: "请检查手机格式是否正确！",
                    type: "warning"
                });
                return false;
            } else {
                (0, _jquery2.default)("#cv-mobile").removeClass("hint-nullable");
            }
            if (!variableUtils.regExp.email.test(appCont.resume.email)) {
                (0, _jquery2.default)("#cv-email").addClass("hint-nullable");
                swal({
                    title: "",
                    text: "请检查邮箱格式是否正确！",
                    type: "warning"
                });
                return false;
            } else {
                (0, _jquery2.default)("#cv-email").removeClass("hint-nullable");
            }
        }
        switch (viewName) {
            case "edu":
                (0, _jquery2.default)(".edit-must[name='edu'] input:visible").each(function (index) {
                    if (this.value == "") {
                        (0, _jquery2.default)(this).addClass("hint-nullable");
                        isFilled = false;
                    }
                });
                if (!isFilled) {
                    swal({
                        title: "",
                        text: "请完成所有必填信息！",
                        type: "warning"
                    });
                    return false;
                };
                postResume(viewName);
                break;
            case "speech":
                var skillArray = [];
                (0, _jquery2.default)(".language-skills input[type='checkbox']").each(function () {
                    if (this.checked) {
                        skillArray.push(this.value);
                    }
                });
                appCont.resume.laSkills = skillArray;
                skillArray = JSON.stringify(skillArray);
                var postdata = {
                    userId: parObj.userId,
                    cvId: respObj.cvInfo.cvId,
                    languages: skillArray
                };
                EventUtils.ajaxReq("/user/user/modifyCvBaiscInfo", "post", postdata, function (resp, status) {
                    console.log(resp, 2);
                });
                break;
            case "selfeval":
                var postdata = {
                    userId: parObj.userId,
                    cvId: respObj.cvInfo.cvId,
                    evaluation: appCont.resume.selfEval
                };
                EventUtils.ajaxReq("/user/user/modifyCvBaiscInfo", "post", postdata, function (resp, status) {
                    console.log(resp, 2);
                });
                break;
            case "psinfo":
                var postdata = {
                    userId: parObj.userId,
                    cvId: respObj.cvInfo.cvId,
                    anymore: appCont.resume.psInfo
                };
                EventUtils.ajaxReq("/user/user/modifyCvBaiscInfo", "post", postdata, function (resp, status) {
                    console.log(resp, 2);
                });
                break;
            case "skill":
                var postdata = {
                    userId: parObj.userId,
                    cvId: respObj.cvInfo.cvId,
                    speciality: appCont.resume.skills
                };
                EventUtils.ajaxReq("/user/user/modifyCvBaiscInfo", "post", postdata, function (resp, status) {
                    console.log(resp, 2);
                });
                break;
            default:
                postResume(viewName);
        }
        editBlock.hide();
        (0, _jquery2.default)(".resumeBox .view-item[name=" + viewName + "]").show();
        resumePercentCalculate(appCont.resume);
    });
    (0, _jquery2.default)(".resumeBox .edit-item .buttons button:nth-of-type(2)").click(function () {
        appCont.resume = EventUtils.cloneObj(oldResume);
        var viewName = (0, _jquery2.default)(this).closest(".edit-item").attr("name");
        (0, _jquery2.default)(this).closest(".edit-item").hide();
        (0, _jquery2.default)(".resumeBox .view-item[name=" + viewName + "]").show();
    });
}

// function init_safepos() {
//     var p_left = Math.floor($(".safe-range p").width() * $(".safe-range").width() / 100) - 16 + "px";
//     $(".r-pointer").css("left", p_left);
// }
function init_safepos(percent) {
    var p_left = Math.floor((0, _jquery2.default)(".safe-range").width() * percent / 100) - 16 + "px";
    (0, _jquery2.default)(".r-pointer").css("left", p_left);
    (0, _jquery2.default)("#safe-progress").css("width", percent + "%");
}

function delItem(editType, id) {
    switch (editType) {
        case "work":
            var postdata = {
                userId: parObj.userId,
                cvArray: JSON.stringify([{ cvCpyId: id, delFlg: "1" }])
            };
            EventUtils.ajaxReq("/user/user/modifyCvCo", "post", postdata, function (resp, status) {
                console.log(resp, 3);
            });
            break;
        case "edu":
            var postdata = {
                userId: parObj.userId,
                cvArray: JSON.stringify([{ cvEduId: id, delFlg: "1" }])
            };
            EventUtils.ajaxReq("/user/user/modifyCvEdu", "post", postdata, function (resp, status) {
                console.log(resp, 4);
            });
            break;
        case "project":
            var postdata = {
                userId: parObj.userId,
                cvArray: JSON.stringify([{ cvProId: id, delFlg: "1" }])
            };
            EventUtils.ajaxReq("/user/user/modifyCvPro", "post", postdata, function (resp, status) {
                console.log(resp, 5);
            });
            break;
    }
}

function postResume(editType, isDel) {
    if (editType == "all" || editType == "basic") {
        var marryindex = 0;
        if (appCont.resume.family == "已婚") {
            marryindex = 1;
        } else if (appCont.resume.family == "离异") {
            marryindex = 2;
        }
        var postUserdata = {
            userId: parObj.userId,
            id: respObj.userInfo.id,
            realName: appCont.resume.realName,
            marryStatus: marryindex,
            mobile: appCont.resume.phone,
            email: appCont.resume.email,
            nativePlace: appCont.resume.nativePlace,
            nation: appCont.resume.nation,
            cvStatus: 1
        };
        EventUtils.ajaxReq("/user/user/modifyInfo", "post", postUserdata, function (resp, status) {
            console.log(resp, 1);
        });
    }

    if (editType == "all" || editType == "trade") {

        appCont.resume.expect.province = (0, _jquery2.default)("#exp-address .sel-province input").val();
        appCont.resume.expect.city = (0, _jquery2.default)("#exp-address .sel-city input").val();
        appCont.resume.expect.district = (0, _jquery2.default)("#exp-address .sel-district input").val();
        var skillArray = [];
        (0, _jquery2.default)(".language-skills input[type='checkbox']").each(function () {
            if (this.checked) {
                skillArray.push(this.value);
            }
        });
        appCont.resume.laSkills = JSON.stringify(skillArray);
        var postCvdata = {
            userId: parObj.userId,
            cvId: respObj.cvInfo.cvId,
            expJob: appCont.resume.expect.tradeItems,
            expJobFunction: appCont.resume.expect.posItems,
            expPlace: appCont.resume.expect.province + ";" + appCont.resume.expect.city + ";" + appCont.resume.expect.district,
            expSalary: appCont.resume.expect.salary,
            evaluation: appCont.resume.selfEval,
            anymore: appCont.resume.psInfo,
            speciality: appCont.resume.skills,
            languages: appCont.resume.laSkills
        };
        console.log(postCvdata, 2);
        EventUtils.ajaxReq("/user/user/modifyCvBaiscInfo", "post", postCvdata, function (resp, status) {
            //  console.log(resp, 2);
        });
    }

    if (editType == "all" || editType == "work") {

        var worksArray = (0, _jquery2.default)(".work-address");
        for (var i = 0; i < appCont.resume.worksExps.length; i++) {
            appCont.resume.worksExps[i].province = worksArray.eq(i).find(".sel-province input").val();
            appCont.resume.worksExps[i].city = worksArray.eq(i).find(".sel-city input").val();
            appCont.resume.worksExps[i].district = worksArray.eq(i).find(".sel-district input").val();
        };

        var postCvWorks = [];
        for (var i = 0; i < appCont.resume.worksExps.length; i++) {
            var worksdateobj = (0, _jquery2.default)(".worksexp-date").eq(i);
            appCont.resume.worksExps[i].initdate = {
                startyear: worksdateobj.find(".sel-startyear input").val(),
                startmonth: worksdateobj.find(".sel-startmonth input").val(),
                endyear: worksdateobj.find(".sel-endyear input").val(),
                endmonth: worksdateobj.find(".sel-endmonth input").val()
            };
            var workexp = {
                userId: parObj.userId,
                cvCpyId: appCont.resume.worksExps[i].cvCpyId,
                companyName: appCont.resume.worksExps[i].firma,
                companyType: appCont.resume.worksExps[i].trade,
                position: appCont.resume.worksExps[i].pos,
                content: appCont.resume.worksExps[i].resp,
                workAddress: appCont.resume.worksExps[i].province + ";" + appCont.resume.worksExps[i].city + ";" + appCont.resume.worksExps[i].district,
                salary: appCont.resume.worksExps[i].salary,
                startTime: appCont.resume.worksExps[i].initdate.startyear + "-" + appCont.resume.worksExps[i].initdate.startmonth,
                endTime: appCont.resume.worksExps[i].initdate.endyear + "-" + appCont.resume.worksExps[i].initdate.endmonth
            };
            postCvWorks.push(workexp);
        }
        console.log(postCvWorks, 3);
        postCvWorks = JSON.stringify(postCvWorks);

        EventUtils.ajaxReq("/user/user/modifyCvCo", "post", { userId: parObj.userId, cvArray: postCvWorks }, function (resp, status) {
            console.log(resp, 3);
            for (var i = 0; i < appCont.resume.worksExps.length; i++) {
                appCont.resume.worksExps[i].cvCpyId = resp.data[i].cv_cpy_id;
            }
        });
    }

    if (editType == "all" || editType == "edu") {

        var majorArray = (0, _jquery2.default)(".major-name");
        for (var j = 0; j < appCont.resume.edus.length; j++) {
            appCont.resume.edus[j].major = majorArray.eq(j).find(".major-input-1 input").val();
            appCont.resume.edus[j].submajor = majorArray.eq(j).find(".major-input-2 input").val();
            appCont.resume.edus[j].exmajor = majorArray.eq(j).find(".ex-major").val();
        }

        var postCvEdus = [];
        for (var j = 0; j < appCont.resume.edus.length; j++) {
            var edudateobj = (0, _jquery2.default)(".edus-date").eq(j);
            appCont.resume.edus[j].initdate = {
                startyear: edudateobj.find(".sel-startyear input").val(),
                startmonth: edudateobj.find(".sel-startmonth input").val(),
                endyear: edudateobj.find(".sel-endyear input").val(),
                endmonth: edudateobj.find(".sel-endmonth input").val()
            };
            var edu = {
                userId: parObj.userId,
                cvEduId: appCont.resume.edus[j].cvEduId,
                schoolName: appCont.resume.edus[j].uni,
                professional: appCont.resume.edus[j].major + ";" + appCont.resume.edus[j].submajor + ";" + appCont.resume.edus[j].exmajor,
                qualification: appCont.resume.edus[j].qualification,
                startTime: appCont.resume.edus[j].initdate.startyear + "-" + appCont.resume.edus[j].initdate.startmonth,
                endTime: appCont.resume.edus[j].initdate.endyear + "-" + appCont.resume.edus[j].initdate.endmonth
            };
            postCvEdus.push(edu);
        }
        console.log(postCvEdus, 4);
        postCvEdus = JSON.stringify(postCvEdus);

        EventUtils.ajaxReq("/user/user/modifyCvEdu", "post", { userId: parObj.userId, cvArray: postCvEdus }, function (resp, status) {
            for (var i = 0; i < appCont.resume.edus.length; i++) {
                appCont.resume.edus[i].cvEduId = resp.data[i].cv_edu_id;
            }
            console.log(resp, 4);
        });
    }

    if (editType == "all" || editType == "project") {
        var postCvProjects = [];
        for (var k = 0; k < appCont.resume.projects.length; k++) {
            var projectdateobj = (0, _jquery2.default)(".projects-date").eq(k);
            appCont.resume.projects[k].initdate = {
                startyear: projectdateobj.find(".sel-startyear input").val(),
                startmonth: projectdateobj.find(".sel-startmonth input").val(),
                endyear: projectdateobj.find(".sel-endyear input").val(),
                endmonth: projectdateobj.find(".sel-endmonth input").val()
            };
            var project = {
                userId: parObj.userId,
                cvProId: appCont.resume.projects[k].cvProId,
                companyName: appCont.resume.projects[k].firma,
                projectName: appCont.resume.projects[k].name,
                description: appCont.resume.projects[k].desc,
                position: appCont.resume.projects[k].resp,
                achievement: appCont.resume.projects[k].achiev,
                startTime: appCont.resume.projects[k].initdate.startyear + "-" + appCont.resume.projects[k].initdate.startmonth,
                endTime: appCont.resume.projects[k].initdate.endyear + "-" + appCont.resume.projects[k].initdate.endmonth
            };
            postCvProjects.push(project);
        }
        console.log(postCvProjects, 5);
        postCvProjects = JSON.stringify(postCvProjects);

        EventUtils.ajaxReq("/user/user/modifyCvPro", "post", { userId: parObj.userId, cvArray: postCvProjects }, function (resp, status) {
            for (var i = 0; i < appCont.resume.projects.length; i++) {
                appCont.resume.projects[i].cvProId = resp.data[i].cv_pro_id;
            }
            console.log(resp, 5);
        });
    }
}

//职位收藏信息请求
function colposRequest(index, page) {
    appCont.colPosList.applyindex = index;
    appCont.colPosList.curpage = page;
    var postdata = {
        userId: parObj.userId,
        index: page,
        count: 3,
        applyStatus: index
        //  console.log(postdata);
    };EventUtils.ajaxReq("/recruit/getMarkList", "get", postdata, function (resp, status) {
        //   console.log(resp);
        if (resp.data) {
            appCont.colPosList.results = resp.data.list;
            appCont.colPosList.totalpages = resp.data.totalPage;
            appCont.colPosList.totalitems = resp.data.totalRow;
        } else {
            appCont.colPosList.results = [];
            appCont.colPosList.totalitems = 0;
            appCont.colPosList.totalpages = 1;
        }
    });
}

//招聘会收藏信息请求
function colrecRequest(index, page) {
    appCont.colRecList.applyindex = index;
    appCont.colRecList.curpage = page;
    var postdata = {
        userId: parObj.userId,
        index: page,
        count: 3,
        applyStatus: index
    };
    EventUtils.ajaxReq("/jobfair/getMarkList", "get", postdata, function (resp, status) {
        console.log(resp);
        if (resp.data) {
            appCont.colRecList.results = resp.data.list;
            appCont.colRecList.totalpages = resp.data.totalPage;
            appCont.colRecList.totalitems = resp.data.totalRow;
        } else {
            appCont.colRecList.results = [];
            appCont.colRecList.totalpages = 1;
            appCont.colRecList.totalitems = 0;
        }
    });
}

//我的求职信息请求
function posRequest(type, state, page) {
    appCont.myPosList.curpage = page;
    appCont.myPosList.jobstate = state;
    var postdata = {
        userId: parObj.userId,
        loginIdentifier: parObj.loginId,
        applyStatus: type,
        readStatus: state,
        index: page,
        count: 3
    };
    EventUtils.ajaxReq("/user/user/getMyApply", "get", postdata, function (resp, status) {
        console.log(resp);
        if (resp && resp.data) {
            appCont.myPosList.results = resp.data.list;
            appCont.myPosList.totalpages = resp.data.totalPage;
            appCont.myPosList.totalitems = resp.data.totalRow;
        } else {
            appCont.myPosList.results = [];
            appCont.myPosList.totalpages = 1;
            appCont.myPosList.totalitems = 0;
        }
        appCont.myPosList.jobsrc = type;
    });
}

//我的简历完成度计算
function resumePercentCalculate(cvInfo) {
    //计算简历完成度
    var resumePercent = 0;
    for (var key in cvInfo) {
        if (key == "expect") {
            //职业意向 10
            var isExpect = true;
            for (var key_1 in cvInfo[key]) {
                if (!cvInfo[key][key_1]) {
                    isExpect = false;
                }
            }
            if (isExpect) {
                resumePercent += 10;
            }
        } else if (key == "worksExps") {
            //工作经历 12
            var isWork = true;
            for (var key_1 in cvInfo[key]) {
                if (!cvInfo[key][key_1] && key_1 != "initdate") {
                    isWork = false;
                }
            }
            if (isWork) {
                resumePercent += 12;
            }
        } else if (key == "edus") {
            //教育经历 12
            var isEdu = true;
            for (var key_1 in cvInfo[key]) {
                if (!cvInfo[key][key_1] && key_1 != "initdate") {
                    isEdu = false;
                }
            }
            if (isEdu) {
                resumePercent += 12;
            }
        } else if (key == "projects") {
            //项目经历 10
            var isProject = true;
            for (var key_1 in cvInfo[key]) {
                if (!cvInfo[key][key_1] && key_1 != "initdate") {
                    isProject = false;
                }
            }
            if (isProject) {
                resumePercent += 10;
            }
        } else if (key == "firstEdit" || key == "curWorksIndex") {
            //排除这两种情况
        } else if (key == "realName" || key == "phone" || key == "email") {
            if (cvInfo[key] && cvInfo[key] != "") {
                resumePercent += 4;
            }
        } else if (key == "family" || key == "nativePlace" || key == "nation") {
            if (cvInfo[key] && cvInfo[key] != "") {
                resumePercent += 3;
            }
        } else if (key == "laSkills") {
            if (cvInfo[key] && cvInfo[key] != "") {
                resumePercent += 5;
            }
        } else if (key == "selfEval" || key == "psInfo" || key == "skills") {
            if (cvInfo[key] && cvInfo[key] != "") {
                resumePercent += 10;
            }
        }
    }
    if (resumePercent > 100) {
        resumePercent = 100;
    };
    appPorto.resumePercent = resumePercent;
    (0, _jquery2.default)("#app-porto .progress-real").css("width", resumePercent + "%");
}

// 清除页面绑定事件
window.onunload = function () {
    (0, _jquery2.default)(".resumeBox .btn-edit").click(null);
    (0, _jquery2.default)(".resumeBox .edit-item .buttons button").click(null);
    appPorto.$off();
    appSider.$off();
    appCont.$off();
    appModal.$off();
};

/***/ })

},[69]);