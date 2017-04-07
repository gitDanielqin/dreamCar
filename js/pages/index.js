/**
 * Created by xuanyuan on 2016/11/4.
 */
/*城市选择*/
var provinces=null;
$.getJSON("data/address.json",function(result){
    provinces=result;
})
/*为下拉框的每一个选项添加点击事件*/
function optEventBind(){
    $("#province li").click(function(index){
        $("#sel-pro").val($(this).text());
        var index= $("#province li").index(this);
        var optionCity="";
        for(var i=0; i<provinces[index].citys.length;i++){
            optionCity+="<li>"+provinces[index].citys[i].city+"</li>"
        }
        $("#city").html(optionCity);
        $("#sel-add b").text($("#city li:first").text());
        $("#city li").click(function(){
            $("#sel-city").val($(this).text());
            $("#sel-add b").text($(this).text());
            $("#sel-city").css("background-image","url('images/trigle02.png')");
            $("#city").hide();
            isShow_city=false;
            $("#address").hide();
        });
        $("#sel-city").val($("#city li:first").text());
        //关闭省份选项开关
        $("#sel-pro").css("background-image","url('images/trigle02.png')");
        $("#province").hide();
        isShow_pro=false;
    })
}
/*为省份和城市选择绑定点击事件*/
function selectEventBind(){
    var isShow_pro=false;
    var isShow_city=false;
    $("#sel-pro").click(function(){
        if(!isShow_pro){
            $(this).css("background-image","url('images/trigle-up.png')");
            if($("#province").children("li").length==0){
                var optionPro="";
                for(var i=0; i<provinces.length;i++){
                    optionPro+="<li>"+provinces[i].name+"</li>";
                }
                $("#province").html(optionPro);
                $("#province").show();
                optEventBind();
            }else{
                $("#province").show();
            }
            isShow_pro=true;
        }else{
            $(this).css("background-image","url('images/trigle02.png')");
            $("#province").hide();
            isShow_pro=false;
        }

    });
    $("#sel-city").click(function(){
        if(!isShow_city){
            $(this).css("background-image","url('images/trigle-up.png')");
            $("#city").show();
            isShow_city=true;
        }else{
            $(this).css("background-image","url('images/trigle02.png')");
            $("#city").hide();
            isShow_city=false;
        }
    });
}

$("#sel-add").click(function(){
    $("#address").show();
    selectEventBind();
    return false;
})

//点击网页上除了地址和切换地址其他区域选项框消失
$("body").click(function(){
    $("#sel-add b").text($("#sel-city").val());
    $("#address").hide();
});
$("#address").click(function(){
    return false;
});

//图片展示选项卡
$(".pics .pics-nav span").click(function(){
    $(".pics .showBox").hide().fadeIn();
    $(".pics .pics-nav span").removeClass("on");
    $(this).addClass("on");
    var aImg = $(".pics .showBox img");
    if($(this).text()=="课堂"){
        $(aImg[0]).attr("src","images/photo01.jpg");
        $(aImg[1]).attr("src","images/photo04.jpg");
        $(aImg[4]).attr("src","images/photo03.jpg");
        $(aImg[5]).attr("src","images/photo06.jpg");
    }else if($(this).text()=="案例"){
        $(aImg[0]).attr("src","images/photo03.jpg");
        $(aImg[1]).attr("src","images/photo06.jpg");
        $(aImg[4]).attr("src","images/photo01.jpg");
        $(aImg[5]).attr("src","images/photo04.jpg");
    }
})

//六大板块上滑动事件

$(".servs li").each(function(){
    this.addEventListener("mouseover",function(){
        $(this).find(".desc").addClass("slide-up").removeClass("slide-down");
        return false;
    });
    this.addEventListener("mouseout",function(){
        $(this).find(".desc").addClass("slide-down").removeClass("slide-up")
    })
})

