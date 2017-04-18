/**
 * Created by Administrator on 2017/1/14.
 */
$(function(){
    function _init(){
        initEventBind();
        var urlStr= window.location.search.substr(1);
        if(urlStr){
            $(".main-left li[name="+urlStr+"]").trigger("click");
        }
    }

    function initEventBind(){

        $(".co-table .navs li").each(function(){
            $(this).click(function(){
                $(".co-table .navs li").removeClass("on");
                $(this).addClass("on");
                $(".coway").hide();
                $("."+$(this).attr("name")).show();
            })
        });
        $(".main-left li").each(function(index){
            $(this).click(function(){
                $(".main-left li").removeClass("on");
                $(this).addClass("on");
                $(".nav-content").hide();
                $($(".nav-content")[index]).show();
            })
        })
    }

    _init();
})
