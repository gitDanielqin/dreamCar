/**
 * Created by xuanyuan on 2016/12/31.
 */
commWidget = {
    buildSelect:function(){
        var _this =this;
        var selectObj = $("select.selFlex");
        selectObj.each(function(){
            $(this).wrap("<div class='selectee'></div>");
            var selDiv = $(this).parent();
            var selectOpts= $(this).children("option");
            selDiv.append("<input type='text' disabled/>");
            var oInput = selDiv.children("input");
            oInput.val(selectOpts.first().html());
            console.log($(this).outerHeight());
            oInput.height($(this).outerHeight());
            var ulObj= $("<ul></ul>");
            var lis="";
            for(var i=0;i<selectOpts.length;i++){
                lis+="<li>"+selectOpts[i].innerHTML+"</li>";
            }
            ulObj.append(lis);
            ulObj.offset({left:0,top:oInput.height()+1});
            selDiv.append(ulObj);
        });
        selectObj.hide();
        //选择事件绑定
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
    },

}
