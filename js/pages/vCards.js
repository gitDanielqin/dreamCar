/**
 * Created by xuanyuan on 2016/11/7.
 */

var parObj = EventUtils.urlExtrac(window.location);
 var appCont =  new Vue({
      el:"#app-content",
      data:{
           database:{
               workstates:[
                    "在职，打算换个新环境",
                    "离职，可立即到岗工作",
                    "在校学生",
                    "应届毕业生",
                    "暂时不想找工作"
               ],
               addrData:addArray,
               uniLevel:["重点","本科","大专","高职"],
               incProps:[
                    "国营",
                    "民营",
                    "合资",
                    "外商独资",
                    "股份制企业",
                    "上市公司",
                    "代表处",
                    "国家机关",
                    "事业单位",
                    "世界500强",
                    "中国500强",
                    "其他"],
               incScales:[
                    "20人以内",
                    "20-99",
                    "100-199",
                    "200-499",
                    "500-999",
                    "1000-9999",
                    "10000人以上"
               ],
               date:date
           },
           pInfo:{
                name:"",
                birth:{
                     year:"",
                     month:"",
                },
                workstate:"",
                email:""
           },
           uniInfo:{
                name:"",
                props:"",
                linkMan:"",
                mobile:"",
                validCode:"",
                unable:true
           },
           incInfo:{
                name:"",
                props:"",
                scale:"",
                linkMan:"",
                mobile:"",
                validCode:"",
                unable:true
           },
           workstate:"",
           uniLevel:"",
           incProp:"",
           incScale:"",
           showPerson:parObj.userType=="0",
           showUni:parObj.userType=="1"||window.location.search=="",
           showInc:parObj.userType=="2"
      },
      methods:{
           codequery:function(mobile,obj){
                $(obj).attr("disabled",true);
                var start=0;
                var timer = setInterval(function(){
                     start++;
                     if(start==60){
                          $(obj).html("获取验证码");
                          $(obj).attr("disabled",false);
                          clearInterval(timer);
                     }
                     $(obj).html("重新获取 ("+(60-start)+"s)");
                },1000);
                var postdata={
                     mobile:mobile,
                     type:3
                };
                var callback= function(data,status){
                     clearInterval(timer);
                     $(obj).html("获取验证码");
                     $(obj).attr("disabled",false);
                     alert(data.info);
                };
               EventUtils.ajaxReq('/sys/mobileCode','post',postdata,callback);

           },
           selectGender:function(obj){
                $(".gender .on").removeClass("on");
                $(obj).addClass("on");
           },
           submitCard:function(type){
                var posturl="";
                var postdata={};
                var domainUrl="";
                if(type=="person"){
                     posturl = "/user/school/createCard"
                     domainUrl="pCenter.html?";
                }else if(type=="uni"){
                     posturl = "/user/school/createCard";
                     postdata={
                         userId: parObj.userid,
                         name: this.uniInfo.name,
                         property:this.uniInfo.props,
                         province:$(".uniCard .sel-province input").val(),
                         city:$(".uniCard .sel-city input").val(),
                         area:$(".uniCard .sel-district input").val(),
                         linkMan:this.uniInfo.linkMan,
                         mobile:this.uniInfo.mobile,
                         code:this.uniInfo.validCode
                    };
                    domainUrl="uniCenter.html?";
                    //window.location.href="uniCenter.html"
               }else if(type=="inc"){
                    posturl = "/user/company/createCard";
                    postdata={
                         userId: parObj.userid,
                         name: this.incInfo.name,
                         property:this.incInfo.props,
                         scale:this.incInfo.scale,
                         province:$(".bsCard .sel-province input").val(),
                         city:$(".bsCard .sel-city input").val(),
                         area:$(".bsCard .sel-district input").val(),
                         linkMan:this.incInfo.linkMan,
                         mobile:this.incInfo.mobile,
                         code:this.incInfo.validCode
                    }
                    domainUrl="incCenter.html?";
                    //window.location.href="incCenter.html"
               }
               console.log(postdata);

               var callback = function(data,status){
                    var parstring = "userId="+parObj.userid+"&loginIdentifier="+parObj.loginIdentifier;
                    window.location.href = domainUrl+parstring;
               }

          //     EventUtils.ajaxReq(posturl,'post',postdata,callback)

           }
      },
      watch:{
           'uniInfo.mobile':function(curval){
                if(curval!=""){
                     this.uniInfo.unable=false;
                }else{
                     this.uniInfo.unable=true;
                }
           },
           'incInfo.mobile':function(curval){
                if(curval!=""){
                     this.incInfo.unable=false;
                }else{
                     this.incInfo.unable=true;
                }
           },
      },
      mounted:function(){
           selectInitInput();
           selectInitPos();
           $(".main").css("margin-bottom",getViewport().height-746+"px");
      }
})
