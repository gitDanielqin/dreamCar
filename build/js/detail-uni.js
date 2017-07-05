webpackJsonp([8],{14:function(t,e,a){"use strict";(function(t){var e=a(1);!function(){e.component("detail-table",{template:'<div id="app-table">        <ul class="result-tabs lis-inline LH40 t-center color-gray79 fSize16" @click.stop="selectTab($event.target)">            <li cont="cont-demand" v-if="tabletype==1||tabletype==2" class="on">需求描述</li>            <li cont="cont-demand" v-if="tabletype==3||tabletype==4" class="on">招聘会描述</li>            <li cont="cont-demand" v-if="tabletype==5" class="on">岗位描述</li>            <li cont="cont-desc" v-if="tabletype==1||tabletype==3">高校简介</li>            <li cont="cont-desc" v-if="tabletype==2||tabletype==4||tabletype==5">企业简介</li>            <li cont="cont-apply">申请记录<i class="msg-info" v-show="options.applyRec.totalitems>0">{{hintshow(options.applyRec.totalitems)}}</i></li>            <li cont="cont-comment" v-if="tabletype==1||tabletype==3">高校评价<i class="msg-info" v-show="options.comment.totalitems>0">{{hintshow(options.comment.totalitems)}}</i></li>            <li cont="cont-comment" v-if="tabletype==2||tabletype==4||tabletype==5">企业评价<i class="msg-info" v-show="options.comment.totalitems>0">{{hintshow(options.comment.totalitems)}}</i></li>        </ul>        <p class="tab-cont fSize14 LH38 color-gray6 cont-demand" style="display:block" v-html="textFilter(options.desc)"></p>        <p class="tab-cont LH42 fSize14 color-gray6 cont-desc" v-html="textFilter(options.userdesc)"></p>        <div class="cont-apply tab-cont">            <table class="LH48 fSize12 result-table">                <tr class="bg-gray-f2 color-gray79 fSize14">                    <th class="W200">申请者</th>                    <th class="W400">申请时间</th>                    <th class="W200">状态</th>                </tr>                <tr v-for="item in options.applyRec.results">                    <td>{{nameFilter(item.userName)}}</td>                    <td>{{item.createTime}}</td>                    <td :class="viewCss(item.readStatus,item.status)">{{statetext(item.readStatus,item.status)}}</td>                </tr>            </table>            <div class="paBot33" v-show="options.applyRec.totalpages>1">                <pagination :showpages="showpage(options.applyRec.totalpages)" :totalpages="options.applyRec.totalpages" type="apply" @topage="topage" class="maT28 fSize14 maL150"></pagination>            </div>        </div>        <div class="tab-cont cont-comment">            <ul class="H675">                <li class="clearfix" v-for="item in options.comment.results">                    <div class="avatar fl fSize14 color-gray6 t-center maL28 maR28">                        <img :src="item.userIcon" />                    </div>                    <div class="fl fSize14 W660">                        <h4 class="LH-H36 color-gray79">[评价]</h4>                        <p class="color-gray6 LH25 comment-text">{{item.comment}}</p>                    </div>                    <span class="time">{{item.createTime}}</span>                </li>                <li v-show="options.comment.results.length==0" class="t-center fSize20">暂无评论~</li>            </ul>            <div class="paBot33" v-show="options.comment.totalpages>1">                <pagination :showpages="showpage(options.comment.totalpages)" :totalpages="options.comment.totalpages" type="comment" @topage="topage" class="maT28 fSize14 maL150"></pagination>            </div>        </div>    </div>',props:["tabletype","options"],methods:{hintshow:function(t){return t<100?t:"..."},nameFilter:function(t){if(1==this.tabletype||2==this.tabletype||3==this.tabletype)return t.charAt(0)+"***"+t.charAt(t.length-1);for(var e=t.charAt(0),a=0;a<t.length-1;a++)e+="*";return e},textFilter:function(t){return t.replace(/\n/g,"<br/>")},selectTab:function(e){return!t(e).hasClass("msg-info")&&(!t(e).hasClass("result-tabs")&&(t(".result-tabs li").removeClass("on"),t(e).addClass("on"),t(".tab-cont").hide(),void t("."+t(e).attr("cont")).show()))},viewCss:function(t,e){return"1"!=e||1!=this.tabletype&&2!=this.tabletype?"1"!=e||3!=this.tabletype&&4!=this.tabletype&&5!=this.tabletype?"1"==t?"viewed":void 0:"interview":"coop"},statetext:function(t,e){return"1"!=e||1!=this.tabletype&&2!=this.tabletype?"1"!=e||3!=this.tabletype&&4!=this.tabletype?"1"==e&&5==this.tabletype?"邀请面试":"2"==e?"不合适":"1"==t?"查看":"未查看":"邀请参会":"邀请合作"},showpage:function(t){return t>3?3:t},topage:function(t,e){"apply"==e?this.$emit("applycallback",t):"comment"==e&&this.$emit("cmtcallback",t)}},components:{pagination:pagination}})}()}).call(e,a(0))},15:function(t,e){},52:function(t,e,a){"use strict";function n(){var t={demandId:p.demandId};p.userId&&(t.userId=p.userId),EventUtils.ajaxReq("/demand/getInfo","get",t,function(t,e){u=t.data;var a={title:u.title,viewed:u.readCount,applied:u.applyCount,publicDate:u.updateTime.split(" ")[0]};if(h.unidata=a,u.companyAddress&&u.companyAddress.indexOf(";")>=0)var n=u.companyAddress.split(";")[1];else var n="";var s={address:n,type:EventUtils.infoExtrac(u.companyType),property:u.companyProperty,job:EventUtils.infoExtrac(u.job),scale:u.companyScale,jobCount:u.jobCount,profession:EventUtils.infoExtrac(u.profession),professionCount:u.professionCount,trainType:u.trainType,discription:u.discription};b.unidata.demand=s;var i=u.userAddress?u.userAddress.split(";"):"",d={uni:u.userName,userIcon:u.userIcon,uniprops:u.userProperty,uniscale:u.userScale,address:""!=i?i[1]+"-"+i[2]:"",discription:u.userDiscription};if(b.unidata.baseinfo=d,(0,c.default)("#train-table .date-aval").removeClass("date-aval"),u.trainTime)for(var r=u.trainTime.split(";"),p=0;p<r.length;p++)for(var m=0;m<r[p].length;m++)"1"==r[p].charAt(m)&&(0,c.default)("#train-table .date-tr").eq(p).find("td").eq(m+1).addClass("date-aval");"1"==u.markStatus&&((0,c.default)("#app-banner .btn-collec").addClass("collected"),(0,c.default)("#app-banner .btn-collec span").html("已收藏")),"1"==u.applyStatus&&((0,c.default)("#app-banner .btn-apply").attr("disabled",!0),(0,c.default)("#app-banner .btn-apply span").text("已申请")),b.tabledata.desc=u.discription,b.tabledata.userdesc=u.userDiscription,o(1),setTimeout(function(){l(u.userId,1)},500)}),p.userId&&EventUtils.ajaxReq("/center/user/getInfo","post",{userId:p.userId},function(t,e){(m=t.data)&&(f.userName=t.data.userName,f.userType=t.data.userType,f.isLogin=!0)})}function s(){(0,c.default)(".account li").hover(function(){(0,c.default)(this).find("dl").slideDown(300)},function(){(0,c.default)(this).find("dl").slideUp(200)})}function i(){(0,c.default)(".account li").mouseenter(function(){(0,c.default)(this).find("dl").length>0&&(0,c.default)(this).find("dl").slideDown()}).mouseleave(function(){(0,c.default)(this).find("dl").length>0&&(0,c.default)(this).find("dl").hide()})}function o(t){var e={demandId:p.demandId,index:t,count:13};EventUtils.ajaxReq("/demand/getApplyRecord","get",e,function(t,e){t&&t.data?(b.tabledata.applyRec.totalpages=t.data.totalPage,b.tabledata.applyRec.results=t.data.list,b.tabledata.applyRec.totalitems=t.data.totalRow):(b.tabledata.applyRec.totalpages=1,b.tabledata.applyRec.results=[],b.tabledata.applyRec.totalitems=0)})}function l(t,e){var a={reportUserId:t,index:e,count:6};EventUtils.ajaxReq("/sys/getCommentList","post",a,function(t,e){t&&t.data?(b.tabledata.comment.results=t.data.list,b.tabledata.comment.totalpages=t.data.totalPage,b.tabledata.comment.totalitems=t.data.totalRow):(b.tabledata.comment.results=[],b.tabledata.comment.totalpages=1,b.tabledata.comment.totalitems=0)})}var d=a(0),c=function(t){return t&&t.__esModule?t:{default:t}}(d);a(4),a(2);var r=a(1);a(6),a(8),a(14),a(9),a(3),a(5),a(7),a(15);var p=EventUtils.urlExtrac(window.location),u={},m={},f=new r({el:"#app-top",data:{isLogin:!1,userType:"0",userName:""},methods:{loginEv:function(){g.showModal=!0,g.showLogin=!0},regisEv:function(){window.open(EventUtils.securityUrl("login.html?newAcc=1"),"_blank")},publish:function(){switch(this.userType){case"1":var t="uniRequire.html?new=1";break;case"2":var t="incRequire.html?new=1"}m.userId&&(t+="&userId="+m.userId+"&loginId="+m.loginIdentifier),t=EventUtils.securityUrl(t),window.open(t,"_blank")},toCenter:function(t){switch(this.userType){case"0":var e="pCenter.html?theme="+t;break;case"1":var e="uniCenter.html?theme="+t;break;case"2":var e="incCenter.html?theme="+t}m.userId&&(e+="&userId="+m.userId+"&loginId="+m.loginIdentifier),e=EventUtils.securityUrl(e),window.open(e,"_blank")},logout:function(){this.isLogin=!1,(0,c.default)("#app-banner .btn-collec").removeClass("collected"),(0,c.default)("#app-banner .btn-collec span").html("收 藏"),g.login.account="",g.login.password="",(0,c.default)("button.btn-apply[disabled] span").text("申请合作"),(0,c.default)("button.btn-apply[disabled]").attr("disabled",!1);var t={title:document.title,url:document.location.href,otherkey:null},e=EventUtils.securityUrl("detail-uni.html?demandId="+p.demandId);history.replaceState(t,document.title,e)}},watch:{isLogin:function(t){y.userId=t?m.userId:""}}}),h=new r({el:"#app-banner",data:{unidata:{title:"lalaland",viewed:30,applied:15,publicDate:"2016-12-11"}},methods:{collect:function(t){if(f.isLogin){if("2"!=m.userType)return swal({title:"",text:"抱歉，您不能收藏该需求！",type:"warning"}),!1;(0,c.default)(t).hasClass("btn-collec")||(t=t.parentNode);if(!(0,c.default)(t).hasClass("collected")){var e={userId:p.userId,loginIdentifier:p.loginId,demandId:p.demandId};EventUtils.ajaxReq("/demand/addMarkInfo","post",e,function(e,a){(0,c.default)(t).find("span").text("已收藏"),(0,c.default)(t).addClass("collected")})}}else g.showModal=!0,g.showLogin=!0,g.showSucc=!1},coApply:function(t){if(f.isLogin){if("2"!=m.userType)return swal({title:"",text:"抱歉，您不能申请该需求！",type:"warning"}),!1;var e={userId:m.userId,loginIdentifier:m.loginId,demandId:p.demandId};EventUtils.ajaxReq("/demand/cooperateDemand","post",e,function(e,a){"0"==e.data.isApply?(g.showModal=!0,g.showLogin=!1,g.showSucc=!0):swal({title:"",text:e.info,type:"error"}),(0,c.default)(t).hasClass("btn-apply")||(t=t.parentNode),(0,c.default)(t).attr("disabled",!0),(0,c.default)(t).children("span").text("已申请")})}else g.showModal=!0,g.showLogin=!0,g.showSucc=!1},homeLink:function(){var t=f.isLogin?"index.html?userId="+m.userId:"index.html";window.location.href=EventUtils.securityUrl(t)}}}),b=new r({el:"#app-main",data:{unidata:{demand:{address:"杭州市",type:"互联网",property:"民营",job:"UI设计师",scale:"1000-9999人",jobCount:"21-30人",profession:"影视多媒体",professionCount:"40-60人",trainType:"学生入企",discription:"lalaland"},baseinfo:{uni:"浙江大学",userIcon:"",uniprops:"重点",uniscale:"20000人",address:"下沙大学城",discription:"啦啦啦"}},tabledata:{desc:"",userdesc:"",applyRec:{totalpages:1,totalitems:0,results:[]},comment:{totalpages:1,totalitems:0,results:[]}}},methods:{showContact:function(t){return isLogin?t:t.slice(0,3)+"****"+t.slice(7)},showAllContact:function(t){(0,c.default)(".descript .contact-phone").text(t)},applyswitch:function(t){o(t)},cmtswitch:function(t){l(u.userId,t)}}}),y=new r({el:"#app-footer",data:{userId:p.userId}}),g=new r({el:"#app-modal",data:{showModal:!1,showSucc:!1,showLogin:!1,login:{account:"",password:""}},methods:{securityUrl:function(t){return EventUtils.securityUrl(t)},confirmSuc:function(){this.showSucc=!1,this.showModal=!1},closeSuc:function(){this.showSucc=!1,this.showModal=!1},closeLog:function(){this.showLogin=!1,this.showModal=!1},loginEv:function(){var t={loginName:this.login.account,password:this.login.password};EventUtils.ajaxReq("/center/user/login","post",t,function(t,e){m=t.data,f.userType=t.data.userType,f.userName=t.data.name,f.isLogin=!0,g.showModal=!1,g.showLogin=!1;var a={demandId:p.demandId,userId:m.userId};EventUtils.ajaxReq("/demand/getInfo","get",a,function(t,e){"1"==t.data.markStatus&&((0,c.default)("#app-banner .btn-collec").addClass("collected"),(0,c.default)("#app-banner .btn-collec span").html("已收藏")),"1"==t.data.applyStatus&&((0,c.default)("#app-banner .btn-apply").attr("disabled",!0),(0,c.default)("#app-banner .btn-apply span").text("已申请"))});var n={title:document.title,url:document.location.href,otherkey:null};history.replaceState(n,document.title,EventUtils.securityUrl("detail-uni.html?demandId="+p.demandId+"&userId="+t.data.userId))})}},watch:{showLogin:function(t){t&&this.$nextTick(function(){EventUtils.absCenter((0,c.default)(".dlg-login"))})},showSucc:function(t){t&&this.$nextTick(function(){EventUtils.absCenter((0,c.default)(".dlg-success"))})}}});!function(){n(),i(),selectInitPos(),s()}(),window.onunload=function(){f.$off(),h.$off(),b.$off(),y.$off(),g.$off()}}},[52]);