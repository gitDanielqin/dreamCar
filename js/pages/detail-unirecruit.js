// import $ from "../libs/jquery-3.1.0.min";
// var Vue = require("../libs/vue");
// require("../common/common")
// require("../components/dropdown")
// require("../components/pagination")
// require("../components/detail-table")
// require("../../css/base.css")
// require("../../css/widget.css")
// require("../../css/detail-comm.css")
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
        appMain.tabledata.desc = respObj.discription;
        appMain.tabledata.userdesc = respObj.userDiscription;
        //招聘会申请一览
        //  applyRequest(1);
        //获取评价一览
        commentRequest(respObj.userId, 1);
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
                    var link = "uniRequire.html?new=1";
                    break;
                case "2":
                    var link = "incRequire.html?new=1";
                    break;
                default:
            };
            if (accountObj.userId) {
                link += "&userId=" + accountObj.userId + "&loginId=" + accountObj.loginIdentifier;
            }
            window.open(link, '_blank');
        },
        toCenter: function(theme) {
            switch (this.userType) {
                case "0":
                    var link = "pCenter.html?theme=" + theme;
                    break;
                case "1":
                    var link = "uniCenter.html?theme=" + theme;
                    break;
                case "2":
                    var link = "incCenter.html?theme=" + theme;
                    break;
                default:

            };
            if (accountObj.userId) {
                link += "&userId=" + accountObj.userId + "&loginId=" + accountObj.loginIdentifier;
            }
            window.open(link, '_blank');
        },
        logout: function() {
            this.isLogin = false;
            $("#app-banner .btn-collec").removeClass("collected");
            $("#app-banner .btn-collec span").html("收 藏");
            appModal.login.account = "";
            appModal.login.password = "";
            //复原合作按钮
            $("button.btn-apply[disabled] span").text("申请招聘");
            $("button.btn-apply[disabled]").attr("disabled", false);
            var state = {
                title: document.title,
                url: document.location.href,
                otherkey: null
            };
            //无刷新页面替换URL
            var originalurl = state.url.slice(0, state.url.indexOf("&userId"));
            history.replaceState(state, document.title, originalurl);
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
                if (accountObj.userType != "2") {
                    swal({
                        title: "",
                        text: "抱歉，您不能收藏该需求！",
                        type: "warning"
                    })
                    return false;
                }
                if (!$(obj).hasClass("btn-collec")) {
                    obj = obj.parentNode;
                }
                if (!$(obj).hasClass("collected")) {
                    var postdata = {
                        userId: accountObj.userId,
                        loginIdentifier: accountObj.loginIdentifier,
                        jobFairId: parObj.jobfairId,
                    }
                    EventUtils.ajaxReq("/jobfair/addMarkInfo", "post", postdata, function(resp, status) {
                        console.log(resp);
                        $(obj).find("span").text("已收藏");
                        $(obj).addClass("collected");
                    })
                }
            } else { //未登录状态下
                appModal.showModal = true;
                appModal.showLogin = true;
                appModal.showSucc = false;
            }
        },
        coApply: function(obj) {
            if (appTop.isLogin) {
                if (accountObj.userType != "2") {
                    swal({
                        title: "",
                        text: "抱歉，您不能申请该需求！",
                        type: "warning"
                    })
                    return false;
                }
                var postdata = {
                    userId: accountObj.userId,
                    loginIdentifier: accountObj.loginIdentifier,
                    jobFairId: parObj.jobfairId
                }
                EventUtils.ajaxReq("/jobfair/cooperateJobFair", "post", postdata, function(resp, status) {
                    // console.log(resp);
                    if (resp.data.isApply == "0") {
                        appModal.showModal = true;
                        appModal.showLogin = false;
                        appModal.showSucc = true;
                    } else {
                        swal({
                            title: "",
                            text: resp.info,
                            type: "error"
                        })
                    }
                    //申请后避免重复点击
                    if (!$(obj).hasClass("btn-apply")) {
                        obj = obj.parentNode;
                    }
                    $(obj).attr("disabled", true);
                    $(obj).children("span").text("已申请");
                });
            } else {
                appModal.showModal = true;
                appModal.showLogin = true;
                appModal.showSucc = false;
            }
        },
        homeLink: function() {
            window.location.href = appTop.isLogin ? "index.html?userId=" + accountObj.userId : "index.html"
        }
    },
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
        tabledata: {
            desc: "",
            userdesc: "",
            applyRec: {
                totalpages: 1,
                totalitems: 0,
                results: []
            },
            comment: {
                totalpages: 1,
                totalitems: 0,
                results: []
            }
        }
    },
    methods: {
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
        applyswitch: function(page) {
            //   applyRequest(page);
        },
        cmtswitch: function(page) {
            commentRequest(respObj.userId, page);
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
                history.replaceState(state, document.title, state.url + "&userId=" + resp.data.userId);
            })
        }
    },
    watch: {
        'showLogin': function(curval) {
            if (curval) {
                this.$nextTick(function() {
                    EventUtils.absCenter($(".dlg-login"));
                })
            }
        },
        'showSucc': function(curval) {
            if (curval) {
                this.$nextTick(function() {
                    EventUtils.absCenter($(".dlg-success"));
                })
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

//评价获取
function commentRequest(id, page) {
    var commentdata = {
        reportUserId: id,
        index: page,
        count: 6
    }
    EventUtils.ajaxReq("/sys/getCommentList", "post", commentdata, function(resp, status) {
        //  console.log(resp);
        if (resp && resp.data) {
            appMain.tabledata.comment.results = resp.data.list;
            appMain.tabledata.comment.totalpages = resp.data.totalPage;
            appMain.tabledata.comment.totalitems = resp.data.totalRow;
        } else {
            appMain.tabledata.comment.results = [];
            appMain.tabledata.comment.totalpages = 1;
            appMain.tabledata.comment.totalitems = 0;
        }
    });
}