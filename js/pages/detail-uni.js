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
    var postdemand = {
        demandId: parObj.demandId
    }
    if (parObj.userId) {
        postdemand.userId = parObj.userId;
    }
    EventUtils.ajaxReq("/demand/getInfo", "get", postdemand, function(resp, status) {
        respObj = resp.data;
        //   console.log(respObj);
        var briefdata = {
            title: respObj.title,
            viewed: respObj.readCount,
            applied: respObj.applyCount,
            publicDate: respObj.updateTime.split(" ")[0]
        };
        appBanner.unidata = briefdata;
        var incAddArray = respObj.companyAddress ? respObj.companyAddress.split(";") : "";
        var demandinfo = {
            address: incAddArray != "" ? incAddArray[0] + " - " + incAddArray[1] : "",
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
        var userAddArray = respObj.userAddress ? respObj.userAddress.split(";") : "";
        var baseinfo = {
            uni: respObj.userName,
            uniprops: respObj.userProperty,
            uniscale: respObj.userScale,
            address: userAddArray != "" ? userAddArray[1] + "-" + userAddArray[2] : "",
            discription: respObj.userDiscription
        };
        appMain.unidata.baseinfo = baseinfo;
        //初始化联合培养时间表
        $("#train-table .date-aval").removeClass("date-aval");
        if (respObj.trainTime) {
            var timeArray = respObj.trainTime.split(";");
            for (var i = 0; i < timeArray.length; i++) {
                for (var j = 0; j < timeArray[i].length; j++) {
                    if (timeArray[i].charAt(j) == "1") {
                        $("#train-table .date-tr").eq(i).find("td").eq(j + 1).addClass("date-aval");
                    }
                }
            };
        }
        //判断是否已收藏
        if (respObj.markStatus == "1") {
            $("#app-banner .btn-collec").addClass("collected");
            $("#app-banner .btn-collec span").html("已收藏");
        };
        appMain.tabledata.desc = respObj.discription;
        appMain.tabledata.userdesc = respObj.userDiscription;
        //需求申请一览
        applyRequest(1);
        //评价一览申请
        setTimeout(function() {
            commentRequest(respObj.userId, 1);
        }, 500)


    })
    if (parObj.userId) {
        EventUtils.ajaxReq("/center/user/getInfo", "post", { userId: parObj.userId }, function(resp, status) {
            //  console.log(resp);
            accountObj = resp.data;
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
            $("button.btn-apply[disabled] span").text("申请合作");
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
            if (accountObj.userType != "2") {
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
                appModal.showModal = true;
                appModal.showLogin = true;
                appModal.showSucc = false;
            }
        },
        coApply: function(obj) {
            if (appTop.isLogin) {
                if (accountObj.userType != "2") {
                    alert("抱歉，您不能申请该需求！");
                    return false;
                }
                var postdata = {
                    userId: accountObj.userId,
                    loginIdentifier: accountObj.loginId,
                    demandId: parObj.demandId
                }
                EventUtils.ajaxReq("/demand/cooperateDemand", "post", postdata, function(resp, status) {
                    if (resp.data.isApply == "0") {
                        appModal.showModal = true;
                        appModal.showLogin = false;
                        appModal.showSucc = true;
                    } else {
                        alert(resp.info)
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
        applyswitch: function(page) {
            applyRequest(page);
        },
        cmtswitch: function(page) {
            commentRequest(respObj.userId, page);
        }
    },
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

function slideEvent() {
    $(".account li").hover(function() {
        $(this).find("dl").slideDown(300);
    }, function() {
        $(this).find("dl").slideUp(200);
    })
}

function _init() {
    infoRequest();
    initEventBind();
    selectInitPos();
    slideEvent()
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

function applyRequest(page) {
    var applydata = {
        demandId: parObj.demandId,
        index: page,
        count: 13
    }
    console.log(applydata);
    EventUtils.ajaxReq("/demand/getDemandApply", "get", applydata, function(resp, status) {
        console.log(resp);
        if (resp && resp.data) {
            appMain.tabledata.applyRec.totalpages = resp.data.totalPage;
            appMain.tabledata.applyRec.results = resp.data.list;
            appMain.tabledata.applyRec.totalitems = resp.data.totalRow;
        } else {
            appMain.tabledata.applyRec.totalpages = 1;
            appMain.tabledata.applyRec.results = [];
            appMain.tabledata.applyRec.totalitems = 0;
        }
    })
}

function commentRequest(id, page) {
    var commentdata = {
        reportUserId: id,
        index: page,
        count: 6
    }
    console.log(commentdata);
    EventUtils.ajaxReq("/sys/getCommentList", "post", commentdata, function(resp, status) {
        //  console.log(resp);
        console.log(resp);
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