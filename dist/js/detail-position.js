webpackJsonp([8],{

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var Vue = __webpack_require__(1);
(function () {
    var detailTableTempl = '<div id="app-table">\
        <ul class="result-tabs lis-inline LH40 t-center color-gray79 fSize16" @click.stop="selectTab($event.target)">\
            <li cont="cont-demand" v-if="tabletype==1||tabletype==2" class="on">需求描述</li>\
            <li cont="cont-demand" v-if="tabletype==3||tabletype==4" class="on">招聘会描述</li>\
            <li cont="cont-demand" v-if="tabletype==5" class="on">岗位描述</li>\
            <li cont="cont-desc" v-if="tabletype==1||tabletype==3">高校简介</li>\
            <li cont="cont-desc" v-if="tabletype==2||tabletype==4||tabletype==5">企业简介</li>\
            <li cont="cont-apply">申请记录<i class="msg-info" v-show="options.applyRec.totalitems>0">{{hintshow(options.applyRec.totalitems)}}</i></li>\
            <li cont="cont-comment" v-if="tabletype==1||tabletype==3">高校评价<i class="msg-info" v-show="options.comment.totalitems>0">{{hintshow(options.comment.totalitems)}}</i></li>\
            <li cont="cont-comment" v-if="tabletype==2||tabletype==4||tabletype==5">企业评价<i class="msg-info" v-show="options.comment.totalitems>0">{{hintshow(options.comment.totalitems)}}</i></li>\
        </ul>\
        <p class="tab-cont fSize14 LH38 color-gray6 cont-demand" style="display:block ">{{options.desc}}</p>\
        <p class="tab-cont LH42 fSize14 color-gray6 cont-desc">{{options.userdesc}}</p>\
        <div class="cont-apply tab-cont">\
            <table class="LH48 fSize12 result-table">\
                <tr class="bg-gray-f2 color-gray79 fSize14">\
                    <th class="W200">申请者</th>\
                    <th class="W400">申请时间</th>\
                    <th class="W200">状态</th>\
                </tr>\
                <tr v-for="item in options.applyRec.results">\
                    <td>{{item.applyUserName}}</td>\
                    <td>{{item.createTime}}</td>\
                    <td :class="viewCss(item.readStatus,item.status)">{{statetext(item.readStatus,item.status)}}</td>\
                </tr>\
            </table>\
            <div class="paBot33" v-show="options.applyRec.totalpages>1">\
                <pagination :showpages="showpage(options.applyRec.totalpages)" :totalpages="options.applyRec.totalpages" type="apply" @topage="topage" class="maT28 fSize14 maL150"></pagination>\
            </div>\
        </div>\
        <div class="tab-cont cont-comment">\
            <ul class="H675">\
                <li class="clearfix" v-for="item in options.comment.results">\
                    <div class="avatar fl fSize14 color-gray6 t-center maL28 maR28">\
                        <img :src="item.userIcon" />\
                    </div>\
                    <div class="fl fSize14 W660">\
                        <h4 class="LH-H36 color-gray79">[评价]</h4>\
                        <p class="color-gray6 LH25 comment-text">{{item.comment}}</p>\
                    </div>\
                    <span class="time">{{item.createTime}}</span>\
                </li>\
                <li v-show="options.comment.results.length==0" class="t-center fSize20">暂无评论~</li>\
            </ul>\
            <div class="paBot33" v-show="options.comment.totalpages>1">\
                <pagination :showpages="showpage(options.comment.totalpages)" :totalpages="options.comment.totalpages" type="comment" @topage="topage" class="maT28 fSize14 maL150"></pagination>\
            </div>\
        </div>\
    </div>';
    Vue.component("detail-table", {
        template: detailTableTempl,
        props: ["tabletype", "options"], //1高校 2 企业 3 高校招聘会 4 企业招聘会 5 校企岗位
        methods: {
            hintshow: function hintshow(num) {
                if (num < 100) {
                    return num;
                } else {
                    return "...";
                }
            },
            selectTab: function selectTab(obj) {
                if ($(obj).hasClass("msg-info")) {
                    return false;
                }
                if ($(obj).hasClass("result-tabs")) {
                    return false;
                }
                $(".result-tabs li").removeClass("on");
                $(obj).addClass("on");
                $(".tab-cont").hide();
                $("." + $(obj).attr("cont")).show();
            },
            viewCss: function viewCss(readstate, feedstate) {
                //申请一览状态样式
                if (feedstate == "1" && (this.tabletype == 1 || this.tabletype == 2)) {
                    return "coop";
                }
                if (feedstate == "1" && (this.tabletype == 3 || this.tabletype == 4 || this.tabletype == 5)) {
                    return "interview";
                }
                if (readstate == "1") {
                    return "viewed";
                }
            },
            statetext: function statetext(readstate, feedstate) {
                //申请一览状态文字
                if (feedstate == "1" && (this.tabletype == 1 || this.tabletype == 2)) {
                    return "邀请合作";
                }
                if (feedstate == "1" && (this.tabletype == 3 || this.tabletype == 4)) {
                    return "邀请参会";
                }
                if (feedstate == "1" && this.tabletype == 5) {
                    return "邀请面试";
                }
                if (feedstate == "2") {
                    return "不合适";
                }
                if (readstate == "1") {
                    return "查看";
                }
                return "未查看";
            },
            showpage: function showpage(totalpages) {
                if (totalpages > 3) {
                    return 3;
                } else {
                    return totalpages;
                }
            },
            topage: function topage(page, type) {
                if (type == "apply") {
                    this.$emit("applycallback", page);
                } else if (type == "comment") {
                    this.$emit("cmtcallback", page);
                }
            }
        },
        components: {
            'pagination': pagination
        }
    });
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vue = __webpack_require__(1);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(6);
__webpack_require__(11);
__webpack_require__(2);
__webpack_require__(5);
__webpack_require__(12);
var parObj = EventUtils.urlExtrac(window.location); //地址参数对象
var respObj = {}; //页面信息
var accountObj = {}; //用户信息
// 初始化页面信息请求
function infoRequest() {
    var postdata = {
        recruitId: parObj.recruitId
    };
    if (parObj.userId) {
        postdata.userId = parObj.userId;
    }
    console.log(postdata);
    EventUtils.ajaxReq("/recruit/getInfo", "get", postdata, function (resp, status) {
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
            (0, _jquery2.default)("#app-banner .btn-collec").addClass("collected");
            (0, _jquery2.default)("#app-banner .btn-collec span").html("已收藏");
        }
        appMain.tabledata.desc = respObj.discription;
        appMain.tabledata.userdesc = respObj.userDiscription;
        //招聘会申请一览
        //  applyRequest(1);
        //获取评价一览
        commentRequest(respObj.userId, 1);
    });

    if (parObj.userId) {
        EventUtils.ajaxReq("/center/user/getInfo", "post", { userId: parObj.userId }, function (resp, status) {
            accountObj = resp.data;
            if (accountObj) {
                appTop.userName = resp.data.userName;
                appTop.userType = resp.data.userType;
                appTop.isLogin = true;
            }
        });
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
        loginEv: function loginEv() {
            appModal.showModal = true;
            appModal.showLogin = true;
        },
        regisEv: function regisEv() {
            window.open("login.html?newAcc=1", "_blank");
        },
        publish: function publish() {
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
        toCenter: function toCenter(theme) {
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
        logout: function logout() {
            this.isLogin = false;
            (0, _jquery2.default)("#app-banner .btn-collec").removeClass("collected");
            (0, _jquery2.default)("#app-banner .btn-collec span").html("收 藏");
            appModal.login.account = "";
            appModal.login.password = "";
            //复原合作按钮
            (0, _jquery2.default)("button.btn-apply[disabled]").text("投个简历");
            (0, _jquery2.default)("button.btn-apply[disabled]").attr("disabled", false);
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
        posdata: {
            pos: "UI设计师",
            viewed: 30,
            applied: 15,
            publicDate: "2016-12-11"
        }
    },
    methods: {
        collect: function collect(obj) {
            if (appTop.isLogin) {
                //登录状态下
                if (accountObj.userId == respObj.userId) {
                    alert("无法收藏自己的需求！");
                    return false;
                }
                if (accountObj.userType != "0") {
                    alert("抱歉，您不能收藏直聘的需求！");
                    return false;
                }
                if (!(0, _jquery2.default)(obj).hasClass("btn-collec")) {
                    obj = obj.parentNode;
                }
                if (!(0, _jquery2.default)(obj).hasClass("collected")) {
                    var postdata = {
                        userId: parObj.userId,
                        loginIdentifier: parObj.loginId,
                        recruitId: parObj.recruitId
                    };
                    EventUtils.ajaxReq("/recruit/addMarkInfo", "post", postdata, function (resp, status) {
                        console.log(resp);
                        (0, _jquery2.default)(obj).find("span").text("已收藏");
                        (0, _jquery2.default)(obj).addClass("collected");
                    });
                }
            } else {
                //未登录状态下
                appModal.showModal = true;
                appModal.showLogin = true;
                appModal.showSucc = false;
            }
        },
        coApply: function coApply(obj) {
            if (appTop.isLogin) {
                if (accountObj.userType != "0") {
                    alert("抱歉，您不能投递该职位！");
                    return false;
                }
                var postdata = {
                    userId: accountObj.userId,
                    loginIdentifier: accountObj.loginId,
                    recruitId: parObj.recruitId
                };
                EventUtils.ajaxReq("/recruit/cooperateRecruit", "post", postdata, function (resp, status) {
                    // console.log(resp);
                    if (resp.data.isApply == "0") {
                        appModal.showModal = true;
                        appModal.showLogin = false;
                        appModal.showSucc = true;
                    } else {
                        alert(resp.info);
                    }
                    //申请后避免重复点击
                    (0, _jquery2.default)(obj).attr("disabled", true).text("已投递");
                });
            } else {
                appModal.showModal = true;
                appModal.showLogin = true;
                appModal.showSucc = false;
            }
        },
        homeLink: function homeLink() {
            window.location.href = appTop.isLogin ? "index.html?userId=" + accountObj.userId : "index.html";
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
        showContact: function showContact(contact) {
            if (this.showMobile && appTop.isLogin) {
                return contact;
            } else {
                var cont_h = contact.slice(0, 3);
                var cont_e = contact.slice(7);
                return cont_h + "****" + cont_e;
            }
        },
        showPhone: function showPhone() {
            if (!appTop.isLogin) {
                appModal.showLogin = true;
                appModal.showSucc = false;
                appModal.showModal = true;
            } else {
                this.showMobile = true;
            }
        },
        showAllContact: function showAllContact(contact) {
            (0, _jquery2.default)(".descript .contact-phone").text(contact);
        },
        applyswitch: function applyswitch(page) {
            //   applyRequest(page);
        },
        cmtswitch: function cmtswitch(page) {
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
        confirmSuc: function confirmSuc() {
            this.showSucc = false;
            this.showModal = false;
        },
        closeSuc: function closeSuc() {
            this.showSucc = false;
            this.showModal = false;
        },
        closeLog: function closeLog() {
            this.showLogin = false;
            this.showModal = false;
        },
        loginEv: function loginEv() {
            var postdata = {
                loginName: this.login.account,
                password: this.login.password
            };
            EventUtils.ajaxReq("/center/user/login", "post", postdata, function (resp, status) {
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
                };
                console.log(postdemand);
                EventUtils.ajaxReq("/recruit/getInfo", "get", postdemand, function (resp, status) {
                    console.log(resp.data);
                    if (resp.data.markStatus == "1") {
                        (0, _jquery2.default)("#app-banner .btn-collec").addClass("collected");
                        (0, _jquery2.default)("#app-banner .btn-collec span").html("已收藏");
                    }
                });
                var state = {
                    title: document.title,
                    url: document.location.href,
                    otherkey: null
                };
                //无刷新页面替换URL
                history.replaceState(state, document.title, state.url + "&userId=" + resp.data.userId);
            });
        }
    },
    watch: {
        'showLogin': function showLogin(curval) {
            if (curval) {
                this.$nextTick(function () {
                    EventUtils.absCenter((0, _jquery2.default)(".dlg-login"));
                });
            }
        },
        'showSucc': function showSucc(curval) {
            if (curval) {
                this.$nextTick(function () {
                    EventUtils.absCenter((0, _jquery2.default)(".dlg-success"));
                });
            }
        }
    }
});

function _init() {
    infoRequest();
    selectInitPos();
    initEventBind();
}
_init();

function initEventBind() {
    (0, _jquery2.default)(".account li").mouseenter(function () {
        if ((0, _jquery2.default)(this).find("dl").length > 0) {
            (0, _jquery2.default)(this).find("dl").slideDown();
        }
    }).mouseleave(function () {
        if ((0, _jquery2.default)(this).find("dl").length > 0) {
            (0, _jquery2.default)(this).find("dl").hide();
        }
    });
};

//评价获取
function commentRequest(id, page) {
    var commentdata = {
        reportUserId: id,
        index: page,
        count: 6
    };
    EventUtils.ajaxReq("/sys/getCommentList", "post", commentdata, function (resp, status) {
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

/***/ })

},[36]);