/**
 * Created by xuanyuan on 2016/11/27.
 */
function init_center(){
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
    init_pos();
    selectEventBind();
    init_paneAdd();
    navEventBind();
    modalEventBind();
}
init_center();
function tabEventBind(itemBox){
    $(".pane-tabs li",$(itemBox)).each(function(){
        $(this).click(function(){
            var paneindex=$(".pane-tabs li",$(itemBox)).index($(this));
            $(itemBox).children(".pane").hide();
            $(itemBox).children(".pane").eq(paneindex).show();
        });
    })
}
function init_paneAdd(){
    $(".addItem").unbind("click").bind("click",function(){
        var parItemBox = $(this).closest(".itemBox");
        var nums_Pane=parItemBox.find(".pane-tabs li").length;
        var newTab="<li>经历"+(nums_Pane+1)+"</li>";
        parItemBox.find(".pane-tabs").append(newTab);
        var lastPane= parItemBox.children(".pane:last")
        var newPane =lastPane.clone();
        newPane.find("input").val("");
        newPane.find("textarea").val("");
        lastPane.after(newPane);
        lastPane.hide();
        tabEventBind(parItemBox);
        selectEventBind();
    })
}
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
function init_pos(){
    var p_left= $(".safe-range p").width()-16+"px";
    $(".r-pointer").css("left",p_left);
}
function navEventBind(){
    $(".sideBox>li").bind("click",function(){
        $(".sideBox").children("li.on").removeClass("on");
        $(this).addClass("on");
        $(".sideBox .sub-li").hide();
        if($(this).find(".sub-li").length>0){
            $(this).find(".sub-li").show();
            $(this).find(".sub-li p").unbind("click").bind("click",function(){
                $(".sideBox .sub-li .on").removeClass("on");
                $(this).addClass("on");
                $(".content").children().hide();
                $(".content").children("."+$(this).attr("paneid")).show();
                return false;
            });
        }
        $(".content").children().hide();
        $(".content").children("."+$(this).attr("paneid")).show();
    });
}
function modalEventBind(){
    $(".bind-acc button.chg-phone").click(function(){
        $(".modal").show();
        $(".modal").children().hide();
        $(".modal .phone-change").show();
        $(".close").unbind("click").bind("click",function(){
            $(this).closest("div").hide();
            $(".modal").hide();
        })
    });
    $(".bind-acc button.wechatBind").click(function(){
        $(".modal").show();
        $(".modal").children().hide();
        $(".modal .wechat-bind").show();
        $(".close").unbind("click").bind("click",function(){
            $(this).closest("div").hide();
            $(".modal").hide();
        });
    });
}