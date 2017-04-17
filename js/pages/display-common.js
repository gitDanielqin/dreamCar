/**
 * Created by xuanyuan on 2016/12/31.
 */
var isLogin=true;

var subposArray = [];

(function(){
     for(var i=0; i<posArray.length;i++){
          for(var j=0;j<posArray[i].subpos.length;j++){
               if(posArray[i].subpos[j].name!="不限"){
                    subposArray.push(posArray[i].subpos[j]);
               }
          }
     };
     subposArray.push({name:"不限",subpos:["不限"]});
})()


var appTop = new Vue({
     el:"#app-top",
     data:{
          isLogin:isLogin
     }
})
 var appQuery = new Vue({
      el:"#app-query",
      data:{
           database:{
                uni:{
                     majors:majorArray,
                     majorAmount:majorSum,
                     props:unilevel,
                     scolars:scolarship
                },
                inc:{
                     IncScale:incScale,
                     IncProps:incProps,
                     posAmount:incScale,
                     pos1:[],
                     pos2:[],
                     area1:[],
                     area2:[],
                     salary:salaryItems,
                     welfare:["五险一金","双休","餐补","交通补","带薪年假","节日聚餐"]
                },
                navcitys:[
                     {"city":"杭州","conts":["滨江区", "淳安县", "富阳市", "拱墅区", "江干区", "建德市", "临安市", "上城区", "桐庐县", "西湖区", "下城区", "萧山区", "余杭区"]},
                     {"city":"上海","conts":["宝山区", "长宁区", "奉贤区", "虹口区", "黄浦区", "嘉定区", "金山区", "静安区", "卢湾区", "闵行区", "南汇区", "普陀区", "浦东新区", "青浦区", "松江区", "徐汇区", "杨浦区", "闸北区"]},
                     {"city":"北京","conts":["昌平区", "朝阳区", "崇文区", "大兴区", "东城区", "房山区", "丰台区", "海淀区", "怀柔区", "门头沟区", "平谷区", "石景山区", "顺义区", "通州区", "西城区", "宣武区"]},
                     {"city":"武汉","conts":["蔡甸区", "东西湖区", "汉阳区", "汉南区", "洪山区", "黄陂区", "江岸区", "江汉区", "江夏区", "乔口区", "青山区", "武昌区", "新洲区"]},
                     {"city":"广州","conts":["宝山区", "长宁区", "奉贤区", "虹口区", "黄浦区", "嘉定区", "金山区", "静安区", "卢湾区", "闵行区", "南汇区", "普陀区", "浦东新区", "青浦区", "松江区", "徐汇区", "杨浦区", "闸北区"]},
                     {"city":"深圳","conts":["宝安区", "福田区", "龙岗区", "罗湖区", "南山区", "盐田区"]}
                ],
                conts:["滨江区", "淳安县", "富阳市", "拱墅区", "江干区", "建德市", "临安市", "上城区", "桐庐县", "西湖区", "下城区", "萧山区", "余杭区"]
           },
           uniQuery:{
                major:"",
                majorsum:"",
                majorEx:false,
                incReq:{
                    areas:{
                         area_1:"",
                         area_2:""
                    },
                    IncProps:"",
                    IncScale:"",
                    pos:{
                         pos_1:"",
                         pos_2:""
                    },
                    posAmount:"",
               },
               publicTime:"",
               trainway:""
           },
           incQuery:{
               address:"",
               uniReq:{
                    uniprops:"",
                    major:"",
                    majorsum:"",
                    majorEx:false,
               },
               pos:{
                    pos_1:"",
                    pos_2:""
               },
               posAmount:"",
               publicTime:"",
               trainway:""
           },
           posQuery:{
                areas:{
                     area_1:"",
                     area_2:""
                },
                pos:{
                     pos_1:"",
                     pos_2:""
                },
                worksexp:"",
                scolar:"",
                salary:"",
                welfare:"",
                publicTime:""
           },
           uniRecruit:{
                major:"",
                majorsum:"",
                majorEx:false,
                incReq:{
                    areas:{
                         area_1:"",
                         area_2:""
                    },
                    IncProps:"",
                    IncScale:"",
                    pos:{
                         pos_1:"",
                         pos_2:""
                    },
                    posAmount:"",
               },
               publicTime:"",
               trainway:""
          },
          incRecruit:{
               scolar:"",
               majorEx:false,
               worksexp:"",
               pos:{
                    pos_1:"",
                    pos_2:""
               },
               posAmount:"",
               salary:"",
               publicTime:""
          },
           showPosBox:false,
           showAreaBox:false,
           showWelBox:false
      },
      methods:{
           selCity:function(index,obj){
                $(".address .on").removeClass("on");
                $(obj).addClass("on");
               this.database.conts= this.database.navcitys[index].conts;
           },
           selDistict:function(obj){
                $(".queryform .district .on").removeClass("on");
                $(obj).addClass("on");
           },
           selPos:function(pos,type){
                if(type=="uni"){
                     this.uniQuery.incReq.pos.pos_2 = pos;
                }else if(type=="inc"){
                      this.incQuery.pos.pos_2 = pos;
                }else if(type=="pos"){
                     this.posQuery.pos.pos_2 = pos;
                }else if(type=="unirecruit"){
                     this.uniRecruit.incReq.pos.pos_2=pos;
                }else if(type=="increcruit"){
                     this.incRecruit.pos.pos_2=pos
                }
                this.showPosBox=false;
           },
           clickPos:function(){
                this.showPosBox=true;
           },
           selArea:function(area,type){
                if(type=="uni"){
                    this.uniQuery.incReq.areas.area_2 = area;
                }else if(type=="pos"){
                     this.posQuery.areas.area_2 = area;
                }else if(type=="unirecruit"){
                     this.uniRecruit.incReq.areas.area_2=area;
                }

                this.showAreaBox=false;
           },
           clickArea:function(){
                this.showAreaBox=true;
           },
           clickWel:function(){
                this.showWelBox=true;
           },
           checkEv:function(obj){
                if($(obj).hasClass("on")){
                     $(obj).removeClass("on");
                     $(obj).parent("li").removeClass("on");
                }else{
                     $(obj).addClass("on");
                     $(obj).parent("li").addClass("on");
                }
           },
           submitWel:function(){
                var selWelfare="";
                $(".welfare-lis li").each(function(){
                     if($(this).hasClass("on")){
                          selWelfare+=$(this).text()+",";
                     }
                });
                this.posQuery.welfare=selWelfare;
                this.showWelBox=false;
           }
      },
      mounted:function(){
           this.database.inc.pos1=[];
           this.database.inc.area1=[];
           for(var i=0;i<subposArray.length;i++){
                this.database.inc.pos1.push(subposArray[i].name);
           };
           this.database.inc.pos2 = subposArray[0].subpos;
           for(var j=0;j<workareas.length;j++){
                this.database.inc.area1.push(workareas[j].title);
           };
           this.database.inc.area2 = workareas[0].subareas;
      },
      watch:{
           'incQuery.pos.pos_1':function(curval){
                for(var i=0;i<subposArray.length;i++){
                     if(subposArray[i].name==curval){
                         this.database.inc.pos2=subposArray[i].subpos;
                         break;
                     }
                }
           },
           'uniQuery.incReq.areas.area_1':function(curval){
                for(var i=0; i<workareas.length;i++){
                     if(workareas[i].title==curval){
                          this.database.inc.area2 = workareas[i].subareas;
                          break;
                     }
                }
           },
           'showPosBox':function(curval){
                if(curval){
                     var top = $(".pos-input").offset().top-$(".queryform").offset().top+30;
                     $(".pos-box").css("top",top);
                }
           },
           'showAreaBox':function(curval){
                if(curval){
                     var top = $(".area-input").offset().top-$(".queryform").offset().top+30;
                     $(".area-box").css("top",top);
                }
           }
      }
});

var appResult = new Vue({
     el:"#app-result",
     data:{
          uniList:{
               curpage:1,
               items:[
                    {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"企业需要提供的",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
                    {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"企业需要提供的",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
                    {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"企业需要提供的",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
                    {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"到校培训",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
                    {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"到校培训",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
                    {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"到校培训",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
                    {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"到校培训",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
                    {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"到校培训",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
                    {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"到校培训",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
                    {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"到校培训",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
                    {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"到校培训",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
               ],
               results:[
                    {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"企业需要提供的",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
                    {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"企业需要提供的",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
                    {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"企业需要提供的",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
                    {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"到校培训",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
                    {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"到校培训",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
                    {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"到校培训",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
                    {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"到校培训",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
                    {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"到校培训",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
                    {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"到校培训",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
                    {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"到校培训",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
                    {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"到校培训",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
               ]
          },
          incList:{
               curpage:1,
               items:[
                    {pos:"艺术设计",uniProps:"高校性质",major:"专业名称",stuScale:"专业人数",trainway:"到校培训",inc:"杭州煌巢信息科技有限公司",IncProps:"国企",posAmount:"20人",publicDate:"2017-11-11"},
                    {pos:"艺术设计",uniProps:"高校性质",major:"专业名称",stuScale:"专业人数",trainway:"到校培训",inc:"杭州煌巢信息科技有限公司",IncProps:"国企",posAmount:"20人",publicDate:"2017-11-11"},
                    {pos:"艺术设计",uniProps:"高校性质",major:"专业名称",stuScale:"专业人数",trainway:"到校培训",inc:"杭州煌巢信息科技有限公司",IncProps:"国企",posAmount:"20人",publicDate:"2017-11-11"},
                    {pos:"艺术设计",uniProps:"高校性质",major:"专业名称",stuScale:"专业人数",trainway:"到校培训",inc:"杭州煌巢信息科技有限公司",IncProps:"国企",posAmount:"20人",publicDate:"2017-11-11"},
                    {pos:"艺术设计",uniProps:"高校性质",major:"专业名称",stuScale:"专业人数",trainway:"到校培训",inc:"杭州煌巢信息科技有限公司",IncProps:"国企",posAmount:"20人",publicDate:"2017-11-11"},
                    {pos:"艺术设计",uniProps:"高校性质",major:"专业名称",stuScale:"专业人数",trainway:"到校培训",inc:"杭州煌巢信息科技有限公司",IncProps:"国企",posAmount:"20人",publicDate:"2017-11-11"},
                    {pos:"艺术设计",uniProps:"高校性质",major:"专业名称",stuScale:"专业人数",trainway:"到校培训",inc:"杭州煌巢信息科技有限公司",IncProps:"国企",posAmount:"20人",publicDate:"2017-11-11"},
                    {pos:"艺术设计",uniProps:"高校性质",major:"专业名称",stuScale:"专业人数",trainway:"到校培训",inc:"杭州煌巢信息科技有限公司",IncProps:"国企",posAmount:"20人",publicDate:"2017-11-11"}
               ],
               results:[
                    {pos:"艺术设计",uniProps:"高校性质",major:"专业名称",stuScale:"专业人数",trainway:"到校培训",inc:"杭州煌巢信息科技有限公司",IncProps:"国企",posAmount:"20人",publicDate:"2017-11-11"},
                    {pos:"艺术设计",uniProps:"高校性质",major:"专业名称",stuScale:"专业人数",trainway:"到校培训",inc:"杭州煌巢信息科技有限公司",IncProps:"国企",posAmount:"20人",publicDate:"2017-11-11"},
                    {pos:"艺术设计",uniProps:"高校性质",major:"专业名称",stuScale:"专业人数",trainway:"到校培训",inc:"杭州煌巢信息科技有限公司",IncProps:"国企",posAmount:"20人",publicDate:"2017-11-11"},
                    {pos:"艺术设计",uniProps:"高校性质",major:"专业名称",stuScale:"专业人数",trainway:"到校培训",inc:"杭州煌巢信息科技有限公司",IncProps:"国企",posAmount:"20人",publicDate:"2017-11-11"},
                    {pos:"艺术设计",uniProps:"高校性质",major:"专业名称",stuScale:"专业人数",trainway:"到校培训",inc:"杭州煌巢信息科技有限公司",IncProps:"国企",posAmount:"20人",publicDate:"2017-11-11"},
                    {pos:"艺术设计",uniProps:"高校性质",major:"专业名称",stuScale:"专业人数",trainway:"到校培训",inc:"杭州煌巢信息科技有限公司",IncProps:"国企",posAmount:"20人",publicDate:"2017-11-11"},
                    {pos:"艺术设计",uniProps:"高校性质",major:"专业名称",stuScale:"专业人数",trainway:"到校培训",inc:"杭州煌巢信息科技有限公司",IncProps:"国企",posAmount:"20人",publicDate:"2017-11-11"},
                    {pos:"艺术设计",uniProps:"高校性质",major:"专业名称",stuScale:"专业人数",trainway:"到校培训",inc:"杭州煌巢信息科技有限公司",IncProps:"国企",posAmount:"20人",publicDate:"2017-11-11"}
               ],
          },
          posList:{
               curpage:1,
               items:[
                    {pos:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},posAmount:2,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",IncScale:"20-99人",publicDate:"2017-11-11"},
                    {pos:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},posAmount:2,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",IncScale:"20-99人",publicDate:"2017-11-11"},
                    {pos:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},posAmount:2,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",IncScale:"20-99人",publicDate:"2017-11-11"},
                    {pos:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},posAmount:2,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",IncScale:"20-99人",publicDate:"2017-11-11"},
                    {pos:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},posAmount:2,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",IncScale:"20-99人",publicDate:"2017-11-11"},
                    {pos:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},posAmount:2,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",IncScale:"20-99人",publicDate:"2017-11-11"}
               ],
               results:[
                    {pos:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},posAmount:2,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",IncScale:"20-99人",publicDate:"2017-11-11"},
                    {pos:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},posAmount:2,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",IncScale:"20-99人",publicDate:"2017-11-11"},
                    {pos:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},posAmount:2,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",IncScale:"20-99人",publicDate:"2017-11-11"},
                    {pos:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},posAmount:2,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",IncScale:"20-99人",publicDate:"2017-11-11"},
                    {pos:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},posAmount:2,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",IncScale:"20-99人",publicDate:"2017-11-11"},
                    {pos:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},posAmount:2,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",IncScale:"20-99人",publicDate:"2017-11-11"}
               ]
          },
          unirecruitList:{
               curpage:1,
               items:[
                    {title:"艺术设计",major:"专业名称",stuScale:"专业人数",addr:{city:"杭州",district:"滨江区"},recruitDate:"2016-12-11",IncProps:"性质",IncScale:"规模",IncPos:"岗位名称",publicDate:"2017-11-11"},
                    {title:"艺术设计",major:"专业名称",stuScale:"专业人数",addr:{city:"杭州",district:"滨江区"},recruitDate:"2016-12-11",IncProps:"性质",IncScale:"规模",IncPos:"岗位名称",publicDate:"2017-11-11"},
                    {title:"艺术设计",major:"专业名称",stuScale:"专业人数",addr:{city:"杭州",district:"滨江区"},recruitDate:"2016-12-11",IncProps:"性质",IncScale:"规模",IncPos:"岗位名称",publicDate:"2017-11-11"},
                    {title:"艺术设计",major:"专业名称",stuScale:"专业人数",addr:{city:"杭州",district:"滨江区"},recruitDate:"2016-12-11",IncProps:"性质",IncScale:"规模",IncPos:"岗位名称",publicDate:"2017-11-11"},
                    {title:"艺术设计",major:"专业名称",stuScale:"专业人数",addr:{city:"杭州",district:"滨江区"},recruitDate:"2016-12-11",IncProps:"性质",IncScale:"规模",IncPos:"岗位名称",publicDate:"2017-11-11"},
                    {title:"艺术设计",major:"专业名称",stuScale:"专业人数",addr:{city:"杭州",district:"滨江区"},recruitDate:"2016-12-11",IncProps:"性质",IncScale:"规模",IncPos:"岗位名称",publicDate:"2017-11-11"},
                    {title:"艺术设计",major:"专业名称",stuScale:"专业人数",addr:{city:"杭州",district:"滨江区"},recruitDate:"2016-12-11",IncProps:"性质",IncScale:"规模",IncPos:"岗位名称",publicDate:"2017-11-11"},
               ],
               results:[
                    {title:"艺术设计",major:"专业名称",stuScale:"专业人数",addr:{city:"杭州",district:"滨江区"},recruitDate:"2016-12-11",IncProps:"性质",IncScale:"规模",IncPos:"岗位名称",publicDate:"2017-11-11"},
                    {title:"艺术设计",major:"专业名称",stuScale:"专业人数",addr:{city:"杭州",district:"滨江区"},recruitDate:"2016-12-11",IncProps:"性质",IncScale:"规模",IncPos:"岗位名称",publicDate:"2017-11-11"},
                    {title:"艺术设计",major:"专业名称",stuScale:"专业人数",addr:{city:"杭州",district:"滨江区"},recruitDate:"2016-12-11",IncProps:"性质",IncScale:"规模",IncPos:"岗位名称",publicDate:"2017-11-11"},
                    {title:"艺术设计",major:"专业名称",stuScale:"专业人数",addr:{city:"杭州",district:"滨江区"},recruitDate:"2016-12-11",IncProps:"性质",IncScale:"规模",IncPos:"岗位名称",publicDate:"2017-11-11"},
                    {title:"艺术设计",major:"专业名称",stuScale:"专业人数",addr:{city:"杭州",district:"滨江区"},recruitDate:"2016-12-11",IncProps:"性质",IncScale:"规模",IncPos:"岗位名称",publicDate:"2017-11-11"},
                    {title:"艺术设计",major:"专业名称",stuScale:"专业人数",addr:{city:"杭州",district:"滨江区"},recruitDate:"2016-12-11",IncProps:"性质",IncScale:"规模",IncPos:"岗位名称",publicDate:"2017-11-11"},
                    {title:"艺术设计",major:"专业名称",stuScale:"专业人数",addr:{city:"杭州",district:"滨江区"},recruitDate:"2016-12-11",IncProps:"性质",IncScale:"规模",IncPos:"岗位名称",publicDate:"2017-11-11"},
               ]
          },
          increcruitList:{
               curpage:1,
               items:[
                    {title:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},recruitDate:"2016-12-11",posAmount:20,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",publicDate:"2017-11-11"},
                    {title:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},recruitDate:"2016-12-11",posAmount:20,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",publicDate:"2017-11-11"},
                    {title:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},recruitDate:"2016-12-11",posAmount:20,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",publicDate:"2017-11-11"},
                    {title:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},recruitDate:"2016-12-11",posAmount:20,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",publicDate:"2017-11-11"},
                    {title:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},recruitDate:"2016-12-11",posAmount:20,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",publicDate:"2017-11-11"},
                    {title:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},recruitDate:"2016-12-11",posAmount:20,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",publicDate:"2017-11-11"}
               ],
               results:[
                    {title:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},recruitDate:"2016-12-11",posAmount:20,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",publicDate:"2017-11-11"},
                    {title:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},recruitDate:"2016-12-11",posAmount:20,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",publicDate:"2017-11-11"},
                    {title:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},recruitDate:"2016-12-11",posAmount:20,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",publicDate:"2017-11-11"},
                    {title:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},recruitDate:"2016-12-11",posAmount:20,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",publicDate:"2017-11-11"},
                    {title:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},recruitDate:"2016-12-11",posAmount:20,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",publicDate:"2017-11-11"},
                    {title:"艺术设计",salary:"7k-9k",major:"设计相关专业",worksexp:"1-3年经验",scolar:"大专",address:{province:"浙江省",city:"杭州市",district:"滨江区"},recruitDate:"2016-12-11",posAmount:20,inc:"杭州煌巢信息科技有限公司",IncProps:"国企",publicDate:"2017-11-11"}
               ]
          }
     },
     methods:{
          coApply:function(){
               if(isLogin){
                    $(".dlg-success").css({
                         top: Math.floor(($(window).height()-412)/2+document.body.scrollTop)
                    })
                   appModal.showModal=true;
                   appModal.showLogin=false;
                   appModal.showSucc=true;
               }else{
                    $(".dlg-login").css({
                         top: Math.floor(($(window).height()-412)/2+document.body.scrollTop)
                    })
                    appModal.showModal=true;
                    appModal.showLogin=true;
                    appModal.showSucc=false;
               }
          },
          showResult:function(index,curpage,itemsnum){
              if(index>=(parseInt(curpage)-1)*parseInt(itemsnum)&&index<parseInt(curpage)*parseInt(itemsnum)){
                   return true;
              }else{
                   return false;
              }
         },
         pagesum:function(totalitems){
              var totalpage =1;
              if(totalitems%5==0){
                   totalpage = totalitems/5
              }else{
                   totalpage = Math.floor(totalitems/5)+1;
              }
              return totalpage;
         },
         showpage:function(totalitems){
              var totalpage =1;
              if(totalitems%5==0){
                   totalpage = totalitems/5
              }else{
                   totalpage = Math.floor(totalitems/5)+1;
              }
              if(totalpage<3){
                   return totalpage;
              }else{
                   return 3;
              }
         },
         topage:function(page,type){
              if(type=="uni"){
                   this.uniList.curpage=page;
              }else if(type=="inc"){
                   this.incList.curpage=page;
              }else if(type=="pos"){
                   this.posList.curpage=page;
              }else if(type=="uni-rec"){
                   this.unirecruitList.curpage=page;
              }else if(type=="inc-rec"){
                   this.increcruitList.curpage=page;
              }
         }

     },
     components:{
          'pagination':pagination
     }
})

var appModal = new Vue({
     el:"#app-modal",
     data:{
          showModal:false,
          showSucc:false,
          showLogin:false
     },
     methods:{
          confirmSuc:function(){
               this.showSucc=false;
               this.showModal=false;
          },
          closeSuc:function(){
               this.showSucc=false;
               this.showModal=false;
          },
          closeLog:function(){
               this.showLogin=false;
               this.showModal=false;
          },
     }
})
function _init(){
     selectInitPos();
     _initEventBind();
}
_init();
function selectInitPos(){
     $(".selectee input").each(function(){
        var bgPos=$(this).width()+10+"px center";
        $(this).attr("disabled","true").css("background-position",bgPos);
    });
    $(".selectee ul").each(function(){
        var sibInput=$(this).siblings("input")
        $(this).width(sibInput.width()+30);
        $(this).css({
            left:sibInput.css("margin-left"),
            top:sibInput.height()
        })
    });
    $(".popBox .selectee ul").css("top","25px");
    $("body").bind("click",function(){
       $(".selectee ul").hide();
      appQuery.showPosBox=false;
      appQuery.showAreaBox=false;
      appQuery.showWelBox=false;
    })
}

    function _initEventBind(){
        $(".account li").hover(function(){
            $(this).find("dl").slideDown(300);
        },function(){
            $(this).find("dl").slideUp(200);
        })
        $(".popBox").click(function(){
             return false;
        })
        //申请合作对话框事件绑定
    }
