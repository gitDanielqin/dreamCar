var isLogin = false;
var parObj = EventUtils.urlExtrac(window.location); //地址参数对象
var respObj = {}; //页面信息
var accountObj = {}; // 用户信息
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
        var baseinfo = {
            inc: resp.data.userName,
            incprops: resp.data.userProperty,
            incscale: resp.data.userScale,
            address: resp.data.userAddress,
            discription: resp.data.userDiscription
        };
        appMain.incdata.baseinfo = baseinfo;
        var briefdata = {
            title: respObj.title,
            viewed: respObj.readCount,
            applied: respObj.applyCount,
            publicDate: respObj.updateTime ? respObj.updateTime.split(" ")[0] : []
        };
        appBanner.incdata = briefdata;
        if (respObj.schoolAddress) {
            var address = respObj.schoolAddress.split(';')[0] + respObj.schoolAddress.split(';')[1];
        } else {
            var address = "";
        }
        var demandinfo = {
            address: address,
            type: respObj.schoolType,
            property: respObj.schoolProperty,
            job: EventUtils.infoExtrac(respObj.job),
            jobCount: respObj.jobCount,
            profession: EventUtils.infoExtrac(respObj.profession),
            professionCount: respObj.professionCount,
            trainType: respObj.trainType,
            discription: respObj.discription,
        };
        appMain.incdata.demand = demandinfo;
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
            }
        }
        //判断是否已收藏
        if (respObj.markStatus == "1") {
            $("#app-banner .btn-collec").addClass("collected");
            $("#app-banner .btn-collec span").html("已收藏");
        }
        //获取评价一览
        commentRequest(respObj.userId, 1);

    });

    if (parObj.userId) {
        console.log(parObj.userId);
        var getdata = {
            userId: parObj.userId
        }
        EventUtils.ajaxReq("/center/user/getInfo", "get", getdata, function(resp, status) {
            accountObj = resp.data;
            appTop.userName = resp.data.userName;
            appTop.isLogin = true;
            appTop.userType = resp.data.userType
        })

    }
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
        incdata: {
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
            if (accountObj.userType != "1") {
                alert("抱歉，目前您不能收藏企业的需求！");
                return false;
            }
            if (!$(obj).hasClass("btn-collec")) {
                obj = obj.parentNode;
            }
            if (appTop.isLogin) {
                var isCollected = $(obj).hasClass("collected");
                if (!isCollected) {
                    var postdata = {
                        userId: parObj.userId,
                        demandId: parObj.demandId
                    }
                    console.log(postdata);
                    EventUtils.ajaxReq("/demand/addMarkInfo", "get", postdata, function(resp, status) {
                        $(obj).find("span").text("已收藏");
                        $(obj).addClass("collected");
                    })
                }

            } else {
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
                if (parObj.userId == respObj.userId) {
                    alert("无法申请自己的需求！");
                    return false;
                };
                if (accountObj.userType != "1") {
                    alert("抱歉，目前您不能申请企业的需求！");
                    return false;
                }
                var postdata = {
                    userId: parObj.userId,
                    loginIdentifier: parObj.loginId,
                    demandId: parObj.demandId
                }
                EventUtils.ajaxReq("/demand/cooperateDemand", "post", postdata, function(resp, status) {
                    console.log(resp);
                    if (resp.data.isApply == "0") {
                        $(".dlg-success").css({
                            top: Math.floor(($(window).height() - 412) / 2 + document.body.scrollTop)
                        });
                        appModal.showModal = true;
                        appModal.showLogin = false;
                        appModal.showSucc = true;
                    } else {
                        alert(resp.info)
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
            return appTop.isLogin ? "index.html?userId=" + parObj.userId : "index.html"
        }
    }
});
var appMain = new Vue({
    el: "#app-main",
    data: {
        incdata: {
            demand: {
                address: "杭州市", //高校地址
                type: "综合类", //高校类别
                property: "重点", //高校性质
                job: "UI设计师", //岗位名称
                jobCount: "21-30人", //岗位数量
                profession: "影视多媒体", //专业
                professionCount: "40-60人", //专业人数
                trainType: "学生入企", //联合培养方式
                discription: "lalaland", //需求描述
            },
            baseinfo: {
                inc: "校企职通车",
                incprops: "国企",
                incscale: "20-90人",
                address: "",
                discription: ""
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
        comment: {
            totalpages: 1,
            totalitems: 0,
            results: []
        }
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
        showpage: function(totalpages) {
            if (totalpages > 3) {
                return 3;
            } else {
                return totalpages;
            }
        },
        topage: function() {
            //console.log(1);
        },
        showCount: function(totalitems) {
            if (totalitems > 99) {
                return "..."
            } else {
                return totalitems;
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

                var postdemand = {
                    demandId: parObj.demandId,
                    userId: accountObj.userId
                }
                EventUtils.ajaxReq("/demand/getInfo", "get", postdemand, function(resp, status) {
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
                history.replaceState(state, document.title, "detail-company.html?userId=" + resp.data.userId + "&loginId=" + resp.data.loginIdentifier + "&demandId=" + respObj.demandId);

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

function commentRequest(id, page) {
    var commentdata = {
        reportUserId: id,
        index: page,
        count: 6
    }
    EventUtils.ajaxReq("/sys/getCommentList", "post", commentdata, function(resp, status) {
        console.log(resp);
        if (resp && resp.data) {
            appMain.comment.results = resp.data.list;
            appMain.comment.totalpages = resp.data.totalPage;
            appMain.comment.totalitems = resp.data.totalRow;
        } else {
            appMain.comment.results = [];
            appMain.comment.totalpages = 1;
            appMain.comment.totalitems = 0;
        }

    });
}