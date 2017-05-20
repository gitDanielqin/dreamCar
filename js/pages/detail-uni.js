var isLogin = false;
var parObj = EventUtils.urlExtrac(window.location); //地址参数对象
var respObj = {}; //页面信息
var accountObj = {} //用户信息
    // 初始化页面信息请求
function infoRequest() {
    var postdemand = {
        demandId: parObj.demandId
    }
    if (parObj.userId) {
        postdemand.userId = parObj.userId;
    }
    EventUtils.ajaxReq("/demand/getInfo", "get", postdemand, function(resp, status) {
        respObj = resp.data;
        console.log(respObj);
        var briefdata = {
            title: respObj.title,
            viewed: 30,
            applied: 15,
            publicDate: respObj.updateTime.split(" ")[0]
        };
        appBanner.unidata = briefdata;
        var incAddArray = respObj.companyAddress.split(";");
        var demandinfo = {
            address: incAddArray[0] + " - " + incAddArray[1],
            type: EventUtils.infoExtrac(respObj.companyType),
            property: respObj.companyProperty,
            job: EventUtils.infoExtrac(respObj.job),
            scale: respObj.companyScale,
            jobCount: respObj.jobCount,
            profession: EventUtils.infoExtrac(respObj.profession),
            professionCount: respObj.professionCount,
            trainType: respObj.trainType,
            discription: respObj.discription,
        };
        appMain.unidata.demand = demandinfo;
        var userAddArray = respObj.userAddress.split(";");
        var baseinfo = {
            uni: respObj.userName,
            uniprops: respObj.userProperty,
            uniscale: respObj.userScale,
            address: userAddArray[1] + "-" + userAddArray[2],
            discription: respObj.userDiscription
        };
        appMain.unidata.baseinfo = baseinfo;
        //初始化联合培养时间表
        $("#train-table .date-aval").removeClass("date-aval");
        var timeArray = respObj.trainTime.split(";");
        for (var i = 0; i < timeArray.length; i++) {
            for (var j = 0; j < timeArray[i].length; j++) {
                if (timeArray[i].charAt(j) == "1") {
                    $("#train-table .date-tr").eq(i).find("td").eq(j + 1).addClass("date-aval");
                }
            }
        };
        //判断是否已收藏
        if (respObj.markStatus == "1") {
            $("#app-banner .btn-collec").addClass("collected");
            $("#app-banner .btn-collec span").html("已收藏");
        }
    })

    if (parObj.userId) {
        EventUtils.ajaxReq("/center/user/getInfo", "post", { userId: parObj.userId }, function(resp, status) {
            //  console.log(resp);
            accountObj = resp.data;
            console.log(accountObj);
            if (accountObj) {
                appTop.userName = resp.data.userName;
                appTop.userType = resp.data.userType;
                appTop.isLogin = true;
                isLogin = true;
            }
        })
    }
    // var postdata = {
    //      index:1,
    //      count:13,
    //      demandId:parObj.demandId
    // };
    // EventUtils.ajaxReq("/demand/getDemandApplyList","get",postdemand,function(resp,status){
    //      console.log(resp)
    // })
}



var appTop = new Vue({
    el: "#app-top",
    data: {
        isLogin: isLogin,
        userType: "0",
        userName: ""
    },
    methods: {
        loginEv: function() {
            appModal.showModal = true;
            appModal.showLogin = true;
        },
        regisEv: function() {
            window.open("login.html?newAcc=1", "_blank");
        },
        publish: function() {
            switch (this.userType) {
                case "1":
                    var link = "uniRequire.html?new=1&userId=" + parObj.userId + "&loginId=" + parObj.loginId;
                    break;
                case "2":
                    var link = "incRequire.html?new=1&userId=" + parObj.userId + "&loginId=" + parObj.loginId;
                    break;
                default:
            }
            window.open(link, '_blank');
        },
        toCenter: function(theme) {
            switch (this.userType) {
                case "0":
                    parObj
                    var link = "pCenter.html?loginId=" + parObj.loginId + "&userId=" + parObj.userId + "&theme=" + theme;
                    break;
                case "1":
                    var link = "uniCenter.html?loginId=" + parObj.loginId + "&userId=" + parObj.userId + "&theme=" + theme;
                    break;
                case "2":
                    var link = "incCenter.html?loginId=" + parObj.loginId + "&userId=" + parObj.userId + "&theme=" + theme;
                    break;
                default:

            }
            window.open(link, '_blank');
        },
        logout: function() {
            this.isLogin = false;
            $("#app-banner .btn-collec").removeClass("collected");
            $("#app-banner .btn-collec span").html("收 藏");
            appModal.login.account = "";
            appModal.login.password = "";
        }
    }
});

var appBanner = new Vue({
    el: "#app-banner",
    data: {
        unidata: {
            title: "lalaland",
            viewed: 30,
            applied: 15,
            publicDate: "2016-12-11"
        }
    },
    methods: {
        collect: function(obj) {
            if (parObj.userId == respObj.userId) {
                alert("无法收藏自己的需求！");
                return false;
            }
            if (respObj.demandType == accountObj.userType) {
                alert("抱歉，目前您不能收藏高校的需求！");
                return false;
            }
            if (!$(obj).hasClass("btn-collec")) {
                obj = obj.parentNode;
            }
            if (appTop.isLogin) { //登录状态下
                var isCollected = $(obj).hasClass("collected");
                if (!isCollected) {
                    var postdata = {
                        userId: parObj.userId,
                        loginIdentifier: parObj.loginId,
                        demandId: parObj.demandId,
                    }
                    EventUtils.ajaxReq("/demand/addMarkInfo", "post", postdata, function(resp, status) {
                        console.log(resp);
                        $(obj).find("span").text("已收藏");
                        $(obj).addClass("collected");
                    })
                }
            } else { //未登录状态下
                $(".dlg-login").css({
                    top: Math.floor(($(window).height() - 412) / 2 + document.body.scrollTop)
                })
                appModal.showModal = true;
                appModal.showLogin = true;
                appModal.showSucc = false;
            }
        },
        coApply: function() {
            if (parObj.userId == respObj.userId) {
                alert("无法申请自己的需求！");
                return false;
            }
            if (appTop.isLogin) {
                var postdata = {
                    userId: parObj.userId,
                    loginIdentifier: parObj.loginId,
                    demandId: parObj.demandId
                }
                EventUtils.ajaxReq("/demand/cooperateDemand", "post", postdata, function(resp, status) {
                    console.log(resp);
                    $(".dlg-success").css({
                        top: Math.floor(($(window).height() - 412) / 2 + document.body.scrollTop)
                    });
                    appModal.showModal = true;
                    appModal.showLogin = false;
                    appModal.showSucc = true;
                });

            } else {
                $(".dlg-login").css({
                    top: Math.floor(($(window).height() - 412) / 2 + document.body.scrollTop)
                })
                appModal.showModal = true;
                appModal.showLogin = true;
                appModal.showSucc = false;
            }
        }
    },
    computed: {
        homeLink: function() {
            return appTop.isLogin ? "index.html?userId=" + parObj.userId : "index.html"
        }
    }
});
var appMain = new Vue({
    el: "#app-main",
    data: {
        unidata: {
            demand: {
                address: "杭州市", //企业地址
                type: "互联网", //企业行业
                property: "民营", //企业性质
                job: "UI设计师", //岗位名称
                scale: "1000-9999人", //企业规模
                jobCount: "21-30人", //岗位数量
                profession: "影视多媒体", //影视多媒体
                professionCount: "40-60人", //专业人数
                trainType: "学生入企", //联合培养方式
                discription: "lalaland", //需求描述
            },
            baseinfo: {
                uni: "浙江大学",
                uniprops: "重点",
                uniscale: "20000人",
                address: "下沙大学城",
                discription: "啦啦啦"
            }
        },
        applyRec: [
            { inc: "宁波市xx有限公司", date: "2016-12-11 20:56:10", state: "查看" },
            { inc: "宁波市xx有限公司", date: "2016-12-11 20:56:10", state: "未查看" },
            { inc: "宁波市xx有限公司", date: "2016-12-11 20:56:10", state: "查看" },
            { inc: "宁波市xx有限公司", date: "2016-12-11 20:56:10", state: "未查看" },
            { inc: "宁波市xx有限公司", date: "2016-12-11 20:56:10", state: "查看" },
            { inc: "宁波市xx有限公司", date: "2016-12-11 20:56:10", state: "未查看" },
            { inc: "宁波市xx有限公司", date: "2016-12-11 20:56:10", state: "未查看" },
            { inc: "宁波市xx有限公司", date: "2016-12-11 20:56:10", state: "查看" },
            { inc: "宁波市xx有限公司", date: "2016-12-11 20:56:10", state: "未查看" },
            { inc: "宁波市xx有限公司", date: "2016-12-11 20:56:10", state: "查看" },
            { inc: "宁波市xx有限公司", date: "2016-12-11 20:56:10", state: "未查看" },
            { inc: "宁波市xx有限公司", date: "2016-12-11 20:56:10", state: "查看" },
            { inc: "宁波市xx有限公司", date: "2016-12-11 20:56:10", state: "查看" },
        ],
        uniComment: [
            { portUrl: "images/porto01.jpg", cont: "挺好的，还不错，恩，呵呵", date: "2016-12-11 22:33" },
            { portUrl: "images/porto02.jpg", cont: "挺好的，还不错，恩，呵呵", date: "2016-12-11 22:33" },
            { portUrl: "images/porto01.jpg", cont: "挺好的，还不错，恩，呵呵", date: "2016-12-11 22:33" },
            { portUrl: "images/porto02.jpg", cont: "挺好的，还不错，恩，呵呵", date: "2016-12-11 22:33" },
        ]
    },
    methods: {
        viewCss: function(state) {
            if (state == "查看") {
                return "viewed";
            } else if (state == "预约面试") {
                return "interview";
            } else if (state == "邀请合作") {
                return "coop";
            } else if (state == "邀请参会") {
                return "interview";
            }
        },
        showContact: function(contact) {
            if (isLogin) {
                return contact;
            } else {
                var cont_h = contact.slice(0, 3);
                var cont_e = contact.slice(7);
                return (cont_h + "****" + cont_e);
            }
        },
        showAllContact: function(contact) {
            $(".descript .contact-phone").text(contact);
        },
        topage: function() {
            //console.log(1);
        }
    },
    components: {
        'pagination': pagination
    }
});
var appModal = new Vue({
    el: "#app-modal",
    data: {
        showModal: false,
        showSucc: false,
        showLogin: false,
        login: {
            account: "",
            password: ""
        }
    },
    methods: {
        confirmSuc: function() {
            this.showSucc = false;
            this.showModal = false;
        },
        closeSuc: function() {
            this.showSucc = false;
            this.showModal = false;
        },
        closeLog: function() {
            this.showLogin = false;
            this.showModal = false;
        },
        loginEv: function() {
            var postdata = {
                loginName: this.login.account,
                password: this.login.password
            };
            EventUtils.ajaxReq("/center/user/login", "post", postdata, function(resp, status) {
                parObj.userId = resp.data.userId;
                parObj.loginId = resp.data.loginIdentifier;
                parObj.userType = resp.data.userType;
                accountObj = resp.data;
                appTop.userType = resp.data.userType;
                appTop.userName = resp.data.name;
                appTop.isLogin = true;
                appModal.showModal = false;
                appModal.showLogin = false;
                //登录判断是否已收藏
                var postdemand = {
                    demandId: parObj.demandId,
                    userId: accountObj.userId
                }
                console.log(postdemand);
                EventUtils.ajaxReq("/demand/getInfo", "get", postdemand, function(resp, status) {
                    console.log(resp.data);
                    if (resp.data.markStatus == "1") {
                        $("#app-banner .btn-collec").addClass("collected");
                        $("#app-banner .btn-collec span").html("已收藏");
                    }
                });

                var state = {
                    title: document.title,
                    url: document.location.href,
                    otherkey: null
                };
                //无刷新页面替换URL
                history.replaceState(state, document.title, "detail-uni.html?userId=" + resp.data.userId + "&loginId=" + resp.data.loginIdentifier + "&demandId=" + respObj.demandId);
                console.log(resp);
            })
        }
    },
    watch: {
        'showLogin': function(curval) {
            if (curval) {
                var dis_top = Math.floor(EventUtils.getViewport().height * 0.2) + document.body.scrollTop + "px";
                $(".dlg-login").css("top", dis_top);
            }
        }
    }
})

function _init() {
    infoRequest();
    selectInitPos();
}
_init();