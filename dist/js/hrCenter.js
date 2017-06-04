webpackJsonp([13],{

/***/ 25:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vue = __webpack_require__(1);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(6);
__webpack_require__(2);
__webpack_require__(5);
__webpack_require__(25);
var hrApp = new Vue({
    el: "#hr-app",
    data: {
        database: {
            posList: ["工业设计", "UI设计", "前端开发", "全部职位"]
        },
        resumes: {
            show: true,
            resumeType: "全部类型",
            resumePos: "全部职位",
            unchecked: [{ type: "unchecked", source: "企业直聘", name: "江玉海", uni: "中国美术学院", major: "工业设计", exp: "3年经验", scolar: "本科", applypos: "工业设计", applydate: "2017-01-30" }, { type: "unchecked", source: "招聘会", name: "江玉海", uni: "中国美术学院", major: "工业设计", exp: "3年经验", scolar: "本科", applypos: "工业设计", applydate: "2017-01-30" }, { type: "unchecked", source: "企业直聘", name: "江玉海", uni: "中国美术学院", major: "工业设计", exp: "3年经验", scolar: "本科", applypos: "工业设计", applydate: "2017-01-30" }, { type: "unchecked", source: "企业直聘", name: "江玉海", uni: "中国美术学院", major: "工业设计", exp: "3年经验", scolar: "本科", applypos: "UI设计", applydate: "2017-01-30" }],
            checked: [{ type: "checked", source: "企业直聘", name: "江玉海", uni: "中国美术学院", major: "工业设计", exp: "3年经验", scolar: "本科", applypos: "工业设计", applydate: "2017-01-30" }, { type: "checked", source: "企业直聘", name: "江玉海", uni: "中国美术学院", major: "工业设计", exp: "3年经验", scolar: "本科", applypos: "UI设计", applydate: "2017-01-30" }]
        },
        interview: {
            show: false,
            interType: "全部类型",
            interPos: "全部职位",
            undecision: [{ type: "unchecked", source: "招聘会", name: "江玉海", uni: "中国美术学院", major: "工业设计", exp: "3年经验", scolar: "本科", applypos: "工业设计", applydate: "2017-01-30" }, { type: "unchecked", source: "企业直聘", name: "江玉海", uni: "中国美术学院", major: "工业设计", exp: "3年经验", scolar: "本科", applypos: "工业设计", applydate: "2017-01-30" }, { type: "unchecked", source: "企业直聘", name: "江玉海", uni: "中国美术学院", major: "工业设计", exp: "3年经验", scolar: "本科", applypos: "UI设计", applydate: "2017-01-30" }, { type: "unchecked", source: "企业直聘", name: "江玉海", uni: "中国美术学院", major: "工业设计", exp: "3年经验", scolar: "本科", applypos: "UI设计", applydate: "2017-01-30" }],
            suitable: [{ type: "suitable", source: "企业直聘", name: "江玉海", uni: "中国美术学院", major: "工业设计", exp: "3年经验", scolar: "本科", applypos: "UI设计", applydate: "2017-01-30" }],
            unsuitable: [{ type: "unsuitable", source: "企业直聘", name: "江玉海", uni: "中国美术学院", major: "工业设计", exp: "3年经验", scolar: "本科", applypos: "UI设计", applydate: "2017-01-30" }, { type: "unsuitable", source: "企业直聘", name: "江玉海", uni: "中国美术学院", major: "工业设计", exp: "3年经验", scolar: "本科", applypos: "UI设计", applydate: "2017-01-30" }, { type: "unsuitable", source: "企业直聘", name: "江玉海", uni: "中国美术学院", major: "工业设计", exp: "3年经验", scolar: "本科", applypos: "UI设计", applydate: "2017-01-30" }]
        },
        interItems: [],
        resumeItems: [],
        direcPos: {
            show: false,
            posType: "全部类型",
            pos: "全部职位",
            items: [{ type: "招聘会", pos: "岗位名称", salary: "7k-9k", major: "设计相关专业", worksexp: "1-3年经验", scolar: "本科", IncAddress: { province: "浙江省", city: "杭州市", district: "滨江区" }, posAmount: 2, IncName: "杭州煌巢信息科技有限公司", IncProps: "民营", IncScale: "100-150人", publicDate: "2010-11-11", publicTime: "24:00" }, { type: "企业直聘", pos: "前端开发", salary: "7k-9k", major: "设计相关专业", worksexp: "1-3年经验", scolar: "本科", IncAddress: { province: "浙江省", city: "杭州市", district: "滨江区" }, posAmount: 2, IncName: "杭州煌巢信息科技有限公司", IncProps: "民营", IncScale: "100-150人", publicDate: "2010-11-11", publicTime: "24:00" }, { type: "企业直聘", pos: "岗位名称", salary: "7k-9k", major: "设计相关专业", worksexp: "1-3年经验", scolar: "本科", IncAddress: { province: "浙江省", city: "杭州市", district: "滨江区" }, posAmount: 2, IncName: "杭州煌巢信息科技有限公司", IncProps: "民营", IncScale: "100-150人", publicDate: "2010-11-11", publicTime: "24:00" }, { type: "招聘会", pos: "前端开发", salary: "7k-9k", major: "设计相关专业", worksexp: "1-3年经验", scolar: "本科", IncAddress: { province: "浙江省", city: "杭州市", district: "滨江区" }, posAmount: 2, IncName: "杭州煌巢信息科技有限公司", IncProps: "民营", IncScale: "100-150人", publicDate: "2010-11-11", publicTime: "24:00" }]
        },
        recruitMeeting: {
            show: false,
            state: "全部状态",
            pos: "全部职位",
            items: [{ uniname: "浙江大学", major: "工业设计", stuScale: "50人", UniAddress: { province: "浙江省", city: "杭州市", district: "滨江区" }, date: "2017-01-28", IncScale: "50-100人", IncProps: "上市", pos: "岗位名称", publicDate: "2017-11-11", publicTime: "24:00", coState: "合作中" }, { uniname: "武汉大学", major: "工业设计", stuScale: "50人", UniAddress: { province: "浙江省", city: "杭州市", district: "滨江区" }, date: "2017-01-28", IncScale: "50-100人", IncProps: "上市", pos: "前端开发", publicDate: "2017-11-11", publicTime: "24:00", coState: "合作中" }, { uniname: "浙江大学", major: "工业设计", stuScale: "50人", UniAddress: { province: "浙江省", city: "杭州市", district: "滨江区" }, date: "2017-01-28", IncScale: "50-100人", IncProps: "上市", pos: "岗位名称", publicDate: "2017-11-11", publicTime: "24:00", coState: "待反馈" }, { uniname: "中国地质大学", major: "工业设计", stuScale: "50人", UniAddress: { province: "浙江省", city: "杭州市", district: "滨江区" }, date: "2017-01-28", IncScale: "50-100人", IncProps: "上市", pos: "前端开发", publicDate: "2017-11-11", publicTime: "24:00", coState: "不符合" }]
        },
        combiPos: {
            show: true,
            state: "全部状态",
            pos: "全部职位",
            items: [{ pos: "岗位名称", coMajor: "合作专业", stuScale: "合作人数", uniLevel: "高校性质", trainway: "高管到校", IncName: "企业名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", publicDate: "2017-1-1", publicTime: "24:00" }, { pos: "岗位名称", coMajor: "合作专业", stuScale: "合作人数", uniLevel: "高校性质", trainway: "高管到校", IncName: "企业名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业企业所属行业", publicDate: "2017-1-1", publicTime: "24:00" }, { pos: "岗位名称", coMajor: "合作专业", stuScale: "合作人数", uniLevel: "高校性质", trainway: "高管到校", IncName: "企业名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", publicDate: "2017-1-1", publicTime: "24:00" }, { pos: "岗位名称", coMajor: "合作专业", stuScale: "合作人数", uniLevel: "高校性质", trainway: "高管到校", IncName: "企业名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", publicDate: "2017-1-1", publicTime: "24:00" }]
        }

    },
    methods: {
        pass: function pass(item) {
            item.type = "suitable";
            this.interview.undecision.remove(item);
            this.interview.suitable.push(item);
        },
        interRefuse: function interRefuse(item) {
            item.type = "unsuitable";
            this.interview.undecision.remove(item);
            this.interview.unsuitable.push(item);
        },
        colorState: function colorState(state) {
            var mystyle;
            switch (state) {
                case "合作中":
                    mystyle = { color: "#ff9933" };
                    break;
                case "待反馈":
                    mystyle = { color: "#59b7e9" };
                    break;
                case "不符合":
                    mystyle = { color: "#ff3333" };
                    break;
            };
            return mystyle;
        },
        topage: function topage(index) {}
    },
    watch: {
        "resumes.resumeType": function resumesResumeType(curval, oldval) {
            if (curval == "全部类型") {
                if (this.resumes.resumePos == "全部职位") {
                    (0, _jquery2.default)(".resume-box .info-items li").show();
                } else {
                    (0, _jquery2.default)(".resume-box .info-items li").hide();
                    (0, _jquery2.default)(".resume-box .info-items li[pos='" + this.resumes.resumePos + "']").show();
                }
            } else {
                (0, _jquery2.default)(".resume-box .info-items li").hide();
                if (this.resumes.resumePos == "全部职位") {
                    (0, _jquery2.default)(".resume-box .info-items li[source='" + curval + "']").show();
                } else {
                    (0, _jquery2.default)(".resume-box .info-items li[source='" + curval + "'][pos='" + this.resumes.resumePos + "']").show();
                }
            }
        },
        "resumes.resumePos": function resumesResumePos(curval, oldval) {
            if (curval == "全部职位") {
                if (this.resumes.resumeType == "全部类型") {
                    (0, _jquery2.default)(".resume-box .info-items li").show();
                } else {
                    (0, _jquery2.default)(".resume-box .info-items li").hide();
                    (0, _jquery2.default)(".resume-box .info-items li[source='" + this.resumes.resumeType + "']").show();
                }
            } else {
                (0, _jquery2.default)(".resume-box .info-items li").hide();
                if (this.resumes.resumeType == "全部类型") {
                    (0, _jquery2.default)(".resume-box .info-items li[pos='" + curval + "']").show();
                } else {
                    (0, _jquery2.default)(".resume-box .info-items li[pos='" + curval + "'][source='" + this.resumes.resumeType + "']").show();
                }
            }
        },
        "interview.interType": function interviewInterType(curval, oldval) {
            if (curval == "全部类型") {
                if (this.interview.interPos == "全部职位") {
                    (0, _jquery2.default)(".interview-box .info-items li").show();
                } else {
                    (0, _jquery2.default)(".interview-box .info-items li").hide();
                    (0, _jquery2.default)(".interview-box .info-items li[pos='" + this.interview.interPos + "']").show();
                }
            } else {
                (0, _jquery2.default)(".interview-box .info-items li").hide();
                if (this.interview.interPos == "全部职位") {
                    (0, _jquery2.default)(".interview-box .info-items li[source='" + curval + "']").show();
                } else {
                    (0, _jquery2.default)(".interview-box .info-items li[source='" + curval + "'][pos='" + this.interview.interPos + "']").show();
                }
            }
        },
        "interview.interPos": function interviewInterPos(curval, oldval) {
            if (curval == "全部职位") {
                if (this.interview.interType == "全部类型") {
                    (0, _jquery2.default)(".interview-box .info-items li").show();
                } else {
                    (0, _jquery2.default)(".interview-box .info-items li").hide();
                    (0, _jquery2.default)(".interview-box .info-items li[source='" + this.interview.interType + "']").show();
                }
            } else {
                (0, _jquery2.default)(".interview-box .info-items li").hide();
                if (this.interview.interType == "全部类型") {
                    (0, _jquery2.default)(".interview-box .info-items li[pos='" + curval + "']").show();
                } else {
                    (0, _jquery2.default)(".interview-box .info-items li[pos='" + curval + "'][source='" + this.interview.interType + "']").show();
                }
            }
        },
        "direcPos.posType": function direcPosPosType(curval, oldval) {
            if (curval == "全部类型") {
                if (this.direcPos.pos == "全部职位") {
                    (0, _jquery2.default)(".direcpos-box .info-items li").show();
                } else {
                    (0, _jquery2.default)(".direcpos-box .info-items li").hide();
                    (0, _jquery2.default)(".direcpos-box .info-items li[pos='" + this.direcPos.pos + "']").show();
                }
            } else {
                (0, _jquery2.default)(".direcpos-box .info-items li").hide();
                if (this.direcPos.pos == "全部职位") {
                    (0, _jquery2.default)(".direcpos-box .info-items li[type='" + curval + "']").show();
                } else {
                    (0, _jquery2.default)(".direcpos-box .info-items li[type='" + curval + "'][pos='" + this.direcPos.pos + "']").show();
                }
            }
        },
        "direcPos.pos": function direcPosPos(curval, oldval) {
            if (curval == "全部职位") {
                if (this.direcPos.posType == "全部类型") {
                    (0, _jquery2.default)(".direcpos-box .info-items li").show();
                } else {
                    (0, _jquery2.default)(".direcpos-box .info-items li").hide();
                    (0, _jquery2.default)(".direcpos-box .info-items li[type='" + this.direcPos.posType + "']").show();
                }
            } else {
                (0, _jquery2.default)(".direcpos-box .info-items li").hide();
                if (this.direcPos.posType == "全部类型") {
                    (0, _jquery2.default)(".direcpos-box .info-items li[pos='" + curval + "']").show();
                } else {
                    (0, _jquery2.default)(".direcpos-box .info-items li[pos='" + curval + "'][type='" + this.direcPos.posType + "']").show();
                }
            }
        },
        "recruitMeeting.state": function recruitMeetingState(curval, oldval) {
            if (curval == "全部状态") {
                if (this.recruitMeeting.pos == "全部职位") {
                    (0, _jquery2.default)(".recruit-box .info-items li").show();
                } else {
                    (0, _jquery2.default)(".recruit-box .info-items li").hide();
                    (0, _jquery2.default)(".recruit-box .info-items li[pos='" + this.recruitMeeting.pos + "']").show();
                }
            } else {
                (0, _jquery2.default)(".recruit-box .info-items li").hide();
                if (this.recruitMeeting.pos == "全部职位") {
                    (0, _jquery2.default)(".recruit-box .info-items li[state='" + curval + "']").show();
                } else {
                    (0, _jquery2.default)(".recruit-box .info-items li[state='" + curval + "'][pos='" + this.recruitMeeting.pos + "']").show();
                }
            }
        },
        "recruitMeeting.pos": function recruitMeetingPos(curval, oldval) {
            if (curval == "全部职位") {
                if (this.recruitMeeting.state == "全部状态") {
                    (0, _jquery2.default)(".recruit-box .info-items li").show();
                } else {
                    (0, _jquery2.default)(".recruit-box .info-items li").hide();
                    (0, _jquery2.default)(".recruit-box .info-items li[state='" + this.recruitMeeting.state + "']").show();
                }
            } else {
                (0, _jquery2.default)(".recruit-box .info-items li").hide();
                if (this.recruitMeeting.state == "全部状态") {
                    (0, _jquery2.default)(".recruit-box .info-items li[pos='" + curval + "']").show();
                } else {
                    (0, _jquery2.default)(".recruit-box .info-items li[pos='" + curval + "'][type='" + this.recruitMeeting.state + "']").show();
                }
            }
        }
    },
    components: {
        'pagination': pagination
    }
});

function init_center() {
    selectInitPos();
    selectEventBind();
    navEventBind();
}
init_center();

function selectInitPos() {
    (0, _jquery2.default)(".selectee input").each(function () {
        var bgPos = (0, _jquery2.default)(this).width() - 10 + "px center";
        (0, _jquery2.default)(this).attr("disabled", "true").css("background-position", bgPos);
    });
    (0, _jquery2.default)(".selectee ul").each(function () {
        var sibInput = (0, _jquery2.default)(this).siblings("input");
        (0, _jquery2.default)(this).width(sibInput.width() + 10);
        (0, _jquery2.default)(this).css({
            left: sibInput.css("margin-left"),
            top: sibInput.height()
        });
    });
}

function selectEventBind() {
    (0, _jquery2.default)(".selectee ul li").bind({
        "mouseover": function mouseover() {
            (0, _jquery2.default)(this).addClass("over");
        },
        "mouseout": function mouseout() {
            (0, _jquery2.default)(this).removeClass("over");
        },
        "click": function click() {
            (0, _jquery2.default)(this).siblings(".selected").removeClass("selected");
            (0, _jquery2.default)(this).addClass("selected");
            (0, _jquery2.default)(this).parent().siblings("input").val((0, _jquery2.default)(this).text());
            (0, _jquery2.default)(this).parent().hide();
            return false;
        }
    });
    (0, _jquery2.default)(".selectee").bind("click", function () {
        (0, _jquery2.default)(".selectee ul").hide();
        (0, _jquery2.default)(this).children("ul").show();
        return false;
    });
    (0, _jquery2.default)("body").bind("click", function () {
        (0, _jquery2.default)(".selectee ul").hide();
    });
};

function navEventBind() {
    hrApp.resumeItems = hrApp.resumes.unchecked;
    (0, _jquery2.default)(".hr-navs li").each(function (index) {
        (0, _jquery2.default)(this).click(function () {
            (0, _jquery2.default)(".hr-navs li.on").removeClass("on");
            (0, _jquery2.default)(this).addClass("on");
            (0, _jquery2.default)(".main .mainCont").hide();
            (0, _jquery2.default)(".main .mainCont:nth-of-type(" + (index + 1) + ")").show();
        });
    });
    (0, _jquery2.default)(".pos-sider li").each(function (index) {
        (0, _jquery2.default)(this).click(function () {
            (0, _jquery2.default)(".pos-sider li.on").removeClass("on");
            (0, _jquery2.default)(this).addClass("on");
            (0, _jquery2.default)(".pos-resume .ListBox").hide();
            (0, _jquery2.default)(".pos-resume .ListBox:nth-of-type(" + (index + 1) + ")").show();
        });
    });
    (0, _jquery2.default)(".sider dt").click(function () {
        (0, _jquery2.default)(".sider dt.on").removeClass("on");
        (0, _jquery2.default)(this).addClass("on");
        if ((0, _jquery2.default)(this).attr("paneid") == "resume-box") {
            hrApp.interview.show = false;
            hrApp.resumes.show = true;
            hrApp.resumeItems = hrApp.resumes.unchecked;
        }
        if ((0, _jquery2.default)(this).attr("paneid") == "interview-box") {
            hrApp.resumes.show = false;
            hrApp.interview.show = true;
            hrApp.interItems = hrApp.interview.undecision;
        }
    });
    (0, _jquery2.default)(".sider .resume-unview").click(function () {
        (0, _jquery2.default)(".sider dd.on").removeClass("on");
        (0, _jquery2.default)(this).addClass("on");
        hrApp.interview.show = false;
        hrApp.resumes.show = true;
        hrApp.resumeItems = hrApp.resumes.unchecked;
    });
    (0, _jquery2.default)(".sider .resume-viewed").click(function () {
        (0, _jquery2.default)(".sider dd.on").removeClass("on");
        (0, _jquery2.default)(this).addClass("on");
        hrApp.interview.show = false;
        hrApp.resumes.show = true;
        hrApp.resumeItems = hrApp.resumes.checked;
    });
    (0, _jquery2.default)(".sider .inter-unsuit").click(function () {
        (0, _jquery2.default)(".sider dd.on").removeClass("on");
        (0, _jquery2.default)(this).addClass("on");
        hrApp.resumes.show = false;
        hrApp.interview.show = true;
        hrApp.interItems = hrApp.interview.unsuitable;
    });
    (0, _jquery2.default)(".sider .inter-suit").click(function () {
        (0, _jquery2.default)(".sider dd.on").removeClass("on");
        (0, _jquery2.default)(this).addClass("on");
        hrApp.resumes.show = false;
        hrApp.interview.show = true;
        hrApp.interItems = hrApp.interview.suitable;
    });
}

/***/ })

},[45]);