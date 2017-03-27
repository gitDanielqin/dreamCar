/**
 * Created by Administrator on 2017/1/8.
 */
 var isLogin=false;
 var appBanner = new Vue({
      el:"#app-banner",
      data:{
           posdata:{
                pos:"UI设计师",
                viewed:30,
                applied:15,
                publicDate:"2016-12-11"
           },
           unirecdata:{
                title:"UI设计师",
                viewed:30,
                applied:15,
                publicDate:"2016-12-11"
           },
           increcdata:{
                title:"UI设计师",
                viewed:30,
                applied:15,
                publicDate:"2016-12-11"
           }
      },
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
           posdata:{
                pos:"UI设计师",
                salary:"6K-8K",
                posType:"全职",
                scolar:"大专以上",
                gender:"不限",
                worksexp:"1-3年经验",
                posAmount:1,
                contact:"18845696321",
                address:"杭州市滨江区六合路368号一幢(北)三楼B3077室-4",
                welfare:["五险一金","带薪年假","加班补助","双休","朝九晚五","运营大咖","美酒零食"],
                inc:"杭州煌巢科技有限公司分公司",
                incProps:"国企",
                incScale:20000,
                incArea:"互联网",
           },
           unirecdata:{
                IncCity:"杭州",
                IncArea:"互联网",
                IncProps:"国企",
                IncPos:"UI设计师",
                IncScale:"1000-9000人",
                posAmount:50,
                major:"影视多媒体",
                stuScale:"50-100",
                recruitDate:"2017-12-13",
                recruitTime:"14:00",
                recruitAddr:"杭州市滨江区六合路368号一幢(北)三楼B3077",
                contact:"18845696321",
                contactP:"江老师"
           },
           increcdata:{
                pos:"UI设计师",
                salary:"6K-8K",
                posType:"全职",
                scolar:"大专以上",
                gender:"不限",
                worksexp:"1-3年经验",
                posAmount:1,
                contact:"18845696321",
                contactP:"江经理",
                address:"杭州市滨江区六合路368号一幢(北)三楼B3077室-4",
                welfare:["五险一金","带薪年假","加班补助","双休","朝九晚五","运营大咖","美酒零食"],
                inc:"杭州煌巢科技有限公司分公司",
                incProps:"国企",
                incScale:20000,
                incArea:"互联网",
           },
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
           posApplyRec:[
                {name:"杨xx",date:"2016-12-11 20:56:10",state:"查看"},
                {name:"江xx",date:"2016-12-11 20:56:10",state:"未查看"},
                {name:"杨xx",date:"2016-12-11 20:56:10",state:"预约面试"},
                {name:"江xx",date:"2016-12-11 20:56:10",state:"未查看"},
                {name:"杨xx",date:"2016-12-11 20:56:10",state:"查看"},
                {name:"江xx",date:"2016-12-11 20:56:10",state:"未查看"},
                {name:"杨xx",date:"2016-12-11 20:56:10",state:"未查看"},
                {name:"江xx",date:"2016-12-11 20:56:10",state:"查看"},
                {name:"杨xx",date:"2016-12-11 20:56:10",state:"预约面试"},
                {name:"江xx",date:"2016-12-11 20:56:10",state:"查看"},
                {name:"杨xx",date:"2016-12-11 20:56:10",state:"未查看"},
                {name:"江xx",date:"2016-12-11 20:56:10",state:"查看"},
                {name:"杨xx",date:"2016-12-11 20:56:10",state:"查看"},
           ],
           uniRecruitRec:[
                {inc:"宁波市xx有限公司",date:"2016-12-11 20:56:10",state:"查看"},
                {inc:"宁波市xx有限公司",date:"2016-12-11 20:56:10",state:"未查看"},
                {inc:"宁波市xx有限公司",date:"2016-12-11 20:56:10",state:"查看"},
                {inc:"宁波市xx有限公司",date:"2016-12-11 20:56:10",state:"未查看"},
                {inc:"宁波市xx有限公司",date:"2016-12-11 20:56:10",state:"查看"},
                {inc:"宁波市xx有限公司",date:"2016-12-11 20:56:10",state:"邀请合作"},
                {inc:"宁波市xx有限公司",date:"2016-12-11 20:56:10",state:"未查看"},
                {inc:"宁波市xx有限公司",date:"2016-12-11 20:56:10",state:"查看"},
                {inc:"宁波市xx有限公司",date:"2016-12-11 20:56:10",state:"邀请合作"},
                {inc:"宁波市xx有限公司",date:"2016-12-11 20:56:10",state:"查看"},
                {inc:"宁波市xx有限公司",date:"2016-12-11 20:56:10",state:"邀请合作"},
                {inc:"宁波市xx有限公司",date:"2016-12-11 20:56:10",state:"查看"},
                {inc:"宁波市xx有限公司",date:"2016-12-11 20:56:10",state:"查看"},
           ],
           incRecruitRec:[
                {name:"杨xx",date:"2016-12-11 20:56:10",state:"查看"},
                {name:"江xx",date:"2016-12-11 20:56:10",state:"未查看"},
                {name:"杨xx",date:"2016-12-11 20:56:10",state:"邀请参会"},
                {name:"江xx",date:"2016-12-11 20:56:10",state:"未查看"},
                {name:"杨xx",date:"2016-12-11 20:56:10",state:"查看"},
                {name:"江xx",date:"2016-12-11 20:56:10",state:"未查看"},
                {name:"杨xx",date:"2016-12-11 20:56:10",state:"未查看"},
                {name:"江xx",date:"2016-12-11 20:56:10",state:"查看"},
                {name:"杨xx",date:"2016-12-11 20:56:10",state:"邀请参会"},
                {name:"江xx",date:"2016-12-11 20:56:10",state:"查看"},
                {name:"杨xx",date:"2016-12-11 20:56:10",state:"未查看"},
                {name:"江xx",date:"2016-12-11 20:56:10",state:"查看"},
                {name:"杨xx",date:"2016-12-11 20:56:10",state:"查看"},
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
                if(state=="查看"){
                     return "viewed";
                }else if(state=="预约面试"){
                     return "interview";
                }else if(state=="邀请合作"){
                     return "coop";
                }else if(state=="邀请参会"){
                     return "interview";
                }
           },
           showContact:function(contact){
                if(isLogin){
                     return contact;
                }else{
                     var cont_h = contact.slice(0,3);
                     var cont_e = contact.slice(7);
                     return (cont_h+"****"+cont_e);
                }
           },
           showAllContact:function(contact){
                $(".descript .contact-phone").text(contact);
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
