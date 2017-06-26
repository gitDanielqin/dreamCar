webpackJsonp([6],{

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var Vue = __webpack_require__(1);
(function () {
    var freshTempl = '<div>\
        <div class="refresh-box fresh-box" v-show="fresh.show">\
            <h2 class="refresh-hd">\
                <span class="refresh-header">刷新提示</span>\
                <ul class="lis-inline fresh-navs">\
                    <li><span class="on fresh-tab" @click.stop="selectFreshWay(\'smart\',$event.target)">智能刷新</span></li>\
                    <li><span class="fresh-tab" @click.stop="selectFreshWay(\'sofort\',$event.target)">普通刷新</span></li>\
                </ul>\
                <span class="pic-wrapper refresh-closer fr" @click="closeFresh">\
                    <i class="pic-icon"></i>\
               </span>\
            </h2>\
            <div v-show="fresh.smart">\
                <div class="refresh-cont" v-show="!barcode.smart">\
                    <p class="refresh-title"><img src="images/fresh-title.png" /></p>\
                    <table class="fresh-smart-list">\
                        <tr v-for="(item,index) in fresh.content">\
                            <td style="width:210px"><span class="icon-radio" :class="{\'on\':index==0}" @click="selectfreshitem(index,$event.target)"><i class="pic-icon"></i></span>{{item.content.split(";")[0]}}</td>\
                            <td style="width:90px;"><span class="color-orange-fc">{{item.amount}}</span>元</td>\
                            <td>{{item.content.split(";")[1]}}</td>\
                        </tr>\
                    </table>\
                    <p class="refresh-ps">注：每6小时执行一次，购买后立即执行。</p>\
                </div>\
                <div class="refresh-barcode" v-show="barcode.smart"><img :src="barcode.imgsrc" /><p>打开支付宝，扫一扫立即支付！</p></div>\
                <div class="refresh-bot">\
                    <p style="line-height:50px">应付金额<span style="color:#fc4f05;">{{fresh.sum}}</span>元<span class="price-pre">原价：{{fresh.presum}}元</span></p>\
                    <!--<p style="line-height:20px"><i class="pic-icon icon-checkbox on" @click="checkAutopay($event.target)"></i>自动续费<span style="color:#fc4f05;">{{fresh.discount}}</span></p>-->\
                    <p style="line-height:20px">账户余额：<span class="color-orange-fc">{{account.money}}</span>元</p>\
                    <p class="autopay-hint"><span class="disNo">（系统将在智能刷新到期后自动帮您续费，可通过选中自动续费启用或取消）</span></p>\
                    <button class="refresh-barcodepay" v-show="fresh.sum>account.money" @click.stop="freshAction($event.target)">扫一扫，立即支付</button>\
                    <button type="button" class="refresh-btn" @click="freshAction($event.target)">{{fresh.smartBtn}}</button>\
                </div>\
            </div>\
            <div v-show="!fresh.smart">\
                <div class="refresh-cont-normal-free" v-show="account.freeFreshTimes>0&&!barcode.normal">\
                    <p style="color:#ec7d0e;">信息刷新后：排名靠前，时间显示最新，能获得更多浏览机会</p>\
                    <p><span style="color:#fc4f05;">智能刷新</span>，效果翻倍，每次最低仅需<span style="color:#fc4f05;">0.7</span>元</p>\
                    <p style="font-size:18px; line-height:123px;">本次刷新<span style="color:#fc4f05;">免费</span>，是否确定刷新？</p>\
                </div>\
                <div class="refresh-cont-normal" v-show="account.freeFreshTimes==0&&!barcode.normal">\
                    <p style="color:#ec7d0e;">信息刷新后：排名靠前，时间显示最新，能获得更多浏览机会</p>\
                    <p><span style="color:#fc4f05;">智能刷新</span>，效果翻倍，每次最低仅需<span style="color:#fc4f05;">0.7</span>元</p>\
                    <p>提示：免费刷新次数已经用完，不享有免费刷新。</p>\
                    <p>本次刷新需要扣除推广金 <span style="color:#fc4f05;">1.0</span>元，是否确定刷新？</p>\
                </div>\
                <div class="refresh-barcode" v-show="barcode.normal"><img :src="barcode.imgsrc" /><p>打开支付宝，扫一扫立即支付！</p></div>\
                <div class="refresh-bot refresh-bot-normal">\
                    <span style="display:block;" v-show="account.freeFreshTimes==0">您的校企余额：<b style="color:#fc4f05;">{{regMoney(account.money)}}</b>元</span><button type="button" class="fresh-sofort-btn" @click="freshAction($event.target)">{{fresh.sofortBtn}}</button>\
                    <button class="refresh-barcodepay" v-show="fresh.sum>account.money" @click="freshAction($event.target)">扫一扫，立即支付</button>\
                </div>\
            </div>\
        </div>\
        <div class="refresh-hint-box fresh-hint-box" v-show="!fresh.show">\
            <h2 class="refresh-hint-hd">帖子刷新提示\
                <span class="pic-wrapper refresh-closer fr" @click="closeFresh">\
                    <i class="pic-icon"></i>\
               </span>\
            </h2>\
            <div class="refresh-hint-content">\
                <p class="LH43 fSize18">成功刷新<span class="color-orange-fc">1</span>条信息，并从余额中扣除<span class="color-orange-fc">{{fresh.sum}}</span>元</p>\
                <p class="LH40 fSize14">同类别的信息有刷新间隔限制，必须等上一条信息刷新成功后，系统才能帮您执行刷新请求。</p>\
                <div class="refresh-text-box">\
                    <h3>刷新内容</h3>\
                    <p class="fSize14 LH43"><span class="stick-name">{{fresh.title}}</span>您的信息已<span class="color-orange-fc">刷新成功</span>，正在让更多的客户<span class="color-orange-fc">查看</span></p>\
                    <p class="sticky-time">执行刷新时间： {{fresh.time}}</p>\
                    <p class="LH58 t-center fSize14">智能刷新，低价获得更多展示，每次刷新<span class="color-orange-fc">0.7</span>元起<button class="color-blue" @click="toSmartFresh">立即使用</button></p>\
                </div>\
            </div>\
        </div>\
    </div>';
    var freshbox = Vue.component("fresh-box", {
        template: freshTempl,
        props: ["freshitem", "userid", "showfresh"],
        data: function data() {
            var freshObj = {
                account: {
                    freeFreshTimes: 0,
                    money: 0
                },
                fresh: {
                    show: true,
                    title: "",
                    content: [],
                    sum: 4,
                    presum: 4,
                    time: "",
                    tarifId: 5,
                    discount: "9折",
                    smartBtn: "立即充值",
                    sofortBtn: "立即刷新",
                    smart: true
                },
                barcode: {
                    smart: false,
                    normal: false,
                    imgsrc: ""
                }
            };
            return freshObj;
        },
        methods: {
            checkAutopay: function checkAutopay(obj) {
                $(obj).toggleClass("on");
            },
            freshAction: function freshAction(obj) {
                if ($(obj).html() == "立即刷新" || $(obj).hasClass("refresh-barcodepay")) {
                    console.log(this.freshitem);
                    this.fresh.title = this.freshitem.title;
                    if (this.freshitem.demandId) {
                        //刷新校企合作需求
                        if (!this.fresh.smart) {
                            freshRequest(this.userid, this.freshitem.demandId, 1, 9, this);
                        } else {
                            freshRequest(this.userid, this.freshitem.demandId, 1, this.fresh.tarifId, this);
                        }
                    }
                    if (this.freshitem.jobFairId) {
                        //刷新招聘会需求
                        if (!this.fresh.smart) {
                            freshRequest(this.userid, this.freshitem.jobFairId, 3, 9, this);
                        } else {
                            freshRequest(this.userid, this.freshitem.jobFairId, 3, this.fresh.tarifId, this);
                        }
                    }
                    if (this.freshitem.recruitId) {
                        //刷新直聘需求
                        if (!this.fresh.smart) {
                            freshRequest(this.userid, this.freshitem.recruitId, 2, 9, this);
                        } else {
                            freshRequest(this.userid, this.freshitem.recruitId, 2, this.fresh.tarifId, this);
                        }
                    }
                }
                if ($(obj).html() == "立即充值") {
                    window.location.href = EventUtils.securityUrl("recharge.html?userId=" + this.userid);
                }
            },
            selectfreshitem: function selectfreshitem(index, obj) {
                $(".fresh-smart-list .icon-radio").removeClass("on");
                $(obj).addClass("on");
                switch (index) {
                    case 0:
                        this.fresh.presum = 1 * 4;
                        this.fresh.sum = 4;
                        this.fresh.tarifId = 5;
                        break;
                    case 1:
                        this.fresh.presum = 1 * 4 * 3;
                        this.fresh.sum = this.fresh.presum * 0.9.toFixed(1);
                        this.fresh.tarifId = 6;
                        break;
                    case 2:
                        this.fresh.presum = 1 * 4 * 5;
                        this.fresh.sum = Math.floor(this.fresh.presum * 0.8).toFixed(1);
                        this.fresh.tarifId = 7;
                        break;
                    case 3:
                        this.fresh.presum = 1 * 4 * 10;
                        this.fresh.sum = Math.floor(this.fresh.presum * 0.7).toFixed(1);
                        this.fresh.tarifId = 8;
                        break;
                    default:
                }
            },
            selectFreshWay: function selectFreshWay(way, obj) {
                $(".fresh-navs .on").removeClass("on");
                $(obj).addClass("on");
                if (way == "smart") {
                    this.fresh.smart = true;
                } else {
                    this.fresh.smart = false;
                }
            },
            closeFresh: function closeFresh() {
                this.fresh.show = true;
                this.$emit("closefresh");
            },
            toSmartFresh: function toSmartFresh() {
                this.fresh.show = true;
            },
            regMoney: function regMoney(money) {
                if (money) {
                    return money.toFixed(2);
                } else {
                    return 0;
                }
            }
        },
        watch: {
            "showfresh": function showfresh(curval) {
                //初始化
                if (curval) {
                    initFresh(this);
                } else {
                    this.fresh.show = true;
                    this.fresh.smart = true;
                }
            },
            "fresh.smart": function freshSmart(curval) {
                //当上面分页切换时，重置总计价格
                if (curval) {
                    $(".fresh-smart-list .icon-radio.on").removeClass("on");
                    $(".fresh-smart-list .icon-radio:first").addClass("on");
                    this.fresh.sum = this.fresh.content[0].amount;
                    this.fresh.presum = 4;
                } else {
                    if (this.account.freeFreshTimes > 0) {
                        this.fresh.sum = 0;
                    } else {
                        this.fresh.sum = 1;
                    }
                }
            },
            "fresh.sum": function freshSum(curval) {
                this.fresh.sofortBtn = curval > this.account.money ? "立即充值" : "立即刷新";
                this.fresh.smartBtn = curval > this.account.money ? "立即充值" : "立即刷新";
            },
            "account.money": function accountMoney(curval) {
                this.fresh.sofortBtn = this.fresh.sum > curval ? "立即充值" : "立即刷新";
                this.fresh.smartBtn = this.fresh.sum > curval ? "立即充值" : "立即刷新";
            },
            "fresh.show": function freshShow(curval) {
                if (curval) {
                    initFresh(this);
                } else {
                    EventUtils.absCenter($(".fresh-hint-box"));
                }
            }
        },
        mounted: function mounted() {
            var _this = this;
            //获取刷新模板信息
            var postdata = {
                userId: this.userid,
                type: 1
            };
            EventUtils.ajaxReq("/sys/getRefreshHotInfoList", "post", postdata, function (resp, status) {
                if (resp.data) {
                    //   console.log(resp.data);
                    resp.data.shift();
                    _this.fresh.content = resp.data;
                }
            });
        }
    });

    //刷新请求
    function freshRequest(userId, pushId, type, tarifId, freshObj) {
        var postdata = {
            userId: userId,
            pushId: pushId,
            contentType: type,
            id: tarifId
        };
        console.log(postdata);
        EventUtils.ajaxReq("/sys/refresh", "post", postdata, function (resp, status) {
            //    console.log(resp);
            console.log(resp);
            if (resp.code == "00000") {
                if (resp.data.payImg) {
                    if (freshObj.fresh.smart) {
                        freshObj.barcode.smart = true;
                    } else {
                        freshObj.barcode.normal = true;
                    }
                    freshObj.barcode.imgsrc = resp.data.payImg;
                    //轮询查看是否支付成功
                    var paycheckdata = {
                        userId: userId,
                        orderId: resp.data.orderId
                    };
                    var timer = setInterval(function () {
                        EventUtils.ajaxReq("/sys/getOrderStatus", "get", paycheckdata, function (resp, status) {
                            console.log(resp);
                            if (resp.code == "00000") {
                                clearInterval(timer);
                                swal({
                                    title: "",
                                    text: "支付成功！",
                                    type: "success",
                                    timer: 2000,
                                    showConfirmButton: false
                                });
                                freshObj.barcode.smart = false;
                                freshObj.barcode.normal = false;
                            }
                        });
                    }, 1000);
                } else {
                    freshObj.fresh.time = resp.data;
                    freshObj.fresh.show = false;
                }
            }
        });
    }
    //初始化刷新盒子
    function initFresh(freshObj) {
        $(".fresh-navs .on").removeClass("on");
        $(".fresh-navs .fresh-tab:first").addClass("on");
        $(".fresh-smart-list .icon-radio.on").removeClass("on");
        $(".fresh-smart-list .icon-radio:first").addClass("on");
        EventUtils.ajaxReq("/center/user/getAccount", "get", { userId: freshObj.userid }, function (resp, status) {
            console.log(resp);
            freshObj.account.money = resp.data.useableBalance;
            freshObj.account.freeFreshTimes = resp.data.freeRefresh;
            freshObj.fresh.sum = freshObj.fresh.content[0].amount;
            freshObj.fresh.presum = 4;
            freshObj.fresh.smart = true;
            freshObj.barcode.smart = false;
            freshObj.barcode.normal = false;
            freshObj.fresh.show = true;
        });
    }
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var Vue = __webpack_require__(1);
(function () {
    var stickTempl = '<div>\
        <div class="refresh-box sticky-box" v-show="sticky.show">\
            <h2 class="refresh-hd">\
                <span class="refresh-header">置顶提示</span>\
                <ul class="lis-inline fresh-navs stick-navs">\
                    <li><span class="on" @click.stop="selectStickWay(\'sofort\',$event.target)">立即置顶</span></li>\
                    <!--<li><span @click.stop="selectStickWay(\'plan\',$event.target)">计划置顶</span></li>-->\
                </ul>\
                <span class="pic-wrapper refresh-closer fr" @click="closeSticky">\
                   <i class="pic-icon"></i>\
              </span>\
            </h2>\
            <div v-show="sticky.sofort">\
                <div class="refresh-cont" v-show="!barcode.sofort">\
                    <p class="stick-cont-title">信息置顶，排名提前到第一页，获得海量曝光，效果翻倍，赶快来试试吧！</p>\
                    <table class="sticky-sofort-list">\
                        <tr v-for="(item,index) in sticky.content">\
                            <td class="W210"><span class="icon-radio" :class="{\'on\':index==0}" @click="selectStickyItem(index,$event.target)"><i class="pic-icon"></i></span>{{item.content.split(";")[0]}}</td>\
                            <td class="W90"><span class="color-orange-fc">{{item.amount}}</span>元</td>\
                            <td>{{item.content.split(";")[1]}}</td>\
                        </tr>\
                    </table>\
                    <p class="refresh-ps">注：每24小时执行一次，购买后立即执行。</p>\
                </div>\
                <div class="refresh-barcode" v-show="barcode.sofort"><img :src="barcode.imgsrc" /><p>打开支付宝，扫一扫立即支付！</p></div>\
                <div class="refresh-bot">\
                    <p class="LH50">应付金额<span class="color-orange-fc">{{sticky.sum}}</span>元<span class="price-pre">原价：{{sticky.presum}}元</span></p>\
                    <!--<p class="LH20"><i class="pic-icon icon-checkbox on" @click="checkAutopay($event.target)"></i>自动续费<span class="color-orange-fc">{{sticky.discount}}</span></p>-->\
                    <p class="LH20">账户余额：<span class="color-orange-fc">{{account.money}}</span>元</p>\
                    <p class="autopay-hint"><span class="disNo">（系统将在智能置顶到期后自动帮您续费，可通过选中自动续费启用或取消）</span></p>\
                    <button type="button" class="refresh-btn" @click="stickAction($event.target)">{{sticky.sofortBtn}}</button>\
                    <button type="button" class="refresh-barcodepay" v-show="sticky.sum>account.money" @click="stickAction($event.target)">扫一扫，立即支付</button>\
                </div>\
            </div>\
            <div v-show="!sticky.sofort">\
                <div class="refresh-cont paLeft50 paBot20">\
                    <p class="LH52 fSize14 color-orange2">信息置顶，排名提前到第一页，获得海量曝光，效果翻倍，赶快来试试吧！</p>\
                    <p class="LH26 fSize16"><label class="plan-label">计划时间</label><input type="text" class="date-input" placeholder="2016-12-17" />到<input type="text" class="date-input" placeholder="2016-12-17" /></p>\
                    <p class="maT11 LH34"><label class="plan-label">置顶时段</label></p>\
                    <table class="plan-sticky-table">\
                        <tr>\
                            <th>时间</th>\
                            <th>星期一</th>\
                            <th>星期二</th>\
                            <th>星期三</th>\
                            <th>星期四</th>\
                            <th>星期五</th>\
                            <th>星期六</th>\
                            <th>星期日</th>\
                        </tr>\
                        <tr>\
                            <td class="td-title">全天置顶</td>\
                            <td name="1"></td>\
                            <td name="2"></td>\
                            <td name="3"></td>\
                            <td name="4"></td>\
                            <td name="5"></td>\
                            <td name="6"></td>\
                            <td name="7"></td>\
                        </tr>\
                        <tr>\
                            <td class="td-title">早8点-晚8点</td>\
                            <td name="1"></td>\
                            <td name="2"></td>\
                            <td name="3"></td>\
                            <td name="4"></td>\
                            <td name="5"></td>\
                            <td name="6"></td>\
                            <td name="7"></td>\
                        </tr>\
                        <tr>\
                            <td class="td-title">不置顶</td>\
                            <td name="1"></td>\
                            <td name="2"></td>\
                            <td name="3"></td>\
                            <td name="4"></td>\
                            <td name="5"></td>\
                            <td name="6"></td>\
                            <td name="7"></td>\
                        </tr>\
                    </table>\
                </div>\
                <div class="stick-bot-plan">\
                    <ul class="LH36">\
                        <li>总计价格：<span class="color-orange-fc">{{sticky.sum}}</span>元</li>\
                        <li>账户余额：<span class="color-orange-fc">{{account.money}}</span>元</li>\
                    </ul>\
                    <button type="button" class="refresh-btn plan-btn">{{sticky.planBtn}}</button>\
                </div>\
            </div>\
        </div>\
        <div class="refresh-hint-box stick-hint-box" v-show="!sticky.show">\
            <h2 class="refresh-hint-hd">帖子置顶提示\
                <span class="pic-wrapper refresh-closer fr" @click="closeSticky">\
                   <i class="pic-icon"></i>\
              </span>\
            </h2>\
            <div class="refresh-hint-content">\
                <p class="LH43 fSize18">成功置顶<span class="color-orange-fc">1</span>条信息，并从余额中扣除<span class="color-orange-fc">{{sticky.sum}}</span>元</p>\
                <p class="LH40 fSize14">同类别的信息有置顶间隔限制，必须等上一条信息置顶成功后，系统才能帮您执行置顶请求。</p>\
                <div class="refresh-text-box">\
                    <h3 class="stick-hint-title">置顶内容</h3>\
                    <p class="fSize14 LH43"><span class="stick-name">{{sticky.title}}</span>您的信息已<span class="color-orange-fc">置顶成功</span>，正在让更多的客户<span class="color-orange-fc">查看</span></p>\
                    <p class="sticky-time">执行置顶时间：{{sticky.time}}</p>\
                    <p class="LH58 t-center fSize14">计划置顶，低价获得更多展示，每次置顶<span class="color-orange-fc">7</span>元起<button class="color-blue" @click="toPlanSticky">立即使用</button></p>\
                </div>\
            </div>\
        </div>\
    </div>';

    Vue.component("stick-box", {
        template: stickTempl,
        props: ["stickitem", "userid", "showsticky"],
        data: function data() {
            return {
                account: {
                    money: 0
                },
                sticky: {
                    content: [],
                    show: true,
                    sum: 0,
                    presum: 0,
                    tarifId: 1,
                    title: "",
                    time: "16:08:02",
                    discount: "9折",
                    sofortBtn: "立即充值",
                    planBtn: "立即置顶",
                    sofort: true
                },
                barcode: {
                    sofort: false,
                    imgsrc: ""
                }
            };
        },
        methods: {
            checkAutopay: function checkAutopay(obj) {
                $(obj).toggleClass("on");
            },
            stickAction: function stickAction(obj) {
                this.sticky.title = this.stickitem.title;
                if ($(obj).html() == "立即置顶" || $(obj).hasClass("refresh-barcodepay")) {
                    this.sticky.title = this.stickitem.title;
                    if (this.stickitem.demandId) {
                        //刷新校企合作需求
                        if (!this.sticky.sofort) {
                            stickRequest(this.userid, this.stickitem.demandId, 1, 9, this);
                        } else {
                            stickRequest(this.userid, this.stickitem.demandId, 1, this.sticky.tarifId, this);
                        }
                    }
                    if (this.stickitem.jobFairId) {
                        //刷新招聘会需求
                        if (!this.sticky.sofort) {
                            stickRequest(this.userid, this.stickitem.jobFairId, 3, 9, this);
                        } else {
                            stickRequest(this.userid, this.stickitem.jobFairId, 3, this.sticky.tarifId, this);
                        }
                    }
                    if (this.stickitem.recruitId) {
                        //刷新直聘需求
                        if (!this.sticky.sofort) {
                            stickRequest(this.userid, this.stickitem.recruitId, 2, 9, this);
                        } else {
                            stickRequest(this.userid, this.stickitem.recruitId, 2, this.sticky.tarifId, this);
                        }
                    }
                }
                if ($(obj).html() == "立即充值") {
                    window.location.href = EventUtils.securityUrl("recharge.html?userId=" + this.userid);
                }
            },
            selectStickWay: function selectStickWay(way, obj) {
                $(".stick-navs .on").removeClass("on");
                $(obj).addClass("on");
                if (way == "sofort") {
                    $(".sticky-sofort-list .icon-radio.on").removeClass("on");
                    $(".sticky-sofort-list .icon-radio:first").addClass("on");
                    this.sticky.sofort = true;
                    this.sticky.sum = parseInt(this.sticky.content[0].amount);
                    this.sticky.presum = parseInt(this.sticky.content[0].amount);
                } else {
                    this.sticky.sofort = false;
                    var summe = 0;
                    $(".plan-sticky-table tr").each(function (index) {
                        if (index == 1) {
                            summe += $(this).find("td.on").length * 70;
                        } else if (index == 2) {
                            summe += $(this).find("td.on").length * 50;
                        };
                    });
                    this.sticky.sum = summe;
                }
            },
            selectStickyItem: function selectStickyItem(index, obj) {
                $(".sticky-sofort-list .icon-radio").removeClass("on");
                $(obj).addClass("on");
                this.sticky.sum = parseInt(this.sticky.content[index].amount);
                this.sticky.tarifId = this.sticky.content[index].id;
                switch (index) {
                    case 0:
                        this.sticky.presum = 10;
                        break;
                    case 1:
                        this.sticky.presum = 10 * 3;
                        break;
                    case 2:
                        this.sticky.presum = 10 * 5;
                        break;
                    case 3:
                        this.sticky.presum = 10 * 10;
                        break;
                    default:
                }
            },
            toPlanSticky: function toPlanSticky() {
                var _this = this;
                EventUtils.ajaxReq("/center/user/getAccount", "get", { userId: this.userid }, function (resp, status) {
                    _this.account.money = resp.data.useableBalance;
                    _this.sticky.show = true;
                });
            },
            closeSticky: function closeSticky() {
                this.$emit("closesticky");
            }
        },
        watch: {
            "showsticky": function showsticky(curval) {
                if (curval) {
                    //初始化页面信息 
                    $(".sticky-sofort-list .icon-radio.on").removeClass("on");
                    $(".sticky-sofort-list .icon-radio:first").addClass("on");
                    initSticky(this);
                }
            },
            "sticky.sum": function stickySum(curval) {
                this.sticky.sofortBtn = curval > this.account.money ? "立即充值" : "立即置顶";
                this.sticky.planBtn = curval > this.account.money ? "立即充值" : "立即置顶";
            },
            "account.money": function accountMoney(curval) {
                this.sticky.sofortBtn = this.sticky.sum > curval ? "立即充值" : "立即置顶";
                this.sticky.planBtn = this.sticky.sum > curval ? "立即充值" : "立即置顶";
            },
            "sticky.show": function stickyShow(curval) {
                if (!curval) {
                    EventUtils.absCenter($(".stick-hint-box"));
                } else {
                    initSticky(this);
                }
            }
        },
        mounted: function mounted() {
            var _this = this;
            //获取刷新模板信息
            var postdata = {
                userId: this.userid,
                type: 2
            };
            EventUtils.ajaxReq("/sys/getRefreshHotInfoList", "post", postdata, function (resp, status) {
                if (resp.data) {
                    _this.sticky.content = resp.data;
                }
            });
        }
    });

    function initSticky(stickyObj) {
        stickyObj.sticky.sofort = true;
        stickyObj.sticky.presum = stickyObj.sticky.sum = stickyObj.sticky.content[0].amount;
        EventUtils.ajaxReq("/center/user/getAccount", "get", { userId: stickyObj.userid }, function (resp, status) {
            stickyObj.account.money = resp.data.useableBalance;
            stickyObj.sticky.show = true;
            stickyObj.barcode.sofort = false;
        });
    }

    function stickRequest(userId, pushId, type, tarifId, stickObj) {
        var postdata = {
            userId: userId,
            pushId: pushId,
            contentType: type,
            id: tarifId
        };
        console.log(postdata);
        EventUtils.ajaxReq("/sys/hotUp", "post", postdata, function (resp, statsu) {
            if (resp.code == "00000") {
                if (resp.data.payImg) {
                    stickObj.barcode.sofort = true;
                    stickObj.barcode.imgsrc = resp.data.payImg;
                    //轮询查看是否支付成功
                    var paycheckdata = {
                        userId: userId,
                        orderId: resp.data.orderId
                    };
                    var timer = setInterval(function () {
                        EventUtils.ajaxReq("/sys/getOrderStatus", "get", paycheckdata, function (resp, status) {
                            console.log(resp);
                            if (resp.code == "00000") {
                                clearInterval(timer);
                                swal({
                                    title: "",
                                    text: "支付成功！",
                                    type: "success",
                                    timer: 2000,
                                    showConfirmButton: false
                                });
                                stickObj.barcode.sofort = false;
                            }
                        });
                    }, 1500);
                } else {
                    stickObj.sticky.show = false;
                }
            }
        });
    }
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vue = __webpack_require__(1);
__webpack_require__(4);
__webpack_require__(2);
__webpack_require__(6);
__webpack_require__(8);
__webpack_require__(18);
__webpack_require__(25);
__webpack_require__(26);
__webpack_require__(9);
__webpack_require__(3);
__webpack_require__(5);
__webpack_require__(7);
__webpack_require__(37);

var parObj = EventUtils.urlExtrac(window.location);
var respObj = {};
var mapper = {}; //岗位,招聘会日期与id的对应表 
function infoRequest() {
    EventUtils.ajaxReq("/hrcenter/getDownList", "get", { userId: parObj.userId }, function (resp, status) {
        console.log(resp);
        for (var i = 0; i < resp.data.recruitList.length; i++) {
            resp.data.recruitList[i].job = EventUtils.infoExtrac(resp.data.recruitList[i].job);
        }
        //存储对应关系
        mapper.recruit = resp.data.recruitList;
        mapper.jobfair = resp.data.jobFairList;
        //提取直聘岗位信息
        var recruitArray = [];
        for (var j = 0; j < resp.data.recruitList.length; j++) {
            recruitArray.push(resp.data.recruitList[j].job);
        }
        //提取招聘会日期信息
        var jobfairArray = [];
        for (var k = 0; k < resp.data.jobFairList.length; k++) {
            jobfairArray.push(resp.data.jobFairList[k].startTime);
        }
        hrApp.database.posList = recruitArray;
        hrApp.database.jobfairList = jobfairArray;
        //  console.log(resp);
        if (!parObj.jobfairId && !parObj.recruitId) {
            //既没有招聘ID又没有直聘ID,从HR中心按钮过来的
            hrApp.resumes.resumePos = recruitArray[0];
        }
    });
    if (parObj.jobfairId) {
        jobfairRequest(parObj.jobfairId, 0, 1, parObj.jobfairId);
    };
    if (parObj.recruitId) {
        recruitRequest(parObj.recruitId, 0, 1, parObj.recruitId);
    }
}
var appTop = new Vue({
    el: "#app-top",
    data: {
        homeLink: EventUtils.securityUrl("index.html?userId=" + parObj.userId),
        centerLink: EventUtils.securityUrl("incCenter.html?userId=" + parObj.userId + "&loginId=" + parObj.loginId)
    },
    methods: {
        showMsg: function showMsg() {
            appModal.show.message = true;
            appModal.show.modal = true;
        }
    }
});
var hrApp = new Vue({
    el: "#hr-app",
    data: {
        database: {
            posList: [],
            jobfairList: []
        },
        show: {
            cvmanager: true
        },
        resumes: {
            totalitems: 0,
            totalpages: 1,
            curpage: 1,
            handleCount: 0, //新投递消息参数
            resultIndex: 0, //侧边栏点击参数 0-5
            resumeType: "企业直聘",
            resumePos: "", //招聘岗位下拉框选项
            jobfairDate: "", //招聘会日期下拉框选项
            cvList: []
        },
        interItems: [],
        resumeItems: [],
        position: {
            show: false,
            totalpages: 1,
            totalitems: 0,
            curpage: 1,
            posType: 0, //0 企业直聘 1 招聘会
            results: []
        }
    },
    methods: {
        hrnav: function hrnav(obj) {
            if (!(0, _jquery2.default)(obj).hasClass("hr-navs")) {
                (0, _jquery2.default)(".hr-navs .on").removeClass("on");
                (0, _jquery2.default)(obj).addClass("on");
            }
            if ((0, _jquery2.default)(obj).hasClass("cv-manager")) {
                this.show.cvmanager = true;
            }
            if ((0, _jquery2.default)(obj).hasClass("pos-manager")) {
                this.show.cvmanager = false;
                (0, _jquery2.default)(".pos-sider .on").trigger("click");
            }
        },
        showpage: function showpage(totalpages) {
            if (totalpages > 3) {
                return 3;
            } else {
                return totalpages;
            }
        },
        infoExtrac: function infoExtrac(text) {
            return EventUtils.infoExtrac(text);
        },
        infoShow: function infoShow(text, type) {
            return EventUtils.infoShow(text, type);
        },
        cityExtrac: function cityExtrac(text) {
            if (text) {
                return text.split(";")[1];
            } else {
                return "";
            }
        },
        topage: function topage(page, type) {
            console.log(type);
            if (type == "cv") {
                if (this.resumes.resumeType == "企业直聘") {
                    recruitRequest(this.resumes.resumePos, this.resumes.resultIndex, page);
                }
                if (this.resumes.resumeType == "招聘会") {
                    console.log(2);
                    jobfairRequest(this.resumes.jobfairDate, this.resumes.resultIndex, page);
                }
            };
            if (type == "position") {
                positionRequest(this.position.posType, page);
            }
        },
        selnav: function selnav(obj) {
            if (!(0, _jquery2.default)(obj).hasClass("sider")) {
                (0, _jquery2.default)(".mainCont .sider .on").removeClass("on");
                (0, _jquery2.default)(obj).addClass("on");
            }
            if ((0, _jquery2.default)(obj).hasClass("resume-box")) {
                if (this.resumes.resumeType == "招聘会") {
                    jobfairRequest(this.resumes.jobfairDate, 0, 1);
                } else {
                    recruitRequest(this.resumes.resumePos, 0, 1);
                }
            }
            if ((0, _jquery2.default)(obj).hasClass("resume-unview")) {
                if (this.resumes.resumeType == "招聘会") {
                    jobfairRequest(this.resumes.jobfairDate, 1, 1);
                } else {
                    recruitRequest(this.resumes.resumePos, 1, 1);
                }
            };
            if ((0, _jquery2.default)(obj).hasClass("resume-viewed")) {
                if (this.resumes.resumeType == "招聘会") {
                    jobfairRequest(this.resumes.jobfairDate, 2, 1);
                } else {
                    recruitRequest(this.resumes.resumePos, 2, 1);
                }
            };
            if ((0, _jquery2.default)(obj).hasClass("interview-box")) {
                if (this.resumes.resumeType == "招聘会") {
                    jobfairRequest(this.resumes.jobfairDate, 3, 1);
                } else {
                    recruitRequest(this.resumes.resumePos, 3, 1);
                }
            };
            if ((0, _jquery2.default)(obj).hasClass("inter-unsuit")) {
                if (this.resumes.resumeType == "招聘会") {
                    jobfairRequest(this.resumes.jobfairDate, 4, 1);
                } else {
                    recruitRequest(this.resumes.resumePos, 4, 1);
                }
            }
            if ((0, _jquery2.default)(obj).hasClass("inter-suit")) {
                if (this.resumes.resumeType == "招聘会") {
                    jobfairRequest(this.resumes.jobfairDate, 5, 1);
                } else {
                    recruitRequest(this.resumes.resumePos, 5, 1);
                }
            }
        },
        invite: function invite(item) {
            console.log(item);
            if (item.jobFairId) {
                var postdata = {
                    applyId: item.applyId,
                    result: 3
                };
                EventUtils.ajaxReq("/hrcenter/modifyJobFairInfo", "post", postdata, function (resp, status) {
                    if (hrApp.resumes.cvList.length == 1 && hrApp.resumes.curpage > 1) {
                        hrApp.resumes.curpage--;
                    }
                    (0, _jquery2.default)(".resumeBox .pagination a.page").eq(hrApp.resumes.curpage - 1).parent().trigger("click");
                });
            };
            if (item.recruitId) {
                var postdata = {
                    applyId: item.applyId,
                    result: 3
                };
                EventUtils.ajaxReq("/hrcenter/modifyRecruitInfo", "post", postdata, function (resp, status) {
                    if (hrApp.resumes.cvList.length == 1 && hrApp.resumes.curpage > 1) {
                        hrApp.resumes.curpage--;
                    }
                    (0, _jquery2.default)(".resumeBox .pagination a.page").eq(hrApp.resumes.curpage - 1).parent().trigger("click");
                });
            }
        },
        deny: function deny(item) {
            if (item.jobFairId) {
                var postdata = {
                    applyId: item.applyId,
                    result: 2
                };
                EventUtils.ajaxReq("/hrcenter/modifyJobFairInfo", "post", postdata, function (resp, status) {
                    if (hrApp.resumes.cvList.length == 1 && hrApp.resumes.curpage > 1) {
                        hrApp.resumes.curpage--;
                    }
                    (0, _jquery2.default)(".resumeBox .pagination a.page").eq(hrApp.resumes.curpage - 1).parent().trigger("click");
                });
            };
            if (item.recruitId) {
                var postdata = {
                    applyId: item.applyId,
                    result: 2
                };
                EventUtils.ajaxReq("/hrcenter/modifyRecruitInfo", "post", postdata, function (resp, status) {
                    if (hrApp.resumes.cvList.length == 1 && hrApp.resumes.curpage > 1) {
                        hrApp.resumes.curpage--;
                    }
                    (0, _jquery2.default)(".resumeBox .pagination a.page").eq(hrApp.resumes.curpage - 1).parent().trigger("click");
                });
            }
        },
        passCv: function passCv(item) {
            if (item.jobFairId) {
                var postdata = {
                    applyId: item.applyId,
                    result: 1
                };
                EventUtils.ajaxReq("/hrcenter/modifyJobFairInfo", "post", postdata, function (resp, status) {
                    if (hrApp.resumes.cvList.length == 1 && hrApp.resumes.curpage > 1) {
                        hrApp.resumes.curpage--;
                    }
                    (0, _jquery2.default)(".resumeBox .pagination a.page").eq(hrApp.resumes.curpage - 1).parent().trigger("click");
                });
            };
            if (item.recruitId) {
                var postdata = {
                    applyId: item.applyId,
                    result: 1
                };
                EventUtils.ajaxReq("/hrcenter/modifyRecruitInfo", "post", postdata, function (resp, status) {
                    if (hrApp.resumes.cvList.length == 1 && hrApp.resumes.curpage > 1) {
                        hrApp.resumes.curpage--;
                    }
                    (0, _jquery2.default)(".resumeBox .pagination a.page").eq(hrApp.resumes.curpage - 1).parent().trigger("click");
                });
            }
        },
        showCv: function showCv(item) {
            EventUtils.ajaxReq("/user/user/getInfo", "get", { userId: item.userId }, function (resp, status) {
                var respObj = resp.data;
                //    console.log(respObj);
                var briefdata = {
                    name: respObj.userInfo.realName,
                    gender: respObj.userInfo.sex == "1" ? "男" : "女",
                    birthyear: respObj.userInfo.birthday ? respObj.userInfo.birthday.split("-")[0] : "",
                    birthmonth: respObj.userInfo.birthday ? respObj.userInfo.birthday.split("-")[1] : "",
                    birthday: respObj.userInfo.birthday ? respObj.userInfo.birthday.split("-")[2] : "",
                    address: {
                        province: respObj.userInfo.province,
                        city: respObj.userInfo.city,
                        district: respObj.userInfo.area
                    },
                    phone: respObj.userInfo.mobile,
                    state: respObj.userInfo.liveStatus
                };
                appModal.baseInfo = briefdata;
                (0, _jquery2.default)(".porto-img").html("<img src='" + respObj.userInfo.userIcon + "' />");
                var familyStatus = "";
                switch (respObj.userInfo.marryStatus) {
                    case "0":
                        familyStatus = "未婚";
                        break;
                    case "1":
                        familyStatus = "已婚";
                        break;
                    case "2":
                        familyStatus = "离异";
                        break;
                }
                var worksExps = [];
                for (var i = 0; i < respObj.companyList.length; i++) {
                    var workexp = {
                        show: i == 0,
                        cvCpyId: respObj.companyList[i].cvCpyId,
                        firma: respObj.companyList[i].companyName,
                        trade: respObj.companyList[i].companyType,
                        pos: respObj.companyList[i].position,
                        province: respObj.companyList[i].workAddress ? respObj.companyList[i].workAddress.split(";")[0] : "",
                        city: respObj.companyList[i].workAddress ? respObj.companyList[i].workAddress.split(";")[1] : "",
                        district: respObj.companyList[i].workAddress ? respObj.companyList[i].workAddress.split(";")[2] : "",
                        salary: respObj.companyList[i].salary,
                        startyear: respObj.companyList[i].startTime ? respObj.companyList[i].startTime.split("-")[0] : "",
                        startmonth: respObj.companyList[i].startTime ? respObj.companyList[i].startTime.split("-")[1] : "",
                        endyear: respObj.companyList[i].endTime ? respObj.companyList[i].endTime.split("-")[0] : "",
                        endmonth: respObj.companyList[i].endTime ? respObj.companyList[i].endTime.split("-")[1] : "",
                        resp: respObj.companyList[i].content
                    };
                    worksExps.push(workexp);
                }
                var edus = [];
                for (var j = 0; j < respObj.eduList.length; j++) {
                    var edu = {
                        show: j == 0,
                        cvEduId: respObj.eduList[j].cvEduId,
                        uni: respObj.eduList[j].schoolName,
                        major: respObj.eduList[j].professional ? respObj.eduList[j].professional.split(";")[0] : "",
                        submajor: respObj.eduList[j].professional ? respObj.eduList[j].professional.split(";")[1] : "",
                        exmajor: respObj.eduList[j].professional ? respObj.eduList[j].professional.split(";")[2] : "",
                        startyear: respObj.eduList[j].startTime ? respObj.eduList[j].startTime.split("-")[0] : "",
                        startmonth: respObj.eduList[j].startTime ? respObj.eduList[j].startTime.split("-")[1] : "",
                        endyear: respObj.eduList[j].endTime ? respObj.eduList[j].endTime.split("-")[0] : "",
                        endmonth: respObj.eduList[j].endTime ? respObj.eduList[j].endTime.split("-")[1] : "",
                        qualification: respObj.eduList[j].qualification
                    };
                    edus.push(edu);
                }
                var projects = [];
                for (var k = 0; k < respObj.projectList.length; k++) {
                    var project = {
                        show: k == 0,
                        cvProId: respObj.projectList[k].cvProId,
                        name: respObj.projectList[k].projectName,
                        firma: respObj.projectList[k].companyName,
                        startyear: respObj.projectList[k].startTime ? respObj.projectList[k].startTime.split("-")[0] : "",
                        startmonth: respObj.projectList[k].startTime ? respObj.projectList[k].startTime.split("-")[1] : "",
                        endyear: respObj.projectList[k].endTime ? respObj.projectList[k].endTime.split("-")[0] : "",
                        endmonth: respObj.projectList[k].endTime ? respObj.projectList[k].endTime.split("-")[1] : "",
                        desc: respObj.projectList[k].description,
                        resp: respObj.projectList[k].position,
                        achiev: respObj.projectList[k].achievement
                    };
                    projects.push(project);
                }
                var cvInfo = {
                    firstEdit: false,
                    realName: respObj.userInfo.realName, //5 
                    family: familyStatus, //5
                    phone: respObj.userInfo.mobile, //5
                    email: respObj.userInfo.email, //5
                    nativePlace: respObj.userInfo.nativePlace, //5
                    nation: respObj.userInfo.nation, //5
                    curWorksIndex: 1,
                    expect: { //20
                        tradeItems: respObj.cvInfo.expJob,
                        posItems: respObj.cvInfo.expJobFunction,
                        province: respObj.cvInfo.expPlace ? respObj.cvInfo.expPlace.split(";")[0] : "",
                        city: respObj.cvInfo.expPlace ? respObj.cvInfo.expPlace.split(";")[1] : "",
                        district: respObj.cvInfo.expPlace ? respObj.cvInfo.expPlace.split(";")[2] : "",
                        salary: respObj.cvInfo.expSalary
                    },
                    worksExps: worksExps, //10
                    edus: edus, //10
                    projects: projects, //10
                    laSkills: respObj.cvInfo.languages, //5
                    selfEval: respObj.cvInfo.evaluation, //5
                    psInfo: respObj.cvInfo.anymore, //5
                    skills: respObj.cvInfo.speciality //5
                };
                appModal.resumeInfo = cvInfo;
                appModal.show.cv = true;
                appModal.show.modal = true;
            });
            if (item.jobFairId) {
                var postdata = {
                    applyId: item.applyId
                };
                EventUtils.ajaxReq("/hrcenter/readJobFair", "post", postdata, function (resp, status) {});
            };
            if (item.recruitId) {
                var postdata = {
                    applyId: item.applyId
                };
                EventUtils.ajaxReq("/hrcenter/readRecruit", "post", postdata, function (resp, status) {});
            }
        },
        modItem: function modItem(item) {
            var link = "incRequire.html?new=0&userId=" + parObj.userId + "&loginId=" + parObj.loginId;
            if (item.jobFairId) {
                link += "&jobfairId=" + item.jobFairId + "&demandSrc=1";
            }
            if (item.recruitId) {
                link += "&recruitId=" + item.recruitId + "&demandSrc=2";
            }
            link = EventUtils.securityUrl(link);
            window.open(link, "_blank");
        },
        delItem: function delItem(item) {
            if (item.jobFairId) {
                var postdata = {
                    userId: parObj.userId,
                    loginIdentifier: parObj.loginId,
                    jobFairId: item.jobFairId
                };
                EventUtils.ajaxReq("/jobfair/delInfo", "post", postdata, function (resp, status) {
                    if (hrApp.position.results.length == 1 && hrApp.position.curpage > 1) {
                        hrApp.position.curpage -= 1;
                    }
                    (0, _jquery2.default)(".posCont .pagination a.page").eq(hrApp.position.curpage - 1).parent().trigger("click");
                });
            }
            if (item.recruitId) {
                var postdata = {
                    userId: parObj.userId,
                    loginIdentifier: parObj.loginId,
                    recruitId: item.recruitId
                };

                EventUtils.ajaxReq("/recruit/delInfo", "post", postdata, function (resp, status) {
                    if (hrApp.position.results.length == 1 && hrApp.position.curpage > 1) {
                        hrApp.position.curpage -= 1;
                    }
                    (0, _jquery2.default)(".posCont .pagination a.page").eq(hrApp.position.curpage - 1).parent().trigger("click");
                });
            }
        },
        freshItem: function freshItem(item) {
            appModal.fresh.freshItem = item;
            appModal.show.freshbox = true;
            appModal.show.modal = true;
        },
        stickItem: function stickItem(item) {
            appModal.sticky.stickItem = item;
            appModal.show.stickybox = true;
            appModal.show.modal = true;
        },
        selpos: function selpos(obj) {
            if ((0, _jquery2.default)(obj).hasClass("pos-jobfair")) {
                positionRequest(0, 1);
                (0, _jquery2.default)(".pos-sider .on").removeClass("on");
                (0, _jquery2.default)(obj).addClass("on");
            }
            if ((0, _jquery2.default)(obj).hasClass("pos-recruit")) {
                positionRequest(1, 1);
                (0, _jquery2.default)(".pos-sider .on").removeClass("on");
                (0, _jquery2.default)(obj).addClass("on");
            }
        },
        requireLink: function requireLink(item) {
            if (item.recruitId) {
                var link = "detail-position.html?userId=" + parObj.userId + "&recruitId=" + item.recruitId;
            }
            if (item.jobFairId) {
                var link = "detail-increcruit.html?userId=" + parObj.userId + "&jobfairId=" + item.jobFairId;
            }
            link = EventUtils.securityUrl(link);
            return link;
        },
        publish: function publish() {
            var link = "incRequire.html?new=1&userId=" + parObj.userId + "&loginId=" + parObj.loginId;
            link = EventUtils.securityUrl(link);
            window.open(link, "_blank");
        }
    },
    watch: {
        "resumes.resumeType": function resumesResumeType(curval) {
            if (curval == "招聘会") {
                if (this.resumes.jobfairDate == "") {
                    this.resumes.jobfairDate = this.database.jobfairList[0];
                } else {
                    jobfairRequest(this.resumes.jobfairDate, this.resumes.resultIndex, 1);
                }
            } else if (curval == "企业直聘") {
                if (this.resumes.resumePos == "") {
                    this.resumes.resumePos = this.database.posList[0];
                } else {
                    recruitRequest(this.resumes.resumePos, this.resumes.resultIndex, 1);
                }
            }
            this.$nextTick(function () {
                selectInitPos();
            });
        },
        'resumes.resumePos': function resumesResumePos(curval) {
            recruitRequest(curval, this.resumes.resultIndex, 1);
        },
        'resumes.jobfairDate': function resumesJobfairDate(curval) {
            jobfairRequest(curval, this.resumes.resultIndex, 1);
        }
    },
    components: {
        'pagination': pagination
    }
});

var appFooter = new Vue({
    el: "#app-footer",
    data: {
        userId: parObj.userId
    }
});
var appModal = new Vue({
    el: "#app-modal",
    data: {
        show: {
            modal: false,
            cv: false,
            message: false,
            freshbox: false,
            stickybox: false
        },
        account: {
            userId: parObj.userId
        },
        baseInfo: {
            gender: "",
            birthyear: "",
            birthmonth: "",
            birthday: "",
            address: {
                province: "",
                city: "",
                district: ""
            },
            phone: "",
            state: ""
        },
        resumeInfo: {
            realName: "",
            family: "",
            phone: "",
            email: "",
            nativePlace: "",
            nation: "",
            curWorksIndex: 1,
            expect: {
                tradeItems: "",
                posItems: "",
                province: "",
                city: "",
                district: "",
                salary: ""
            },
            worksExps: [{
                show: true,
                firma: "",
                trade: "",
                pos: "",
                province: "",
                city: "",
                district: "",
                salary: "",
                startyear: "",
                startmonth: "",
                endyear: "",
                endmonth: "",
                resp: ""
            }],
            edus: [{
                show: true,
                uni: "",
                major: "",
                submajor: "",
                exmajor: "",
                startyear: "",
                startmonth: "",
                endyear: "",
                endmonth: "",
                qualification: ""
            }],
            projects: [{
                show: true,
                name: "",
                firma: "",
                startyear: "",
                startmonth: "",
                endyear: "",
                endmonth: "",
                desc: "",
                resp: "",
                achiev: ""
            }],
            laSkills: [],
            selfEval: "",
            psInfo: "",
            skills: ""
        },
        fresh: {
            freshItem: null
        },
        sticky: {
            stickItem: null
        }
    },
    methods: {
        closeFresh: function closeFresh() {
            this.show.freshbox = false;
            this.show.modal = false;
        },
        closeSticky: function closeSticky() {
            this.show.stickybox = false;
            this.show.modal = false;
        },
        closeMsg: function closeMsg() {
            this.show.message = false;
            this.show.modal = false;
        },
        hideModal: function hideModal(obj) {
            if ((0, _jquery2.default)(obj).hasClass("modal")) {
                this.show.message = false;
                this.show.cv = false;
                this.show.modal = false;
            }
        }
    },
    watch: {
        "show.freshbox": function showFreshbox(curval) {
            if (curval) {
                this.$nextTick(function () {
                    EventUtils.absCenter((0, _jquery2.default)("#app-modal .fresh-box"));
                });
            }
        },
        "show.stickybox": function showStickybox(curval) {
            if (curval) {
                this.$nextTick(function () {
                    EventUtils.absCenter((0, _jquery2.default)("#app-modal .sticky-box"));
                });
            }
        },
        "show.message": function showMessage(curval) {
            if (curval) {
                this.$nextTick(function () {
                    EventUtils.absCenter((0, _jquery2.default)("#app-modal .msg-box"));
                });
            } else {
                var postdata = {
                    userId: parObj.userId,
                    index: 1,
                    count: 8
                };
                EventUtils.ajaxReq("/message/getMessageList", "get", postdata, function (resp, status) {
                    if (resp.data && resp.data.count > 0) {
                        (0, _jquery2.default)(".msg-center .msg-info").html(resp.data.count);
                        (0, _jquery2.default)(".msg-center .msg-info").show();
                    } else {
                        (0, _jquery2.default)(".msg-center .msg-info").hide();
                    }
                });
            }
        },
        "show.cv": function showCv(curval) {
            if (curval) {
                this.$nextTick(function () {
                    EventUtils.absCenter((0, _jquery2.default)("#app-modal .preView"));
                });
            }
        }
    }
});

function init_center() {
    infoRequest();
    selectInitPos();
    selectInitInput();
    // navEventBind();
}
init_center();

function navEventBind() {
    (0, _jquery2.default)(".hr-navs li").each(function (index) {
        (0, _jquery2.default)(this).click(function () {
            (0, _jquery2.default)(".hr-navs li.on").removeClass("on");
            (0, _jquery2.default)(this).addClass("on");
            (0, _jquery2.default)(".main .mainCont").hide();
            (0, _jquery2.default)(".main .mainCont:nth-of-type(" + (index + 1) + ")").show();
        });
    });
    (0, _jquery2.default)(".pos-sider li").each(function (index) {
        (0, _jquery2.default)(this).click(function () {
            (0, _jquery2.default)(".pos-sider li.on").removeClass("on");
            (0, _jquery2.default)(this).addClass("on");
            (0, _jquery2.default)(".pos-resume .ListBox").hide();
            (0, _jquery2.default)(".pos-resume .ListBox:nth-of-type(" + (index + 1) + ")").show();
        });
    });
    (0, _jquery2.default)(".sider dt").click(function () {
        (0, _jquery2.default)(".sider dt.on").removeClass("on");
        (0, _jquery2.default)(this).addClass("on");
        if ((0, _jquery2.default)(this).attr("paneid") == "resume-box") {
            hrApp.interview.show = false;
            hrApp.resumes.show = true;
            hrApp.resumeItems = hrApp.resumes.unchecked;
        }
        if ((0, _jquery2.default)(this).attr("paneid") == "interview-box") {
            hrApp.resumes.show = false;
            hrApp.interview.show = true;
            hrApp.interItems = hrApp.interview.undecision;
        }
    });
}

function jobfairRequest(date, cvStatus, page, id) {
    if (mapper.jobfair.length == 0) {
        return false;
    }
    var jobfairId;
    if (id) {
        jobfairId = id;
    } else {
        for (var i = 0; i < mapper.jobfair.length; i++) {
            if (mapper.jobfair[i].startTime == date) {
                jobfairId = mapper.jobfair[i].jobFairId;
                break;
            }
        }
    }
    var postdata = {
        jobFairId: jobfairId,
        status: cvStatus,
        index: page,
        count: 4
    };
    EventUtils.ajaxReq("/hrcenter/getJobFairList", "get", postdata, function (resp, status) {
        console.log(resp);
        if (resp.data && resp.data.resultList.totalRow >= 0) {
            var cvData = {
                totalitems: resp.data.resultList.totalRow,
                totalpages: resp.data.resultList.totalPage,
                curpage: page,
                resultIndex: cvStatus,
                resumePos: hrApp.resumes.resumePos,
                resumeType: "招聘会",
                handleCount: resp.data.count,
                jobfairDate: resp.data.jobFairTime,
                cvList: resp.data.resultList.list
            };
        } else {
            var cvData = {
                totalitems: 0,
                totalpages: 1,
                curpage: 1,
                resultIndex: cvStatus,
                resumePos: hrApp.resumes.resumePos,
                handleCount: 0,
                resumeType: "招聘会",
                jobfairDate: resp.data.jobFairTime,
                cvList: []
            };
        }
        hrApp.resumes = cvData;
    });
}

function recruitRequest(job, cvStatus, page, id) {
    if (mapper.recruit.length == 0) {
        return false;
    }
    var recruitId;
    if (id) {
        recruitId = id;
    } else {
        for (var j = 0; j < mapper.recruit.length; j++) {
            if (mapper.recruit[j].job == job) {
                recruitId = mapper.recruit[j].recruitId;
                break;
            }
        }
    }
    var postdata = {
        recruitId: recruitId,
        status: cvStatus,
        index: page,
        count: 4
    };
    EventUtils.ajaxReq("/hrcenter/getRecruitList", "get", postdata, function (resp, status) {
        console.log(resp);
        if (resp.data && resp.data.resultList.totalRow >= 0) {
            var cvData = {
                totalitems: resp.data.resultList.totalRow,
                totalpages: resp.data.resultList.totalPage,
                curpage: page,
                resultIndex: cvStatus,
                resumePos: EventUtils.infoExtrac(resp.data.job),
                handleCount: resp.data.count,
                resumeType: "企业直聘",
                jobfairDate: hrApp.resumes.jobfairDate,
                cvList: resp.data.resultList.list
            };
        } else {
            var cvData = {
                totalitems: 0,
                totalpages: 1,
                curpage: 1,
                resultIndex: cvStatus,
                resumePos: EventUtils.infoExtrac(resp.data.job),
                handleCount: resp.data.count,
                resumeType: "企业直聘",
                jobfairDate: hrApp.resumes.jobfairDate,
                cvList: []
            };
        }
        hrApp.resumes = cvData;
    });
}

function positionRequest(type, page) {
    hrApp.position.curpage = page;
    if (type == 0) {
        //企业直聘岗位请求
        var postdata = {
            userId: parObj.userId,
            loginIdentifier: parObj.loginId,
            isCenter: 1,
            index: page,
            count: 4
        };
        EventUtils.ajaxReq("/recruit/getList", "get", postdata, function (resp, status) {
            //     console.log(resp);
            if (resp && resp.data) {
                hrApp.position.totalpages = resp.data.totalPage;
                hrApp.position.results = resp.data.list;
                hrApp.position.totalitems = resp.data.totalRow;
            } else {
                hrApp.position.results = [];
                hrApp.position.totalitems = 0;
                hrApp.position.totalpages = 1;
            }
            hrApp.position.posType = 0;
        });
    }
    if (type == 1) {
        //企业招聘会发布
        var postdata = {
            userId: parObj.userId,
            loginIdentifier: parObj.loginId,
            isCenter: 1,
            jobFairType: 2,
            index: page,
            count: 4
        };
        EventUtils.ajaxReq("/jobfair/getList", "get", postdata, function (resp, status) {
            //     console.log(resp);
            if (resp && resp.data) {
                hrApp.position.totalpages = resp.data.totalPage;
                hrApp.position.results = resp.data.list;
                hrApp.position.totalitems = resp.data.totalRow;
            } else {
                hrApp.position.results = [];
                hrApp.position.totalitems = 0;
                hrApp.position.totalpages = 1;
            }
            hrApp.position.posType = 1;
        });
    }
}
//清除页面绑定事件
window.onunload = function () {
    (0, _jquery2.default)(".hr-navs li").each(function (index) {
        (0, _jquery2.default)(this).click(null);
    });
    (0, _jquery2.default)(".pos-sider li").each(function (index) {
        (0, _jquery2.default)(this).click(null);
    });
    (0, _jquery2.default)(".sider dt").click(null);
    appTop.$off();
    hrApp.$off();
    appModal.$off();
};

/***/ })

},[60]);