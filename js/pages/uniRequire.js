



var appMain = new Vue({
     el:"#app-main",
     data:{
          database:{
               addrData:addArray,
               uni:{
                    classific:["综合类","理工类","师范类","艺术类","体育类","职业技术类"],
                    amount:majorSum,
                    unilevel:["重点","本科","大专","高职"],
                    scolars:["博士","硕士","本科","大专","高中","EMBA","其他"],
                    majors:majorArray
               },
               inc:{
                    props:incProps,
                    scale:incScale,
                    areas:["IT/通信/电子/互联网","房地产/建筑业","保险","银行","信托/担保/拍卖/典当","其他"],
                    posAmount:positionsum,
                    posData:posArray
               },
               trainway:["企业高管到校","学生入企","面议"],
               postype:["电气信息类","电子信息科学类","仪器仪表类","工商管理类","管理科学与工程类","金融类","其他"],
               welfares:["五险一金","包住","包吃","年底双薪","双休","交通补助","加班补助","话补","房补","全选"]
          },
          combiData:{
               datatype:"combi",
               header:"",
               uniApply:{
                    major:{major_1:"",major_2:""},
                    stuScale:"",
                    trainWay:"",
                    traintime:[],
               },
               incApply:{
                    pos:{
                         pos_1:"",
                         pos_2:"",
                         pos_3:""
                    },
                    posAmount:"",
                    incProps:"",
                    incScale:"",
                    incArea:{
                         incarea_1:"",
                         incarea_2:""
                    }
               },
               requireDesc:"",
               contact:{
                    person:"",
                    phone:"",
                    address:""
               }
          },
          recruitData:{
               datatype:"recruit",
               header:"",
               incReq:{
                    incArea:{
                         incarea_1:"",
                         incarea_2:""
                    },
                    incScale:"",
                    incProps:"",
                    pos:{
                         pos_1:"",
                         pos_2:"",
                         pos_3:""
                    },
                    posAmount:"",
               },
               uniApply:{
                    major:{major_1:"",major_2:""},
                    stuScale:""
               },
               date:"",
               desc:"",
               contact:{
                    person:"",
                    phone:"",
                    address:""
               }
          }
     },
     methods:{
          fontCal:function(str,type){
               if(str.length<=1000){
                    return (1000-str.length);
               }else{
                    alert("已超出最大可输入字数！");
                    if(type=="combi"){
                         this.combiData.requireDesc=this.combiData.requireDesc.substr(0,1000);
                    }else if(type=="recruit"){
                         this.recruitData.desc=this.recruitData.desc.substr(0,1000);
                    }
                    return (1000-str.length);
               }
          },
          popAddrBox:function(obj){
               $(obj).siblings(".addr-box").show();
               selectInitPos();
          },
          confirmIncAddr:function(target,type){
               var incAddress="";
               var addBox = $(target).closest(".addr-box");
               addBox.find(".sel-addr input").each(function(){
                    incAddress+=$(this).val()+"-";
               });
               incAddress+=addBox.find(".addr-ex").val();
               if(type=="combi"){
                    this.combiData.contact.address=incAddress;
                    addBox.hide();
               }else if(type=="recruit"){
                    this.recruitData.contact.address=incAddress;
                    addBox.hide();
               }

          }
     },
     mouted:function(){
          this.database.addrData.push({name:"不限",citys:[{city:"不限",conts:["不限"]}]});
          for(var key in this.database.uni){
               this.database.uni[key].push
          }
     },
     watch:{
          "combiData.showIncAddr":function(curval){
               if(curval==true){
                    selectInitPos();
               }
          },
          "recruitData.showAddr":function(curval){
               if(curval==true){
                    selectInitPos();
               }
          }
     }
})

function _init(){
     selectInitPos();
     navEventBind();
     selectTime();
     selectWelfare();
}
_init();
// selectEventBind();
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
    $("body").unbind("click").bind("click",function(){
       $(".selectee ul").hide();
    })
}

function selectTime(){
     $(".time-table .t-cell").click(function(){
          if($(this).hasClass("on")){
               $(this).removeClass("on");
          }else{
               $(this).addClass("on");
          }
     })
}
function selectWelfare(){
     $(".welfare-lis .check-box").click(function(){
          if($(this).hasClass("on")){
               $(this).removeClass("on");
          }else{
               $(this).addClass("on");
          }
     })
}
function navEventBind(){
     $(".navs ul li").each(function(index){
          $(this).click(function(){
               $(".navs ul li.on").removeClass("on");
               $(this).addClass("on");
               $(".main .nav-cont").hide();
               $($(".main .nav-cont")[index]).show();
               selectInitPos();
          })
     })
}
