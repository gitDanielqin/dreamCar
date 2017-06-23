var Vue = require("../libs/vue");
(function() {
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
        data: function() {
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
            }
        },
        methods: {
            checkAutopay: function(obj) {
                $(obj).toggleClass("on")
            },
            stickAction: function(obj) {
                this.sticky.title = this.stickitem.title;
                if ($(obj).html() == "立即置顶" || $(obj).hasClass("refresh-barcodepay")) {
                    this.sticky.title = this.stickitem.title;
                    if (this.stickitem.demandId) { //刷新校企合作需求
                        if (!this.sticky.sofort) {
                            stickRequest(this.userid, this.stickitem.demandId, 1, 9, this)
                        } else {
                            stickRequest(this.userid, this.stickitem.demandId, 1, this.sticky.tarifId, this)
                        }
                    }
                    if (this.stickitem.jobFairId) { //刷新招聘会需求
                        if (!this.sticky.sofort) {
                            stickRequest(this.userid, this.stickitem.jobFairId, 3, 9, this)
                        } else {
                            stickRequest(this.userid, this.stickitem.jobFairId, 3, this.sticky.tarifId, this)
                        }
                    }
                    if (this.stickitem.recruitId) { //刷新直聘需求
                        if (!this.sticky.sofort) {
                            stickRequest(this.userid, this.stickitem.recruitId, 2, 9, this)
                        } else {
                            stickRequest(this.userid, this.stickitem.recruitId, 2, this.sticky.tarifId, this)
                        }
                    }
                }
                if ($(obj).html() == "立即充值") {
                    window.location.href = EventUtils.securityUrl("recharge.html?userId=" + this.userid);
                }
            },
            selectStickWay: function(way, obj) {
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
                    $(".plan-sticky-table tr").each(function(index) {
                        if (index == 1) {
                            summe += $(this).find("td.on").length * 70;
                        } else if (index == 2) {
                            summe += $(this).find("td.on").length * 50;
                        };
                    });
                    this.sticky.sum = summe;
                }
            },
            selectStickyItem: function(index, obj) {
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
            toPlanSticky: function() {
                var _this = this;
                EventUtils.ajaxReq("/center/user/getAccount", "get", { userId: this.userid }, function(resp, status) {
                    _this.account.money = resp.data.useableBalance;
                    _this.sticky.show = true;
                });
            },
            closeSticky: function() {
                this.$emit("closesticky");
            }
        },
        watch: {
            "showsticky": function(curval) {
                if (curval) { //初始化页面信息 
                    $(".sticky-sofort-list .icon-radio.on").removeClass("on");
                    $(".sticky-sofort-list .icon-radio:first").addClass("on");
                    initSticky(this);
                }
            },
            "sticky.sum": function(curval) {
                this.sticky.sofortBtn = curval > this.account.money ? "立即充值" : "立即置顶";
                this.sticky.planBtn = curval > this.account.money ? "立即充值" : "立即置顶";
            },
            "account.money": function(curval) {
                this.sticky.sofortBtn = this.sticky.sum > curval ? "立即充值" : "立即置顶";
                this.sticky.planBtn = this.sticky.sum > curval ? "立即充值" : "立即置顶";
            },
            "sticky.show": function(curval) {
                if (!curval) {
                    EventUtils.absCenter($(".stick-hint-box"));
                } else {
                    initSticky(this);
                }
            }
        },
        mounted: function() {
            var _this = this;
            //获取刷新模板信息
            var postdata = {
                userId: this.userid,
                type: 2
            }
            EventUtils.ajaxReq("/sys/getRefreshHotInfoList", "post", postdata, function(resp, status) {
                if (resp.data) {
                    _this.sticky.content = resp.data;
                }
            })
        }
    });

    function initSticky(stickyObj) {
        stickyObj.sticky.sofort = true;
        stickyObj.sticky.presum = stickyObj.sticky.sum = stickyObj.sticky.content[0].amount;
        EventUtils.ajaxReq("/center/user/getAccount", "get", { userId: stickyObj.userid }, function(resp, status) {
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
        EventUtils.ajaxReq("/sys/hotUp", "post", postdata, function(resp, statsu) {
            if (resp.code == "00000") {
                if (resp.data.payImg) {
                    stickObj.barcode.sofort = true;
                    stickObj.barcode.imgsrc = resp.data.payImg;
                    //轮询查看是否支付成功
                    var paycheckdata = {
                        userId: userId,
                        orderId: resp.data.orderId
                    }
                    var timer = setInterval(function() {
                        EventUtils.ajaxReq("/sys/getOrderStatus", "get", paycheckdata, function(resp, status) {
                            console.log(resp);
                            if (resp.code == "00000") {
                                clearInterval(timer);
                                swal({
                                    title: "",
                                    text: "支付成功！",
                                    type: "success",
                                    timer: 2000,
                                    showConfirmButton: false,
                                });
                                stickObj.barcode.sofort = false;
                            }
                        })
                    }, 1500)
                } else {
                    stickObj.sticky.show = false;
                }
            }
        })
    }
})()