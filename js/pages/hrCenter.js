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
        console.log(resp);
    })
    if (parObj.jobfairId) {
        jobfairRequest(parObj.jobfairId, 0, parObj.jobfairId);

    };
    if (parObj.recruitId) {
        recruitRequest(parObj.recruitId, 0, parObj.recruitId);

    }
}
var appTop = new Vue({
    el: "#app-top",
    data: {},
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
        resumes: {
            totalitems: 0,
            totalpages: 1,
            handleCount: 0,
            resultIndex: 0,
            resumeType: "企业直聘",
            resumePos: "",
            jobfairDate: "",
            cvList: []
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

        },
        selnav: function(obj) {
            if (!$(obj).hasClass("sider")) {
                $(".mainCont .sider .on").removeClass("on");
                $(obj).addClass("on");
            }
            if ($(obj).hasClass("resume-box")) {
                if (this.resumes.resumeType == "招聘会") {
                    jobfairRequest(this.resumes.jobfairDate, 0);
                } else {
                    recruitRequest(this.resumes.resumePos, 0);
                }
            }
            if ($(obj).hasClass("resume-unview")) {
                if (this.resumes.resumeType == "招聘会") {
                    jobfairRequest(this.resumes.jobfairDate, 1);
                } else {
                    recruitRequest(this.resumes.resumePos, 1);
                }
            };
            if ($(obj).hasClass("resume-viewed")) {
                if (this.resumes.resumeType == "招聘会") {
                    jobfairRequest(this.resumes.jobfairDate, 2);
                } else {
                    recruitRequest(this.resumes.resumePos, 2);
                }
            };
            if ($(obj).hasClass("interview-box")) {
                if (this.resumes.resumeType == "招聘会") {
                    jobfairRequest(this.resumes.jobfairDate, 3);
                } else {
                    recruitRequest(this.resumes.resumePos, 3);
                }
            };
            if ($(obj).hasClass("inter-unsuit")) {
                if (this.resumes.resumeType == "招聘会") {
                    jobfairRequest(this.resumes.jobfairDate, 4);
                } else {
                    recruitRequest(this.resumes.resumePos, 4);
                }
            }
            if ($(obj).hasClass("inter-suit")) {
                if (this.resumes.resumeType == "招聘会") {
                    jobfairRequest(this.resumes.jobfairDate, 5);
                } else {
                    recruitRequest(this.resumes.resumePos, 5);
                }
            }
        },
        invite: function(item) {
            if (item.jobFairId) {
                var postdata = {
                    applyId: item.applyId,
                    result: 3
                };
                EventUtils.ajaxReq("/hrcenter/modifyJobFairInfo", "post", postdata, function(resp, status) {
                    jobfairRequest(item.jobFairId, hrApp.resumes.resultIndex, item.jobFairId);
                })
            };
            if (item.recruitId) {
                var postdata = {
                    applyId: item.applyId,
                    result: 3
                };
                EventUtils.ajaxReq("/hrcenter/modifyRecruitInfo", "post", postdata, function(resp, status) {
                    recruitRequest(item.recruitId, hrApp.resumes.resultIndex, item.recruitId);
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
                    jobfairRequest(item.jobFairId, hrApp.resumes.resultIndex, item.jobFairId);
                })
            };
            if (item.recruitId) {
                var postdata = {
                    applyId: item.applyId,
                    result: 2
                };
                EventUtils.ajaxReq("/hrcenter/modifyRecruitInfo", "post", postdata, function(resp, status) {
                    recruitRequest(item.recruitId, hrApp.resumes.resultIndex, item.recruitId);
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
                    jobfairRequest(item.jobFairId, hrApp.resumes.resultIndex, item.jobFairId);
                })
            };
            if (item.recruitId) {
                var postdata = {
                    applyId: item.applyId,
                    result: 1
                };
                EventUtils.ajaxReq("/hrcenter/modifyRecruitInfo", "post", postdata, function(resp, status) {
                    recruitRequest(item.recruitId, hrApp.resumes.resultIndex, item.recruitId);
                })
            }
        },
        showCv: function(item) {
            EventUtils.ajaxReq("/user/user/getInfo", "get", { userId: item.userId }, function(resp, status) {
                var respObj = resp.data;
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
        }
    },
    watch: {
        "resumes.resumeType": function(curval) {
            if (curval == "招聘会") {
                if (this.resumes.jobfairDate == "") {
                    this.resumes.jobfairDate = this.database.jobfairList[0];
                } else {
                    jobfairRequest(this.resumes.jobfairDate, this.resumes.resultIndex);
                }
            } else if (curval == "企业直聘") {
                if (this.resumes.resumePos == "") {
                    this.resumes.resumePos = this.database.posList[0];
                } else {
                    recruitRequest(this.resumes.resumePos, this.resumes.resultIndex);
                }

            }
            this.$nextTick(function() {
                selectInitPos();
            })
        },
        'resumes.resumePos': function(curval) {
            recruitRequest(curval, this.resumes.resultIndex);
        },
        'resumes.jobfairDate': function(curval) {
            jobfairRequest(curval, this.resumes.resultIndex);
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

var appModal = new Vue({
    el: "#app-modal",
    data: {
        show: {
            modal: false,
            cv: false,
            message: false
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
        }
    },
    methods: {
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
        "show.message": function(curval) {
            if (curval) {
                this.$nextTick(function() {
                    EventUtils.absCenter($("#app-modal .msg-box"));
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

function jobfairRequest(date, cvStatus, id) {
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
        index: 1,
        count: 4
    };
    EventUtils.ajaxReq("/hrcenter/getJobFairList", "get", postdata, function(resp, status) {
        console.log(resp);
        if (resp.data && resp.data.resultList.totalRow >= 0) {
            var cvData = {
                totalitems: resp.data.resultList.totalRow,
                totalpages: resp.data.resultList.totalPage,
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

function recruitRequest(job, cvStatus, id) {
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
        index: 1,
        count: 4
    }
    EventUtils.ajaxReq("/hrcenter/getRecruitList", "get", postdata, function(resp, status) {
        console.log(resp);
        if (resp.data && resp.data.resultList.totalRow >= 0) {
            var cvData = {
                totalitems: resp.data.resultList.totalRow,
                totalpages: resp.data.resultList.totalPage,
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