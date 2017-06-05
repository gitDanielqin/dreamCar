// import $ from "../libs/jquery-3.1.0.min";
// var Vue = require("../libs/vue");
// require("../common/common")
// require("../components/dropdown")
// require("../components/pagination")
// require("../../css/base.css")
// require("../../css/widget.css")
// require("../../css/hrCenter.css")
var hrApp = new Vue({
    el: "#hr-app",
    data: {
        database: {
            posList: [
                "工业设计", "UI设计", "前端开发", "全部职位"
            ]
        },
        resumes: {
            show: true,
            resumeType: "全部类型",
            resumePos: "全部职位",
            unchecked: [
                { type: "unchecked", source: "企业直聘", name: "江玉海", uni: "中国美术学院", major: "工业设计", exp: "3年经验", scolar: "本科", applypos: "工业设计", applydate: "2017-01-30" },
                { type: "unchecked", source: "招聘会", name: "江玉海", uni: "中国美术学院", major: "工业设计", exp: "3年经验", scolar: "本科", applypos: "工业设计", applydate: "2017-01-30" },
                { type: "unchecked", source: "企业直聘", name: "江玉海", uni: "中国美术学院", major: "工业设计", exp: "3年经验", scolar: "本科", applypos: "工业设计", applydate: "2017-01-30" },
                { type: "unchecked", source: "企业直聘", name: "江玉海", uni: "中国美术学院", major: "工业设计", exp: "3年经验", scolar: "本科", applypos: "UI设计", applydate: "2017-01-30" }
            ],
            checked: [
                { type: "checked", source: "企业直聘", name: "江玉海", uni: "中国美术学院", major: "工业设计", exp: "3年经验", scolar: "本科", applypos: "工业设计", applydate: "2017-01-30" },
                { type: "checked", source: "企业直聘", name: "江玉海", uni: "中国美术学院", major: "工业设计", exp: "3年经验", scolar: "本科", applypos: "UI设计", applydate: "2017-01-30" }
            ],
        },
        interview: {
            show: false,
            interType: "全部类型",
            interPos: "全部职位",
            undecision: [
                { type: "unchecked", source: "招聘会", name: "江玉海", uni: "中国美术学院", major: "工业设计", exp: "3年经验", scolar: "本科", applypos: "工业设计", applydate: "2017-01-30" },
                { type: "unchecked", source: "企业直聘", name: "江玉海", uni: "中国美术学院", major: "工业设计", exp: "3年经验", scolar: "本科", applypos: "工业设计", applydate: "2017-01-30" },
                { type: "unchecked", source: "企业直聘", name: "江玉海", uni: "中国美术学院", major: "工业设计", exp: "3年经验", scolar: "本科", applypos: "UI设计", applydate: "2017-01-30" },
                { type: "unchecked", source: "企业直聘", name: "江玉海", uni: "中国美术学院", major: "工业设计", exp: "3年经验", scolar: "本科", applypos: "UI设计", applydate: "2017-01-30" }
            ],
            suitable: [
                { type: "suitable", source: "企业直聘", name: "江玉海", uni: "中国美术学院", major: "工业设计", exp: "3年经验", scolar: "本科", applypos: "UI设计", applydate: "2017-01-30" }
            ],
            unsuitable: [
                { type: "unsuitable", source: "企业直聘", name: "江玉海", uni: "中国美术学院", major: "工业设计", exp: "3年经验", scolar: "本科", applypos: "UI设计", applydate: "2017-01-30" },
                { type: "unsuitable", source: "企业直聘", name: "江玉海", uni: "中国美术学院", major: "工业设计", exp: "3年经验", scolar: "本科", applypos: "UI设计", applydate: "2017-01-30" },
                { type: "unsuitable", source: "企业直聘", name: "江玉海", uni: "中国美术学院", major: "工业设计", exp: "3年经验", scolar: "本科", applypos: "UI设计", applydate: "2017-01-30" }
            ],
        },
        interItems: [],
        resumeItems: [],
        direcPos: {
            show: false,
            posType: "全部类型",
            pos: "全部职位",
            items: [
                { type: "招聘会", pos: "岗位名称", salary: "7k-9k", major: "设计相关专业", worksexp: "1-3年经验", scolar: "本科", IncAddress: { province: "浙江省", city: "杭州市", district: "滨江区" }, posAmount: 2, IncName: "杭州煌巢信息科技有限公司", IncProps: "民营", IncScale: "100-150人", publicDate: "2010-11-11", publicTime: "24:00" },
                { type: "企业直聘", pos: "前端开发", salary: "7k-9k", major: "设计相关专业", worksexp: "1-3年经验", scolar: "本科", IncAddress: { province: "浙江省", city: "杭州市", district: "滨江区" }, posAmount: 2, IncName: "杭州煌巢信息科技有限公司", IncProps: "民营", IncScale: "100-150人", publicDate: "2010-11-11", publicTime: "24:00" },
                { type: "企业直聘", pos: "岗位名称", salary: "7k-9k", major: "设计相关专业", worksexp: "1-3年经验", scolar: "本科", IncAddress: { province: "浙江省", city: "杭州市", district: "滨江区" }, posAmount: 2, IncName: "杭州煌巢信息科技有限公司", IncProps: "民营", IncScale: "100-150人", publicDate: "2010-11-11", publicTime: "24:00" },
                { type: "招聘会", pos: "前端开发", salary: "7k-9k", major: "设计相关专业", worksexp: "1-3年经验", scolar: "本科", IncAddress: { province: "浙江省", city: "杭州市", district: "滨江区" }, posAmount: 2, IncName: "杭州煌巢信息科技有限公司", IncProps: "民营", IncScale: "100-150人", publicDate: "2010-11-11", publicTime: "24:00" },
            ]
        },
        recruitMeeting: {
            show: false,
            state: "全部状态",
            pos: "全部职位",
            items: [
                { uniname: "浙江大学", major: "工业设计", stuScale: "50人", UniAddress: { province: "浙江省", city: "杭州市", district: "滨江区" }, date: "2017-01-28", IncScale: "50-100人", IncProps: "上市", pos: "岗位名称", publicDate: "2017-11-11", publicTime: "24:00", coState: "合作中" },
                { uniname: "武汉大学", major: "工业设计", stuScale: "50人", UniAddress: { province: "浙江省", city: "杭州市", district: "滨江区" }, date: "2017-01-28", IncScale: "50-100人", IncProps: "上市", pos: "前端开发", publicDate: "2017-11-11", publicTime: "24:00", coState: "合作中" },
                { uniname: "浙江大学", major: "工业设计", stuScale: "50人", UniAddress: { province: "浙江省", city: "杭州市", district: "滨江区" }, date: "2017-01-28", IncScale: "50-100人", IncProps: "上市", pos: "岗位名称", publicDate: "2017-11-11", publicTime: "24:00", coState: "待反馈" },
                { uniname: "中国地质大学", major: "工业设计", stuScale: "50人", UniAddress: { province: "浙江省", city: "杭州市", district: "滨江区" }, date: "2017-01-28", IncScale: "50-100人", IncProps: "上市", pos: "前端开发", publicDate: "2017-11-11", publicTime: "24:00", coState: "不符合" },
            ]
        },
        combiPos: {
            show: true,
            state: "全部状态",
            pos: "全部职位",
            items: [
                { pos: "岗位名称", coMajor: "合作专业", stuScale: "合作人数", uniLevel: "高校性质", trainway: "高管到校", IncName: "企业名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", publicDate: "2017-1-1", publicTime: "24:00" },
                { pos: "岗位名称", coMajor: "合作专业", stuScale: "合作人数", uniLevel: "高校性质", trainway: "高管到校", IncName: "企业名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业企业所属行业", publicDate: "2017-1-1", publicTime: "24:00" },
                { pos: "岗位名称", coMajor: "合作专业", stuScale: "合作人数", uniLevel: "高校性质", trainway: "高管到校", IncName: "企业名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", publicDate: "2017-1-1", publicTime: "24:00" },
                { pos: "岗位名称", coMajor: "合作专业", stuScale: "合作人数", uniLevel: "高校性质", trainway: "高管到校", IncName: "企业名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", publicDate: "2017-1-1", publicTime: "24:00" },
            ]
        }

    },
    methods: {
        pass: function(item) {
            item.type = "suitable";
            this.interview.undecision.remove(item);
            this.interview.suitable.push(item);
        },
        interRefuse: function(item) {
            item.type = "unsuitable";
            this.interview.undecision.remove(item);
            this.interview.unsuitable.push(item);
        },
        colorState: function(state) {
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
        topage: function(index) {

        }
    },
    watch: {
        "resumes.resumeType": function(curval, oldval) {
            if (curval == "全部类型") {
                if (this.resumes.resumePos == "全部职位") {
                    $(".resume-box .info-items li").show();
                } else {
                    $(".resume-box .info-items li").hide();
                    $(".resume-box .info-items li[pos='" + this.resumes.resumePos + "']").show();
                }
            } else {
                $(".resume-box .info-items li").hide();
                if (this.resumes.resumePos == "全部职位") {
                    $(".resume-box .info-items li[source='" + curval + "']").show();
                } else {
                    $(".resume-box .info-items li[source='" + curval + "'][pos='" + this.resumes.resumePos + "']").show();
                }

            }
        },
        "resumes.resumePos": function(curval, oldval) {
            if (curval == "全部职位") {
                if (this.resumes.resumeType == "全部类型") {
                    $(".resume-box .info-items li").show();
                } else {
                    $(".resume-box .info-items li").hide();
                    $(".resume-box .info-items li[source='" + this.resumes.resumeType + "']").show();
                }
            } else {
                $(".resume-box .info-items li").hide();
                if (this.resumes.resumeType == "全部类型") {
                    $(".resume-box .info-items li[pos='" + curval + "']").show();
                } else {
                    $(".resume-box .info-items li[pos='" + curval + "'][source='" + this.resumes.resumeType + "']").show();
                }
            }
        },
        "interview.interType": function(curval, oldval) {
            if (curval == "全部类型") {
                if (this.interview.interPos == "全部职位") {
                    $(".interview-box .info-items li").show();
                } else {
                    $(".interview-box .info-items li").hide();
                    $(".interview-box .info-items li[pos='" + this.interview.interPos + "']").show();
                }
            } else {
                $(".interview-box .info-items li").hide();
                if (this.interview.interPos == "全部职位") {
                    $(".interview-box .info-items li[source='" + curval + "']").show();
                } else {
                    $(".interview-box .info-items li[source='" + curval + "'][pos='" + this.interview.interPos + "']").show();
                }

            }
        },
        "interview.interPos": function(curval, oldval) {
            if (curval == "全部职位") {
                if (this.interview.interType == "全部类型") {
                    $(".interview-box .info-items li").show();
                } else {
                    $(".interview-box .info-items li").hide();
                    $(".interview-box .info-items li[source='" + this.interview.interType + "']").show();
                }
            } else {
                $(".interview-box .info-items li").hide();
                if (this.interview.interType == "全部类型") {
                    $(".interview-box .info-items li[pos='" + curval + "']").show();
                } else {
                    $(".interview-box .info-items li[pos='" + curval + "'][source='" + this.interview.interType + "']").show();
                }
            }
        },
        "direcPos.posType": function(curval, oldval) {
            if (curval == "全部类型") {
                if (this.direcPos.pos == "全部职位") {
                    $(".direcpos-box .info-items li").show();
                } else {
                    $(".direcpos-box .info-items li").hide();
                    $(".direcpos-box .info-items li[pos='" + this.direcPos.pos + "']").show();
                }
            } else {
                $(".direcpos-box .info-items li").hide();
                if (this.direcPos.pos == "全部职位") {
                    $(".direcpos-box .info-items li[type='" + curval + "']").show();
                } else {
                    $(".direcpos-box .info-items li[type='" + curval + "'][pos='" + this.direcPos.pos + "']").show();
                }
            }
        },
        "direcPos.pos": function(curval, oldval) {
            if (curval == "全部职位") {
                if (this.direcPos.posType == "全部类型") {
                    $(".direcpos-box .info-items li").show();
                } else {
                    $(".direcpos-box .info-items li").hide();
                    $(".direcpos-box .info-items li[type='" + this.direcPos.posType + "']").show();
                }
            } else {
                $(".direcpos-box .info-items li").hide();
                if (this.direcPos.posType == "全部类型") {
                    $(".direcpos-box .info-items li[pos='" + curval + "']").show();
                } else {
                    $(".direcpos-box .info-items li[pos='" + curval + "'][type='" + this.direcPos.posType + "']").show();
                }
            }
        },
        "recruitMeeting.state": function(curval, oldval) {
            if (curval == "全部状态") {
                if (this.recruitMeeting.pos == "全部职位") {
                    $(".recruit-box .info-items li").show();
                } else {
                    $(".recruit-box .info-items li").hide();
                    $(".recruit-box .info-items li[pos='" + this.recruitMeeting.pos + "']").show();
                }
            } else {
                $(".recruit-box .info-items li").hide();
                if (this.recruitMeeting.pos == "全部职位") {
                    $(".recruit-box .info-items li[state='" + curval + "']").show();
                } else {
                    $(".recruit-box .info-items li[state='" + curval + "'][pos='" + this.recruitMeeting.pos + "']").show();
                }
            }
        },
        "recruitMeeting.pos": function(curval, oldval) {
            if (curval == "全部职位") {
                if (this.recruitMeeting.state == "全部状态") {
                    $(".recruit-box .info-items li").show();
                } else {
                    $(".recruit-box .info-items li").hide();
                    $(".recruit-box .info-items li[state='" + this.recruitMeeting.state + "']").show();
                }
            } else {
                $(".recruit-box .info-items li").hide();
                if (this.recruitMeeting.state == "全部状态") {
                    $(".recruit-box .info-items li[pos='" + curval + "']").show();
                } else {
                    $(".recruit-box .info-items li[pos='" + curval + "'][type='" + this.recruitMeeting.state + "']").show();
                }
            }
        }
    },
    components: {
        'pagination': pagination
    }
})


function init_center() {
    selectInitPos();
    selectEventBind();
    navEventBind();
}
init_center();

function selectInitPos() {
    $(".selectee input").each(function() {
        var bgPos = $(this).width() - 10 + "px center";
        $(this).attr("disabled", "true").css("background-position", bgPos);
    });
    $(".selectee ul").each(function() {
        var sibInput = $(this).siblings("input")
        $(this).width(sibInput.width() + 10);
        $(this).css({
            left: sibInput.css("margin-left"),
            top: sibInput.height()
        })
    });
}

function selectEventBind() {
    $(".selectee ul li").bind({
        "mouseover": function() {
            $(this).addClass("over");
        },
        "mouseout": function() {
            $(this).removeClass("over");
        },
        "click": function() {
            $(this).siblings(".selected").removeClass("selected");
            $(this).addClass("selected");
            $(this).parent().siblings("input").val($(this).text());
            $(this).parent().hide();
            return false;
        }
    });
    $(".selectee").bind("click", function() {
        $(".selectee ul").hide();
        $(this).children("ul").show();
        return false;
    });
    $("body").bind("click", function() {
        $(".selectee ul").hide();
    })
};

function navEventBind() {
    hrApp.resumeItems = hrApp.resumes.unchecked;
    $(".hr-navs li").each(function(index) {
        $(this).click(function() {
            $(".hr-navs li.on").removeClass("on");
            $(this).addClass("on");
            $(".main .mainCont").hide();
            $(".main .mainCont:nth-of-type(" + (index + 1) + ")").show();
        })
    });
    $(".pos-sider li").each(function(index) {
        $(this).click(function() {
            $(".pos-sider li.on").removeClass("on");
            $(this).addClass("on");
            $(".pos-resume .ListBox").hide();
            $(".pos-resume .ListBox:nth-of-type(" + (index + 1) + ")").show();
        })
    });
    $(".sider dt").click(function() {
        $(".sider dt.on").removeClass("on");
        $(this).addClass("on");
        if ($(this).attr("paneid") == "resume-box") {
            hrApp.interview.show = false;
            hrApp.resumes.show = true;
            hrApp.resumeItems = hrApp.resumes.unchecked;
        }
        if ($(this).attr("paneid") == "interview-box") {
            hrApp.resumes.show = false;
            hrApp.interview.show = true;
            hrApp.interItems = hrApp.interview.undecision;
        }
    });
    $(".sider .resume-unview").click(function() {
        $(".sider dd.on").removeClass("on");
        $(this).addClass("on");
        hrApp.interview.show = false;
        hrApp.resumes.show = true;
        hrApp.resumeItems = hrApp.resumes.unchecked;
    });
    $(".sider .resume-viewed").click(function() {
        $(".sider dd.on").removeClass("on");
        $(this).addClass("on");
        hrApp.interview.show = false;
        hrApp.resumes.show = true;
        hrApp.resumeItems = hrApp.resumes.checked;
    })
    $(".sider .inter-unsuit").click(function() {
        $(".sider dd.on").removeClass("on");
        $(this).addClass("on");
        hrApp.resumes.show = false;
        hrApp.interview.show = true;
        hrApp.interItems = hrApp.interview.unsuitable;
    });
    $(".sider .inter-suit").click(function() {
        $(".sider dd.on").removeClass("on");
        $(this).addClass("on");
        hrApp.resumes.show = false;
        hrApp.interview.show = true;
        hrApp.interItems = hrApp.interview.suitable;
    });

}