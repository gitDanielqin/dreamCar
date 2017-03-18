/**
 * Created by xuanyuan on 2016/12/31.
 */

 var appQuery = new Vue({
      el:"#app-query",
      data:{
           database:{
                uni:{
                     majors:[
                          {major:"艺术",submajor:["行为艺术","人体艺术"]},
                          {major:"信息技术",submajor:["计算机科学","通信工程"]},
                          {major:"经济",submajor:["国民经济","企业经济"]},
                     ],
                     majorAmount:["1-20","20-100","100-200","200-500"],
                },
                inc:{
                     IncScale:["1~20","21~50","51~100","101~500","501~1000","1000人以上"],
                     IncProps:["内资","外资","农民专业合作社","合作企业","个人独资企业"],
                     posAmount:["1-20","20-100","100-200","200-500"]
                }
           },
           uniQuery:{
                major:"",
                majorsum:"",
                majorEx:false,
                incReq:{
                    areas:{
                         area_1:"",
                         area_2:""
                    },
                    incProps:"",
                    IncScale:"",
                    pos:{
                         pos_1:"",
                         pos_2:""
                    },
                    posAmount:"",
               },
               publicTime:"",
               trainway:""
           },

      }
});

var appResult = new Vue({
     el:"#app-result",
     data:{
          uniList:[
               {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"企业需要提供的",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
               {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"到校培训",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
               {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"到校培训",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
               {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"到校培训",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
               {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"到校培训",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
          ]
     }
})

function _init(){
     selectInitPos();
      _initEventBind();
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
