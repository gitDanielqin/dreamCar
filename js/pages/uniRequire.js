// 获取字段判断是否为首次发布还是修改
var parObj= EventUtils.urlExtrac(window.location);
var isNewRequire = true;
if(parObj.new&&parObj.new!="1"){ //非新需求
     isNewRequire=false;
     var pageindex = parObj.demandType;
     (function(){
          var postdata={
               userId:parObj.userId,
               loginIdentifier:parObj.loginId,
               demandId:parObj.demandId
          }
          EventUtils.ajaxReq("/demand/school/getInfo","get",postdata,function(resp,status){
               respObj = resp.data;
               console.log(respObj);
               if(pageindex=="0"){//如果是校企合作需求详情
                    var combidata ={
                         datatype:"combi",
                         header:respObj.title,
                         initAddress:{
                              province:respObj.address.split(";")[0],
                              city:respObj.address.split(";")[1],
                              district:respObj.address.split(";")[2]
                         },
                         initPosition:{
                              pos_1:respObj.job.split(";")[0],
                              pos_2:respObj.job.split(";")[1],
                              pos_3:respObj.job.split(";")[2]
                         },
                         uniApply:{
                              stuScale:respObj.professionCount,
                              trainWay:respObj.trainType,
                         },
                         incApply:{
                              posAmount:respObj.jobCount,
                              incProps:respObj.property,
                              incScale:respObj.scale,
                         },
                         requireDesc:respObj.discription,
                         contact:{
                              person:respObj.linkMan,
                              phone:respObj.mobile,
                              address:respObj.schoolAddress
                         }
                    }
                    appMain.combiData = combidata;
               };
               // 专业数据
               $(".cont-combi .major-input-1 input").val(respObj.profession.split(";")[0]);
               $(".cont-combi .major-input-2 input").val(respObj.profession.split(";")[1]);
               // 企业行业
               $(".cont-combi .input-area-1 input").val(respObj.type.split(";")[0]);
               $(".cont-combi .input-area-2 input").val(respObj.type.split(";")[1]);

               //初始化联合培养时间表
               $(".cont-combi .time-table td.on").removeClass("on");
               var timeArray = respObj.trainTime.split(";");
               for(var i=0;i<timeArray.length;i++){
                    for(var j=0;j<timeArray[i].length;j++){
                         if(timeArray[i].charAt(j)=="1"){
                              $(".cont-combi .time-table .time-tr").eq(i).find("td.t-cell").eq(j).addClass("on");
                         }
                    }
               }
          });
     })()
};
var appTop = new Vue({
     el:"#app-top",
     data:{
          centerLink:"uniCenter.html?userId="+parObj.userId+"&loginId="+parObj.loginId
     },
     methods:{
          showMsg:function(){
               appModal.show.modal=true;
               appModal.show.message=true;
          }
     }
})
var appMain = new Vue({
     el:"#app-main",
     data:{
          newRequire:isNewRequire,
          showCombi:pageindex=="0"||isNewRequire,
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
               initPosition:{
                    pos_1:"不限",
                    pos_2:"不限",
                    pos_3:"不限"
               },
               initAddress:{
                    province:"不限",
                    city:"不限",
                    district:"不限"
               },
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
               // selectInitPos();
               $(".pop-major").hide();
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
               selectInitPos();
          },
          confirmIncAddr:function(target,type){
               var incAddress="";
               var addBox = $(target).closest(".addr-box");
               addBox.find(".sel-addr input").each(function(){
                    incAddress+=$(this).val()+"-";
               });
               if(addBox.find(".addr-ex").val()!=""){
                    incAddress+=addBox.find(".addr-ex").val();
               }else{
                    incAddress = incAddress.slice(0,-1);
               }
               if(type=="combi"){
                    this.combiData.contact.address=incAddress;
                    addBox.hide();
               }else if(type=="recruit"){
                    this.recruitData.contact.address=incAddress;
                    addBox.hide();
               }
          },
          publishReq:function(){
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
               //var linkAddress = this.combiData.contact.address.split("-").join(";");
               var postdata ={
                    userId:parObj.userId,
                    title:this.combiData.header,
                    demandType:1,
                    job:$(".cont-combi .sel-pos-1 input").val()+";"+$(".cont-combi .sel-pos-2 input").val()+";"+$(".cont-combi .sel-pos-3 input").val(),
                    jobCount:this.combiData.incApply.posAmount,
                    companyProperty:this.combiData.incApply.incProps,
                    companyScale:this.combiData.incApply.incScale,
                    companyType:$(".cont-combi .input-area-1 input").val()+";"+$(".cont-combi .input-area-2 input").val(),
                    companyAddress:$(".cont-combi .sel-province input").val()+";"+$(".cont-combi .sel-city input").val()+";"+$(".cont-combi .sel-district input").val(),
                    profession:$(".cont-combi .major-input-1 input").val()+";"+$(".cont-combi .major-input-2 input").val(),
                    professionCount:this.combiData.uniApply.stuScale,
                    trainType:this.combiData.uniApply.trainWay,
                    trainTime:timestring,
                    discription:this.combiData.requireDesc,
                    linkMan:this.combiData.contact.person,
                    mobile:this.combiData.contact.phone,
                    schoolAddress:this.combiData.contact.address.split("-").join(";")
               }
               console.log(postdata);
          //      EventUtils.ajaxReq('/demand/apply','post',postdata,function(resp,status){
          //          console.log(resp);
          //          window.location.href="uniCenter.html?userId="+parObj.userId+"&loginId="+parObj.loginId+"&theme=require";
          //     })
          }
     },
     mounted:function(){
          $(".selectee input").val("不限");
          $(".major-input input").val("不限");
          $(".form-cont input").focus(function(){
               $(".steps li:nth-of-type(1)").addClass("past");
               $(".steps li:nth-of-type(2)").addClass("on");
          });
          $("body").click(function(){
               $(".pop-major").hide();
               $(".addr-box").hide();
          })
          selectInitInput();
          selectInitPos();
          navEventBind();
          // selectRepos();
          selectInit();
          selectTime();
     },
     watch:{
          "combiData.showIncAddr":function(curval){
               if(curval==true){
               //    selectInitPos();
               }
          },
          "recruitData.showAddr":function(curval){
               if(curval==true){
                //   selectInitPos();
               }
          }
     }
})

var appModal = new Vue({
     el:"#app-modal",
     data:{
          show:{modal:false,message:false}
     },
     methods:{
          closeMsg:function(){
               this.show.message = false;
               this.show.modal = false;
          }
     }
})

function navEventBind(){//头部导航栏事件绑定
     $(".navs ul li").click(function(){
          $(".navs .on").removeClass("on");
          $(this).addClass("on");
          $(".nav-cont").hide();
          $(".cont-"+$(this).attr("name")).show();
          $(".pop-major").hide();
          $(".steps li:nth-of-type(1)").removeClass("past");
          $(".steps li:nth-of-type(2)").removeClass("on");
          selectInitPos();
     })
}
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
