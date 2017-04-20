/**
 * Created by xuanyuan on 2016/11/6.
 */

var appCont =  new Vue({
     el:"#app-content",
     data:{
          register:{
               account:"",
               password:"",
               validcode:"",
               userType:2
          }
     },
     methods:{
          accontType:function(index){
               if(index==0){
                    return "手机号"
               }else{
                    return "邮箱"
               }
          },
          regisEv:function(){
               //alert(1);
               var postdata = {
                    loginName:this.register.account,
                    password:this.register.password,
                    code:this.register.validcode,
                    userType:this.register.userType
               };
               window.location.href="vCards.html?userType="+appCont.register.userType+"&userid=1";
          //     window.location.href="vCards.html";
               //console.log(postdata);
               // $.ajax({
               //      url:"http://www.xiaoqiztc.com/easily_xq_WebApi/center/user/register?",
               //      type:"post",
               //      data:postdata,
               //      success:function(resp,status){
               //           alert(resp.info);
               //           window.location.href="/vCards.html?userType="+appCont.register.userType+"&userid="+resp.data.userId;
               //      },
               //      error:function(data,status){
               //           console.log(status)
               //           alert("注册失败！"+data.info);
               //      },
               //      timeout:5000
               // })
          },
          reqValidCode:function(obj){
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
               var postdata;
               var posturl;
               if(this.register.userType==0){
                    postdata = {
                         mobile:this.register.account,
                         type:0
                    };
                    posturl = "http://www.xiaoqiztc.com/easily_xq_WebApi/sys/mobileCode?";
               }else{
                    postdata = {
                         email:this.register.account,
                         type:0
                    };
                    posturl = "http://www.xiaoqiztc.com/easily_xq_WebApi/sys/emailCode?";
               }

               $.ajax({
                    url:posturl,
                    type:"post",
                    data:postdata,
                    success:function(data,status){
                         clearInterval(timer);
                         $(obj).html("获取验证码");
                         $(obj).attr("disabled",false);
                         alert(data.info);
                    },
                    error:function(data,status){
                         alert("获取验证码失败！"+data.info);
                    },
                    timeout:5000
               })

          }
     }
})

function _init(){
     loginEventBind();
     regisEventBind();
     agreementEventBind();
//     pdjuge();
     validEventBind();
     initSize();
}
_init();

// 初始化页面元素大小
function initSize(){
     var contHeight = window.innerHeight - $(".top").outerHeight(true) - $(".bot").outerHeight(true);
     $(".banner").height(contHeight);
}
//协议事件绑定
function agreementEventBind(){
     $(".regis .agreement").click(function(){
             $(".agree-modal").show();
     })
     $(".agree-modal").bind("click",function(){
         $(this).hide();
     });
     $(".agreementBox").bind("click",function(){
         return false;
     });
};
//页面登录判断
    function pdjuge(){
        $(".logBox").hide();
        var urlStr= window.location.search.substr(1);
        if(/=1/.test(urlStr)){
            $(".regis").show();
            $(".login").hide();
        }else{
            $(".regis").hide();
            $(".login").show();
        }
    }


//登录框事件绑定
function loginEventBind(){
     $(".login .login-footer").click(function(){
         $(".login").fadeOut();
         $(".regis").fadeIn("slow");
     });
     $("#logBtn").click(function(){
          window.location.href="vCards.html";
     });
     $(".check-box").click(function(){
          $(this).toggleClass("selected")
     })
}
//注册框事件绑定
function regisEventBind(){
     $(".logBox .log-nav li").click(function(){
         $(".logBox .log-nav .on").removeClass("on");
         $(this).addClass("on");
    });
    $(".regis .login-footer").click(function(){
        $(".regis").fadeOut();
        $(".login").fadeIn("slow");
    });

}
/*登录输入验证*/
function validEventBind(){
     var isAccValid=false;
     var isPassValid=false;
     function validation(){
         if(isAccValid&&isPassValid){
             $(".logBox button").removeAttr("disabled");
         }else{
             $(".logBox button").attr("disabled","disabled");
         }
     }
     $(".logBox .account").change(function(){
         var mobiReg=/^1[34578]\d{9}$/;
         var mailReg=/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
         if($(this).val()==""){
             alert("该项不能为空！");
             isAccValid=false;
         }else if(!(mobiReg.test($(this).val()))&&!(mailReg.test($(this).val()))){
             alert("请输入正确的手机号或邮箱！");
             isAccValid=false;
         }else{
             isAccValid=true;
         }
         validation();
     });
     $(".logBox input[type='password']").change(function(){
         if($(this).val()==""){
             alert("该项不能为空！");
             isPassValid=false;
         }else if(!(/^[a-zA-Z0-9]{6,16}$/.test($(this).val()))){
             alert("密码格式不正确！");
             isPassValid=false;
         }else{
             isPassValid=true;
         }
         validation();
     });
}
