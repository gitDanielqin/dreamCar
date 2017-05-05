var isLogin=false;
var parObj = EventUtils.urlExtrac(window.location);//地址参数对象
var respObj={};//页面信息
(function(){
    //如果是来自企业中心的页面
    if(parObj.type=="inc"){
         var postdemand = {
              userId:parObj.userId,
              loginIdentifier:parObj.loginId,
              demandId:parObj.demandId
         };
         // 请求企业基本信息
         var postbase = {
              userId:parObj.userId,
              loginIdentifier:parObj.loginId
         };
         // 请求企业需求信息
         EventUtils.ajaxReq("/demand/company/getInfo","get",postdemand,function(resp,status){
              console.log(resp);
              EventUtils.ajaxReq("/user/company/getInfo","get",postbase,function(resp,status){
                   console.log(resp)
                   var baseinfo = {
                        inc:resp.data.name,
                        incprops:resp.data.property,
                        incscale:resp.data.scale,
                        address:resp.data.city+"-"+resp.data.area,
                        discription:resp.data.discription
                   };
                   appMain.incdata.baseinfo = baseinfo;
                   appTop.name = resp.data.name
              });
              respObj = resp.data;
              var briefdata = {
                   title:respObj.title,
                   viewed:30,
                   applied:15,
                   publicDate:respObj.updateTime.split(" ")[0]
              };
              appBanner.incdata = briefdata;
              var addArray = respObj.address.split(';');

              var demandinfo = {
                   address:addArray[0]+" - "+addArray[1],
                   type:EventUtils.infoExtrac(respObj.type),
                   property:respObj.property,
                   job:EventUtils.infoExtrac(respObj.job),
                   jobCount:respObj.jobCount,
                   profession:EventUtils.infoExtrac(respObj.profession),
                   professionCount:respObj.professionCount,
                   trainType:respObj.trainType,
                   discription:respObj.discription,
              };
              appMain.incdata.demand = demandinfo;
              //初始化联合培养时间表
              $("#train-table .date-aval").removeClass("date-aval");
              var timeArray = respObj.trainTime.split(";");
              for(var i=0;i<timeArray.length;i++){
                   for(var j=0;j<timeArray[i].length;j++){
                        if(timeArray[i].charAt(j)=="1"){
                             $("#train-table .date-tr").eq(i).find("td").eq(j+1).addClass("date-aval");
                        }
                   }
              }
         });
         isLogin = true;
    }

})()



var appTop = new Vue({
     el:"#app-top",
     data:{
          isLogin:isLogin,
          name:"",
     },
     methods:{
          publish:function(){
               switch (parObj.type) {
                    case "inc": //如果是来自高校中心的页面
                         var link= "incRequire.html?new=1&userId="+parObj.userId+"&loginId="+parObj.loginId;
                         window.open(link,'_blank');
                         break;
                    default:
               }
          },
          toCenter:function(theme){
               if(parObj.type=="inc"){
                    var link = "incCenter.html?loginId="+parObj.loginId+"&userId="+parObj.userId+"&theme="+theme;
                    window.open(link,'_blank');
               }
          }
     }
})
var appBanner = new Vue({
     el:"#app-banner",
     data:{
          incdata:{
               title:"lalaland",
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
});
var appMain = new Vue({
     el:"#app-main",
     data:{
          incdata:{
               demand:{
                    address:"杭州市",//高校地址
                    type:"综合类",//高校类别
                    property:"重点",//高校性质
                    job:"UI设计师",//岗位名称
                    jobCount:"21-30人",//岗位数量
                    profession:"影视多媒体",//专业
                    professionCount:"40-60人",//专业人数
                    trainType:"学生入企",//联合培养方式
                    discription:"lalaland",//需求描述
               },
               baseinfo:{
                   inc:"校企职通车",
                   incprops:"国企",
                   incscale:"20-90人",
                   address:"",
                   discription:""
               }
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
          incComment:[
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
          },
          topage:function(){
              //console.log(1);
          }
     },
     components:{
         'pagination':pagination
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
