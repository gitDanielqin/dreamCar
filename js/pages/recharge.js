/**
 * Created by Administrator on 2017/1/21.
 */

import $ from "../libs/jquery-3.1.0.min";
require("../libs/sweetalert.min");
require("../common/common")
require("../../css/base.css")
require("../../css/sweetalert.css")
require("../../css/recharge.css")
var parObj = EventUtils.urlExtrac(window.location);

function initEventBind() {
    $(".pay-way li").unbind("click").bind("click", function() {
        $(".pay-way li").removeClass("on");
        $(this).addClass("on");
        $(".pay-content").children().hide();
        $(".pay-content div." + $(this).attr("name")).show();
    });
    $(".plattform-sel i").click(function() {
        $(".plattform-sel i.on").removeClass("on");
        $(this).addClass("on");
    })
    $(".barcode-pay button").click(function() {
        if ($(".barcode-pay .plattform-sel i.on").length == 0) {
            swal({
                title: "",
                text: "请选择至少一个支付平台！",
                type: "warning"
            });
            return
        };
        if ($(".barcode-pay .plattform-sel i.on").attr("name") == "webarcode") {
            swal({
                title: "",
                text: "该支付即将上线，敬请期待！",
                type: "warning"
            });
            return
        };
        if ($("#chargeAmount").val() == "") {
            swal({
                title: "",
                text: "充值金额不能为空！",
                type: "warning"
            });
            return;
        }
        if (!/^[1-9]\d*$/.test($("#chargeAmount").val())) {
            swal({
                title: "",
                text: "请输入大于1的整数金额！",
                type: "warning"
            });
            return;
        }
        if (!$(".barcode-pay .checked-agree").hasClass("on")) {
            swal({
                title: "",
                text: "请阅读并同意我们的推广服务协议！",
                type: "warning"
            });
            return;
        }
        var plattform = $(".barcode-pay .plattform-sel i.on").attr("name");
        var link = "barcode-pay.html?plattform=" + plattform + "&userId=" + parObj.userId + "&amount=" + $("#chargeAmount").val();
        window.location.href = EventUtils.securityUrl(link);
    });
    $(".checked-agree").click(function() {
        $(this).toggleClass("on");
    });
    //协议点击事件
    EventUtils.absCenter($(".modal .recharge-agreement"));
    $("#payAgreebox").click(function() {
        $(".modal").show();
    })
    $(".modal").click(function(ev) {
        var oEv = ev || window.event;
        if ($(oEv.target).hasClass("modal")) {
            $(".modal").hide();
        }
    });
    //对链接进行修改
    var homelink = $(".top a.homepage").attr("href") + "?userId=" + parObj.userId;
    $(".top a.homepage").attr("href", EventUtils.securityUrl(homelink));
    $(".site-nav a").each(function() {
        if ($(this).hasClass("homepage")) {
            var link = $(this).attr("href") + "?userId=" + parObj.userId;
        } else {
            var link = $(this).attr("href") + "&userId=" + parObj.userId;
        }
        $(this).attr("href", EventUtils.securityUrl(link));
    })
}

initEventBind();

// 清除页面绑定事件
window.onunload = function() {
    $(".pay-way li").unbind("click");
    $(".plattform-sel i").click(null)
    $(".barcode-pay button").click(null);
    $(".checked-agree").click(null);
    $("#payAgreebox").click(null);
    $(".modal").click(null);
}