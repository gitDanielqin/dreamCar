(function() {
    var msgTempl = '<div class="msg-box">\
        <h3 class="msg-box-head"><i class="pic-icon icon-return" v-show="!show.list" @click.stop="back"></i><i class="pic-icon icon-email" v-show="show.list"></i><span class="msg-head">消息提醒</span><span class="icon-wrapper" @click.stop="closeBox"><i class="pic-icon icon-close"></i></span></h3>\
        <div v-show="show.list">\
            <ul class="msg-body">\
                <li v-for="item in msgList.results" @click.stop="showDetail(item,$event.target)">\
                    <i class="msg-mark" v-show="item.isRead&&item.isRead!=1"></i>\
                    <span class="msg-name">{{item.messageTitle}}</span>\
                    <span class="msg-cont">{{item.messageContent}}</span>\
                    <span class="msg-time">{{item.createTime.split(" ")[0]}}</span>\
                    <span class="msg-delete" @click.stop="delItem(item)" v-show="item.messageId">删除</span>\
                </li>\
            </ul>\
            <div class="msg-bot">\
                <pagination :showpages="showpage(msgList.totalpages)" :totalpages="msgList.totalpages" type="" @topage="topage"></pagination>\
                <button class="clear-all" @click.stop="delAll">全部清空</button>\
            </div>\
        </div>\
        <div class="msg-detail" v-show="!show.list">\
            <p class="msg-detail-cont">{{msgDetail.cont}}</p>\
            <p class="msg-detail-bot"><span>{{msgDetail.time}}</span></p>\
        </div>\
    </div>'
    Vue.component("message-box", {
        template: msgTempl,
        props: ['userid', "showmsg"],
        data: function() {
            return {
                show: {
                    list: true
                },
                msgDetail: {
                    cont: "",
                    time: ""
                },
                msgList: {
                    curpage: 1,
                    totalpages: 1,
                    results: []
                }
            }
        },
        methods: {
            delItem: function(item) {
                if (item.messageId) {
                    var _this = this;
                    console.log(1);
                    EventUtils.ajaxReq("/message/delMessage", "get", { messageId: item.messageId }, function(resp, status) {
                        if (_this.msgList.curpage > 1 && _this.msgList.results.length == 1) {
                            _this.msgList.curpage--;
                        };
                        $(".msg-box .pagination a.page").eq(_this.msgList.curpage - 1).parent().trigger("click");
                    })
                }
            },
            delAll: function() {
                EventUtils.ajaxReq("/message/delAllMessage", "get", { userId: this.userid }, function(resp, status) {
                    $(".msg-box .pagination a.page").eq(0).parent().trigger("click");
                })
            },
            topage: function(page, type) {
                var postdata = {
                    userId: this.userid,
                    index: page,
                    count: 8
                }
                console.log(postdata);
                this.msgList.curpage = page;
                _this = this;
                EventUtils.ajaxReq("/message/getMessageList", "get", postdata, function(resp, status) {
                    var resultList = [];
                    if (resp.data) {
                        resultList = resp.data.resultList.list;
                        _this.msgList.totalpages = resp.data.resultList.totalPage;
                    } else {
                        _this.msgList.totalpages = 1;
                    }
                    if (resultList.length < 8) {
                        var paddingItem = {
                            messageTitle: "",
                            messageContent: "",
                            createTime: ""
                        }
                        var sum = resultList.length;
                        for (var i = 0; i < 8 - sum; i++) {
                            resultList.push(paddingItem);
                        }
                    }
                    _this.msgList.results = resultList;
                })
            },
            closeBox: function() {
                this.$emit("closebox");
            },
            back: function() {
                this.show.list = true
            },
            showDetail: function(item) {
                if (item.messageId) {
                    EventUtils.ajaxReq("/message/readMessage", "get", { messageId: item.messageId }, function(resp, status) {
                        item.isRead = 1;
                    })
                    this.msgDetail.cont = item.messageContent;
                    this.msgDetail.time = item.createTime;
                    this.show.list = false;
                }
            },
            showpage: function(totalpages) {
                if (totalpages > 3) {
                    return 3;
                } else {
                    return totalpages
                }
            }
        },
        watch: {
            "showmsg": function(curval) {
                if (curval) {
                    this.show.list = true;
                }
            }
        },
        components: {
            'pagination': pagination
        },
        mounted: function() {
            var postdata = {
                userId: this.userid,
                index: 1,
                count: 8
            }
            _this = this;
            EventUtils.ajaxReq("/message/getMessageList", "get", postdata, function(resp, status) {
                console.log(resp);
                var resultList = [];
                if (resp.data && resp.data.resultList) {
                    resultList = resp.data.resultList.list;
                    _this.msgList.totalpages = resp.data.resultList.totalPage;
                } else {
                    resultList = [];
                    _this.msgList.totalpages = 1;
                }
                if (resultList.length < 8) {
                    var paddingItem = {
                        messageTitle: "",
                        messageContent: "",
                        createTime: ""
                    }
                    var sum = resultList.length;
                    for (var i = 0; i < 8 - sum; i++) {
                        resultList.push(paddingItem);
                    }
                }
                _this.msgList.results = resultList;
                if (resp.data && resp.data.count > 0) {
                    $(".msg-center .msg-info").html(resp.data.count);
                    $(".msg-center .msg-info").show();
                } else {
                    $(".msg-center .msg-info").hide();
                }

            })
        }
    });

})()