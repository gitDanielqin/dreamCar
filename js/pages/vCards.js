/**
 * Created by xuanyuan on 2016/11/7.
 */
import $ from "../libs/jquery-3.1.0.min";
require("../libs/sweetalert.min");
require("../common/common")
var Vue = require("../libs/vue.min");
require("../components/dropdown")
require("../../data/commondata")
require("../../data/address")
require("../../css/base.css")
require("../../css/sweetalert.css")
require("../../css/vCards.css")

var parObj = EventUtils.urlExtrac(window.location);
var appTop = new Vue({
    el: "#app-top",
    data: {
        displayCity: parObj.addr ? decodeURI(parObj.addr) : "杭州市"
    }
})
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
                month: "",
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
        securityUrl: function(url) {
            return EventUtils.securityUrl(url);
        },
        codequery: function(mobile, obj) {
            if (!variableUtils.regExp.mobile.test(mobile)) {
                swal({
                    title: "",
                    text: "手机格式不正确！",
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
                } else {
                    $(obj).html("重新获取 (" + (60 - start) + "s)");
                }
            }, 1000);
            var postdata = {
                mobile: mobile,
                type: 3
            };
            var callback = function(data, status) {
                swal({
                    title: "",
                    text: data.info,
                    type: "warning"
                })
            };
            EventUtils.ajaxReq('/sys/mobileCode', 'post', postdata, callback);
        },
        selectGender: function(obj) {
            $(".gender .on").removeClass("on");
            $(obj).addClass("on");
        },
        submitCard: function(type) {
            var isFilled = true;
            $("#app-content input:visible").each(function() {
                if ($(this).val() == "") {
                    isFilled = false;
                    $(this).addClass("hint-nullable");
                } else {
                    $(this).removeClass("hint-nullable");
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
                posturl = "/user/user/createCard"
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
                    sex: $(".personCard .gender .on").text() == "男" ? 1 : 2,
                    province: $(".personCard .sel-province input").val(),
                    city: $(".personCard .sel-city input").val(),
                    area: $(".personCard .sel-district input").val(),
                    email: this.pInfo.email
                }

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
                    province: $(".uniCard .sel-province input").val(),
                    city: $(".uniCard .sel-city input").val(),
                    area: $(".uniCard .sel-district input").val(),
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
                    province: $(".bsCard .sel-province input").val(),
                    city: $(".bsCard .sel-city input").val(),
                    area: $(".bsCard .sel-district input").val(),
                    linkMan: this.incInfo.linkMan,
                    mobile: this.incInfo.mobile,
                    code: this.incInfo.validCode
                }
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
            EventUtils.ajaxReq(posturl, 'post', postdata, function(resp, status) {
                if (resp.code == "00000") {
                    swal({
                        title: "",
                        text: resp.info,
                        type: "success",
                        showConfirmButton: false
                    });
                    setTimeout(function() {
                        var parstring = "userId=" + parObj.userId + "&loginId=" + parObj.loginId;
                        window.location.href = EventUtils.securityUrl(domainUrl + parstring);
                    }, 1000)
                } else {
                    swal({
                        title: "",
                        text: resp.info,
                        type: "error"
                    });
                }

            })

        }
    },
    watch: {
        'uniInfo.mobile': function(curval) {
            if (curval != "") {
                this.uniInfo.unable = false;
            } else {
                this.uniInfo.unable = true;
            }
        },
        'incInfo.mobile': function(curval) {
            if (curval != "") {
                this.incInfo.unable = false;
            } else {
                this.incInfo.unable = true;
            }
        },
    },
    mounted: function() {
        selectInitInput();
        selectInitPos();
        $(".main").css("height", EventUtils.getViewport().height - 246 + "px");
    }
})

// 清除页面绑定事件
window.onunload = function() {
    appTop.$off();
    appCont.$off();
}