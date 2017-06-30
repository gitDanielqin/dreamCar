webpackJsonp([13],{

/***/ 46:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(2);
var Vue = __webpack_require__(1);
__webpack_require__(3);
__webpack_require__(46);

var parObj = EventUtils.urlExtrac(window.location);

var myapp = new Vue({
    el: "#app",
    data: {},
    methods: {
        homeLink: function homeLink() {
            var link = "index.html?";
            if (parObj.userId) {
                link += "userId=" + parObj.userId;
            }
            window.location.href = EventUtils.securityUrl(link);
        },
        footerLink: function footerLink(type) {
            var link = "footer-page.html?theme=" + type;
            if (parObj.userId) {
                link += "&userId=" + parObj.userId;
            }
            window.location.href = EventUtils.securityUrl(link);
        },
        enterUni: function enterUni() {
            var link = "display-unirecruit.html?";
            if (parObj.userId) {
                link += "userId=" + parObj.userId;
            }
            window.location.href = EventUtils.securityUrl(link);
        },
        enterInc: function enterInc() {
            var link = "display-increcruit.html?";
            if (parObj.userId) {
                link += "userId=" + parObj.userId;
            }
            window.location.href = EventUtils.securityUrl(link);
        }
    }
});
(0, _jquery2.default)("#main-content").height(EventUtils.getViewport().height - (0, _jquery2.default)(".top").outerHeight(true) - (0, _jquery2.default)(".bot").outerHeight(true));

// 清除页面绑定事件
window.onunload = function () {
    myapp.$off();
};

/***/ })

},[70]);