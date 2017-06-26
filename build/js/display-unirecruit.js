webpackJsonp([18],{

/***/ 16:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vue = __webpack_require__(1); /**
                                   * Created by xuanyuan on 2016/12/31.
                                   */

__webpack_require__(4);
__webpack_require__(2);
__webpack_require__(6);
__webpack_require__(8);
__webpack_require__(9);
__webpack_require__(10);
__webpack_require__(11);
__webpack_require__(13);
__webpack_require__(12);
__webpack_require__(3);
__webpack_require__(5);
__webpack_require__(7);
__webpack_require__(16);
var parObj = EventUtils.urlExtrac(window.location); //地址参数对象
var respObj = {}; //页面信息
var accountObj = {}; //登录用户信息
var subposArray = [];
(function () {
    //初始化数据库信息
    EventUtils.initDatabase();
    //提取出二级职位信息
    for (var i = 0; i < posArray.length; i++) {
        for (var j = 0; j < posArray[i].subpos.length; j++) {
            if (posArray[i].subpos[j].name != "不限") {
                subposArray.push(posArray[i].subpos[j]);
            }
        }
    };
    subposArray.push({ name: "不限", subpos: ["不限"] });
})();

function infoRequest() {
    var postdata = {
        jobFairType: 1,
        index: 1,
        count: 8
    };
    if (parObj.userId) {
        postdata.userId = parObj.userId;
        EventUtils.ajaxReq("/jobfair/getList", "get", postdata, function (resp, status) {
            console.log(resp);
            if (resp.data) {
                appResult.unirecruitList.totalpages = resp.data.totalPage;
                appResult.unirecruitList.totalitems = resp.data.totalRow;
                appResult.unirecruitList.results = resp.data.list;
            } else {
                appResult.unirecruitList.totalpages = 1;
                appResult.unirecruitList.totalitems = 0;
                appResult.unirecruitList.results = [];
            }
        });
        EventUtils.ajaxReq("/center/user/getInfo", "post", { userId: parObj.userId }, function (resp, status) {
            //  console.log(resp);
            accountObj = resp.data;
            if (accountObj) {
                appTop.userName = resp.data.userName;
                appTop.userType = resp.data.userType;
                appTop.isLogin = true;
            }
        });
    } else {
        EventUtils.ajaxReq("/jobfair/getList", "get", postdata, function (resp, status) {
            console.log(resp);
            if (resp.data) {
                appResult.unirecruitList.totalpages = resp.data.totalPage;
                appResult.unirecruitList.totalitems = resp.data.totalRow;
                appResult.unirecruitList.results = resp.data.list;
            } else {
                appResult.unirecruitList.totalpages = 1;
                appResult.unirecruitList.totalitems = 0;
                appResult.unirecruitList.results = [];
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
            accountObj = {};
            //登出后重新请求结果
            var postdata = {
                jobFairType: 1,
                index: 1,
                count: 8
            };
            EventUtils.ajaxReq("/jobfair/getList", "get", postdata, function (resp, status) {
                console.log(resp);
                if (resp.data) {
                    appResult.unirecruitList.totalpages = resp.data.totalPage;
                    appResult.unirecruitList.totalitems = resp.data.totalRow;
                    appResult.unirecruitList.results = resp.data.list;
                } else {
                    appResult.unirecruitList.totalitems = 0;
                    appResult.unirecruitList.totalpages = 1;
                    appResult.unirecruitList.results = [];
                }
            });
            var state = {
                title: document.title,
                url: document.location.href,
                otherkey: null
            };
            //无刷新页面替换URL
            history.replaceState(state, document.title, "display-unirecruit.html");
        }
    },
    watch: {
        "isLogin": function isLogin(curval) {
            if (curval) {
                appResult.accountId = accountObj.userId;
                appFooter.userId = accountObj.userId;
            } else {
                appResult.accountId = "";
                appFooter.userId = "";
            }
        }
    }
});
var appQuery = new Vue({
    el: "#app-query",
    data: {
        database: {
            uni: {
                majors: majorArray,
                majorAmount: xqdatabase.majorSum,
                props: xqdatabase.unilevel,
                scolars: xqdatabase.scolarship
            },
            inc: {
                IncScale: xqdatabase.incScale,
                IncProps: xqdatabase.incProps,
                posAmount: xqdatabase.positionsum,
                worksExp: xqdatabase.worksexp,
                pos1: [],
                pos2: [],
                area1: [],
                area2: [],
                salary: xqdatabase.salary,
                welfare: ["五险一金", "双休", "餐补", "交通补", "带薪年假", "节日聚餐"]
            },
            navcitys: [{ "province": "浙江省", "city": "杭州", "conts": ["滨江区", "淳安县", "富阳市", "拱墅区", "江干区", "建德市", "临安市", "上城区", "桐庐县", "西湖区", "下城区", "萧山区", "余杭区", "不限"] }, { "province": "上海市", "city": "上海", "conts": ["宝山区", "长宁区", "奉贤区", "虹口区", "黄浦区", "嘉定区", "金山区", "静安区", "卢湾区", "闵行区", "南汇区", "普陀区", "浦东新区", "青浦区", "松江区", "徐汇区", "杨浦区", "闸北区", "不限"] }, { "province": "北京市", "city": "北京", "conts": ["昌平区", "朝阳区", "崇文区", "大兴区", "东城区", "房山区", "丰台区", "海淀区", "怀柔区", "门头沟区", "平谷区", "石景山区", "顺义区", "通州区", "西城区", "宣武区", "不限"] }, { "province": "湖北省", "city": "武汉", "conts": ["蔡甸区", "东西湖区", "汉阳区", "汉南区", "洪山区", "黄陂区", "江岸区", "江汉区", "江夏区", "乔口区", "青山区", "武昌区", "新洲区", "不限"] }, { "province": "广东省", "city": "广州", "conts": ["宝山区", "长宁区", "奉贤区", "虹口区", "黄浦区", "嘉定区", "金山区", "静安区", "卢湾区", "闵行区", "南汇区", "普陀区", "浦东新区", "青浦区", "松江区", "徐汇区", "杨浦区", "闸北区", "不限"] }, { "province": "广东省", "city": "深圳", "conts": ["宝安区", "福田区", "龙岗区", "罗湖区", "南山区", "盐田区", "不限"] }],
            conts: ["滨江区", "淳安县", "富阳市", "拱墅区", "江干区", "建德市", "临安市", "上城区", "桐庐县", "西湖区", "下城区", "萧山区", "余杭区", "不限"]
        },
        keywords: "",
        uniRecruit: {
            major: "不限",
            majorsum: "",
            address: "",
            majorEx: false,
            incReq: {
                areas: {
                    area_1: "",
                    area_2: ""
                },
                IncProps: "",
                IncScale: "",
                pos: {
                    pos_1: "",
                    pos_2: ""
                },
                posAmount: ""
            },
            publicTime: "",
            trainway: ""
        },
        showPosBox: false,
        showAreaBox: false,
        showWelBox: false
    },
    methods: {
        search: function search() {
            if (this.keywords != "") {
                searchRequest(1);
            } else {
                resultsRequest(1);
            }
        },
        selCity: function selCity(index, obj) {
            (0, _jquery2.default)(".address .on").removeClass("on");
            (0, _jquery2.default)(".queryform .district .on").removeClass("on");
            (0, _jquery2.default)(obj).addClass("on");
            this.database.conts = this.database.navcitys[index].conts;
        },
        selDistrict: function selDistrict(obj) {
            (0, _jquery2.default)(".queryform .district .on").removeClass("on");
            (0, _jquery2.default)(obj).addClass("on");
            var addrString = "";
            for (var i = 0; i < this.database.navcitys.length; i++) {
                if ((0, _jquery2.default)(".address .on").text() == this.database.navcitys[i].city) {
                    if ((0, _jquery2.default)(".address .on").text() == "北京" || (0, _jquery2.default)(".address .on").text() == "上海") {
                        addrString = this.database.navcitys[i].province + ";" + this.database.navcitys[i].city + "辖区";
                    } else {
                        addrString = this.database.navcitys[i].province + ";" + this.database.navcitys[i].city + "市";
                    }
                    break;
                }
            }
            addrString += ";" + (0, _jquery2.default)(".queryform .district .on").text();
            this.uniRecruit.address = addrString;
            resultsRequest(1);
        },
        selAllDistrict: function selAllDistrict() {
            (0, _jquery2.default)(".queryform .district .on").removeClass("on");
            this.uniRecruit.address = "";
            resultsRequest(1);
        },
        selMajor: function selMajor(major1, major2) {
            this.uniRecruit.major = major1 + ";" + major2;
            resultsRequest(1);
        },
        selPos: function selPos(pos, type) {
            if (type == "uni") {
                this.uniQuery.incReq.pos.pos_2 = pos;
            } else if (type == "inc") {
                this.incQuery.pos.pos_2 = pos;
            } else if (type == "pos") {
                this.posQuery.pos.pos_2 = pos;
            } else if (type == "unirecruit") {
                this.uniRecruit.incReq.pos.pos_2 = pos;
            } else if (type == "increcruit") {
                this.incRecruit.pos.pos_2 = pos;
            }
            this.showPosBox = false;
        },
        clickPos: function clickPos() {
            (0, _jquery2.default)(".selectee ul").hide();
            this.showPosBox = true;
        },
        selArea: function selArea(area, type) {
            (0, _jquery2.default)(".selectee ul").hide();
            if (type == "uni") {
                this.uniQuery.incReq.areas.area_2 = area;
            } else if (type == "pos") {
                this.posQuery.areas.area_2 = area;
            } else if (type == "unirecruit") {
                this.uniRecruit.incReq.areas.area_2 = area;
            }

            this.showAreaBox = false;
        },
        clickArea: function clickArea() {
            (0, _jquery2.default)(".selectee ul").hide();
            this.showAreaBox = true;
        },
        clickWel: function clickWel() {
            (0, _jquery2.default)(".selectee ul").hide();
            this.showWelBox = true;
        },
        checkEv: function checkEv(obj) {
            if ((0, _jquery2.default)(obj).hasClass("on")) {
                (0, _jquery2.default)(obj).removeClass("on");
                (0, _jquery2.default)(obj).parent("li").removeClass("on");
            } else {
                (0, _jquery2.default)(obj).addClass("on");
                (0, _jquery2.default)(obj).parent("li").addClass("on");
            }
        },
        submitWel: function submitWel() {
            var selWelfare = "";
            (0, _jquery2.default)(".welfare-lis li").each(function () {
                if ((0, _jquery2.default)(this).hasClass("on")) {
                    selWelfare += (0, _jquery2.default)(this).text() + ",";
                }
            });
            this.posQuery.welfare = selWelfare;
            this.showWelBox = false;
        },
        homeLink: function homeLink() {
            var link = appTop.isLogin ? "index.html?userId=" + accountObj.userId : "index.html";
            window.location.href = EventUtils.securityUrl(link);
        }
    },
    mounted: function mounted() {
        var posArray1 = [];
        var areaArray1 = [];
        for (var i = 0; i < subposArray.length; i++) {
            posArray1.push(subposArray[i].name);
        };
        this.database.inc.pos1 = posArray1;
        this.database.inc.pos2 = subposArray[0].subpos;
        for (var j = 0; j < workareas.length; j++) {
            areaArray1.push(workareas[j].title);
        };
        this.database.inc.area1 = areaArray1;
        this.database.inc.area2 = workareas[0].subareas;
    },
    watch: {
        'uniRecruit.majorsum': function uniRecruitMajorsum(curval) {
            resultsRequest(1);
        },
        'uniRecruit.incReq.pos.pos_1': function uniRecruitIncReqPosPos_1(curval) {
            for (var i = 0; i < subposArray.length; i++) {
                if (subposArray[i].name == curval) {
                    this.database.inc.pos2 = subposArray[i].subpos;
                    break;
                }
            }
            if (curval == "不限") {
                resultsRequest(1);
            }
        },
        'uniRecruit.incReq.pos.pos_2': function uniRecruitIncReqPosPos_2(curval) {
            if (this.uniRecruit.incReq.pos.pos_1 == "") {
                this.uniRecruit.incReq.pos.pos_1 = subposArray[0].name;
            }
            resultsRequest(1);
        },
        'uniRecruit.incReq.areas.area_1': function uniRecruitIncReqAreasArea_1(curval) {
            for (var i = 0; i < workareas.length; i++) {
                if (workareas[i].title == curval) {
                    this.database.inc.area2 = workareas[i].subareas;
                    break;
                }
            }
            if (curval == "不限") {
                resultsRequest(1);
            }
        },
        'uniRecruit.incReq.areas.area_2': function uniRecruitIncReqAreasArea_2(curval) {
            if (this.uniRecruit.incReq.areas.area_1 == "") {
                this.uniRecruit.incReq.areas.area_1 = workareas[0].title;
            }
            resultsRequest(1);
        },
        'uniRecruit.incReq.IncProps': function uniRecruitIncReqIncProps(curval) {
            resultsRequest(1);
        },
        'uniRecruit.incReq.IncScale': function uniRecruitIncReqIncScale(curval) {
            resultsRequest(1);
        },
        'uniRecruit.incReq.posAmount': function uniRecruitIncReqPosAmount(curval) {
            resultsRequest(1);
        },
        'uniRecruit.publicTime': function uniRecruitPublicTime(curval) {
            resultsRequest(1);
        },
        'showPosBox': function showPosBox(curval) {
            if (curval) {
                var top = (0, _jquery2.default)(".pos-input").offset().top - (0, _jquery2.default)(".queryform").offset().top + 30;
                (0, _jquery2.default)(".pos-box").css("top", top);
            }
        },
        'showAreaBox': function showAreaBox(curval) {
            if (curval) {
                var top = (0, _jquery2.default)(".area-input").offset().top - (0, _jquery2.default)(".queryform").offset().top + 30;
                (0, _jquery2.default)(".area-box").css("top", top);
            }
        }
    }
});

var appResult = new Vue({
    el: "#app-result",
    data: {
        unirecruitList: {
            curpage: 1,
            totalpages: 1,
            totalitems: 0,
            results: []
        },
        accountId: "",
        resultType: 0
    },
    methods: {
        infoExtrac: function infoExtrac(info) {
            if (info) {
                return EventUtils.infoExtrac(info);
            } else {
                return "";
            }
        },
        infoShow: function infoShow(text, type) {
            return EventUtils.infoShow(text, type);
        },
        regAddress: function regAddress(address) {
            if (address) {
                return address.split(";")[1] + "-" + address.split(";")[2];
            } else {
                return "";
            }
        },
        detailLink: function detailLink(id) {
            var link = "detail-unirecruit.html?jobfairId=" + id + (this.accountId ? "&userId=" + this.accountId : "");
            link = EventUtils.securityUrl(link);
            return link;
        },
        coApply: function coApply(id, item) {
            if (appTop.isLogin) {
                if (accountObj.userType != "2") {
                    swal({
                        title: "",
                        text: "抱歉，您不能申请该需求！",
                        type: "warning"
                    });
                    return false;
                }
                var postdata = {
                    userId: accountObj.userId,
                    jobFairId: id
                };
                EventUtils.ajaxReq("/jobfair/cooperateJobFair", "post", postdata, function (resp, status) {
                    console.log(resp);
                    if (resp.data && resp.data.isApply == "0") {
                        item.applyStatus = 1;
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
                });
            } else {
                appModal.showModal = true;
                appModal.showLogin = true;
                appModal.showSucc = false;
            }
        },
        showpage: function showpage(totalpage) {
            if (totalpage < 3) {
                return totalpage;
            } else {
                return 3;
            }
        },
        topage: function topage(page, type) {
            if (this.resultType == 0) {
                resultsRequest(page);
            } else {
                searchRequest(page);
            }
        }

    },
    components: {
        'pagination': pagination
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
                if (accountObj) {
                    //登录后重新请求结果
                    var postdata = {
                        jobFairType: 1,
                        index: 1,
                        count: 8,
                        userId: accountObj.userId
                    };
                    EventUtils.ajaxReq("/jobfair/getList", "get", postdata, function (resp, status) {
                        console.log(resp);
                        if (resp.data) {
                            appResult.unirecruitList.totalpages = resp.data.totalPage;
                            appResult.unirecruitList.totalitems = resp.data.totalRow;
                            appResult.unirecruitList.results = resp.data.list;
                        } else {
                            appResult.unirecruitList.totalpages = 1;
                            appResult.unirecruitList.totalitems = 0;
                            appResult.unirecruitList.results = [];
                        }
                    });
                    appTop.userType = resp.data.userType;
                    appTop.userName = resp.data.name;
                    appTop.isLogin = true;
                    //无刷新页面替换URL
                    var state = {
                        title: document.title,
                        url: document.location.href,
                        otherkey: null
                    };
                    history.replaceState(state, document.title, EventUtils.securityUrl("display-unirecruit.html?userId=" + resp.data.userId));
                    appModal.showModal = false;
                    appModal.showLogin = false;
                }
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
    _initEventBind();
}
_init();

function selectInitPos() {
    (0, _jquery2.default)(".selectee input").each(function () {
        var bgPos = (0, _jquery2.default)(this).width() + 10 + "px center";
        (0, _jquery2.default)(this).attr("readonly", "readonly").css("background-position", bgPos);
    });
    (0, _jquery2.default)(".selectee ul").each(function () {
        var sibInput = (0, _jquery2.default)(this).siblings("input");
        (0, _jquery2.default)(this).width(sibInput.width() + 30);
        (0, _jquery2.default)(this).css({
            left: sibInput.css("margin-left"),
            top: sibInput.height()
        });
    });
    (0, _jquery2.default)(".popBox .selectee ul").css("top", "25px");
    (0, _jquery2.default)("body").bind("click", function () {
        (0, _jquery2.default)(".selectee ul").hide();
        appQuery.showPosBox = false;
        appQuery.showAreaBox = false;
        appQuery.showWelBox = false;
    });
}

function _initEventBind() {
    (0, _jquery2.default)(".account li").hover(function () {
        (0, _jquery2.default)(this).find("dl").slideDown(300);
    }, function () {
        (0, _jquery2.default)(this).find("dl").slideUp(200);
    });
    (0, _jquery2.default)(".popBox").click(function () {
        return false;
    }
    //申请合作对话框事件绑定
    );
}

// 筛选结果请求
function resultsRequest(page) {
    appResult.resultType = 0;
    var timeIndex = "";
    switch (appQuery.uniRecruit.publicTime) {
        case "三天内":
            timeIndex = 1;
            break;
        case "一周内":
            timeIndex = 2;
            break;
        case "一月内":
            timeIndex = 3;
            break;
    }
    var postdata = {
        jobFairType: 1,
        index: page,
        count: 8,
        userAddress: appQuery.uniRecruit.address,
        profession: appQuery.uniRecruit.major,
        professionCount: appQuery.uniRecruit.majorsum,
        companyType: appQuery.uniRecruit.incReq.areas.area_1 == "" ? "" : appQuery.uniRecruit.incReq.areas.area_1 + ";" + appQuery.uniRecruit.incReq.areas.area_2,
        companyProperty: appQuery.uniRecruit.incReq.IncProps,
        companyScale: appQuery.uniRecruit.incReq.IncScale,
        job: appQuery.uniRecruit.incReq.pos.pos_1 == "" ? "" : appQuery.uniRecruit.incReq.pos.pos_1 + ";" + appQuery.uniRecruit.incReq.pos.pos_2,
        jobCount: appQuery.uniRecruit.incReq.posAmount,
        timeType: timeIndex
    };
    if (accountObj && accountObj.userId) {
        postdata.userId = accountObj.userId;
    }
    // 清楚发送数据对象值为空的属性
    postdata = EventUtils.filterReqdata(postdata);
    EventUtils.ajaxReq("/jobfair/getList", "get", postdata, function (resp, status) {
        console.log(resp);
        if (resp.data) {
            appResult.unirecruitList.totalpages = resp.data.totalPage;
            appResult.unirecruitList.results = resp.data.list;
            appResult.unirecruitList.totalitems = resp.data.totalRow;
            //背景图像
            if (resp.data.list.length <= 1) {
                (0, _jquery2.default)(".results").css("background", "url('images/display-bg.png') no-repeat bottom center");
            } else {
                (0, _jquery2.default)(".results").css("background", "none");
            }
        } else {
            appResult.unirecruitList.totalpages = 1;
            appResult.unirecruitList.results = [];
            appResult.unirecruitList.totalitems = 0;
            //背景图像
            (0, _jquery2.default)(".results").css("background", "url('images/display-bg.png') no-repeat bottom center");
        }
    });
    appResult.unirecruitList.curpage = page;
}

//搜索结果请求
function searchRequest(page) {
    appResult.resultType = 1;
    var postdata = {
        jobFairType: 1,
        title: appQuery.keywords,
        index: page,
        count: 8
    };
    if (accountObj && accountObj.userId) {
        postdata.userId = accountObj.userId;
    }
    EventUtils.ajaxReq("/jobfair/searchJobFair?", "get", postdata, function (resp, status) {
        console.log(resp);
        if (resp.data) {
            appResult.unirecruitList.totalpages = resp.data.totalPage;
            appResult.unirecruitList.results = resp.data.list;
            appResult.unirecruitList.totalitems = resp.data.totalRow;
            //背景图像
            if (resp.data.list.length <= 1) {
                (0, _jquery2.default)(".results").css("background", "url('images/display-bg.png') no-repeat bottom center");
            } else {
                (0, _jquery2.default)(".results").css("background", "none");
            }
        } else {
            appResult.unirecruitList.results = [];
            appResult.unirecruitList.totalitems = 0;
            //背景图像
            (0, _jquery2.default)(".results").css("background", "url('images/display-bg.png') no-repeat bottom center");
        }
    });
}

//清除页面绑定事件
window.onunload = function () {
    appTop.$off();
    appQuery.$off();
    appResult.$off();
    appFooter.$off();
    appModal.$off();
};

/***/ })

},[58]);