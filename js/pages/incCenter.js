var parObj = EventUtils.urlExtrac(window.location);
var respObj = {}; //请求的本页面的数据集合

function infoRequest() {
    var postdata = {
        userId: localStorage.userId || parObj.userId,
        loginIdentifier: localStorage.loginId || parObj.loginId
    };
    console.log(postdata);
    EventUtils.ajaxReq('/user/company/getInfo', 'get', postdata, function(resp, status) {
        respObj = resp.data;
        console.log(respObj);
        $("#avatar-box").html("<img src='" + respObj.userIcon + "' />");
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
                hasBusLicense: respObj.imgUrl != "",
                edit: respObj.infoStatus == "0",
                view: respObj.infoStatus != "0"
            };
            appCont.resume = resumedata;
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

    })

}

var appTop = new Vue({
    el: "#app-top",
    data: {
        homeLink: "index.html?userId=" + parObj.userId
    }
})


var appPorto = new Vue({
    el: "#app-porto",
    data: {
        viewInfo: true,
        inc: "企业名称",
        database: {
            incprops: incProps,
            incscale: incScale,
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
            console.log(postdata);
            EventUtils.ajaxReq('/user/company/modifyInfo', 'post', postdata, function(resp, status) {
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
            this.$nextTick(function() {
                selectInitInput();
                selectInitPos();
            });
        }
    }
});
// 移除多余的两项
incProps.remove("中国500强");
incProps.remove("世界500强");
var appCont = new Vue({
    el: "#app-content",
    data: {
        database: {
            IncScale: incScale,
            IncProps: incProps,
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
            demandSrc: 0,
            curpage: 1,
            totalpages: 1,
            totalitems: 0,
            newLink: "incRequire.html?new=1&userId=" + parObj.userId + "&loginId=" + parObj.loginId,
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
            state: "校企合作",
            curpage: 1,
            totalpages: 1,
            totalitems: 0,
            applystatus: 1,
            results: []
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
        "require.state": function(curval) {
            if (curval == "校企合作") {
                demandRequest(0, 1);
            } else if (curval == "招聘会") {
                demandRequest(1, 1);
            } else if (curval == "企业直聘") {
                demandRequest(2, 1);
            }
        },
        "require.period": function(curval) {
            this.require.results = reqFilter(this.require.state, curval);
            this.require.curpage = 1;
        },
        "collect.state": function(curval, oldval) {
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
        }
    },
    methods: {
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
            }
            return text == "不限" || text == undefined ? "" : text;
        },
        cityExtrac: function(text) {
            if (text) {
                return text.split(";")[1]
            } else {
                return "";
            }
        },
        infoToArray: function(text) {
            return EventUtils.infoToArray(text);
        },
        requireLink: function(item) {
            if (item.demandId) {
                return "detail-company.html?userId=" + parObj.userId + "&loginId=" + parObj.loginId + "&demandId=" + item.demandId + "&userType=2";
            }
            if (item.recruitId) {
                return "detail-position.html?userId=" + parObj.userId + "&recruitId=" + item.recruitId;
            }
            if (item.jobFairId) {
                return "detail-increcruit.html?userId=" + parObj.userId + "&jobfairId=" + item.jobFairId;
            }
        },
        collectLink: function(item) {
            if (item.demandId) {
                return "detail-uni.html?userId=" + parObj.userId + "&demandId=" + item.demandId;
            }
            if (item.jobFairId) {
                return "detail-unirecruit.html?userId=" + parObj.userId + "&jobfairId=" + item.jobFairId;
            }

        },
        messageLink: function(type, id) {
            if (type == "combi") {
                if (appCont.message.combi.msgsrc == 1) {
                    return "detail-uni.html?demandId=" + id + "&userId=" + parObj.userId;
                } else {
                    return "detail-company.html?demandId=" + id + "&userId=" + parObj.userId;
                }
            }
            if (type == "jobfair") {
                if (appCont.message.jobfair.msgsrc == 1) {
                    return "detail-unirecruit.html?jobfairId=" + id + "&userId=" + parObj.userId;
                } else {
                    return "detail-increcruit.html?jobfairId=" + id + "&userId=" + parObj.userId;
                }
            }
        },
        coopLink: function(item) {
            if (item.demandId) {
                if (item.releaseType == "1") {
                    return "detail-uni.html?demandId=" + item.demandId + "&userId=" + parObj.userId;
                } else {
                    return "detail-company.html?demandId=" + item.demandId + "&userId=" + parObj.userId;
                }
            }
            if (item.jobFairId) {
                return "detail-unirecruit.html?jobfairId=" + item.jobFairId + "&userId=" + parObj.userId;
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
        editSwipe: function() {
            this.resume.firstEdit = false;
            this.resume.edit = true;
            this.resume.view = false;
        },
        saveResume: function() {
            this.resume.hasBusLicense = this.resume.comLicense == "" ? false : true;
            this.resume.edit = false;
            this.resume.view = true;
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
            if (this.resume.hasBusLicense) { //如果用户有上传文件
                setTimeout(function() {
                    if (!hascomUrl) {
                        alert("文件上传失败，请重新上传！");
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
                            console.log(resp);
                        })
                    }
                }, 1500)
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
                    console.log(resp);
                })
            }
        },
        checkExlv: function() {
            var exLevel = $(".uni-level input[type='radio']:checked").val();
            if (exLevel == "0") {
                this.resume.specialLv = "世界500强";
            } else if (exLevel == "1") {
                this.resume.specialLv = "中国500强";
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
            console.log(item);
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
            window.open(link, "_blank");
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
                alert("请上传小于3M的文件！");
                obj.value = "";
            }
            this.resume.comLicense = obj.value
        },
        showFile: function(fid) {
            appModal.preImgUrl = EventUtils.getLocalImgUrl(fid);
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
                EventUtils.ajaxReq("/demand/cooperateDemand", "post", postdata, function(resp, status) {
                    console.log(resp);
                    if (resp.data && resp.data.isApply == "0") {
                        alert("申请已发送！");
                    } else {
                        alert(resp.info);
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
                    console.log(resp);
                    if (resp.data && resp.data.isApply == "0") {
                        alert("申请已发送！");
                    } else {
                        alert(resp.info);
                    }
                })
            }
        },
        cancel: function() {},
        cancelCollect: function(type, id) {
            if (type == "combi") {
                var postdata = {
                    id: id
                }
                console.log(postdata);
                EventUtils.ajaxReq("/demand/delMarkInfo", "post", postdata, function(resp, status) {
                    console.log(resp);
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
                console.log(postdata);
                EventUtils.ajaxReq("/jobfair/delMarkInfo", "post", postdata, function(resp, status) {
                    console.log(resp);
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
        showCard: function(applyId, userId) {
            var postdata = {
                userId: userId,
                applyId: applyId,
            }
            EventUtils.ajaxReq("/readcard/getCardInfo", "get", postdata, function(resp, status) {
                appModal.cardInfo.cardtype = "uni";
                appModal.cardInfo.applyId = resp.data.applyId;
                var infosets = resp.data.viewReadCard;
                infosets.userAddress = infosets.userAddress ? infosets.userAddress.split(";").join("") : "不详";
                appModal.cardInfo.infosets = infosets;
                appModal.showModal = true;
                appModal.show.minicard = true;
            })
        }
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
var appSider = new Vue({
    el: "#app-side"
})
var appModal = new Vue({
    el: "#app-modal",
    data: {
        account: {
            money: 0,
            freeFreshTimes: 0
        },
        show: {
            stickybox: false,
            stickyhintbox: false,
            freshbox: false,
            freshhintbox: false,
            minicard: false,
            mobile: false,
            email: false,
            wechat: false,
            preImg: false,
            comment: false,
            trade: false,
            upload: false
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
            cooperId: 0,
            text: ""
        },
        checkedTrades: [],
        trades: workareas,
        baseInfo: appPorto.oldInfo,
        resumeInfo: appCont.resume
    },
    methods: {
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
                reportUserId: this.comment.cooperId
            }
            console.log(postdata);
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
                var summe = 0;
                $(".plan-sticky-table tr").each(function(index) {
                    if (index == 1) {
                        summe += $(this).find("td.on").length * 70;
                    } else if (index == 2) {
                        summe += $(this).find("td.on").length * 50;
                    };
                });
                this.sticky.sum = summe;
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
        hidemodal: function() {
            this.showModal = false;
            for (var key in appModal.show) {
                appModal.show[key] = false;
            }
        },
        stayshow: function(ev) {
            ev.stopPropagation();
            return false;
        },
        closePorto: function() {
            this.show.upload = false;
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
        },
        agreeApply: function(applyId) {
            var postdata = {
                applyId: applyId,
                result: 1
            }
            EventUtils.ajaxReq("/readcard/operationApply", "get", postdata, function(resp, status) {
                appModal.show.minicard = false;
                appModal.showModal = false;
            })
        },
        denyApply: function(applyId) {
            var postdata = {
                applyId: applyId,
                result: 2
            }
            EventUtils.ajaxReq("/readcard/operationApply", "get", postdata, function(resp, status) {
                appModal.show.minicard = false;
                appModal.showModal = false;
            })
        },
        checkCvs: function(item) {
            if (item.jobFairId) {
                var postdata = {
                    infoStatus: 1,
                    jobFairId: item.jobFairId,
                    userId: parObj.userId,
                }
            }
            if (item.recruitId) {
                var postdata = {
                    infoStatus: 2,
                    recruitId: item.recruitId,
                    userId: parObj.userId,
                    job: EventUtils.infoExtrac(item.job),
                    index: 1,
                    count: 3
                }
            }

        }
    },
    watch: {
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
                    EventUtils.absCenter($("#app-modal .refresh-box"));
                })
            }
        },
        "show.stickyhintbox": function(curval) {
            if (curval) {
                this.$nextTick(function() {
                    EventUtils.absCenter($("#app-modal .refresh-hint-box"));
                })
            }
        },
        "show.freshbox": function(curval) {
            if (curval) {
                this.$nextTick(function() {
                    EventUtils.absCenter($("#app-modal .refresh-box"));
                })
            }
        },
        "show.freshhintbox": function(curval) {
            if (curval) {
                this.$nextTick(function() {
                    EventUtils.absCenter($("#app-modal .refresh-hint-box"));
                })
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

infoRequest();

function init_center() {
    // selectInit();
    selectInitInput();
    selectInitPos();
    refreshEventBind();
    navEventBind();
    showContact();
    vipEventBind();
    modalEventBind();
    uploadEventBind();
}
init_center();

function selectInit() {
    $(".major-input input").each(function(index) {
        $(this).width($(this).width() - 20);
        $(this).css("padding-right", 20 + "px");
        var bgPos = $(this).width() + 10 + "px center";
        $(this).attr("disabled", "true").css("background-position", bgPos);
    })
}

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
        appModal.show.upload = false;
        appModal.showModal = false;
    })
}


function navEventBind() {
    $(".sideBox .sub-li p").unbind("click").bind("click", function() {
        $(this).siblings("p.on").removeClass("on");
        $(this).addClass("on");
        $(".content").children().hide();
        $(".content").children("." + $(this).attr("paneid")).show();
        if ($(this).attr("paneid") == "combi-msg") {
            //请求校企合作消息
            if (appCont.message.combi.state == "发出的邀请") {
                combiMsgRequest(1, 1)
            } else {
                combiMsgRequest(2, 1)
            }
        }
        if ($(this).attr("paneid") == "jobfair-msg") {
            //请求校企合作消息
            if (appCont.message.combi.state == "发出的邀请") {
                jobfairMsgRequest(1, 1)
            } else {
                jobfairMsgRequest(2, 1)
            }
        }
        if ($(this).attr("paneid") == "recruit-msg") {
            recruitMsgRequest(1)
        }
        selectInitPos();
        return false;
    });

    $(".sideBox>li").bind("click", function() {
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
            demandRequest(appCont.require.demandSrc, 1);
        }

        // 收藏面板请求结果
        if ($(this).attr("paneid") == "collectBox") {
            collectRequest(appCont.collect.collectSrc, 1);
        }
        //消息中心
        if ($(this).attr("paneid") == "combi-msg") {
            //请求校企合作消息
            if (appCont.message.combi.state == "发出的邀请") {
                combiMsgRequest(1, 1)
            } else {
                combiMsgRequest(2, 1)
            }
        }
        //校企合作
        if ($(this).attr("paneid") == "uni-coop") {
            coopRequest(appCont.coop.applystatus, 1);
        }
        if ($(this).attr("paneid")) {
            $(".content").children().hide();
            $(".content").children("." + $(this).attr("paneid")).show();
        }
        selectInitPos();
    });
}

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
                appCont.require.results = [];
                appCont.require.totalitems = 0;
            }
            appCont.require.demandSrc = 0;
        })
    } else if (type == 1) { //招聘会
        var postdata = {
            userId: parObj.userId,
            loginIdentifier: parObj.loginId,
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
                appCont.require.results = [];
                appCont.require.totalitems = 0;
            }
            appCont.require.demandSrc = 1;
        })
    } else if (type == 2) { //企业直聘
        var postdata = {
            userId: parObj.userId,
            loginIdentifier: parObj.loginId,
            index: page,
            count: 3
        }
        EventUtils.ajaxReq("/recruit/getList", "get", postdata, function(resp, status) {
            console.log(resp);
            if (resp && resp.data) {
                appCont.require.totalpages = resp.data.totalPage;
                appCont.require.results = resp.data.list;
                appCont.require.totalitems = resp.data.totalRow;
            } else {
                appCont.require.results = [];
                appCont.require.totalitems = 0;
            }
            appCont.require.demandSrc = 2;
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
            console.log(resp);
            if (resp.data) {
                appCont.collect.totalpages = resp.data.totalPage;
                appCont.collect.totalitems = resp.data.totalRow;
                appCont.collect.results = resp.data.list;
            } else {
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
            if (resp.data) {
                appCont.collect.totalpages = resp.data.totalPage;
                appCont.collect.totalitems = resp.data.totalRow;
                appCont.collect.results = resp.data.list;
            } else {
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
        console.log(resp);
        if (resp && resp.data) {
            appCont.message.combi.totalitems = resp.data.totalRow;
            appCont.message.combi.totalpages = resp.data.totalPage;
            appCont.message.combi.results = resp.data.list;
        } else {
            appCont.message.combi.results = [];
            appCont.message.combi.totalitems = 0;
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
        console.log(resp);
        if (resp && resp.data) {
            appCont.message.jobfair.totalitems = resp.data.totalRow;
            appCont.message.jobfair.totalpages = resp.data.totalPage;
            appCont.message.jobfair.results = resp.data.list;
        } else {
            appCont.message.jobfair.results = [];
            appCont.message.jobfair.totalitems = 0;
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
        console.log(resp);
        if (resp && resp.data) {
            appCont.message.recruit.totalitems = resp.data.totalRow;
            appCont.message.recruit.totalpages = resp.data.totalPage;
            appCont.message.recruit.results = resp.data.list;
        } else {
            appCont.message.recruit.results = [];
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