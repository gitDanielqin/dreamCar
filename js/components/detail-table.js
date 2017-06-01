(function() {
    var detailTableTempl = '<div id="app-table">\
        <ul class="result-tabs lis-inline LH40 t-center color-gray79 fSize16" @click.stop="selectTab($event.target)">\
            <li cont="cont-demand" v-if="tabletype==1||tabletype==2" class="on">需求描述</li>\
            <li cont="cont-demand" v-if="tabletype==3||tabletype==4" class="on">招聘会描述</li>\
            <li cont="cont-demand" v-if="tabletype==5" class="on">岗位描述</li>\
            <li cont="cont-desc" v-if="tabletype==1||tabletype==3">高校简介</li>\
            <li cont="cont-desc" v-if="tabletype==2||tabletype==4||tabletype==5">企业简介</li>\
            <li cont="cont-apply">申请记录<i class="msg-info" v-show="options.applyRec.totalitems>0">{{hintshow(options.applyRec.totalitems)}}</i></li>\
            <li cont="cont-comment" v-if="tabletype==1||tabletype==3">高校评价<i class="msg-info" v-show="options.comment.totalitems>0">{{hintshow(options.comment.totalitems)}}</i></li>\
            <li cont="cont-comment" v-if="tabletype==2||tabletype==4||tabletype==5">企业评价<i class="msg-info" v-show="options.comment.totalitems>0">{{hintshow(options.comment.totalitems)}}</i></li>\
        </ul>\
        <p class="tab-cont fSize14 LH38 color-gray6 cont-demand" style="display:block ">{{options.desc}}</p>\
        <p class="tab-cont LH42 fSize14 color-gray6 cont-desc">{{options.userdesc}}</p>\
        <div class="cont-apply tab-cont">\
            <table class="LH48 fSize12 result-table">\
                <tr class="bg-gray-f2 color-gray79 fSize14">\
                    <th class="W200">申请者</th>\
                    <th class="W400">申请时间</th>\
                    <th class="W200">状态</th>\
                </tr>\
                <tr v-for="item in options.applyRec.results">\
                    <td>{{item.applyUserName}}</td>\
                    <td>{{item.createTime}}</td>\
                    <td :class="viewCss(item.readStatus,item.status)">{{statetext(item.readStatus,item.status)}}</td>\
                </tr>\
            </table>\
            <div class="paBot33" v-show="options.applyRec.totalpages>1">\
                <pagination :showpages="showpage(options.applyRec.totalpages)" :totalpages="options.applyRec.totalpages" type="apply" @topage="topage" class="maT28 fSize14 maL150"></pagination>\
            </div>\
        </div>\
        <div class="tab-cont cont-comment">\
            <ul class="H675">\
                <li class="clearfix" v-for="item in options.comment.results">\
                    <div class="avatar fl fSize14 color-gray6 t-center maL28 maR28">\
                        <img :src="item.userIcon" />\
                    </div>\
                    <div class="fl fSize14 W660">\
                        <h4 class="LH-H36 color-gray79">[评价]</h4>\
                        <p class="color-gray6 LH25 comment-text">{{item.comment}}</p>\
                    </div>\
                    <span class="time">{{item.createTime}}</span>\
                </li>\
                <li v-show="options.comment.results.length==0" class="t-center fSize20">暂无评论~</li>\
            </ul>\
            <div class="paBot33" v-show="options.comment.totalpages>1">\
                <pagination :showpages="showpage(options.comment.totalpages)" :totalpages="options.comment.totalpages" type="comment" @topage="topage" class="maT28 fSize14 maL150"></pagination>\
            </div>\
        </div>\
    </div>';
    Vue.component("detail-table", {
        template: detailTableTempl,
        props: ["tabletype", "options"], //1高校 2 企业 3 高校招聘会 4 企业招聘会 5 校企岗位
        methods: {
            hintshow: function(num) {
                if (num < 100) {
                    return num;
                } else {
                    return "...";
                }
            },
            selectTab: function(obj) {
                if ($(obj).hasClass("msg-info")) {
                    return false;
                }
                if ($(obj).hasClass("result-tabs")) {
                    return false;
                }
                $(".result-tabs li").removeClass("on");
                $(obj).addClass("on");
                $(".tab-cont").hide();
                $("." + $(obj).attr("cont")).show();
            },
            viewCss: function(readstate, feedstate) { //申请一览状态样式
                if (feedstate == "1" && (this.tabletype == 1 || this.tabletype == 2)) {
                    return "coop";
                }
                if (feedstate == "1" && (this.tabletype == 3 || this.tabletype == 4 || this.tabletype == 5)) {
                    return "interview";
                }
                if (readstate == "1") {
                    return "viewed";
                }
            },
            statetext: function(readstate, feedstate) { //申请一览状态文字
                if (feedstate == "1" && (this.tabletype == 1 || this.tabletype == 2)) {
                    return "邀请合作";
                }
                if (feedstate == "1" && (this.tabletype == 3 || this.tabletype == 4)) {
                    return "邀请参会";
                }
                if (feedstate == "1" && this.tabletype == 5) {
                    return "邀请面试";
                }
                if (feedstate == "2") {
                    return "不合适";
                }
                if (readstate == "1") {
                    return "查看";
                }
                return "未查看";
            },
            showpage: function(totalpages) {
                if (totalpages > 3) {
                    return 3;
                } else {
                    return totalpages;
                }
            },
            topage: function(page, type) {
                if (type == "apply") {
                    this.$emit("applycallback", page)
                } else if (type == "comment") {
                    this.$emit("cmtcallback", page);
                }
            }
        },
        components: {
            'pagination': pagination
        }
    })
})()