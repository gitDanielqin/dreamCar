/**
 * Created by Administrator on 2017/1/21.
 */
function initEventBind(){
    $(".charge-val").focus(function(){
        $(".charge-hint").show();
    }).blur(function(){
        $(".charge-hint").hide();
    });

    $(".pay-way li").bind("click",function(){
        $(".pay-way li").removeClass("on");
        $(this).addClass("on");
        $(".pay-content").children().hide();
        $(".pay-content div."+$(this).attr("name")).show();
    });
    $(".plattform-sel i").click(function(){
        $(".plattform-sel i.on").removeClass("on");
        $(this).addClass("on");
    })
    $(".barcode-pay button").click(function(){
        if($(".barcode-pay .plattform-sel i.on").length>0){
            var barcode = $(".barcode-pay .plattform-sel i.on").attr("name");
            window.location.href="barcode-pay.html?"+barcode;
        }else{
            alert("请选择至少一个支付平台！");
        }
   });
   $(".checked-agree").click(function(){
        $(this).toggleClass("on");
   })
}

initEventBind();
