(function() {
    var templCard = '<div class="minicard" v-cloak>\
        <h2 class="card-header"><span class="card-header-title" v-show="cardtype==\'inc\'">企业名片</span><span class="card-header-title" v-show="cardtype==\'uni\'">高校名片</span></h2>\
        <div class="card-body" v-show="cardtype==\'inc\'">\
            <div class="clearfix body-top">\
                <i class="pic-wrapper fl card-avatar"><img :src="infosets.userIcon"></i>\
                <div class="fl">\
                    <h3 class="body-title">{{infosets.userName}}</h3>\
                    <table class="basic-info">\
                        <tr>\
                            <td>企业性质：</td>\
                            <td style="padding-right: 15px;">{{infosets.userProperty}}</td>\
                            <td>企业规模：</td>\
                            <td>{{infosets.userScale}}</td>\
                        </tr>\
                        <tr>\
                            <td>联系方式：</td>\
                            <td style="padding-right: 15px;">{{infosets.mobile}}</td>\
                            <td>企业邮箱：</td>\
                            <td>{{infosets.email}}</td>\
                        </tr>\
                    </table>\
                    <p><label>公司地址：</label>{{infosets.userAddress}}</p>\
                </div>\
            </div>\
            <div class="body-bot">\
                <h3>公司简介</h3>\
                <p>{{infosets.userDiscription}}</p>\
            </div>\
        </div>\
        <div class="card-body" v-show="cardtype==\'uni\'">\
            <div class="clearfix body-top">\
                <i class="pic-wrapper fl card-avatar"><img :src="infosets.userIcon"></i>\
                <div class="fl">\
                    <h3 class="body-title">{{infosets.userName}}</h3>\
                    <table class="basic-info">\
                        <tr>\
                            <td>高校类别：</td>\
                            <td style="padding-right: 15px;">{{infosets.userType}}</td>\
                            <td>高校性质：</td>\
                            <td>{{infosets.userProperty}}</td>\
                        </tr>\
                        <tr>\
                            <td>联系电话：</td>\
                            <td style="padding-right: 15px;">{{infosets.mobile}}</td>\
                            <td>高校邮箱：</td>\
                            <td>{{infosets.email}}</td>\
                        </tr>\
                        <tr>\
                            <td>在校人数：</td>\
                            <td style="padding-right: 15px;">{{infosets.userScale}}</td>\
                            <td>重点专业：</td>\
                            <td>{{infosets.userProfession}}</td>\
                        </tr>\
                    </table>\
                    <p><label>学校地址：</label>{{infosets.userAddress}}</p>\
                </div>\
            </div>\
            <div class="body-bot">\
                <h3>高校简介</h3>\
                <p>{{infosets.userDiscription}}</p>\
            </div>\
        </div>\
        <div class="card-operations">\
            <button class="button-agree" type="button" @click.stop="agreeEv">同意</button>\
            <button class="button-deny" type="button" @click.stop="denyEv">不同意</button>\
        </div>\
    </div>';

    Vue.component("minicard", {
        template: templCard,
        props: ["cardtype", "infosets"],
        methods: {
            agreeEv: function() {
                this.$emit("agree");
            },
            denyEv: function() {
                this.$emit("deny");
            }
        }
    });
})()