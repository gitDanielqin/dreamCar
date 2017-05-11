/**
 * Created by xuanyuan on 2016/12/31.
 */
 var isLogin=false;
 var parObj = EventUtils.urlExtrac(window.location);//地址参数对象
 var respObj={};//页面信息
 var subposArray = [];
 (function(){
      //提取出二级职位信息
      for(var i=0; i<posArray.length;i++){
                for(var j=0;j<posArray[i].subpos.length;j++){
                     if(posArray[i].subpos[j].name!="不限"){
                          subposArray.push(posArray[i].subpos[j]);
                     }
                }
           };
      subposArray.push({name:"不限",subpos:["不限"]});
      var postdata = {
           demandType:2,
           index:1,
           count:8
      }
      EventUtils.ajaxReq("/demand/getList","get",postdata,function(resp,status){
           console.log(resp);
           appResult.incList.totalpages = resp.data.totalPage;
           appResult.incList.results = resp.data.list;
      })
 })()

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
                          var link= "uniRequire.html?new=1&userId="+respObj.userId+"&loginId="+respObj.loginId;
                          break;
                     case "2":
                          var link= "incRequire.html?new=1&userId="+respObj.userId+"&loginId="+respObj.loginId;
                          break;
                     default:
                }
                window.open(link,'_blank');
           },
           toCenter:function(theme){
                switch (this.userType) {
                     case "0":
                          var link = "pCenter.html?loginId="+respObj.loginId+"&userId="+respObj.userId+"&theme="+theme;
                          break;
                     case "1":
                          var link = "uniCenter.html?loginId="+respObj.loginId+"&userId="+respObj.userId+"&theme="+theme;
                          break;
                     case "2":
                          var link = "incCenter.html?loginId="+respObj.loginId+"&userId="+respObj.userId+"&theme="+theme;
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
 })
 var appQuery = new Vue({
      el:"#app-query",
      data:{
           database:{
                uni:{
                     majors:majorArray,
                     majorAmount:majorSum,
                     props:unilevel,
                     scolars:scolarship
                },
                inc:{
                     IncScale:incScale,
                     IncProps:incProps,
                     posAmount:positionsum,
                     worksExp:worksexp,
                     pos1:[],
                     pos2:[],
                     area1:[],
                     area2:[],
                     salary:salaryItems,
                     welfare:["五险一金","双休","餐补","交通补","带薪年假","节日聚餐"]
                },
                navcitys:[
                     {"province":"浙江省","city":"杭州","conts":["滨江区", "淳安县", "富阳市", "拱墅区", "江干区", "建德市", "临安市", "上城区", "桐庐县", "西湖区", "下城区", "萧山区", "余杭区","不限"]},
                     {"province":"上海市","city":"上海","conts":["宝山区", "长宁区", "奉贤区", "虹口区", "黄浦区", "嘉定区", "金山区", "静安区", "卢湾区", "闵行区", "南汇区", "普陀区", "浦东新区", "青浦区", "松江区", "徐汇区", "杨浦区", "闸北区","不限"]},
                     {"province":"北京市","city":"北京","conts":["昌平区", "朝阳区", "崇文区", "大兴区", "东城区", "房山区", "丰台区", "海淀区", "怀柔区", "门头沟区", "平谷区", "石景山区", "顺义区", "通州区", "西城区", "宣武区","不限"]},
                     {"province":"湖北省","city":"武汉","conts":["蔡甸区", "东西湖区", "汉阳区", "汉南区", "洪山区", "黄陂区", "江岸区", "江汉区", "江夏区", "乔口区", "青山区", "武昌区", "新洲区","不限"]},
                     {"province":"广东省","city":"广州","conts":["宝山区", "长宁区", "奉贤区", "虹口区", "黄浦区", "嘉定区", "金山区", "静安区", "卢湾区", "闵行区", "南汇区", "普陀区", "浦东新区", "青浦区", "松江区", "徐汇区", "杨浦区", "闸北区","不限"]},
                     {"province":"广东省","city":"深圳","conts":["宝安区", "福田区", "龙岗区", "罗湖区", "南山区", "盐田区","不限"]}
                ],
                conts:["滨江区", "淳安县", "富阳市", "拱墅区", "江干区", "建德市", "临安市", "上城区", "桐庐县", "西湖区", "下城区", "萧山区", "余杭区","不限"]
           },
           incQuery:{
               address:"",
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
           showPosBox:false,
           showAreaBox:false,
           showWelBox:false
      },
      methods:{
           selCity:function(index,obj){
                $(".address .on").removeClass("on");
                $(".queryform .district .on").removeClass("on");
                $(obj).addClass("on");
               this.database.conts= this.database.navcitys[index].conts;
           },
           selDistict:function(obj){
                $(".queryform .district .on").removeClass("on");
                $(obj).addClass("on");
                var addrString = "";
                for(var i=0; i<this.database.navcitys.length;i++){
                     if($(".address .on").text()==this.database.navcitys[i].city){
                          if($(".address .on").text()=="北京"||$(".address .on").text()=="上海"){
                               addrString = this.database.navcitys[i].province+";"+this.database.navcitys[i].city+"辖区";
                          }else{
                               addrString = this.database.navcitys[i].province+";"+this.database.navcitys[i].city+"市";
                          }
                          break;
                     }
                }
                addrString+=";"+$(".queryform .district .on").text();
                this.incQuery.address = addrString;
                resultsRequest(1);
           },
           selMajor:function(major1,major2){
                this.incQuery.uniReq.major = major1+";"+major2;
                resultsRequest(1);
           },
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
      },
      mounted:function(){
           var posArray1 = [];
           var areaArray1 = [];
           for(var i=0;i<subposArray.length;i++){
                posArray1.push(subposArray[i].name);
           };
           this.database.inc.pos1 = posArray1;
           this.database.inc.pos2 = subposArray[0].subpos;
           for(var j=0;j<workareas.length;j++){
                areaArray1.push(workareas[j].title);
           };
           this.database.inc.area1 = areaArray1;
           this.database.inc.area2 = workareas[0].subareas;
      },
      watch:{
           'incQuery.pos.pos_1':function(curval){
                for(var i=0;i<subposArray.length;i++){
                     if(subposArray[i].name==curval){
                         this.database.inc.pos2=subposArray[i].subpos;
                         break;
                     }
                }
           },
           'incQuery.pos.pos_2':function(curval){
               if(this.incQuery.pos.pos_1==""){
                    this.incQuery.pos.pos_1 = subposArray[0].name;
               }
                resultsRequest(1);
           },
           'incQuery.uniReq.uniprops':function(curval){
                resultsRequest(1);
           },
           'incQuery.uniReq.majorsum':function(curval){
                resultsRequest(1);
           },
           'incQuery.posAmount':function(curval){
                resultsRequest(1);
           },
           'incQuery.trainway':function(curval){
                resultsRequest(1);
           },
           'incQuery.publicTime':function(curval){
                resultsRequest(1);
           },
           'showPosBox':function(curval){
                if(curval){
                     var top = $(".pos-input").offset().top-$(".queryform").offset().top+30;
                     $(".pos-box").css("top",top);
                }
           },
           'showAreaBox':function(curval){
                if(curval){
                     var top = $(".area-input").offset().top-$(".queryform").offset().top+30;
                     $(".area-box").css("top",top);
                }
           }
      }
});

var appResult = new Vue({
     el:"#app-result",
     data:{
          incList:{
               totalpages:1,
               results:[],
          },
     },
     methods:{
          demandLink:function(demandId){
               return "detail-company.html?demandId="+demandId+"&type=display";
          },
          infoExtrac:function(info){
               return EventUtils.infoExtrac(info);
          },
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
         showpage:function(totalpage){
              if(totalpage<3){
                   return totalpage;
              }else{
                   return 3;
              }
         },
         topage:function(page,type){
              resultsRequest(page);
         }

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
                    respObj.userId = resp.data.userId;
                    respObj.loginId = resp.data.loginIdentifier;
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
        $(".popBox").click(function(){
             return false;
        })
        //申请合作对话框事件绑定
    }

// 筛选结果请求
function resultsRequest(page){
     //     日期选择变量转化
         var dateindex = "";
         switch (appQuery.incQuery.publicTime) {
              case "三天内":dateindex=1;break;
              case "一周内":dateindex=2;break;
              case "一月内":dateindex=3;break;
              default:
         }
     var postdata = {
          demandType:2,
          index:page,
          count:8,
          userAddress:appQuery.incQuery.address,
          schoolProperty:appQuery.incQuery.uniReq.uniprops,
          profession:$(".queryform .major-input-1 input").val()==""?"不限":appQuery.incQuery.uniReq.major,
          professionCount:appQuery.incQuery.uniReq.majorsum,
          job:appQuery.incQuery.pos.pos_1==""?"":appQuery.incQuery.pos.pos_1+";"+appQuery.incQuery.pos.pos_2,
          jobCount:appQuery.incQuery.posAmount,
          trainType:appQuery.incQuery.trainway,
          timeType:dateindex
     }
     // 清楚发送数据对象值为空的属性
     for(var key in postdata){
          if(postdata[key]==""||postdata[key]=="不限"){
               delete postdata[key];
          }
     }
     console.log(postdata);
     EventUtils.ajaxReq("/demand/getList","get",postdata,function(resp,status){
          console.log(resp);
          if(resp.data){
               appResult.incList.totalpages = resp.data.totalPage;
               appResult.incList.results = resp.data.list;
               if(resp.data.list.length<=1){
                    $(".results").css("background","url('images/display-bg.png') no-repeat bottom center");
               }else{
                    $(".results").css("background","none");
               }
          }else{
               appResult.incList.totalpages = 1;
               appResult.incList.results = [];
               $(".results").css("background","url('images/display-bg.png') no-repeat bottom center");
          }
     })
}
