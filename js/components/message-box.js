(function() {
    var msgTempl = '<div class="msg-box">\
        <h3 class="msg-box-head"><i class="pic-icon icon-return" v-show="!show.list" @click.stop="back"></i><i class="pic-icon icon-email" v-show="show.list"></i><span class="msg-head">消息提醒</span><span class="icon-wrapper" @click.stop="closeBox"><i class="pic-icon icon-close"></i></span></h3>\
        <div v-show="show.list">\
            <ul class="msg-body">\
                <li v-for="item in msgList" @click.stop="showDetail(item)">\
                    <template v-if="item.type==\'date\'">\
                        <span >{{item.date}}</span>\
                    </template>\
                    <template v-else>\
                        <span class="msg-name">{{item.name}}</span>\
                        <span class="msg-cont">{{item.cont}}</span>\
                        <span class="msg-time">{{item.time}}</span>\
                        <span class="msg-delete" @click.stop="delItem(item)">删除</span>\
                    </template>\
                </li>\
            </ul>\
            <div class="msg-bot">\
                <pagination :showpages="3" :totalpages="6" type="" @topage="topage"></pagination>\
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
        props: ['userid'],
        data: function() {
            return {
                show: {
                    list: true
                },
                msgDetail: {
                    cont: "校企2.0上线啦上线啦上线啦",
                    time: "2016-12-17 12:12"
                },
                msgList: [{
                    type: "date",
                    date: "今天"
                }, {
                    type: "message",
                    name: "消息名称",
                    cont: "消息内容",
                    time: "时间"
                }, {
                    type: "message",
                    name: "消息名称",
                    cont: "消息内容",
                    time: "时间"
                }, {
                    type: "message",
                    name: "消息名称",
                    cont: "消息内容",
                    time: "时间"
                }, {
                    type: "message",
                    name: "消息名称",
                    cont: "消息内容",
                    time: "时间"
                }, {
                    type: "date",
                    date: "2016-6-1"
                }, {
                    type: "message",
                    name: "消息名称",
                    cont: "消息内容",
                    time: "时间"
                }, {
                    type: "message",
                    name: "消息名称",
                    cont: "消息内容",
                    time: "时间"
                }, ]
            }
        },
        methods: {
            delItem: function(item) {},
            delAll: function() {},
            topage: function(type, index) {

            },
            closeBox: function() {
                this.$emit("closebox");
            },
            back: function() {
                this.show.list = true
            },
            showDetail: function(item) {
                if (item.type == "message") {
                    this.show.list = false;
                }
            }
        },
        components: {
            'pagination': pagination
        }
    })
})()