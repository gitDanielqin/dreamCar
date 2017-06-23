/**
 * Created by Administrator on 2017/1/21.
 */

import $ from "../libs/jquery-3.1.0.min";
require("../libs/sweetalert.min");
require("../common/common")
require("../../css/base.css")
require("../../css/sweetalert.css")
require("../../css/barcode-pay.css")
var parObj = EventUtils.urlExtrac(window.location);

var postdata = {
    userId: parObj.userId,
    amount: parObj.amount
}
var domainUrl = "";
EventUtils.ajaxReq("/center/user/getInfo", "get", { userId: parObj.userId }, function(resp, status) {
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
})
EventUtils.ajaxReq("/sys/recharge", "post", postdata, function(resp, status) {
    console.log(resp);
    if (resp.data) {
        $("#aliBarcode")[0].src = resp.data.payImg;
        var amount = parseInt(parObj.amount).toFixed(2);
        $("#aliAmount").html(amount);
        //启动轮询开始检测是否支付成功
        var paycheckdata = {
            userId: parObj.userId,
            orderId: resp.data.orderId
        }
        var timer = setInterval(function() {
            EventUtils.ajaxReq("/sys/getOrderStatus", "get", paycheckdata, function(resp, status) {
                console.log(resp);
                if (resp.code == "00000") {
                    clearInterval(timer);
                    swal({
                        title: "",
                        text: "支付成功！",
                        type: "success",
                        timer: 2000,
                        showConfirmButton: false,
                    });
                    setTimeout(function() {
                        if (domainUrl) {
                            window.location.href = EventUtils.securityUrl(domainUrl);
                        } else {
                            window.location.href = EventUtils.securityUrl("index.html?userId=" + parObj.userId);
                        }
                    }, 2000)
                }
            })
        }, 1500)
    } else {
        swal({
            title: "",
            text: resp.info,
            type: "warning"
        })
    }
});

function _init() {
    if (parObj.plattform == "alibarcode") {
        $(".pay-box").hide();
        $(".alipay-box").show();
    } else if (parObj.plattform == "webarcode") {
        $(".pay-box").hide();
        $(".wepay-box").show();
    };

}
_init();