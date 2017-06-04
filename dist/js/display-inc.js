webpackJsonp([19],{

/***/ 13:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vue = __webpack_require__(1); /**
                                   * Created by xuanyuan on 2016/12/31.
                                   */

__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(8);
__webpack_require__(10);
__webpack_require__(9);
__webpack_require__(2);
__webpack_require__(5);
__webpack_require__(13);
var parObj = EventUtils.urlExtrac(window.location); //地址参数对象
var respObj = {}; //页面信息
var accountObj = {}; // 登录用户信息
var subposArray = [];
(function () {
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
        demandType: 2,
        index: 1,
        count: 8
    };
    EventUtils.ajaxReq("/demand/getList", "get", postdata, function (resp, status) {
        console.log(resp);
        appResult.incList.totalpages = resp.data.totalPage;
        appResult.incList.results = resp.data.list;
    });
    if (parObj.userId) {
        EventUtils.ajaxReq("/center/user/getInfo", "post", { userId: parObj.userId }, function (resp, status) {
            //  console.log(resp);
            accountObj = resp.data;
            console.log(accountObj);
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
            appModal.login.account = "";
            appModal.login.password = "";
            accountObj = {};
            //复原合作按钮
            (0, _jquery2.default)("button.btn-apply[disabled] span").text("申请合作");
            (0, _jquery2.default)("button.btn-apply[disabled]").attr("disabled", false);
            var state = {
                title: document.title,
                url: document.location.href,
                otherkey: null
            };
            //无刷新页面替换URL
            history.replaceState(state, document.title, "display-company.html");
        }
    },
    watch: {
        "isLogin": function isLogin(curval) {
            if (curval) {
                appResult.accountId = accountObj.userId;
            } else {
                appResult.accountId = "";
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
                majorAmount: majorSum,
                props: unilevel,
                scolars: scolarship
            },
            inc: {
                IncScale: incScale,
                IncProps: incProps,
                posAmount: positionsum,
                worksExp: worksexp,
                pos1: [],
                pos2: [],
                area1: [],
                area2: [],
                salary: salaryItems,
                welfare: ["五险一金", "双休", "餐补", "交通补", "带薪年假", "节日聚餐"]
            },
            navcitys: [{ "province": "浙江省", "city": "杭州", "conts": ["滨江区", "淳安县", "富阳市", "拱墅区", "江干区", "建德市", "临安市", "上城区", "桐庐县", "西湖区", "下城区", "萧山区", "余杭区", "不限"] }, { "province": "上海市", "city": "上海", "conts": ["宝山区", "长宁区", "奉贤区", "虹口区", "黄浦区", "嘉定区", "金山区", "静安区", "卢湾区", "闵行区", "南汇区", "普陀区", "浦东新区", "青浦区", "松江区", "徐汇区", "杨浦区", "闸北区", "不限"] }, { "province": "北京市", "city": "北京", "conts": ["昌平区", "朝阳区", "崇文区", "大兴区", "东城区", "房山区", "丰台区", "海淀区", "怀柔区", "门头沟区", "平谷区", "石景山区", "顺义区", "通州区", "西城区", "宣武区", "不限"] }, { "province": "湖北省", "city": "武汉", "conts": ["蔡甸区", "东西湖区", "汉阳区", "汉南区", "洪山区", "黄陂区", "江岸区", "江汉区", "江夏区", "乔口区", "青山区", "武昌区", "新洲区", "不限"] }, { "province": "广东省", "city": "广州", "conts": ["宝山区", "长宁区", "奉贤区", "虹口区", "黄浦区", "嘉定区", "金山区", "静安区", "卢湾区", "闵行区", "南汇区", "普陀区", "浦东新区", "青浦区", "松江区", "徐汇区", "杨浦区", "闸北区", "不限"] }, { "province": "广东省", "city": "深圳", "conts": ["宝安区", "福田区", "龙岗区", "罗湖区", "南山区", "盐田区", "不限"] }],
            conts: ["滨江区", "淳安县", "富阳市", "拱墅区", "江干区", "建德市", "临安市", "上城区", "桐庐县", "西湖区", "下城区", "萧山区", "余杭区", "不限"]
        },
        incQuery: {
            address: "",
            uniReq: {
                uniprops: "",
                major: "",
                majorsum: "",
                majorEx: false
            },
            pos: {
                pos_1: "",
                pos_2: ""
            },
            posAmount: "",
            publicTime: "",
            trainway: ""
        },
        showPosBox: false,
        showAreaBox: false,
        showWelBox: false
    },
    methods: {
        selCity: function selCity(index, obj) {
            (0, _jquery2.default)(".address .on").removeClass("on");
            (0, _jquery2.default)(".queryform .district .on").removeClass("on");
            (0, _jquery2.default)(obj).addClass("on");
            this.database.conts = this.database.navcitys[index].conts;
        },
        selDistict: function selDistict(obj) {
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
            this.incQuery.address = addrString;
            resultsRequest(1);
        },
        selAllDistrict: function selAllDistrict() {
            (0, _jquery2.default)(".queryform .district .on").removeClass("on");
            this.incQuery.address = "";
            resultsRequest(1);
        },
        selMajor: function selMajor(major1, major2) {
            this.incQuery.uniReq.major = major1 + ";" + major2;
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
            this.showPosBox = true;
            (0, _jquery2.default)(".selectee ul").hide();
        },
        selArea: function selArea(area, type) {
            if (type == "uni") {
                this.uniQuery.incReq.areas.area_2 = area;
            } else if (type == "pos") {
                this.posQuery.areas.area_2 = area;
            } else if (type == "unirecruit") {
                this.uniRecruit.incReq.areas.area_2 = area;
            }

            this.showAreaBox = false;
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
            window.location.href = appTop.isLogin ? "index.html?userId=" + accountObj.userId : "index.html";
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
        'incQuery.pos.pos_1': function incQueryPosPos_1(curval) {
            for (var i = 0; i < subposArray.length; i++) {
                if (subposArray[i].name == curval) {
                    this.database.inc.pos2 = subposArray[i].subpos;
                    break;
                }
            }
        },
        'incQuery.pos.pos_2': function incQueryPosPos_2(curval) {
            if (this.incQuery.pos.pos_1 == "") {
                this.incQuery.pos.pos_1 = subposArray[0].name;
            }
            resultsRequest(1);
        },
        'incQuery.uniReq.uniprops': function incQueryUniReqUniprops(curval) {
            resultsRequest(1);
        },
        'incQuery.uniReq.majorsum': function incQueryUniReqMajorsum(curval) {
            resultsRequest(1);
        },
        'incQuery.posAmount': function incQueryPosAmount(curval) {
            resultsRequest(1);
        },
        'incQuery.trainway': function incQueryTrainway(curval) {
            resultsRequest(1);
        },
        'incQuery.publicTime': function incQueryPublicTime(curval) {
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
        incList: {
            totalpages: 1,
            results: []
        },
        accountId: ""
    },
    methods: {
        demandLink: function demandLink(demandId) {
            var link = "detail-company.html?demandId=" + demandId + (this.accountId ? "&userId=" + this.accountId : "");
            return link;
        },
        infoExtrac: function infoExtrac(info) {
            return EventUtils.infoExtrac(info);
        },
        coApply: function coApply(id, obj) {
            if (appTop.isLogin) {
                if (accountObj.userType != "1") {
                    alert("抱歉，您不能申请该需求！");
                    return false;
                }
                var postdata = {
                    userId: accountObj.userId,
                    loginIdentifier: accountObj.loginId,
                    demandId: id
                };
                EventUtils.ajaxReq("/demand/cooperateDemand", "post", postdata, function (resp, status) {
                    console.log(resp);
                    if (resp.data.isApply == "0") {
                        appModal.showModal = true;
                        appModal.showLogin = false;
                        appModal.showSucc = true;
                    } else {
                        alert(resp.info);
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
        showpage: function showpage(totalpage) {
            if (totalpage < 3) {
                return totalpage;
            } else {
                return 3;
            }
        },
        topage: function topage(page, type) {
            resultsRequest(page);
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
                console.log(resp.data);
                appTop.userType = resp.data.userType;
                appTop.userName = resp.data.name;
                appTop.isLogin = true;
                var state = {
                    title: document.title,
                    url: document.location.href,
                    otherkey: null
                };
                //无刷新页面替换URL
                history.replaceState(state, document.title, "display-company.html?userId=" + resp.data.userId);
                appModal.showModal = false;
                appModal.showLogin = false;
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
        (0, _jquery2.default)(this).attr("disabled", "true").css("background-position", bgPos);
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
    //     日期选择变量转化
    var dateindex = "";
    switch (appQuery.incQuery.publicTime) {
        case "三天内":
            dateindex = 1;
            break;
        case "一周内":
            dateindex = 2;
            break;
        case "一月内":
            dateindex = 3;
            break;
        default:
    }
    var postdata = {
        demandType: 2,
        index: page,
        count: 8,
        userAddress: appQuery.incQuery.address,
        schoolProperty: appQuery.incQuery.uniReq.uniprops,
        profession: (0, _jquery2.default)(".queryform .major-input-1 input").val() == "" ? "不限" : appQuery.incQuery.uniReq.major,
        professionCount: appQuery.incQuery.uniReq.majorsum,
        job: appQuery.incQuery.pos.pos_1 == "" ? "" : appQuery.incQuery.pos.pos_1 + ";" + appQuery.incQuery.pos.pos_2,
        jobCount: appQuery.incQuery.posAmount,
        trainType: appQuery.incQuery.trainway,
        timeType: dateindex
        // 清除发送数据对象值为空的属性
    };postdata = EventUtils.filterReqdata(postdata);
    EventUtils.ajaxReq("/demand/getList", "get", postdata, function (resp, status) {
        console.log(resp);
        if (resp.data) {
            appResult.incList.totalpages = resp.data.totalPage;
            appResult.incList.results = resp.data.list;
            if (resp.data.list.length <= 1) {
                (0, _jquery2.default)(".results").css("background", "url('images/display-bg.png') no-repeat bottom center");
            } else {
                (0, _jquery2.default)(".results").css("background", "none");
            }
        } else {
            appResult.incList.totalpages = 1;
            appResult.incList.results = [];
            (0, _jquery2.default)(".results").css("background", "url('images/display-bg.png') no-repeat bottom center");
        }
    });
}

/***/ })

},[39]);