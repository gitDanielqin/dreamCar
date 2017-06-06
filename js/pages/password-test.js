$(".step-cont-1 .psw-btn").click(function() {
    var postdata = {
        loginName: $(".step-cont-1 .input-account").val(),
        inputRandomCode: $(".step-cont-1 .input-validcode").val()
    }
    EventUtils.ajaxReq("/sys/getOldConection?", "get", postdata, function(resp, status) {
        console.log(resp);
    })
})