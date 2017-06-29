var Vue = require("../libs/vue.min");
(function() {
    var vipRecTempl = '<div class="vip-records-box">\
                        <h3 class="vip-record-head">使用记录</h3>\
                        <ul class="vip-records" v-show="vip.totalitems>0">\
                            <li v-for="record in vip.records"><span class="W182">{{dateExtrac(record.createTime)}}</span><span class="W212">{{typeExtrac(record.orderType)}}：{{record.count}}次</span><span class="W216"><b class="fSize14">{{priceInteger(record.amount,record.orderType)}}</b>{{priceDecimal(record.amount)}} 元</span><span class="">交易完成</span></li>\
                        </ul>\
                        <p class="t-center" v-show="vip.totalitems==0">暂无使用记录~</p>\
                        <div class="more-records" v-show="vip.totalitems>0">\
                            <button class="more-records-btn" v-show="!show.page" @click.stop="showMoreRec">查看更多使用记录</button>\
                            <pagination :showpages="showpage(vip.totalpages)" :totalpages="vip.totalpages" type="coop" @topage="topage" v-show="show.page"></pagination>\
                        </div>\
                    </div>';
    Vue.component("vip-record", {
        template: vipRecTempl,
        props: ["userid"],
        data: function() {
            return {
                vip: {
                    totalpages: 1,
                    totalitems: 0,
                    records: []
                },
                show: {
                    page: false
                }
            }
        },
        methods: {
            dateExtrac: function(date) {
                if (date) {
                    return date.split(" ")[0];
                } else {
                    return "---";
                }
            },
            typeExtrac: function(type) {
                switch (type) {
                    case "0":
                        return "账户充值";
                    case "1":
                        return "信息刷新";
                    case "2":
                        return "信息置顶";
                }
            },
            showpage: function(totalpages) {
                if (totalpages > 3) {
                    return 3
                } else {
                    return totalpages;
                }
            },
            topage: function(page, type) {
                var postdata = {
                    userId: this.userid,
                    index: page,
                    count: 5
                }
                var _this = this;
                EventUtils.ajaxReq("/sys/getOrderList", "get", postdata, function(resp, status) {
                    if (resp.data) {
                        _this.vip.records = resp.data.list;
                    } else {
                        _this.vip.records = [];
                    }
                })
            },
            showMoreRec: function() {
                this.show.page = true;
            },
            priceInteger: function(val, type) {
                var priceInt = parseInt(val);
                if (type != '0') {
                    return "- " + priceInt;
                } else if (priceInt > 0) {
                    return "+ " + priceInt;
                }
            },
            priceDecimal: function(val) {
                var priceF = (parseFloat(val) * 100 - parseInt(val) * 100) % 100;
                //    if(priceF*10%1==0) priceF+="0";
                if (priceF < 10) priceF += "0";
                return ("." + priceF);
            },
        },
        mounted: function() {
            var postdata = {
                userId: this.userid,
                index: 1,
                count: 5
            }
            var _this = this;
            EventUtils.ajaxReq("/sys/getOrderList", "get", postdata, function(resp, status) {
                //console.log(resp);
                if (resp && resp.data) {
                    _this.vip.totalpages = resp.data.totalPage;
                    _this.vip.records = resp.data.list;
                    _this.vip.totalitems = resp.data.totalRow;
                } else {
                    _this.vip.totalpages = 1;
                    _this.vip.records = [];
                    _this.vip.totalitems = 0;
                }

            })
        },
        components: {
            'pagination': pagination
        }
    })
})()