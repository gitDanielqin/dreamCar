webpackJsonp([12],{

/***/ 47:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vue = __webpack_require__(1); /**
                                   * Created by xuanyuan on 2016/11/7.
                                   */

__webpack_require__(4);
__webpack_require__(3);
__webpack_require__(6);
__webpack_require__(10);
__webpack_require__(17);
__webpack_require__(2);
__webpack_require__(5);
__webpack_require__(47);

var parObj = EventUtils.urlExtrac(window.location);
var appTop = new Vue({
    el: "#app-top",
    data: {
        displayCity: parObj.addr ? decodeURI(parObj.addr) : "杭州市"
    }
});
var appCont = new Vue({
    el: "#app-content",
    data: {
        database: {
            workstates: xqdatabase.workstates,
            addrData: addArray,
            uniLevel: xqdatabase.unilevel,
            incProps: xqdatabase.incProps,
            incScales: xqdatabase.incScale,
            date: xqdatabase.date
        },
        pInfo: {
            name: "",
            birth: {
                year: "",
                month: ""
            },
            workstate: "",
            email: ""
        },
        uniInfo: {
            name: "",
            props: "",
            linkMan: "",
            mobile: "",
            validCode: "",
            unable: true
        },
        incInfo: {
            name: "",
            props: "",
            scale: "",
            linkMan: "",
            mobile: "",
            validCode: "",
            unable: true
        },
        workstate: "",
        uniLevel: "",
        incProp: "",
        incScale: "",
        showPerson: parObj.userType == "0" || window.location.search == "",
        showUni: parObj.userType == "1",
        showInc: parObj.userType == "2"
    },
    methods: {
        codequery: function codequery(mobile, obj) {
            if (!variableUtils.regExp.mobile.test(mobile)) {
                swal({
                    title: "",
                    text: "手机格式不正确！",
                    type: "warning"
                });
                return false;
            }
            (0, _jquery2.default)(obj).attr("disabled", true);
            var start = 0;
            var timer = setInterval(function () {
                start++;
                if (start == 60) {
                    (0, _jquery2.default)(obj).html("获取验证码");
                    (0, _jquery2.default)(obj).attr("disabled", false);
                    clearInterval(timer);
                } else {
                    (0, _jquery2.default)(obj).html("重新获取 (" + (60 - start) + "s)");
                }
            }, 1000);
            var postdata = {
                mobile: mobile,
                type: 3
            };
            var callback = function callback(data, status) {
                swal({
                    title: "",
                    text: data.info,
                    type: "warning"
                });
            };
            EventUtils.ajaxReq('/sys/mobileCode', 'post', postdata, callback);
        },
        selectGender: function selectGender(obj) {
            (0, _jquery2.default)(".gender .on").removeClass("on");
            (0, _jquery2.default)(obj).addClass("on");
        },
        submitCard: function submitCard(type) {
            var isFilled = true;
            (0, _jquery2.default)("#app-content input:visible").each(function () {
                if ((0, _jquery2.default)(this).val() == "") {
                    isFilled = false;
                    (0, _jquery2.default)(this).addClass("hint-nullable");
                } else {
                    (0, _jquery2.default)(this).removeClass("hint-nullable");
                }
            });
            if (!isFilled) {
                swal({
                    title: "",
                    text: "请完成所有的卡片信息！",
                    type: "warning"
                });
                return false;
            }
            var posturl = "";
            var postdata = {};
            var domainUrl = "";
            if (type == "person") {
                posturl = "/user/user/createCard";
                domainUrl = "pCenter.html?";
                if (!variableUtils.regExp.email.test(this.pInfo.email)) {
                    swal({
                        title: "",
                        text: "邮箱格式不正确！",
                        type: "warning"
                    });
                    return false;
                }
                postdata = {
                    userId: parObj.userId,
                    realName: this.pInfo.name,
                    birthday: this.pInfo.birth.year + "-" + this.pInfo.birth.month + "-01",
                    liveStatus: this.pInfo.workstate,
                    sex: (0, _jquery2.default)(".personCard .gender .on").text() == "男" ? 1 : 2,
                    province: (0, _jquery2.default)(".personCard .sel-province input").val(),
                    city: (0, _jquery2.default)(".personCard .sel-city input").val(),
                    area: (0, _jquery2.default)(".personCard .sel-district input").val(),
                    email: this.pInfo.email
                };
            } else if (type == "uni") {
                if (!variableUtils.regExp.mobile.test(this.uniInfo.mobile)) {
                    swal({
                        title: "",
                        text: "手机格式不正确！",
                        type: "warning"
                    });
                    return false;
                }
                posturl = "/user/school/createCard";
                postdata = {
                    userId: parObj.userId,
                    name: this.uniInfo.name,
                    property: this.uniInfo.props,
                    province: (0, _jquery2.default)(".uniCard .sel-province input").val(),
                    city: (0, _jquery2.default)(".uniCard .sel-city input").val(),
                    area: (0, _jquery2.default)(".uniCard .sel-district input").val(),
                    linkMan: this.uniInfo.linkMan,
                    mobile: this.uniInfo.mobile,
                    code: this.uniInfo.validCode
                };
                domainUrl = "uniCenter.html?";
            } else if (type == "inc") {
                if (!variableUtils.regExp.mobile.test(this.incInfo.mobile)) {
                    swal({
                        title: "",
                        text: "手机格式不正确！",
                        type: "warning"
                    });
                    return false;
                }
                posturl = "/user/company/createCard";
                postdata = {
                    userId: parObj.userId,
                    name: this.incInfo.name,
                    property: this.incInfo.props,
                    scale: this.incInfo.scale,
                    province: (0, _jquery2.default)(".bsCard .sel-province input").val(),
                    city: (0, _jquery2.default)(".bsCard .sel-city input").val(),
                    area: (0, _jquery2.default)(".bsCard .sel-district input").val(),
                    linkMan: this.incInfo.linkMan,
                    mobile: this.incInfo.mobile,
                    code: this.incInfo.validCode
                };
                domainUrl = "incCenter.html?";
            }
            if (!parObj.userId) {
                swal({
                    title: "",
                    text: "网页数据出错，请返回注册页重新注册！",
                    type: "warning"
                });
                return false;
            }
            EventUtils.ajaxReq(posturl, 'post', postdata, function (resp, status) {
                if (resp.code == "00000") {
                    swal({
                        title: "",
                        text: resp.info,
                        type: "success",
                        showConfirmButton: false
                    });
                    setTimeout(function () {
                        var parstring = "userId=" + parObj.userId + "&loginId=" + parObj.loginId;
                        window.location.href = EventUtils.securityUrl(domainUrl + parstring);
                    }, 1000);
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
    watch: {
        'uniInfo.mobile': function uniInfoMobile(curval) {
            if (curval != "") {
                this.uniInfo.unable = false;
            } else {
                this.uniInfo.unable = true;
            }
        },
        'incInfo.mobile': function incInfoMobile(curval) {
            if (curval != "") {
                this.incInfo.unable = false;
            } else {
                this.incInfo.unable = true;
            }
        }
    },
    mounted: function mounted() {
        selectInitInput();
        selectInitPos();
        (0, _jquery2.default)(".main").css("height", EventUtils.getViewport().height - 246 + "px");
    }
});

/***/ })

},[71]);