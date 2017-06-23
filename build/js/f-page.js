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

__webpack_require__(2); /**
                                * Created by Administrator on 2017/1/14.
                                */

__webpack_require__(7);
__webpack_require__(36);
(0, _jquery2.default)(function () {
    function _init() {
        initEventBind();
        var urlStr = window.location.search.substr(1);
        if (urlStr) {
            (0, _jquery2.default)(".main-left li[name=" + urlStr + "]").trigger("click");
        }
    }

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
});

/***/ })

},[59]);