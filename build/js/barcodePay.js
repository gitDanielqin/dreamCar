webpackJsonp([23],{

/***/ 35:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(4); /**
                                    * Created by Administrator on 2017/1/21.
                                    */

__webpack_require__(3);
__webpack_require__(2);
__webpack_require__(5);
__webpack_require__(35);
var parObj = EventUtils.urlExtrac(window.location);

var postdata = {
    userId: parObj.userId,
    amount: parObj.amount
};
var domainUrl = "";
EventUtils.ajaxReq("/center/user/getInfo", "get", { userId: parObj.userId }, function (resp, status) {
    console.log(resp.data);
    if (resp.data) {
        switch (resp.data.userType) {
            case "0":
                domainUrl = "pCenter.html?userId=" + parObj.userId + "&loginId=" + resp.data.loginIdentifier;
                break;
            case "1":
                domainUrl = "uniCenter.html?userId=" + parObj.userId + "&loginId=" + resp.data.loginIdentifier;
                break;
            case "2":
                domainUrl = "incCenter.html?userId=" + parObj.userId + "&loginId=" + resp.data.loginIdentifier;
                break;
        }
    }
});
EventUtils.ajaxReq("/sys/recharge", "post", postdata, function (resp, status) {
    console.log(resp);
    if (resp.data) {
        (0, _jquery2.default)("#aliBarcode")[0].src = resp.data.payImg;
        var amount = parseInt(parObj.amount).toFixed(2);
        (0, _jquery2.default)("#aliAmount").html(amount);
        //启动轮询开始检测是否支付成功
        var paycheckdata = {
            userId: parObj.userId,
            orderId: resp.data.orderId
        };
        var timer = setInterval(function () {
            EventUtils.ajaxReq("/sys/getOrderStatus", "get", paycheckdata, function (resp, status) {
                console.log(resp);
                if (resp.code == "00000") {
                    clearInterval(timer);
                    swal({
                        title: "",
                        text: "支付成功！",
                        type: "success",
                        timer: 2000,
                        showConfirmButton: false
                    });
                    setTimeout(function () {
                        if (domainUrl) {
                            window.location.href = EventUtils.securityUrl(domainUrl);
                        } else {
                            window.location.href = EventUtils.securityUrl("index.html?userId=" + parObj.userId);
                        }
                    }, 2000);
                }
            });
        }, 1500);
    } else {
        swal({
            title: "",
            text: resp.info,
            type: "warning"
        });
    }
});

function _init() {
    if (parObj.plattform == "alibarcode") {
        (0, _jquery2.default)(".pay-box").hide();
        (0, _jquery2.default)(".alipay-box").show();
    } else if (parObj.plattform == "webarcode") {
        (0, _jquery2.default)(".pay-box").hide();
        (0, _jquery2.default)(".wepay-box").show();
    };
}
_init();

/***/ })

},[48]);