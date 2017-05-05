// 获取字段判断是否为首次发布还是修改
var parObj= EventUtils.urlExtrac(window.location);
var isNewRequire = true;
if(parObj.new!="1"){
     isNewRequire=false;
};
var appMain = new Vue({
     el:"#app-main",
     data:{
          newRequire:isNewRequire,
          showCombi:true,
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
                    areas:workareas,
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
                    stuScale:"不限",
                    trainWay:"不限",
               },
               incApply:{
                    posAmount:"不限",
                    incProps:"不限",
                    incScale:"不限",
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
          clickNav:function(type,obj){
               $(".navs ul li.on").removeClass("on");
               $(obj).addClass("on");
               if(type=="combi"){
                    this.showCombi=true;
               }else{
                    this.showCombi=false;
               }
               $(".steps li:nth-of-type(1)").removeClass("past");
               $(".steps li:nth-of-type(2)").removeClass("on");
          },
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
          },
          publishReq:function(){
               // 拼接二三级选项的字符串
               // if($(".cont-combi .sel-pos-1 input").val()){
               //      var jobstring = $(".cont-combi .sel-pos-1 input").val()+";"+$(".cont-combi .sel-pos-2 input").val()+";"+$(".cont-combi .sel-pos-3 input").val();
               // }else{
               //      var jobstring = "";
               // }
               // if($(".cont-combi .input-area-1 input").val()){
               //      var areastring = $(".cont-combi .input-area-1 input").val()+";"+$(".cont-combi .input-area-2 input").val();
               // }else{
               //      var areastring="";
               // }
               // if($(".cont-combi .sel-province input").val()){
               //      var incAddstring = $(".cont-combi .sel-province input").val()+";"+$(".cont-combi .sel-city input").val()+";"+$(".cont-combi .sel-district input").val();
               // }else{
               //      var incAddstring = "";
               // }
               // if($(".cont-combi .major-input-1 input").val()){
               //      var prostring = $(".cont-combi .major-input-1 input").val()+";"+$(".cont-combi .major-input-2 input").val()
               // }else{
               //      var prostring = "";
               // }
               if($(".cont-combi .time-table").find("td.on").length>0){
                    var timestring ="";
                    $(".cont-combi .time-table .time-tr").each(function(){
                         $(this).find("td.t-cell").each(function(){
                              timestring+=$(this).hasClass("on")?"1":"0";
                         });
                         timestring+=";";
                    });
                    timestring= timestring.slice(0,timestring.length-1);
               }else{
                    var timestring ="";
               }
               var postdata ={
                    userId:parObj.userId,
                    title:this.combiData.header,
                    job:$(".cont-combi .sel-pos-1 input").val()+";"+$(".cont-combi .sel-pos-2 input").val()+";"+$(".cont-combi .sel-pos-3 input").val(),
                    jobCount:this.combiData.incApply.posAmount,
                    property:this.combiData.incApply.incProps,
                    scale:this.combiData.incApply.incScale,
                    type:$(".cont-combi .input-area-1 input").val()+";"+$(".cont-combi .input-area-2 input").val(),
                    address:$(".cont-combi .sel-province input").val()+";"+$(".cont-combi .sel-city input").val()+";"+$(".cont-combi .sel-district input").val(),
                    profession:$(".cont-combi .major-input-1 input").val()+";"+$(".cont-combi .major-input-2 input").val(),
                    professionCount:this.combiData.uniApply.stuScale,
                    trainType:this.combiData.uniApply.trainWay,
                    trainTime:timestring,
                    discription:this.combiData.requireDesc,
                    linkMan:this.combiData.contact.person,
                    mobile:this.combiData.contact.phone,
                    schoolAddress:this.combiData.contact.address
               }
               console.log(postdata);
               EventUtils.ajaxReq('/demand/school/apply','post',postdata,function(resp,status){
                   console.log(resp);
                   window.location.href="uniCenter.html?userId="+parObj.userId+"&loginId="+parObj.loginId;
              })
          }
     },
     mounted:function(){
          $(".selectee input").val("不限");
          $(".major-input input").val("不限");
          $(".form-cont input").focus(function(){
               $(".steps li:nth-of-type(1)").addClass("past");
               $(".steps li:nth-of-type(2)").addClass("on");
          });
          selectInitInput();
          selectInitPos();
          // selectRepos();
          selectInit();
          selectTime();
     },
     watch:{
          "combiData.showIncAddr":function(curval){
               if(curval==true){
               //     selectInitPos();
               }
          },
          "recruitData.showAddr":function(curval){
               if(curval==true){
               //     selectInitPos();
               }
          }
     }
})

function selectInit(){
     $(".major-input input").each(function(index){
          $(this).width($(this).width()-20);
          $(this).css("padding-right",20+"px");
          var bgPos=$(this).width()+10+"px center";
          $(this).attr("disabled","true").css("background-position",bgPos);
     })
}
// 选择时间表事件
function selectTime(){
     $(".time-table .t-cell").click(function(){
          if($(this).hasClass("on")){
               $(this).removeClass("on");
          }else{
               $(this).addClass("on");
          }
     })
}
