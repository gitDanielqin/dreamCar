webpackJsonp([17],{

/***/ 36:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vue = __webpack_require__(1); /**
                                   * Created by Administrator on 2017/1/14.
                                   */

__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(7);
__webpack_require__(36);

var parObj = EventUtils.urlExtrac(window.location);

function _init() {
    initEventBind();
    if (parObj && parObj.theme) {
        (0, _jquery2.default)(".main-left li[name=" + parObj.theme + "]").trigger("click");
    }
}
var myapp = new Vue({
    el: "#app",
    data: {
        friend: [{ logo: "images/friend-logo01.jpg", name: "教育培训网", link: "http://edu.mohrss.gov.cn/" }, { logo: "images/friend-logo02.jpg", name: "中国人力资源市场网", link: "http://www.chrm.gov.cn//" }, { logo: "images/friend-logo03.jpg", name: "中国就业网", link: "http://www.lm.gov.cn/" }, { logo: "images/friend-logo04.jpg", name: "中国职业协会", link: "http://www.zhongguozhixie.com.cn/" }, { logo: "images/friend-logo05.jpg", name: "中国国家人事人才培训网", link: "http://www.chinanet.gov.cn/" }]
    },
    methods: {
        homeLink: function homeLink() {
            var link = "index.html?";
            if (parObj.userId) {
                link += "userId=" + parObj.userId;
            }
            window.location.href = EventUtils.securityUrl(link);
        }
    }
});

function initEventBind() {

    (0, _jquery2.default)(".co-table .navs li").each(function () {
        (0, _jquery2.default)(this).click(function () {
            (0, _jquery2.default)(".co-table .navs li").removeClass("on");
            (0, _jquery2.default)(this).addClass("on");
            (0, _jquery2.default)(".coway").hide();
            (0, _jquery2.default)("." + (0, _jquery2.default)(this).attr("name")).show();
        });
    });
    (0, _jquery2.default)(".main-left li").each(function (index) {
        (0, _jquery2.default)(this).click(function () {
            (0, _jquery2.default)(".main-left li").removeClass("on");
            (0, _jquery2.default)(this).addClass("on");
            (0, _jquery2.default)(".nav-content").hide();
            (0, _jquery2.default)((0, _jquery2.default)(".nav-content")[index]).show();
        });
    });
}

_init();

//清除页面绑定事件
window.onunload = function () {
    (0, _jquery2.default)(".co-table .navs li").each(function () {
        (0, _jquery2.default)(this).click(null);
    });
    (0, _jquery2.default)(".main-left li").each(function (index) {
        (0, _jquery2.default)(this).click(null);
    });
};

/***/ })

},[59]);