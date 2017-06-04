webpackJsonp([22],{

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

/**
 * Created by Administrator on 2017/1/21.
 */

function _init() {
    var payway = window.location.search.substr(1);
    if (payway == "alibarcode") {
        $(".pay-box").hide();
        $(".alipay-box").show();
    } else if (payway == "webarcode") {
        $(".pay-box").hide();
        $(".wepay-box").show();
    }
}
_init();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

},[33]);