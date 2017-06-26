import $ from "../libs/jquery-3.1.0.min";
var Vue = require("../libs/vue")
require("../common/common")
require("../../css/base.css")
require("../../css/v-recruit.css")

var parObj = EventUtils.urlExtrac(window.location);

var myapp = new Vue({
    el: "#app",
    data: {

    },
    methods: {
        homeLink: function() {
            var link = "index.html?";
            if (parObj.userId) {
                link += "userId=" + parObj.userId;
            }
            window.location.href = EventUtils.securityUrl(link);
        },
        footerLink: function(type) {
            var link = "footer-page.html?theme=" + type;
            if (parObj.userId) {
                link += "&userId=" + parObj.userId;
            }
            window.location.href = EventUtils.securityUrl(link);
        },
        enterUni: function() {
            var link = "display-unirecruit.html?";
            if (parObj.userId) {
                link += "userId=" + parObj.userId;
            }
            window.location.href = EventUtils.securityUrl(link);
        },
        enterInc: function() {
            var link = "display-increcruit.html?";
            if (parObj.userId) {
                link += "userId=" + parObj.userId;
            }
            window.location.href = EventUtils.securityUrl(link);
        }
    }
})
$("#main-content").height(EventUtils.getViewport().height - $(".top").outerHeight(true) - $(".bot").outerHeight(true));


// 清除页面绑定事件
window.onunload = function() {
    myapp.$off();
}