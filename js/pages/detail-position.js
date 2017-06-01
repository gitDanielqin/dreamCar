var parObj = EventUtils.urlExtrac(window.location); //地址参数对象
var respObj = {}; //页面信息
var accountObj = {} //用户信息
    // 初始化页面信息请求
function infoRequest() {
    var postdata = {
        recruitId: parObj.recruitId
    }
    if (parObj.userId) {
        postdata.userId = parObj.userId;
    }
    console.log(postdata);
    EventUtils.ajaxReq("/recruit/getInfo", "get", postdata, function(resp, status) {
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
        appBanner.posdata = briefdata;
        var posinfo = {
            pos: EventUtils.infoExtrac(respObj.job),
            salary: respObj.salary,
            posType: respObj.workType,
            scolar: respObj.education,
            gender: gender,
            worksexp: respObj.workTime,
            posAmount: respObj.recruitCount,
            contact: respObj.mobile,
            address: respObj.companyAddress ? respObj.companyAddress.split(";").join("-") : "",
            welfare: respObj.welfare ? respObj.welfare.split(";") : "",
            inc: respObj.userName,
            incProps: respObj.userProperty,
            incScale: respObj.userScale,
            incArea: respObj.userType,
            posDesc: respObj.discription,
            userDesc: respObj.userDiscription
        };
        appMain.posdata = posinfo;
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
            $("button.btn-apply[disabled]").text("投个简历");
            $("button.btn-apply[disabled]").attr("disabled", false);
            var state = {
                title: document.title,
                url: document.location.href,
                otherkey: null
            };
            //无刷新页面替换URL
            history.replaceState(state, document.title, "detail-position.html");
        }
    }
});
var appBanner = new Vue({
    el: "#app-banner",
    data: {
        posdata: {
            pos: "UI设计师",
            viewed: 30,
            applied: 15,
            publicDate: "2016-12-11"
        }
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
                        userId: parObj.userId,
                        loginIdentifier: parObj.loginId,
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
        coApply: function(obj) {
            if (appTop.isLogin) {
                if (accountObj.userType != "0") {
                    alert("抱歉，您不能投递该职位！");
                    return false;
                }
                var postdata = {
                    userId: accountObj.userId,
                    loginIdentifier: accountObj.loginId,
                    recruitId: parObj.recruitId
                }
                EventUtils.ajaxReq("/recruit/cooperateRecruit", "post", postdata, function(resp, status) {
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
                    //申请后避免重复点击
                    $(obj).attr("disabled", true).text("已投递");
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
        posdata: {
            pos: "UI设计师",
            salary: "6K-8K",
            posType: "全职",
            scolar: "大专以上",
            gender: "不限",
            worksexp: "1-3年经验",
            posAmount: 1,
            contact: "18845696321",
            address: "杭州市滨江区六合路368号一幢(北)三楼B3077室-4",
            welfare: ["五险一金", "带薪年假", "加班补助", "双休", "朝九晚五", "运营大咖", "美酒零食"],
            inc: "杭州煌巢科技有限公司分公司",
            incProps: "国企",
            incScale: 20000,
            incArea: "互联网",
            posDesc: "",
            userDesc: ""
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
        showAllContact: function(contact) {
            $(".descript .contact-phone").text(contact);
        },
        applyswitch: function(page) {
            //   applyRequest(page);
        },
        cmtswitch: function(page) {
            commentRequest(respObj.userId, page);
        }
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
                appTop.userType = accountObj.userType;
                appTop.userName = accountObj.userName;
                appTop.isLogin = true;
                appModal.showModal = false;
                appModal.showLogin = false;
                //登录判断是否已收藏
                var postdemand = {
                    recruitId: parObj.recruitId,
                    userId: accountObj.userId
                }
                console.log(postdemand);
                EventUtils.ajaxReq("/recruit/getInfo", "get", postdemand, function(resp, status) {
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
                history.replaceState(state, document.title, "detail-position.html?userId=" + resp.data.userId);
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