var Vue = require("../libs/vue.min");
(function() {
    var footerTempl = '<div class="inner clearfix common-footer">\
            <div class="fl">\
                <ul class="lis-inline footer-nav">\
                    <li @click="homeLink"><a href="javascript:void(0)">校企首页</a>-</li>\
                    <li @click="footerLink(\'descript\')"><a href="javascript:void(0)">关于校企</a>-</li>\
                    <li @click="footerLink(\'coop\')"><a href="javascript:void(0)">网站合作</a>-</li>\
                    <li @click="footerLink(\'help\')"><a href="javascript:void(0)">帮助中心</a>-</li>\
                    <li @click="footerLink(\'employ\')"><a href="javascript:void(0)">招贤纳士</a>-</li>\
                    <li @click="footerLink(\'friend\')"><a href="javascript:void(0)">友情链接</a>-</li>\
                    <li @click="footerLink(\'descript\')"><a href="javascript:void(0)">教育网</a></li>\
                </ul>\
                <ul class="lis-inline footer-contact">\
                    <li><i class="pic-icon icon-phone"></i>电话：0571-28277417-818</li>\
                    <li><i class="pic-icon icon-address"></i>杭州市滨江区六合路368号海创基地北三楼B3077</li>\
                    <li><i class="pic-icon icon-email"></i>邮箱：market@xiaoqiztc.com</li>\
                </ul>\
                <p class="footer-rights">校企职通车版权所有©2017XIAOQI 浙ICP备17007975号-2 浙公网安备3481464号</p>\
            </div>\
            <div class="fr footer-barcode">\
                <p class="barcode-text">关注我们</p>\
                <div class="pic-wrapper">\
                    <img src="images/barcode.png" />\
                </div>\
            </div>\
        </div>';

    Vue.component("common-footer", {
        template: footerTempl,
        props: ["userid"],
        methods: {
            homeLink: function() {
                var link = "index.html?";
                if (this.userid) {
                    link += "userId=" + this.userid;
                };
                window.location.href = EventUtils.securityUrl(link);
            },
            footerLink: function(type) {
                var link = "footer-page.html?theme=" + type;
                if (this.userid) {
                    link += "&userId=" + this.userid;
                }
                link = EventUtils.securityUrl(link);
                window.location.href = link;
            }
        }
    })
})()