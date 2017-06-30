webpackJsonp([11],{

/***/ 14:
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
                    <td>{{nameFilter(item.userName)}}</td>\
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
            nameFilter: function nameFilter(name) {
                if (this.tabletype == 1 || this.tabletype == 2 || this.tabletype == 3) {
                    //隐藏名字只针对个人
                    return name.charAt(0) + "***" + name.charAt(name.length - 1);
                }
                var ellipseName = name.charAt(0);
                for (var i = 0; i < name.length - 1; i++) {
                    ellipseName += "*";
                }
                return ellipseName;
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

/***/ 15:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(4);
__webpack_require__(2);
var Vue = __webpack_require__(1);
__webpack_require__(6);
__webpack_require__(8);
__webpack_require__(14);
__webpack_require__(9);
__webpack_require__(3);
__webpack_require__(5);
__webpack_require__(7);
__webpack_require__(15);

var parObj = EventUtils.urlExtrac(window.location); //地址参数对象
var respObj = {}; //页面信息
var accountObj = {}; // 用户信息
function infoRequest() {
    var postdemand = {
        demandId: parObj.demandId
    };
    if (parObj.userId) {
        postdemand.userId = parObj.userId;
    }
    EventUtils.ajaxReq("/demand/getInfo", "get", postdemand, function (resp, status) {
        respObj = resp.data;
        //console.log(respObj);
        var baseinfo = {
            userIcon: resp.data.userIcon,
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
        if (respObj.schoolAddress && respObj.schoolAddress.indexOf(";") >= 0) {
            var address = respObj.schoolAddress.split(';')[1];
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
            discription: respObj.discription
        };
        appMain.incdata.demand = demandinfo;
        //初始化联合培养时间表
        (0, _jquery2.default)("#train-table .date-aval").removeClass("date-aval");
        if (respObj.trainTime) {
            var timeArray = respObj.trainTime.split(";");
            for (var i = 0; i < timeArray.length; i++) {
                for (var j = 0; j < timeArray[i].length; j++) {
                    if (timeArray[i].charAt(j) == "1") {
                        (0, _jquery2.default)("#train-table .date-tr").eq(i).find("td").eq(j + 1).addClass("date-aval");
                    }
                }
            }
        }
        //判断是否已收藏
        if (respObj.markStatus == "1") {
            (0, _jquery2.default)("#app-banner .btn-collec").addClass("collected");
            (0, _jquery2.default)("#app-banner .btn-collec span").html("已收藏");
        }
        appMain.tabledata.desc = respObj.discription;
        appMain.tabledata.userdesc = respObj.userDiscription;
        //判断是否已申请
        if (respObj.applyStatus == "1") {
            (0, _jquery2.default)("#app-banner .btn-apply").attr("disabled", true);
            (0, _jquery2.default)("#app-banner .btn-apply span").text("已申请");
        }
        //需求申请一览
        applyRequest(1);
        //获取评价一览
        commentRequest(respObj.userId, 1);
    });

    if (parObj.userId) {
        //console.log(parObj.userId);
        var getdata = {
            userId: parObj.userId
        };
        EventUtils.ajaxReq("/center/user/getInfo", "get", getdata, function (resp, status) {
            accountObj = resp.data;
            appTop.userName = resp.data.userName;
            appTop.isLogin = true;
            appTop.userType = resp.data.userType;
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
            var link = EventUtils.securityUrl("login.html?newAcc=1");
            window.open(link, "_blank");
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
            link = EventUtils.securityUrl(link);
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
            link = EventUtils.securityUrl(link);
            window.open(link, '_blank');
        },
        logout: function logout() {
            this.isLogin = false;
            appModal.login.account = "";
            appModal.login.password = "";
            (0, _jquery2.default)("#app-banner .btn-collec").removeClass("collected");
            (0, _jquery2.default)("#app-banner .btn-collec span").html("收 藏");
            //复原合作按钮
            (0, _jquery2.default)("button.btn-apply[disabled] span").text("申请合作");
            (0, _jquery2.default)("button.btn-apply[disabled]").attr("disabled", false);
            var state = {
                title: document.title,
                url: document.location.href,
                otherkey: null
            };
            //无刷新页面替换URL
            var originalurl = EventUtils.securityUrl("detail-company.html?demandId=" + parObj.demandId);
            history.replaceState(state, document.title, originalurl);
        }
    },
    watch: {
        "isLogin": function isLogin(curval) {
            if (curval) {
                appFooter.userId = accountObj.userId;
            } else {
                appFooter.userId = "";
            }
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
        collect: function collect(obj) {
            if (accountObj.userType != "1") {
                swal({
                    title: "",
                    text: "抱歉，目前您不能收藏该需求！",
                    type: "warning"
                });
                return false;
            }
            if (!(0, _jquery2.default)(obj).hasClass("btn-collec")) {
                obj = obj.parentNode;
            }
            if (appTop.isLogin) {
                var isCollected = (0, _jquery2.default)(obj).hasClass("collected");
                if (!isCollected) {
                    var postdata = {
                        userId: parObj.userId,
                        demandId: parObj.demandId
                        //console.log(postdata);
                    };EventUtils.ajaxReq("/demand/addMarkInfo", "get", postdata, function (resp, status) {
                        (0, _jquery2.default)(obj).find("span").text("已收藏");
                        (0, _jquery2.default)(obj).addClass("collected");
                    });
                }
            } else {
                appModal.showModal = true;
                appModal.showLogin = true;
                appModal.showSucc = false;
            }
        },
        coApply: function coApply(obj) {
            if (appTop.isLogin) {
                if (accountObj.userType != "1") {
                    swal({
                        title: "",
                        text: "抱歉，您不能申请该需求！",
                        type: "warning"
                    });
                    return false;
                }
                var postdata = {
                    userId: accountObj.userId,
                    loginIdentifier: accountObj.loginIdentifier,
                    demandId: parObj.demandId
                };
                EventUtils.ajaxReq("/demand/cooperateDemand", "post", postdata, function (resp, status) {
                    //console.log(resp);
                    if (resp.data.isApply == "0") {
                        appModal.showModal = true;
                        appModal.showLogin = false;
                        appModal.showSucc = true;
                    } else {
                        swal({
                            title: "",
                            text: resp.info,
                            type: "error"
                        });
                    }
                    //申请后避免重复点击
                    if (!(0, _jquery2.default)(obj).hasClass("btn-apply")) {
                        obj = obj.parentNode;
                    }
                    (0, _jquery2.default)(obj).attr("disabled", true);
                    (0, _jquery2.default)(obj).children("span").text("已申请");
                });
            } else {
                appModal.showModal = true;
                appModal.showLogin = true;
                appModal.showSucc = false;
            }
        },
        homeLink: function homeLink() {
            var link = appTop.isLogin ? "index.html?userId=" + accountObj.userId : "index.html";
            window.location.href = EventUtils.securityUrl(link);
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
                discription: "lalaland" //需求描述
            },
            baseinfo: {
                userIcon: "",
                inc: "校企职通车",
                incprops: "国企",
                incscale: "20-90人",
                address: "",
                discription: ""
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
        showContact: function showContact(contact) {
            if (isLogin) {
                return contact;
            } else {
                var cont_h = contact.slice(0, 3);
                var cont_e = contact.slice(7);
                return cont_h + "****" + cont_e;
            }
        },
        showAllContact: function showAllContact(contact) {
            (0, _jquery2.default)(".descript .contact-phone").text(contact);
        },
        applyswitch: function applyswitch(page) {
            applyRequest(page);
        },
        cmtswitch: function cmtswitch(page) {
            commentRequest(respObj.userId, page);
        }
    }
});
var appFooter = new Vue({
    el: "#app-footer",
    data: {
        userId: parObj.userId
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
        securityUrl: function securityUrl(url) {
            return EventUtils.securityUrl(url);
        },
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
                accountObj = resp.data;
                appTop.userType = resp.data.userType;
                appTop.userName = resp.data.name;
                appTop.isLogin = true;
                appModal.showModal = false;
                appModal.showLogin = false;

                var postdemand = {
                    demandId: parObj.demandId,
                    userId: accountObj.userId
                };
                EventUtils.ajaxReq("/demand/getInfo", "get", postdemand, function (resp, status) {
                    if (resp.data.markStatus == "1") {
                        (0, _jquery2.default)("#app-banner .btn-collec").addClass("collected");
                        (0, _jquery2.default)("#app-banner .btn-collec span").html("已收藏");
                    }
                    //判断是否已申请
                    if (resp.data.applyStatus == "1") {
                        (0, _jquery2.default)("#app-banner .btn-apply").attr("disabled", true);
                        (0, _jquery2.default)("#app-banner .btn-apply span").text("已申请");
                    }
                });

                var state = {
                    title: document.title,
                    url: document.location.href,
                    otherkey: null
                };
                //无刷新页面替换URL
                history.replaceState(state, document.title, EventUtils.securityUrl("detail-company.html?demandId=" + parObj.demandId + "&userId=" + resp.data.userId));
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

function applyRequest(page) {
    var applydata = {
        demandId: parObj.demandId,
        index: page,
        count: 13
    };
    EventUtils.ajaxReq("/demand/getApplyRecord", "get", applydata, function (resp, status) {
        //console.log(resp);
        if (resp && resp.data) {
            appMain.tabledata.applyRec.totalpages = resp.data.totalPage;
            appMain.tabledata.applyRec.results = resp.data.list;
            appMain.tabledata.applyRec.totalitems = resp.data.totalRow;
        } else {
            appMain.tabledata.applyRec.totalpages = 1;
            appMain.tabledata.applyRec.results = [];
            appMain.tabledata.applyRec.totalitems = 0;
        }
    });
}

function commentRequest(id, page) {
    var commentdata = {
        reportUserId: id,
        index: page,
        count: 6
    };
    EventUtils.ajaxReq("/sys/getCommentList", "post", commentdata, function (resp, status) {
        //console.log(resp);
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

//清除页面绑定事件

window.onunload = function () {
    appTop.$off();
    appBanner.$off();
    appMain.$off();
    appFooter.$off();
    appModal.$off();
};

/***/ })

},[49]);