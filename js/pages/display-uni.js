/**
 * Created by xuanyuan on 2016/12/31.
 */
var isLogin = false;
var parObj = EventUtils.urlExtrac(window.location); //地址参数对象
var respObj = {}; //页面信息
var accountObj = {} //登录用户信息
var subposArray = [];

(function() {
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
        demandType: 1,
        index: 1,
        count: 8
    }
    console.log(postdata);
    EventUtils.ajaxReq("/demand/getList", "get", postdata, function(resp, status) {
        console.log(resp);
        if (resp.data) {
            appResult.uniList.totalpages = resp.data.totalPage;
            appResult.uniList.results = resp.data.list;
        }
    });
    if (localStorage.userId || parObj.userId) {
        EventUtils.ajaxReq("/center/user/getInfo", "post", { userId: parObj.userId || localStorage.userId }, function(resp, status) {
            //  console.log(resp);
            accountObj = resp.data;
            if (accountObj) {
                appTop.userName = resp.data.userName;
                appTop.userType = resp.data.userType;
                appTop.isLogin = true;
                isLogin = true;
            }
        })
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
            window.open("login.html?newAcc=1", "_blank");
        },
        publish: function() {
            switch (this.userType) {
                case "1":
                    var link = "uniRequire.html?new=1&userId=" + parObj.userId + "&loginId=" + parObj.loginId;
                    break;
                case "2":
                    var link = "incRequire.html?new=1&userId=" + parObj.userId + "&loginId=" + parObj.loginId;
                    break;
                default:
            }
            window.open(link, '_blank');
        },
        toCenter: function(theme) {
            switch (this.userType) {
                case "0":
                    var link = "pCenter.html?loginId=" + parObj.loginId + "&userId=" + parObj.userId + "&theme=" + theme;
                    break;
                case "1":
                    var link = "uniCenter.html?loginId=" + parObj.loginId + "&userId=" + parObj.userId + "&theme=" + theme;
                    break;
                case "2":
                    var link = "incCenter.html?loginId=" + parObj.loginId + "&userId=" + parObj.userId + "&theme=" + theme;
                    break;
                default:

            }
            window.open(link, '_blank');
        },
        logout: function() {
            this.isLogin = false;
            appModal.login.account = "";
            appModal.login.password = "";
            appResult.loginInfo = {
                userId: "",
                userType: "",
                loginId: ""
            }
            var state = {
                title: document.title,
                url: document.location.href,
                otherkey: null
            };
            //无刷新页面替换URL
            history.replaceState(state, document.title, "display-uni.html");
        }
    }
})
var appQuery = new Vue({
    el: "#app-query",
    data: {
        database: {
            uni: {
                majors: majorArray,
                majorAmount: majorSum,
                props: unilevel,
                scolars: scolarship
            },
            inc: {
                IncScale: incScale,
                IncProps: incProps,
                posAmount: positionsum,
                worksExp: worksexp,
                pos1: [],
                pos2: [],
                area1: [],
                area2: [],
                salary: salaryItems,
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
        uniQuery: {
            major: "",
            majorsum: "",
            majorEx: false,
            address: "",
            incReq: {
                areas: {
                    area_1: "",
                    area_2: ""
                },
                IncProps: "",
                IncScale: "",
                pos: {
                    pos_1: "",
                    pos_2: ""
                },
                posAmount: "",
            },
            publicTime: "",
            trainway: ""
        },
        showPosBox: false,
        showAreaBox: false,
        showWelBox: false
    },
    methods: {
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
            this.uniQuery.address = addrString;
            resultsRequest(1);
        },
        selMajor: function(major1, major2) {
            this.uniQuery.major = major1 + ";" + major2;
            resultsRequest(1);
        },
        selPos: function(pos, type) {
            if (type == "uni") {
                this.uniQuery.incReq.pos.pos_2 = pos;
            } else if (type == "inc") {
                this.incQuery.pos.pos_2 = pos;
            } else if (type == "pos") {
                this.posQuery.pos.pos_2 = pos;
            } else if (type == "unirecruit") {
                this.uniRecruit.incReq.pos.pos_2 = pos;
            } else if (type == "increcruit") {
                this.incRecruit.pos.pos_2 = pos
            }
            this.showPosBox = false;
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
        clickPos: function() {
            this.showPosBox = true;
            this.showAreaBox = false;
            $(".selectee ul").hide();
        },
        clickArea: function() {
            this.showPosBox = false;
            this.showAreaBox = true;
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
            this.posQuery.welfare = selWelfare;
            this.showWelBox = false;
        }
    },
    computed: {
        homeLink: function() {
            return appTop.isLogin ? "index.html?userId=" + parObj.userId : "index.html"
        }
    },
    mounted: function() {
        this.database.inc.pos1 = [];
        this.database.inc.area1 = [];
        for (var i = 0; i < subposArray.length; i++) {
            this.database.inc.pos1.push(subposArray[i].name);
        };
        this.database.inc.pos2 = subposArray[0].subpos;
        for (var j = 0; j < workareas.length; j++) {
            this.database.inc.area1.push(workareas[j].title);
        };
        this.database.inc.area2 = workareas[0].subareas;
    },
    watch: {
        'uniQuery.incReq.areas.area_1': function(curval) {
            for (var i = 0; i < workareas.length; i++) {
                if (workareas[i].title == curval) {
                    this.database.inc.area2 = workareas[i].subareas;
                    break;
                }
            }
        },
        'uniQuery.incReq.areas.area_2': function(curval) {
            if (this.uniQuery.incReq.areas.area_1 == "") {
                this.uniQuery.incReq.areas.area_1 = workareas[0].title;
            }
            resultsRequest(1);
        },
        'uniQuery.incReq.IncProps': function(curval) {
            resultsRequest(1);
        },
        'uniQuery.incReq.IncScale': function(curval) {
            resultsRequest(1);
        },
        'uniQuery.incReq.pos.pos_1': function(curval) {
            for (var i = 0; i < subposArray.length; i++) {
                if (subposArray[i].name == curval) {
                    this.database.inc.pos2 = subposArray[i].subpos;
                    break;
                }
            }
        },
        'uniQuery.incReq.pos.pos_2': function(curval) {
            if (this.uniQuery.incReq.pos.pos_1 == "") {
                this.uniQuery.incReq.pos.pos_1 = subposArray[0].name;
            }
            resultsRequest(1);
        },
        'uniQuery.incReq.posAmount': function(curval) {
            resultsRequest(1);
        },
        'uniQuery.majorsum': function(curval) {
            resultsRequest(1);
        },
        'uniQuery.trainway': function(curval) {
            resultsRequest(1);
        },
        'uniQuery.publicTime': function(curval) {
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
        uniList: {
            totalpages: 1,
            results: []
        },
    },
    methods: {
        infoExtrac: function(info) {
            return EventUtils.infoExtrac(info);
        },
        demandLink: function(demandId) {
            var link = "detail-uni.html?demandId=" + demandId;
            if (localStorage.userId) {
                link += "&userId=" + localStorage.userId;
            } else if (accountObj && accountObj.userId) {
                link += "&userId=" + accountObj.userId;
            } else if (parObj.userId) {
                link += "&userId=" + parObj.userId;
            }
            return link;
        },
        coApply: function(id) {
            if (appTop.isLogin) {
                if (accountObj.userId == respObj.userId) {
                    alert("无法申请自己的需求！");
                    return false;
                }
                if (accountObj.userType != "2") {
                    alert("抱歉，目前您不能申请高校的需求！");
                    return false;
                }
                var postdata = {
                    userId: accountObj.userId,
                    loginIdentifier: accountObj.loginIdentifier,
                    demandId: id
                }
                EventUtils.ajaxReq("/demand/cooperateDemand", "post", postdata, function(resp, status) {
                    console.log(resp);
                    $(".dlg-success").css({
                        top: Math.floor(($(window).height() - 412) / 2 + document.body.scrollTop)
                    });
                    appModal.showModal = true;
                    appModal.showLogin = false;
                    appModal.showSucc = true;
                });
            } else {
                $(".dlg-login").css({
                    top: Math.floor(($(window).height() - 412) / 2 + document.body.scrollTop)
                })
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
                console.log(resp);
                parObj.userId = resp.data.userId;
                parObj.userType = resp.data.userType;
                parObj.loginId = resp.data.loginIdentifier;
                accountObj = resp.data;
                appTop.userType = resp.data.userType;
                appTop.userName = resp.data.name;
                appTop.isLogin = true;
                var state = {
                    title: document.title,
                    url: document.location.href,
                    otherkey: null
                };
                //无刷新页面替换URL
                history.replaceState(state, document.title, "display-uni.html?userId=" + resp.data.userId + "&loginId=" + resp.data.loginIdentifier + "&userType=" + resp.data.userType);
                appModal.showModal = false;
                appModal.showLogin = false;
            })
        }
    },
    watch: {
        'showLogin': function(curval) {
            if (curval) {
                var dis_top = Math.floor(EventUtils.getViewport().height * 0.2) + document.body.scrollTop + "px";
                $(".dlg-login").css("top", dis_top);
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
    //     日期选择变量转化
    var dateindex = "";
    switch (appQuery.uniQuery.publicTime) {
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
            demandType: 1,
            index: page,
            count: 8,
            userAddress: appQuery.uniQuery.address,
            companyProperty: appQuery.uniQuery.incReq.areas.area_1 == "" ? "" : appQuery.uniQuery.incReq.areas.area_1 + ";" + appQuery.uniQuery.incReq.areas.area_2,
            companyScale: appQuery.uniQuery.incReq.IncScale,
            companyType: appQuery.uniQuery.incReq.areas.area_1 == "" ? "" : appQuery.uniQuery.incReq.areas.area_1 + ";" + appQuery.uniQuery.incReq.areas.area_2,
            profession: $(".queryform .major-input-1 input").val() == "" ? "不限" : appQuery.uniQuery.major,
            professionCount: appQuery.uniQuery.majorsum,
            job: appQuery.uniQuery.incReq.pos.pos_1 == "" ? "" : appQuery.uniQuery.incReq.pos.pos_1 + ";" + appQuery.uniQuery.incReq.pos.pos_2,
            jobCount: appQuery.uniQuery.incReq.posAmount,
            trainType: appQuery.uniQuery.trainway,
            timeType: dateindex
        }
        // 清楚发送数据对象值为空的属性
    for (var key in postdata) {
        if (typeof(postdata[key]) == "string" && postdata[key].indexOf(";") >= 0 && postdata[key].split(";")[0] == "不限") {
            delete postdata[key];
        }
        if (postdata[key] == "" || postdata[key] == "不限") {
            delete postdata[key];
        }
    }
    console.log(postdata);
    EventUtils.ajaxReq("/demand/getList", "get", postdata, function(resp, status) {
        console.log(resp);
        if (resp.data) {
            appResult.uniList.totalpages = resp.data.totalPage;
            appResult.uniList.results = resp.data.list;
            //背景图像
            if (resp.data.list.length <= 1) {
                $(".results").css("background", "url('images/display-bg.png') no-repeat bottom center");
            } else {
                $(".results").css("background", "none");
            }
        } else {
            appResult.uniList.totalpages = 1;
            appResult.uniList.results = [];
            //背景图像
            $(".results").css("background", "url('images/display-bg.png') no-repeat bottom center");
        }
    })
}