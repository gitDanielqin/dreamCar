/**
 * Created by Administrator on 2017/1/14.
 */
import $ from "../libs/jquery-3.1.0.min";
var Vue = require("../libs/vue");
require("../common/common")
require("../../css/base.css")
require("../../css/widget.css")
require("../../css/footer.css")

var parObj = EventUtils.urlExtrac(window.location);

function _init() {
    initEventBind();
    if (parObj && parObj.theme) {
        $(".main-left li[name=" + parObj.theme + "]").trigger("click");
    }
}
var myapp = new Vue({
    el: "#app",
    data: {
        friend: [
            { logo: "images/friend-logo01.jpg", name: "教育培训网", link: "http://edu.mohrss.gov.cn/" },
            { logo: "images/friend-logo02.jpg", name: "中国人力资源市场网", link: "http://www.chrm.gov.cn//" },
            { logo: "images/friend-logo03.jpg", name: "中国就业网", link: "http://www.lm.gov.cn/" },
            { logo: "images/friend-logo04.jpg", name: "中国职业协会", link: "http://www.zhongguozhixie.com.cn/" },
            { logo: "images/friend-logo05.jpg", name: "中国国家人事人才培训网", link: "http://www.chinanet.gov.cn/" },
        ]
    },
    methods: {
        homeLink: function() {
            var link = "index.html?";
            if (parObj.userId) {
                link += "userId=" + parObj.userId;
            }
            window.location.href = EventUtils.securityUrl(link);
        }
    }
})

function initEventBind() {

    $(".co-table .navs li").each(function() {
        $(this).click(function() {
            $(".co-table .navs li").removeClass("on");
            $(this).addClass("on");
            $(".coway").hide();
            $("." + $(this).attr("name")).show();
        })
    });
    $(".main-left li").each(function(index) {
        $(this).click(function() {
            $(".main-left li").removeClass("on");
            $(this).addClass("on");
            $(".nav-content").hide();
            $($(".nav-content")[index]).show();
        })
    })
}

_init();

//清除页面绑定事件
window.onunload = function() {
    $(".co-table .navs li").each(function() {
        $(this).click(null)
    });
    $(".main-left li").each(function(index) {
        $(this).click(null);
    })
}