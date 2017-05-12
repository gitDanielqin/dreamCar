var isLogin=false;
var parObj = EventUtils.urlExtrac(window.location);//地址参数对象
var respObj={};//页面信息
function infoRequest(){
         var postdemand = {
              demandId:parObj.demandId
         }
         EventUtils.ajaxReq("/demand/getInfo","get",postdemand,function(resp,status){
              respObj = resp.data;
              console.log(respObj);
              var baseinfo = {
                   inc:resp.data.userName,
                   incprops:resp.data.userProperty,
                   incscale:resp.data.userScale,
                   address:resp.data.userAddress,
                   discription:resp.data.userDiscription
              };
              appMain.incdata.baseinfo = baseinfo;
              var briefdata = {
                  title:respObj.title,
                  viewed:30,
                  applied:15,
                  publicDate:respObj.updateTime.split(" ")[0]
            };
            appBanner.incdata = briefdata;
            var addArray = respObj.schoolAddress.split(';');
            var demandinfo = {
                  address:addArray[0]+" - "+addArray[1],
                  type:respObj.schoolType,
                  property:respObj.schoolProperty,
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
       if(parObj.loginId&&parObj.userType){
           var getdata = {
                userId:parObj.userId,
                loginIdentifier:parObj.loginId
           }
           appTop.userType = parObj.userType;
           switch (parObj.userType) {
                case "1":  EventUtils.ajaxReq("/user/school/getInfo","get",getdata,function(resp,status){
                            appTop.userName= resp.data.name;
                            appTop.isLogin= true;
                       })
                            break;
                case "2":  EventUtils.ajaxReq("/user/company/getInfo","get",getdata,function(resp,status){
                              console.log(resp);
                             appTop.userName= resp.data.name;
                             appTop.isLogin= true;
                        })
                             break;
                default:
           }
       }
   }


   var appTop = new Vue({
        el:"#app-top",
        data:{
             isLogin:isLogin,
             userType:"0",
             userName:""
        },
        methods:{
             loginEv:function(){
                  appModal.showModal=true;
                  appModal.showLogin=true;
             },
             regisEv:function(){
                  window.open("login.html?newAcc=1","_blank");
             },
             publish:function(){
                  switch (this.userType) {
                       case "1":
                            var link= "uniRequire.html?new=1&userId="+parObj.userId+"&loginId="+parObj.loginId;
                            break;
                       case "2":
                            var link= "incRequire.html?new=1&userId="+parObj.userId+"&loginId="+parObj.loginId;
                            break;
                       default:
                  }
                  window.open(link,'_blank');
             },
             toCenter:function(theme){
                  switch (this.userType) {
                       case "0":
                            var link = "pCenter.html?loginId="+parObj.loginId+"&userId="+parObj.userId+"&theme="+theme;
                            break;
                       case "1":
                            var link = "uniCenter.html?loginId="+parObj.loginId+"&userId="+parObj.userId+"&theme="+theme;
                            break;
                       case "2":
                            var link = "incCenter.html?loginId="+parObj.loginId+"&userId="+parObj.userId+"&theme="+theme;
                            break;
                       default:

                  }
                  window.open(link,'_blank');
             },
             logout:function(){
                  this.isLogin = false;
                  appModal.login.account="";
                  appModal.login.password="";
             }
        }
   });
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
         showLogin:false,
         login:{
              account:"",
              password:""
         }
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
         loginEv:function(){
              var postdata ={
                   loginName:this.login.account,
                   password:this.login.password
              };
              EventUtils.ajaxReq("/center/user/login","post",postdata,function(resp,status){
                   parObj.userId = resp.data.userId;
                   parObj.loginId = resp.data.loginIdentifier;
                   parObj.userType = resp.data.userType;
                   appTop.userType = resp.data.userType;
                   appTop.userName = resp.data.name;
                   appTop.isLogin = true;
                   appModal.showModal = false;
                   appModal.showLogin = false;
                   console.log(resp);
              })
         }
    },
    watch:{
         'showLogin':function(curval){
              if(curval){
                   var dis_top = Math.floor(EventUtils.getViewport().height*0.2)+document.body.scrollTop+"px";
                   $(".dlg-login").css("top",dis_top);
              }
         }
    }
})

function _init(){
     infoRequest();
     selectInitPos();
     initEventBind();
}
_init();
