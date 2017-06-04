webpackJsonp([12],{

/***/ 27:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vue = __webpack_require__(1);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(14);
__webpack_require__(2);
__webpack_require__(27);

var parObj = EventUtils.urlExtrac(window.location);
var respObj = {}; //请求的本页面的数据集合
// 请求本页面数据

function infoRequest() {
    if (parObj.userId || localStorage.userId) {
        var postdata = {
            userId: parObj.userId || localStorage.userId
        };
        EventUtils.ajaxReq("/center/user/getInfo", "get", postdata, function (resp, status) {
            console.log(resp.data);
            var account = {
                userName: resp.data.userName,
                userId: resp.data.userId,
                userType: resp.data.userType,
                loginId: resp.data.loginIdentifier
            };
            appFront.account = account;
            appFront.isLogin = true;
        });
    }
}

//初始化首屏的尺寸和元素位置
function init_pos() {
    var winH = EventUtils.getViewport().height;
    (0, _jquery2.default)(".mod-page").height(winH);
    (0, _jquery2.default)(".center-teil").css({
        "margin-top": Math.floor(winH * 0.135) + "px"
    });
    (0, _jquery2.default)(".module-entry").css({
        "margin-top": Math.floor(winH * 0.09) + "px"
    });
    (0, _jquery2.default)(".weiter").height(Math.floor(winH * 0.065));
    (0, _jquery2.default)(".class-show .p-title").css({
        "padding-top": Math.floor(winH * 0.079) + "px"
    });
}
//init_pos();


function showEventBind() {
    (0, _jquery2.default)(".show-pics li").mouseover(function () {
        if ((0, _jquery2.default)(this).hasClass("rotate-left")) {
            (0, _jquery2.default)(this).removeClass("rotate-left");
            (0, _jquery2.default)(".show-pics .rotate-center").removeClass("rotate-center").addClass("rotate-left");
            (0, _jquery2.default)(this).addClass("rotate-center");
        } else if ((0, _jquery2.default)(this).hasClass("rotate-right")) {
            (0, _jquery2.default)(this).removeClass("rotate-right");
            (0, _jquery2.default)(".show-pics .rotate-center").removeClass("rotate-center").addClass("rotate-right");
            (0, _jquery2.default)(this).addClass("rotate-center");
        }
    });
}

function turnEventBind() {
    (0, _jquery2.default)(".class-show .turn-left").click(function () {
        (0, _jquery2.default)(".show-pics li:first-child").removeClass("rotate-left").addClass("rotate-right");
        (0, _jquery2.default)(".show-pics").append((0, _jquery2.default)(".show-pics li:first-child"));
        (0, _jquery2.default)(".show-pics .rotate-center").removeClass("rotate-center").addClass("rotate-left");
        (0, _jquery2.default)(".show-pics .rotate-right:nth-child(4)").removeClass("rotate-right").addClass("rotate-center");
    });
    (0, _jquery2.default)(".class-show .turn-right").click(function () {
        (0, _jquery2.default)(".show-pics li:last-child").removeClass("rotate-right").addClass("rotate-left");
        (0, _jquery2.default)(".show-pics li:first-child").before((0, _jquery2.default)(".show-pics li:last-child"));
        (0, _jquery2.default)(".show-pics .rotate-center").removeClass("rotate-center").addClass("rotate-right");
        (0, _jquery2.default)(".show-pics .rotate-left:nth-of-type(4)").removeClass("rotate-left").addClass("rotate-center");
    });
};

function wheelEventBind(element, index) {
    var oEl = document.getElementById(element);
    if (oEl.onwheel) {
        oEl.onwheel = function (ev) {
            var ev = ev || window.event;
            var wheelValue;
            if (ev.wheelDelta) {
                wheelValue = ev.wheelDelta;
            } else {
                wheelValue = ev.detail;
            };
            console.log(wheelValue);
            if (wheelValue < 0) {
                if (document.body.scrollTop < EventUtils.getViewport().height * (index - 1)) {
                    (0, _jquery2.default)("body").animate({
                        scrollTop: EventUtils.getViewport().height * (index - 1)
                    }, 500);
                } else {
                    (0, _jquery2.default)("body").animate({
                        scrollTop: EventUtils.getViewport().height * index
                    }, 500);
                }
            }
        };
    } else {
        oEl.addEventListener("wheel", function (ev) {
            var ev = ev || window.event;
            var wheelValue;
            if (ev.wheelDelta) {
                wheelValue = ev.wheelDelta;
            } else {
                wheelValue = ev.detail;
            };
            if (wheelValue < 0) {
                if (document.body.scrollTop < EventUtils.getViewport().height * (index - 1)) {
                    (0, _jquery2.default)("body").animate({
                        scrollTop: EventUtils.getViewport().height * (index - 1)
                    }, 500);
                } else {
                    (0, _jquery2.default)("body").animate({
                        scrollTop: EventUtils.getViewport().height * index
                    }, 500);
                }
            }
        });
    }
}

var appFront = new Vue({
    el: "#app-front",
    data: {
        database: {
            address: {
                provinces: [],
                citys: [],
                hotcitys: ["北京", "上海", "杭州", "广州", "深圳"]
            }
        },
        account: {
            userName: "xiaoqi",
            userId: "",
            userType: "1",
            loginId: ""
        },
        isLogin: false,
        showAddr: false,
        address: {
            selProvince: "",
            selCity: "",
            displayCity: "北京市"
        }
    },
    methods: {
        modLink: function modLink(name) {
            var link = "";
            switch (name) {
                case "uni":
                    link = "display-uni.html";
                    break;
                case "inc":
                    link = "display-company.html";
                    break;
                case "pos":
                    link = "display-position.html";
                    break;
                case "recruit":
                    link = "v-recruit.html";
                    break;
            };
            if (this.isLogin) {
                link += "?userId=" + (parObj.userId || localStorage.userId);
            };
            return link;
        },
        selhotcity: function selhotcity(city) {
            this.address.displayCity = city + "市";
            this.showAddr = false;
        },
        downwards: function downwards() {
            (0, _jquery2.default)("body").animate({
                scrollTop: EventUtils.getViewport().height
            }, 500);
        },
        selectAction: function selectAction(obj) {
            switch ((0, _jquery2.default)(obj).attr("name")) {
                case "center":
                    if (this.account.userType == "0") {
                        var link = "pCenter.html?userId=" + this.account.userId + "&loginId=" + this.account.loginId;
                        window.open(link, "_blank");
                    } else if (this.account.userType == "1") {
                        var link = "uniCenter.html?userId=" + this.account.userId + "&loginId=" + this.account.loginId;
                        window.open(link, "_blank");
                    } else if (this.account.userType == "2") {
                        var link = "incCenter.html?userId=" + this.account.userId + "&loginId=" + this.account.loginId;
                        window.open(link, "_blank");
                    }
                    break;
                case "collect":
                    if (this.account.userType == "0") {
                        var link = "pCenter.html?userId=" + this.account.userId + "&loginId=" + this.account.loginId + "&theme=collect";
                        window.open(link, "_blank");
                    } else if (this.account.userType == "1") {
                        var link = "uniCenter.html?userId=" + this.account.userId + "&loginId=" + this.account.loginId + "&theme=collect";
                        window.open(link, "_blank");
                    } else if (this.account.userType == "2") {
                        var link = "incCenter.html?userId=" + this.account.userId + "&loginId=" + this.account.loginId + "&theme=collect";
                        window.open(link, "_blank");
                    }
                    break;
                case "publish":
                    if (this.account.userType == "1") {
                        var link = "uniCenter.html?userId=" + this.account.userId + "&loginId=" + this.account.loginId + "&theme=require";
                        window.open(link, "_blank");
                    } else if (this.account.userType == "2") {
                        var link = "incCenter.html?userId=" + this.account.userId + "&loginId=" + this.account.loginId + "&theme=require";
                        window.open(link, "_blank");
                    }
                    break;
                case "myjob":
                    var link = "pCenter.html?userId=" + this.account.userId + "&loginId=" + this.account.loginId + "&theme=job";
                    window.open(link, "_blank");
                    break;
                case "logout":
                    this.isLogin = false;
                    break;
            }
        }
    },
    computed: {},
    mounted: function mounted() {
        init_pos();
        for (var i = 0; i < addArray.length; i++) {
            this.database.address.provinces.push(addArray[i].name);
        };
        this.address.selProvince = addArray[0].name;
        for (var j = 0; j < addArray[0].citys.length; j++) {
            this.database.address.citys.push(addArray[0].citys[j].city);
        };
        this.address.selCity = addArray[0].citys[0].city;
        (0, _jquery2.default)("body").click(function () {
            appFront.showAddr = false;
        });
    },
    watch: {
        "address.selProvince": function addressSelProvince(curval) {
            this.database.address.citys = [];
            for (var i = 0; i < addArray.length; i++) {
                if (addArray[i].name == curval) {
                    for (var j = 0; j < addArray[i].citys.length; j++) {
                        this.database.address.citys.push(addArray[i].citys[j].city);
                    };
                    break;
                }
            }
            this.address.selCity = this.database.address.citys[0];
        },
        "address.selCity": function addressSelCity(curval) {
            if (curval.indexOf("北京") >= 0) {
                this.address.displayCity = "北京市";
            } else if (curval.indexOf("上海") >= 0) {
                this.address.displayCity = "上海市";
            } else if (curval.indexOf("天津") >= 0) {
                this.address.displayCity = "天津市";
            } else if (curval.indexOf("重庆") >= 0) {
                this.address.displayCity = "重庆市";
            } else {
                this.address.displayCity = curval;
            }
        }
    }
});
var appShow = new Vue({
    el: "#app-show",
    data: {
        showInfos: [{ imgsrc: "images/case1.jpg", txt: "解决大学生从学习到就业的信息" }, { imgsrc: "images/case2.jpg", txt: "解决大学生从学习到就业的信息" }, { imgsrc: "images/case3.jpg", txt: "解决大学生从学习到就业的信息" }, { imgsrc: "images/case4.jpg", txt: "解决大学生从学习到就业的信息" }, { imgsrc: "images/case5.jpg", txt: "解决大学生从学习到就业的信息" }, { imgsrc: "images/case6.jpg", txt: "解决大学生从学习到就业的信息" }, { imgsrc: "images/case7.jpg", txt: "解决大学生从学习到就业的信息" }]
    },
    methods: {
        cssrotate: function cssrotate(index) {
            if (index < 3) {
                return "rotate-left";
            } else if (index > 3) {
                return "rotate-right";
            } else if (index == 3) {
                return "rotate-center";
            }
        },
        showSwitch: function showSwitch(index) {
            if (index != 3) {
                var activeItem = EventUtils.cloneObj(this.showInfos[index]);
                this.showInfos.splice(index, 1);
                this.showInfos.splice(3, 0, activeItem);
            }
        }
    },
    mounted: function mounted() {
        //     wheelEventBind("app-show",2);
        turnEventBind();
        //showEventBind();
    }
});

var appAbout = new Vue({
    el: "#app-about",
    mounted: function mounted() {
        (0, _jquery2.default)("#app-about").height(EventUtils.getViewport().height);
        //     wheelEventBind("app-about",3);
    }
});
var appCoop = new Vue({
    el: "#app-coop",
    data: {
        coopInc: [{ imgsrc: "images/logo-vipabc.jpg" }, { imgsrc: "images/logo-unicom.jpg" }, { imgsrc: "images/logo-hikvision.jpg" }, { imgsrc: "images/logo-ishangzu.jpg" }, { imgsrc: "images/logo-tonghua.jpg" }, { imgsrc: "images/logo-hundsn.jpg" }, { imgsrc: "images/logo-tax.png" }, { imgsrc: "images/logo-telecom.gif" }, { imgsrc: "images/logo-chinamobile.png" }, { imgsrc: "images/logo-pandora.jpg" }],
        coopUni: [{ imgsrc: "images/杭州师范大学.jpg" }, { imgsrc: "images/杭州职业技术学院.jpg" }, { imgsrc: "images/合肥学院.jpg" }, { imgsrc: "images/宿州学院.jpg" }, { imgsrc: "images/深圳大学.jpg" }, { imgsrc: "images/浙江机电学院.jpg" }, { imgsrc: "images/浙江农林大学.jpg" }, { imgsrc: "images/浙江育英职业技术学院.jpg" }, { imgsrc: "images/郑州大学.jpg" }, { imgsrc: "images/中国美术学院.jpg" }],
        showinc: true
    },
    methods: {
        incLeft: function incLeft() {
            if ((0, _jquery2.default)(".coop-inc").position().left > 740 - (0, _jquery2.default)(".coop-inc").width()) (0, _jquery2.default)(".coop-inc").animate({
                left: "-=" + (0, _jquery2.default)(".coop-inc").children("li:first-child").outerWidth(true) + "px"
            }, 500);
        },
        incRight: function incRight() {
            if ((0, _jquery2.default)(".coop-inc").position().left < 0) (0, _jquery2.default)(".coop-inc").animate({
                left: "+=" + (0, _jquery2.default)(".coop-inc").children("li:first-child").outerWidth(true) + "px"
            }, 500);
        },
        uniLeft: function uniLeft() {
            if ((0, _jquery2.default)(".coop-uni").position().left > 740 - (0, _jquery2.default)(".coop-uni").width()) (0, _jquery2.default)(".coop-uni").animate({
                left: "-=" + (0, _jquery2.default)(".coop-uni").children("li:first-child").outerWidth(true) + "px"
            }, 500);
        },
        uniRight: function uniRight() {
            if ((0, _jquery2.default)(".coop-uni").position().left < 0) (0, _jquery2.default)(".coop-uni").animate({
                left: "+=" + (0, _jquery2.default)(".coop-uni").children("li:first-child").outerWidth(true) + "px"
            }, 500);
        }
    },
    mounted: function mounted() {
        // $("#app-coop").height(EventUtils.getViewport().height - 238);
    }
});

var appFooter = new Vue({
    el: "#app-footer",
    data: {
        fBlocks: [{ title: "关于我们", sublis: ["企业文化", "企业简介"] }, { title: "联系我们", sublis: ["公司地址", "联系方式"] }, { title: "网站合作", sublis: ["合作条件", "合作内容"] }, { title: "帮助中心", sublis: ["客服中心", "常见问题", "售后服务"] }, { title: "招聘中心", sublis: ["UI设计", "WEB前端", "后端人员", "更多招聘"] }]
    },
    methods: {
        linkFoo: function linkFoo(item) {
            switch (item) {
                case "关于我们":
                    window.open("footer-page.html?descript");
                    break;
                case "联系我们":
                    window.open("footer-page.html?contact");
                    break;
                case "网站合作":
                    window.open("footer-page.html?coop");
                    break;
                case "帮助中心":
                    window.open("footer-page.html?help");
                    break;
                case "招聘中心":
                    window.open("footer-page.html?employ");
                    break;
                default:
                    window.open("footer-page.html?descript");
            }
        }
    }
});

infoRequest();

/***/ })

},[48]);