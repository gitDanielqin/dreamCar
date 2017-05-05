/**
 * Created by Administrator on 2017/1/8.
 */

function selectInitPos(){
     $(".selectee input").each(function(){
        var bgPos=$(this).width()-10+"px center";
        $(this).attr("disabled","true").css("background-position",bgPos);
    });
    $(".selectee ul").each(function(){
        var sibInput=$(this).siblings("input")
        $(this).width(sibInput.width()+10);
        $(this).css({
            left:sibInput.css("margin-left"),
            top:sibInput.height()
        })
    });
    $("body").bind("click",function(){
       $(".selectee ul").hide();
    })
}


   function initEventBind(){
        $(".result-tabs li").bind("click",function(){
            $(".result-tabs li").removeClass("on");
            $(this).addClass("on");
            $(".tab-cont").hide();
            $("."+$(this).attr("cont")).show();
        });
        //收藏按钮
        $(".btn-collec").bind("click",function(){
             $(this).find("span").text("已收藏");
            $(this).addClass("collected");
       });
       //头部下拉框
       $(".account li").mouseenter(function(){
            if($(this).find("dl").length>0){
                 $(this).find("dl").slideDown();
            }
       }).mouseleave(function(){
            if($(this).find("dl").length>0){
                 $(this).find("dl").hide();
            }
       })
    };
