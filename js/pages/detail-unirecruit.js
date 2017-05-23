var isLogin = false;
var parObj = EventUtils.urlExtrac(window.location); //地址参数对象
var respObj = {}; //页面信息
var accountObj = {} //用户信息
    // 初始化页面信息请求
function infoRequest() {
    var postdata = {
        jobFairId: parObj.jobfairId
    }
    if (parObj.userId) {
        postdata.userId = parObj.userId;
    }
    // console.log(postdata);
    EventUtils.ajaxReq("/jobfair/getInfo", "get", postdata, function(resp, status) {
        respObj = resp.data;
        console.log(respObj);
        var briefdata = {
            title: respObj.title,
            viewed: respObj.readCount,
            applied: respObj.applyCount,
            publicDate: respObj.updateTime.split(" ")[0]
        };
        var gender = "";
        switch (respObj.sex) {
            case "1":
                gender = "男";
                break;
            case "2":
                gender = "女";
                break;
            case "3":
                gender = "不限";
                break;
        }
        appBanner.unirecdata = briefdata;
        var unirecinfo = {
            IncCity: respObj.companyAddress ? respObj.companyAddress.split(";")[1] : "",
            IncArea: EventUtils.infoExtrac(respObj.companyType),
            IncProps: respObj.companyProperty,
            IncPos: EventUtils.infoExtrac(respObj.job),
            IncScale: respObj.companyScale,
            posAmount: respObj.jobCount,
            major: EventUtils.infoExtrac(respObj.profession),
            stuScale: respObj.professionCount,
            recruitDate: respObj.startTime,
            recruitAddr: respObj.jobFairAddress ? respObj.jobFairAddress.split(";").join("-") : "",
            contact: respObj.mobile,
            contactP: respObj.linkMan,
            jobfairDesc: respObj.discription,
            userAddress: respObj.userAddress ? respObj.userAddress.split(";").join("-") : "",
            userName: respObj.userName,
            userScale: respObj.userScale,
            userProperty: respObj.userProperty,
            userDesc: respObj.userDiscription,
        };
        appMain.unirecdata = unirecinfo;
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
            //   console.log(accountObj);
            if (accountObj) {
                appTop.userName = resp.data.userName;
                appTop.userType = resp.data.userType;
                appTop.isLogin = true;
                isLogin = true;
            }
        })
    }
}



var appTop = new Vue({
    el: "#app-top",
    data: {
        isLogin: false,
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
                    var link = "uniRequire.html?new=1&userId=" + accountObj.userId + "&loginId=" + accountObj.loginIdentifier;
                    break;
                case "2":
                    var link = "incRequire.html?new=1&userId=" + accountObj.userId + "&loginId=" + accountObj.loginIdentifier;
                    break;
                default:
            }
            window.open(link, '_blank');
        },
        toCenter: function(theme) {
            switch (this.userType) {
                case "0":
                    parObj
                    var link = "pCenter.html?loginId=" + accountObj.loginIdentifier + "&userId=" + accountObj.userId + "&theme=" + theme;
                    break;
                case "1":
                    var link = "uniCenter.html?loginId=" + accountObj.loginIdentifier + "&userId=" + accountObj.userId + "&theme=" + theme;
                    break;
                case "2":
                    var link = "incCenter.html?loginId=" + accountObj.loginIdentifier + "&userId=" + accountObj.userId + "&theme=" + theme;
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
        unirecdata: {
            title: "",
            viewed: "",
            applied: "",
            publicDate: ""
        },
    },
    methods: {
        collect: function(obj) {
            if (appTop.isLogin) { //登录状态下
                if (accountObj.userId == respObj.userId) {
                    alert("无法收藏自己的需求！");
                    return false;
                }
                if (accountObj.userType != "0") {
                    alert("抱歉，您不能收藏直聘的需求！");
                    return false;
                }
                if (!$(obj).hasClass("btn-collec")) {
                    obj = obj.parentNode;
                }
                if (!$(obj).hasClass("collected")) {
                    var postdata = {
                        userId: accountObj.userId,
                        loginIdentifier: accountObj.loginIdentifier,
                        recruitId: parObj.recruitId,
                    }
                    EventUtils.ajaxReq("/recruit/addMarkInfo", "post", postdata, function(resp, status) {
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
            if (appTop.isLogin) {
                if (accountObj.userId == respObj.userId) {
                    alert("无法投递自己的职位！");
                    return false;
                }
                if (accountObj.userType != "0") {
                    alert("抱歉，您不能投递该职位！");
                    return false;
                }
                var postdata = {
                    userId: accountObj.userId,
                    loginIdentifier: accountObj.loginIdentifier,
                    recruitId: parObj.recruitId
                }
                EventUtils.ajaxReq("/jobfair/cooperateRecruit", "post", postdata, function(resp, status) {
                    // console.log(resp);
                    if (resp.data.isApply == "0") {
                        $(".dlg-success").css({
                            top: Math.floor(($(window).height() - 412) / 2 + document.body.scrollTop)
                        });
                        appModal.showModal = true;
                        appModal.showLogin = false;
                        appModal.showSucc = true;
                    } else {
                        alert(resp.info);
                    }
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
            return appTop.isLogin ? "index.html?userId=" + accountObj.userId : "index.html"
        }
    }
});
var appMain = new Vue({
    el: "#app-main",
    data: {
        unirecdata: {
            IncCity: "杭州",
            IncArea: "互联网",
            IncProps: "国企",
            IncPos: "UI设计师",
            IncScale: "1000-9000人",
            posAmount: 50,
            major: "影视多媒体",
            stuScale: "50-100",
            recruitDate: "2017-12-13",
            recruitTime: "14:00",
            recruitAddr: "杭州市滨江区六合路368号一幢(北)三楼B3077",
            contact: "18845696321",
            contactP: "江老师"
        },
        showMobile: false,
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
            if (this.showMobile && appTop.isLogin) {
                return contact;
            } else {
                var cont_h = contact.slice(0, 3);
                var cont_e = contact.slice(7);
                return (cont_h + "****" + cont_e);
            }
        },
        showPhone: function() {
            if (!appTop.isLogin) {
                appModal.showLogin = true;
                appModal.showSucc = false;
                appModal.showModal = true;
            } else {
                this.showMobile = true;
            }
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
            console.log(postdata);
            EventUtils.ajaxReq("/center/user/login", "post", postdata, function(resp, status) {
                accountObj = resp.data;
                console.log(resp.data);
                appTop.userType = resp.data.userType;
                appTop.userName = resp.data.name;
                appTop.isLogin = true;
                appModal.showModal = false;
                appModal.showLogin = false;
                //登录判断是否已收藏
                var postdemand = {
                    jobFairId: parObj.jobfairId,
                    userId: accountObj.userId
                }
                console.log(postdemand);
                EventUtils.ajaxReq("/jobfair/getInfo", "get", postdemand, function(resp, status) {
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
                //  history.replaceState(state, document.title, "detail-unirecruit.html?userId=" + accountObj.userId);
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
    initEventBind();
}
_init();

function initEventBind() {
    $(".result-tabs li").bind("click", function() {
        $(".result-tabs li").removeClass("on");
        $(this).addClass("on");
        $(".tab-cont").hide();
        $("." + $(this).attr("cont")).show();
    });
    $(".account li").mouseenter(function() {
        if ($(this).find("dl").length > 0) {
            $(this).find("dl").slideDown();
        }
    }).mouseleave(function() {
        if ($(this).find("dl").length > 0) {
            $(this).find("dl").hide();
        }
    })
};