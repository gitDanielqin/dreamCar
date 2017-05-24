var parObj = EventUtils.urlExtrac(window.location);
var respObj = {}; //请求的本页面的数据集合
// 请求本页面数据
(function() {
    var postdata = {
        userId: parObj.userId,
        loginIdentifier: parObj.loginId
    };

    EventUtils.ajaxReq('/user/school/getInfo', 'get', postdata, function(resp, status) {
        // console.log(resp.data);
        respObj = resp.data;
        //  console.log(respObj.userIcon);
        // appCont.require.testIcon = respObj.userIcon;
        $("#avatar-box").html("<img src='" + respObj.userIcon + "' />");
        //如果高校信息存在，则对简历信息进行初始化
        if (respObj) {
            var portobrief = {
                level: respObj.property,
                address: {
                    province: respObj.province,
                    city: respObj.city,
                    district: respObj.area
                },
                email: respObj.email
            }
            appPorto.uni = respObj.name;
            appPorto.briefInfo = portobrief;
            //   专业数据初始化
            if (resp.data.profession) {
                var majorStrArray = resp.data.profession.split(",");
                var majorArray = [];
                for (var i = 0; i < majorStrArray.length; i++) {
                    majorArray.push({ major: majorStrArray[i].split(":")[0], submajor: majorStrArray[i].split(":")[1] });
                }
            } else {
                var majorArray = [];
                majorArray.push({ major: "", submajor: "" });
            }
            var specialLevel = "";
            if (respObj.propertyType && respObj.propertyType != "") {
                $(".uni-level input[value='" + respObj.propertyType + "']").attr("checked", "true");
                if (respObj.propertyType == "0") {
                    specialLevel = "985";
                } else {
                    specialLevel = "211";
                }
            }
            var resumedata = {
                uni: respObj.name,
                classific: respObj.type,
                amount: respObj.scale,
                level: respObj.property,
                specialLv: specialLevel,
                specialmajor: majorArray,
                intro: respObj.discription != undefined ? respObj.discription : "",
                comLicense: "",
                uniLicense: "",
                comLicenseUrl: respObj.imgUrlBus,
                uniLicenseUrl: respObj.imgUrlAgree,
                hasBusLicense: respObj.imgUrlBus != "",
                hasUniLicense: respObj.imgUrlAgree != "",
                edit: respObj.infoStatus == "0",
                view: respObj.infoStatus != "0"
            }
            console.log(resumedata);
            //console.log(resumedata);
            appCont.resume = resumedata;

            //
            var percent = 0;
            if (respObj.mobile != "") {
                percent += 50;
            }
            if (respObj.email != "") {
                percent += 30;
            }
            init_safepos(percent);
            var configdata = {
                loginName: respObj.loginName,
                safeLevel: percent + "%",
                bind: {
                    mobile: respObj.mobile,
                    email: respObj.email
                }
            }
            appCont.config = configdata;
        }
    });

})()

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
            unilevel: unilevel,
            addrData: addArray
        },
        viewInfo: true,
        uni: "大学名称",
        briefInfo: {
            level: "重点大学",
            address: {
                province: "河南省",
                city: "新乡市",
                district: "红旗区"
            },
            email: "xqztc@qq.com"
        },
        initAddress: {
            province: "",
            city: "",
            district: ""
        },
        cloneInfo: {}
    },
    methods: {
        uploading: function() {
            appModal.showModal = true;
            appModal.showUpload = true;
        },
        save: function() {
            this.briefInfo.address.province = $(".edit-brief .sel-province input").val();
            this.briefInfo.address.city = $(".edit-brief .sel-city input").val();
            this.briefInfo.address.district = $(".edit-brief .sel-district input").val();
            this.viewInfo = true;
            var postdata = {
                userId: parObj.userId,
                schoolId: respObj.schoolId,
                loginName: respObj.loginName,
                property: this.briefInfo.level,
                province: this.briefInfo.address.province,
                city: this.briefInfo.address.city,
                area: this.briefInfo.address.district,
                email: this.briefInfo.email
            }
            console.log(postdata);
            EventUtils.ajaxReq('/user/school/modifyInfo', 'post', postdata, function(resp, status) {
                console.log(resp);
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
        }
    }
});

var appSider = new Vue({
    el: "#app-side",
    data: {}
})

var appCont = new Vue({
    el: "#app-content",
    data: {
        database: {
            classific: uniclassific,
            amount: ["1-10000", "10001-20000", "20001-30000", "30001-40000", "40000以上", ],
            unilevel: unilevel,
            majors: majorArray,
        },
        resume: {
            uni: "中国美术学院",
            classific: "艺术类",
            amount: "",
            level: "重点",
            specialLv: "",
            specialmajor: [
                { major: "", submajor: "" },
                { major: "", submajor: "" }
            ],
            intro: "世界一流的艺术大学",
            comLicense: "",
            uniLicense: "",
            comLicenseUrl: "", //营业执照网上地址
            uniLicenseUrl: "", //办学许可证网上地址
            hasBusLicense: false,
            hasUniLicense: false,
            edit: true,
            view: false
        },
        require: {
            state: "校企合作",
            curpage: 1,
            totalpages: 1,
            totalitems: 0,
            pagesize: 3,
            demandSrc: 0, //0：校企合作 1：招聘会
            newLink: "uniRequire.html?new=1&userId=" + parObj.userId + "&loginId=" + parObj.loginId,
            results: [],
            showCombi: true,
            showRecruit: true
        },
        collect: {
            state: "全部状态",
            curpage: 1,
            totalpages: 1,
            totalitems: 0,
            pagesize: 3,
            results: []
        },
        message: {
            combi: {
                state: "全部状态",
                curpage: 1,
                items: [
                    { code: "01", pos: "岗位名称", major: "专业", stuScale: "人数", uniLevel: "高校性质", uniApply: "高校需要提供的", IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", contactpep: "郑先生", contactway: "18984565569", date: "2017.11.11", time: "24:00" },
                    { code: "01", pos: "岗位名称", major: "专业", stuScale: "人数", uniLevel: "高校性质", uniApply: "高校需要提供的", IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", contactpep: "郑先生", contactway: "18984565569", date: "2017.11.11", time: "24:00" },
                    { code: "01", pos: "岗位名称", major: "专业", stuScale: "人数", uniLevel: "高校性质", uniApply: "高校需要提供的", IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", contactpep: "郑先生", contactway: "18984565569", date: "2017.11.11", time: "24:00" },
                    { code: "02", major: "专业名称", IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", trainWay: "企业提供的培训方式", contactpep: "郑先生", contactway: "18984565569", date: "2017.11.11", time: "24:00", applystate: "01" },
                    { code: "02", major: "专业名称", IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", trainWay: "企业提供的培训方式", contactpep: "郑先生", contactway: "18984565569", date: "2017.11.11", time: "24:00", applystate: "01" },
                    { code: "02", major: "专业名称", IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", trainWay: "企业提供的培训方式", contactpep: "郑先生", contactway: "18984565569", date: "2017.11.11", time: "24:00", applystate: "01" },
                    { code: "02", major: "专业名称", IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", trainWay: "企业提供的培训方式", contactpep: "郑先生", contactway: "18984565569", date: "2017.11.11", time: "24:00", applystate: "03" },
                ],
                results: [
                    { code: "01", pos: "岗位名称", major: "专业", stuScale: "人数", uniLevel: "高校性质", uniApply: "高校需要提供的", IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", contactpep: "郑先生", contactway: "18984565569", date: "2017.11.11", time: "24:00" },
                    { code: "01", pos: "岗位名称", major: "专业", stuScale: "人数", uniLevel: "高校性质", uniApply: "高校需要提供的", IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", contactpep: "郑先生", contactway: "18984565569", date: "2017.11.11", time: "24:00" },
                    { code: "01", pos: "岗位名称", major: "专业", stuScale: "人数", uniLevel: "高校性质", uniApply: "高校需要提供的", IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", contactpep: "郑先生", contactway: "18984565569", date: "2017.11.11", time: "24:00" },
                    { code: "02", major: "专业名称", IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", trainWay: "企业提供的培训方式", contactpep: "郑先生", contactway: "18984565569", date: "2017.11.11", time: "24:00", applystate: "01" },
                    { code: "02", major: "专业名称", IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", trainWay: "企业提供的培训方式", contactpep: "郑先生", contactway: "18984565569", date: "2017.11.11", time: "24:00", applystate: "01" },
                    { code: "02", major: "专业名称", IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", trainWay: "企业提供的培训方式", contactpep: "郑先生", contactway: "18984565569", date: "2017.11.11", time: "24:00", applystate: "01" },
                    { code: "02", major: "专业名称", IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", trainWay: "企业提供的培训方式", contactpep: "郑先生", contactway: "18984565569", date: "2017.11.11", time: "24:00", applystate: "03" },
                ]
            },
            recruit: {
                state: "全部状态",
                curpage: 1,
                items: [
                    { major: "工业设计", salary: "7K-9K", posAmount: "20人", qualific: "本科", IncAddress: { province: "浙江省", city: "杭州市", district: "滨江区" }, IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", contactpep: "郑先生", contactway: "18984565569", date: "2017.11.11", time: "24:00" },
                    { major: "工业设计", salary: "7K-9K", posAmount: "20人", qualific: "本科", IncAddress: { province: "浙江省", city: "杭州市", district: "滨江区" }, IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", contactpep: "郑先生", contactway: "18984565569", date: "2017.11.11", time: "24:00" },
                    { major: "工业设计", salary: "7K-9K", posAmount: "20人", qualific: "本科", IncAddress: { province: "浙江省", city: "杭州市", district: "滨江区" }, IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", contactpep: "郑先生", contactway: "18984565569", date: "2017.11.11", time: "24:00" },
                    { major: "工业设计", salary: "7K-9K", posAmount: "20人", qualific: "本科", IncAddress: { province: "浙江省", city: "杭州市", district: "滨江区" }, IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", contactpep: "郑先生", contactway: "18984565569", date: "2017.11.11", time: "24:00" },
                    { major: "工业设计", salary: "7K-9K", posAmount: "20人", qualific: "本科", IncAddress: { province: "浙江省", city: "杭州市", district: "滨江区" }, IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", contactpep: "郑先生", contactway: "18984565569", date: "2017.11.11", time: "24:00" },
                ],
                results: [
                    { major: "工业设计", salary: "7K-9K", posAmount: "20人", qualific: "本科", IncAddress: { province: "浙江省", city: "杭州市", district: "滨江区" }, IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", contactpep: "郑先生", contactway: "18984565569", date: "2017.11.11", time: "24:00" },
                    { major: "工业设计", salary: "7K-9K", posAmount: "20人", qualific: "本科", IncAddress: { province: "浙江省", city: "杭州市", district: "滨江区" }, IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", contactpep: "郑先生", contactway: "18984565569", date: "2017.11.11", time: "24:00" },
                    { major: "工业设计", salary: "7K-9K", posAmount: "20人", qualific: "本科", IncAddress: { province: "浙江省", city: "杭州市", district: "滨江区" }, IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", contactpep: "郑先生", contactway: "18984565569", date: "2017.11.11", time: "24:00" },
                    { major: "工业设计", salary: "7K-9K", posAmount: "20人", qualific: "本科", IncAddress: { province: "浙江省", city: "杭州市", district: "滨江区" }, IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", contactpep: "郑先生", contactway: "18984565569", date: "2017.11.11", time: "24:00" },
                    { major: "工业设计", salary: "7K-9K", posAmount: "20人", qualific: "本科", IncAddress: { province: "浙江省", city: "杭州市", district: "滨江区" }, IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", contactpep: "郑先生", contactway: "18984565569", date: "2017.11.11", time: "24:00" },
                ]
            }
        },
        vip: {
            records: [
                { date: "2017.01.01", action: "信息刷新：4条", price: 0, state: "交易完成" },
                { date: "2017.01.01", action: "信息置顶：1次", price: 0, state: "交易完成" },
                { date: "2017.01.01", action: "广告投放：1次", price: 0, state: "交易完成" },
                { date: "2017.01.01", action: "信息匹配：4条", price: 0, state: "交易完成" },
                { date: "2017.01.01", action: "账户充值", price: 500.68, state: "交易完成" }
            ],
            tarif: [
                { level: "初级会员", prior: 1, refresh: 1, mapping: 8, price: 585, icon: "images/crown-junior.png" },
                { level: "中级会员", prior: 2, refresh: 4, mapping: 12, price: 1040, icon: "images/crown-middle.png" },
                { level: "初级会员", prior: 4, refresh: 8, mapping: 16, price: 1560, icon: "images/crown-senior.png" },
            ]
        },
        coop: {
            state: "全部状态",
            curpage: 1,
            items: [
                { IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", trainWay: "企业提供的培训方式", date: "2017.11.11", time: "24:00", coopState: "02", major: "公共管理专业" },
                { IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", trainWay: "企业提供的培训方式", date: "2017.11.11", time: "24:00", coopState: "03", major: "合作专业" },
                { IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", trainWay: "企业提供的培训方式", date: "2017.11.11", time: "24:00", coopState: "03", major: "合作专业" },
                { IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", trainWay: "企业提供的培训方式", date: "2017.11.11", time: "24:00", coopState: "03", major: "合作专业" },
                { IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", trainWay: "企业提供的培训方式", date: "2017.11.11", time: "24:00", coopState: "01", major: "公共管理专业" },
            ],
            results: [
                { userId: "4", IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", trainWay: "企业提供的培训方式", date: "2017.11.11", time: "24:00", coopState: "02", major: "公共管理专业" },
                { userId: "4", IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", trainWay: "企业提供的培训方式", date: "2017.11.11", time: "24:00", coopState: "03", major: "合作专业" },
                { userId: "5", IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", trainWay: "企业提供的培训方式", date: "2017.11.11", time: "24:00", coopState: "03", major: "合作专业" },
                { userId: "5", IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", trainWay: "企业提供的培训方式", date: "2017.11.11", time: "24:00", coopState: "03", major: "合作专业" },
                { userId: "4", IncName: "公司名称", IncProps: "企业性质", IncScale: "企业规模", IncArea: "企业所属行业", trainWay: "企业提供的培训方式", date: "2017.11.11", time: "24:00", coopState: "01", major: "公共管理专业" },
            ]
        },
        config: {
            loginName: "",
            safeLevel: "80%",
            bind: { mobile: "", email: "" }
        }
    },
    watch: {
        "config.bind.mobile": function(curval) {
            var percent = 0;
            if (this.config.bind.mobile != "") {
                percent += 50;
            }
            if (this.config.bind.email != "") {
                percent += 30;
            }
            init_safepos(percent);
            percent += "%";
            this.config.safeLevel = percent;

        },
        "config.bind.email": function(curval) {
            var percent = 0;
            if (this.config.bind.mobile != "") {
                percent += 50;
            }
            if (this.config.bind.email != "") {
                percent += 30;
            }
            init_safepos(percent);
            percent += "%";
            this.config.safeLevel = percent;
        },
        "require.state": function(curval, oldval) {
            if (curval == "校企合作") {
                this.require.demandSrc = 0;
                var postdata = {
                    userId: parObj.userId,
                    loginIdentifier: parObj.loginId,
                    demandType: 1,
                    index: 1,
                    count: 3
                }
                EventUtils.ajaxReq("/demand/getList", "get", postdata, function(resp, status) {
                    console.log(resp);
                    if (resp.data) {
                        appCont.require.totalpages = resp.data.totalPage;
                        appCont.require.pagesize = resp.data.pageSize;
                        appCont.require.results = resp.data.list;
                        appCont.require.totalitems = resp.data.totalRow;
                    } else {
                        appCont.require.results = [];
                        appCont.require.totalitems = 0;
                    }
                })
            } else if (curval == "招聘会") {
                this.require.demandSrc = 1;
                this.require.results = [];
                var postdata = {
                    userId: parObj.userId,
                    loginIdentifier: parObj.loginId,
                    jobFairType: 1,
                    index: 1,
                    count: 3
                }
                EventUtils.ajaxReq("/jobfair/getList", "get", postdata, function(resp, status) {
                    console.log(resp);
                    if (resp.data) {
                        appCont.require.totalpages = resp.data.totalPage;
                        appCont.require.pagesize = resp.data.pageSize;
                        appCont.require.results = resp.data.list;
                        appCont.require.totalitems = resp.data.totalRow;
                    } else {
                        appCont.require.results = [];
                        appCont.require.totalitems = 0;
                    }
                })
            };
            this.require.curpage = 1;
        },
        "collect.state": function(curval, oldval) {
            var mydate = new Date();
            if (curval == "全部状态") {
                $(".collectBox .info-items li").show();
            } else if (curval == "近一个星期") {

            }
        },
        "message.combi.state": function(curval) {
            if (curval == "全部状态") {
                this.message.combi.results = cloneObj(this.message.combi.items);
            } else if (curval == "发出的邀请") {
                this.message.combi.results = [];
                for (var i = 0; i < this.message.combi.items.length; i++) {
                    if (this.message.combi.items[i].code == "02") {
                        this.message.combi.results.push(this.message.combi.items[i]);
                    }
                }
            } else if (curval == "收到的邀请") {
                this.message.combi.results = [];
                for (var i = 0; i < this.message.combi.items.length; i++) {
                    if (this.message.combi.items[i].code == "01") {
                        this.message.combi.results.push(this.message.combi.items[i]);
                    }
                }
            };
            this.message.combi.curpage = 1;
        },
        "coop.state": function(curval) {
            if (curval == "全部状态") {
                this.coop.results = cloneObj(this.coop.items);
            } else if (curval == "合作进行中") {
                this.coop.results = [];
                for (var i = 0; i < this.coop.items.length; i++) {
                    if (this.coop.items[i].coopState == "02") {
                        this.coop.results.push(this.coop.items[i]);
                    }
                }
            } else if (curval == "合作已完成") {
                this.coop.results = [];
                for (var i = 0; i < this.coop.items.length; i++) {
                    if (this.coop.items[i].coopState == "03") {
                        this.coop.results.push(this.coop.items[i]);
                    }
                }
            } else if (curval == "合作待开始") {
                this.coop.results = [];
                for (var i = 0; i < this.coop.items.length; i++) {
                    if (this.coop.items[i].coopState == "01") {
                        this.coop.results.push(this.coop.items[i]);
                    }
                }
            }
            this.coop.curpage = 1;
        }
    },
    methods: {
        changeComLicense: function(obj) {
            if (obj.files[0].size > 3 * 1024 * 1204) {
                alert("请上传小于3M的文件！");
                obj.value = "";
            }
            this.resume.comLicense = obj.value
        },
        changeUniLicense: function(obj) {
            //     console.log(obj.files[0].size);
            if (obj.files[0].size > 3 * 1024 * 1024) {
                alert("请上传小于3M的文件！");
                obj.value = "";
            }
            this.resume.uniLicense = obj.value
        },
        showFile: function(fid) {
            appModal.preImgUrl = EventUtils.getLocalImgUrl(fid);
            appModal.showModal = true;
            appModal.show.preImg = true;
        },
        showPrefile: function(type) {
            if (type == "com") {
                appModal.preImgUrl = appCont.resume.comLicenseUrl;
                console.log(appCont.resume.comLicenseUrl, 1)
                appModal.showModal = true;
                appModal.show.preImg = true;
            } else if (type == "uni") {
                appModal.preImgUrl = appCont.resume.uniLicenseUrl;
                console.log(appCont.resume.uniLicenseUrl, 2)
                appModal.showModal = true;
                appModal.show.preImg = true;
            }
        },
        infoExtrac: function(text) {
            if (text) {
                text = EventUtils.infoExtrac(text);
                return text
            } else {
                return ""
            }
        },
        cityExtrac: function(address) {
            if (address) {
                return address.split(";")[1];
            } else {
                return ""
            }
        },
        requireLink: function(item) {
            if (item.demandId) {
                return "detail-uni.html?userId=" + parObj.userId + "&loginId=" + parObj.loginId + "&demandId=" + item.demandId + "&userType=1";
            }
            if (item.jobFairId) {
                return "detail-unirecruit.html?userId=" + parObj.userId + "&jobfairId=" + item.jobFairId;
            }
        },
        submajors: function(major) {
            var arr = [];
            if (major) {
                for (var i = 0; i < this.database.majors.length; i++) {
                    if (this.database.majors[i].major == major) {
                        return this.database.majors[i].submajor;
                    }
                }
            }
        },
        addMajors: function() {
            if (this.resume.specialmajor.length < 5) {
                this.resume.specialmajor.push({ major: "", submajor: "" });
            } else {
                return false;
            }
        },
        delMajor: function(index) {
            $(".pop-major-box").each(function(index) {
                appCont.resume.specialmajor[index].major = $(this).find(".major-input-1 input").val();
                appCont.resume.specialmajor[index].submajor = $(this).find(".major-input-2 input").val();
            });
            this.resume.specialmajor.splice(index, 1);
            for (var i = 0; i < this.resume.specialmajor.length; i++) {
                $(".pop-major-box").eq(i).find(".major-input-1 input").val(appCont.resume.specialmajor[i].major);
                $(".pop-major-box").eq(i).find(".major-input-2 input").val(appCont.resume.specialmajor[i].submajor);
            }
        },
        editSwipe: function() {
            this.resume.edit = true;
            this.resume.view = false;
        },
        saveResume: function() {
            $(".pop-major-box").each(function(index) {
                appCont.resume.specialmajor[index].major = $(this).find(".major-input-1 input").val();
                if ($(this).find(".ex-major").val()) {
                    appCont.resume.specialmajor[index].submajor = $(this).find(".ex-major").val();
                } else {
                    appCont.resume.specialmajor[index].submajor = $(this).find(".major-input-2 input").val();
                }
            });
            this.resume.hasBusLicense = this.resume.comLicense == "" ? false : true;
            this.resume.hasUniLicense = this.resume.uniLicense == "" ? false : true;
            this.resume.edit = false;
            this.resume.view = true;
            //上传许可证等图片文件
            if (this.resume.comLicense != "") {
                var hascomUrl = false;
                console.log(appCont.resume.comLicense);
                $.ajaxFileUpload({
                    url: 'http://www.xiaoqiztc.com/easily_xq_WebApi/sys/imageUpload', //提交的路径
                    secureuri: false, // 是否启用安全提交，默认为false
                    fileElementId: 'file-busi', // file控件id
                    dataType: 'json',
                    data: {
                        userId: parObj.userId,
                        type: 2,
                        fileName: appCont.resume.comLicense //传递参数，用于解析出文件名
                    }, // 键:值，传递文件名
                    success: function(data, status) {
                        hascomUrl = true;
                        appCont.resume.comLicenseUrl = data.data;
                        console.log(data.data);
                        //     alert(1);
                    },
                    error: function(data, status) {
                        //	alert(2);
                    }
                });
            };

            if (this.resume.uniLicense != "") {
                var hasuniUrl = false;
                console.log(appCont.resume.uniLicense);
                $.ajaxFileUpload({
                    url: 'http://www.xiaoqiztc.com/easily_xq_WebApi/sys/imageUpload', //提交的路径
                    secureuri: false, // 是否启用安全提交，默认为false
                    fileElementId: 'file-uni', // file控件id
                    dataType: 'json',
                    data: {
                        userId: parObj.userId,
                        type: 1,
                        fileName: appCont.resume.uniLicense //传递参数，用于解析出文件名
                    }, // 键:值，传递文件名
                    success: function(data, status) {
                        hasuniUrl = true;
                        appCont.resume.uniLicenseUrl = data.data;
                        console.log(data.data);
                    },
                    error: function(data, status) {
                        //	console.log(data,2);
                    }
                });
            };
            //   console.log(3);
            var majorstring = "";
            for (var i = 0; i < appCont.resume.specialmajor.length; i++) {
                if (appCont.resume.specialmajor[i].major != "") {
                    if (appCont.resume.specialmajor[i].submajor != "") {
                        majorstring += appCont.resume.specialmajor[i].major + ":" + appCont.resume.specialmajor[i].submajor + ",";
                    } else {
                        majorstring += appCont.resume.specialmajor[i].major + ",";
                    }
                }
            }
            if (majorstring.length > 0) {
                majorstring = majorstring.slice(0, majorstring.length - 1);
            }

            if (this.resume.comLicense != "" || this.resume.uniLicense != "") { //如果用户有上传文件
                setTimeout(function() {
                    if (appCont.resume.comLicense != "" && !hascomUrl || appCont.resume.uniLicense != "" && !hasuniUrl) {
                        alert("文件上传失败，请重新上传！");
                    } else {
                        console.log(appCont.resume.comLicenseUrl, appCont.resume.uniLicenseUrl);
                        var postdata = {
                            userId: parObj.userId,
                            schoolId: respObj.schoolId,
                            name: appCont.resume.uni,
                            type: appCont.resume.classific,
                            property: appCont.resume.level,
                            propertyType: appCont.resume.specialLv == "211" ? 1 : 0,
                            scale: appCont.resume.amount,
                            profession: majorstring,
                            imgUrlBus: appCont.resume.comLicenseUrl,
                            imgUrlAgree: appCont.resume.uniLicenseUrl,
                            discription: appCont.resume.intro
                        };
                        EventUtils.ajaxReq('/user/school/modifyInfo', 'post', postdata, function(resp, status) {
                            console.log(resp);
                        })
                    }
                }, 1500)
            } else {
                var postdata = {
                    userId: parObj.userId,
                    schoolId: respObj.schoolId,
                    name: appCont.resume.uni,
                    type: appCont.resume.classific,
                    property: appCont.resume.level,
                    propertyType: appCont.resume.specialLv == "211" ? 1 : 0,
                    scale: appCont.resume.amount,
                    profession: majorstring,
                    imgUrlBus: appCont.resume.comLicenseUrl,
                    imgUrlAgree: appCont.resume.uniLicenseUrl,
                    discription: appCont.resume.intro
                };
                console.log(postdata);
                EventUtils.ajaxReq('/user/school/modifyInfo', 'post', postdata, function(resp, status) {
                    //  console.log(resp);
                })
            }


        },
        checkExlv: function() {
            this.resume.specialLv = $(".uni-level input[type='radio']:checked").val() == "0" ? "985" : "211";
        },
        modItem: function(item) {
            var pageurl = "uniRequire.html?new=0&userId=" + parObj.userId + "&loginId=" + parObj.loginId + "&demandSrc=" + appCont.require.demandSrc;
            if (item.demandId) {
                pageUrl += "&demandId=" + item.demandId
            }
            if (item.jobFairId) {
                pageUrl += "&jobfairId=" + item.jobFairId
            }
            window.open(pageurl, "_blank");
        },
        delItem: function(item) {
            if (item.demandId) {
                var postdata = {
                    userId: parObj.userId,
                    loginIdentifier: parObj.loginId,
                    demandId: item.demandId
                }
                EventUtils.ajaxReq("/demand/delInfo", "post", postdata, function(resp, status) {
                    if (appCont.require.results.length == 1 && appCont.require.curpage > 1) {
                        appCont.require.curpage -= 1;
                    }
                    $(".requireBox .pagination a.page").eq(appCont.require.curpage - 1).parent().trigger("click");
                })
            };
            if (item.jobFairId) {
                var postdata = {
                    userId: parObj.userId,
                    loginIdentifier: parObj.loginId,
                    jobFairId: item.jobFairId
                }
                EventUtils.ajaxReq("/jobfair/delInfo", "post", postdata, function(resp, status) {
                    if (appCont.require.results.length == 1 && appCont.require.curpage > 1) {
                        appCont.require.curpage -= 1;
                    }
                    $(".requireBox .pagination a.page").eq(appCont.require.curpage - 1).parent().trigger("click");
                })
            }

        },
        freshItem: function(item) {
            appModal.showModal = true;
            appModal.show.freshbox = true;
        },
        stickItem: function(item) {
            appModal.showModal = true;
            appModal.show.stickybox = true;
        },
        priceCal1: function(val) {
            var priceInt = parseInt(val);
            if (priceInt == 0) {
                return "- " + priceInt;
            } else if (priceInt > 0) {
                return "+ " + priceInt;
            }
        },
        priceCal2: function(val) {
            var priceF = (parseFloat(val) * 100 - parseInt(val) * 100) % 100;
            //    if(priceF*10%1==0) priceF+="0";
            if (priceF < 10) priceF += "0";
            return ("." + priceF);
        },
        coopSt: function(state) {
            switch (state) {
                case "01":
                    return "合作待开始";
                case "02":
                    return "合作进行中";
                case "03":
                    return "合作已完成";
                default:
                    return "合作待开始"
            }
        },
        coopStyle: function(state) {
            switch (state) {
                case "01":
                    return { color: "#91daef" };
                case "02":
                    return { color: "#f7aa00" };
                case "03":
                    return { color: "#333" };
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
        topage: function(page, type) {
            if (type == "require") {
                if (appCont.require.demandSrc == "0") {
                    var postdata = {
                        userId: parObj.userId,
                        loginIdentifier: parObj.loginId,
                        demandType: 1,
                        index: page,
                        count: 3
                    }
                    EventUtils.ajaxReq("/demand/getList", "get", postdata, function(resp, status) {
                        if (resp.data) {
                            appCont.require.results = resp.data.list;
                            appCont.require.totalitems = resp.data.totalRow;
                            appCont.require.totalpages = resp.data.totalPage;
                        } else {
                            appCont.require.results = [];
                            appCont.require.totalitems = 0;
                        }
                    })
                } else if (appCont.require.demandSrc == "1") {
                    var postdata = {
                        userId: parObj.userId,
                        loginIdentifier: parObj.loginId,
                        jobFairType: 1,
                        index: page,
                        count: 3
                    }
                    EventUtils.ajaxReq("/jobfair/getList", "get", postdata, function(resp, status) {
                        if (resp.data) {
                            appCont.require.results = resp.data.list;
                            appCont.require.totalitems = resp.data.totalRow;
                            appCont.require.totalpages = resp.data.totalPage;
                        } else {
                            appCont.require.results = [];
                            appCont.require.totalitems = 0;
                        }
                    })
                }

                this.require.curpage = page;
            } else if (type == "collect") {
                var postdata = {
                    userId: parObj.userId,
                    loginIdentifier: parObj.loginId,
                    index: page,
                    count: 3
                }
                EventUtils.ajaxReq("/demand/getMarkList", "get", postdata, function(resp, status) {
                    if (resp && resp.data) {
                        appCont.collect.results = resp.data.list;
                        appCont.collect.totalitems = resp.data.totalRow;
                        appCont.collect.totalpages = resp.data.totalPage;
                    } else {
                        appCont.collect.results = [];
                        appCont.collect.totalitems = 0;
                    }
                })
                this.collect.curpage = page;
            } else if (type == "msg-combi") {
                this.message.combi.curpage = page;
            } else if (type == "msg-recruit") {
                this.message.recruit.curpage = page;
            } else if (type == "coop") {
                this.coop.curpage = page;
            }
        },
        remainText: function(text) {
            if (1000 - text.length < 0) {
                return 0;
            }
            return (1000 - text.length)
        },
        checkText: function(type) {
            if (type == "resumeintro") {
                var len = this.resume.intro.length;
                if (1000 - len < 0) {
                    alert("最多只能输入1000字！");
                    this.resume.intro = this.resume.intro.slice(0, 1000);
                }
            }
        },
        cancelCollect: function(demandId, id) {
            var postdata = {
                userId: parObj.userId,
                demandId: demandId,
                id: id
            }
            EventUtils.ajaxReq("/demand/delMarkInfo", "post", postdata, function(resp, status) {
                if (appCont.collect.results.length == 1 && appCont.collect.curpage > 1) {
                    appCont.collect.curpage -= 1;
                }
                console.log(resp);
                $(".collectBox .pagination a.page").eq(appCont.collect.curpage - 1).parent().trigger("click");

            })
        },
        applyCollect: function(demandId) {
            var postdata = {
                userId: parObj.userId,
                loginIdentifier: parObj.loginId,
                demandId: demandId
            }
            EventUtils.ajaxReq("/demand/cooperateDemand", "post", postdata, function(resp, status) {
                console.log(resp);
                alert("申请已发送！");
            })
        },
        popComment: function(id) {
            appModal.comment.userId = id;
            appModal.showModal = true;
            appModal.showComment = true;
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
    computed: {
        majorArr: function() {
            var arr = [];
            for (var i = 0; i < this.database.majors.length; i++) {
                arr.push(this.database.majors[i].major);
            }
            return arr;
        },
        wordscal: function() {
            return (1000 - this.resume.intro.length);
        },
        combimsg: function() {
            var total = 0;
            for (var i = 0; i < this.message.combi.items.length; i++) {
                if (this.message.combi.items[i].code == 01) {
                    total++;
                }
            };
            return total;
        }
    },
    components: {
        'pagination': pagination
    }
});

var appModal = new Vue({
    el: "#app-modal",
    data: {
        account: {
            money: 0,
            freeFreshTimes: 1
        },
        checkedTrades: [],
        show: {
            stickybox: false,
            stickyhintbox: false,
            freshbox: false,
            freshhintbox: false,
            mobile: false,
            email: false,
            wechat: false,
            preImg: false
        },
        preImgUrl: "",
        showModal: false,
        showTrade: false,
        showPreview: false,
        showUpload: false,
        showComment: false,
        trades: [
            { title: "互联网", items: ["互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务"] },
            { title: "互联网", items: ["互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务"] },
            { title: "互联网", items: ["互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务"] },
            { title: "互联网", items: ["互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务"] },
            { title: "互联网", items: ["互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务"] }
        ],
        sticky: {
            content: [
                { duration: "置顶1天", price: 10, hint: "(无折扣仅10元/天)" },
                { duration: "置顶3天", price: 27, hint: "(9折仅9元/天)" },
                { duration: "置顶5天", price: 40, hint: "(8折仅8元/天)" },
                { duration: "置顶10天", price: 70, hint: "(7折仅7元/天)" },
            ],
            sum: 10,
            presum: 10,
            date: "2016-12-30",
            time: "16:08:02",
            discount: "9折",
            sofortBtn: "立即充值",
            planBtn: "立即置顶",
            sofort: true
        },
        fresh: {
            content: [
                { duration: "刷新4次（1天）", price: 4, hint: "(无折扣仅1元/次)" },
                { duration: "刷新12次（3天）", price: 10.8, hint: "(9折仅0.9元/次)" },
                { duration: "刷新20次（5天）", price: 16, hint: "(8折仅0.8元/次)" },
                { duration: "刷新40次（10天）", price: 28, hint: "(7折仅0.7元/次)" },
            ],
            sum: 4,
            presum: 4,
            date: "2016-12-30",
            time: "16:08:02",
            discount: "9折",
            smartBtn: "立即充值",
            sofortBtn: "立即刷新",
            smart: true
        },
        comment: {
            userId: 0,
            text: ""
        },
        baseInfo: appPorto.oldInfo,
        resumeInfo: appCont.resume
    },
    methods: {
        toSmartFresh: function() {
            this.show.freshhintbox = false;
            this.show.freshbox = true;
        },
        toPlanSticky: function() {
            this.show.stickyhintbox = false;
            this.show.stickybox = true;
        },
        closeSticky: function() {
            this.show.stickybox = false;
            this.showModal = false;
        },
        closeHintSticky: function() {
            this.show.stickyhintbox = false;
            this.showModal = false;
        },
        closeFresh: function() {
            this.show.freshbox = false;
            this.showModal = false;
        },
        closeHintFresh: function() {
            this.show.freshhintbox = false;
            this.showModal = false;
        },
        checkAutopay: function(obj) {
            $(obj).toggleClass("on")
        },
        selectStickyItem: function(index, obj) {
            $(".sticky-sofort-list .icon-radio").removeClass("on");
            $(obj).addClass("on");
            switch (index) {
                case 0:
                    this.sticky.presum = 10;
                    this.sticky.sum = 10;
                    break;
                case 1:
                    this.sticky.presum = 10 * 3;
                    this.sticky.sum = Math.floor(this.sticky.presum * 0.9);
                    break;
                case 2:
                    this.sticky.presum = 10 * 5;
                    this.sticky.sum = Math.floor(this.sticky.presum * 0.8);
                    break;
                case 3:
                    this.sticky.presum = 10 * 10;
                    this.sticky.sum = Math.floor(this.sticky.presum * 0.7);
                    break;
                default:
            }
        },
        selectFreshItem: function(index, obj) {
            $(".fresh-smart-list .icon-radio").removeClass("on");
            $(obj).addClass("on");
            switch (index) {
                case 0:
                    this.fresh.presum = 1 * 4;
                    this.fresh.sum = 4;
                    break;
                case 1:
                    this.fresh.presum = 1 * 4 * 3;
                    this.fresh.sum = this.fresh.presum * 0.9.toFixed(1);
                    break;
                case 2:
                    this.fresh.presum = 1 * 4 * 5;
                    this.fresh.sum = Math.floor(this.fresh.presum * 0.8).toFixed(1);
                    break;
                case 3:
                    this.fresh.presum = 1 * 4 * 10;
                    this.fresh.sum = Math.floor(this.fresh.presum * 0.7).toFixed(1);
                    break;
                default:
            }
        },
        selectStickWay: function(way, obj) {
            $(".stick-navs .on").removeClass("on");
            $(obj).addClass("on");
            if (way == "sofort") {
                this.sticky.sofort = true;
                this.sticky.sum = 4;
                this.sticky.presum = 4;
            } else {
                this.sticky.sofort = false;
                this.sticky.sum = autoStickSum();
            }
        },
        selectFreshWay: function(way, obj) {
            $(".fresh-navs .on").removeClass("on");
            $(obj).addClass("on");
            if (way == "smart") {
                this.fresh.smart = true;
                this.fresh.sum = 4;
                this.fresh.presum = 4;
            } else {
                this.fresh.smart = false;
                if (this.account.freeFreshTimes > 0) {
                    this.fresh.sum = 0;
                } else {
                    this.fresh.sum = 1;
                }

            }
        },
        closeTrade: function() {
            this.showTrade = false;
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
        submitTrade: function() {
            appCont.resume.expect.tradeItems = this.checkedTrades.join();
            this.showTrade = false;
            this.showModal = false;
        },
        cancelTrade: function() {
            this.showTrade = false;
            this.showModal = false;
        },
        hidemodal: function() {
            this.showModal = false;
            this.showTrade = false;
            this.showPreview = false;
            this.show.preImg = false;
        },
        stayshow: function(ev) {
            ev.stopPropagation();
            return false;
        },
        closePorto: function() {
            this.showUpload = false;
            this.showModal = false;
        },
        remainText: function(text) {
            if (400 - text.length < 0) {
                return 0;
            }
            return (400 - text.length);
        },
        checkText: function(type) {
            if (type == "comment") {
                var len = this.comment.text.length;
                if (len > 400) {
                    alert("最多只能输入400字！");
                    this.comment.text = this.comment.text.slice(0, 400);
                }
            }
        },
        confirmComment: function() {
            var postdata = {
                userId: parObj.userId,
                loginIdentifier: parObj.loginId,
                comment: this.comment.text,
                reportUserId: this.comment.userId
            }
            console.log(postdata);
            EventUtils.ajaxReq("/sys/comment", "post", postdata, function(resp, status) {
                console.log(resp);
            })
            this.showComment = false;
            this.showModal = false;
        },
        cancelComment: function() {
            this.showComment = false;
            this.showModal = false;
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
        "show.preImg": function(curval) {
            // console.log(curval);
            if (curval) {
                var top = Math.floor($(window).height() * 0.5 + $("body").scrollTop()) + "px";
                // console.log(top);
                $("#app-modal .preview-file").css("top", top);
            }
        },
        "showComment": function(curval) {
            if (curval) {
                var top = Math.floor($(window).height() * 0.15 + $("body").scrollTop()) + "px";
                $("#app-modal .comment-box").css("margin-top", top);
            }
        },
        "show.stickybox": function(curval) {
            if (curval) {
                var top = Math.floor($(window).height() * 0.15 + $("body").scrollTop()) + "px";
                $("#app-modal .refresh-box").css("top", top);
            }
        },
        "show.stickyhintbox": function(curval) {
            if (curval) {
                var top = Math.floor($(window).height() * 0.15 + $("body").scrollTop()) + "px";
                $("#app-modal .refresh-hint-box").css("top", top);
            }
        },
        "show.freshbox": function(curval) {
            if (curval) {
                var top = Math.floor($(window).height() * 0.15 + $("body").scrollTop()) + "px";
                $("#app-modal .refresh-box").css("top", top);
            }
        },
        "show.freshhintbox": function(curval) {
            if (curval) {
                var top = Math.floor($(window).height() * 0.15 + $("body").scrollTop()) + "px";
                $("#app-modal .refresh-hint-box").css("top", top);
            }
        },
        "sticky.sum": function(curval) {
            this.sticky.sofortBtn = curval > this.account.money ? "立即充值" : "立即置顶";
            this.sticky.planBtn = curval > this.account.money ? "立即充值" : "立即置顶";
        },
        "fresh.sum": function(curval) {
            this.fresh.sofortBtn = curval > this.account.money ? "立即充值" : "立即刷新";
            this.fresh.smartBtn = curval > this.account.money ? "立即充值" : "立即刷新";
        }
    },
    mounted: function() {
        this.sticky.sofortBtn = 10 > this.account.money ? "立即充值" : "立即置顶";
        this.fresh.smartBtn = 4 > this.account.money ? "立即充值" : "立即刷新";
    }
});

function init_center() {
    // selectInit();
    selectInitInput();
    selectInitPos();
    navEventBind();
    showContact();
    vipEventBind();
    modalEventBind();
    uploadEventBind();
    refreshEventBind();
    datepickEventBind();
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
        // if(this.files[0].size)
        // console.log(this.value, this.files[0].size);

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
        // console.log(imgsrc.length);
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
        appModal.showUpload = false;
        appModal.showModal = false;
    })
}


function navEventBind() {

    $(".sideBox .sub-li p").unbind("click").bind("click", function() {
        $(this).siblings("p.on").removeClass("on");
        $(this).addClass("on");
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
        //需求面板请求结果
        if ($(this).attr("paneid") == "requireBox") {
            //默认请求校企合作的数据
            var postdata = {
                userId: parObj.userId,
                loginIdentifier: parObj.loginId,
                demandType: 1,
                index: 1,
                count: 3
            }
            EventUtils.ajaxReq("/demand/getList", "get", postdata, function(resp, status) {
                console.log(resp);
                if (resp.data) {
                    appCont.require.totalpages = resp.data.totalPage;
                    appCont.require.pagesize = resp.data.pageSize;
                    appCont.require.demandSrc = 0;
                    appCont.require.results = resp.data.list;
                    appCont.require.totalitems = resp.data.totalRow;
                } else {
                    appCont.require.results = [];
                    appCont.require.totalitems = 0;
                }
            })
        }

        // 收藏面板请求结果
        if ($(this).attr("paneid") == "collectBox") {
            var postdata = {
                userId: parObj.userId,
                loginIdentifier: parObj.loginId,
                index: 1,
                count: 3
            };
            EventUtils.ajaxReq("/demand/getMarkList", "get", postdata, function(resp, status) {
                if (resp.data) {
                    appCont.collect.curpage = 1;
                    appCont.collect.totalpages = resp.data.totalPage;
                    appCont.collect.totalitems = resp.data.totalRow;
                    appCont.collect.results = resp.data.list;
                } else {
                    appCont.collect.results = [];
                    appCont.collect.totalitems = 0;
                }

            })
        }
        if ($(this).attr("paneid")) {
            $(".content").children().hide();
            $(".content").children("." + $(this).attr("paneid")).show();
        }
        selectInitPos();
    });
};
//如果有主题跳转信息
if (parObj.theme) {
    switch (parObj.theme) {
        case "vip":
            $(".sideBox li[paneid='vip-center']").trigger("click");
            break;
        case "require":
            $(".sideBox li[paneid='requireBox']").trigger("click");
            break;
        case "combi":
            $(".sideBox li[paneid='uni-coop']").trigger("click");
            break;
        case "collect":
            $(".sideBox li[paneid='collectBox']").trigger("click");
            break;
    }
}

function vipEventBind() {
    $(".vip-navs li").each(function(index) {
        $(this).click(function() {
            $(".vip-navs li.on").removeClass("on");
            $(this).addClass("on");
            $(".vip-cont").removeClass("on");
            $($(".vip-cont")[index]).addClass("on");
        });
    })
}

function init_safepos(percent) {
    var p_left = Math.floor($(".safe-range").width() * percent / 100) - 16 + "px";
    $(".r-pointer").css("left", p_left);
    $("#safe-progress").css("width", percent + "%");
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

function showContact() {
    $(".message-btn .to-contact").bind({
        "mouseover": function() {
            $(this).siblings(".contact-box").show();
        },
        "mouseout": function() {
            $(this).siblings(".contact-box").hide();
        }
    });
    $(".state-line .to-contact").bind({
        "mouseover": function() {
            if ($(this).hasClass("on")) {
                $(this).parent().siblings(".contact-box").show();
            }
        },
        "mouseout": function() {
            if ($(this).hasClass("on")) {
                $(this).parent().siblings(".contact-box").hide();
            }

        }
    })
}

function refreshEventBind() {
    $(".plan-sticky-table td").click(function() {
        if (!$(this).hasClass("td-title")) {
            $(".plan-sticky-table td[col='" + $(this).attr("col") + "']").removeClass("on");
            $(this).addClass("on");
            appModal.sticky.sum = autoStickSum();
        }
    })
};

function datepickEventBind() {
    var nowTemp = new Date();
    var timediff = 6 * 24 * 3600 * 1000;
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
    $('#sticktime-from').val(EventUtils.formatDate(nowTemp.getFullYear(), nowTemp.getMonth() + 1, nowTemp.getDate()));
    nowTemp.setDate(nowTemp.getDate() + 6);
    $('#sticktime-to').val(EventUtils.formatDate(nowTemp.getFullYear(), nowTemp.getMonth() + 1, nowTemp.getDate()));
    var checkin = $('#sticktime-from').fdatepicker({
        format: 'yyyy-mm-dd',
        onRender: function(date) {
            return date.valueOf() < now.valueOf() ? 'disabled' : '';
        }
    }).on('changeDate', function(ev) {
        if (ev.date.valueOf() > checkout.date.valueOf() - timediff) {
            var newDate = new Date(ev.date)
            newDate.setDate(newDate.getDate() + 6);
            checkout.update(newDate);
        }
        appModal.sticky.sum = autoStickSum();
        checkin.hide();
        $('#sticktime-to')[0].focus();
    }).data('datepicker');
    var checkout = $('#sticktime-to').fdatepicker({
        format: 'yyyy-mm-dd',
        onRender: function(date) {
            return date.valueOf() < checkin.date.valueOf() + timediff ? 'disabled' : '';
        }
    }).on('changeDate', function(ev) {
        appModal.sticky.sum = autoStickSum();
        checkout.hide();
    }).data('datepicker');
}
//根据计划置顶表单变化计算总价格
function autoStickSum() {
    var summe = 0;
    var tempDate = new Date($("#sticktime-from").val());
    var diffDays = Math.floor((new Date($("#sticktime-to").val()) - tempDate) / 1000 / 60 / 60 / 24); //计算起始和终点的日期差值
    $(".plan-sticky-table tr").each(function(index) {
        if (index == 1) {
            summe += $(this).find("td.on").length * 70;
        } else if (index == 2) {
            summe += $(this).find("td.on").length * 50;
        };
    });
    summe = summe * Math.floor((diffDays + 1) / 7);
    if ((diffDays + 1) % 7 != 0) {
        var startWeekday = tempDate.getDay();
        for (var j = 0; j < (diffDays + 1) % 7; j++) {
            var row_index = (j + startWeekday) % 7;
            //  console.log(row_index);
            $(".plan-sticky-table td[col='" + row_index + "']").each(function() {
                if ($(this).hasClass("on")) {
                    //        console.log($(this).attr("row"));
                    if ($(this).attr("row") == "1") {
                        summe += 70;
                    } else if ($(this).attr("row") == "2")
                        summe += 50;
                }
            })
        }
    };
    return summe;
}