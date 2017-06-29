/**
 * Created by xuanyuan on 2016/12/31.
 */
import $ from "../libs/jquery-3.1.0.min";
require("../libs/sweetalert.min");
require("../common/common")
var Vue = require("../libs/vue.min");
require("../components/dropdown")
require("../components/pagination")
require("../components/common-footer")
require("../../data/commondata")
require("../../data/major")
require("../../data/position")
require("../../data/workareas")
require("../../css/base.css")
require("../../css/sweetalert.css")
require("../../css/widget.css")
require("../../css/display-comm.css")
var isLogin = false;
var parObj = EventUtils.urlExtrac(window.location); //地址参数对象
var respObj = {}; //页面信息
var accountObj = {} //用户信息
var subposArray = [];
(function() {
    //初始化数据库信息
    EventUtils.initDatabase();
    //提取出二级职位信息
    for (var i = 0; i < posArray.length; i++) {
        for (var j = 0; j < posArray[i].subpos.length; j++) {
            if (posArray[i].subpos[j].name != "不限") {
                subposArray.push(posArray[i].subpos[j]);
            }
        }
    };
    subposArray.push({ name: "不限", subpos: ["不限"] });
})()

// 初始化页面信息请求
function infoRequest() {
    var postdata = {
        index: 1,
        count: 8
    }
    if (parObj.userId) {
        postdata.userId = parObj.userId;
        EventUtils.ajaxReq("/recruit/getList", "get", postdata, function(resp, status) {
            //console.log(resp);
            if (resp.data) {
                appResult.posList.totalpages = resp.data.totalPage;
                appResult.posList.results = resp.data.list;
                if (parObj.searchtext) {
                    appQuery.keywords = decodeURI(parObj.searchtext);
                    resultsRequest(1);
                }
            } else {
                appResult.posList.totalpages = 1;
                appResult.posList.results = [];
            }
        });
        EventUtils.ajaxReq("/center/user/getInfo", "get", { userId: parObj.userId }, function(resp, status) {
            accountObj = resp.data;
            appTop.userName = accountObj.userName;
            appTop.isLogin = true;
            appTop.userType = accountObj.userType;
            //console.log(resp)
        })
    } else {
        EventUtils.ajaxReq("/recruit/getList", "get", postdata, function(resp, status) {
            //console.log(resp);
            if (resp.data) {
                appResult.posList.totalpages = resp.data.totalPage;
                appResult.posList.results = resp.data.list;
                if (parObj.searchtext) {
                    appQuery.keywords = decodeURI(parObj.searchtext);
                    resultsRequest(1);
                }
            } else {
                appResult.posList.totalpages = 1;
                appResult.posList.results = [];
            }
        });
    }


}
var appTop = new Vue({
    el: "#app-top",
    data: {
        isLogin: false,
        userType: "0",
        userName: ""
    },
    methods: {
        loginEv: function() {
            appModal.showModal = true;
            appModal.showLogin = true;
        },
        regisEv: function() {
            var link = EventUtils.securityUrl("login.html?newAcc=1");
            window.open(link, "_blank");
        },
        publish: function() {
            switch (this.userType) {
                case "1":
                    var link = "uniRequire.html?new=1";
                    break;
                case "2":
                    var link = "incRequire.html?new=1";
                    break;
                default:
            };
            if (accountObj.userId) {
                link += "&userId=" + accountObj.userId + "&loginId=" + accountObj.loginIdentifier;
            }
            link = EventUtils.securityUrl(link);
            window.open(link, '_blank');
        },
        toCenter: function(theme) {
            switch (this.userType) {
                case "0":
                    var link = "pCenter.html?theme=" + theme;
                    break;
                case "1":
                    var link = "uniCenter.html?theme=" + theme;
                    break;
                case "2":
                    var link = "incCenter.html?theme=" + theme;
                    break;
                default:

            };
            if (accountObj.userId) {
                link += "&userId=" + accountObj.userId + "&loginId=" + accountObj.loginIdentifier;
            }
            link = EventUtils.securityUrl(link);
            window.open(link, '_blank');
        },
        logout: function() {
            this.isLogin = false;
            appModal.login.account = "";
            appModal.login.password = "";
            accountObj = {};
            //登出时重新请求结果
            var postdata = {
                index: 1,
                count: 8
            }
            EventUtils.ajaxReq("/recruit/getList", "get", postdata, function(resp, status) {
                //console.log(resp);
                if (resp.data) {
                    appResult.posList.totalpages = resp.data.totalPage;
                    appResult.posList.results = resp.data.list;
                    if (parObj.searchtext) {
                        appQuery.keywords = decodeURI(parObj.searchtext);
                        resultsRequest(1);
                    }
                } else {
                    appResult.posList.totalpages = 1;
                    appResult.posList.results = [];
                }
            });
            var state = {
                title: document.title,
                url: document.location.href,
                otherkey: null
            };
            //无刷新页面替换URL
            history.replaceState(state, document.title, "display-position.html");
        }
    },
    watch: {
        "isLogin": function(curval) {
            if (curval) {
                appResult.accountId = accountObj.userId;
                appFooter.userId = accountObj.userId;
            } else {
                appResult.accountId = "";
                appFooter.userId = "";
            }
        }
    }
})
var appQuery = new Vue({
    el: "#app-query",
    data: {
        database: {
            uni: {
                majors: majorArray,
                majorAmount: xqdatabase.majorSum,
                props: xqdatabase.unilevel,
                scolars: xqdatabase.scolarship
            },
            inc: {
                IncScale: xqdatabase.incScale,
                IncProps: xqdatabase.incProps,
                posAmount: xqdatabase.positionsum,
                worksExp: xqdatabase.worksexp,
                workType: ["全职", "兼职", "实习", "校园", "不限"],
                salary: xqdatabase.salary,
                welfare: xqdatabase.welfares
            },
            navcitys: [
                { "province": "浙江省", "city": "杭州", "conts": ["滨江区", "淳安县", "富阳市", "拱墅区", "江干区", "建德市", "临安市", "上城区", "桐庐县", "西湖区", "下城区", "萧山区", "余杭区", "不限"] },
                { "province": "上海市", "city": "上海", "conts": ["宝山区", "长宁区", "奉贤区", "虹口区", "黄浦区", "嘉定区", "金山区", "静安区", "卢湾区", "闵行区", "南汇区", "普陀区", "浦东新区", "青浦区", "松江区", "徐汇区", "杨浦区", "闸北区", "不限"] },
                { "province": "北京市", "city": "北京", "conts": ["昌平区", "朝阳区", "崇文区", "大兴区", "东城区", "房山区", "丰台区", "海淀区", "怀柔区", "门头沟区", "平谷区", "石景山区", "顺义区", "通州区", "西城区", "宣武区", "不限"] },
                { "province": "湖北省", "city": "武汉", "conts": ["蔡甸区", "东西湖区", "汉阳区", "汉南区", "洪山区", "黄陂区", "江岸区", "江汉区", "江夏区", "乔口区", "青山区", "武昌区", "新洲区", "不限"] },
                { "province": "广东省", "city": "广州", "conts": ["宝山区", "长宁区", "奉贤区", "虹口区", "黄浦区", "嘉定区", "金山区", "静安区", "卢湾区", "闵行区", "南汇区", "普陀区", "浦东新区", "青浦区", "松江区", "徐汇区", "杨浦区", "闸北区", "不限"] },
                { "province": "广东省", "city": "深圳", "conts": ["宝安区", "福田区", "龙岗区", "罗湖区", "南山区", "盐田区", "不限"] }
            ],
            conts: ["滨江区", "淳安县", "富阳市", "拱墅区", "江干区", "建德市", "临安市", "上城区", "桐庐县", "西湖区", "下城区", "萧山区", "余杭区", "不限"]
        },
        keywords: "",
        posQuery: {
            areas: {
                area_1: "",
                area_2: ""
            },
            pos: {
                pos_1: "",
                pos_2: ""
            },
            worksexp: "",
            workstype: "",
            scolar: "",
            salary: "",
            welfare: "",
            address: "",
            major: "",
            publicTime: "",
            trainway: ""
        },
        showPosBox: false,
        showAreaBox: false,
        showWelBox: false
    },
    methods: {
        search: function() {
            resultsRequest(1);
        },
        selCity: function(index, obj) {
            $(".address .on").removeClass("on");
            $(".queryform .district .on").removeClass("on");
            $(obj).addClass("on");
            this.database.conts = this.database.navcitys[index].conts;
        },
        selDistict: function(obj) {
            $(".queryform .district .on").removeClass("on");
            $(obj).addClass("on");
            var addrString = "";
            for (var i = 0; i < this.database.navcitys.length; i++) {
                if ($(".address .on").text() == this.database.navcitys[i].city) {
                    if ($(".address .on").text() == "北京" || $(".address .on").text() == "上海") {
                        addrString = this.database.navcitys[i].province + ";" + this.database.navcitys[i].city + "辖区";
                    } else {
                        addrString = this.database.navcitys[i].province + ";" + this.database.navcitys[i].city + "市";
                    }
                    break;
                }
            }
            addrString += ";" + $(".queryform .district .on").text();
            this.posQuery.address = addrString;
            resultsRequest(1);
        },
        selAllDistrict: function() {
            $(".queryform .district .on").removeClass("on");
            this.posQuery.address = "";
            resultsRequest(1);
        },
        selMajor: function(major1, major2) {
            this.posQuery.major = major1 + ";" + major2;
            resultsRequest(1);
        },
        selPos: function(pos, type) {
            if (type == "pos") {
                if (pos != "不限") {
                    this.posQuery.pos.pos_2 = pos;
                } else {
                    this.posQuery.pos.pos_2 = this.posQuery.pos.pos_1;
                }
            }
            this.showPosBox = false;
        },
        selArea: function(area, type) {
            if (type == "pos") {
                if (area != "不限") {
                    this.posQuery.areas.area_2 = area;
                } else {
                    this.posQuery.areas.area_2 = this.posQuery.areas.area_1;
                }
            }
            this.showAreaBox = false;
        },
        clickPos: function() {
            $(".selectee ul").hide();
            this.showAreaBox = false;
            this.showWelBox = false;
            this.showPosBox = true;
        },
        clickArea: function() {
            this.showAreaBox = true;
            this.showWelBox = false;
            this.showPosBox = false;
            $(".selectee ul").hide();
        },
        clickWel: function() {
            this.showAreaBox = false;
            this.showWelBox = true;
            this.showPosBox = false;
            $(".selectee ul").hide();
        },
        checkEv: function(obj) {
            if ($(obj).hasClass("on")) {
                $(obj).removeClass("on");
                $(obj).parent("li").removeClass("on");
            } else {
                $(obj).addClass("on");
                $(obj).parent("li").addClass("on");
            }
        },
        submitWel: function() {
            var selWelfare = "";
            $(".welfare-lis li").each(function() {
                if ($(this).hasClass("on")) {
                    selWelfare += $(this).text() + ",";
                }
            });
            if (selWelfare.indexOf("不限") > -1) {
                selWelfare = "不限"
            } else if (selWelfare.length > 0) {
                selWelfare = selWelfare.slice(-1);
            }
            this.posQuery.welfare = selWelfare;
            this.showWelBox = false;
        },
        homeLink: function() {
            var link = appTop.isLogin ? "index.html?userId=" + accountObj.userId : "index.html"
            window.location.href = EventUtils.securityUrl(link);
        }
    },
    mounted: function() {
        var posArray1 = [];
        var areaArray1 = [];
        for (var i = 0; i < subposArray.length; i++) {
            posArray1.push(subposArray[i].name);
        };
        this.database.inc.pos1 = posArray1;
        this.database.inc.pos2 = subposArray[0].subpos;
        for (var j = 0; j < workareas.length; j++) {
            areaArray1.push(workareas[j].title);
        };
        this.database.inc.area1 = areaArray1;
        this.database.inc.area2 = workareas[0].subareas;
    },
    watch: {
        'posQuery.pos.pos_1': function(curval) {
            for (var i = 0; i < subposArray.length; i++) {
                if (subposArray[i].name == curval) {
                    this.database.inc.pos2 = subposArray[i].subpos;
                    break;
                }
            }
            if (curval == "不限") {
                resultsRequest(1);
            }
        },
        'posQuery.pos.pos_2': function(curval) {
            if (this.posQuery.pos.pos_1 == "") {
                this.posQuery.pos.pos_1 = subposArray[0].name;
            }
            resultsRequest(1);
        },
        'posQuery.areas.area_1': function(curval) {
            for (var i = 0; i < workareas.length; i++) {
                if (workareas[i].title == curval) {
                    this.database.inc.area2 = workareas[i].subareas;
                    break;
                }
            };
            if (curval == "不限") {
                resultsRequest(1);
            }
        },
        'posQuery.areas.area_2': function(curval) {
            if (this.posQuery.areas.area_1 == "") {
                this.posQuery.areas.area_1 = workareas[0].title;
            }
            resultsRequest(1);
        },
        'posQuery.workstype': function(curval) {
            resultsRequest(1);
        },
        'posQuery.worksexp': function(curval) {
            resultsRequest(1);
        },
        'posQuery.scolar': function(curval) {
            resultsRequest(1);
        },
        'posQuery.salary': function(curval) {
            resultsRequest(1);
        },
        'posQuery.welfare': function(curval) {
            resultsRequest(1);
        },
        'posQuery.publicTime': function(curval) {
            resultsRequest(1);
        },
        'showPosBox': function(curval) {
            if (curval) {
                var top = $(".pos-input").offset().top - $(".queryform").offset().top + 30;
                $(".pos-box").css("top", top);
            }
        },
        'showAreaBox': function(curval) {
            if (curval) {
                var top = $(".area-input").offset().top - $(".queryform").offset().top + 30;
                $(".area-box").css("top", top);
            }
        }
    }
});

var appResult = new Vue({
    el: "#app-result",
    data: {
        posList: {
            totalpages: 1,
            results: [],
        },
        accountId: "",
        resultType: 0
    },
    methods: {
        infoExtrac: function(info) {
            if (info) {
                return EventUtils.infoExtrac(info);
            } else {
                return "";
            }
        },
        infoShow: function(text, type) {
            return EventUtils.infoShow(text, type)
        },
        cityExtrac: function(text) {
            if (text) {
                return text.split(";")[1]
            } else {
                return "";
            }
        },
        positionLink: function(id) {
            var link = "detail-position.html?recruitId=" + id + (this.accountId ? "&userId=" + this.accountId : "");
            link = EventUtils.securityUrl(link);
            return link
        },
        coApply: function(id, item) {
            if (appTop.isLogin) {
                if (accountObj.userType != "0") {
                    swal({
                        title: "",
                        text: "抱歉，您不能投递该职位！",
                        type: "warning"
                    })
                    return false;
                }
                var postdata = {
                        userId: accountObj.userId,
                        recruitId: id
                    }
                    //console.log(postdata);
                EventUtils.ajaxReq("/recruit/cooperateRecruit", "post", postdata, function(resp, status) {
                    //console.log(resp);
                    if (resp.data.isApply == "0") {
                        appModal.showModal = true;
                        appModal.showLogin = false;
                        appModal.showSucc = true;
                        item.applyStatus = 1;
                    } else {
                        swal({
                            title: "",
                            text: resp.info,
                            type: "error"
                        })
                    };
                });
            } else {
                appModal.showModal = true;
                appModal.showLogin = true;
                appModal.showSucc = false;
            }
        },
        showpage: function(totalpage) {
            if (totalpage < 3) {
                return totalpage;
            } else {
                return 3;
            }
        },
        topage: function(page, type) {
            resultsRequest(page);
        }
    },
    components: {
        'pagination': pagination
    }
})

var appFooter = new Vue({
    el: "#app-footer",
    data: {
        userId: parObj.userId
    }
})
var appModal = new Vue({
    el: "#app-modal",
    data: {
        showModal: false,
        showSucc: false,
        showLogin: false,
        login: {
            account: "",
            password: ""
        }
    },
    methods: {
        securityUrl: function(url) {
            return EventUtils.securityUrl(url);
        },
        confirmSuc: function() {
            this.showSucc = false;
            this.showModal = false;
        },
        closeSuc: function() {
            this.showSucc = false;
            this.showModal = false;
        },
        closeLog: function() {
            this.showLogin = false;
            this.showModal = false;
        },
        loginEv: function() {
            var postdata = {
                loginName: this.login.account,
                password: this.login.password
            };
            EventUtils.ajaxReq("/center/user/login", "post", postdata, function(resp, status) {
                accountObj = resp.data;
                if (accountObj) {
                    var postdata = { //重新请求结果
                        userId: accountObj.userId,
                        index: 1,
                        count: 8
                    }
                    EventUtils.ajaxReq("/recruit/getList", "get", postdata, function(resp, status) {
                        //console.log(resp);
                        if (resp.data) {
                            appResult.posList.totalpages = resp.data.totalPage;
                            appResult.posList.results = resp.data.list;
                        } else {
                            appResult.posList.totalpages = 1;
                            appResult.posList.results = [];
                        }
                    });
                    appTop.userType = resp.data.userType;
                    appTop.userName = resp.data.name;
                    appTop.isLogin = true;
                    appModal.showModal = false;
                    appModal.showLogin = false;
                    var state = {
                        title: document.title,
                        url: document.location.href,
                        otherkey: null
                    };
                    //无刷新页面替换URL
                    history.replaceState(state, document.title, EventUtils.securityUrl("display-position.html?userId=" + resp.data.userId));
                }
            })
        }
    },
    watch: {
        'showLogin': function(curval) {
            if (curval) {
                this.$nextTick(function() {
                    EventUtils.absCenter($(".dlg-login"));
                })
            }
        },
        'showSucc': function(curval) {
            if (curval) {
                this.$nextTick(function() {
                    EventUtils.absCenter($(".dlg-success"));
                })
            }
        }
    }
})

function _init() {
    infoRequest();
    selectInitPos();
    _initEventBind();
}
_init();

function selectInitPos() {
    $(".selectee input").each(function() {
        var bgPos = $(this).width() + 10 + "px center";
        $(this).attr("readonly", "readonly").css("background-position", bgPos);
    });
    $(".selectee ul").each(function() {
        var sibInput = $(this).siblings("input")
        $(this).width(sibInput.width() + 30);
        $(this).css({
            left: sibInput.css("margin-left"),
            top: sibInput.height()
        })
    });
    $(".popBox .selectee ul").css("top", "25px");
    $("body").bind("click", function() {
        $(".selectee ul").hide();
        appQuery.showPosBox = false;
        appQuery.showAreaBox = false;
        appQuery.showWelBox = false;
    })
}

function _initEventBind() {
    $(".account li").hover(function() {
        $(this).find("dl").slideDown(300);
    }, function() {
        $(this).find("dl").slideUp(200);
    })
    $(".popBox").click(function() {
            return false;
        })
        //申请合作对话框事件绑定
}

// 筛选结果请求
function resultsRequest(page) {
    appResult.resultType = 0;
    //     日期选择变量转化
    var dateindex = "";
    switch (appQuery.posQuery.publicTime) {
        case "三天内":
            dateindex = 1;
            break;
        case "一周内":
            dateindex = 2;
            break;
        case "一月内":
            dateindex = 3;
            break;
        default:
    }
    var postdata = {
        index: page,
        count: 8,
        title: appQuery.keywords,
        userAddress: appQuery.posQuery.address,
        type: appQuery.posQuery.areas.area_1 == "" ? "" : appQuery.posQuery.areas.area_1 + ";" + appQuery.posQuery.areas.area_2,
        job: appQuery.posQuery.pos.pos_2 == "" ? "" : appQuery.posQuery.pos.pos_1 + ";" + appQuery.posQuery.pos.pos_2,
        workType: appQuery.posQuery.workstype,
        workTime: appQuery.posQuery.worksexp,
        education: appQuery.posQuery.scolar,
        salary: appQuery.posQuery.salary,
        welfare: appQuery.posQuery.welfare,
        timeType: dateindex
    }
    if (accountObj && accountObj.userId) {
        postdata.userId = accountObj.userId;
    }
    // 清除发送数据对象值为空的属性
    postdata = EventUtils.filterReqdata(postdata);
    EventUtils.ajaxReq("/recruit/getList", "get", postdata, function(resp, status) {
        //console.log(resp);
        if (resp.data) {
            appResult.posList.totalpages = resp.data.totalPage;
            appResult.posList.results = resp.data.list;
            //背景图像
            if (resp.data.list.length <= 1) {
                $(".results").css("background", "url('images/display-bg.png') no-repeat bottom center");
            } else {
                $(".results").css("background", "none");
            }
        } else {
            appResult.posList.totalpages = 1;
            appResult.posList.results = [];
            //背景图像
            $(".results").css("background", "url('images/display-bg.png') no-repeat bottom center");
        }
    })
}

//搜索结果请求
// function searchRequest(page) {
//     appResult.resultType = 1;
//     var postdata = {
//         title: appQuery.keywords,
//         index: page,
//         count: 8
//     }
//     if (accountObj && accountObj.userId) {
//         postdata.userId = accountObj.userId;
//     }
//     EventUtils.ajaxReq("/recruit/searchRecruit?", "get", postdata, function(resp, status) {
//         //console.log(resp);
//         if (resp.data) {
//             appResult.posList.totalpages = resp.data.totalPage;
//             appResult.posList.results = resp.data.list;
//             //背景图像
//             if (resp.data.list.length <= 1) {
//                 $(".results").css("background", "url('images/display-bg.png') no-repeat bottom center");
//             } else {
//                 $(".results").css("background", "none");
//             }
//         } else {
//             appResult.posList.totalpages = 1;
//             appResult.posList.results = [];
//             //背景图像
//             $(".results").css("background", "url('images/display-bg.png') no-repeat bottom center");
//         }
//     })
// }

//清除页面绑定事件
window.onunload = function() {
    appTop.$off();
    appQuery.$off();
    appResult.$off();
    appFooter.$off();
    appModal.$off();
}