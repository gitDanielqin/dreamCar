webpackJsonp([20],{

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

/**
 * Created by xuanyuan on 2016/11/7.
 */

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
            workstates: workstates,
            addrData: addArray,
            uniLevel: unilevel,
            incProps: incProps,
            incScales: incScale,
            date: date
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
                mobile: mobile,
                type: 3
            };
            var callback = function callback(data, status) {
                $(obj).html("获取验证码");
                $(obj).attr("disabled", false);
                alert(data.info);
            };
            EventUtils.ajaxReq('/sys/mobileCode', 'post', postdata, callback);
        },
        selectGender: function selectGender(obj) {
            $(".gender .on").removeClass("on");
            $(obj).addClass("on");
        },
        submitCard: function submitCard(type) {
            var posturl = "";
            var postdata = {};
            var domainUrl = "";
            if (type == "person") {
                posturl = "/user/user/createCard";
                domainUrl = "pCenter.html?";
                postdata = {
                    userId: parObj.userId,
                    realName: this.pInfo.name,
                    birthday: this.pInfo.birth.year + "-" + this.pInfo.birth.month + "-01",
                    liveStatus: this.pInfo.workstate,
                    sex: $(".personCard .gender .on").text() == "男" ? 1 : 2,
                    province: $(".personCard .sel-province input").val(),
                    city: $(".personCard .sel-city input").val(),
                    area: $(".personCard .sel-district input").val(),
                    email: this.pInfo.email
                };
            } else if (type == "uni") {
                posturl = "/user/school/createCard";
                postdata = {
                    userId: parObj.userId,
                    name: this.uniInfo.name,
                    property: this.uniInfo.props,
                    province: $(".uniCard .sel-province input").val(),
                    city: $(".uniCard .sel-city input").val(),
                    area: $(".uniCard .sel-district input").val(),
                    linkMan: this.uniInfo.linkMan,
                    mobile: this.uniInfo.mobile,
                    code: this.uniInfo.validCode
                };
                domainUrl = "uniCenter.html?";
            } else if (type == "inc") {
                posturl = "/user/company/createCard";
                postdata = {
                    userId: parObj.userId,
                    name: this.incInfo.name,
                    property: this.incInfo.props,
                    scale: this.incInfo.scale,
                    province: $(".bsCard .sel-province input").val(),
                    city: $(".bsCard .sel-city input").val(),
                    area: $(".bsCard .sel-district input").val(),
                    linkMan: this.incInfo.linkMan,
                    mobile: this.incInfo.mobile,
                    code: this.incInfo.validCode
                };
                domainUrl = "incCenter.html?";
            }
            EventUtils.ajaxReq(posturl, 'post', postdata, function (resp, status) {
                var parstring = "userId=" + parObj.userId + "&loginId=" + parObj.loginId;
                window.location.href = domainUrl + parstring;
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
        $(".main").css("height", EventUtils.getViewport().height - 246 + "px");
    }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

},[55]);