import $ from "../libs/jquery-3.1.0.min";
var Vue = require("../libs/vue");
require("../libs/sweetalert.min");
require("../common/common")
require("../common/ajaxfileupload")
require("../common/cropbox")
require("../components/dropdown")
require("../components/foundation-datepicker")
require("../components/pagination")
require("../components/major-pop")
require("../components/minicard")
require("../components/bind-mobile-box")
require("../components/bind-email-box")
require("../components/message-box")
require("../components/freshbox")
require("../components/stickbox")
require("../components/conf-password")
require("../components/vip-record")
require("../components/common-footer")
require("../../data/commondata")
require("../../data/address")
require("../../data/major")
require("../../css/base.css")
require("../../css/sweetalert.css")
require("../../css/widget.css")
require("../../css/foundation-datepicker.min.css")
require("../../css/uniCenter.css")

var parObj = EventUtils.urlExtrac(window.location);
var respObj = {}; //请求的本页面的数据集合
// 请求本页面数据
function infoRequest() {
    var postdata = {
        userId: parObj.userId || localStorage.userId,
        loginIdentifier: parObj.loginId || localStorage.userId
    };

    EventUtils.ajaxReq('/user/school/getInfo', 'get', postdata, function(resp, status) {
        respObj = resp.data;
        console.log(respObj);
        if (respObj.userIcon) {
            $("#avatar-box").html("<img src='" + respObj.userIcon + "' />");
        }
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
            var resumedata = {
                    uni: respObj.name,
                    classific: respObj.type,
                    amount: respObj.scale,
                    level: respObj.property,
                    specialLv: respObj.propertyType,
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
                //    console.log(resumedata);
                //console.log(resumedata);
            appCont.resume = resumedata;
        }
    });

    //获取用户平台信息
    EventUtils.ajaxReq("/center/user/getInfo", "get", { userId: parObj.userId }, function(resp, status) {
        console.log(resp);
        // 账户信息
        var percent = 0;
        if (resp.data.mobile && resp.data.mobile != "") {
            percent += 50;
        }
        if (resp.data.email && resp.data.email != "") {
            percent += 30;
        }
        init_safepos(percent);
        var configdata = {
            loginName: resp.data.loginName,
            userId: parObj.userId,
            safeLevel: percent + "%",
            bind: {
                mobile: resp.data.mobile,
                email: resp.data.email
            }
        }
        appCont.config = configdata;
    });
    //获取用户账户及免费刷新次数等信息
    EventUtils.ajaxReq("/center/user/getAccount", "get", { userId: parObj.userId }, function(resp, status) {
        console.log(resp);
        appModal.account.money = resp.data.useableBalance;
        appModal.account.freeFreshTimes = resp.data.freeRefresh;
    })

}

var appTop = new Vue({
    el: "#app-top",
    data: {
        homeLink: EventUtils.securityUrl("index.html?userId=" + parObj.userId)
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
            unilevel: xqdatabase.unilevel,
            addrData: addArray
        },
        viewInfo: true,
        uni: "",
        briefInfo: {
            level: "",
            address: {
                province: "",
                city: "",
                district: ""
            },
            email: ""
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
            appModal.show.upload = true;
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
        }
    }
});

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
                //需求面板请求结果
                if ($(obj).attr("paneid") == "requireBox") {
                    //默认请求校企合作的数据
                    demandRequest(appCont.require.demandSrc, 1);
                }

                // 收藏面板请求结果
                if ($(obj).attr("paneid") == "collectBox") {
                    collectRequest(appCont.collect.timeindex, 1);
                }
                //消息中心
                if ($(obj).attr("paneid") == "combi-msg") {
                    //请求校企合作消息
                    if (appCont.message.combi.state == "发出的邀请") {
                        combiMsgRequest(1, 1)
                    } else {
                        combiMsgRequest(2, 1)
                    }
                }
                //校企合作
                if ($(obj).attr("paneid") == "uni-coop") {
                    coopRequest(appCont.coop.applystatus, 1);
                }
                selectInitPos();
            }
            if ($(obj).hasClass("sub-item")) {
                $(obj).siblings(".sub-item.on").removeClass("on");
                $(obj).addClass("on");
                $(".content").children().hide();
                $(".content").children("." + $(obj).attr("paneid")).show();
                if ($(obj).attr("paneid") == "combi-msg") {
                    //请求校企合作消息
                    if (appCont.message.combi.state == "发出的邀请") {
                        combiMsgRequest(1, 1)
                    } else {
                        combiMsgRequest(2, 1)
                    }
                }
                if ($(obj).attr("paneid") == "recruit-msg") {
                    //请求招聘会消息
                    recruitMsgRequest(1)
                }
                selectInitPos();
            }
        },
    }
})

var appCont = new Vue({
    el: "#app-content",
    data: {
        database: {
            classific: xqdatabase.uniclassific,
            amount: ["1-10000", "10001-20000", "20001-30000", "30001-40000", "40000以上", ],
            unilevel: xqdatabase.unilevel,
            majors: majorArray,
        },
        account: {
            userId: parObj.userId,
            money: ""
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
            demandSrc: 0, //0：校企合作 1：招聘会
            results: []
        },
        collect: {
            state: "全部状态",
            curpage: 1,
            timeindex: 0,
            totalpages: 1,
            totalitems: 0,
            results: []
        },
        message: {
            combi: {
                state: "发出的邀请",
                curpage: 1,
                totalpages: 1,
                totalitems: 0,
                msgsrc: 1,
                results: []
            },
            recruit: {
                state: "发出的邀请",
                curpage: 1,
                totalpages: 1,
                totalitems: 0,
                results: []
            }
        },
        vip: {
            tarif: [
                { level: "初级会员", prior: 1, refresh: 1, mapping: 8, price: 585, icon: "images/crown-junior.png" },
                { level: "中级会员", prior: 2, refresh: 4, mapping: 12, price: 1040, icon: "images/crown-middle.png" },
                { level: "高级级会员", prior: 4, refresh: 8, mapping: 16, price: 1560, icon: "images/crown-senior.png" },
            ]
        },
        coop: {
            state: "校企合作",
            curpage: 1,
            totalpages: 1,
            totalitems: 0,
            applystatus: 1,
            results: []
        },
        config: {
            loginName: "",
            userId: parObj.userId,
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
                demandRequest(0, 1);
            } else if (curval == "招聘会") {
                demandRequest(1, 1);
            };
            this.require.curpage = 1;
        },
        "collect.state": function(curval, oldval) {
            if (curval == "全部状态") {
                collectRequest(0, 1);
            } else if (curval == "近三天") {
                collectRequest(1, 1);
            } else if (curval == "近一个星期") {
                collectRequest(2, 1);
            } else if (curval == "近一个月") {
                collectRequest(3, 1);
            }
        },
        "message.combi.state": function(curval) {
            if (curval == "发出的邀请") {
                //请求校企合作发出的申请
                combiMsgRequest(1, 1);
            } else if (curval == "收到的邀请") {
                //请求校企合作收到的申请
                combiMsgRequest(2, 1);
            };
            this.message.combi.curpage = 1;
        },
        "coop.state": function(curval) {
            if (curval == "校企合作") {
                coopRequest(1, 1);
            } else if (curval == "招聘会") {
                coopRequest(2, 1);
            }
        }
    },
    methods: {
        newRequire: function() {
            if (!respObj.cvStatus || respObj.cvStatus == "0") {
                swal({
                    title: "",
                    text: "请先完善您的高校信息！",
                    type: "warning"
                });
                return false;
            }
            var link = EventUtils.securityUrl("uniRequire.html?new=1&userId=" + parObj.userId + "&loginId=" + parObj.loginId);
            window.location.href = link
        },
        selvipnav: function(obj) {
            if ($(obj).hasClass("vip-li")) {
                if (this.account.money == "") {
                    EventUtils.ajaxReq("/center/user/getAccount", "get", { userId: parObj.userId }, function(resp, status) {
                        appCont.account.money = resp.data.useableBalance;
                    })
                }
                var index = $(obj).index();
                $(".vip-navs li.on").removeClass("on");
                $(obj).addClass("on");
                $(".vip-cont").removeClass("on");
                $(".vip-center .vip-cont").eq(index).addClass("on");
            }
        },
        recharge: function() { //充值按钮事件
            var link = "recharge.html?userId=" + parObj.userId;
            window.location.href = EventUtils.securityUrl(link);
        },
        priceInteger: function(val) {
            return parseInt(val);
        },
        priceDecimal: function(val) {
            var priceF = (parseFloat(val) * 100 - parseInt(val) * 100) % 100;
            priceF = parseInt(priceF);
            if (priceF < 10) priceF += "0";
            return ("." + priceF);
        },
        changeComLicense: function(obj) {
            if (obj.files[0].size > 3 * 1024 * 1204) {
                swal({
                    title: "",
                    text: "请上传小于3M的文件！",
                    type: "warning"
                })
                obj.value = "";
            }
            this.resume.comLicense = obj.value
        },
        changeUniLicense: function(obj) {
            //     console.log(obj.files[0].size);
            if (obj.files[0].size > 3 * 1024 * 1024) {
                swal({
                    title: "",
                    text: "请上传小于3M的文件！",
                    type: "warning"
                })
                obj.value = "";
            }
            this.resume.uniLicense = obj.value
        },
        showFile: function(type, fid) {
            if (type == "busi") {
                if (this.resume.comLicense != "") {
                    appModal.preImgUrl = EventUtils.getLocalImgUrl(fid);
                } else {
                    appModal.preImgUrl = this.resume.comLicenseUrl;
                }
            }
            if (type == "uni") {
                if (this.resume.uniLicense != "") {
                    appModal.preImgUrl = EventUtils.getLocalImgUrl(fid);
                } else {
                    appModal.preImgUrl = this.resume.uniLicenseUrl;
                }
            }
            appModal.showModal = true;
            appModal.show.preImg = true;
        },
        showPrefile: function(type) {
            if (type == "com") {
                appModal.preImgUrl = appCont.resume.comLicenseUrl;
                appModal.showModal = true;
                appModal.show.preImg = true;
            } else if (type == "uni") {
                appModal.preImgUrl = appCont.resume.uniLicenseUrl;
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
        infoShow: function(text, type) {
            return EventUtils.infoShow(text, type)
        },
        dateExtrac: function(date) {
            if (date) {
                return date.split(" ")[0];
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
                var link = "detail-uni.html?userId=" + parObj.userId + "&loginId=" + parObj.loginId + "&demandId=" + item.demandId + "&userType=1";
                return EventUtils.securityUrl(link);
            }
            if (item.jobFairId) {
                var link = "detail-unirecruit.html?userId=" + parObj.userId + "&jobfairId=" + item.jobFairId;
                return EventUtils.securityUrl(link);
            }
        },
        collectLink: function(item) {
            var link = "detail-company.html?userId=" + parObj.userId + "&demandId=" + item.demandId;
            return EventUtils.securityUrl(link);
        },
        messageLink: function(type, id) {
            if (type == "combi") {
                if (appCont.message.combi.msgsrc == 1) {
                    var link = "detail-company.html?demandId=" + id + "&userId=" + parObj.userId;
                    return EventUtils.securityUrl(link);
                } else {
                    var link = "detail-uni.html?demandId=" + id + "&userId=" + parObj.userId;
                    return EventUtils.securityUrl(link);
                }
            }
            if (type == "jobfair") {
                var link = "detail-unirecruit.html?userId=" + parObj.userId + "&jobfairId=" + id;
                return EventUtils.securityUrl(link);
            }
        },
        coopLink: function(item) {
            if (item.demandId) {
                if (item.releaseType == "1") {
                    var link = "detail-uni.html?demandId=" + item.demandId + "&userId=" + parObj.userId;
                    return EventUtils.securityUrl(link);
                } else {
                    var link = "detail-company.html?demandId=" + item.demandId + "&userId=" + parObj.userId;
                    return EventUtils.securityUrl(link);
                }
            }
            if (item.jobFairId) {
                var link = "detail-unirecruit.html?jobfairId=" + item.jobFairId + "&userId=" + parObj.userId;
                return EventUtils.securityUrl(link);
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
            if (this.resume.specialLv == "0") {
                $(".uni-level .lv985").addClass("selected");
            } else if (this.resume.specialLv == "1") {
                $(".uni-level .lv211").addClass("selected");
            }
            this.resume.edit = true;
            this.resume.view = false;
            this.$nextTick(function() {
                selectInitPos();
            })
        },
        saveResume: function() {
            var isFilled = true;
            $(".resumeCont input[type='text']:visible").each(function() {
                if ($(this).val() == "") {
                    $(this).addClass("hint-nullable");
                    isFilled = false;
                } else {
                    $(this).removeClass("hint-nullable");
                }
            });
            if ($(".resumeCont textarea").val() == "") {
                $(".resumeCont textarea").addClass("hint-nullable");
                isFilled = false;
            } else {
                $(".resumeCont textarea").removeClass("hint-nullable");
            }
            if (!isFilled) {
                swal({
                    title: "",
                    text: "请填写完整您的高校信息！",
                    type: "warning"
                });
                return false;
            }
            $(".pop-major-box").each(function(index) {
                appCont.resume.specialmajor[index].major = $(this).find(".major-input-1 input").val();
                if ($(this).find(".ex-major").val()) {
                    appCont.resume.specialmajor[index].submajor = $(this).find(".ex-major").val();
                } else {
                    appCont.resume.specialmajor[index].submajor = $(this).find(".major-input-2 input").val();
                }
            });
            if (this.resume.comLicense != "" || this.resume.comLicenseUrl != "") {
                this.resume.hasBusLicense = true;
            } else {
                this.resume.hasBusLicense = false;
            }
            if (this.resume.uniLicense != "" || this.resume.uniLicenseUrl != "") {
                this.resume.hasUniLicense = true;
            } else {
                this.resume.hasUniLicense = false;
            }
            // this.resume.edit = false;
            // this.resume.view = true;
            //上传许可证等图片文件
            if (this.resume.comLicense != "") {
                var hascomUrl = false;
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
                        console.log(1);
                        hascomUrl = true;
                        appCont.resume.comLicenseUrl = data.data;
                        // console.log(data.data);
                    },
                    error: function(data, status) {

                    }
                });
            };

            if (this.resume.uniLicense != "") {
                var hasuniUrl = false;
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
                        console.log(2);
                        hasuniUrl = true;
                        appCont.resume.uniLicenseUrl = data.data;
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
                        swal({
                            title: "",
                            text: "文件上传失败，请重新上传！",
                            type: "error"
                        })
                    } else {
                        console.log(appCont.resume.comLicenseUrl, appCont.resume.uniLicenseUrl);
                        var postdata = {
                            userId: parObj.userId,
                            schoolId: respObj.schoolId,
                            name: appCont.resume.uni,
                            type: appCont.resume.classific,
                            property: appCont.resume.level,
                            propertyType: appCont.resume.specialLv,
                            scale: appCont.resume.amount,
                            profession: majorstring,
                            imgUrlBus: appCont.resume.comLicenseUrl,
                            imgUrlAgree: appCont.resume.uniLicenseUrl,
                            discription: appCont.resume.intro
                        };
                        EventUtils.ajaxReq('/user/school/modifyInfo', 'post', postdata, function(resp, status) {
                            appCont.resume.edit = false;
                            appCont.resume.view = true;
                            respObj.cvStatus = 1;
                        })
                    }
                }, 500)
            } else {
                var postdata = {
                    userId: parObj.userId,
                    schoolId: respObj.schoolId,
                    name: appCont.resume.uni,
                    type: appCont.resume.classific,
                    property: appCont.resume.level,
                    propertyType: appCont.resume.specialLv,
                    scale: appCont.resume.amount,
                    profession: majorstring,
                    imgUrlBus: appCont.resume.comLicenseUrl,
                    imgUrlAgree: appCont.resume.uniLicenseUrl,
                    discription: appCont.resume.intro
                };
                EventUtils.ajaxReq('/user/school/modifyInfo', 'post', postdata, function(resp, status) {
                    appCont.resume.edit = false;
                    appCont.resume.view = true;
                    respObj.cvStatus = 1;
                })
            }


        },
        lvswitch: function(lv) {
            if (lv == "0") {
                return "985";
            } else if (lv == "1") {
                return "211"
            }
        },
        checkExlv: function(obj) {
            $(obj).toggleClass("selected");
            console.log(1);
            if ($(".uni-level .lv985").hasClass("selected")) {
                this.resume.specialLv = "0";
            } else if ($(".uni-level .lv211").hasClass("selected")) {
                this.resume.specialLv = "1";
            } else {
                this.resume.specialLv = "";
            }
        },
        modItem: function(item) {
            var pageurl = "uniRequire.html?new=0&userId=" + parObj.userId + "&loginId=" + parObj.loginId + "&demandSrc=" + appCont.require.demandSrc;
            if (item.demandId) {
                pageurl += "&demandId=" + item.demandId
            }
            if (item.jobFairId) {
                pageurl += "&jobfairId=" + item.jobFairId
            }
            pageurl = EventUtils.securityUrl(pageurl);
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
            appModal.fresh.freshItem = item;
            appModal.showModal = true;
            appModal.show.freshbox = true;
        },
        stickItem: function(item) {
            appModal.sticky.stickItem = item;
            appModal.showModal = true;
            appModal.show.stickybox = true;
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
                demandRequest(appCont.require.demandSrc, page);
            } else if (type == "collect") {
                collectRequest(appCont.collect.timeindex, page);
            } else if (type == "msg-combi") {
                combiMsgRequest(appCont.message.combi.msgsrc, page);
            } else if (type == "msg-recruit") {
                recruitMsgRequest(page);
            } else if (type == "coop") {
                coopRequest(appCont.coop.applystatus, page);
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
                    swal({
                        title: "",
                        text: "最多只能输入1000字！",
                        type: "warning"
                    })
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
                $(".collectBox .pagination a.page").eq(appCont.collect.curpage - 1).parent().trigger("click");
            })
        },
        applyCollect: function(demandId, item) {
            var postdata = {
                userId: parObj.userId,
                loginIdentifier: parObj.loginId,
                demandId: demandId
            }
            EventUtils.ajaxReq("/demand/cooperateDemand", "post", postdata, function(resp, status) {
                console.log(resp);
                if (resp.data && resp.data.isApply == "0") {
                    swal({
                        title: "",
                        text: "申请已发送！",
                        type: "success"
                    })
                    item.applyStatus = 1;
                } else {
                    swal({
                        title: "",
                        text: resp.info,
                        type: "error"
                    })
                }
            })
        },
        popComment: function(item) {
            if (item.releaseType == "1") { //发布者为高校
                appModal.comment.cooperId = item.applyUserId;
            }
            if (item.releaseType == "2") { //发布者为企业
                appModal.comment.cooperId = item.userId;
            }
            if (!item.releaseType) { // 招聘会
                appModal.comment.cooperId = item.applyUserId;
            }
            appModal.showModal = true;
            appModal.show.comment = true;
        },
        popCard: function(item) {
            console.log(item)
            var postdata = {
                userId: item.applyUserId,
                applyId: item.applyId,
            }
            if (item.demandId) {
                postdata.applyType = 1;
                appModal.cardInfo.infosrc = 0;
            }
            if (item.jobFairId) {
                postdata.applyType = 2;
                appModal.cardInfo.infosrc = 1;
            }
            EventUtils.ajaxReq("/readcard/getCardInfo", "get", postdata, function(resp, status) {
                console.log(resp);
                appModal.cardInfo.cardtype = "inc";
                appModal.cardInfo.applyId = resp.data.applyId;
                var infosets = resp.data.viewReadCard;
                infosets.userAddress = infosets.userAddress ? infosets.userAddress.split(";").join("") : "不详";
                appModal.cardInfo.infosets = infosets;
                appModal.showModal = true;
                appModal.show.minicard = true;
            })
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
    components: {
        'pagination': pagination
    }
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
        account: {
            userId: parObj.userId,
            money: 0,
            freeFreshTimes: 0
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
            preImg: false,
            minicard: false,
            comment: false,
            upload: false,
            message: false
        },
        preImgUrl: "",
        showModal: false,
        cardInfo: {
            cardtype: "uni",
            applyId: "",
            infosrc: 0,
            infosets: {
                userName: "",
                imgsrc: "",
                userProperty: "",
                userScale: "",
                tel: "",
                email: "",
                address: "",
                userType: "",
                profession: "",
                description: "",
            }
        },
        trades: [
            { title: "互联网", items: ["互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务"] },
            { title: "互联网", items: ["互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务"] },
            { title: "互联网", items: ["互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务"] },
            { title: "互联网", items: ["互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务"] },
            { title: "互联网", items: ["互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务", "互联网/移动互联网/电子商务"] }
        ],
        sticky: {
            stickItem: null
        },
        fresh: {
            freshItem: null,
        },
        comment: {
            cooperId: 0,
            text: ""
        },
        baseInfo: appPorto.oldInfo,
        resumeInfo: appCont.resume
    },
    methods: {
        agreeApply: function(applyId) {
            var postdata = {
                applyId: applyId,
                result: 1
            }
            if (this.cardInfo.infosrc == 0) {
                EventUtils.ajaxReq("/readcard/disposeDemand", "get", postdata, function(resp, status) {
                    appModal.show.minicard = false;
                    appModal.showModal = false;
                    combiMsgRequest(2, 1)
                })
            } else {
                EventUtils.ajaxReq("/readcard/operationApply", "get", postdata, function(resp, status) {
                    appModal.show.minicard = false;
                    appModal.showModal = false;
                    recruitMsgRequest(1);
                })
            }

        },
        denyApply: function(applyId) {
            var postdata = {
                applyId: applyId,
                result: 2
            }
            if (this.cardInfo.infosrc == 0) {
                EventUtils.ajaxReq("/readcard/disposeDemand", "get", postdata, function(resp, status) {
                    appModal.show.minicard = false;
                    appModal.showModal = false;
                    combiMsgRequest(2, 1)
                })
            } else {
                EventUtils.ajaxReq("/readcard/operationApply", "get", postdata, function(resp, status) {
                    appModal.show.minicard = false;
                    appModal.showModal = false;
                    recruitMsgRequest(1);
                })
            }
        },
        closeSticky: function() {
            this.show.stickybox = false;
            this.showModal = false;
        },
        closeFresh: function() {
            this.show.freshbox = false;
            this.showModal = false;
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
        hidemodal: function(obj) {
            if ($(obj).hasClass("modal")) {
                this.showModal = false;
                this.showTrade = false;
                this.showPreview = false;
                for (var key in appModal.show) {
                    appModal.show[key] = false;
                }
            }
        },
        closePorto: function() {
            this.show.upload = false;
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
                    swal({
                        title: "",
                        text: "最多只能输入400字！",
                        type: "warning"
                    })
                    this.comment.text = this.comment.text.slice(0, 400);
                }
            }
        },
        confirmComment: function() {
            if (this.comment.text == "") {
                swal({
                    title: "",
                    text: "评价内容不能为空！",
                    type: "warning"
                });
                return false;
            }
            var postdata = {
                userId: parObj.userId,
                loginIdentifier: parObj.loginId,
                comment: this.comment.text,
                reportUserId: this.comment.cooperId
            }
            EventUtils.ajaxReq("/sys/comment", "post", postdata, function(resp, status) {
                console.log(resp);
                appModal.comment.text = "";
                appModal.show.comment = false;
                appModal.showModal = false;
            })
        },
        cancelComment: function() {
            this.comment.text = "";
            this.show.comment = false;
            this.showModal = false;
        },
        closeMobile: function() {
            EventUtils.ajaxReq("/center/user/getInfo", "get", { userId: parObj.userId }, function(resp, status) {
                appCont.config.bind.mobile = resp.data.mobile;
                appCont.config.bind.email = resp.data.email;
            })
            this.show.mobile = false;
            this.showModal = false;
        },
        closeWechat: function() {
            this.show.wechat = false;
            this.showModal = false;
        },
        closeEmail: function() {
            EventUtils.ajaxReq("/center/user/getInfo", "get", { userId: parObj.userId }, function(resp, status) {
                appCont.config.bind.mobile = resp.data.mobile;
                appCont.config.bind.email = resp.data.email;
            })
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
        "show.minicard": function(curval) {
            if (curval) {
                EventUtils.absCenter($(".minicard"));
            }
        },
        "show.preImg": function(curval) {
            if (curval) {
                EventUtils.absCenter($("#app-modal .preview-file"));
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
        "show.comment": function(curval) {
            if (curval) {
                this.$nextTick(function() {
                    EventUtils.absCenter($("#app-modal .comment-box"));
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
        "show.freshbox": function(curval) {
            if (curval) {
                this.$nextTick(function() {
                    EventUtils.absCenter($("#app-modal .fresh-box"));
                })
            }
        },
    },
});


function init_center() {
    //请求页面数据
    infoRequest();
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
    selectInitInput();
    selectInitPos();
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
        });
        appModal.show.upload = false;
        appModal.showModal = false;
    })
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

// 请求数据函数列表
// 高校需求数据请求
function demandRequest(index, page) {
    appCont.require.curpage = page;
    if (index == 0) { // 校企合作需求
        var postdata = {
            userId: parObj.userId,
            loginIdentifier: parObj.loginId,
            isCenter: 1,
            demandType: 1,
            index: page,
            count: 3
        }
        EventUtils.ajaxReq("/demand/getList", "get", postdata, function(resp, status) {
            console.log(resp);
            if (resp.data) {
                appCont.require.totalpages = resp.data.totalPage;
                appCont.require.results = resp.data.list;
                appCont.require.totalitems = resp.data.totalRow;
            } else {
                appCont.require.totalpages = 1;
                appCont.require.results = [];
                appCont.require.totalitems = 0;
            };
            appCont.require.demandSrc = 0;
        });
    } else if (index == 1) { //招聘会需求
        var postdata = {
            userId: parObj.userId,
            loginIdentifier: parObj.loginId,
            isCenter: 1,
            jobFairType: 1,
            index: page,
            count: 3
        }
        EventUtils.ajaxReq("/jobfair/getList", "get", postdata, function(resp, status) {
            console.log(resp);
            if (resp.data) {
                appCont.require.totalpages = resp.data.totalPage;
                appCont.require.results = resp.data.list;
                appCont.require.totalitems = resp.data.totalRow;
            } else {
                appCont.require.totalpages = 1;
                appCont.require.results = [];
                appCont.require.totalitems = 0;
            };
            appCont.require.demandSrc = 1;
        })
    }
}

//收藏信息数据请求
function collectRequest(timeindex, page) {
    appCont.collect.curpage = page;
    appCont.collect.timeindex = timeindex;
    var postdata = {
        userId: parObj.userId,
        loginIdentifier: parObj.loginId,
        timeType: timeindex,
        index: page,
        count: 3
    };
    EventUtils.ajaxReq("/demand/getMarkList", "get", postdata, function(resp, status) {
        console.log(resp);
        if (resp.data) {
            appCont.collect.totalpages = resp.data.totalPage;
            appCont.collect.totalitems = resp.data.totalRow;
            appCont.collect.results = resp.data.list;
        } else {
            appCont.collect.totalpages = 1;
            appCont.collect.results = [];
            appCont.collect.totalitems = 0;
        }
    })
}
// 校企合作消息数据请求
function combiMsgRequest(applystatus, page) {
    appCont.message.combi.curpage = page;
    var postdata = {
        userId: parObj.userId,
        applyStatus: applystatus,
        index: page,
        count: 3
    }
    EventUtils.ajaxReq("/demand/getDemandApply", "get", postdata, function(resp, status) {
        console.log(resp);
        if (resp && resp.data) {
            appCont.message.combi.totalitems = resp.data.totalRow;
            appCont.message.combi.totalpages = resp.data.totalPage;
            appCont.message.combi.results = resp.data.list;
        } else {
            appCont.message.combi.results = [];
            appCont.message.combi.totalitems = 0;
            appCont.message.combi.totalpages = 1;
        }
        appCont.message.combi.msgsrc = applystatus;
    });
}
// 招聘会消息数据请求
function recruitMsgRequest(page) {
    appCont.message.recruit.curpage = page;
    var postdata = {
        userId: parObj.userId,
        index: page,
        count: 3
    }
    EventUtils.ajaxReq("/jobfair/getApplySchool", "get", postdata, function(resp, status) {
        console.log(resp);
        if (resp && resp.data) {
            appCont.message.recruit.totalitems = resp.data.totalRow;
            appCont.message.recruit.totalpages = resp.data.totalPage;
            appCont.message.recruit.results = resp.data.list;
        } else {
            appCont.message.recruit.results = [];
            appCont.message.recruit.totalpages = 1;
            appCont.message.recruit.totalitems = 0;
        }
    });
}

function coopRequest(applyindex, page) {
    appCont.coop.curpage = page;
    var postdata = {
        userId: parObj.userId,
        loginIdentifier: parObj.loginId,
        index: page,
        count: 3,
        applyStatus: applyindex
    }
    console.log(postdata);
    EventUtils.ajaxReq("/demand/getDemandApplyList", "get", postdata, function(resp, status) {
        console.log(resp);
        if (resp && resp.data) {
            appCont.coop.totalitems = resp.data.totalRow;
            appCont.coop.totalpages = resp.data.totalPage;
            appCont.coop.results = resp.data.list;
        } else {
            appCont.coop.results = [];
            appCont.coop.totalitems = 0;
            appCont.coop.totalpages = 1;
        }
        appCont.coop.applystatus = applyindex;
    });
}

//刷新请求
function freshRequest(pushId, type, tarifId) {
    var postdata = {
        userId: parObj.userId,
        pushId: pushId,
        contentType: type,
        id: tarifId
    }
    console.log(postdata);
    EventUtils.ajaxReq("/sys/refresh", "post", postdata, function(resp, status) {
        console.log(resp);
    })
}