/**
 * Created by Administrator on 2017/1/8.
 */
 var isLogin=false;
 var appBanner = new Vue({
      el:"#app-banner",
      data:{},
      methods:{
           coApply:function(){
                if(isLogin){
                     $(".dlg-success").css({
                          top: Math.floor(($(window).height()-412)/2+document.body.scrollTop)
                     })
                    appModal.showModal=true;
                    appModal.showLogin=false;
                    appModal.showSucc=true;
                }else{
                     $(".dlg-login").css({
                          top: Math.floor(($(window).height()-412)/2+document.body.scrollTop)
                     })
                     appModal.showModal=true;
                     appModal.showLogin=true;
                     appModal.showSucc=false;
                }
           }
      }
})
 var appMain = new Vue({
      el:"#app-main",
      data:{
           applyRec:[
                {inc:"宁波市xx有限公司",date:"2016-12-11 20:56:10",state:"查看"},
                {inc:"宁波市xx有限公司",date:"2016-12-11 20:56:10",state:"未查看"},
                {inc:"宁波市xx有限公司",date:"2016-12-11 20:56:10",state:"查看"},
                {inc:"宁波市xx有限公司",date:"2016-12-11 20:56:10",state:"未查看"},
                {inc:"宁波市xx有限公司",date:"2016-12-11 20:56:10",state:"查看"},
                {inc:"宁波市xx有限公司",date:"2016-12-11 20:56:10",state:"未查看"},
                {inc:"宁波市xx有限公司",date:"2016-12-11 20:56:10",state:"未查看"},
                {inc:"宁波市xx有限公司",date:"2016-12-11 20:56:10",state:"查看"},
                {inc:"宁波市xx有限公司",date:"2016-12-11 20:56:10",state:"未查看"},
                {inc:"宁波市xx有限公司",date:"2016-12-11 20:56:10",state:"查看"},
                {inc:"宁波市xx有限公司",date:"2016-12-11 20:56:10",state:"未查看"},
                {inc:"宁波市xx有限公司",date:"2016-12-11 20:56:10",state:"查看"},
                {inc:"宁波市xx有限公司",date:"2016-12-11 20:56:10",state:"查看"},
           ],
           uniComment:[
                {portUrl:"images/porto01.jpg",cont:"挺好的，还不错，恩，呵呵",date:"2016-12-11 22:33"},
                {portUrl:"images/porto02.jpg",cont:"挺好的，还不错，恩，呵呵",date:"2016-12-11 22:33"},
                {portUrl:"images/porto01.jpg",cont:"挺好的，还不错，恩，呵呵",date:"2016-12-11 22:33"},
                {portUrl:"images/porto02.jpg",cont:"挺好的，还不错，恩，呵呵",date:"2016-12-11 22:33"},
           ]
      },
      methods:{
           viewCss:function(state){
                if(state=="查看")
                return "viewed";
           }
      }
});
var appModal = new Vue({
     el:"#app-modal",
     data:{
          showModal:false,
          showSucc:false,
          showLogin:false
     },
     methods:{
          confirmSuc:function(){
               this.showSucc=false;
               this.showModal=false;
          },
          closeSuc:function(){
               this.showSucc=false;
               this.showModal=false;
          },
          closeLog:function(){
               this.showLogin=false;
               this.showModal=false;
          }
     }
})

function _init(){
     selectInitPos();
     initEventBind();
}
_init();

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

        $(".pageBot").pagination({
            totalData:37,
            showData:8,
            coping:true,
            homePage:'首页',
            endPage:'末页',
            prevContent:'上页',
            nextContent:'下页'
        });

        //收藏按钮
        $(".btn-collec").bind("click",function(){
            $(this).css("letter-spacing","0.2em");
            $(this).children("span").html("已收藏").css("letter-spacing","0.2em");
            $(this).children("img").attr("src","images/icon-star-white.png");
            $(this).addClass("collected");
        })
    };
