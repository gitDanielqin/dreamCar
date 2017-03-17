/**
 * Created by xuanyuan on 2016/12/31.
 */

 var appQuery = new Vue({
      el:"#app-query"
})
$(function(){
    commWidget.buildSelect();


    function selectEventBind(){
        $(".selectLi dl.sel-lis dd").bind(
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
            $(".selectLi dl").hide();
        })
        $(".selectLi").bind("click",function(){
            $(".selectLi dl").hide();
            $(".selectee ul").hide();
            $(this).children("dl.sel-lis").show();
            return false;
        });
        $("body").bind("click",function(){
            $(".selectee ul").hide();
            $(".selectLi dl").hide();
        })
    }
    function _initEventBind(){
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
        $(".account li").hover(function(){
            $(this).find("dl").slideDown(300);
        },function(){
            $(this).find("dl").slideUp(200);
        })
        $(".district li").bind("click",function(){
            $(".district .on").removeClass("on");
            $(this).addClass("on");
        });
        $(".district li.dis-label").unbind("click");
        $(".address li").bind("click",function(){
            $(".address .on").removeClass("on");
            $(".address span").hide();
            $(this).addClass("on");
            $(this).find("span").show();
        });
        //申请合作对话框事件绑定
        $(".dlg .closer").bind("click",function(){
            $(".dlg-success").hide();
            $(".modal").hide();
        });
        $(".dlg-success .confirm").bind("click",function(){
            $(".dlg-success").hide();
            $(".modal").hide();
        });
        selectEventBind();
        $(".pageBot").pagination({
            totalData:37,
            showData:8,
            coping:true,
            homePage:'首页',
            endPage:'末页',
            prevContent:'上页',
            nextContent:'下页'
        })
    }
    _initEventBind();
})
