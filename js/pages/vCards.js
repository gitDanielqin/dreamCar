/**
 * Created by xuanyuan on 2016/11/7.
 */

var userType = eventUtils.urlExtrac(window.location).userType;
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
                validCode:""
           },
           incInfo:{
                name:"",
                props:"",
                scale:"",
                linkMan:"",
                mobile:"",
                validCode:""
           },
           workstate:"",
           uniLevel:"",
           incProp:"",
           incScale:"",
           showPerson:userType=="0",
           showUni:userType=="1",
           showInc:userType=="2"||window.location.search==""
      },
      methods:{
           codequery:function(mobile){
                var posturl = "http://192.168.0.113:8000/easily_xq_WebApi/sys/mobileCode?";
                var postdata={
                     mobile:mobile,
                     type:3
                };
               // console.log(postdata);
                $.ajax({
                     url:posturl,
                     type:"post",
                     data:postdata,
                     success:function(data,status){
                         //  clearInterval(timer);
                         //  $(obj).html("获取验证码");
                         //  $(obj).attr("disabled",false);
                          alert(data.info);
                     },
                     error:function(data,status){
                          alert("获取验证码失败！"+data.info);
                     },
                     timeout:5000
                })
           },
           selectGender:function(obj){
                $(".gender .on").removeClass("on");
                $(obj).addClass("on");
           },
           submitCard:function(type){
                var posturl="";
                var postdata={};
                if(type=="person"){
                     posturl = "http://www.xiaoqiztc.com/easily_xq_WebApi/user/school/createCard"
                    window.location.href="pCenter.html"
                }else if(type=="uni"){
                     posturl = "http://192.168.0.113:8000/easily_xq_WebApi/user/school/createCard";
                     postdata={
                         userId: eventUtils.urlExtrac(window.location).userid,
                         name: this.uniInfo.name,
                         property:this.uniInfo.props,
                         province:$(".uniCard .sel-province input").val(),
                         city:$(".uniCard .sel-city input").val(),
                         area:$(".uniCard .sel-district input").val(),
                         linkMan:this.uniInfo.linkMan,
                         mobile:this.uniInfo.mobile,
                         code:this.uniInfo.validCode
                    };
                    //window.location.href="uniCenter.html"
               }else if(type=="inc"){
                    //window.location.href="incCenter.html"
               }
               console.log(postdata)
               $.ajax({
                    url:posturl,
                    type:"post",
                    data:postdata,
                    success:function(data,status){
                    //     clearInterval(timer);
                    //     $(obj).html("获取验证码");
                    //     $(obj).attr("disabled",false);
                         alert(data.info);
                    },
                    error:function(data,status){
                         alert("获取验证码失败！"+data.info);
                    },
                    timeout:5000
               })
           }
      },
      mounted:function(){
           selectInitPos();
           $(".main").css("margin-bottom",getViewport().height-746+"px");
      }
})
