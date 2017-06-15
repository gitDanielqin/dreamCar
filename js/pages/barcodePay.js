/**
 * Created by Administrator on 2017/1/21.
 */
var parObj = EventUtils.urlExtrac(window.location);

var postdata = {
    userId: parObj.userId,
    amount: parObj.amount
}
EventUtils.ajaxReq("/sys/recharge", "post", postdata, function(resp, status) {
    console.log(resp);
    if (resp.data) {
        $("#aliBarcode")[0].src = resp.data.payImg;
        var amount = parseInt(parObj.amount).toFixed(2);
        $("#aliAmount").html(amount);
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
    }
}
_init();