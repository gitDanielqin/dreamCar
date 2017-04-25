
var parObj = EventUtils.urlExtrac(window.location);
var postdata={
     userId:parObj.userId,
     loginIdentifier:parObj.loginId
};
EventUtils.ajaxReq('/user/company/getInfo','get',postdata,function(data,status){
     console.log(data);
     alert(data.info);
})

var appPorto = new Vue({
    el: "#app-porto",
    data: {
        viewInfo: true,
        Inc: "企业名称",
        database:{
             incprops:incProps,
             incscale:incScale,
             addrData:addArray
        },
        briefInfo:{
             IncProps: "民营企业",
             IncScale:"600人以上",
             address: {
                 province: "浙江",
                 city: "杭州",
                 district: "滨江"
             },
             email: "xqztc@qq.com"
        },
        cloneInfo:{}
   },
   methods:{
        uploading:function(){
             appModal.showModal=true;
             appModal.showUpload=true;
        },
        save:function(){
             this.briefInfo.address.province = $(".edit-brief .sel-province input").val();
             this.briefInfo.address.city = $(".edit-brief .sel-city input").val();
             this.briefInfo.address.district = $(".edit-brief .sel-district input").val();
             this.viewInfo=true;
        },
        cancel:function(){
             this.briefInfo = cloneObj(this.cloneInfo);
             this.viewInfo=true;
        },
        edit:function(){
             this.cloneInfo = cloneObj(this.briefInfo);
             this.viewInfo=false;
        }
   }
});
// 移除多余的两项
incProps.remove("中国500强");
incProps.remove("世界500强");
var appCont = new Vue({
    el: "#app-content",
    data:{
         database:{
              IncScale:incScale,
              IncProps:incProps,
         },
         resume:{
              Inc:"",
              trade:"",
              scale:"",
              props:"民营企业",
              specialLv:"",
              intro:"国际领先的互联网科技公司",
              comLicense:"",
              firstEdit:true,
              edit:true,
              view:false
         },
         require:{
              state:"全部类型",
              period:"全部状态",
              curpage:1,
              items:[
                   {classic:"校企合作",coMajor:"合作专业",coScale:"合作人数",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",trainWay:"企业提供的培训方式",IncName:"企业名称",uniLevel:"高校性质",publicDate:"2017-3-5",publicTime:"24:00",IncPos:"岗位名称"},
                   {classic:"招聘会",salary:"7K-8K",major:"设计相关专业",exp:"1-3年经验",scolar:"本科",date:"2017-01-30",IncName:"杭州黄巢信息科技",IncProps:"国企",IncPos:"岗位名称",posAmount:20,publicDate:"2017-3-1",publicTime:"24:00",recruitDate:"2017-01-30",recruitAddr:"地点"},
                   {classic:"招聘会",salary:"7K-8K",major:"设计相关专业",exp:"1-3年经验",scolar:"本科",date:"2017-01-30",IncName:"杭州黄巢信息科技",IncProps:"国企",IncPos:"岗位名称",posAmount:20,publicDate:"2017-3-1",publicTime:"24:00",recruitDate:"2017-01-30",recruitAddr:"地点"},
                   {classic:"招聘会",salary:"7K-8K",major:"设计相关专业",exp:"1-3年经验",scolar:"本科",date:"2017-01-30",IncName:"杭州黄巢信息科技",IncProps:"国企",IncPos:"岗位名称",posAmount:20,publicDate:"2017-3-1",publicTime:"24:00",recruitDate:"2017-01-30",recruitAddr:"地点"},
                   {classic:"招聘会",salary:"7K-8K",major:"设计相关专业",exp:"1-3年经验",scolar:"本科",date:"2017-01-30",IncName:"杭州黄巢信息科技",IncProps:"国企",IncPos:"岗位名称",posAmount:20,publicDate:"2017-3-1",publicTime:"24:00",recruitDate:"2017-01-30",recruitAddr:"地点"},
                   {classic:"企业直聘",salary:"7K-8K",major:"设计相关专业",exp:"1-3年经验",scolar:"大专",date:"2017-01-30",IncName:"杭州黄巢信息科技",IncProps:"国企",IncPos:"岗位名称",posAmount:2,publicDate:"2017-2-14",publicTime:"24:00",IncAddr:"滨江"},
                   {classic:"企业直聘",salary:"7K-8K",major:"设计相关专业",exp:"1-3年经验",scolar:"大专",date:"2017-01-30",IncName:"杭州黄巢信息科技",IncProps:"国企",IncPos:"岗位名称",posAmount:2,publicDate:"2017-2-14",publicTime:"24:00",IncAddr:"滨江"},
                   {classic:"企业直聘",salary:"7K-8K",major:"设计相关专业",exp:"1-3年经验",scolar:"大专",date:"2017-01-30",IncName:"杭州黄巢信息科技",IncProps:"国企",IncPos:"岗位名称",posAmount:2,publicDate:"2017-2-14",publicTime:"24:00",IncAddr:"滨江"},
              ],
              results:[
                   {classic:"校企合作",coMajor:"合作专业",coScale:"合作人数",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业业所属行业所属行业所属行",trainWay:"企业提供的培训方式",IncName:"企业名称",uniLevel:"高校性质",publicDate:"2017-3-5",publicTime:"24:00",IncPos:"岗位名称"},
                   {classic:"招聘会",salary:"7K-8K",major:"设计相关专业",exp:"1-3年经验",scolar:"本科",date:"2017-01-30",IncName:"杭州黄巢信息科技",IncProps:"国企",IncPos:"岗位名称",posAmount:20,publicDate:"2017-3-1",publicTime:"24:00",recruitDate:"2017-01-30",recruitAddr:"地点"},
                   {classic:"招聘会",salary:"7K-8K",major:"设计相关专业",exp:"1-3年经验",scolar:"本科",date:"2017-01-30",IncName:"杭州黄巢信息科技",IncProps:"国企",IncPos:"岗位名称",posAmount:20,publicDate:"2017-3-1",publicTime:"24:00",recruitDate:"2017-01-30",recruitAddr:"地点"},
                   {classic:"招聘会",salary:"7K-8K",major:"设计相关专业",exp:"1-3年经验",scolar:"本科",date:"2017-01-30",IncName:"杭州黄巢信息科技",IncProps:"国企",IncPos:"岗位名称",posAmount:20,publicDate:"2017-3-1",publicTime:"24:00",recruitDate:"2017-01-30",recruitAddr:"地点"},
                   {classic:"招聘会",salary:"7K-8K",major:"设计相关专业",exp:"1-3年经验",scolar:"本科",date:"2017-01-30",IncName:"杭州黄巢信息科技",IncProps:"国企",IncPos:"岗位名称",posAmount:20,publicDate:"2017-3-1",publicTime:"24:00",recruitDate:"2017-01-30",recruitAddr:"地点"},
                   {classic:"企业直聘",salary:"7K-8K",major:"设计相关专业",exp:"1-3年经验",scolar:"大专",date:"2017-01-30",IncName:"杭州黄巢信息科技",IncProps:"国企",IncPos:"岗位名称",posAmount:2,publicDate:"2017-2-14",publicTime:"24:00",IncAddr:"滨江"},
                   {classic:"企业直聘",salary:"7K-8K",major:"设计相关专业",exp:"1-3年经验",scolar:"大专",date:"2017-01-30",IncName:"杭州黄巢信息科技",IncProps:"国企",IncPos:"岗位名称",posAmount:2,publicDate:"2017-2-14",publicTime:"24:00",IncAddr:"滨江"},
                   {classic:"企业直聘",salary:"7K-8K",major:"设计相关专业",exp:"1-3年经验",scolar:"大专",date:"2017-01-30",IncName:"杭州黄巢信息科技",IncProps:"国企",IncPos:"岗位名称",posAmount:2,publicDate:"2017-2-14",publicTime:"24:00",IncAddr:"滨江"},
              ],
              showCombi:true,
              showRecruit:true
         },
         collect:{
              state:"全部状态",
              curpage:1,
              items:[
                   {classic:"高校招聘会",pos:"岗位名称",major:"专业名称",stuScale:"专业人数",IncName:"公司名称",recruitDate:"2017-01-30",recruitAddr:"地点",IncProps:"企业性质",IncScale:"企业规模",publicDate:"2017-11-11",publicTime:"24:00"},
                   {classic:"高校招聘会",pos:"岗位名称",major:"专业名称",stuScale:"专业人数",IncName:"公司名称",recruitDate:"2017-01-30",recruitAddr:"地点",IncProps:"企业性质",IncScale:"企业规模",publicDate:"2017-11-11",publicTime:"24:00"},
                   {classic:"高校招聘会",pos:"岗位名称",major:"专业名称",stuScale:"专业人数",IncName:"公司名称",recruitDate:"2017-01-30",recruitAddr:"地点",IncProps:"企业性质",IncScale:"企业规模",publicDate:"2017-11-11",publicTime:"24:00"},
                   {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"企业需要提供的",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
                   {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"企业需要提供的",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
                   {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"企业需要提供的",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
                   {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"到校培训",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
              ],
              results:[
                   {classic:"高校招聘会",pos:"岗位名称",major:"专业名称",stuScale:"专业人数",IncName:"公司名称",recruitDate:"2017-01-30",recruitAddr:"地点",IncProps:"企业性质",IncScale:"企业规模",publicDate:"2017-11-11",publicTime:"24:00"},
                   {classic:"高校招聘会",pos:"岗位名称",major:"专业名称",stuScale:"专业人数",IncName:"公司名称",recruitDate:"2017-01-30",recruitAddr:"地点",IncProps:"企业性质",IncScale:"企业规模",publicDate:"2017-11-11",publicTime:"24:00"},
                   {classic:"高校招聘会",pos:"岗位名称",major:"专业名称",stuScale:"专业人数",IncName:"公司名称",recruitDate:"2017-01-30",recruitAddr:"地点",IncProps:"企业性质",IncScale:"企业规模",publicDate:"2017-11-11",publicTime:"24:00"},
                   {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"企业需要提供的",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
                   {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"企业需要提供的",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
                   {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"企业需要提供的",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
                   {classic:"校企合作",major:"专业名称",publicDate:"发布时间",IncProps:"企业性质",trainway:"到校培训",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",publicDate:"2017-11-11",publicTime:"24:00"},
              ]
         },
         message:{
              combi:{
                   state:"全部状态",
                   curpage:1,
                   items:[
                        {code:"01",pos:"岗位名称",major:"专业",stuScale:"人数",uniLevel:"高校性质",uniApply:"高校需要提供的",IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00"},
                        {code:"01",pos:"岗位名称",major:"专业",stuScale:"人数",uniLevel:"高校性质",uniApply:"高校需要提供的",IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00"},
                        {code:"01",pos:"岗位名称",major:"专业",stuScale:"人数",uniLevel:"高校性质",uniApply:"高校需要提供的",IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00"},
                        {code:"02",major:"专业名称",IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",trainWay:"企业提供的培训方式",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00",applystate:"01"},
                        {code:"02",major:"专业名称",IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",trainWay:"企业提供的培训方式",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00",applystate:"03"},
                   ],
                   results:[
                        {code:"01",pos:"岗位名称",major:"专业",stuScale:"人数",uniLevel:"高校性质",uniApply:"高校需要提供的",IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00"},
                        {code:"01",pos:"岗位名称",major:"专业",stuScale:"人数",uniLevel:"高校性质",uniApply:"高校需要提供的",IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00"},
                        {code:"01",pos:"岗位名称",major:"专业",stuScale:"人数",uniLevel:"高校性质",uniApply:"高校需要提供的",IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00"},
                        {code:"02",major:"专业名称",IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",trainWay:"企业提供的培训方式",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00",applystate:"01"},
                        {code:"02",major:"专业名称",IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",trainWay:"企业提供的培训方式",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00",applystate:"03"},
                   ]
              },
              recruit:{
                   state:"全部状态",
                   curpage:1,
                   items:[
                        {major:"工业设计",salary:"7K-9K",posAmount:"20人",qualific:"本科",IncAddress:{province:"浙江省",city:"杭州市",district:"滨江区"},IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00"},
                        {major:"工业设计",salary:"7K-9K",posAmount:"20人",qualific:"本科",IncAddress:{province:"浙江省",city:"杭州市",district:"滨江区"},IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00"},
                        {major:"工业设计",salary:"7K-9K",posAmount:"20人",qualific:"本科",IncAddress:{province:"浙江省",city:"杭州市",district:"滨江区"},IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00"},
                        {major:"工业设计",salary:"7K-9K",posAmount:"20人",qualific:"本科",IncAddress:{province:"浙江省",city:"杭州市",district:"滨江区"},IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00"},
                        {major:"工业设计",salary:"7K-9K",posAmount:"20人",qualific:"本科",IncAddress:{province:"浙江省",city:"杭州市",district:"滨江区"},IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00"}
                   ],
                   results:[
                        {major:"工业设计",salary:"7K-9K",posAmount:"20人",qualific:"本科",IncAddress:{province:"浙江省",city:"杭州市",district:"滨江区"},IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00"},
                        {major:"工业设计",salary:"7K-9K",posAmount:"20人",qualific:"本科",IncAddress:{province:"浙江省",city:"杭州市",district:"滨江区"},IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00"},
                        {major:"工业设计",salary:"7K-9K",posAmount:"20人",qualific:"本科",IncAddress:{province:"浙江省",city:"杭州市",district:"滨江区"},IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00"},
                        {major:"工业设计",salary:"7K-9K",posAmount:"20人",qualific:"本科",IncAddress:{province:"浙江省",city:"杭州市",district:"滨江区"},IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00"},
                        {major:"工业设计",salary:"7K-9K",posAmount:"20人",qualific:"本科",IncAddress:{province:"浙江省",city:"杭州市",district:"滨江区"},IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00"}
                   ]
              }
         },
         vip:{
              records:[
                 {date:"2017.01.01", action:"信息刷新：4条", price:0, state:"交易完成"},
                 {date:"2017.01.01", action:"信息置顶：1次", price:0, state:"交易完成"},
                 {date:"2017.01.01", action:"广告投放：1次", price:0, state:"交易完成"},
                 {date:"2017.01.01", action:"信息匹配：4条", price:0, state:"交易完成"},
                 {date:"2017.01.01", action:"账户充值", price:500.68, state:"交易完成"}
            ],
            tarif:[
                 {level:"初级会员",prior:1,refresh:1,mapping:8,price:585,icon:"images/crown-junior.png"},
                 {level:"中级会员",prior:2,refresh:4,mapping:12,price:1040,icon:"images/crown-middle.png"},
                 {level:"初级会员",prior:4,refresh:8,mapping:16,price:1560,icon:"images/crown-senior.png"},
            ]
       },
       coop:{
            state:"全部状态",
            curpage:1,
            items:[
                 {uniname:"高校名称",uniLevel:"高校性质",uniApply:"高校提供的培训方式",date:"2017-3-5",time:"24:00",coopState:"02",coPos:"合作岗位"},
                 {uniname:"高校名称",uniLevel:"高校性质",uniApply:"高校提供的培训方式",date:"2017-3-5",time:"24:00",coopState:"02",coPos:"合作岗位"},
                 {uniname:"高校名称",uniLevel:"高校性质",uniApply:"高校提供的培训方式",date:"2017-3-5",time:"24:00",coopState:"02",coPos:"合作岗位"},
                 {uniname:"高校名称",uniLevel:"高校性质",uniApply:"高校提供的培训方式",date:"2017-3-5",time:"24:00",coopState:"03",coPos:"合作岗位"},
                 {uniname:"高校名称",uniLevel:"高校性质",uniApply:"高校提供的培训方式",date:"2017-3-5",time:"24:00",coopState:"01",coPos:"合作岗位"}
            ],
            results:[
                 {uniname:"高校名称",uniLevel:"高校性质",uniApply:"高校提供的培训方式",date:"2017-3-5",time:"24:00",coopState:"02",coPos:"合作岗位"},
                 {uniname:"高校名称",uniLevel:"高校性质",uniApply:"高校提供的培训方式",date:"2017-3-5",time:"24:00",coopState:"02",coPos:"合作岗位"},
                 {uniname:"高校名称",uniLevel:"高校性质",uniApply:"高校提供的培训方式",date:"2017-3-5",time:"24:00",coopState:"02",coPos:"合作岗位"},
                 {uniname:"高校名称",uniLevel:"高校性质",uniApply:"高校提供的培训方式",date:"2017-3-5",time:"24:00",coopState:"03",coPos:"合作岗位"},
                 {uniname:"高校名称",uniLevel:"高校性质",uniApply:"高校提供的培训方式",date:"2017-3-5",time:"24:00",coopState:"01",coPos:"合作岗位"}
            ]
       }
    },
    watch:{
      "require.state":function(curval){
           this.require.results=reqFilter(curval,this.require.period);
           this.require.curpage=1;
      },
      "require.period":function(curval){
           this.require.results=reqFilter(this.require.state,curval);
           this.require.curpage=1;
      },
      "collect.state":function(curval,oldval){
           if(curval=="全部状态"){
                this.collect.results= cloneObj(this.collect.items);
           }else{
                this.collect.results = [];
                for(var i=0;i<this.collect.items.length;i++){
                     if(this.collect.items[i].classic==curval){
                          this.collect.results.push(this.collect.items[i]);
                     }
                }
           }
           this.collect.curpage=1;
      },
      "message.combi.state":function(curval){
           if(curval=="全部状态"){
                this.message.combi.results = cloneObj(this.message.combi.items);
           }else if(curval=="发出的邀请"){
                this.message.combi.results=[];
                for(var i=0;i<this.message.combi.items.length;i++){
                     if(this.message.combi.items[i].code=="02"){
                          this.message.combi.results.push(this.message.combi.items[i]);
                     }
                }
           }else if(curval=="收到的邀请"){
                this.message.combi.results=[];
                for(var i=0;i<this.message.combi.items.length;i++){
                     if(this.message.combi.items[i].code=="01"){
                          this.message.combi.results.push(this.message.combi.items[i]);
                     }
                }
           };
           this.message.combi.curpage=1;
      },
      "coop.state":function(curval){
           if(curval=="全部状态"){
                this.coop.results = cloneObj(this.coop.items);
           }else if(curval=="合作进行中"){
                this.coop.results=[];
                for(var i=0 ; i<this.coop.items.length; i++){
                     if(this.coop.items[i].coopState=="02"){
                          this.coop.results.push(this.coop.items[i]);
                     }
                }
           }else if(curval=="合作已完成"){
                this.coop.results=[];
                for(var i=0 ; i<this.coop.items.length; i++){
                     if(this.coop.items[i].coopState=="03"){
                          this.coop.results.push(this.coop.items[i]);
                     }
                }
           }else if(curval=="合作待开始"){
                this.coop.results=[];
                for(var i=0 ; i<this.coop.items.length; i++){
                     if(this.coop.items[i].coopState=="01"){
                          this.coop.results.push(this.coop.items[i]);
                     }
                }
           }
           this.coop.curpage=1;
      }
    },
    methods:{
         popTrade:function(){
              appModal.showModal=true;
              appModal.showTrade=true;
         },
         submajors:function(major){
              var arr =[];
              if(major){
                   for(var i=0; i<this.database.majors.length;i++){
                        if(this.database.majors[i].major==major){
                             return this.database.majors[i].submajor;
                        }
                   }
              }
         },
         addMajors:function(){
              if(this.resume.specialmajor.length<5){
                   this.resume.specialmajor.push({major:"",submajor:""});
              }else{
                   return false;
              }

         },
         editSwipe:function(){
              this.resume.firstEdit=false;
              this.resume.edit=true;
              this.resume.view=false;
         },
         saveResume:function(){
              this.resume.edit=false;
              this.resume.view=true;
         },
         checkExlv:function(){
              this.resume.specialLv=$(".uni-level input[type='radio']:checked").val();
         },
         delItem:function(item){
              this.require.items.remove(item);
         },
         priceCal1:function(val){
              var priceInt = parseInt(val);
              if(priceInt==0){
                   return "- "+priceInt;
              }else if(priceInt>0){
                   return "+ "+priceInt;
              }
         },
         priceCal2:function(val){
              var priceF=(parseFloat(val)*100-parseInt(val)*100)%100;
          //    if(priceF*10%1==0) priceF+="0";
          if(priceF<10) priceF+="0";
              return ("."+priceF);
         },
         coopSt:function(state){
              switch (state) {
                   case "01":return "合作待开始";break;
                   case "02":return "合作进行中";break;
                   case "03":return "合作已完成";break;
                   default:return "合作待开始"
              }
         },
         coopStyle:function(state){
              switch (state) {
                   case "01":return {color:"#91daef"};break;
                   case "02":return {color:"#f7aa00"};break;
                   case "03":return {color:"#333"};break;
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
            if(totalitems%3==0){
                  totalpage = totalitems/3
            }else{
                  totalpage = Math.floor(totalitems/3)+1;
            }
            return totalpage;
        },
        showpage:function(totalitems){
            var totalpage =1;
            if(totalitems%3==0){
                  totalpage = totalitems/3
            }else{
                  totalpage = Math.floor(totalitems/3)+1;
            }
            if(totalpage<3){
                  return totalpage;
            }else{
                  return 3;
            }
        },
        topage:function(page,type){
            if(type=="require"){
                  this.require.curpage=page;
            }else if(type=="collect"){
                  this.collect.curpage=page;
            }else if(type=="msg-combi"){
                  this.message.combi.curpage=page;
            }else if(type=="msg-recruit"){
                  this.message.recruit.curpage=page;
          }else if(type=="coop"){
                  this.coop.curpage=page;
            }
       },
       changeFile:function(obj,type){
           if(type=="commence"){
                this.resume.comLicense=$(obj).val();
           }
      },
      apply:function(type,index){

      },
      cancel:function(type,index){
           if(type=="collec-recruit"){
                this.collect.results.splice(index,1);
                this.collect.items = cloneObj(this.collect.results);
           }
      }
    },
    computed:{
         majorArr:function(){
              var arr =[];
              for(var i=0; i<this.database.majors.length;i++){
                   arr.push(this.database.majors[i].major);
              }
              return arr;
         },
         wordscal:function(){
              return (1000-this.resume.intro.length);
         },
         combimsg:function(){
              var total=0;
              for(var i=0; i<this.message.combi.items.length;i++){
                   if(this.message.combi.items[i].code==01){
                        total++;
                   }
              };
              return total;
         }
    },
    components:{
         'pagination':pagination
    }
});
var appModal = new Vue({
     el:"#app-modal",
     data:{
          checkedTrades:[],
          showModal:false,
          showTrade:false,
          showPreview:false,
          showUpload:false,
          trades:workareas,
          baseInfo:appPorto.oldInfo,
          resumeInfo:appCont.resume
     },
     methods:{
          closeTrade:function(){
               this.showTrade=false;
               this.showModal=false;
          },
          checkfunc:function(item,target){
               if(!target.checked){
                    this.checkedTrades.remove(item);
               }else if(this.checkedTrades.length>=3){
                    target.checked=false;
                    return false;
               }else{
                    this.checkedTrades.push(item);
               }
          },
          submitTrade:function(){
               appCont.resume.trade = $(".trade-single-table input[type='radio']:checked").val();
               this.showTrade=false;
               this.showModal=false;
          },
          cancelTrade:function(){
               this.showTrade=false;
               this.showModal=false;
          },
          hidemodal:function(){
               this.showModal=false;
               this.showTrade=false;
               this.showPreview=false;
          },
          stayshow:function(ev){
               ev.stopPropagation();
               return false;
          },
          closePorto:function(){
               this.showUpload=false;
               this.showModal=false;
          }
     },
     watch:{
          'showTrade':function(curval){
               if(curval){
                    var top = Math.floor($(window).height()*0.15+$("body").scrollTop())+"px";
                    $(".trade-box-single").css("margin-top",top);
               }
          }
     }
});
function init_center(){
     selectInit();
     selectInitPos();
     init_safepos();
  //  selectEventBind();
  //  editEventBind();
   // init_paneAdd();
   navEventBind();
   showContact();
   vipEventBind();
   modalEventBind();
   uploadEventBind();
}
init_center();

function selectInit(){
     $(".selectee input").each(function(){
          $(this).width($(this).width()-20);
          $(this).css("padding-right",20+"px");
        var bgPos=$(this).width()+10+"px center";
        $(this).attr("disabled","true").css("background-position",bgPos);
    });
     $(".major-input input").each(function(index){
          $(this).width($(this).width()-20);
          $(this).css("padding-right",20+"px");
          var bgPos=$(this).width()+10+"px center";
          $(this).attr("disabled","true").css("background-position",bgPos);
     })
}
function uploadEventBind(){
     var options = {
         thumbBox: '.thumbBox',
	    spinner: '.spinner',
	    imgSrc: 'images/avatar.png'
    };
    var cropper = $('.imgBox').cropbox(options);
      $('#upload-file').on('change', function () {
          var reader = new FileReader();
          reader.onload = function (e) {
              options.imgSrc = e.target.result;
              cropper = $('.imgBox').cropbox(options);
          }
          reader.readAsDataURL(this.files[0]);
          this.files = [];
     });
     $('.zoom-in').on('click', function () {
          cropper.zoomIn();
     });
     $('.zoom-out').on('click', function () {
           cropper.zoomOut();
      });

      $('#btnSubmit').on('click', function () {
          //      var img = cropper.getDataURL().replace('data:image/png;base64,', '');
               //  var url = 'AvatarHandler.ashx';
               //  var data = {
               //      action: "add",
               //      picStr: img
               //  };
               //  $.ajax(url, {
               //      type: 'post',
               //      data: data,
               //      success: function (data) {
               //
               //      },
               //      error: function (XMLHttpRequest, textStatus, errorThrown) {
                //
               //      }
               //  });
               // $('.cropped').append('<img src="' + img + '" align="absmiddle" style="width:64px;margin-top:4px;border-radius:64px;box-shadow:0px 0px 12px #7E7E7E;" ><p>64px*64px</p>');
               var imgsrc= cropper.getDataURL();
               //console.log(imgsrc);
               //$("#porto-img").html('');
               //console.log($("#porto-img").length);

               $("#avatar-box").html("<img src='"+ imgsrc +"' />");
               appModal.showUpload=false;
               appModal.showModal=false;
          //     css("src",cropper.getDataURL());

            })
}

function reqFilter(type,state){
     var filterArray = [];
     var diff_day=0;
     switch (state) {
          case "三天内":
               diff_day=3;
               break;
          case "一周内":
               diff_day=7;
               break;
          case "一月内":
               diff_day=30;
               break;
     };
     if(type=="全部类型"){
          if(state=="全部状态"){
               filterArray = cloneObj(appCont.require.items);
          }else{
               for(var i=0; i<appCont.require.items.length;i++){
                    if(diffDay(appCont.require.items[i].publicDate)<=diff_day){
                         filterArray.push(appCont.require.items[i]);
                    }
               }
          }
     }else{
          if(state=="全部状态"){
               for(var i=0;i<appCont.require.items.length; i++){
                    if(appCont.require.items[i].classic==type){
                         filterArray.push(appCont.require.items[i]);
                    }
               }
          }else{
               for(var i=0;i<appCont.require.items.length; i++){
                    if(appCont.require.items[i].classic==type&&diffDay(appCont.require.items[i].publicDate)<=diff_day){
                         filterArray.push(appCont.require.items[i]);
                    }
               }
          }
     };
     return filterArray;
}

function selectEventBind(){
    $(".selectee ul li").bind({
        "mouseover":function(){
            $(this).addClass("over");
        },
       "mouseout":function(){
           $(this).removeClass("over");
       },
       "click":function(){
           $(this).siblings(".selected").removeClass("selected");
           $(this).addClass("selected");
           $(this).parent().siblings("input").val($(this).text());
           $(this).parent().hide();
           return false;
       }
     });
    $(".selectee").bind("click",function(){
        $(".selectee ul").hide();
        $(this).children("ul").show();
        return false;
    });
    $("body").bind("click",function(){
        $(".selectee ul").hide();
    })
}
function navEventBind(){
    $(".sideBox>li").bind("click",function(){
        $(".sideBox").children("li.on").removeClass("on");
        $(this).addClass("on");
        $(".sideBox .sub-li").hide();
        if($(this).find(".sub-li").length>0){
            $(this).find(".sub-li").show();
            $(this).find(".sub-li p").unbind("click").bind("click",function(){
                $(".sideBox .sub-li .on").removeClass("on");
                $(this).addClass("on");
                $(".content").children().hide();
                $(".content").children("."+$(this).attr("paneid")).show();
                selectInitPos();
                return false;
            });
        }
        $(".content").children().hide();
        $(".content").children("."+$(this).attr("paneid")).show();
        selectInitPos();
    });
}
function vipEventBind(){
     $(".vip-navs li").each(function(index){
          $(this).click(function(){
               $(".vip-navs li.on").removeClass("on");
               $(this).addClass("on");
               $(".vip-cont").removeClass("on");
               $($(".vip-cont")[index]).addClass("on");
          });

     })
}
function init_safepos(){
     var p_left= Math.floor($(".safe-range p").width()*$(".safe-range").width()/100)-16+"px";
    // var p_left= Math.floor($(".safe-range p").width())-16+"px";
    $(".r-pointer").css("left",p_left);
}
function modalEventBind(){
    $(".bind-acc button.chg-phone").click(function(){
        $(".modal").show();
        $(".modal").children().hide();
        $(".modal .phone-change").show();
        $(".close").unbind("click").bind("click",function(){
            $(this).closest("div").hide();
            $(".modal").hide();
        })
    });
    $(".bind-acc button.wechatBind").click(function(){
        $(".modal").show();
        $(".modal").children().hide();
        $(".modal .wechat-bind").show();
        $(".close").unbind("click").bind("click",function(){
            $(this).closest("div").hide();
            $(".modal").hide();
        });
    });
    $(".msg-center").click(function(){
        $(".modal").show();
        $(".modal").children().hide();
        $(".modal .msg-box").show();
    })
    $(".msg-body li").bind("click",function(){
        $(".show01").hide();
        $(".show02").show();
        $(".msg-head").text("系统消息");
    })
    $(".back").click(function(){
        $(".show02").hide();
        $(".show01").show();
        $(".msg-head").text("消息中心");
    })
    $(".close").unbind("click").bind("click",function(){
        $(this).closest("div").hide();
        $(".modal").hide();
    })
}
function showContact(){
     $(".message-btn .to-contact").bind({
          "mouseover":function(){
               $(this).siblings(".contact-box").show();
          },
          "mouseout":function(){
               $(this).siblings(".contact-box").hide();
          }
     });
     $(".state-line .to-contact").bind({
          "mouseover":function(){
               if($(this).hasClass("on")){
                    $(this).parent().siblings(".contact-box").show();
               }
          },
          "mouseout":function(){
               if($(this).hasClass("on")){
                    $(this).parent().siblings(".contact-box").hide();
               }

          }
     })
}
