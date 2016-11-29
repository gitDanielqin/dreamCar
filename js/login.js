/**
 * Created by xuanyuan on 2016/11/6.
 */
$(".regis .agreement").click(function(){
        $(".agree-modal").show();
})
$(".agree-modal").bind("click",function(){
    $(this).hide();
});
$(".agreementBox").bind("click",function(){
    return false;
})
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
pdjuge();

$(".logBox .log-nav li").click(function(){
    $(".logBox .log-nav .on").removeClass("on");
    $(this).addClass("on");
})
$(".regis .login-footer").click(function(){
    $(".regis").fadeOut();
    $(".login").fadeIn("slow");
});
$(".login .login-footer").click(function(){
    $(".login").fadeOut();
    $(".regis").fadeIn("slow");
});

/*登录输入判断*/
var isAccValid=false;
var isPassValid=false;
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

function validation(){
    if(isAccValid&&isPassValid){
        $(".logBox button").removeAttr("disabled");
    }else{
        $(".logBox button").attr("disabled","disabled");
    }
}

$(".logBox button").click(function(){
    window.location="http://www.baidu.com";
    window.open("vCards.html");
});

