/**
 * Created by xuanyuan on 2016/11/27.
 */

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
        appPorto.briefInfo = briefdata;
        if (respObj.userInfo.cvStatus == "0") { //首次编辑页面信息
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
        // 账户信息
        var percent = 0;
        if (respObj.userInfo.mobile != "") {
            percent += 50;
        }
        if (respObj.userInfo.email != "") {
            percent += 30;
        }
        init_safepos(percent);
        var configdata = {
            loginName: respObj.userInfo.loginName,
            safeLevel: percent + "%",
            bind: {
                mobile: respObj.userInfo.mobile,
                email: respObj.userInfo.email
            }
        }
        appCont.config = configdata;
    });

}

infoRequest();

var appTop = new Vue({
    el: "#app-top",
    data: {
        homeLink: "index.html?userId=" + (parObj.userId || localStorage.userId)
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
            this.briefInfo = cloneObj(this.cloneInfo);
            this.viewInfo = true;
        },
        edit: function() {
            this.cloneInfo = cloneObj(this.briefInfo);
            this.initAddress = cloneObj(this.briefInfo.address);
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
    data: {}
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
            safeLevel: "80%",
            bind: { mobile: "", email: "" }
        }
    },
    methods: {
        posLink: function(item) {
            if (item.jobFairId) {
                return "detail-increcruit.html?userId=" + parObj.userId + "&jobfairId=" + item.jobFairId;
            }
            if (item.recruitId) {
                return "detail-position.html?userId=" + parObj.userId + "&recruitId=" + item.recruitId;
            }
        },
        infoExtrac: function(item) {
            if (item) {
                return EventUtils.infoExtrac(item)
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
        feedRes: function(action, obj) {
            if ($(obj).parent("li").hasClass("on")) {
                if (action == "over") {
                    $(obj).siblings(".feedback-result").show();
                } else {
                    $(obj).siblings(".feedback-result").hide();
                }
            }
        },
        remainText: function(text) {
            if (1000 - text.length < 0) {
                return 0;
            }
            return (1000 - text.length)
        },
        checkText: function(type, index) {
            if (type == "worksresp") {
                var len = this.resume.worksExps[index].resp.length;
                if (len > 1000) {
                    alert("最多只能输入1000字！");
                    this.resume.worksExps[index].resp = this.resume.worksExps[index].resp.slice(0, 1000);
                }
            } else if (type == "prodesc") {
                var len = this.resume.projects[index].desc.length;
                if (len > 1000) {
                    alert("最多只能输入1000字！");
                    this.resume.projects[index].desc = this.resume.projects[index].desc.slice(0, 1000);
                }
            } else if (type == "proresp") {
                var len = this.resume.projects[index].resp.length;
                if (len > 1000) {
                    alert("最多只能输入1000字！");
                    this.resume.projects[index].resp = this.resume.projects[index].resp.slice(0, 1000);
                }
            } else if (type == "proachiev") {
                var len = this.resume.projects[index].achiev.length;
                if (len > 1000) {
                    alert("最多只能输入1000字！");
                    this.resume.projects[index].achiev = this.resume.projects[index].achiev.slice(0, 1000);
                }
            } else if (type == "selfeval") {
                var len = this.resume.selfEval.length;
                if (len > 1000) {
                    alert("最多只能输入1000字！");
                    this.resume.selfEval = this.resume.selfEval.slice(0, 1000);
                }
            } else if (type == "psinfo") {
                var len = this.resume.psInfo.length;
                if (len > 1000) {
                    alert("最多只能输入1000字！");
                    this.resume.psInfo = this.resume.psInfo.slice(0, 1000);
                }
            } else if (type == "skill") {
                var len = this.resume.skills.length;
                if (len > 1000) {
                    alert("最多只能输入1000字！");
                    this.resume.skills = this.resume.skills.slice(0, 1000);
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
            appModal.showModal = true;
            appModal.show.preview = true;
            $(window).scrollTop(0);
        },
        addWorksexp: function() {
            for (var i = 0; i < this.resume.worksExps.length; i++) {
                this.resume.worksExps[i].show = false;
            }
            var worksexp = cloneObj(this.resume.worksExps[0]);
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
                startyear: 2010,
                startmonth: 2,
                endyear: 2016,
                endmonth: 10,
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
                startyear: "",
                startmonth: "",
                endyear: "",
                endmonth: "",
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
            var isFilled = true;
            $(".edit-must input:visible").each(function(index) {
                if (this.value == "") {
                    $(this).addClass("hint-nullable");
                    isFilled = false;
                }
            });
            if (!isFilled) {
                alert("请完成必填信息！");
                return false;
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
                    alert("至少保留一项！");
                }
            } else if (type == "edu") {
                if (this.resume.edus.length > 1) {
                    delItem("edu", appCont.resume.edus[index].cvEduId);
                    this.resume.edus.splice(index, 1);
                } else {
                    alert("至少保留一项！");
                }
            } else if (type == "project") {
                if (this.resume.projects.length > 1) {
                    delItem("project", appCont.resume.projects[index].cvProId);
                    this.resume.projects.splice(index, 1);
                } else {
                    alert("至少保留一项！");
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
        pagesum: function(totalitems) {
            var totalpage = 1;
            if (totalitems % 3 == 0) {
                totalpage = totalitems / 3
            } else {
                totalpage = Math.floor(totalitems / 3) + 1;
            }
            return totalpage;
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
        apply: function(type, id) {
            if (type == "recruit") {
                var postdata = {
                    userId: parObj.userId,
                    recruitId: id
                }
                EventUtils.ajaxReq("/recruit/cooperateRecruit", "post", postdata, function(resp, status) {
                    console.log(resp);
                    if (resp.data && resp.data.isApply == "0") {
                        alert("投递成功！")
                    } else {
                        alert(resp.info)
                    }
                });
            }
            if (type == "jobfair") {
                var postdata = {
                    userId: parObj.userId,
                    jobFairId: id
                }
                EventUtils.ajaxReq("/jobfair/cooperateJobFair", "post", postdata, function(resp, status) {
                    console.log(resp);
                    if (resp.data && resp.data.isApply == "0") {
                        alert("投递成功！")
                    } else {
                        alert(resp.info)
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
            wechat: false
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
        hidemodal: function() {
            for (var key in this.show) {
                this.show[key] = false;
            }
            this.showModal = false;
        },
        stayshow: function(ev) {
            ev.stopPropagation();
            return false;
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
        }
    },
    watch: {
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
    selectInitInput();
    selectInitPos();
    // selectEventBind();
    init_safepos();
    editEventBind();
    navEventBind();
    if (parObj.theme) {
        $(".sideBox li[paneid='" + parObj.theme + "']").trigger("click");
    }
    modalEventBind();
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
            alert("请上传小于500K的头像！");
            return
        }
        var postdata = {
            userId: parObj.userId,
            userIcon: imgsrc
        }
        EventUtils.ajaxReq("/center/user/uploadIcon", "post", postdata, function(resp, status) {
            $("#avatar-box").html("<img src='" + resp.data + "' />");
        });
        $(".porto-img").html("<img src='" + imgsrc + "' />");
        appModal.show.upload = false;
        appModal.showModal = false;
    })
}

// 页面编辑事件绑定
function editEventBind() {
    var oldResume = cloneObj(appCont.resume);

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
        oldResume = cloneObj(appCont.resume);
    });
    $(".resumeBox .edit-item .buttons button:nth-of-type(1)").click(function() {
        var editBlock = $(this).closest(".edit-item");
        var viewName = editBlock.attr("name");
        var postdata = {};
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
        appCont.resume = cloneObj(oldResume);
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


function navEventBind() {
    $(".sideBox .sub-li p").unbind("click").bind("click", function() {
        $(".sideBox .sub-li .on").removeClass("on");
        $(this).addClass("on");
        if ($(this).attr("paneid") == "collec-job") {
            colposRequest(appCont.colPosList.applyindex, 1);
        }
        if ($(this).attr("paneid") == "collec-recruitment") {
            colrecRequest(appCont.colRecList.applyindex, 1);
        }
        $(".content").children().hide();
        $(".content").children("." + $(this).attr("paneid")).show();
        selectInitPos();
        return false;
    });

    $(".sideBox>li").unbind("click").bind("click", function() {
        $(".sideBox").children("li.on").removeClass("on");
        $(this).addClass("on");
        $(".sideBox .sub-li").hide();
        if ($(this).find(".sub-li").length > 0) {
            $(this).find(".sub-li").show();
            $(".content").children().hide();
            $(".content").children("." + $(this).find(".sub-li .on").attr("paneid")).show();
        }
        if ($(this).attr("paneid") == "jobBox") {
            posRequest(appCont.myPosList.jobsrc, appCont.myPosList.jobstate, 1);
        }
        $(".content").children().hide();
        $(".content").children("." + $(this).attr("paneid")).show();
        selectInitPos();
    });
}

function modalEventBind() {
    $(".msg-center").click(function() {
        $(".modal").show();
        $(".modal").children().hide();
        $(".modal .msg-box").show();
    })
    $(".msg-body li").bind("click", function() {
        $(".show01").hide();
        $(".show02").show();
        $(".msg-head").text("系统消息");
    })
    $(".back").click(function() {
        $(".show02").hide();
        $(".show01").show();
        $(".msg-head").text("消息中心");
    })
    $(".close").unbind("click").bind("click", function() {
        $(this).closest("div").hide();
        $(".modal").hide();
    })
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
            nativePlace: appCont.resume.nativePlace,
            nation: appCont.resume.nation,
            cvStatus: 1
        }
        EventUtils.ajaxReq("/user/user/modifyInfo", "post", postUserdata, function(resp, status) {
            console.log(resp, 1);
        })
    }

    if (editType == "all" || editType == "trade") {

        appCont.resume.expect.province = $(".exp-address .sel-province input").val();
        appCont.resume.expect.city = $(".exp-address .sel-city input").val();
        appCont.resume.expect.district = $(".exp-address .sel-district input").val();

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
            console.log(resp, 2);
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
            var workexp = {
                userId: parObj.userId,
                cvCpyId: appCont.resume.worksExps[i].cvCpyId,
                companyName: appCont.resume.worksExps[i].firma,
                companyType: appCont.resume.worksExps[i].trade,
                position: appCont.resume.worksExps[i].pos,
                content: appCont.resume.worksExps[i].resp,
                workAddress: appCont.resume.worksExps[i].province + ";" + appCont.resume.worksExps[i].city + ";" + appCont.resume.worksExps[i].district,
                salary: appCont.resume.worksExps[i].salary,
                startTime: appCont.resume.worksExps[i].startyear + "-" + appCont.resume.worksExps[i].startmonth,
                endTime: appCont.resume.worksExps[i].endyear + "-" + appCont.resume.worksExps[i].endmonth,
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
            var edu = {
                userId: parObj.userId,
                cvEduId: appCont.resume.edus[j].cvEduId,
                schoolName: appCont.resume.edus[j].uni,
                professional: appCont.resume.edus[j].major + ";" + appCont.resume.edus[j].submajor + ";" + appCont.resume.edus[j].exmajor,
                qualification: appCont.resume.edus[j].qualification,
                startTime: appCont.resume.edus[j].startyear + "-" + appCont.resume.edus[j].startmonth,
                endTime: appCont.resume.edus[j].endyear + "-" + appCont.resume.edus[j].endmonth,
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
            var project = {
                userId: parObj.userId,
                cvProId: appCont.resume.projects[k].cvProId,
                companyName: appCont.resume.projects[k].firma,
                projectName: appCont.resume.projects[k].name,
                description: appCont.resume.projects[k].desc,
                position: appCont.resume.projects[k].resp,
                achievement: appCont.resume.projects[k].achiev,
                startTime: appCont.resume.projects[k].startyear + "-" + appCont.resume.projects[k].startmonth,
                endTime: appCont.resume.projects[k].endyear + "-" + appCont.resume.projects[k].endmonth
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
    EventUtils.ajaxReq("/recruit/getMarkList", "get", postdata, function(resp, status) {
        console.log(resp);
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