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

__webpack_require__(3);
__webpack_require__(2);
__webpack_require__(46);

var parObj = EventUtils.urlExtrac(window.location);

(0, _jquery2.default)("#main-content").height(EventUtils.getViewport().height - (0, _jquery2.default)(".top").outerHeight(true) - (0, _jquery2.default)(".bot").outerHeight(true));
document.getElementById("entry-uni").onclick = function () {
    var link = "display-unirecruit.html?";
    if (parObj.userId) {
        link += "userId=" + parObj.userId;
    }
    window.location.href = EventUtils.securityUrl(link);
};
document.getElementById("entry-company").onclick = function () {
    var link = "display-increcruit.html?";
    if (parObj.userId) {
        link += "userId=" + parObj.userId;
    }
    window.location.href = EventUtils.securityUrl(link);
};

/***/ })

},[70]);