var hrApp = new Vue({
     el:"#hr-app",
     data:{
          database:{
               posList:[
                    "工业设计","UI设计","前端开发","全部职位"
               ]
          },
          resumes:[
               {type:"unchecked",name:"江玉海",uni:"中国美术学院",major:"工业设计",exp:"3年经验",scolar:"本科",applypos:"工业设计",applydate:"2017-01-30"},
               {type:"unchecked",name:"江玉海",uni:"中国美术学院",major:"工业设计",exp:"3年经验",scolar:"本科",applypos:"工业设计",applydate:"2017-01-30"},
               {type:"unchecked",name:"江玉海",uni:"中国美术学院",major:"工业设计",exp:"3年经验",scolar:"本科",applypos:"工业设计",applydate:"2017-01-30"},
               {type:"unchecked",name:"江玉海",uni:"中国美术学院",major:"工业设计",exp:"3年经验",scolar:"本科",applypos:"工业设计",applydate:"2017-01-30"}
          ],
          resumeType:"全部类型",
          resumePos:"全部职位"
     }
})


function init_center(){
     selectInitPos();
    selectEventBind();

}
init_center();
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
}
function selectEventBind(){
    $(".selectee ul li").bind({
        "mouseover":function(){
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
