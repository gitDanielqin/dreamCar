var appMain = new Vue({
     el:"#app-main",
     data:{
          showpage:{
               page1:true,
               page2:false,
               page3:false
          },
          database:{
               addrData:addArray,
               uni:{
                    classific:uniclassific,
                    amount:majorSum,
                    unilevel:unilevel,
                    scolars:scolarship,
                    majors:majorArray
               },
               inc:{
                    worksexp:worksexp,
                    salary:salaryItems
               },
               trainway:["企业高管到校","学生入企","面议"],
               posdata:posArray,
               welfares:["五险一金","包住","包吃","年底双薪","双休","交通补助","加班补助","话补","房补","全选"]
          },
          combiData:{
               datatype:"combi",
               header:"",
               incReq:{
                    major:{major_1:"",major_2:""},
                    stuScale:"",
                    uniLevel:"",
                    uniClassific:"",
               },
               incApply:{
                    pos:{
                         pos_1:"",
                         pos_2:"",
                         pos_3:""
                    },
                    posAmount:"",
                    trainWay:"",
                    traintime:[],
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
               postype:{
                    postype_1:"",
                    postype_2:""
               },
               amount:"",
               scolar:"",
               gender:"",
               worksexp:"",
               salary:"",
               date:"",
               desc:"",
               contact:{
                    person:"",
                    phone:"",
                    address:""
               }
          },
          directData:{
               datatype:"direct",
               header:"",
               postype:{
                    postype_1:"",
                    postype_2:""
               },
               amount:"",
               scolar:"",
               gender:"",
               worksexp:"",
               salary:"",
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
                    this.showpage.page1=true;
                    this.showpage.page2=false;
                    this.showpage.page3=false;
               }else if(type=="recruit"){
                    this.showpage.page1=false;
                    this.showpage.page2=true;
                    this.showpage.page3=false;
               }else if(type=="direct"){
                    this.showpage.page1=false;
                    this.showpage.page2=false;
                    this.showpage.page3=true;
               }
               $(".steps li:nth-of-type(1)").removeClass("past");
               $(".steps li:nth-of-type(2)").removeClass("on");
               selectInitPos();
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
                    }else if(type=="direct"){
                         this.directData.desc=this.directData.desc.substr(0,1000);
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
               }else if(type=="recruit"){
                    this.recruitData.contact.address=incAddress;
               }else if(type=="direct"){
                    this.directData.contact.address=incAddress;
               }
               addBox.hide();
          }
     },
     mounted:function(){
          $(".selectee input").val("不限");
          $(".major-input input").val("不限");
          $(".form-cont input").focus(function(){
               $(".steps li:nth-of-type(1)").addClass("past");
               $(".steps li:nth-of-type(2)").addClass("on");
          });
          selectInitPos();
          selectTime();
          selectWelfare();
     }
})
// 下拉框位置选择
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
//时间表选择事件
function selectTime(){
     $(".time-table .t-cell").click(function(){
          if($(this).hasClass("on")){
               $(this).removeClass("on");
          }else{
               $(this).addClass("on");
          }
     })
}
// 福利点击事件
function selectWelfare(){
     $(".welfare-lis .check-box").click(function(){
          if($(this).hasClass("on")){
               $(this).removeClass("on");
          }else{
               $(this).addClass("on");
          }
     })
}
