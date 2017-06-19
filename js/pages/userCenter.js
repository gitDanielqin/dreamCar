/**
 * Created by xuanyuan on 2016/11/27.
 */
// import $ from "../libs/jquery-3.1.0.min";
// var Vue = require("../libs/vue");
// require("../common/common")
// require("../common/cropbox")
// require("../components/dropdown")
// require("../components/pagination")
// require("../components/major-pop")
// require("../components/pos-pop")
// require("../../data/commondata")
// require("../../data/address")
// require("../../data/workareas")
// require("../../data/position")
// require("../../data/major")
// require("../../css/base.css")
// require("../../css/widget.css")
// require("../../css/pCenter.css")
var objMe = this;
var parObj = EventUtils.urlExtrac(window.location);
var respObj = {}; //请求的本页面的数据集合

function infoRequest() {
    var postdata = {
        userId: parObj.userId || localStorage.userId,
        loginIdentifier: parObj.loginId || localStorage.loginId
    };
    EventUtils.ajaxReq("/user/user/getInfo", "get", postdata, function(resp, status) {
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
        if (!respObj.userInfo.cvStatus || respObj.userInfo.cvStatus == "0") { //首次编辑页面信息
            appCont.resume.firstEdit = true;
            $(".view").hide();
            $(".edit").show();
        } else { //已注册用户进入页面请求简历信息
            appCont.resume.firstEdit = false;
            $("#avatar-box").html("<img src='" + respObj.userInfo.userIcon + "' />");
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
                var initdate = {
                    startyear: respObj.companyList[i].startTime ? respObj.companyList[i].startTime.split("-")[0] : "",
                    startmonth: respObj.companyList[i].startTime ? respObj.companyList[i].startTime.split("-")[1] : "",
                    endyear: respObj.companyList[i].endTime ? respObj.companyList[i].endTime.split("-")[0] : "",
                    endmonth: respObj.companyList[i].endTime ? respObj.companyList[i].endTime.split("-")[1] : "",
                }
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
            if (worksExps.length == 0) { //防止刚开始没有数据
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
                    endmonth: respObj.eduList[j].endTime ? respObj.eduList[j].endTime.split("-")[1] : "",
                }
                var edu = {
                    show: j == 0,
                    cvEduId: respObj.eduList[j].cvEduId,
                    uni: respObj.eduList[j].schoolName,
                    major: respObj.eduList[j].professional ? respObj.eduList[j].professional.split(";")[0] : "",
                    submajor: respObj.eduList[j].professional ? respObj.eduList[j].professional.split(";")[1] : "",
                    exmajor: respObj.eduList[j].professional ? respObj.eduList[j].professional.split(";")[2] : "",
                    initdate: initdate,
                    qualification: respObj.eduList[j].qualification,
                };
                edus.push(edu);
            }
            if (edus.length == 0) { //防止刚开始没有数据
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
                    qualification: "",
                };
                edus.push(eduItem);
            }
            var projects = [];
            for (var k = 0; k < respObj.projectList.length; k++) {
                var initdate = {
                    startyear: respObj.projectList[k].startTime ? respObj.projectList[k].startTime.split("-")[0] : "",
                    startmonth: respObj.projectList[k].startTime ? respObj.projectList[k].startTime.split("-")[1] : "",
                    endyear: respObj.projectList[k].endTime ? respObj.projectList[k].endTime.split("-")[0] : "",
                    endmonth: respObj.projectList[k].endTime ? respObj.projectList[k].endTime.split("-")[1] : "",
                }
                var project = {
                    show: k == 0,
                    cvProId: respObj.projectList[k].cvProId,
                    name: respObj.projectList[k].projectName,
                    firma: respObj.projectList[k].companyName,
                    initdate: initdate,
                    desc: respObj.projectList[k].description,
                    resp: respObj.projectList[k].position,
                    achiev: respObj.projectList[k].achievement
                }
                projects.push(project);
            }
            if (projects.length == 0) { //防止刚开始没有数据
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
            //计算简历完成度
            var resumePercent = 0;
            for (var key in cvInfo) {
                if (key == "expect") {
                    if (cvInfo[key].tradeItems && cvInfo[key].tradeItems != "") {
                        resumePercent += 20;
                    }
                } else if (key == "worksExps") {
                    if (cvInfo[key][0].firma && cvInfo[key][0].firma != "") {
                        resumePercent += 10;
                    }
                } else if (key == "edus") {
                    if (cvInfo[key][0].uni && cvInfo[key][0].uni != "") {
                        resumePercent += 10;
                    }
                } else if (key == "projects") {
                    if (cvInfo[key][0].name && cvInfo[key][0].name != "") {
                        resumePercent += 10;
                    }
                } else if (key == "firstEdit" || key == "curWorksIndex") {
                    //排除这两种情况
                } else {
                    resumePercent += 5;
                }
            }
            if (resumePercent > 100) { resumePercent = 100 };
            appPorto.resumePercent = resumePercent;
            $("#app-porto .progress-real").css("width", resumePercent + "%");
            if (cvInfo.realName && cvInfo.realName != "") {
                resumePercent += 5;
            }

            appModal.resumeInfo = appCont.resume = cvInfo;
            $(".edit").hide();
            $(".view").show();
        }
    });

    //获取用户平台信息
    EventUtils.ajaxReq("/center/user/getInfo", "get", { userId: parObj.userId }, function(resp, status) {
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
        }
        appCont.config = configdata;
    })

}
var appTop = new Vue({
    el: "#app-top",
    data: {
        homeLink: "index.html?" + window.btoa("userId=" + (parObj.userId || localStorage.userId))
    },
    methods: {
        showMsgbox: function() {
            appModal.show.message = true;
            appModal.showModal = true;
        }
    }
})

var appPorto = new Vue({
    el: "#app-porto",
    data: {
        database: {
            date: date,
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
        save: function() {
            this.briefInfo.address.province = $("#app-porto .address .sel-province input").val();
            this.briefInfo.address.city = $("#app-porto .address .sel-city input").val();
            this.briefInfo.address.district = $("#app-porto .address .sel-district input").val();
            var postdata = {
                id: respObj.userInfo.id,
                userId: parObj.userId,
                loginIdentifier: parObj.loginId,
                sex: this.briefInfo.gender == "男" ? 1 : 2,
                birthday: this.briefInfo.birthyear + "-" + this.briefInfo.birthmonth + "-" + this.briefInfo.birthday,
                liveStatus: this.briefInfo.state,
                province: this.briefInfo.address.province,
                city: this.briefInfo.address.city,
                area: this.briefInfo.address.district,
            }
            console.log(postdata);
            EventUtils.ajaxReq('/user/user/modifyInfo', 'post', postdata, function(resp, status) {
                appPorto.viewInfo = true;
            })
        },
        cancel: function() {
            this.briefInfo = EventUtils.cloneObj(this.cloneInfo);
            this.viewInfo = true;
        },
        edit: function() {
            this.cloneInfo = EventUtils.cloneObj(this.briefInfo);
            this.initAddress = EventUtils.cloneObj(this.briefInfo.address);
            this.viewInfo = false;
            this.$nextTick(function() {
                selectInitInput();
                selectInitPos();
            });
        },
        age: function(birthyear) {
            var date = new Date();
            return (date.getFullYear() - birthyear);
        },
        showPre: function() {
            if (appCont.resume.firstEdit) { //如果是首次编辑预览简历要进行一定的处理
                //期望工作地点              
                appCont.resume.expect.province = $("#exp-address .sel-province input").val();
                appCont.resume.expect.city = $("#exp-address .sel-city input").val();
                appCont.resume.expect.district = $("#exp-address .sel-district input").val();
                //工作经历地址
                var worksArray = $("#work-address");
                for (var i = 0; i < appCont.resume.worksExps.length; i++) {
                    appCont.resume.worksExps[i].province = worksArray.eq(i).find(".sel-province input").val();
                    appCont.resume.worksExps[i].city = worksArray.eq(i).find(".sel-city input").val();
                    appCont.resume.worksExps[i].district = worksArray.eq(i).find(".sel-district input").val();
                };
                //专业名称
                var majorArray = $("#major-name");
                for (var j = 0; j < appCont.resume.edus.length; j++) {
                    appCont.resume.edus[j].major = majorArray.eq(j).find(".major-input-1 input").val();
                    appCont.resume.edus[j].submajor = majorArray.eq(j).find(".major-input-2 input").val();
                    appCont.resume.edus[j].exmajor = majorArray.eq(j).find(".ex-major").val();
                }
            }
            appModal.showModal = true;
            appModal.show.preview = true;
        },
        uploading: function() {
            appModal.showModal = true;
            appModal.show.upload = true;
        }
    }
})

var provinceArray = [];
for (var i = 0; i < addArray.length; i++) {
    provinceArray.push(addArray[i].name);
}

var appSider = new Vue({
    el: "#app-side",
    data: {},
    methods: {
        selnav: function(obj) {
            if ($(obj).hasClass("sider-li")) {
                $(".sideBox .sider-li.on").removeClass("on");
                $(".sideBox .sub-li").hide();
                $(obj).addClass("on");
                if ($(obj).children(".sub-li").length > 0) {
                    $(obj).children(".sub-li").show();
                    $(obj).find(".sub-item.on").trigger("click");
                }
                if ($(obj).attr("paneid")) {
                    $(".content").children().hide();
                    $(".content").children("." + $(obj).attr("paneid")).show();
                }
                //我的求职数据请求
                if ($(obj).attr("paneid") == "jobBox") {
                    posRequest(appCont.myPosList.jobsrc, appCont.myPosList.jobstate, 1);
                }
                selectInitPos();
            }
            if ($(obj).hasClass("sub-item")) {
                $(obj).siblings(".sub-item.on").removeClass("on");
                $(obj).addClass("on");
                $(".content").children().hide();
                $(".content").children("." + $(obj).attr("paneid")).show();
                //我的收藏数据请求
                if ($(obj).attr("paneid") == "collec-job") {
                    colposRequest(appCont.colPosList.applyindex, 1);
                }
                if ($(obj).attr("paneid") == "collec-recruitment") {
                    colrecRequest(appCont.colRecList.applyindex, 1);
                }
                selectInitPos();
            }
        }
    }
})
var appCont = new Vue({
    el: "#app-content",
    data: {
        database: {
            date: date,
            address: {
                province: provinceArray,
                city: ["", ""],
                district: ["", ""]
            },
            addrData: addArray,
            nations: nations,
            salary: salaryItems,
            major: majorArray,
            qualification: scolarship,
            posData: posArray,
            languages: [
                "英语", "法语", "日语", "韩语", "德语", "俄语", "西班牙语", "葡萄牙语", "阿拉伯语", "其他"
            ]
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
                qualification: "",
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
            results: [
                { name: "课程名称", score: "4.5分", Institute: "开课学院名称", content: "web前端", duration: "学习周期", fee: "学习费用", addr: "学习地点", state: "已开课", comment: "教师评语" },
                { name: "课程名称", score: "4.5分", Institute: "开课学院名称", content: "web前端", duration: "学习周期", fee: "学习费用", addr: "学习地点", state: "课程结束", comment: "教师评语" },
                { name: "课程名称", score: "4.5分", Institute: "开课学院名称", content: "web前端", duration: "学习周期", fee: "学习费用", addr: "学习地点", state: "未开课", comment: "教师评语" },
                { name: "课程名称", score: "4.5分", Institute: "开课学院名称", content: "web前端", duration: "学习周期", fee: "学习费用", addr: "学习地点", state: "已开课", comment: "教师评语" },
                { name: "课程名称", score: "4.5分", Institute: "开课学院名称", content: "web前端", duration: "学习周期", fee: "学习费用", addr: "学习地点", state: "已开课", comment: "教师评语" },
                { name: "课程名称", score: "4.5分", Institute: "开课学院名称", content: "web前端", duration: "学习周期", fee: "学习费用", addr: "学习地点", state: "已开课", comment: "教师评语" },
                { name: "课程名称", score: "4.5分", Institute: "开课学院名称", content: "web前端", duration: "学习周期", fee: "学习费用", addr: "学习地点", state: "已开课", comment: "教师评语" },
            ]
        },
        colStuList: {
            curpage: 1,
            results: [
                { name: "课程名称", score: "4.5分", Institute: "开课学院名称", content: "web前端", duration: "学习周期", fee: "学习费用", addr: "学习地点", InScale: 5000 },
                { name: "课程名称", score: "4.5分", Institute: "开课学院名称", content: "web前端", duration: "学习周期", fee: "学习费用", addr: "杭州-滨江", InScale: 5000 },
                { name: "课程名称", score: "4.5分", Institute: "开课学院名称", content: "web前端", duration: "学习周期", fee: "学习费用", addr: "学习地点", InScale: 5000 },
                { name: "课程名称", score: "4.5分", Institute: "开课学院名称", content: "web前端", duration: "学习周期", fee: "学习费用", addr: "学习地点", InScale: 5000 },
                { name: "课程名称", score: "4.5分", Institute: "开课学院名称", content: "web前端", duration: "学习周期", fee: "学习费用", addr: "学习地点", InScale: 5000 },
                { name: "课程名称", score: "4.5分", Institute: "开课学院名称", content: "web前端", duration: "学习周期", fee: "学习费用", addr: "学习地点", InScale: 5000 },
            ]
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
        posLink: function(item) {
            if (item.jobFairId) {
                return "detail-increcruit.html?" + window.btoa("userId=" + parObj.userId + "&jobfairId=" + item.jobFairId);
            }
            if (item.recruitId) {
                return "detail-position.html?" + window.btoa("userId=" + parObj.userId + "&recruitId=" + item.recruitId);
            }
        },
        infoExtrac: function(item) {
            if (item) {
                return EventUtils.infoExtrac(item)
            } else {
                return ""
            }
        },
        infoShow: function(text, type) {
            return EventUtils.infoShow(text, type);
        },
        dateExtrac: function(date) {
            if (date) {
                return date.split(" ")[0];
            } else {
                return ""
            }
        },
        cityExtrac: function(text) {
            if (text) {
                return text.split(";")[1]
            } else {
                return "";
            }
        },
        remainText: function(text, type) {
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
            if (wordslimit - text.length < 0) {
                return 0;
            }
            return (wordslimit - text.length)
        },
        checkText: function(type, index) {
            if (type == "worksresp") {
                var len = this.resume.worksExps[index].resp.length;
                if (len > 1000) {
                    swal({
                        title: "",
                        text: "最多只能输入1000字！",
                        type: "warning"
                    })
                    this.resume.worksExps[index].resp = this.resume.worksExps[index].resp.slice(0, 1000);
                }
            } else if (type == "prodesc") {
                var len = this.resume.projects[index].desc.length;
                if (len > 1000) {
                    swal({
                        title: "",
                        text: "最多只能输入1000字！",
                        type: "warning"
                    })
                    this.resume.projects[index].desc = this.resume.projects[index].desc.slice(0, 1000);
                }
            } else if (type == "proresp") {
                var len = this.resume.projects[index].resp.length;
                if (len > 1000) {
                    swal({
                        title: "",
                        text: "最多只能输入1000字！",
                        type: "warning"
                    })
                    this.resume.projects[index].resp = this.resume.projects[index].resp.slice(0, 1000);
                }
            } else if (type == "proachiev") {
                var len = this.resume.projects[index].achiev.length;
                if (len > 1000) {
                    swal({
                        title: "",
                        text: "最多只能输入1000字！",
                        type: "warning"
                    })
                    this.resume.projects[index].achiev = this.resume.projects[index].achiev.slice(0, 1000);
                }
            } else if (type == "selfeval") {
                var len = this.resume.selfEval.length;
                if (len > 200) {
                    swal({
                        title: "",
                        text: "最多只能输入200字！",
                        type: "warning"
                    })
                    this.resume.selfEval = this.resume.selfEval.slice(0, 200);
                }
            } else if (type == "psinfo") {
                var len = this.resume.psInfo.length;
                if (len > 200) {
                    swal({
                        title: "",
                        text: "最多只能输入200字！",
                        type: "warning"
                    })
                    this.resume.psInfo = this.resume.psInfo.slice(0, 200);
                }
            } else if (type == "skill") {
                var len = this.resume.skills.length;
                if (len > 100) {
                    swal({
                        title: "",
                        text: "最多只能输入100字！",
                        type: "warning"
                    })
                    this.resume.skills = this.resume.skills.slice(0, 100);
                }
            }
        },
        popTrade: function(type) {
            appModal.showModal = true;
            appModal.show.trade = true;
        },
        popTradeSingle: function(index) {
            appModal.showModal = true;
            this.resume.curWorksIndex = index;
            appModal.show.tradeSingle = true;

        },
        popPosition: function() {
            appModal.showModal = true;
            appModal.show.position = true;
        },
        showPre: function() {
            if (appCont.resume.firstEdit) { //如果是首次编辑预览简历要进行一定的处理
                //期望工作地点              
                appCont.resume.expect.province = $("#exp-address .sel-province input").val();
                appCont.resume.expect.city = $("#exp-address .sel-city input").val();
                appCont.resume.expect.district = $("#exp-address .sel-district input").val();
                //工作经历地址
                var worksArray = $("#work-address");
                for (var i = 0; i < appCont.resume.worksExps.length; i++) {
                    appCont.resume.worksExps[i].province = worksArray.eq(i).find(".sel-province input").val();
                    appCont.resume.worksExps[i].city = worksArray.eq(i).find(".sel-city input").val();
                    appCont.resume.worksExps[i].district = worksArray.eq(i).find(".sel-district input").val();
                };
                //专业名称
                var majorArray = $("#major-name");
                for (var j = 0; j < appCont.resume.edus.length; j++) {
                    appCont.resume.edus[j].major = majorArray.eq(j).find(".major-input-1 input").val();
                    appCont.resume.edus[j].submajor = majorArray.eq(j).find(".major-input-2 input").val();
                    appCont.resume.edus[j].exmajor = majorArray.eq(j).find(".ex-major").val();
                }
            }
            appModal.showModal = true;
            appModal.show.preview = true;
            $(window).scrollTop(0);
        },
        addWorksexp: function() {
            for (var i = 0; i < this.resume.worksExps.length; i++) {
                this.resume.worksExps[i].show = false;
            }
            var worksexp = EventUtils.cloneObj(this.resume.worksExps[0]);
            for (var key in worksexp) {
                worksexp[key] = "";
            }
            worksexp.show = true;
            this.resume.worksExps.push(worksexp);
            this.$nextTick(function() {
                selectInitInput();
                selectInitPos();
            });
        },
        workSwipe: function(index) {
            for (var i = 0; i < this.resume.worksExps.length; i++) {
                this.resume.worksExps[i].show = false;
            }
            this.resume.worksExps[index].show = true;
            this.$nextTick(function() {
                selectInitInput();
                selectInitPos();
            });
        },
        addEdu: function() {
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
                qualification: "",
            };
            this.resume.edus.push(edusExp);
            this.$nextTick(function() {
                selectInitInput();
                selectInitPos();
            });
        },
        eduSwipe: function(index) {
            for (var i = 0; i < this.resume.edus.length; i++) {
                this.resume.edus[i].show = false;
            };
            this.resume.edus[index].show = true;
            this.$nextTick(function() {
                selectInitInput();
                selectInitPos();
            });
        },
        addProject: function() {
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
            this.$nextTick(function() {
                selectInitInput();
                selectInitPos();
            });
        },
        projectSwipe: function(index) {
            for (var i = 0; i < this.resume.projects.length; i++) {
                this.resume.projects[i].show = false;
            }
            this.resume.projects[index].show = true;
            this.$nextTick(function() {
                selectInitInput();
                selectInitPos();
            });
        },
        submit: function() {
            //提交之前对数据进行校验
            var isFilled = true;
            $(".edit-must input:visible").each(function(index) {
                if (this.value == "") {
                    $(this).addClass("hint-nullable");
                    isFilled = false;
                }
            });
            if (!isFilled) {
                swal({
                    title: "",
                    text: "请完成必填信息！",
                    type: "warning"
                })
                return false;
            }
            if (!variableUtils.regExp.mobile.test(this.resume.phone)) {
                $("#cv-mobile").addClass("hint-nullable");
                swal({
                    title: "",
                    text: "请检查手机格式是否正确！",
                    type: "warning"
                })
                return false;
            } else {
                $("#cv-mobile").removeClass("hint-nullable");
            }
            if (!variableUtils.regExp.email.test(this.resume.email)) {
                $("#cv-email").addClass("hint-nullable");
                swal({
                    title: "",
                    text: "请检查邮箱格式是否正确！",
                    type: "warning"
                })
                return false;
            } else {
                $("#cv-email").removeClass("hint-nullable");
            }
            this.resume.firstEdit = false;
            postResume("all");
            $(".edit").hide();
            $(".view").show();
        },
        deleteItem: function(type, index) {
            if (type == "worksexp") {
                if (this.resume.worksExps.length > 1) {
                    delItem("work", appCont.resume.worksExps[index].cvCpyId);
                    this.resume.worksExps.splice(index, 1);
                } else {
                    swal({
                        title: "",
                        text: "至少保留一项！",
                        type: "warning"
                    })
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
                    })
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
                    })
                }
            }
        },
        stateCss: function(state) {
            if (state == "已开课") {
                return "begin";
            } else if (state == "课程结束") {
                return "after";
            } else {
                return "before";
            }
        },
        showResult: function(index, curpage, itemsnum) {
            if (index >= (parseInt(curpage) - 1) * parseInt(itemsnum) && index < parseInt(curpage) * parseInt(itemsnum)) {
                return true;
            } else {
                return false;
            }
        },
        showpage: function(totalpage) {
            if (totalpage < 3) {
                return totalpage;
            } else {
                return 3;
            }
        },
        cancelCollect: function(type, id) {
            switch (type) {
                case "position":
                    var postdata = {
                        id: id
                    };
                    EventUtils.ajaxReq("/recruit/delMarkInfo", "post", postdata, function(resp, status) {
                        if (appCont.colPosList.results.length == 1 && appCont.colPosList.curpage > 1) {
                            appCont.colPosList.curpage -= 1;
                        }
                        $(".collec-job .pagination a.page").eq(appCont.colPosList.curpage - 1).parent().trigger("click");
                    });
                    break;
                case "jobfair":
                    EventUtils.ajaxReq("/jobfair/delMarkInfo", "post", { id: id }, function(resp, status) {
                        if (appCont.colRecList.results.length == 1 && appCont.colRecList.curpage > 1) {
                            appCont.colRecList.curpage -= 1;
                        }
                        $(".collec-recruitment .pagination a.page").eq(appCont.colRecList.curpage - 1).parent().trigger("click");
                    });
                    break;
            }
        },
        topage: function(page, type) {
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
        apply: function(type, item) {
            if (type == "recruit") {
                var postdata = {
                    userId: parObj.userId,
                    recruitId: item.recruitId
                }
                EventUtils.ajaxReq("/recruit/cooperateRecruit", "post", postdata, function(resp, status) {
                    console.log(resp);
                    if (resp.data && resp.data.isApply == "0") {
                        swal({
                            title: "",
                            text: "投递成功！",
                            type: "success"
                        })
                        item.status = 1;
                    } else {
                        swal({
                            title: "",
                            text: resp.info,
                            type: "error"
                        })
                    }
                });
            }
            if (type == "jobfair") {
                var postdata = {
                    userId: parObj.userId,
                    jobFairId: item.jobFairId
                }
                EventUtils.ajaxReq("/jobfair/cooperateJobFair", "post", postdata, function(resp, status) {
                    console.log(resp);
                    if (resp.data && resp.data.isApply == "0") {
                        swal({
                            title: "",
                            text: "投递成功！",
                            type: "success"
                        })
                        item.status = 1;
                    } else {
                        swal({
                            title: "",
                            text: resp.info,
                            type: "error"
                        })
                    }
                });
            }
        },
        modifyMobile: function() {
            appModal.show.mobile = true;
            appModal.showModal = true;
        },
        modifyEmail: function() {
            appModal.show.email = true;
            appModal.showModal = true;
        },
        bindWechat: function() {
            appModal.show.wechat = true;
            appModal.showModal = true;
        },
    },
    watch: {
        'resume.phone': function(curval, oldval) {
            if (!/^\d*$/.test(curval) || curval.length > 11) {
                this.resume.phone = oldval;
            }
        },
        'colPosList.curstate': function(curval) {
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
        'colRecList.curstate': function(curval) {
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
        'myPosList.curtype': function(curval) {
            if (curval == "招聘会") {
                posRequest(1, appCont.myPosList.jobstate, 1);
            }
            if (curval == "企业直聘") {
                posRequest(2, appCont.myPosList.jobstate, 1);
            }
        },
        'myPosList.curstate': function(curval) {
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
    },
});

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
        closePorto: function() {
            this.show.upload = false;
            this.showModal = false;
        },
        closeTrade: function() {
            this.show.trade = false;
            this.show.tradeSingle = false;
            this.showModal = false;
        },
        checkfunc: function(item, target) {
            if (!target.checked) {
                this.checkedTrades.remove(item);
            } else if (this.checkedTrades.length >= 3) {
                target.checked = false;
                return false;
            } else {
                this.checkedTrades.push(item);
            }
        },
        submitTrade: function(type) {
            if (type == "expect") {
                appCont.resume.expect.tradeItems = this.checkedTrades.join();
                this.show.trade = false;
            } else if (type == "worksexp") {
                var index = appCont.resume.curWorksIndex;
                appCont.resume.worksExps[index].trade = $(".trade-single-table input[type='radio']:checked").val();
                this.show.tradeSingle = false;
            }
            this.showModal = false;
        },
        cancelTrade: function() {
            this.show.trade = false;
            this.show.tradeSingle = false;
            this.showModal = false;
        },
        submitPos: function(array) {
            appCont.resume.expect.posItems = array.join();
            this.show.position = false;
            this.showModal = false;
        },
        cancelPos: function() {
            this.show.position = false;
            this.showModal = false;
        },
        hidemodal: function(obj) {
            if ($(obj).hasClass("modal")) {
                for (var key in this.show) {
                    this.show[key] = false;
                }
                this.showModal = false;
            }
        },
        closeMobile: function() {
            this.show.mobile = false;
            this.showModal = false;
        },
        closeWechat: function() {
            this.show.wechat = false;
            this.showModal = false;
        },
        closeEmail: function() {
            this.show.email = false;
            this.showModal = false;
        },
        closeMsg: function() {
            this.show.message = false;
            this.showModal = false;
        }
    },
    watch: {
        "show.message": function(curval) {
            if (curval) {
                this.$nextTick(function() {
                    EventUtils.absCenter($("#app-modal .msg-box"));
                })
            }
        },
        "show.upload": function(curval) {
            if (curval) {
                this.$nextTick(function() {
                    EventUtils.absCenter($("#app-modal .porto-upload"));
                })
            }
        },
        "show.mobile": function(curval) {
            if (curval) {
                this.$nextTick(function() {
                    EventUtils.absCenter($("#app-modal .mobile-bind"));
                })
            }
        },
        "show.email": function(curval) {
            if (curval) {
                this.$nextTick(function() {
                    EventUtils.absCenter($("#app-modal .email-bind"));
                })
            }
        },
        "show.wechat": function(curval) {
            if (curval) {
                this.$nextTick(function() {
                    EventUtils.absCenter($("#app-modal .wechat-bind"));
                })
            }
        },
        'show.tradeSingle': function(curval) {
            if (curval) {
                this.$nextTick(function() {
                    EventUtils.absCenter($("#app-modal .trade-box-single"));
                })
            }
        },
        'show.trade': function(curval) {
            if (curval) {
                this.$nextTick(function() {
                    EventUtils.absCenter($("#app-modal .trade-box-multi"));
                })
            }
        },
        'show.position': function(curval) {
            if (curval) {
                this.$nextTick(function() {
                    EventUtils.absCenter($("#app-modal .pos-pop-box"));
                })
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
            $(".sideBox .myCollect").trigger("click");
            $(".sideBox .myCollect .sub-item:first").trigger("click");
        }
        if (parObj.theme.indexOf("conf") >= 0) {
            $(".sideBox .myConfig").trigger("click");
            $(".sideBox .myConfig .sub-item:first").trigger("click");
        } else {
            $(".sideBox li[paneid='" + parObj.theme + "']").trigger("click");
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
    var cropper = $('.imgBox').cropbox(options);
    $('#upload-file').on('change', function() {
        var reader = new FileReader();
        reader.onload = function(e) {
            options.imgSrc = e.target.result;
            cropper = $('.imgBox').cropbox(options);
        }
        reader.readAsDataURL(this.files[0]);
        this.files = null;
    });
    $('.zoom-in').on('click', function() {
        cropper.zoomIn();
    });
    $('.zoom-out').on('click', function() {
        cropper.zoomOut();
    });

    $('#btnSubmit').on('click', function() {
        var imgsrc = cropper.getDataURL();
        if (imgsrc.length > 500 * 1024) {
            swal({
                title: "",
                text: "请上传小于500K的头像！",
                type: "warning"
            })
            return
        }
        var postdata = {
            userId: parObj.userId,
            userIcon: imgsrc
        }
        EventUtils.ajaxReq("/center/user/uploadIcon", "post", postdata, function(resp, status) {
            resp.data += "?" + Math.random();
            $("#avatar-box").html("<img src='" + resp.data + "' />");
            $(".porto-img").html("<img src='" + resp.data + "' />");
        });
        appModal.show.upload = false;
        appModal.showModal = false;
    })
}

// 页面编辑事件绑定
function editEventBind() {
    var oldResume = EventUtils.cloneObj(appCont.resume);

    $(".resumeBox .btn-edit").click(function() {
        var editName = $(this).closest(".view-item").attr("name");
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
        $(this).closest(".view-item").hide();
        $(".resumeBox .edit-item[name=" + editName + "]").show();
        selectInitPos();
        oldResume = EventUtils.cloneObj(appCont.resume);
    });
    $(".resumeBox .edit-item .buttons button:nth-of-type(1)").click(function() {
        var editBlock = $(this).closest(".edit-item");
        var viewName = editBlock.attr("name");
        var postdata = {};
        //校验手机和邮箱格式是否正确
        if (viewName == "basic") {
            if (!variableUtils.regExp.mobile.test(appCont.resume.phone)) {
                $("#cv-mobile").addClass("hint-nullable");
                swal({
                    title: "",
                    text: "请检查手机格式是否正确！",
                    type: "warning"
                })
                return false;
            } else {
                $("#cv-mobile").removeClass("hint-nullable");
            }
            if (!variableUtils.regExp.email.test(appCont.resume.email)) {
                $("#cv-email").addClass("hint-nullable");
                swal({
                    title: "",
                    text: "请检查邮箱格式是否正确！",
                    type: "warning"
                })
                return false;
            } else {
                $("#cv-email").removeClass("hint-nullable");
            }
        }
        switch (viewName) {
            case "speech":
                var skillArray = [];
                $(".language-skills input[type='checkbox']").each(function() {
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
                }
                EventUtils.ajaxReq("/user/user/modifyCvBaiscInfo", "post", postdata, function(resp, status) {
                    console.log(resp, 2);
                })
                break;
            case "selfeval":
                var postdata = {
                    userId: parObj.userId,
                    cvId: respObj.cvInfo.cvId,
                    evaluation: appCont.resume.selfEval
                }
                EventUtils.ajaxReq("/user/user/modifyCvBaiscInfo", "post", postdata, function(resp, status) {
                    console.log(resp, 2);
                });
                break;
            case "psinfo":
                var postdata = {
                    userId: parObj.userId,
                    cvId: respObj.cvInfo.cvId,
                    anymore: appCont.resume.psInfo
                }
                EventUtils.ajaxReq("/user/user/modifyCvBaiscInfo", "post", postdata, function(resp, status) {
                    console.log(resp, 2);
                });
                break;
            case "skill":
                var postdata = {
                    userId: parObj.userId,
                    cvId: respObj.cvInfo.cvId,
                    speciality: appCont.resume.skills
                }
                EventUtils.ajaxReq("/user/user/modifyCvBaiscInfo", "post", postdata, function(resp, status) {
                    console.log(resp, 2);
                });
                break;
            default:
                postResume(viewName);
        }
        editBlock.hide();
        $(".resumeBox .view-item[name=" + viewName + "]").show();
    });
    $(".resumeBox .edit-item .buttons button:nth-of-type(2)").click(function() {
        appCont.resume = EventUtils.cloneObj(oldResume);
        var viewName = $(this).closest(".edit-item").attr("name");
        $(this).closest(".edit-item").hide();
        $(".resumeBox .view-item[name=" + viewName + "]").show();
    })
}


// function init_safepos() {
//     var p_left = Math.floor($(".safe-range p").width() * $(".safe-range").width() / 100) - 16 + "px";
//     $(".r-pointer").css("left", p_left);
// }
function init_safepos(percent) {
    var p_left = Math.floor($(".safe-range").width() * percent / 100) - 16 + "px";
    $(".r-pointer").css("left", p_left);
    $("#safe-progress").css("width", percent + "%");
}



function delItem(editType, id) {
    switch (editType) {
        case "work":
            var postdata = {
                userId: parObj.userId,
                cvArray: JSON.stringify([{ cvCpyId: id, delFlg: "1" }])
            };
            EventUtils.ajaxReq("/user/user/modifyCvCo", "post", postdata, function(resp, status) {
                console.log(resp, 3);
            });
            break;
        case "edu":
            var postdata = {
                userId: parObj.userId,
                cvArray: JSON.stringify([{ cvEduId: id, delFlg: "1" }])
            }
            EventUtils.ajaxReq("/user/user/modifyCvEdu", "post", postdata, function(resp, status) {
                console.log(resp, 4);
            });
            break;
        case "project":
            var postdata = {
                userId: parObj.userId,
                cvArray: JSON.stringify([{ cvProId: id, delFlg: "1" }])
            }
            EventUtils.ajaxReq("/user/user/modifyCvPro", "post", postdata, function(resp, status) {
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
        }
        EventUtils.ajaxReq("/user/user/modifyInfo", "post", postUserdata, function(resp, status) {
            console.log(resp, 1);
        })
    }

    if (editType == "all" || editType == "trade") {

        appCont.resume.expect.province = $("#exp-address .sel-province input").val();
        appCont.resume.expect.city = $("#exp-address .sel-city input").val();
        appCont.resume.expect.district = $("#exp-address .sel-district input").val();

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
        }
        console.log(postCvdata, 2);
        EventUtils.ajaxReq("/user/user/modifyCvBaiscInfo", "post", postCvdata, function(resp, status) {
            //  console.log(resp, 2);
        })
    }

    if (editType == "all" || editType == "work") {

        var worksArray = $(".work-address");
        for (var i = 0; i < appCont.resume.worksExps.length; i++) {
            appCont.resume.worksExps[i].province = worksArray.eq(i).find(".sel-province input").val();
            appCont.resume.worksExps[i].city = worksArray.eq(i).find(".sel-city input").val();
            appCont.resume.worksExps[i].district = worksArray.eq(i).find(".sel-district input").val();
        };

        var postCvWorks = [];
        for (var i = 0; i < appCont.resume.worksExps.length; i++) {
            var worksdateobj = $(".worksexp-date").eq(i);
            appCont.resume.worksExps[i].initdate = {
                startyear: worksdateobj.find(".sel-startyear input").val(),
                startmonth: worksdateobj.find(".sel-startmonth input").val(),
                endyear: worksdateobj.find(".sel-endyear input").val(),
                endmonth: worksdateobj.find(".sel-endmonth input").val()
            }
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
                endTime: appCont.resume.worksExps[i].initdate.endyear + "-" + appCont.resume.worksExps[i].initdate.endmonth,
            }
            postCvWorks.push(workexp);
        }
        console.log(postCvWorks, 3);
        postCvWorks = JSON.stringify(postCvWorks);

        EventUtils.ajaxReq("/user/user/modifyCvCo", "post", { userId: parObj.userId, cvArray: postCvWorks }, function(resp, status) {
            console.log(resp, 3);
            for (var i = 0; i < appCont.resume.worksExps.length; i++) {
                appCont.resume.worksExps[i].cvCpyId = resp.data[i].cv_cpy_id;
            }
        })
    }

    if (editType == "all" || editType == "edu") {

        var majorArray = $(".major-name");
        for (var j = 0; j < appCont.resume.edus.length; j++) {
            appCont.resume.edus[j].major = majorArray.eq(j).find(".major-input-1 input").val();
            appCont.resume.edus[j].submajor = majorArray.eq(j).find(".major-input-2 input").val();
            appCont.resume.edus[j].exmajor = majorArray.eq(j).find(".ex-major").val();
        }

        var postCvEdus = [];
        for (var j = 0; j < appCont.resume.edus.length; j++) {
            var edudateobj = $(".edus-date").eq(j);
            appCont.resume.edus[j].initdate = {
                startyear: edudateobj.find(".sel-startyear input").val(),
                startmonth: edudateobj.find(".sel-startmonth input").val(),
                endyear: edudateobj.find(".sel-endyear input").val(),
                endmonth: edudateobj.find(".sel-endmonth input").val()
            }
            var edu = {
                userId: parObj.userId,
                cvEduId: appCont.resume.edus[j].cvEduId,
                schoolName: appCont.resume.edus[j].uni,
                professional: appCont.resume.edus[j].major + ";" + appCont.resume.edus[j].submajor + ";" + appCont.resume.edus[j].exmajor,
                qualification: appCont.resume.edus[j].qualification,
                startTime: appCont.resume.edus[j].initdate.startyear + "-" + appCont.resume.edus[j].initdate.startmonth,
                endTime: appCont.resume.edus[j].initdate.endyear + "-" + appCont.resume.edus[j].initdate.endmonth,
            }
            postCvEdus.push(edu);
        }
        console.log(postCvEdus, 4);
        postCvEdus = JSON.stringify(postCvEdus);

        EventUtils.ajaxReq("/user/user/modifyCvEdu", "post", { userId: parObj.userId, cvArray: postCvEdus }, function(resp, status) {
            for (var i = 0; i < appCont.resume.edus.length; i++) {
                appCont.resume.edus[i].cvEduId = resp.data[i].cv_edu_id;
            }
            console.log(resp, 4);
        })
    }

    if (editType == "all" || editType == "project") {
        var postCvProjects = [];
        for (var k = 0; k < appCont.resume.projects.length; k++) {
            var projectdateobj = $(".projects-date").eq(k);
            appCont.resume.projects[k].initdate = {
                startyear: projectdateobj.find(".sel-startyear input").val(),
                startmonth: projectdateobj.find(".sel-startmonth input").val(),
                endyear: projectdateobj.find(".sel-endyear input").val(),
                endmonth: projectdateobj.find(".sel-endmonth input").val()
            }
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
        console.log(postCvProjects, 5)
        postCvProjects = JSON.stringify(postCvProjects);

        EventUtils.ajaxReq("/user/user/modifyCvPro", "post", { userId: parObj.userId, cvArray: postCvProjects }, function(resp, status) {
            for (var i = 0; i < appCont.resume.projects.length; i++) {
                appCont.resume.projects[i].cvProId = resp.data[i].cv_pro_id;
            }
            console.log(resp, 5);
        })
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
        }
        //  console.log(postdata);
    EventUtils.ajaxReq("/recruit/getMarkList", "get", postdata, function(resp, status) {
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
    })
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
    }
    EventUtils.ajaxReq("/jobfair/getMarkList", "get", postdata, function(resp, status) {
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
    })
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
    }
    EventUtils.ajaxReq("/user/user/getMyApply", "get", postdata, function(resp, status) {
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
    })
}