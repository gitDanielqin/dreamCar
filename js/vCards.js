/**
 * Created by xuanyuan on 2016/11/7.
 */
$(".selectee input").each(function(){
    var bgPos=$(this).width()-10+"px center";
    $(this).attr("disabled","true").css("background-position",bgPos);
});
$(".selectee ul").each(function(){
    $(this).width($(this).siblings("input").width()+10);
});
function selectEventBind(){
    $(".selectee ul li").bind(
        {"mouseover":function(){
            $(this).addClass("over");
        },
            "mouseout":function(){
                $(this).removeClass("over");
            },
            "click":function(){
                $(this).siblings(".selected").removeClass("selected");
                $(this).addClass("selected");
                $(this).parent().siblings("input").val($(this).text());
                $(this).parent().hide();
                return false;
            }
        });
    $(".selectee").bind("click",function(){
        $(".selectee ul").hide();
        $(this).children("ul").show();
        return false;
    });
    $("body").bind("click",function(){
        $(".selectee ul").hide();
    })
}
selectEventBind();

$(".main .gender span").click(function(){
    $(".main .gender span").removeClass("on");
    $(this).addClass("on");
});
