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
require("../components/login-box")
require("../../data/commondata")
require("../../data/major")
require("../../data/position")
require("../../data/workareas")
require("../../css/base.css")
require("../../css/sweetalert.css")
require("../../css/widget.css")
require("../../css/display-comm.css")
var parObj = EventUtils.urlExtrac(window.location); //地址参数对象
var respObj = {}; //页面信息
var accountObj = {}
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
    var postdata = {
        demandType: 2,
        index: 1,
        count: 8
    }
})()

function infoRequest() {
    var postdata = {
        jobFairType: 2,
        index: 1,
        count: 8
    }
    if (parObj.userId) { // 如果是已登录状态
        postdata.userId = parObj.userId;
        EventUtils.ajaxReq("/jobfair/getList", "get", postdata, function(resp, status) {
            //console.log(resp);
            if (resp.data) {
                appResult.increcruitList.totalpages = resp.data.totalPage;
                appResult.increcruitList.totalitems = resp.data.totalRow;
                appResult.increcruitList.results = resp.data.list;
            } else {
                appResult.increcruitList.totalpages = 1;
                appResult.increcruitList.totalitems = 0;
                appResult.increcruitList.results = [];
            }
        });
        EventUtils.ajaxReq("/center/user/getInfo", "post", { userId: parObj.userId }, function(resp, status) {
            accountObj = resp.data;
            if (accountObj) {
                appTop.userName = resp.data.userName;
                appTop.userType = resp.data.userType;
                appTop.isLogin = true;
            }
        })
    } else {
        EventUtils.ajaxReq("/jobfair/getList", "get", postdata, function(resp, status) {
            //console.log(resp);
            if (resp.data) {
                appResult.increcruitList.totalpages = resp.data.totalPage;
                appResult.increcruitList.totalitems = resp.data.totalRow;
                appResult.increcruitList.results = resp.data.list;
            } else {
                appResult.increcruitList.totalpages = 1;
                appResult.increcruitList.totalitems = 0;
                appResult.increcruitList.results = [];
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
                jobFairType: 2,
                index: 1,
                count: 8
            }
            EventUtils.ajaxReq("/jobfair/getList", "get", postdata, function(resp, status) {
                //console.log(resp);
                if (resp.data) {
                    appResult.increcruitList.totalpages = resp.data.totalPage;
                    appResult.increcruitList.totalitems = resp.data.totalRow;
                    appResult.increcruitList.results = resp.data.list;
                } else {
                    appResult.increcruitList.totalpages = 1;
                    appResult.increcruitList.totalitems = 0;
                    appResult.increcruitList.results = [];
                }
            });
            var state = {
                title: document.title,
                url: document.location.href,
                otherkey: null
            };
            //无刷新页面替换URL
            history.replaceState(state, document.title, "display-increcruit.html");
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
                pos1: [],
                pos2: [],
                area1: [],
                area2: [],
                salary: xqdatabase.salary,
                welfare: ["五险一金", "双休", "餐补", "交通补", "带薪年假", "节日聚餐"]
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
        incRecruit: {
            scolar: "",
            major: "",
            address: "",
            majorEx: false,
            worksexp: "",
            pos: {
                pos_1: "",
                pos_2: ""
            },
            posAmount: "",
            salary: "",
            publicTime: ""
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
        selDistrict: function(obj) {
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
            this.incRecruit.address = addrString;
            resultsRequest(1);
        },
        selAllDistrict: function() {
            $(".queryform .district .on").removeClass("on");
            this.incRecruit.address = "";
            resultsRequest(1);
        },
        selMajor: function(major1, major2) {
            this.incRecruit.major = major1 + ";" + major2;
            resultsRequest(1);
        },
        selPos: function(pos, type) {
            if (type == "increcruit") {
                if (pos != "不限") {
                    this.incRecruit.pos.pos_2 = pos
                } else {
                    this.incRecruit.pos.pos_2 = this.incRecruit.pos.pos_1
                }
            }
            this.showPosBox = false;
        },
        clickPos: function() {
            $(".selectee ul").hide();
            this.showPosBox = true;
        },
        selArea: function(area, type) {
            if (type == "uni") {
                this.uniQuery.incReq.areas.area_2 = area;
            } else if (type == "pos") {
                this.posQuery.areas.area_2 = area;
            } else if (type == "unirecruit") {
                this.uniRecruit.incReq.areas.area_2 = area;
            }

            this.showAreaBox = false;
        },
        clickArea: function() {
            $(".selectee ul").hide();
            this.showAreaBox = true;
        },
        clickWel: function() {
            $(".selectee ul").hide();
            this.showWelBox = true;
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
        'incRecruit.scolar': function(curval) {
            resultsRequest(1);
        },
        'incRecruit.pos.pos_1': function(curval) {
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
        'incRecruit.pos.pos_2': function(curval) {
            if (this.incRecruit.pos.pos_1 == "") {
                this.incRecruit.pos.pos_1 = subposArray[0].name;
            }
            resultsRequest(1);
        },
        'incRecruit.worksexp': function(curval) {
            resultsRequest(1);
        },
        'incRecruit.posAmount': function(curval) {
            resultsRequest(1);
        },
        'incRecruit.salary': function(curval) {
            resultsRequest(1);
        },
        'incRecruit.publicTime': function(curval) {
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
        increcruitList: {
            totalpages: 1,
            totalitems: 0,
            curpage: 1,
            results: [],
        },
        accountId: "",
        resultType: 0
    },
    methods: {
        infoExtrac: function(info) {
            return EventUtils.infoExtrac(info);
        },
        infoShow: function(text, type) {
            return EventUtils.infoShow(text, type)
        },
        cityExtrac: function(info) {
            if (info) {
                return info.split(";")[1];
            } else {
                return ""
            }
        },
        detailLink: function(id) {
            var link = "detail-increcruit.html?jobfairId=" + id + (this.accountId ? "&userId=" + this.accountId : "");
            return EventUtils.securityUrl(link);
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
                    jobFairId: id
                }
                EventUtils.ajaxReq("/jobfair/cooperateJobFair", "post", postdata, function(resp, status) {
                    //console.log(resp);
                    if (resp.data && resp.data.isApply == "0") {
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
                    }
                });
            } else {
                appModal.showModal = true;
                appModal.showLogin = true;
                appModal.showSucc = false;
            }
        },
        showpage: function(totalpage) {
            if (totalpage < 5) {
                return totalpage;
            } else {
                return 5;
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
        loginEv: function(loginObj) {
            var postdata = {
                loginName: loginObj.account,
                password: loginObj.password
            };
            EventUtils.ajaxReq("/center/user/login", "post", postdata, function(resp, status) {
                if (resp.data) {
                    var postdata = {
                        jobFairType: 2,
                        index: 1,
                        count: 8,
                        userId: resp.data.userId
                    }
                    EventUtils.ajaxReq("/jobfair/getList", "get", postdata, function(resp, status) {
                        if (resp.data) {
                            appResult.increcruitList.totalpages = resp.data.totalPage;
                            appResult.increcruitList.totalitems = resp.data.totalRow;
                            appResult.increcruitList.results = resp.data.list;
                        } else {
                            appResult.increcruitList.totalpages = 1;
                            appResult.increcruitList.totalitems = 0;
                            appResult.increcruitList.results = [];
                        }
                    });
                }
                accountObj = resp.data;
                appTop.userType = resp.data.userType;
                appTop.userName = resp.data.name;
                appTop.isLogin = true;
                //无刷新页面替换URL
                var state = {
                    title: document.title,
                    url: document.location.href,
                    otherkey: null
                };
                history.replaceState(state, document.title, EventUtils.securityUrl("display-increcruit.html?userId=" + resp.data.userId));
                appModal.showModal = false;
                appModal.showLogin = false;
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
        $(this).attr("disabled", "true").css("background-position", bgPos);
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
    var timeIndex = "";
    switch (appQuery.incRecruit.publicTime) {
        case "三天内":
            timeIndex = 1;
            break;
        case "一周内":
            timeIndex = 2;
            break;
        case "一月内":
            timeIndex = 3;
            break;
    }
    var postdata = {
            jobFairType: 2,
            index: page,
            count: 8,
            title: appQuery.keywords,
            userAddress: appQuery.incRecruit.address,
            cvEducation: appQuery.incRecruit.scolar,
            profession: appQuery.incRecruit.major,
            cvProject: appQuery.incRecruit.worksexp,
            job: appQuery.incRecruit.pos.pos_1 == "" ? "" : appQuery.incRecruit.pos.pos_1 + ";" + appQuery.incRecruit.pos.pos_2,
            jobCount: appQuery.incRecruit.posAmount,
            cvSalary: appQuery.incRecruit.salary,
            timeType: timeIndex
        }
        //console.log(postdata);
    if (accountObj && accountObj.userId) {
        postdata.userId = accountObj.userId;
    }
    // 清除发送数据对象值为空的属性
    postdata = EventUtils.filterReqdata(postdata);
    EventUtils.ajaxReq("/jobfair/getList", "get", postdata, function(resp, status) {
        //console.log(resp);
        if (resp.data) {
            appResult.increcruitList.totalpages = resp.data.totalPage;
            appResult.increcruitList.results = resp.data.list;
            appResult.increcruitList.totalitems = resp.data.totalRow;
            //背景图像
            if (resp.data.list.length <= 1) {
                $(".results").css("background", "url('images/display-bg.png') no-repeat bottom center");
            } else {
                $(".results").css("background", "none");
            }
        } else {
            appResult.increcruitList.results = [];
            appResult.increcruitList.totalpages = 1;
            appResult.increcruitList.totalitems = 0;
            //背景图像
            $(".results").css("background", "url('images/display-bg.png') no-repeat bottom center");
        }
    });
    appResult.increcruitList.curpage = page;
}

//搜索结果请求
// function searchRequest(page) {
//     appResult.resultType = 1;
//     var postdata = {
//         title: appQuery.keywords,
//         jobFairType: 2,
//         index: page,
//         count: 8
//     }
//     if (accountObj && accountObj.userId) {
//         postdata.userId = accountObj.userId;
//     }
//     EventUtils.ajaxReq("/jobfair/searchJobFair?", "get", postdata, function(resp, status) {
//         //console.log(resp);
//         if (resp.data) {
//             appResult.increcruitList.totalpages = resp.data.totalPage;
//             appResult.increcruitList.results = resp.data.list;
//             appResult.increcruitList.totalitems = resp.data.totalRow;
//             //背景图像
//             if (resp.data.list.length <= 1) {
//                 $(".results").css("background", "url('images/display-bg.png') no-repeat bottom center");
//             } else {
//                 $(".results").css("background", "none");
//             }
//         } else {
//             appResult.increcruitList.totalpages = 1;
//             appResult.increcruitList.results = [];
//             appResult.increcruitList.totalitems = 0;
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