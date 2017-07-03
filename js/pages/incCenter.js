import $ from "../libs/jquery-3.1.0.min";
require("../libs/sweetalert.min");
require("../common/common")
var Vue = require("../libs/vue.min");
require("../common/ajaxfileupload")
require("../common/cropbox")
require("../components/dropdown")
require("../components/pagination")
require("../components/minicard")
require("../components/bind-mobile-box")
require("../components/bind-email-box")
require("../components/message-box")
require("../components/freshbox")
require("../components/stickbox")
require("../components/vip-record")
require("../components/conf-password")
require("../components/common-footer")
require("../../data/commondata")
require("../../data/address")
require("../../data/workareas")
require("../../css/base.css")
require("../../css/sweetalert.css")
require("../../css/widget.css")
require("../../css/incCenter.css")
var parObj = EventUtils.urlExtrac(window.location);
var respObj = {}; //请求的本页面的数据集合

function infoRequest() {
    var postdata = {
        userId: parObj.userId || localStorage.userId,
        loginIdentifier: parObj.loginId || localStorage.loginId
    };
    //console.log(postdata);
    EventUtils.ajaxReq('/user/company/getInfo', 'get', postdata, function(resp, status) {
        respObj = resp.data;
        //console.log(resp);
        if (respObj.userIcon) {
            $("#avatar-box").html("<img src='" + respObj.userIcon + "' />");
        }
        if (respObj) {
            var portobrief = {
                IncProps: respObj.property,
                IncScale: respObj.scale,
                address: {
                    province: respObj.province,
                    city: respObj.city,
                    district: respObj.area
                },
                email: respObj.email
            }
            appPorto.inc = respObj.name;
            appPorto.briefInfo = portobrief;

            var specialLevel = "";
            if (respObj.isWorld == "1") {
                specialLevel = "世界500强";
                $(".uni-level input[value='0']").attr("checked", "true");
            } else if (respObj.isCountry == "1") {
                specialLevel = "中国500强";
                $(".uni-level input[value='1']").attr("checked", "true");
            }
            var resumedata = {
                Inc: respObj.name,
                trade: respObj.type,
                scale: respObj.scale,
                props: respObj.property,
                specialLv: specialLevel,
                intro: respObj.discription != undefined ? respObj.discription : "",
                comLicense: "",
                comLicenseUrl: respObj.imgUrl,
                hasBusLicense: respObj.imgUrl && respObj.imgUrl != "",
                edit: respObj.infoStatus == "0",
                view: respObj.infoStatus != "0"
            };
            appCont.resume = resumedata;
        }
    })

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
            userId: parObj.userId,
            safeLevel: percent + "%",
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
        viewInfo: true,
        inc: "企业名称",
        database: {
            incprops: xqdatabase.incProps,
            incscale: xqdatabase.incScale,
            addrData: addArray
        },
        briefInfo: {
            IncProps: "民营企业",
            IncScale: "600人以上",
            address: {
                province: "浙江",
                city: "杭州",
                district: "滨江"
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
            appModal.show.upload = true;
        },
        save: function() {
            this.briefInfo.address.province = $(".edit-brief .sel-province input").val();
            this.briefInfo.address.city = $(".edit-brief .sel-city input").val();
            this.briefInfo.address.district = $(".edit-brief .sel-district input").val();
            this.viewInfo = true;
            var postdata = {
                    userId: parObj.userId,
                    companyId: respObj.companyId,
                    //    loginName:parObj.loginName,
                    property: this.briefInfo.IncProps,
                    province: this.briefInfo.address.province,
                    city: this.briefInfo.address.city,
                    area: this.briefInfo.address.district,
                    email: this.briefInfo.email
                }
                //console.log(postdata);
            EventUtils.ajaxReq('/user/company/modifyInfo', 'post', postdata, function(resp, status) {
                //console.log(resp);
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
// 移除多余的两项
xqdatabase.incProps.remove("中国500强");
xqdatabase.incProps.remove("世界500强");
var appCont = new Vue({
    el: "#app-content",
    data: {
        database: {
            IncScale: xqdatabase.incScale,
            IncProps: xqdatabase.incProps,
        },
        account: {
            userId: parObj.userId,
            money: "",
        },
        resume: {
            Inc: "",
            trade: "",
            scale: "",
            props: "民营企业",
            specialLv: "",
            intro: "国际领先的互联网科技公司",
            comLicense: "",
            comLicenseUrl: "",
            hasBusLicense: false,
            edit: false,
            view: true
        },
        require: {
            state: "校企合作",
            demandSrc: 0, //0 校企合作 1 招聘会 2 企业
            curpage: 1,
            totalpages: 1,
            totalitems: 0,
            results: [],
            showCombi: true,
            showRecruit: true
        },
        collect: {
            state: "校企合作",
            curpage: 1,
            collectSrc: 0,
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
                results: [],
            },
            jobfair: {
                state: "发出的邀请",
                curpage: 1,
                totalpages: 1,
                totalitems: 0,
                msgsrc: 2,
                results: []
            },
            recruit: {
                state: "全部状态",
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
                { level: "高级会员", prior: 4, refresh: 8, mapping: 16, price: 1560, icon: "images/crown-senior.png" },
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
        "require.state": function(curval) {
            if (curval == "校企合作") {
                demandRequest(0, 1);
            } else if (curval == "招聘会") {
                demandRequest(1, 1);
            } else if (curval == "企业直聘") {
                demandRequest(2, 1);
            }
        },
        "collect.state": function(curval) {
            if (curval == "校企合作") {
                collectRequest(0, 1);
            }
            if (curval == "高校招聘会") {
                collectRequest(1, 1);
            }
        },
        "message.combi.state": function(curval) {
            if (curval == "发出的邀请") {
                combiMsgRequest(1, 1);
            } else if (curval == "收到的邀请") {
                combiMsgRequest(2, 1);
            };
            this.message.combi.curpage = 1;
        },
        "message.jobfair.state": function(curval) {
            if (curval == "发出的邀请") {
                jobfairMsgRequest(1, 1);
            } else {
                jobfairMsgRequest(2, 1);
            }
        },
        "coop.state": function(curval) {
            if (curval == "校企合作") {
                coopRequest(1, 1);
            } else if (curval == "招聘会") {
                coopRequest(2, 1);
            }
        },
        "resume.intro": function(curval) {
            this.resume.intro = EventUtils.limitWords(1000, curval);
        }
    },
    methods: {
        newRequire: function() {
            if (!respObj.cvStatus || respObj.cvStatus == "0") {
                swal({
                    title: "",
                    text: "请先完善您的企业信息！",
                    type: "warning"
                });
                return false;
            }
            var link = EventUtils.securityUrl("incRequire.html?new=1&userId=" + parObj.userId + "&loginId=" + parObj.loginId);
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
        recharge: function() {
            var link = "recharge.html?" + window.btoa("userId=" + parObj.userId);
            //  new EventUtils.submitForm("recharge.html?", { userId: parObj.userId }).post();
            // new EventUtils.submitForm('/Activity/ActivityInformation', { a_id: "1" }).post();
            window.location.href = link;
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
        regAddress: function(address) {
            if (address) {
                return address.split(";").join("-");
            } else {
                return ""
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
        cityExtrac: function(text) {
            if (text) {
                return text.split(";")[1]
            } else {
                return "";
            }
        },
        requireLink: function(item) {
            if (item.demandId) {
                var link = "detail-company.html?userId=" + parObj.userId + "&loginId=" + parObj.loginId + "&demandId=" + item.demandId + "&userType=2";
                return EventUtils.securityUrl(link);
            }
            if (item.recruitId) {
                var link = "detail-position.html?userId=" + parObj.userId + "&recruitId=" + item.recruitId;
                return EventUtils.securityUrl(link);
            }
            if (item.jobFairId) {
                var link = "detail-increcruit.html?userId=" + parObj.userId + "&jobfairId=" + item.jobFairId;
                return EventUtils.securityUrl(link);
            }
        },
        collectLink: function(item) {
            if (item.demandId) {
                var link = "detail-uni.html?userId=" + parObj.userId + "&demandId=" + item.demandId;
                return EventUtils.securityUrl(link);
            }
            if (item.jobFairId) {
                var link = "detail-unirecruit.html?userId=" + parObj.userId + "&jobfairId=" + item.jobFairId;
                return EventUtils.securityUrl(link);
            }

        },
        messageLink: function(type, id) {
            if (type == "combi") {
                if (appCont.message.combi.msgsrc == 1) {
                    var link = "detail-uni.html?demandId=" + id + "&userId=" + parObj.userId;
                    return EventUtils.securityUrl(link);
                } else {
                    var link = "detail-company.html?demandId=" + id + "&userId=" + parObj.userId;
                    return EventUtils.securityUrl(link);
                }
            }
            if (type == "jobfair") {
                if (appCont.message.jobfair.msgsrc == 1) {
                    var link = "detail-unirecruit.html?jobfairId=" + id + "&userId=" + parObj.userId;
                    return EventUtils.securityUrl(link);
                } else {
                    var link = "detail-increcruit.html?jobfairId=" + id + "&userId=" + parObj.userId;
                    return EventUtils.securityUrl(link);
                }
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
        popComment: function(item) {
            if (item.releaseType == "1") { //发布者为高校
                appModal.comment.cooperId = item.userId;
            }
            if (item.releaseType == "2") { //发布者为企业
                appModal.comment.cooperId = item.applyUserId;
            }
            if (!item.releaseType) { // 招聘会
                appModal.comment.cooperId = item.userId;
            }
            appModal.showModal = true;
            appModal.show.comment = true;
        },
        popTrade: function() {
            appModal.showModal = true;
            appModal.show.trade = true;
        },
        editSwipe: function() {
            if (appCont.resume.specialLv == "世界500强") {
                $(".lv-world").addClass("selected");
            } else if (appCont.resume.specialLv == "中国500强") {
                $(".lv-china").addClass("selected");
            }
            this.resume.firstEdit = false;
            this.resume.edit = true;
            this.resume.view = false;
            this.$nextTick(function() {
                selectInitInput();
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
            if (this.resume.comLicense != "" || this.resume.comLicenseUrl != "") {
                this.resume.hasBusLicense = true;
            } else {
                this.resume.hasBusLicense = false;
                isFilled = false;
            }

            if (!isFilled) {
                swal({
                    title: "",
                    text: "请完善您的企业信息！",
                    type: "warning"
                });
                return false;
            }
            if (this.resume.comLicense != "" || this.resume.comLicenseUrl != "") {
                this.resume.hasBusLicense = true;
            } else {
                this.resume.hasBusLicense = false;
                swal({
                    title: "",
                    text: "请上传您的营业执照！",
                    type: "warning"
                });
                return false;
            }

            // this.resume.edit = false;
            // this.resume.view = true;
            //上传许可证等图片文件
            if (this.resume.comLicense != "") {
                var hascomUrl = false;
                $.ajaxFileUpload({
                    url: 'https://www.xiaoqiztc.com/easily_xq_WebApi/sys/imageUpload', //提交的路径
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
                        //console.log(data.data);
                    },
                    error: function(data, status) {}
                });
            };
            if (this.resume.comLicense != "") { //如果用户有上传文件
                setTimeout(function() {
                    if (appCont.resume.comLicense != "" && !hascomUrl) {
                        swal({
                            title: "",
                            text: "文件上传失败，请重新上传！",
                            type: "error"
                        })
                    } else {
                        var postdata = {
                            userId: parObj.userId,
                            companyId: respObj.companyId,
                            name: appCont.resume.Inc,
                            type: appCont.resume.trade,
                            property: appCont.resume.props,
                            scale: appCont.resume.scale,
                            discription: appCont.resume.intro,
                            imgUrl: appCont.resume.comLicenseUrl,
                            isWorld: appCont.resume.specialLv == "世界500强" ? 1 : 0,
                            isCountry: appCont.resume.specialLv == "中国500强" ? 1 : 0,
                        };
                        EventUtils.ajaxReq('/user/company/modifyInfo', 'post', postdata, function(resp, status) {
                            appCont.resume.edit = false;
                            appCont.resume.view = true;
                        })
                    }
                }, 500)
            } else {
                var postdata = {
                    userId: parObj.userId,
                    companyId: respObj.companyId,
                    name: appCont.resume.Inc,
                    type: appCont.resume.trade,
                    property: appCont.resume.props,
                    scale: appCont.resume.scale,
                    discription: appCont.resume.intro,
                    imgUrl: appCont.resume.comLicenseUrl,
                    isWorld: appCont.resume.specialLv == "世界500强" ? 1 : 0,
                    isCountry: appCont.resume.specialLv == "中国500强" ? 1 : 0,
                };
                EventUtils.ajaxReq('/user/company/modifyInfo', 'post', postdata, function(resp, status) {
                    appCont.resume.edit = false;
                    appCont.resume.view = true;
                })
            }
        },
        checkExlv: function(obj) {
            $(obj).toggleClass("selected");
            if ($(".lv-world").hasClass("selected")) {
                this.resume.specialLv = "世界500强";
            } else if ($(".lv-china").hasClass("selected")) {
                this.resume.specialLv = "中国500强";
            } else {
                this.resume.specialLv = "";
            }
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
            }
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
            if (item.recruitId) {
                var postdata = {
                    userId: parObj.userId,
                    loginIdentifier: parObj.loginId,
                    recruitId: item.recruitId
                }
                EventUtils.ajaxReq("/recruit/delInfo", "post", postdata, function(resp, status) {
                    if (appCont.require.results.length == 1 && appCont.require.curpage > 1) {
                        appCont.require.curpage -= 1;
                    }
                    $(".requireBox .pagination a.page").eq(appCont.require.curpage - 1).parent().trigger("click");
                })
            }

        },
        modItem: function(item) {
            //console.log(item);
            var link = "incRequire.html?new=0&userId=" + parObj.userId + "&loginId=" + parObj.loginId + "&demandSrc=" + appCont.require.demandSrc;
            if (item.demandId) {
                link += "&demandId=" + item.demandId + "&demandType=" + item.demandType;
            }
            if (item.jobFairId) {
                link += "&jobfairId=" + item.jobFairId;
            }
            if (item.recruitId) {
                link += "&recruitId=" + item.recruitId;
            }
            link = EventUtils.securityUrl(link);
            window.open(link, "_blank");
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
                collectRequest(appCont.collect.collectSrc, page);
            } else if (type == "msg-combi") {
                combiMsgRequest(appCont.message.combi.msgsrc, page);
            } else if (type == "msg-jobfair") {
                jobfairMsgRequest(appCont.message.jobfair.msgsrc, page);
            } else if (type == "msg-recruit") {
                recruitMsgRequest(page);
            } else if (type == "coop") {
                coopRequest(appCont.coop.applystatus, page);
            }
        },
        changeComLicense: function(obj) {
            if (obj.files[0].size > 3 * 1024 * 1204) {
                swal({
                    title: "",
                    text: "请上传小于3M的文件！",
                    type: "warning"
                })
                obj.value = "";
                return false;
            }
            this.resume.comLicense = obj.value
                //console.log(obj.value);
        },
        showFile: function(fid) {
            if (this.resume.comLicense != "") {
                appModal.preImgUrl = EventUtils.getLocalImgUrl(fid);
            } else if (this.resume.comLicenseUrl != "") {
                appModal.preImgUrl = this.resume.comLicenseUrl;
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
        applyCollect: function(item) {
            if (item.demandId) {
                var postdata = {
                        userId: parObj.userId,
                        loginIdentifier: parObj.loginId,
                        demandId: item.demandId
                    }
                    //console.log(postdata);
                EventUtils.ajaxReq("/demand/cooperateDemand", "post", postdata, function(resp, status) {
                    //console.log(resp);
                    if (resp.data && resp.data.isApply == "0") {
                        swal({
                            title: "",
                            text: "申请已发出！",
                            type: "success"
                        });
                        item.applyStatus = 1;
                    } else {
                        swal({
                            title: "",
                            text: resp.info,
                            type: "error"
                        })
                    }
                })
            }
            if (item.jobFairId) {
                var postdata = {
                    userId: parObj.userId,
                    loginIdentifier: parObj.loginId,
                    jobFairId: item.jobFairId
                }
                EventUtils.ajaxReq("/jobfair/cooperateJobFair", "post", postdata, function(resp, status) {
                    //console.log(resp);
                    if (resp.data && resp.data.isApply == "0") {
                        swal({
                            title: "",
                            text: "申请已发出！",
                            type: "success"
                        });
                        item.status = 1;
                    } else {
                        swal({
                            title: "",
                            text: resp.info,
                            type: "error"
                        })
                    }
                })
            }
        },
        cancelCollect: function(type, id) {
            if (type == "combi") {
                var postdata = {
                    id: id
                }
                EventUtils.ajaxReq("/demand/delMarkInfo", "post", postdata, function(resp, status) {

                    if (appCont.collect.results.length == 1 && appCont.collect.curpage > 1) {
                        appCont.collect.curpage -= 1;
                    }
                    $(".collectBox .pagination a.page").eq(appCont.collect.curpage - 1).parent().trigger("click");
                })
            }
            if (type == "jobfair") {
                var postdata = {
                    id: id
                }
                EventUtils.ajaxReq("/jobfair/delMarkInfo", "post", postdata, function(resp, status) {
                    if (appCont.collect.results.length == 1 && appCont.collect.curpage > 1) {
                        appCont.collect.curpage -= 1;
                    }
                    $(".collectBox .pagination a.page").eq(appCont.collect.curpage - 1).parent().trigger("click");
                })
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
        showCard: function(item) { //查看对方名片
            var postdata = {
                userId: item.applyUserId,
                applyId: item.applyId,
            }
            if (item.demandId) {
                postdata.applyType = 1;
            }
            if (item.jobFairId) {
                postdata.applyType = 2;
            }
            //console.log(postdata);
            EventUtils.ajaxReq("/readcard/getCardInfo", "get", postdata, function(resp, status) {
                //console.log(resp);
                appModal.cardInfo.cardtype = "uni";
                appModal.cardInfo.applyId = resp.data.applyId;
                var infosets = resp.data.viewReadCard;
                infosets.userAddress = infosets.userAddress ? infosets.userAddress.split(";").join("") : "不详";
                appModal.cardInfo.infosets = infosets;
                appModal.showModal = true;
                appModal.show.minicard = true;
            })
        },
        wordscal: function(str) { //简介还剩多少字
            return EventUtils.remainWords(1000, str)
        },
        checkCvs: function(item) {
            if (item.jobFairId) {
                var link = "HR-center.html?jobfairId=" + item.jobFairId + "&userId=" + parObj.userId + "&loginId=" + parObj.loginId;
            }
            if (item.recruitId) {
                var link = "HR-center.html?recruitId=" + item.recruitId + "&userId=" + parObj.userId + "&loginId=" + parObj.loginId;
            }
            link = EventUtils.securityUrl(link);
            window.location.href = link;
        }
    },
    components: {
        'pagination': pagination
    }
});
var appSider = new Vue({
    el: "#app-side",
    data: {},
    methods: {
        toHR: function() {
            if (parObj.userId) {
                var link = "HR-center.html?userId=" + parObj.userId + "&loginId=" + parObj.loginId;
            }
            link = EventUtils.securityUrl(link);
            window.open(link);
        },
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
                    demandRequest(appCont.require.demandSrc, 1);
                }
                // 收藏面板请求结果
                if ($(obj).attr("paneid") == "collectBox") {
                    collectRequest(appCont.collect.collectSrc, 1);
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
                if ($(obj).attr("paneid") == "jobfair-msg") {
                    //请求校企合作消息
                    if (appCont.message.combi.state == "发出的邀请") {
                        jobfairMsgRequest(1, 1)
                    } else {
                        jobfairMsgRequest(2, 1)
                    }
                }
                if ($(obj).attr("paneid") == "recruit-msg") {
                    recruitMsgRequest(1)
                }
                selectInitPos();
            }
        }
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
        account: {
            money: 0,
            userId: parObj.userId,
            freeFreshTimes: 0
        },
        show: {
            stickybox: false,
            freshbox: false,
            minicard: false,
            mobile: false,
            email: false,
            wechat: false,
            preImg: false,
            comment: false,
            trade: false,
            upload: false,
            message: false
        },
        showModal: false,
        preImgUrl: "",
        cardInfo: {
            cardtype: "inc",
            applyId: "",
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
        checkedTrades: [],
        trades: workareas,
        // baseInfo: appPorto.oldInfo,
        // resumeInfo: appCont.resume
    },
    methods: {
        closeMsg: function() {
            this.show.message = false;
            this.showModal = false;
        },
        remainText: function(text) {
            return EventUtils.remainWords(400, text);
        },
        checkText: function(type) {
            if (type == "comment") {
                this.comment.text = EventUtils.limitWords(400, this.comment.text);
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
                //console.log(postdata);
            EventUtils.ajaxReq("/sys/comment", "post", postdata, function(resp, status) {
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
        closeSticky: function() {
            this.show.stickybox = false;
            this.showModal = false;
        },
        closeFresh: function() {
            this.show.freshbox = false;
            this.showModal = false;
        },
        closeTrade: function() {
            this.show.trade = false;
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
            appCont.resume.trade = $(".trade-single-table input[type='radio']:checked").val();
            this.show.trade = false;
            this.showModal = false;
        },
        cancelTrade: function() {
            this.show.trade = false;
            this.showModal = false;
        },
        hidemodal: function(obj) {
            if ($(obj).hasClass("modal")) {
                this.showModal = false;
                for (var key in appModal.show) {
                    appModal.show[key] = false;
                }
            }
        },
        closePorto: function() {
            this.show.upload = false;
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
        agreeApply: function(applyId) {
            var postdata = {
                applyId: applyId,
                result: 1
            }
            EventUtils.ajaxReq("/readcard/disposeDemand", "get", postdata, function(resp, status) {
                combiMsgRequest(2, 1)
                appModal.show.minicard = false;
                appModal.showModal = false;
            })

        },
        denyApply: function(applyId) {
            var postdata = {
                applyId: applyId,
                result: 2
            }
            EventUtils.ajaxReq("/readcard/disposeDemand", "get", postdata, function(resp, status) {
                combiMsgRequest(2, 1)
                appModal.show.minicard = false;
                appModal.showModal = false;
            })
        },
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
                if (curval) {
                    EventUtils.absCenter($("#app-modal .preview-file"));
                }
            }
        },
        "show.upload": function(curval) {
            if (curval) {
                this.$nextTick(function() {
                    EventUtils.absCenter($("#app-modal .porto-upload"));
                })
            }
        },
        'show.trade': function(curval) {
            if (curval) {
                this.$nextTick(function() {
                    EventUtils.absCenter($("#app-modal .trade-box"));
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
    }
});

infoRequest();

function init_center() {
    //如果有主题跳转信息
    if (parObj.theme) {
        switch (parObj.theme) {
            case "vip":
                $(".sideBox li[paneid='vip-center']").trigger("click");
                break;
            case "require":
                if (parObj.demandSrc) {
                    appCont.require.demandSrc = parObj.demandSrc;
                }
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
    refreshEventBind();
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
        });
        appModal.show.upload = false;
        appModal.showModal = false;
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
            $(".plan-sticky-table td[name='" + $(this).attr("name") + "']").removeClass("on");
            $(this).addClass("on");
            var summe = 0;
            $(".plan-sticky-table tr").each(function(index) {
                if (index == 1) {
                    summe += $(this).find("td.on").length * 70;
                } else if (index == 2) {
                    summe += $(this).find("td.on").length * 50;
                };
            });
            appModal.sticky.sum = summe;
        }
    })
}


//企业需求数据请求
function demandRequest(type, page) {
    appCont.require.curpage = page;
    if (type == 0) { // 校企合作
        var postdata = {
            userId: parObj.userId,
            loginIdentifier: parObj.loginId,
            isCenter: 1,
            demandType: 2,
            index: page,
            count: 3
        }
        EventUtils.ajaxReq("/demand/getList", "get", postdata, function(resp, status) {
            if (resp && resp.data) {
                appCont.require.totalpages = resp.data.totalPage;
                appCont.require.results = resp.data.list;
                appCont.require.totalitems = resp.data.totalRow;
            } else {
                appCont.require.totalpages = 1;
                appCont.require.results = [];
                appCont.require.totalitems = 0;
            }
            appCont.require.demandSrc = 0;
            appCont.require.state = "校企合作";
        })
    } else if (type == 1) { //招聘会
        var postdata = {
            userId: parObj.userId,
            loginIdentifier: parObj.loginId,
            isCenter: 1,
            jobFairType: 2,
            index: page,
            count: 3
        }
        EventUtils.ajaxReq("/jobfair/getList", "get", postdata, function(resp, status) {
            if (resp && resp.data) {
                appCont.require.totalpages = resp.data.totalPage;
                appCont.require.results = resp.data.list;
                appCont.require.totalitems = resp.data.totalRow;
            } else {
                appCont.require.totalpages = 1;
                appCont.require.results = [];
                appCont.require.totalitems = 0;
            }
            appCont.require.demandSrc = 1;
            appCont.require.state = "招聘会";
        })
    } else if (type == 2) { //企业直聘
        var postdata = {
            userId: parObj.userId,
            loginIdentifier: parObj.loginId,
            isCenter: 1,
            index: page,
            count: 3
        }
        EventUtils.ajaxReq("/recruit/getList", "get", postdata, function(resp, status) {
            //console.log(resp);
            if (resp && resp.data) {
                appCont.require.totalpages = resp.data.totalPage;
                appCont.require.results = resp.data.list;
                appCont.require.totalitems = resp.data.totalRow;
            } else {
                appCont.require.totalpages = 1;
                appCont.require.results = [];
                appCont.require.totalitems = 0;
            }
            appCont.require.demandSrc = 2;
            appCont.require.state = "企业直聘";
        })
    }
}

//企业收藏信息请求
function collectRequest(type, page) {
    appCont.collect.curpage = 1;
    if (type == 0) { //校企合作
        var postdata = {
            userId: parObj.userId,
            loginIdentifier: parObj.loginId,
            index: page,
            count: 3
        };
        EventUtils.ajaxReq("/demand/getMarkList", "get", postdata, function(resp, status) {
            //console.log(resp);
            if (resp.data) {
                appCont.collect.totalpages = resp.data.totalPage;
                appCont.collect.totalitems = resp.data.totalRow;
                appCont.collect.results = resp.data.list;
            } else {
                appCont.collect.totalpages = 1;
                appCont.collect.results = [];
                appCont.collect.totalitems = 0;
            }
            appCont.collect.collectSrc = 0;
        })
    } else if (type == 1) { //招聘会
        var postdata = {
            userId: parObj.userId,
            loginIdentifier: parObj.loginId,
            index: page,
            count: 3
        };
        EventUtils.ajaxReq("/jobfair/getMarkList", "get", postdata, function(resp, status) {
            //console.log(resp);
            if (resp.data) {
                appCont.collect.totalpages = resp.data.totalPage;
                appCont.collect.totalitems = resp.data.totalRow;
                appCont.collect.results = resp.data.list;
            } else {
                appCont.collect.totalpages = 1;
                appCont.collect.results = [];
                appCont.collect.totalitems = 0;
            }
            appCont.collect.collectSrc = 1;
        })
    }
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
        //console.log(resp);
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
//招聘会消息数据请求
function jobfairMsgRequest(applystatus, page) {
    appCont.message.jobfair.curpage = page;
    var postdata = {
        userId: parObj.userId,
        applyStatus: applystatus,
        index: page,
        count: 3
    }
    EventUtils.ajaxReq("/jobfair/getJobFair", "get", postdata, function(resp, status) {
        //console.log(resp);
        if (resp && resp.data) {
            appCont.message.jobfair.totalitems = resp.data.totalRow;
            appCont.message.jobfair.totalpages = resp.data.totalPage;
            appCont.message.jobfair.results = resp.data.list;
        } else {
            appCont.message.jobfair.results = [];
            appCont.message.jobfair.totalitems = 0;
            appCont.message.jobfair.totalpages = 1;
        }
        appCont.message.jobfair.msgsrc = applystatus;
    });
}

//直聘消息数据请求
function recruitMsgRequest(page) {
    appCont.message.recruit.curpage = page;
    var postdata = {
        userId: parObj.userId,
        index: page,
        count: 3
    }
    EventUtils.ajaxReq("/recruit/getReceiveList", "get", postdata, function(resp, status) {
        //console.log(resp);
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
//校企合作一览
function coopRequest(applyindex, page) {
    appCont.coop.curpage = page;
    var postdata = {
            userId: parObj.userId,
            loginIdentifier: parObj.loginId,
            index: page,
            count: 3,
            applyStatus: applyindex
        }
        //console.log(postdata);
    EventUtils.ajaxReq("/demand/getDemandApplyList", "get", postdata, function(resp, status) {
        //console.log(resp);
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

// 清除页面绑定事件
window.onunload = function() {
    $(".plan-sticky-table td").click(null);
    appTop.$off();
    appPorto.$off();
    appCont.$off();
    appSider.$off();
    appModal.$off();
}