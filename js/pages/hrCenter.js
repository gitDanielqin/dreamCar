// import $ from "../libs/jquery-3.1.0.min";
// var Vue = require("../libs/vue");
// require("../common/common")
// require("../components/dropdown")
// require("../components/pagination")
// require("../../css/base.css")
// require("../../css/widget.css")
// require("../../css/hrCenter.css")

var parObj = EventUtils.urlExtrac(window.location);
var respObj = {};
var mapper = {}; //岗位,招聘会日期与id的对应表 
function infoRequest() {
    EventUtils.ajaxReq("/hrcenter/getDownList", "get", { userId: parObj.userId }, function(resp, status) {
        console.log(resp);
        for (var i = 0; i < resp.data.recruitList.length; i++) {
            resp.data.recruitList[i].job = EventUtils.infoExtrac(resp.data.recruitList[i].job);
        }
        //存储对应关系
        mapper.recruit = resp.data.recruitList;
        mapper.jobfair = resp.data.jobFairList;
        //提取直聘岗位信息
        var recruitArray = [];
        for (var j = 0; j < resp.data.recruitList.length; j++) {
            recruitArray.push(resp.data.recruitList[j].job);
        }
        //提取招聘会日期信息
        var jobfairArray = [];
        for (var k = 0; k < resp.data.jobFairList.length; k++) {
            jobfairArray.push(resp.data.jobFairList[k].startTime);
        }
        hrApp.database.posList = recruitArray;
        hrApp.database.jobfairList = jobfairArray;
        //  console.log(resp);
        if (!parObj.jobfairId && !parObj.recruitId) { //既没有招聘ID又没有直聘ID,从HR中心按钮过来的
            hrApp.resumes.resumePos = recruitArray[0];
        }
    })
    if (parObj.jobfairId) {
        jobfairRequest(parObj.jobfairId, 0, 1, parObj.jobfairId);

    };
    if (parObj.recruitId) {
        recruitRequest(parObj.recruitId, 0, 1, parObj.recruitId);

    }
}
var appTop = new Vue({
    el: "#app-top",
    data: {
        homeLink: EventUtils.securityUrl("index.html?userId=" + parObj.userId),
        centerLink: EventUtils.securityUrl("incCenter.html?userId=" + parObj.userId + "&loginId=" + parObj.loginId)
    },
    methods: {
        showMsg: function() {
            appModal.show.message = true;
            appModal.show.modal = true;
        }
    }
})
var hrApp = new Vue({
    el: "#hr-app",
    data: {
        database: {
            posList: [],
            jobfairList: []
        },
        show: {
            cvmanager: true,
        },
        resumes: {
            totalitems: 0,
            totalpages: 1,
            curpage: 1,
            handleCount: 0, //新投递消息参数
            resultIndex: 0, //侧边栏点击参数 0-5
            resumeType: "企业直聘",
            resumePos: "", //招聘岗位下拉框选项
            jobfairDate: "", //招聘会日期下拉框选项
            cvList: []
        },
        interItems: [],
        resumeItems: [],
        position: {
            show: false,
            totalpages: 1,
            totalitems: 0,
            curpage: 1,
            posType: 0, //0 企业直聘 1 招聘会
            results: []
        },
    },
    methods: {
        hrnav: function(obj) {
            if (!$(obj).hasClass("hr-navs")) {
                $(".hr-navs .on").removeClass("on");
                $(obj).addClass("on");
            }
            if ($(obj).hasClass("cv-manager")) {
                this.show.cvmanager = true;
            }
            if ($(obj).hasClass("pos-manager")) {
                this.show.cvmanager = false;
                $(".pos-sider .on").trigger("click");
            }
        },
        showpage: function(totalpages) {
            if (totalpages > 3) {
                return 3;
            } else {
                return totalpages;
            }
        },
        infoExtrac: function(text) {
            return EventUtils.infoExtrac(text);
        },
        infoShow: function(text, type) {
            return EventUtils.infoShow(text, type)
        },
        cityExtrac: function(text) {
            if (text) {
                return text.split(";")[1]
            } else {
                return "";
            }
        },
        topage: function(page, type) {
            console.log(type);
            if (type == "cv") {
                if (this.resumes.resumeType == "企业直聘") {
                    recruitRequest(this.resumes.resumePos, this.resumes.resultIndex, page);
                }
                if (this.resumes.resumeType == "招聘会") {
                    console.log(2);
                    jobfairRequest(this.resumes.jobfairDate, this.resumes.resultIndex, page);
                }
            };
            if (type == "position") {
                positionRequest(this.position.posType, page);
            }
        },
        selnav: function(obj) {
            if (!$(obj).hasClass("sider")) {
                $(".mainCont .sider .on").removeClass("on");
                $(obj).addClass("on");
            }
            if ($(obj).hasClass("resume-box")) {
                if (this.resumes.resumeType == "招聘会") {
                    jobfairRequest(this.resumes.jobfairDate, 0, 1);
                } else {
                    recruitRequest(this.resumes.resumePos, 0, 1);
                }
            }
            if ($(obj).hasClass("resume-unview")) {
                if (this.resumes.resumeType == "招聘会") {
                    jobfairRequest(this.resumes.jobfairDate, 1, 1);
                } else {
                    recruitRequest(this.resumes.resumePos, 1, 1);
                }
            };
            if ($(obj).hasClass("resume-viewed")) {
                if (this.resumes.resumeType == "招聘会") {
                    jobfairRequest(this.resumes.jobfairDate, 2, 1);
                } else {
                    recruitRequest(this.resumes.resumePos, 2, 1);
                }
            };
            if ($(obj).hasClass("interview-box")) {
                if (this.resumes.resumeType == "招聘会") {
                    jobfairRequest(this.resumes.jobfairDate, 3, 1);
                } else {
                    recruitRequest(this.resumes.resumePos, 3, 1);
                }
            };
            if ($(obj).hasClass("inter-unsuit")) {
                if (this.resumes.resumeType == "招聘会") {
                    jobfairRequest(this.resumes.jobfairDate, 4, 1);
                } else {
                    recruitRequest(this.resumes.resumePos, 4, 1);
                }
            }
            if ($(obj).hasClass("inter-suit")) {
                if (this.resumes.resumeType == "招聘会") {
                    jobfairRequest(this.resumes.jobfairDate, 5, 1);
                } else {
                    recruitRequest(this.resumes.resumePos, 5, 1);
                }
            }
        },
        invite: function(item) {
            console.log(item);
            if (item.jobFairId) {
                var postdata = {
                    applyId: item.applyId,
                    result: 3
                };
                EventUtils.ajaxReq("/hrcenter/modifyJobFairInfo", "post", postdata, function(resp, status) {
                    if (hrApp.resumes.cvList.length == 1 && hrApp.resumes.curpage > 1) {
                        hrApp.resumes.curpage--;
                    }
                    $(".resumeBox .pagination a.page").eq(hrApp.resumes.curpage - 1).parent().trigger("click");
                })
            };
            if (item.recruitId) {
                var postdata = {
                    applyId: item.applyId,
                    result: 3
                };
                EventUtils.ajaxReq("/hrcenter/modifyRecruitInfo", "post", postdata, function(resp, status) {
                    if (hrApp.resumes.cvList.length == 1 && hrApp.resumes.curpage > 1) {
                        hrApp.resumes.curpage--;
                    }
                    $(".resumeBox .pagination a.page").eq(hrApp.resumes.curpage - 1).parent().trigger("click");
                })
            }
        },
        deny: function(item) {
            if (item.jobFairId) {
                var postdata = {
                    applyId: item.applyId,
                    result: 2
                };
                EventUtils.ajaxReq("/hrcenter/modifyJobFairInfo", "post", postdata, function(resp, status) {
                    if (hrApp.resumes.cvList.length == 1 && hrApp.resumes.curpage > 1) {
                        hrApp.resumes.curpage--;
                    }
                    $(".resumeBox .pagination a.page").eq(hrApp.resumes.curpage - 1).parent().trigger("click");
                })
            };
            if (item.recruitId) {
                var postdata = {
                    applyId: item.applyId,
                    result: 2
                };
                EventUtils.ajaxReq("/hrcenter/modifyRecruitInfo", "post", postdata, function(resp, status) {
                    if (hrApp.resumes.cvList.length == 1 && hrApp.resumes.curpage > 1) {
                        hrApp.resumes.curpage--;
                    }
                    $(".resumeBox .pagination a.page").eq(hrApp.resumes.curpage - 1).parent().trigger("click");
                })
            }
        },
        passCv: function(item) {
            if (item.jobFairId) {
                var postdata = {
                    applyId: item.applyId,
                    result: 1
                };
                EventUtils.ajaxReq("/hrcenter/modifyJobFairInfo", "post", postdata, function(resp, status) {
                    if (hrApp.resumes.cvList.length == 1 && hrApp.resumes.curpage > 1) {
                        hrApp.resumes.curpage--;
                    }
                    $(".resumeBox .pagination a.page").eq(hrApp.resumes.curpage - 1).parent().trigger("click");
                })
            };
            if (item.recruitId) {
                var postdata = {
                    applyId: item.applyId,
                    result: 1
                };
                EventUtils.ajaxReq("/hrcenter/modifyRecruitInfo", "post", postdata, function(resp, status) {
                    if (hrApp.resumes.cvList.length == 1 && hrApp.resumes.curpage > 1) {
                        hrApp.resumes.curpage--;
                    }
                    $(".resumeBox .pagination a.page").eq(hrApp.resumes.curpage - 1).parent().trigger("click");
                })
            }
        },
        showCv: function(item) {
            EventUtils.ajaxReq("/user/user/getInfo", "get", { userId: item.userId }, function(resp, status) {
                var respObj = resp.data;
                //    console.log(respObj);
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
                appModal.baseInfo = briefdata;
                $(".porto-img").html("<img src='" + respObj.userInfo.userIcon + "' />");
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
                        startyear: respObj.companyList[i].startTime ? respObj.companyList[i].startTime.split("-")[0] : "",
                        startmonth: respObj.companyList[i].startTime ? respObj.companyList[i].startTime.split("-")[1] : "",
                        endyear: respObj.companyList[i].endTime ? respObj.companyList[i].endTime.split("-")[0] : "",
                        endmonth: respObj.companyList[i].endTime ? respObj.companyList[i].endTime.split("-")[1] : "",
                        resp: respObj.companyList[i].content
                    };
                    worksExps.push(workexp);
                }
                var edus = [];
                for (var j = 0; j < respObj.eduList.length; j++) {
                    var edu = {
                        show: j == 0,
                        cvEduId: respObj.eduList[j].cvEduId,
                        uni: respObj.eduList[j].schoolName,
                        major: respObj.eduList[j].professional ? respObj.eduList[j].professional.split(";")[0] : "",
                        submajor: respObj.eduList[j].professional ? respObj.eduList[j].professional.split(";")[1] : "",
                        exmajor: respObj.eduList[j].professional ? respObj.eduList[j].professional.split(";")[2] : "",
                        startyear: respObj.eduList[j].startTime ? respObj.eduList[j].startTime.split("-")[0] : "",
                        startmonth: respObj.eduList[j].startTime ? respObj.eduList[j].startTime.split("-")[1] : "",
                        endyear: respObj.eduList[j].endTime ? respObj.eduList[j].endTime.split("-")[0] : "",
                        endmonth: respObj.eduList[j].endTime ? respObj.eduList[j].endTime.split("-")[1] : "",
                        qualification: respObj.eduList[j].qualification,
                    };
                    edus.push(edu);
                }
                var projects = [];
                for (var k = 0; k < respObj.projectList.length; k++) {
                    var project = {
                        show: k == 0,
                        cvProId: respObj.projectList[k].cvProId,
                        name: respObj.projectList[k].projectName,
                        firma: respObj.projectList[k].companyName,
                        startyear: respObj.projectList[k].startTime ? respObj.projectList[k].startTime.split("-")[0] : "",
                        startmonth: respObj.projectList[k].startTime ? respObj.projectList[k].startTime.split("-")[1] : "",
                        endyear: respObj.projectList[k].endTime ? respObj.projectList[k].endTime.split("-")[0] : "",
                        endmonth: respObj.projectList[k].endTime ? respObj.projectList[k].endTime.split("-")[1] : "",
                        desc: respObj.projectList[k].description,
                        resp: respObj.projectList[k].position,
                        achiev: respObj.projectList[k].achievement
                    }
                    projects.push(project);
                }
                var cvInfo = {
                    firstEdit: false,
                    realName: respObj.userInfo.realName, //5 
                    family: familyStatus, //5
                    phone: respObj.userInfo.mobile, //5
                    email: respObj.userInfo.email, //5
                    nativePlace: respObj.userInfo.nativePlace, //5
                    nation: respObj.userInfo.nation, //5
                    curWorksIndex: 1,
                    expect: { //20
                        tradeItems: respObj.cvInfo.expJob,
                        posItems: respObj.cvInfo.expJobFunction,
                        province: respObj.cvInfo.expPlace ? respObj.cvInfo.expPlace.split(";")[0] : "",
                        city: respObj.cvInfo.expPlace ? respObj.cvInfo.expPlace.split(";")[1] : "",
                        district: respObj.cvInfo.expPlace ? respObj.cvInfo.expPlace.split(";")[2] : "",
                        salary: respObj.cvInfo.expSalary
                    },
                    worksExps: worksExps, //10
                    edus: edus, //10
                    projects: projects, //10
                    laSkills: respObj.cvInfo.languages, //5
                    selfEval: respObj.cvInfo.evaluation, //5
                    psInfo: respObj.cvInfo.anymore, //5
                    skills: respObj.cvInfo.speciality //5
                };
                appModal.resumeInfo = cvInfo;
                appModal.show.cv = true;
                appModal.show.modal = true;
            });
            if (item.jobFairId) {
                var postdata = {
                    applyId: item.applyId,
                };
                EventUtils.ajaxReq("/hrcenter/readJobFair", "post", postdata, function(resp, status) {

                })
            };
            if (item.recruitId) {
                var postdata = {
                    applyId: item.applyId,
                };
                EventUtils.ajaxReq("/hrcenter/readRecruit", "post", postdata, function(resp, status) {

                })
            }
        },
        modItem: function(item) {
            var link = "incRequire.html?new=0&userId=" + parObj.userId + "&loginId=" + parObj.loginId;
            if (item.jobFairId) {
                link += "&jobfairId=" + item.jobFairId + "&demandSrc=1";
            }
            if (item.recruitId) {
                link += "&recruitId=" + item.recruitId + "&demandSrc=2";
            }
            link = EventUtils.securityUrl(link);
            window.open(link, "_blank");
        },
        delItem: function(item) {
            if (item.jobFairId) {
                var postdata = {
                    userId: parObj.userId,
                    loginIdentifier: parObj.loginId,
                    jobFairId: item.jobFairId
                }
                EventUtils.ajaxReq("/jobfair/delInfo", "post", postdata, function(resp, status) {
                    if (hrApp.position.results.length == 1 && hrApp.position.curpage > 1) {
                        hrApp.position.curpage -= 1;
                    }
                    $(".posCont .pagination a.page").eq(hrApp.position.curpage - 1).parent().trigger("click");
                })
            }
            if (item.recruitId) {
                var postdata = {
                    userId: parObj.userId,
                    loginIdentifier: parObj.loginId,
                    recruitId: item.recruitId
                }

                EventUtils.ajaxReq("/recruit/delInfo", "post", postdata, function(resp, status) {
                    if (hrApp.position.results.length == 1 && hrApp.position.curpage > 1) {
                        hrApp.position.curpage -= 1;
                    }
                    $(".posCont .pagination a.page").eq(hrApp.position.curpage - 1).parent().trigger("click");
                })
            }
        },
        freshItem: function(item) {
            appModal.fresh.freshItem = item;
            appModal.show.freshbox = true;
            appModal.show.modal = true;
        },
        stickItem: function(item) {
            appModal.sticky.stickItem = item;
            appModal.show.stickybox = true;
            appModal.show.modal = true;
        },
        selpos: function(obj) {
            if ($(obj).hasClass("pos-jobfair")) {
                positionRequest(0, 1);
                $(".pos-sider .on").removeClass("on");
                $(obj).addClass("on");
            }
            if ($(obj).hasClass("pos-recruit")) {
                positionRequest(1, 1);
                $(".pos-sider .on").removeClass("on");
                $(obj).addClass("on");
            }
        },
        requireLink: function(item) {
            if (item.recruitId) {
                var link = "detail-position.html?userId=" + parObj.userId + "&recruitId=" + item.recruitId;
            }
            if (item.jobFairId) {
                var link = "detail-increcruit.html?userId=" + parObj.userId + "&jobfairId=" + item.jobFairId;
            }
            link = EventUtils.securityUrl(link);
            return link;
        },
        publish: function() {
            var link = "incRequire.html?new=1&userId=" + parObj.userId + "&loginId=" + parObj.loginId;
            link = EventUtils.securityUrl(link);
            window.open(link, "_blank");
        }
    },
    watch: {
        "resumes.resumeType": function(curval) {
            if (curval == "招聘会") {
                if (this.resumes.jobfairDate == "") {
                    this.resumes.jobfairDate = this.database.jobfairList[0];
                } else {
                    jobfairRequest(this.resumes.jobfairDate, this.resumes.resultIndex, 1);
                }
            } else if (curval == "企业直聘") {
                if (this.resumes.resumePos == "") {
                    this.resumes.resumePos = this.database.posList[0];
                } else {
                    recruitRequest(this.resumes.resumePos, this.resumes.resultIndex, 1);
                }
            }
            this.$nextTick(function() {
                selectInitPos();
            })
        },
        'resumes.resumePos': function(curval) {
            recruitRequest(curval, this.resumes.resultIndex, 1);
        },
        'resumes.jobfairDate': function(curval) {
            jobfairRequest(curval, this.resumes.resultIndex, 1);
        },
    },
    components: {
        'pagination': pagination
    }
})

var appFooter = new Vue({
    el: "#app-footer",
    data: {
        userId: parObj.userId
    }
})
var appModal = new Vue({
    el: "#app-modal",
    data: {
        show: {
            modal: false,
            cv: false,
            message: false,
            freshbox: false,
            stickybox: false
        },
        account: {
            userId: parObj.userId
        },
        baseInfo: {
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
        resumeInfo: {
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
                startyear: "",
                startmonth: "",
                endyear: "",
                endmonth: "",
                resp: ""
            }],
            edus: [{
                show: true,
                uni: "",
                major: "",
                submajor: "",
                exmajor: "",
                startyear: "",
                startmonth: "",
                endyear: "",
                endmonth: "",
                qualification: "",
            }],
            projects: [{
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
            }],
            laSkills: [],
            selfEval: "",
            psInfo: "",
            skills: ""
        },
        fresh: {
            freshItem: null
        },
        sticky: {
            stickItem: null
        }
    },
    methods: {
        closeFresh: function() {
            this.show.freshbox = false;
            this.show.modal = false;
        },
        closeSticky: function() {
            this.show.stickybox = false;
            this.show.modal = false;
        },
        closeMsg: function() {
            this.show.message = false;
            this.show.modal = false;
        },
        hideModal: function(obj) {
            if ($(obj).hasClass("modal")) {
                this.show.message = false;
                this.show.cv = false;
                this.show.modal = false;
            }
        }
    },
    watch: {
        "show.freshbox": function(curval) {
            if (curval) {
                this.$nextTick(function() {
                    EventUtils.absCenter($("#app-modal .fresh-box"));
                })
            }
        },
        "show.stickybox": function(curval) {
            if (curval) {
                this.$nextTick(function() {
                    EventUtils.absCenter($("#app-modal .sticky-box"));
                })
            }
        },
        "show.message": function(curval) {
            if (curval) {
                this.$nextTick(function() {
                    EventUtils.absCenter($("#app-modal .msg-box"));
                })
            } else {
                var postdata = {
                    userId: parObj.userId,
                    index: 1,
                    count: 8
                }
                EventUtils.ajaxReq("/message/getMessageList", "get", postdata, function(resp, status) {
                    if (resp.data && resp.data.count > 0) {
                        $(".msg-center .msg-info").html(resp.data.count);
                        $(".msg-center .msg-info").show();
                    } else {
                        $(".msg-center .msg-info").hide();
                    }
                })
            }
        },
        "show.cv": function(curval) {
            if (curval) {
                this.$nextTick(function() {
                    EventUtils.absCenter($("#app-modal .preView"));
                })
            }
        }
    }
})

function init_center() {
    infoRequest();
    selectInitPos();
    selectInitInput();
    // navEventBind();
}
init_center();


function navEventBind() {
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

}

function jobfairRequest(date, cvStatus, page, id) {
    var jobfairId;
    if (id) {
        jobfairId = id;
    } else {
        for (var i = 0; i < mapper.jobfair.length; i++) {
            if (mapper.jobfair[i].startTime == date) {
                jobfairId = mapper.jobfair[i].jobFairId;
                break;
            }
        }
    }
    var postdata = {
        jobFairId: jobfairId,
        status: cvStatus,
        index: page,
        count: 4
    };
    EventUtils.ajaxReq("/hrcenter/getJobFairList", "get", postdata, function(resp, status) {
        console.log(resp);
        if (resp.data && resp.data.resultList.totalRow >= 0) {
            var cvData = {
                totalitems: resp.data.resultList.totalRow,
                totalpages: resp.data.resultList.totalPage,
                curpage: page,
                resultIndex: cvStatus,
                resumePos: hrApp.resumes.resumePos,
                resumeType: "招聘会",
                handleCount: resp.data.count,
                jobfairDate: resp.data.jobFairTime,
                cvList: resp.data.resultList.list
            }
        } else {
            var cvData = {
                totalitems: 0,
                totalpages: 1,
                curpage: 1,
                resultIndex: cvStatus,
                resumePos: hrApp.resumes.resumePos,
                handleCount: 0,
                resumeType: "招聘会",
                jobfairDate: resp.data.jobFairTime,
                cvList: []
            }
        }
        hrApp.resumes = cvData;
    })
}

function recruitRequest(job, cvStatus, page, id) {
    var recruitId;
    if (id) {
        recruitId = id;
    } else {
        for (var j = 0; j < mapper.recruit.length; j++) {
            if (mapper.recruit[j].job == job) {
                recruitId = mapper.recruit[j].recruitId;
                break;
            }
        }
    }
    var postdata = {
        recruitId: recruitId,
        status: cvStatus,
        index: page,
        count: 4
    }
    EventUtils.ajaxReq("/hrcenter/getRecruitList", "get", postdata, function(resp, status) {
        console.log(resp);
        if (resp.data && resp.data.resultList.totalRow >= 0) {
            var cvData = {
                totalitems: resp.data.resultList.totalRow,
                totalpages: resp.data.resultList.totalPage,
                curpage: page,
                resultIndex: cvStatus,
                resumePos: EventUtils.infoExtrac(resp.data.job),
                handleCount: resp.data.count,
                resumeType: "企业直聘",
                jobfairDate: hrApp.resumes.jobfairDate,
                cvList: resp.data.resultList.list
            }
        } else {
            var cvData = {
                totalitems: 0,
                totalpages: 1,
                curpage: 1,
                resultIndex: cvStatus,
                resumePos: EventUtils.infoExtrac(resp.data.job),
                handleCount: resp.data.count,
                resumeType: "企业直聘",
                jobfairDate: hrApp.resumes.jobfairDate,
                cvList: []
            }
        }
        hrApp.resumes = cvData;
    })
}

function positionRequest(type, page) {
    hrApp.position.curpage = page;
    if (type == 0) { //企业直聘岗位请求
        var postdata = {
            userId: parObj.userId,
            loginIdentifier: parObj.loginId,
            isCenter: 1,
            index: page,
            count: 4
        }
        EventUtils.ajaxReq("/recruit/getList", "get", postdata, function(resp, status) {
            //     console.log(resp);
            if (resp && resp.data) {
                hrApp.position.totalpages = resp.data.totalPage;
                hrApp.position.results = resp.data.list;
                hrApp.position.totalitems = resp.data.totalRow;
            } else {
                hrApp.position.results = [];
                hrApp.position.totalitems = 0;
                hrApp.position.totalpages = 1;
            }
            hrApp.position.posType = 0;
        })
    }
    if (type == 1) { //企业招聘会发布
        var postdata = {
            userId: parObj.userId,
            loginIdentifier: parObj.loginId,
            isCenter: 1,
            jobFairType: 2,
            index: page,
            count: 4
        }
        EventUtils.ajaxReq("/jobfair/getList", "get", postdata, function(resp, status) {
            //     console.log(resp);
            if (resp && resp.data) {
                hrApp.position.totalpages = resp.data.totalPage;
                hrApp.position.results = resp.data.list;
                hrApp.position.totalitems = resp.data.totalRow;
            } else {
                hrApp.position.results = [];
                hrApp.position.totalitems = 0;
                hrApp.position.totalpages = 1;
            }
            hrApp.position.posType = 1;
        })
    }
}