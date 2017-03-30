/**
 * Created by xuanyuan on 2016/12/31.
 */
var isLogin=true;

var appTop = new Vue({
     el:"#app-top",
     data:{
          isLogin:isLogin
     }
})
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
                     props:["重点","本科","专科","高职","民营"],
                     scolars:["博士","硕士","本科","大专"]
                },
                inc:{
                     IncScale:["1~20","21~50","51~100","101~500","501~1000","1000人以上"],
                     IncProps:["内资","外资","农民专业合作社","合作企业","个人独资企业"],
                     posAmount:["1-20","20-100","100-200","200-500"],
                     pos1:["客服/售前/售后技术支持","客服/售前/售后技术支持","客服/售前/售后技术支持","客服/售前/售后技术支持"],
                     pos2:["平面设计师","动效设计师","游戏设计师","UI设计师","平面设计师","动效设计师","游戏设计师","UI设计师","平面设计师","动效设计师","游戏设计师","UI设计师","平面设计师","动效设计师","游戏设计师","UI设计师"],
                     area1:["IT/通信/电子/互联网","房地产/建筑业","保险","银行","信托/担保/拍卖/典当","其他"],
                     area2:["IT/通信/电子/互联网","房地产/建筑业","保险","银行","信托/担保/拍卖/典当","其他"],
                     salary:["1k-3k","3k-5k","5k-8k","8k-12k","12k+"],
                     welfare:["五险一金","双休","餐补","交通补","带薪年假","节日聚餐"]
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
                    IncProps:"",
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
           incQuery:{
               uniReq:{
                    uniprops:"",
                    major:"",
                    majorsum:"",
                    majorEx:false,
               },
               pos:{
                    pos_1:"",
                    pos_2:""
               },
               posAmount:"",
               publicTime:"",
               trainway:""
           },
           posQuery:{
                areas:{
                     area_1:"",
                     area_2:""
                },
                pos:{
                     pos_1:"",
                     pos_2:""
                },
                worksexp:"",
                scolar:"",
                salary:"",
                welfare:"",
                publicTime:""
           },
           uniRecruit:{
                major:"",
                majorsum:"",
                majorEx:false,
                incReq:{
                    areas:{
                         area_1:"",
                         area_2:""
                    },
                    IncProps:"",
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
          incRecruit:{
               scolar:"",
               majorEx:false,
               worksexp:"",
               pos:{
                    pos_1:"",
                    pos_2:""
               },
               posAmount:"",
               salary:"",
               publicTime:""
          },
           showPosBox:false,
           showAreaBox:false,
           showWelBox:false
      },
      methods:{
           selPos:function(pos,type){
                if(type=="uni"){
                     this.uniQuery.incReq.pos.pos_2 = pos;
                }else if(type=="inc"){
                      this.incQuery.pos.pos_2 = pos;
                }else if(type=="pos"){
                     this.posQuery.pos.pos_2 = pos;
                }else if(type=="unirecruit"){
                     this.uniRecruit.incReq.pos.pos_2=pos;
                }else if(type=="increcruit"){
                     this.incRecruit.pos.pos_2=pos
                }
                this.showPosBox=false;
           },
           clickPos:function(){
                this.showPosBox=true;
           },
           selArea:function(area,type){
                if(type=="uni"){
                    this.uniQuery.incReq.areas.area_2 = area;
                }else if(type=="pos"){
                     this.posQuery.areas.area_2 = area;
                }else if(type=="unirecruit"){
                     this.uniRecruit.incReq.areas.area_2=area;
                }

                this.showAreaBox=false;
           },
           clickArea:function(){
                this.showAreaBox=true;
           },
           clickWel:function(){
                this.showWelBox=true;
           },
           checkEv:function(obj){
                if($(obj).hasClass("on")){
                     $(obj).removeClass("on");
                     $(obj).parent("li").removeClass("on");
                }else{
                     $(obj).addClass("on");
                     $(obj).parent("li").addClass("on");
                }
           },
           submitWel:function(){
                var selWelfare="";
                $(".welfare-lis li").each(function(){
                     if($(this).hasClass("on")){
                          selWelfare+=$(this).text()+",";
                     }
                });
                this.posQuery.welfare=selWelfare;
                this.showWelBox=false;
           }
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
          ],
          incList:[
               {pos:"艺术设计",uniProps:"高校性质",major:"专业名称",stuScale:"专业人数",trainway:"到校培训",inc:"杭州煌巢信息科技有限公司",IncProps:"国企",posAmount:"20人",publicDate:"2017-11-11"},
               {pos:"艺术设计",uniProps:"高校性质",major:"专业名称",stuScale:"专业人数",trainway:"到校培训",inc:"杭州煌巢信息科技有限公司",IncProps:"国企",posAmount:"20人",publicDate:"2017-11-11"},
               {pos:"艺术设计",uniProps:"高校性质",major:"专业名称",stuScale:"专业人数",trainway:"到校培训",inc:"杭州煌巢信息科技有限公司",IncProps:"国企",posAmount:"20人",publicDate:"2017-11-11"},
               {pos:"艺术设计",uniProps:"高校性质",major:"专业名称",stuScale:"专业人数",trainway:"到校培训",inc:"杭州煌巢信息科技有限公司",IncProps:"国企",posAmount:"20人",publicDate:"2017-11-11"},
               {pos:"艺术设计",uniProps:"高校性质",major:"专业名称",stuScale:"专业人数",trainway:"到校培训",inc:"杭州煌巢信息科技有限公司",IncProps:"国企",posAmount:"20人",publicDate:"2017-11-11"}
          ],
          posList:[
               {pos:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},posAmount:2,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",IncScale:"20-99人",publicDate:"2017-11-11"},
               {pos:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},posAmount:2,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",IncScale:"20-99人",publicDate:"2017-11-11"},
               {pos:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},posAmount:2,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",IncScale:"20-99人",publicDate:"2017-11-11"},
               {pos:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},posAmount:2,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",IncScale:"20-99人",publicDate:"2017-11-11"},
               {pos:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},posAmount:2,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",IncScale:"20-99人",publicDate:"2017-11-11"},
               {pos:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},posAmount:2,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",IncScale:"20-99人",publicDate:"2017-11-11"}
          ],
          unirecruitList:[
               {title:"艺术设计",major:"专业名称",stuScale:"专业人数",addr:{city:"杭州",district:"滨江区"},recruitDate:"2016-12-11",IncProps:"性质",IncScale:"规模",IncPos:"岗位名称",publicDate:"2017-11-11"},
               {title:"艺术设计",major:"专业名称",stuScale:"专业人数",addr:{city:"杭州",district:"滨江区"},recruitDate:"2016-12-11",IncProps:"性质",IncScale:"规模",IncPos:"岗位名称",publicDate:"2017-11-11"},
               {title:"艺术设计",major:"专业名称",stuScale:"专业人数",addr:{city:"杭州",district:"滨江区"},recruitDate:"2016-12-11",IncProps:"性质",IncScale:"规模",IncPos:"岗位名称",publicDate:"2017-11-11"},
               {title:"艺术设计",major:"专业名称",stuScale:"专业人数",addr:{city:"杭州",district:"滨江区"},recruitDate:"2016-12-11",IncProps:"性质",IncScale:"规模",IncPos:"岗位名称",publicDate:"2017-11-11"},
               {title:"艺术设计",major:"专业名称",stuScale:"专业人数",addr:{city:"杭州",district:"滨江区"},recruitDate:"2016-12-11",IncProps:"性质",IncScale:"规模",IncPos:"岗位名称",publicDate:"2017-11-11"},
               {title:"艺术设计",major:"专业名称",stuScale:"专业人数",addr:{city:"杭州",district:"滨江区"},recruitDate:"2016-12-11",IncProps:"性质",IncScale:"规模",IncPos:"岗位名称",publicDate:"2017-11-11"},
               {title:"艺术设计",major:"专业名称",stuScale:"专业人数",addr:{city:"杭州",district:"滨江区"},recruitDate:"2016-12-11",IncProps:"性质",IncScale:"规模",IncPos:"岗位名称",publicDate:"2017-11-11"},
          ],
          increcruitList:[
               {title:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},recruitDate:"2016-12-11",posAmount:20,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",publicDate:"2017-11-11"},
               {title:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},recruitDate:"2016-12-11",posAmount:20,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",publicDate:"2017-11-11"},
               {title:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},recruitDate:"2016-12-11",posAmount:20,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",publicDate:"2017-11-11"},
               {title:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},recruitDate:"2016-12-11",posAmount:20,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",publicDate:"2017-11-11"},
               {title:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},recruitDate:"2016-12-11",posAmount:20,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",publicDate:"2017-11-11"},
               {title:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},recruitDate:"2016-12-11",posAmount:20,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",publicDate:"2017-11-11"}
          ]
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
          },

     },
     components:{
          'pagination':pagination
     }
})

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
          },
     }
})
function _init(){
     selectInitPos();
     _initEventBind();
}
_init();
function selectInitPos(){
     $(".selectee input").each(function(){
        var bgPos=$(this).width()+10+"px center";
        $(this).attr("disabled","true").css("background-position",bgPos);
    });
    $(".selectee ul").each(function(){
        var sibInput=$(this).siblings("input")
        $(this).width(sibInput.width()+30);
        $(this).css({
            left:sibInput.css("margin-left"),
            top:sibInput.height()
        })
    });
    $(".popBox .selectee ul").css("top","25px");
    $("body").bind("click",function(){
       $(".selectee ul").hide();
      appQuery.showPosBox=false;
      appQuery.showAreaBox=false;
      appQuery.showWelBox=false;
    })
}



    function _initEventBind(){

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
        $(".popBox").click(function(){
             return false;
        })
        //申请合作对话框事件绑定
    }
