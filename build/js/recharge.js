webpackJsonp([14],{

/***/ 43:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(4); /**
                                    * Created by Administrator on 2017/1/21.
                                    */

__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(5);
__webpack_require__(43);
var parObj = EventUtils.urlExtrac(window.location);

function initEventBind() {
    (0, _jquery2.default)(".pay-way li").unbind("click").bind("click", function () {
        (0, _jquery2.default)(".pay-way li").removeClass("on");
        (0, _jquery2.default)(this).addClass("on");
        (0, _jquery2.default)(".pay-content").children().hide();
        (0, _jquery2.default)(".pay-content div." + (0, _jquery2.default)(this).attr("name")).show();
    });
    (0, _jquery2.default)(".plattform-sel i").click(function () {
        (0, _jquery2.default)(".plattform-sel i.on").removeClass("on");
        (0, _jquery2.default)(this).addClass("on");
    });
    (0, _jquery2.default)(".barcode-pay button").click(function () {
        if ((0, _jquery2.default)(".barcode-pay .plattform-sel i.on").length == 0) {
            swal({
                title: "",
                text: "请选择至少一个支付平台！",
                type: "warning"
            });
            return;
        };
        if ((0, _jquery2.default)(".barcode-pay .plattform-sel i.on").attr("name") == "webarcode") {
            swal({
                title: "",
                text: "该支付即将上线，敬请期待！",
                type: "warning"
            });
            return;
        };
        if ((0, _jquery2.default)("#chargeAmount").val() == "") {
            swal({
                title: "",
                text: "充值金额不能为空！",
                type: "warning"
            });
            return;
        }
        if (!/^[1-9]\d*$/.test((0, _jquery2.default)("#chargeAmount").val())) {
            swal({
                title: "",
                text: "请输入大于1的整数金额！",
                type: "warning"
            });
            return;
        }
        if (!(0, _jquery2.default)(".barcode-pay .checked-agree").hasClass("on")) {
            swal({
                title: "",
                text: "请阅读并同意我们的推广服务协议！",
                type: "warning"
            });
            return;
        }
        var plattform = (0, _jquery2.default)(".barcode-pay .plattform-sel i.on").attr("name");
        var link = "barcode-pay.html?plattform=" + plattform + "&userId=" + parObj.userId + "&amount=" + (0, _jquery2.default)("#chargeAmount").val();
        window.location.href = EventUtils.securityUrl(link);
    });
    (0, _jquery2.default)(".checked-agree").click(function () {
        (0, _jquery2.default)(this).toggleClass("on");
    });
    //协议点击事件
    EventUtils.absCenter((0, _jquery2.default)(".modal .recharge-agreement"));
    (0, _jquery2.default)("#payAgreebox").click(function () {
        (0, _jquery2.default)(".modal").show();
    });
    (0, _jquery2.default)(".modal").click(function (ev) {
        var oEv = ev || window.event;
        if ((0, _jquery2.default)(oEv.target).hasClass("modal")) {
            (0, _jquery2.default)(".modal").hide();
        }
    });
    //对链接进行修改
    var homelink = (0, _jquery2.default)(".top a.homepage").attr("href") + "?userId=" + parObj.userId;
    (0, _jquery2.default)(".top a.homepage").attr("href", EventUtils.securityUrl(homelink));
    (0, _jquery2.default)(".site-nav a").each(function () {
        if ((0, _jquery2.default)(this).hasClass("homepage")) {
            var link = (0, _jquery2.default)(this).attr("href") + "?userId=" + parObj.userId;
        } else {
            var link = (0, _jquery2.default)(this).attr("href") + "&userId=" + parObj.userId;
        }
        (0, _jquery2.default)(this).attr("href", EventUtils.securityUrl(link));
    });
}

initEventBind();

// 清除页面绑定事件
window.onunload = function () {
    (0, _jquery2.default)(".pay-way li").unbind("click");
    (0, _jquery2.default)(".plattform-sel i").click(null);
    (0, _jquery2.default)(".barcode-pay button").click(null);
    (0, _jquery2.default)(".checked-agree").click(null);
    (0, _jquery2.default)("#payAgreebox").click(null);
    (0, _jquery2.default)(".modal").click(null);
};

/***/ })

},[66]);