/**
 * Created by xuanyuan on 2016/11/27.
 */

var objMe=this;
var appPorto = new Vue({
     el:"#app-porto",
     data:{
          database:{
               date:date,
               addrData:addArray
          },
          viewInfo:true,
          newInfo:{
               gender:"男",
               birthyear:"1988",
               birthmonth:"1",
               birthday:"1",
               address:{
                    province:"浙江",
                    city:"杭州",
                    district:"滨江"
               },
               phone:"15264598745",
               state:"中国"
          },
          oldInfo:{
               gender:"男",
               birthyear:1988,
               birthmonth:1,
               birthday:1,
               address:{
                    province:"浙江",
                    city:"杭州",
                    district:"滨江区"
               },
               phone:15264598785,
               state:"在职，打算换个新环境"
          }
     },
     methods:{
          save:function(){
               this.newInfo.address.province=$("#app-porto .address .sel-province input").val();
               this.newInfo.address.city=$("#app-porto .address .sel-city input").val();
               this.newInfo.address.district=$("#app-porto .address .sel-district input").val();
               this.oldInfo=cloneObj(this.newInfo);
               this.viewInfo=true;
          },
          cancel:function(){
               this.viewInfo=true;
          },
          edit:function(){
               this.newInfo=cloneObj(this.oldInfo);
               this.viewInfo=false;
          },
          age:function(birthyear){
               var date = new Date();
               return (date.getFullYear()-birthyear);
          },
          showPre:function(){
               appModal.showModal=true;
               appModal.showPreview=true;
          },
          uploading:function(){
               appModal.showModal=true;
               appModal.showUpload=true;
          }
     },
     updated:function(){
          window.selectInitPos();
          window.selectEventBind();
     }
})

var provinceArray = [];
for(var i=0; i<addArray.length;i++){
     provinceArray.push(addArray[i].name);
}

var appCont = new Vue({
     el:"#app-content",
     data:{
          database:{
               date:date,
               address:{
                    province:provinceArray,
                    city:["杭州","新乡"],
                    district:["滨江区","红旗区"]
               },
               addrData:addArray,
               nations:nations,
               salary:salaryItems,
               major:majorArray,
               qualification:scolarship,
               posData:posArray,
               languages:[
                    "英语","法语","日语","韩语","德语","俄语","西班牙语","葡萄牙语","阿拉伯语","其他"
               ]
          },
          resume:{
               birthyear:1988,
               birthmonth:1,
               family:"已婚",
               phone:"15264598745",
               email:"xqztc@163.com",
               province:"安徽",
               nation:"汉族",
               curWorksIndex:1,
               expect:{
                    tradeItems:"互联网",
                    posItems:"IT工程师",
                    province:"浙江",
                    city:"杭州",
                    district:"滨江",
                    salary:"8000-10000"
               },
               worksExps:[{
                    show:true,
                    firma:"阿里巴巴",
                    trade:"互联网",
                    pos:"Web前端工程师",
                    province:"浙江",
                    city:"杭州",
                    district:"滨江",
                    salary:1000,
                    startyear:2010,
                    startmonth:2,
                    endyear:2016,
                    endmonth:10,
                    resp:"前端工作"}
               ],
               edus:[{
                    show:true,
                    uni:"郑州大学",
                    major:"信息技术",
                    submajor:"通信工程",
                    exmajor:"",
                    startyear:2006,
                    startmonth:2,
                    endyear:2010,
                    endmonth:10,
                    qualification:"本科",

               }],
               projects:[{
                    show:true,
                    name:"",
                    firma:"杭州黄巢信息科技有限公司",
                    startyear:2010,
                    startmonth:2,
                    endyear:2016,
                    endmonth:10,
                    desc:"校企联合培训",
                    resp:"前端工作",
                    achiev:"前端页面开发"
               }],
               laSkills:["英语","德语"],
               selfEval:"我是一个好人",
               psInfo:"我真的是一个好人",
               skills:"前端各种技术"
          },
          courses:{
               curpage:1,
               results:[
                    {name:"课程名称",score:"4.5分",Institute:"开课学院名称",content:"web前端",duration:"学习周期",fee:"学习费用",addr:"学习地点",state:"已开课",comment:"教师评语"},
                    {name:"课程名称",score:"4.5分",Institute:"开课学院名称",content:"web前端",duration:"学习周期",fee:"学习费用",addr:"学习地点",state:"课程结束",comment:"教师评语"},
                    {name:"课程名称",score:"4.5分",Institute:"开课学院名称",content:"web前端",duration:"学习周期",fee:"学习费用",addr:"学习地点",state:"未开课",comment:"教师评语"},
                    {name:"课程名称",score:"4.5分",Institute:"开课学院名称",content:"web前端",duration:"学习周期",fee:"学习费用",addr:"学习地点",state:"已开课",comment:"教师评语"},
                    {name:"课程名称",score:"4.5分",Institute:"开课学院名称",content:"web前端",duration:"学习周期",fee:"学习费用",addr:"学习地点",state:"已开课",comment:"教师评语"},
                    {name:"课程名称",score:"4.5分",Institute:"开课学院名称",content:"web前端",duration:"学习周期",fee:"学习费用",addr:"学习地点",state:"已开课",comment:"教师评语"},
                    {name:"课程名称",score:"4.5分",Institute:"开课学院名称",content:"web前端",duration:"学习周期",fee:"学习费用",addr:"学习地点",state:"已开课",comment:"教师评语"},
               ]
          },
          colStuList:{
               curpage:1,
               results:[
                    {name:"课程名称",score:"4.5分",Institute:"开课学院名称",content:"web前端",duration:"学习周期",fee:"学习费用",addr:"学习地点",InScale:5000},
                    {name:"课程名称",score:"4.5分",Institute:"开课学院名称",content:"web前端",duration:"学习周期",fee:"学习费用",addr:"杭州-滨江",InScale:5000},
                    {name:"课程名称",score:"4.5分",Institute:"开课学院名称",content:"web前端",duration:"学习周期",fee:"学习费用",addr:"学习地点",InScale:5000},
                    {name:"课程名称",score:"4.5分",Institute:"开课学院名称",content:"web前端",duration:"学习周期",fee:"学习费用",addr:"学习地点",InScale:5000},
                    {name:"课程名称",score:"4.5分",Institute:"开课学院名称",content:"web前端",duration:"学习周期",fee:"学习费用",addr:"学习地点",InScale:5000},
                    {name:"课程名称",score:"4.5分",Institute:"开课学院名称",content:"web前端",duration:"学习周期",fee:"学习费用",addr:"学习地点",InScale:5000},
               ]
          },
          colPosList:{
               curpage:1,
               results:[
                    {pos:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},posAmount:2,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",IncScale:"20-99人",publicDate:"2017-11-11"},
                    {pos:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},posAmount:2,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",IncScale:"20-99人",publicDate:"2017-11-11"},
                    {pos:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},posAmount:2,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",IncScale:"20-99人",publicDate:"2017-11-11"},
                    {pos:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},posAmount:2,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",IncScale:"20-99人",publicDate:"2017-11-11"},
                    {pos:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},posAmount:2,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",IncScale:"20-99人",publicDate:"2017-11-11"},
                    {pos:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},posAmount:2,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",IncScale:"20-99人",publicDate:"2017-11-11"},
                    {pos:"UI设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},posAmount:2,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",IncScale:"20-99人",publicDate:"2017-11-11"}
               ]
          },
          colRecList:{
               curpage:1,
               results:[
                    {title:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},recruitDate:"2016-12-11",posAmount:20,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",publicDate:"2017-11-11"},
                    {title:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},recruitDate:"2016-12-11",posAmount:20,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",publicDate:"2017-11-11"},
                    {title:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},recruitDate:"2016-12-11",posAmount:20,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",publicDate:"2017-11-11"},
                    {title:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},recruitDate:"2016-12-11",posAmount:20,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",publicDate:"2017-11-11"},
                    {title:"UI设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},recruitDate:"2016-12-11",posAmount:20,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",publicDate:"2017-11-11"},
                    {title:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},recruitDate:"2016-12-11",posAmount:20,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",publicDate:"2017-11-11"}
               ]
          },
          myPosList:{
               curpage:1,
               results:[
                    {title:"职位名称",salary:"年薪",addr:"地区",scolar:'学历要求',worksexp:"经验要求",postdate:"2016-10-25",inc:"公司名称",state:0},
                    {title:"职位名称",salary:"年薪",addr:"地区",scolar:'学历要求',worksexp:"经验要求",postdate:"2016-10-25",inc:"杭州煌巢科技技术有限公司",state:1},
                    {title:"职位名称",salary:"年薪",addr:"地区",scolar:'学历要求',worksexp:"经验要求",postdate:"2016-10-25",inc:"公司名称",state:0},
                    {title:"职位名称",salary:"年薪",addr:"地区",scolar:'学历要求',worksexp:"经验要求",postdate:"2016-10-25",inc:"公司名称",state:2},
                    {title:"职位名称",salary:"年薪",addr:"地区",scolar:'学历要求',worksexp:"经验要求",postdate:"2016-10-25",inc:"公司名称",state:0},
               ]
          }

     },
     methods:{
          remainText:function(text){
               if(1000-text.length<0){
                    return 0;
               }
               return (1000-text.length)
          },
          checkText:function(type,index){
               if(type=="worksresp"){
                    var len = this.resume.worksExps[index].resp.length;
                    if(len>1000){
                         alert("最多只能输入1000字！");
                         this.resume.worksExps[index].resp=this.resume.worksExps[index].resp.slice(0,1000);
                    }
               }else if(type=="prodesc"){
                    var len = this.resume.projects[index].desc.length;
                    if(len>1000){
                         alert("最多只能输入1000字！");
                         this.resume.projects[index].desc=this.resume.projects[index].desc.slice(0,1000);
                    }
               }else if(type=="proresp"){
                    var len = this.resume.projects[index].resp.length;
                    if(len>1000){
                         alert("最多只能输入1000字！");
                         this.resume.projects[index].resp=this.resume.projects[index].resp.slice(0,1000);
                    }
               }else if(type=="proachiev"){
                    var len = this.resume.projects[index].achiev.length;
                    if(len>1000){
                         alert("最多只能输入1000字！");
                         this.resume.projects[index].achiev=this.resume.projects[index].achiev.slice(0,1000);
                    }
               }else if(type=="selfeval"){
                    var len = this.resume.selfEval.length;
                    if(len>1000){
                         alert("最多只能输入1000字！");
                         this.resume.selfEval=this.resume.selfEval.slice(0,1000);
                    }
               }else if(type=="psinfo"){
                    var len = this.resume.psInfo.length;
                    if(len>1000){
                         alert("最多只能输入1000字！");
                         this.resume.psInfo=this.resume.psInfo.slice(0,1000);
                    }
               }else if(type=="skill"){
                    var len = this.resume.skills.length;
                    if(len>1000){
                         alert("最多只能输入1000字！");
                         this.resume.skills=this.resume.skills.slice(0,1000);
                    }
               }
          },
          popTrade:function(type){
               appModal.showModal=true;
               appModal.showTrade=true;
          },
          popTradeSingle:function(index){
               appModal.showModal=true;
               this.resume.curWorksIndex=index;
               appModal.showTradeSingle=true;

          },
          showPre:function(){
               appModal.showModal=true;
               appModal.showPreview=true;
               $(window).scrollTop(0);
          },
          checkLan:function(target,language){
               if(target.checked&&this.resume.laSkills.indexOf(language)<0){
                    this.resume.laSkills.push(language);
               }
               if(!target.checked){
                    this.resume.laSkills.remove(language);
               }
          },
          addWorksexp:function(){
               for(var i=0; i<this.resume.worksExps.length; i++){
                    this.resume.worksExps[i].show=false;
               }
               var worksexp = cloneObj(this.resume.worksExps[0]);
               for(var key in worksexp){
                    worksexp[key] = "";
               }
               worksexp.show = true;
               this.resume.worksExps.push(worksexp);
          },
          workSwipe:function(index){
               for(var i=0; i<this.resume.worksExps.length; i++){
                    this.resume.worksExps[i].show=false;
               }
               this.resume.worksExps[index].show=true;
          },
          addEdu:function(){
               for(var i=0; i<this.resume.edus.length; i++){
                    this.resume.edus[i].show=false;
               };
               var edusExp ={
                    show:true,
                    uni:"",
                    major:"",
                    submajor:"",
                    exmajor:"",
                    startyear:2010,
                    startmonth:2,
                    endyear:2016,
                    endmonth:10,
                    qualification:"",
               };
               this.resume.edus.push(edusExp);
          },
          eduSwipe:function(index){
               for(var i=0; i<this.resume.edus.length; i++){
                    this.resume.edus[i].show=false;
               };
               this.resume.edus[index].show=true;
          },
          addProject:function(){
               for(var i=0; i<this.resume.projects.length; i++){
                    this.resume.projects[i].show=false;
               };
               var project = {
                    show:true,
                    name:"",
                    firma:"杭州黄巢信息科技有限公司",
                    startyear:2010,
                    startmonth:2,
                    endyear:2016,
                    endmonth:10,
                    desc:"",
                    resp:"",
                    achiev:""
               };
               this.resume.projects.push(project);
          },
          projectSwipe:function(index){
               for(var i=0; i<this.resume.projects.length; i++){
                    this.resume.projects[i].show=false;
               }
               this.resume.projects[index].show=true;
          },
          edit:function(){
               $(".view").hide();
               $(".edit").show();
          },
          submit:function(){
               $(".edit").hide();
               $(".view").show();
          },
          deleteItem:function(type,index){
               if(type=="worksexp"){
                    this.resume.worksExps.splice(index,1);
               }else if(type=="edu"){
                    this.resume.edus.splice(index,1)
               }
          },
          stateCss:function(state){
               if(state=="已开课"){
                    return "begin";
               }else if(state=="课程结束"){
                    return "after";
               }else{
                    return "before";
               }
          },
          showResult:function(index,curpage,itemsnum){
               if(index>=(parseInt(curpage)-1)*parseInt(itemsnum)&&index<parseInt(curpage)*parseInt(itemsnum)){
                    return true;
               }else{
                    return false;
               }
          },
          pagesum:function(totalitems){
               var totalpage =1;
               if(totalitems%3==0){
                    totalpage = totalitems/3
               }else{
                    totalpage = Math.floor(totalitems/3)+1;
               }
               return totalpage;
          },
          showpage:function(totalitems){
               var totalpage =1;
               if(totalitems%3==0){
                    totalpage = totalitems/3
               }else{
                    totalpage = Math.floor(totalitems/3)+1;
               }
               if(totalpage<3){
                    return totalpage;
               }else{
                    return 3;
               }
          },
          topage:function(page,type){
               if(type=="course"){
                    this.courses.curpage=page;
               }else if(type=="col-study"){
                    this.colStuList.curpage=page;
               }else if(type=="col-pos"){
                    this.colPosList.curpage=page;
               }else if(type=="col-rec"){
                    this.colRecList.curpage=page;
               }else if(type=="my-pos"){
                    this.myPosList.curpage=page;
               }
          }
     },
     updated:function(){
          window.selectInitPos();
          window.selectEventBind();
     },
     components:{
          'pagination':pagination
     }
});

var appModal = new Vue({
     el:"#app-modal",
     data:{
          checkedTrades:[],
          showModal:false,
          showTrade:false,
          showTradeSingle:false,
          showPreview:false,
          showUpload:false,
          trades:workareas,
          baseInfo:appPorto.oldInfo,
          resumeInfo:appCont.resume,
     },
     methods:{
          closePorto:function(){
               this.showUpload=false;
               this.showModal=false;
          },
          closeTrade:function(){
               this.showTrade=false;
               this.showTradeSingle=false;
               this.showModal=false;
          },
          checkfunc:function(item,target){
               if(!target.checked){
                    this.checkedTrades.remove(item);
               }else if(this.checkedTrades.length>=3){
                    target.checked=false;
                    return false;
               }else{
                    this.checkedTrades.push(item);
               }
          },
          submitTrade:function(type){
               if(type=="expect"){
                    appCont.resume.expect.tradeItems = this.checkedTrades.join();
                    this.showTrade=false;
               }else if(type=="worksexp"){
                    var index = appCont.resume.curWorksIndex;
                    appCont.resume.worksExps[index].trade = $(".trade-single-table input[type='radio']:checked").val();
                    this.showTradeSingle=false;
               }
               this.showModal=false;
          },
          cancelTrade:function(){
               this.showTrade=false;
               this.showTradeSingle=false;
               this.showModal=false;
          },
          hidemodal:function(){
               this.showModal=false;
               this.showTrade=false;
               this.showPreview=false;
          },
          stayshow:function(ev){
               ev.stopPropagation();
               return false;
          },
     },
     watch:{
          "this.showUpload":function(curval){
               if(curval){

               }
          },
          'showTradeSingle':function(curval){
               if(curval){
                    var top = Math.floor($(window).height()*0.15+$("body").scrollTop())+"px";
                    $(".trade-box-single").css("margin-top",top);
               }
          },
          'showTrade':function(curval){
               if(curval){
                    var top = Math.floor($(window).height()*0.15+$("body").scrollTop())+"px";
                    $(".trade-box-multi").css("margin-top",top);
               }
          }
     }
});
function init_center(){
     selectInitPos();
    init_safepos();
    selectEventBind();
    editEventBind();
   // init_paneAdd();
    navEventBind();
    modalEventBind();
    uploadEventBind();
}
init_center();

function uploadEventBind(){
     var options = {
         thumbBox: '.thumbBox',
	    spinner: '.spinner',
	    imgSrc: 'images/avatar.png'
    };
    var cropper = $('.imgBox').cropbox(options);
      $('#upload-file').on('change', function () {
          var reader = new FileReader();
          reader.onload = function (e) {
              options.imgSrc = e.target.result;
              cropper = $('.imgBox').cropbox(options);
          }
          reader.readAsDataURL(this.files[0]);
          this.files = [];
     });
     $('.zoom-in').on('click', function () {
          cropper.zoomIn();
     });
     $('.zoom-out').on('click', function () {
           cropper.zoomOut();
      });

      $('#btnSubmit').on('click', function () {
          //      var img = cropper.getDataURL().replace('data:image/png;base64,', '');
               //  var url = 'AvatarHandler.ashx';
               //  var data = {
               //      action: "add",
               //      picStr: img
               //  };
               //  $.ajax(url, {
               //      type: 'post',
               //      data: data,
               //      success: function (data) {
               //
               //      },
               //      error: function (XMLHttpRequest, textStatus, errorThrown) {
                //
               //      }
               //  });
               // $('.cropped').append('<img src="' + img + '" align="absmiddle" style="width:64px;margin-top:4px;border-radius:64px;box-shadow:0px 0px 12px #7E7E7E;" ><p>64px*64px</p>');
               var imgsrc= cropper.getDataURL();
               //console.log(imgsrc);
               //$("#porto-img").html('');
               //console.log($("#porto-img").length);
               $(".porto-img").html("<img src='"+ imgsrc +"' />");
               appModal.showUpload=false;
               appModal.showModal=false;
          //     css("src",cropper.getDataURL());

            })
}

// 页面编辑事件绑定
function editEventBind(){
     var oldResume = cloneObj(appCont.resume);

          $(".resumeBox .btn-edit").click(function(){
               var editName =  $(this).closest(".view-item").attr("name");
               $(this).closest(".view-item").hide();
               $(".resumeBox .edit-item[name="+editName+"]").show();
               oldResume = cloneObj(appCont.resume);
          });
          $(".resumeBox .edit-item .buttons button:nth-of-type(1)").click(function(){
               var editBlock = $(this).closest(".edit-item");
               var viewName =  editBlock.attr("name");
               if(viewName=="trade"){
                    appCont.resume.expect.province=editBlock.find(".sel-province input").val();
                    appCont.resume.expect.city=editBlock.find(".sel-city input").val();
                    appCont.resume.expect.district=editBlock.find(".sel-district input").val();
               }else if(viewName=="work"){
                    editBlock.find(".pane").each(function(index){
                         appCont.resume.worksExps[index].province=$(this).find(".address .sel-province input").val();
                         appCont.resume.worksExps[index].city=$(this).find(".address .sel-city input").val();
                         appCont.resume.worksExps[index].district=$(this).find(".address .sel-district input").val();
                    })
               }else if(viewName=="edu"){
                    editBlock.find(".pane").each(function(index){
                         appCont.resume.edus[index].major = $(this).find(".major-input-1 input").val();
                         appCont.resume.edus[index].submajor = $(this).find(".major-input-2 input").val();
                         appCont.resume.edus[index].exmajor = $(this).find(".ex-major").val();
                    })
               }
               editBlock.hide();
               $(".resumeBox .view-item[name="+viewName+"]").show();
          });
          $(".resumeBox .edit-item .buttons button:nth-of-type(2)").click(function(){
               appCont.resume = cloneObj(oldResume);
               var viewName =  $(this).closest(".edit-item").attr("name");
               $(this).closest(".edit-item").hide();
               $(".resumeBox .view-item[name="+viewName+"]").show();
          })
}
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
function init_safepos(){
    var p_left= Math.floor($(".safe-range p").width()*$(".safe-range").width()/100)-16+"px";
    $(".r-pointer").css("left",p_left);
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
function modalEventBind(){
    $(".bind-acc button.chg-phone").click(function(){
        $(".modal").show();
        $(".modal").children().hide();
        $(".modal .phone-change").show();
        $(".close").unbind("click").bind("click",function(){
            $(this).closest("div").hide();
            $(".modal").hide();
        })
    });
    $(".bind-acc button.wechatBind").click(function(){
        $(".modal").show();
        $(".modal").children().hide();
        $(".modal .wechat-bind").show();
        $(".close").unbind("click").bind("click",function(){
            $(this).closest("div").hide();
            $(".modal").hide();
        });
    });
    $(".msg-center").click(function(){
        $(".modal").show();
        $(".modal").children().hide();
        $(".modal .msg-box").show();
    })
    $(".msg-body li").bind("click",function(){
        $(".show01").hide();
        $(".show02").show();
        $(".msg-head").text("系统消息");
    })
    $(".back").click(function(){
        $(".show02").hide();
        $(".show01").show();
        $(".msg-head").text("消息中心");
    })
    $(".close").unbind("click").bind("click",function(){
        $(this).closest("div").hide();
        $(".modal").hide();
    })
}
