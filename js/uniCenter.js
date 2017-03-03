
var appPorto = new Vue({
    el: "#app-porto",
    data: {
        viewInfo: true,
        uni: "中国美术学院",
        classic: "重点大学",
        address: {
            province: "浙江",
            city: "杭州",
            district: "滨江"
        },
        email: "xqztc@qq.com"
    }
});
var appCont = new Vue({
    el: "#app-content",
    data:{
         database:{
              classific:["综合类","理工类","师范类","艺术类","体育类","职业技术类"],
              amount:["1-10000","10001-20000","20001-30000","30001-40000","40000以上",],
              unilevel:["重点","本科","大专","高职"],
              majors:[
                   {major:"艺术",submajor:["行为艺术","人体艺术"]},
                   {major:"信息技术",submajor:["计算机科学","通信工程"]},
                   {major:"经济",submajor:["国民经济","企业经济"]},
              ],
         },
         resume:{
              uni:"中国美术学院",
              classific:"艺术类",
              amount:"",
              level:"重点",
              specialLv:"",
              specialmajor:[
                   {major:"艺术",submajor:"行为艺术"},
                   {major:"艺术",submajor:"行为艺术"}
              ],
              intro:"世界一流的艺术大学",
              firstEdit:true,
              edit:true,
              view:false
         },
         require:{
              state:"全部状态",
              items:[
                   {classic:"校企合作",major:"专业名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",trainWay:"企业提供的培训方式",uniname:"高校名称",uniLevel:"高校性质",date:"2017.11.11"},
                   {classic:"校企合作",major:"通信工程",IncProps:"国有企业",IncScale:"600人以上",IncArea:"通信技术",trainWay:"到校培训",uniname:"浙江大学",uniLevel:"重点大学",date:"2017.11.11"},
                   {classic:"招聘会",major:"专业名称",IncProps:"企业性质",IncScale:"企业规模",IncPos:"岗位名称",unireq:"高校对企要求",majorScale:"专业人数",IncArea:"通信技术",trainWay:"到校培训",uniname:"浙江大学",uniLevel:"重点大学",date:"2017.11.11",recruitDate:"招聘会时间",recruitAddr:"地点"},
              ],
              showCombi:true,
              showRecruit:true
         },
         collect:{
              state:"全部状态",
              items:[
                   {pos:"岗位名称",major:"专业",stuScale:"人数",IncName:"公司名称",publicDate:"发布时间",IncProps:"企业性质",uniApply:"高校需要提供的",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",date:"2017.11.11",time:"24:00"},
                   {pos:"岗位名称",major:"专业",stuScale:"人数",IncName:"公司名称",publicDate:"发布时间",IncProps:"企业性质",uniApply:"高校需要提供的",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",date:"2017.11.11",time:"24:00"},
                   {pos:"岗位名称",major:"专业",stuScale:"人数",IncName:"公司名称",publicDate:"发布时间",IncProps:"企业性质",uniApply:"高校需要提供的",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",date:"2017.11.11",time:"24:00"}
              ],
         },
         message:{
              combi:{
                   state:"全部状态",
                   items:[
                        {code:"01",pos:"岗位名称",major:"专业",stuScale:"人数",uniLevel:"高校性质",uniApply:"高校需要提供的",IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00"},
                        {code:"02",major:"专业名称",IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",trainWay:"企业提供的培训方式",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00",applystate:"01"},
                        {code:"02",major:"专业名称",IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",trainWay:"企业提供的培训方式",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00",applystate:"03"},
                   ]
              },
              recruit:{
                   state:"全部状态",
                   items:[
                        {major:"工业设计",salary:"7K-9K",posAmount:"20人",qualific:"本科",IncAddress:{province:"浙江省",city:"杭州市",district:"滨江区"},IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00"},
                        {major:"工业设计",salary:"7K-9K",posAmount:"20人",qualific:"本科",IncAddress:{province:"浙江省",city:"杭州市",district:"滨江区"},IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00"},
                        {major:"工业设计",salary:"7K-9K",posAmount:"20人",qualific:"本科",IncAddress:{province:"浙江省",city:"杭州市",district:"滨江区"},IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00"}
                   ]
              }
         },
         vip:{
              records:[
                 {date:"2017.01.01", action:"信息刷新：4条", price:0, state:"交易完成"},
                 {date:"2017.01.01", action:"信息置顶：1次", price:0, state:"交易完成"},
                 {date:"2017.01.01", action:"广告投放：1次", price:0, state:"交易完成"},
                 {date:"2017.01.01", action:"信息匹配：4条", price:0, state:"交易完成"},
                 {date:"2017.01.01", action:"账户充值", price:500.68, state:"交易完成"}
              ]
         }
    },
    watch:{
      "require.state":function(curval,oldval){
           if(curval=="全部状态"){
                $(".requireBox .info-items li").show();
           }else if(curval=="校企合作"){
                $(".requireBox .info-items li[name='校企合作']").show();
                $(".requireBox .info-items li[name='招聘会']").hide();
           }else if(curval=="招聘会"){
                $(".requireBox .info-items li[name='校企合作']").hide();
                $(".requireBox .info-items li[name='招聘会']").show();
           }
      },
      "collect.state":function(curval,oldval){
           var mydate = new Date();
           if(curval=="全部状态"){
                $(".collectBox .info-items li").show();
           }else if(curval=="近一个星期"){

           }
      }
    },
    methods:{
         submajors:function(major){
              var arr =[];
              if(major){
                   for(var i=0; i<this.database.majors.length;i++){
                        if(this.database.majors[i].major==major){
                             return this.database.majors[i].submajor;
                        }
                   }
              }
         },
         addMajors:function(){
              if(this.resume.specialmajor.length<5){
                   this.resume.specialmajor.push({major:"",submajor:""});
              }else{
                   return false;
              }

         },
         editSwipe:function(){
              this.resume.firstEdit=false;
              this.resume.edit=true;
              this.resume.view=false;
         },
         saveResume:function(){
              this.resume.edit=false;
              this.resume.view=true;
         },
         checkExlv:function(){
              this.resume.specialLv=$(".uni-level input[type='radio']:checked").val();
         },
         delItem:function(item){
              this.require.items.remove(item);
         },
         priceCal1:function(val){
              var priceInt = parseInt(val);
              if(priceInt==0){
                   return "- "+priceInt;
              }else if(priceInt>0){
                   return "+ "+priceInt;
              }
         },
         priceCal2:function(val){
              var priceF=(parseFloat(val)*100-parseInt(val)*100)%100;
          //    if(priceF*10%1==0) priceF+="0";
          if(priceF<10) priceF+="0";
              return ("."+priceF);
         }

    },
    computed:{
         majorArr:function(){
              var arr =[];
              for(var i=0; i<this.database.majors.length;i++){
                   arr.push(this.database.majors[i].major);
              }
              return arr;
         },
         wordscal:function(){
              return (1000-this.resume.intro.length);
         },
         combimsg:function(){
              var total=0;
              for(var i=0; i<this.message.combi.items.length;i++){
                   if(this.message.combi.items[i].code==01){
                        total++;
                   }
              };
              return total;
         }
    },
    updated:function(){
         selectInitPos();
         selectEventBind();
    }
});

function init_center(){
     selectInitPos();
 //   init_pos();
    selectEventBind();
  //  editEventBind();
   // init_paneAdd();
   navEventBind();
   showContact();
 //   modalEventBind();
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
function showContact(){
     $(".message-btn .to-contact").bind({
          "mouseover":function(){
               $(this).siblings(".contact-box").show();
          },
          "mouseout":function(){
               $(this).siblings(".contact-box").hide();
          }
     });
     $(".state-line .to-contact").bind({
          "mouseover":function(){
               if($(this).hasClass("on")){
                    $(this).parent().siblings(".contact-box").show();
               }

          },
          "mouseout":function(){
               if($(this).hasClass("on")){
                    $(this).parent().siblings(".contact-box").hide();
               }

          }
     })
}
