/**
 * Created by xuanyuan on 2016/11/27.
 */

var objMe = this;
var parObj = EventUtils.urlExtrac(window.location);
var respObj = {}; //请求的本页面的数据集合

function infoRequest() {
    var postdata = {
        userId: parObj.userId,
        loginIdentifier: parObj.loginId
    };
    console.log(postdata);
    EventUtils.ajaxReq("/user/user/getInfo", "get", postdata, function(resp, status) {
        respObj = resp.data;
        console.log(respObj);
        var briefdata = {
            name: respObj.userInfo.realName,
            gender: respObj.userInfo.sex == "1" ? "男" : "女",
            birthyear: respObj.userInfo.birthday.split("-")[0],
            birthmonth: respObj.userInfo.birthday.split("-")[1],
            birthday: respObj.userInfo.birthday.split("-")[2],
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
                    province: respObj.companyList[i].workAddress.split(";")[0],
                    city: respObj.companyList[i].workAddress.split(";")[1],
                    district: respObj.companyList[i].workAddress.split(";")[2],
                    salary: respObj.companyList[i].salary,
                    startyear: respObj.companyList[i].startTime.split("-")[0],
                    startmonth: respObj.companyList[i].startTime.split("-")[1],
                    endyear: respObj.companyList[i].endTime.split("-")[0],
                    endmonth: respObj.companyList[i].endTime.split("-")[1],
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
                    major: respObj.eduList[j].professional.split(";")[0],
                    submajor: respObj.eduList[j].professional.split(";")[1],
                    exmajor: respObj.eduList[j].professional.split(";")[2],
                    startyear: respObj.eduList[j].startTime.split("-")[0],
                    startmonth: respObj.eduList[j].startTime.split("-")[1],
                    endyear: respObj.eduList[j].endTime.split("-")[0],
                    endmonth: respObj.eduList[j].endTime.split("-")[1],
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
                    startyear: respObj.projectList[k].startTime.split("-")[0],
                    startmonth: respObj.projectList[k].startTime.split("-")[1],
                    endyear: respObj.projectList[k].endTime.split("-")[0],
                    endmonth: respObj.projectList[k].endTime.split("-")[1],
                    desc: respObj.projectList[k].description,
                    resp: respObj.projectList[k].position,
                    achiev: respObj.projectList[k].achievement
                }
                projects.push(project);
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
                    province: respObj.cvInfo.expPlace.split(";")[0],
                    city: respObj.cvInfo.expPlace.split(";")[1],
                    district: respObj.cvInfo.expPlace.split(";")[2],
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
            appModal.resumeInfo = appCont.resume = cvInfo;
            $(".edit").hide();
            $(".view").show();
        }
    })
}

infoRequest();

var appTop = new Vue({
    el: "#app-top",
    data: {
        homeLink: "index.html?userId=" + parObj.userId
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
            gender: "男",
            birthyear: "1988",
            birthmonth: "1",
            birthday: "1",
            address: {
                province: "浙江",
                city: "杭州",
                district: "滨江"
            },
            phone: "15264598745",
            state: "中国"
        },
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
                id: respObj.id,
                userId: parObj.userId,
                loginIdentifier: parObj.loginId,
                sex: this.briefInfo.gender == "男" ? 1 : 2,
                birthday: this.briefInfo.birthyear + "-" + this.briefInfo.birthmonth + "-" + this.briefInfo.birthday,
                liveStatus: this.briefInfo.state,
                province: this.briefInfo.address.province,
                city: this.briefInfo.address.city,
                area: this.briefInfo.address.district,
            }
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
        },
        age: function(birthyear) {
            var date = new Date();
            return (date.getFullYear() - birthyear);
        },
        showPre: function() {
            appModal.showModal = true;
            appModal.showPreview = true;
        },
        uploading: function() {
            appModal.showModal = true;
            appModal.showUpload = true;
        }
    },
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
                city: ["杭州", "新乡"],
                district: ["滨江区", "红旗区"]
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
            phone: "15264598745",
            email: "xqztc@163.com",
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
                salary: 0,
                startyear: 2010,
                startmonth: 2,
                endyear: 2016,
                endmonth: 10,
                resp: ""
            }],
            edus: [{
                show: true,
                uni: "",
                major: "",
                submajor: "",
                exmajor: "",
                startyear: 2006,
                startmonth: 2,
                endyear: 2010,
                endmonth: 10,
                qualification: "",

            }],
            projects: [{
                show: true,
                name: "",
                firma: "",
                startyear: 2010,
                startmonth: 2,
                endyear: 2016,
                endmonth: 10,
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
            states: ['全部状态', '未投递', '已投递', '已下线'],
            curstate: "全部状态",
            results: [
                { pos: "艺术设计", salary: "7k-9k", major: "设计相关专业", worksexp: "1-3年经验", scolar: "大专", address: { province: "浙江省", city: "杭州市", district: "滨江区" }, posAmount: 2, inc: "杭州煌巢信息科技有限公司", IncProps: "国企", IncScale: "20-99人", publicDate: "2017-11-11" },
                { pos: "艺术设计", salary: "7k-9k", major: "设计相关专业", worksexp: "1-3年经验", scolar: "大专", address: { province: "浙江省", city: "杭州市", district: "滨江区" }, posAmount: 2, inc: "杭州煌巢信息科技有限公司", IncProps: "国企", IncScale: "20-99人", publicDate: "2017-11-11" },
                { pos: "艺术设计", salary: "7k-9k", major: "设计相关专业", worksexp: "1-3年经验", scolar: "大专", address: { province: "浙江省", city: "杭州市", district: "滨江区" }, posAmount: 2, inc: "杭州煌巢信息科技有限公司", IncProps: "国企", IncScale: "20-99人", publicDate: "2017-11-11" },
                { pos: "艺术设计", salary: "7k-9k", major: "设计相关专业", worksexp: "1-3年经验", scolar: "大专", address: { province: "浙江省", city: "杭州市", district: "滨江区" }, posAmount: 2, inc: "杭州煌巢信息科技有限公司", IncProps: "国企", IncScale: "20-99人", publicDate: "2017-11-11" },
                { pos: "艺术设计", salary: "7k-9k", major: "设计相关专业", worksexp: "1-3年经验", scolar: "大专", address: { province: "浙江省", city: "杭州市", district: "滨江区" }, posAmount: 2, inc: "杭州煌巢信息科技有限公司", IncProps: "国企", IncScale: "20-99人", publicDate: "2017-11-11" },
                { pos: "艺术设计", salary: "7k-9k", major: "设计相关专业", worksexp: "1-3年经验", scolar: "大专", address: { province: "浙江省", city: "杭州市", district: "滨江区" }, posAmount: 2, inc: "杭州煌巢信息科技有限公司", IncProps: "国企", IncScale: "20-99人", publicDate: "2017-11-11" },
                { pos: "UI设计", salary: "7k-9k", major: "设计相关专业", worksexp: "1-3年经验", scolar: "大专", address: { province: "浙江省", city: "杭州市", district: "滨江区" }, posAmount: 2, inc: "杭州煌巢信息科技有限公司", IncProps: "国企", IncScale: "20-99人", publicDate: "2017-11-11" }
            ]
        },
        colRecList: {
            curpage: 1,
            states: ['全部状态', '未投递', '已投递', '已下线'],
            curstate: "全部状态",
            results: [
                { title: "艺术设计", salary: "7k-9k", major: "设计相关专业", worksexp: "1-3年经验", scolar: "大专", address: { province: "浙江省", city: "杭州市", district: "滨江区" }, recruitDate: "2016-12-11", posAmount: 20, inc: "杭州煌巢信息科技有限公司", IncProps: "国企", publicDate: "2017-11-11" },
                { title: "艺术设计", salary: "7k-9k", major: "设计相关专业", worksexp: "1-3年经验", scolar: "大专", address: { province: "浙江省", city: "杭州市", district: "滨江区" }, recruitDate: "2016-12-11", posAmount: 20, inc: "杭州煌巢信息科技有限公司", IncProps: "国企", publicDate: "2017-11-11" },
                { title: "艺术设计", salary: "7k-9k", major: "设计相关专业", worksexp: "1-3年经验", scolar: "大专", address: { province: "浙江省", city: "杭州市", district: "滨江区" }, recruitDate: "2016-12-11", posAmount: 20, inc: "杭州煌巢信息科技有限公司", IncProps: "国企", publicDate: "2017-11-11" },
                { title: "艺术设计", salary: "7k-9k", major: "设计相关专业", worksexp: "1-3年经验", scolar: "大专", address: { province: "浙江省", city: "杭州市", district: "滨江区" }, recruitDate: "2016-12-11", posAmount: 20, inc: "杭州煌巢信息科技有限公司", IncProps: "国企", publicDate: "2017-11-11" },
                { title: "UI设计", salary: "7k-9k", major: "设计相关专业", worksexp: "1-3年经验", scolar: "大专", address: { province: "浙江省", city: "杭州市", district: "滨江区" }, recruitDate: "2016-12-11", posAmount: 20, inc: "杭州煌巢信息科技有限公司", IncProps: "国企", publicDate: "2017-11-11" },
                { title: "艺术设计", salary: "7k-9k", major: "设计相关专业", worksexp: "1-3年经验", scolar: "大专", address: { province: "浙江省", city: "杭州市", district: "滨江区" }, recruitDate: "2016-12-11", posAmount: 20, inc: "杭州煌巢信息科技有限公司", IncProps: "国企", publicDate: "2017-11-11" }
            ]
        },
        myPosList: {
            curpage: 1,
            states: ['全部状态', '未查看', '已查看', '已反馈'],
            curstate: "全部状态",
            results: [
                { title: "职位名称", salary: "年薪", addr: "地区", scolar: '学历要求', worksexp: "经验要求", postdate: "2016-10-25", inc: "公司名称", state: 0, feedresult: "" },
                { title: "职位名称", salary: "年薪", addr: "地区", scolar: '学历要求', worksexp: "经验要求", postdate: "2016-10-25", inc: "杭州煌巢科技技术有限公司", state: 1, feedresult: "" },
                { title: "职位名称", salary: "年薪", addr: "地区", scolar: '学历要求', worksexp: "经验要求", postdate: "2016-10-25", inc: "公司名称", state: 0, feedresult: "" },
                { title: "职位名称", salary: "年薪", addr: "地区", scolar: '学历要求', worksexp: "经验要求", postdate: "2016-10-25", inc: "公司名称", state: 2, feedresult: "不合适" },
                { title: "职位名称", salary: "年薪", addr: "地区", scolar: '学历要求', worksexp: "经验要求", postdate: "2016-10-25", inc: "公司名称", state: 0, feedresult: "" },
            ]
        }

    },
    methods: {
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
            appModal.showTrade = true;
        },
        popTradeSingle: function(index) {
            appModal.showModal = true;
            this.resume.curWorksIndex = index;
            appModal.showTradeSingle = true;

        },
        popPosition: function() {
            appModal.showModal = true;
            appModal.showPosition = true;
        },
        showPre: function() {
            appModal.showModal = true;
            appModal.showPreview = true;
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

            this.resume.firstEdit = false;
            postResume("all");
            $(".edit").hide();
            $(".view").show();
        },
        deleteItem: function(type, index) {
            if (type == "worksexp") {
                this.resume.worksExps.splice(index, 1);
                postResume("work", "del");
            } else if (type == "edu") {
                this.resume.edus.splice(index, 1);
                postResume("edu", "del");
            } else if (type == "project") {
                this.resume.projects.splice(index, 1);
                postResume("project", "del");
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
        showpage: function(totalitems) {
            var totalpage = 1;
            if (totalitems % 3 == 0) {
                totalpage = totalitems / 3
            } else {
                totalpage = Math.floor(totalitems / 3) + 1;
            }
            if (totalpage < 3) {
                return totalpage;
            } else {
                return 3;
            }
        },
        topage: function(page, type) {
            if (type == "course") {
                this.courses.curpage = page;
            } else if (type == "col-study") {
                this.colStuList.curpage = page;
            } else if (type == "col-pos") {
                this.colPosList.curpage = page;
            } else if (type == "col-rec") {
                this.colRecList.curpage = page;
            } else if (type == "my-pos") {
                this.myPosList.curpage = page;
            }
        }
    },
    components: {
        'pagination': pagination
    }
});

var appModal = new Vue({
    el: "#app-modal",
    data: {
        checkedTrades: [],
        showModal: false,
        showTrade: false,
        showTradeSingle: false,
        showPreview: false,
        showUpload: false,
        showPosition: false,
        trades: workareas,
        baseInfo: appPorto.briefInfo,
        resumeInfo: appCont.resume,
        database: {
            posdata: posArray
        }
    },
    methods: {
        closePorto: function() {
            this.showUpload = false;
            this.showModal = false;
        },
        closeTrade: function() {
            this.showTrade = false;
            this.showTradeSingle = false;
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
                this.showTrade = false;
            } else if (type == "worksexp") {
                var index = appCont.resume.curWorksIndex;
                appCont.resume.worksExps[index].trade = $(".trade-single-table input[type='radio']:checked").val();
                this.showTradeSingle = false;
            }
            this.showModal = false;
        },
        cancelTrade: function() {
            this.showTrade = false;
            this.showTradeSingle = false;
            this.showModal = false;
        },
        submitPos: function(array) {
            appCont.resume.expect.posItems = array.join();
            this.showPosition = false;
            this.showModal = false;
        },
        cancelPos: function() {
            this.showPosition = false;
            this.showModal = false;
        },
        hidemodal: function() {
            this.showModal = false;
            this.showTrade = false;
            this.showPreview = false;
        },
        stayshow: function(ev) {
            ev.stopPropagation();
            return false;
        },
    },
    watch: {
        "showUpload": function(curval) {
            if (curval) {

            }
        },
        'showTradeSingle': function(curval) {
            if (curval) {
                var top = Math.floor($(window).height() * 0.15 + $("body").scrollTop()) + "px";
                $(".trade-box-single").css("margin-top", top);
            }
        },
        'showTrade': function(curval) {
            if (curval) {
                var top = Math.floor($(window).height() * 0.15 + $("body").scrollTop()) + "px";
                $(".trade-box-multi").css("margin-top", top);
            }
        },
        'showPosition': function(curval) {
            if (curval) {
                var top = Math.floor($(window).height() * 0.15 + $("body").scrollTop()) + "px";
                $(".pos-pop-box").css("margin-top", top);
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
        this.files = [];
    });
    $('.zoom-in').on('click', function() {
        cropper.zoomIn();
    });
    $('.zoom-out').on('click', function() {
        cropper.zoomOut();
    });

    $('#btnSubmit').on('click', function() {
        //      var img = cropper.getDataURL().replace('data:image/png;base64,', '');
        //  var url = 'AvatarHandler.ashx';
        //  var data = {
        //      action: "add",
        //      picStr: img
        //  };
        //  $.ajax(url, {
        //      type: 'post',
        //      data: data,
        //      success: function (data) {
        //
        //      },
        //      error: function (XMLHttpRequest, textStatus, errorThrown) {
        //
        //      }
        //  });
        // $('.cropped').append('<img src="' + img + '" align="absmiddle" style="width:64px;margin-top:4px;border-radius:64px;box-shadow:0px 0px 12px #7E7E7E;" ><p>64px*64px</p>');
        var imgsrc = cropper.getDataURL();
        //console.log(imgsrc);
        //$("#porto-img").html('');
        //console.log($("#porto-img").length);
        $(".porto-img").html("<img src='" + imgsrc + "' />");
        appModal.showUpload = false;
        appModal.showModal = false;
        //     css("src",cropper.getDataURL());

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
            case "edu":
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


function init_safepos() {
    var p_left = Math.floor($(".safe-range p").width() * $(".safe-range").width() / 100) - 16 + "px";
    $(".r-pointer").css("left", p_left);
}



function navEventBind() {
    $(".sideBox>li").bind("click", function() {
        $(".sideBox").children("li.on").removeClass("on");
        $(this).addClass("on");
        $(".sideBox .sub-li").hide();
        if ($(this).find(".sub-li").length > 0) {
            $(this).find(".sub-li").show();
            $(this).find(".sub-li p").unbind("click").bind("click", function() {
                $(".sideBox .sub-li .on").removeClass("on");
                $(this).addClass("on");
                $(".content").children().hide();
                $(".content").children("." + $(this).attr("paneid")).show();
                selectInitPos();
                return false;
            });
        }
        $(".content").children().hide();
        $(".content").children("." + $(this).attr("paneid")).show();
        selectInitPos();
    });
}

function modalEventBind() {
    $(".bind-acc button.chg-phone").click(function() {
        $(".modal").show();
        $(".modal").children().hide();
        $(".modal .phone-change").show();
        $(".close").unbind("click").bind("click", function() {
            $(this).closest("div").hide();
            $(".modal").hide();
        })
    });
    $(".bind-acc button.wechatBind").click(function() {
        $(".modal").show();
        $(".modal").children().hide();
        $(".modal .wechat-bind").show();
        $(".close").unbind("click").bind("click", function() {
            $(this).closest("div").hide();
            $(".modal").hide();
        });
    });
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
        console.log(postUserdata, 1);
        EventUtils.ajaxReq("/user/user/modifyInfo", "post", postUserdata, function(resp, status) {
            console.log(resp, 1);
        })
    }

    if (editType == "all" || editType == "trade") {
        if (!isDel) {
            appCont.resume.expect.province = $(".exp-address .sel-province input").val();
            appCont.resume.expect.city = $(".exp-address .sel-city input").val();
            appCont.resume.expect.district = $(".exp-address .sel-district input").val();
        }
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
        if (!isDel) {
            var worksArray = $(".work-address");
            for (var i = 0; i < appCont.resume.worksExps.length; i++) {
                appCont.resume.worksExps[i].province = worksArray.eq(i).find(".sel-province input").val();
                appCont.resume.worksExps[i].city = worksArray.eq(i).find(".sel-city input").val();
                appCont.resume.worksExps[i].district = worksArray.eq(i).find(".sel-district input").val();
            };
        }
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
        if (!isDel) {
            var majorArray = $(".major-name");
            for (var j = 0; j < appCont.resume.edus.length; j++) {
                appCont.resume.edus[j].major = majorArray.eq(j).find(".major-input-1 input").val();
                appCont.resume.edus[j].submajor = majorArray.eq(j).find(".major-input-2 input").val();
                appCont.resume.edus[j].exmajor = majorArray.eq(j).find(".ex-major").val();
            }
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