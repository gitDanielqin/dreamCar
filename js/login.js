/**
 * Created by xuanyuan on 2016/11/6.
 */


function _init(){
     loginEventBind();
     regisEventBind();
     agreementEventBind();
     pdjuge();
     validEventBind();
}
_init();
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
    $(".codeReq").click(function(){
          var objMe=this;
         $(this).attr("disabled",true);
         var start=0;
         var timer = setInterval(function(){
              start++;
              if(start==60){
                   $(objMe).html("获取验证码");
                   $(objMe).attr("disabled",false);
                   clearInterval(timer);
              }
              $(objMe).html("重新获取 ("+(60-start)+"s)");
         },1000);
         var emailStr = $(".regis .account").val();

         $.post("http://101.37.31.30/easily_xq_WebApi/sys/emailCode?",{"email":emailStr,"type":0},function(data){
           //   var data = JSON.parse(data);
           clearInterval(timer);
           $(objMe).html("获取验证码");
               $(objMe).attr("disabled",false);
              alert(data.info);
         });

    })
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
