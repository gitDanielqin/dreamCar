import $ from "../libs/jquery-3.1.0.min";
require("../common/common")
require("../../css/base.css")
require("../../css/v-recruit.css")

var parObj = EventUtils.urlExtrac(window.location);

$("#main-content").height(EventUtils.getViewport().height - $(".top").outerHeight(true) - $(".bot").outerHeight(true));
document.getElementById("entry-uni").onclick = function() {
    var link = "display-unirecruit.html?";
    if (parObj.userId) {
        link += "userId=" + parObj.userId;
    }
    window.location.href = EventUtils.securityUrl(link);
}
document.getElementById("entry-company").onclick = function() {
    var link = "display-increcruit.html?";
    if (parObj.userId) {
        link += "userId=" + parObj.userId;
    }
    window.location.href = EventUtils.securityUrl(link);
}