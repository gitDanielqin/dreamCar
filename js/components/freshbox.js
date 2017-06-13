(function() {
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
                <div class="refresh-cont">\
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
                <div class="refresh-bot">\
                    <p style="line-height:50px">应付金额<span style="color:#fc4f05;">{{fresh.sum}}</span>元<span class="price-pre">原价：{{fresh.presum}}元</span></p>\
                    <!--<p style="line-height:20px"><i class="pic-icon icon-checkbox on" @click="checkAutopay($event.target)"></i>自动续费<span style="color:#fc4f05;">{{fresh.discount}}</span></p>-->\
                    <p style="line-height:20px">账户余额：<span class="color-orange-fc">{{account.money}}</span>元</p>\
                    <p class="autopay-hint"><span class="disNo">（系统将在智能刷新到期后自动帮您续费，可通过选中自动续费启用或取消）</span></p>\
                    <button type="button" class="refresh-btn" @click="freshAction($event.target)">{{fresh.smartBtn}}</button>\
                </div>\
            </div>\
            <div v-show="!fresh.smart">\
                <div class="refresh-cont-normal-free" v-show="account.freeFreshTimes>0">\
                    <p style="color:#ec7d0e;">信息刷新后：排名靠前，时间显示最新，能获得更多浏览机会</p>\
                    <p><span style="color:#fc4f05;">智能刷新</span>，效果翻倍，每次最低仅需<span style="color:#fc4f05;">0.7</span>元</p>\
                    <p style="font-size:18px; line-height:123px;">本次刷新<span style="color:#fc4f05;">免费</span>，是否确定刷新？</p>\
                </div>\
                <div class="refresh-cont-normal" v-show="account.freeFreshTimes==0">\
                    <p style="color:#ec7d0e;">信息刷新后：排名靠前，时间显示最新，能获得更多浏览机会</p>\
                    <p><span style="color:#fc4f05;">智能刷新</span>，效果翻倍，每次最低仅需<span style="color:#fc4f05;">0.7</span>元</p>\
                    <p>提示：免费刷新次数已经用完，不享有免费刷新。</p>\
                    <p>本次刷新需要扣除推广金 <span style="color:#fc4f05;">1.0</span>元，是否确定刷新？</p>\
                </div>\
                <div class="refresh-bot refresh-bot-normal">\
                    <span style="display:block;" v-show="account.freeFreshTimes==0">您的校企余额：<b style="color:#fc4f05;">{{regMoney(account.money)}}</b>元</span><button type="button" class="fresh-sofort-btn" @click="freshAction($event.target)">{{fresh.sofortBtn}}</button>\
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
        data: function() {
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
                }
            }
            return freshObj;
        },
        methods: {
            checkAutopay: function(obj) {
                $(obj).toggleClass("on")
            },
            freshAction: function(obj) {
                if ($(obj).html() == "立即刷新") {
                    console.log(this.freshitem);
                    this.fresh.title = this.freshitem.title;
                    if (this.freshitem.demandId) { //刷新校企合作需求
                        if (!this.fresh.smart) {
                            freshRequest(this.userid, this.freshitem.demandId, 1, 9, this)
                        } else {
                            freshRequest(this.userid, this.freshitem.demandId, 1, this.fresh.tarifId, this)
                        }
                    }
                    if (this.freshitem.jobFairId) { //刷新招聘会需求
                        if (!this.fresh.smart) {
                            freshRequest(this.userid, this.freshitem.jobFairId, 3, 9, this)
                        } else {
                            freshRequest(this.userid, this.freshitem.jobFairId, 3, this.fresh.tarifId, this)
                        }
                    }
                    if (this.freshitem.recruitId) { //刷新直聘需求
                        if (!this.fresh.smart) {
                            freshRequest(this.userid, this.freshitem.recruitId, 2, 9, this)
                        } else {
                            freshRequest(this.userid, this.freshitem.recruitId, 2, this.fresh.tarifId, this)
                        }
                    }
                }
            },
            selectfreshitem: function(index, obj) {
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
            selectFreshWay: function(way, obj) {
                $(".fresh-navs .on").removeClass("on");
                $(obj).addClass("on");
                var _this = this;
                if (way == "smart") {
                    this.fresh.smart = true;
                    $(".fresh-smart-list .icon-radio").each(function(index) {
                        if ($(this).hasClass("on")) {
                            _this.fresh.sum = _this.fresh.content[index].amount;
                            _this.fresh.presum = _this.fresh.content[index].amount;
                        }
                    })
                } else {
                    this.fresh.smart = false;
                    if (this.account.freeFreshTimes > 0) {
                        this.fresh.sum = 0;
                    } else {
                        this.fresh.sum = 1;
                    }
                }
            },
            closeFresh: function() {
                this.fresh.show = true;
                this.$emit("closefresh");
            },
            toSmartFresh: function() {
                $(".fresh-navs .on").removeClass("on");
                $(".fresh-navs .fresh-tab:first").addClass("on");
                this.fresh.smart = true;
                this.fresh.show = true;
            },
            regMoney: function(money) {
                if (money) {
                    return money.toFixed(2);
                } else {
                    return "";
                }
            }
        },
        watch: {
            "account.freeFreshTimes": function(curval) {
                if (!this.fresh.smart) {
                    if (curval > 0) {
                        this.fresh.sum = 0;
                    } else {
                        this.fresh.sum = 1;
                    }
                }
            },
            "showfresh": function(curval) { //初始化
                if (curval) {
                    var _this = this;
                    EventUtils.ajaxReq("/center/user/getAccount", "get", { userId: this.userid }, function(resp, status) {
                        //  console.log(resp);
                        _this.account.money = resp.data.useableBalance;
                        _this.account.freeFreshTimes = resp.data.freeRefresh;
                        _this.fresh.show = true;
                    });
                }
            },
            "fresh.sum": function(curval) {
                this.fresh.sofortBtn = curval > this.account.money ? "立即充值" : "立即刷新";
                this.fresh.smartBtn = curval > this.account.money ? "立即充值" : "立即刷新";
            },
            "fresh.show": function(curval) {
                if (!curval) {
                    //  console.log(1);
                    EventUtils.absCenter($(".fresh-hint-box"));
                }
            }
        },
        mounted: function() {
            //获取用户账户及免费刷新次数等信息
            var _this = this;
            EventUtils.ajaxReq("/center/user/getAccount", "get", { userId: this.userid }, function(resp, status) {
                //    console.log(resp);
                _this.account.money = resp.data.useableBalance;
                _this.account.freeFreshTimes = resp.data.freeRefresh;
                _this.fresh.sofortBtn = _this.fresh.sum > _this.account.money ? "立即充值" : "立即刷新";
                _this.fresh.smartBtn = _this.fresh.sum > _this.account.money ? "立即充值" : "立即刷新";
            });
            //获取刷新模板信息
            var postdata = {
                userId: this.userid,
                type: 1
            }
            EventUtils.ajaxReq("/sys/getRefreshHotInfoList", "post", postdata, function(resp, status) {
                if (resp.data) {
                    //   console.log(resp.data);
                    resp.data.shift();
                    _this.fresh.content = resp.data;
                }
            })
        }
    });

    //刷新请求
    function freshRequest(userId, pushId, type, tarifId, freshObj) {
        var postdata = {
            userId: userId,
            pushId: pushId,
            contentType: type,
            id: tarifId
        }
        console.log(postdata);
        EventUtils.ajaxReq("/sys/refresh", "post", postdata, function(resp, status) {
            //    console.log(resp);
            console.log(resp);
            if (resp.code == "00000") {
                freshObj.fresh.time = resp.data;
                freshObj.fresh.show = false;
            }
        })
    }
})()