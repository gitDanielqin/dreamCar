/**
 * Created by Administrator on 2017/1/8.
 */
$(function(){
    $(".pageBot").pagination({
        totalData:37,
        showData:8,
        coping:true,
        homePage:'首页',
        endPage:'末页',
        prevContent:'上页',
        nextContent:'下页'
    });
    initEventBind=function(){
        $(".result-tabs li").bind("click",function(){
            $(".result-tabs li").removeClass("on");
            $(this).addClass("on");
            $(".tab-cont").hide();
            $("."+$(this).attr("cont")).show();
        });
        //申请合作对话框事件绑定
        var isLogin=true;
        $(".co-apply").bind("click",function(){
            if(isLogin){
                $(".modal").show();
                $(".dlg").hide();
                $(".dlg-success").show();
            }else{
                $(".modal").show();
                $(".dlg").hide();
                $(".dlg-login").show();
            }
        });
        $(".dlg .closer").bind("click",function(){
            $(".dlg-success").hide();
            $(".modal").hide();
        });
        $(".dlg-success .confirm").bind("click",function(){
            $(".dlg-success").hide();
            $(".modal").hide();
        });

        //收藏按钮
        $(".btn-collec").bind("click",function(){
            $(this).css("letter-spacing","0.2em");
            $(this).children("span").html("已收藏").css("letter-spacing","0.2em");
            $(this).children("img").attr("src","images/icon-star-white.png");
            $(this).addClass("collected");
        })
    };
    initEventBind();
})