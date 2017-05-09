var parObj = EventUtils.urlExtrac(window.location);
var respObj={}; //请求的本页面的数据集合

(function(){
     var postdata={
          userId:parObj.userId,
          loginIdentifier:parObj.loginId
     };
     EventUtils.ajaxReq('/user/company/getInfo','get',postdata,function(resp,status){
          respObj = resp.data;
          console.log(respObj);
          if(respObj){
               var portobrief = {
                    IncProps: respObj.property,
                    IncScale:respObj.scale,
                    address: {
                         province: respObj.province,
                         city: respObj.city,
                         district: respObj.area
                    },
                    email: respObj.email
               }
               appPorto.inc = respObj.name;
               appPorto.briefInfo = portobrief;

               var specialLevel="";
               if(respObj.isWorld=="1"){
                    specialLevel = "世界500强";
                     $(".uni-level input[value='0']").attr("checked","true");
               }else if(respObj.isCountry=="1"){
                    specialLevel = "中国500强";
                    $(".uni-level input[value='1']").attr("checked","true");
               }
               var resumedata = {
                    Inc:respObj.name,
                    trade:respObj.type,
                    scale:respObj.scale,
                    props:respObj.property,
                    specialLv:specialLevel,
                    intro:respObj.discription!=undefined?respObj.discription:"",
                    comLicense:respObj.imgUrl,
                    hasBusLicense:respObj.imgUrl!="",
                    edit:respObj.infoStatus=="0",
                    view:respObj.infoStatus!="0"
               };
               appCont.resume = resumedata;
               var percent = 0;
              if(respObj.mobile!=""){
                   percent+=50;
              }
              if(respObj.email!=""){
                   percent+=30;
              }
              init_safepos(percent);
               var configdata = {
                    loginName:respObj.loginName,
                    safeLevel:percent+"%",
                    bind:{
                         mobile:respObj.mobile,
                         email:respObj.email
                    }
               }
               appCont.config = configdata;
          }

     })

})()



var appPorto = new Vue({
    el: "#app-porto",
    data: {
        viewInfo: true,
        inc: "企业名称",
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
        initAddress:{
          province:"",
          city:"",
          district:""
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
             var postdata={
                  userId:parObj.userId,
                  companyId:respObj.companyId,
               //    loginName:parObj.loginName,
                  property: this.briefInfo.IncProps,
                  province: this.briefInfo.address.province,
                  city: this.briefInfo.address.city,
                  area: this.briefInfo.address.district,
                  email: this.briefInfo.email
             }
             console.log(postdata);
             EventUtils.ajaxReq('/user/company/modifyInfo','post',postdata,function(resp,status){
                  console.log(resp);
             })
        },
        cancel:function(){
             this.briefInfo = cloneObj(this.cloneInfo);
             this.viewInfo=true;
        },
        edit:function(){
             this.cloneInfo = cloneObj(this.briefInfo);
             this.initAddress = cloneObj(this.briefInfo.address);
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
              hasBusLicense:false,
              edit:false,
              view:true
         },
         require:{
              state:"校企合作",
              period:"全部状态",
              demandSrc:0,
              curpage:1,
              totalpages:1,
              pagesize:3,
              totalitems:1,
              newLink:"incRequire.html?new=1&userId="+parObj.userId+"&loginId="+parObj.loginId,
              results:[],
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
       },
       config:{
            loginName:"",
            safeLevel:"80%",
            bind:{mobile:"",email:""}
       }
    },
    watch:{
         "config.bind.mobile":function(curval){
              var percent = 0;
              if(this.config.bind.mobile!=""){
                   percent+=50;
              }
              if(this.config.bind.email!=""){
                   percent+=30;
              }
              init_safepos(percent);
              percent +="%";
              this.config.safeLevel = percent;
         },
         "config.bind.email":function(curval){
              var percent = 0;
              if(this.config.bind.mobile!=""){
                   percent+=50;
              }
              if(this.config.bind.email!=""){
                   percent+=30;
              }
              init_safepos(percent);
              percent +="%";
              this.config.safeLevel = percent;
         },
      "require.state":function(curval){
           if(curval=="校企合作"){
                var postdata = {
                     userId:parObj.userId,
                     loginIdentifier:parObj.loginId,
                     demandType:2,
                     index:1,
                     count:3
                }
                EventUtils.ajaxReq("/demand/getList","get",postdata,function(resp,status){
                     console.log(resp);
                     appCont.require.totalpages = resp.data.totalPage;
                     appCont.require.pagesize = resp.data.pageSize;
                     appCont.require.results = resp.data.list;
                     appCont.require.totalitems = resp.data.totalRow;
                })
                this.require.curpage=1;
           }

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
         infoCtrl:function(text){
              if(text){
                 text = EventUtils.infoExtrac(text);
              }
             return text=="不限"||text==undefined?"":text;
         },
         infoExtrac:function(item){
              return EventUtils.infoExtrac(item);
         },
         requireLink:function(demandId){
          return "detail-company.html?userId="+parObj.userId+"&loginId="+parObj.loginId+"&demandId="+demandId+"&type=inc";
         },
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
              var postdata = {
                   userId: parObj.userId,
                   companyId: respObj.companyId,
                   name: this.resume.Inc,
                   type: this.resume.trade,
                   property: this.resume.props,
                   scale: this.resume.scale,
                   discription: this.resume.intro,
                   imgUrl: this.resume.comLicense,
                   isWorld: this.resume.specialLv=="世界500强"?1:0,
                   isCountry: this.resume.specialLv=="中国500强"?1:0,
              };
              console.log(postdata);
              EventUtils.ajaxReq('/user/company/modifyInfo','post',postdata,function(resp,status){
                  console.log(resp);
             })
         },
         checkExlv:function(){
              var exLevel = $(".uni-level input[type='radio']:checked").val();
              if(exLevel=="0"){
                  this.resume.specialLv="世界500强";
             }else if(exLevel=="1"){
                  this.resume.specialLv="中国500强";
             }

         },
         delItem:function(item){
              this.require.items.remove(item);
         },
         modItem:function(item){
              var link = "incRequire.html?new=0&userId="+parObj.userId+"&loginId="+parObj.loginId+"&demandId="+item.demandId+"&demandType="+item.demandType;
              window.open(link,"_blank");
         },
         freshItem:function(item){
              appModal.showModal=true;
              appModal.show.freshbox=true;
         },
         stickItem:function(item){
              appModal.showModal=true;
              appModal.show.stickybox=true;
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
        showpage:function(totalpage){
            if(totalpage<3){
                 return totalpage;
            }else{
                 return 3;
            }
        },
        topage:function(page,type){
            if(type=="require"){
               var postdata = {
                    userId:parObj.userId,
                    loginIdentifier:parObj.loginId,
                    demandType:2,
                    index:page,
                    count:3
               }
                EventUtils.ajaxReq("/demand/getList","get",postdata,function(resp,status){
                    appCont.require.results = resp.data.list;
                })
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
      },
      modifyMobile:function(){
          appModal.show.mobile=true;
          appModal.showModal=true;
      },
      modifyEmail:function(){
          appModal.show.email=true;
          appModal.showModal=true;
      },
      bindWechat:function(){
          appModal.show.wechat=true;
          appModal.showModal=true;
      },
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
          account:{
               money:0,
               freeFreshTimes:0
          },
          show:{
               stickybox:false,
               stickyhintbox:false,
               freshbox:false,
               freshhintbox:false,
               mobile:false,
               email:false,
               wechat:false
          },
          sticky:{
               content:[
                    {duration:"置顶1天",price:10,hint:"(无折扣仅10元/天)"},
                    {duration:"置顶3天",price:27,hint:"(9折仅9元/天)"},
                    {duration:"置顶5天",price:40,hint:"(8折仅8元/天)"},
                    {duration:"置顶10天",price:70,hint:"(7折仅7元/天)"},
               ],
               sum:10,
               presum:10,
               date:"2016-12-30",
               time:"16:08:02",
               discount:"9折",
               sofortBtn:"立即充值",
               planBtn:"立即置顶",
               sofort:true
          },
          fresh:{
               content:[
                    {duration:"刷新4次（1天）",price:4,hint:"(无折扣仅1元/次)"},
                    {duration:"刷新12次（3天）",price:10.8,hint:"(9折仅0.9元/次)"},
                    {duration:"刷新20次（5天）",price:16,hint:"(8折仅0.8元/次)"},
                    {duration:"刷新40次（10天）",price:28,hint:"(7折仅0.7元/次)"},
               ],
               sum:4,
               presum:4,
               date:"2016-12-30",
               time:"16:08:02",
               discount:"9折",
               smartBtn:"立即充值",
               sofortBtn:"立即刷新",
               smart:true
          },
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
          toSmartFresh:function(){
               this.show.freshhintbox=false;
               this.show.freshbox=true;
          },
          toPlanSticky:function(){
               this.show.stickyhintbox=false;
               this.show.stickybox=true;
          },
          closeSticky:function(){
               this.show.stickybox=false;
               this.showModal=false;
          },
          closeHintSticky:function(){
               this.show.stickyhintbox=false;
               this.showModal=false;
          },
          closeFresh:function(){
               this.show.freshbox=false;
               this.showModal=false;
          },
          closeHintFresh:function(){
               this.show.freshhintbox=false;
               this.showModal=false;
          },
          checkAutopay:function(obj){
               $(obj).toggleClass("on")
          },
          selectStickyItem:function(index,obj){
               $(".sticky-sofort-list .icon-radio").removeClass("on");
               $(obj).addClass("on");
               switch (index) {
                    case 0:this.sticky.presum = 10; this.sticky.sum = 10;break;
                    case 1:this.sticky.presum = 10*3; this.sticky.sum = Math.floor(this.sticky.presum*0.9);break;
                    case 2:this.sticky.presum = 10*5; this.sticky.sum = Math.floor(this.sticky.presum*0.8);break;
                    case 3:this.sticky.presum = 10*10; this.sticky.sum = Math.floor(this.sticky.presum*0.7);break;
                    default:
               }
          },
          selectFreshItem:function(index,obj){
               $(".fresh-smart-list .icon-radio").removeClass("on");
               $(obj).addClass("on");
               switch(index) {
                    case 0:this.fresh.presum = 1*4;
                         this.fresh.sum = 4;
                         break;
                    case 1:this.fresh.presum = 1*4*3;
                         this.fresh.sum = this.fresh.presum*0.9.toFixed(1);
                         break;
                    case 2:this.fresh.presum = 1*4*5;
                         this.fresh.sum = Math.floor(this.fresh.presum*0.8).toFixed(1);
                         break;
                    case 3:this.fresh.presum = 1*4*10;
                         this.fresh.sum = Math.floor(this.fresh.presum*0.7).toFixed(1);
                         break;
                    default:
               }
          },
          selectStickWay:function(way,obj){
               $(".stick-navs .on").removeClass("on");
               $(obj).addClass("on");
               if(way=="sofort"){
                    this.sticky.sofort=true;
                    this.sticky.sum=4;
                    this.sticky.presum=4;
               }else{
                    this.sticky.sofort=false;
                    var summe = 0;
                    $(".plan-sticky-table tr").each(function(index){
                         if(index==1){
                              summe += $(this).find("td.on").length*70;
                         }else if(index==2){
                              summe += $(this).find("td.on").length*50;
                         };
                    });
                    this.sticky.sum =summe;
               }
          },
          selectFreshWay:function(way,obj){
               $(".fresh-navs .on").removeClass("on");
               $(obj).addClass("on");
               if(way=="smart"){
                    this.fresh.smart=true;
                    this.fresh.sum=4;
                    this.fresh.presum=4;
               }else{
                    this.fresh.smart=false;
                    if(this.account.freeFreshTimes>0){
                         this.fresh.sum =0;
                    }else{
                         this.fresh.sum =1;
                    }

               }
          },
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
          },
          closeMobile:function(){
               this.show.mobile=false;
               this.showModal=false;
          },
          closeWechat:function(){
               this.show.wechat=false;
               this.showModal=false;
          },
          closeEmail:function(){
               this.show.email=false;
               this.showModal=false;
          }
     },
     watch:{
          'showTrade':function(curval){
               if(curval){
                    var top = Math.floor($(window).height()*0.15+$("body").scrollTop())+"px";
                    $(".trade-box-single").css("margin-top",top);
               }
          },
          "show.stickybox":function(curval){
               if(curval){
                    var top = Math.floor($(window).height()*0.15+$("body").scrollTop())+"px";
                    $("#app-modal .refresh-box").css("top",top);
               }
          },
          "show.stickyhintbox":function(curval){
               if(curval){
                    var top = Math.floor($(window).height()*0.15+$("body").scrollTop())+"px";
                    $("#app-modal .refresh-hint-box").css("top",top);
               }
          },
          "show.freshbox":function(curval){
               if(curval){
                    var top = Math.floor($(window).height()*0.15+$("body").scrollTop())+"px";
                    $("#app-modal .refresh-box").css("top",top);
               }
          },
          "show.freshhintbox":function(curval){
               if(curval){
                    var top = Math.floor($(window).height()*0.15+$("body").scrollTop())+"px";
                    $("#app-modal .refresh-hint-box").css("top",top);
               }
          },
          "sticky.sum":function(curval){
               this.sticky.sofortBtn = curval>this.account.money?"立即充值":"立即置顶";
               this.sticky.planBtn = curval>this.account.money?"立即充值":"立即置顶";
          },
          "fresh.sum":function(curval){
               this.fresh.sofortBtn = curval>this.account.money?"立即充值":"立即刷新";
               this.fresh.smartBtn = curval>this.account.money?"立即充值":"立即刷新";
          }
     },
     mounted:function(){
          this.sticky.sofortBtn = 10>this.account.money?"立即充值":"立即置顶";
          this.fresh.smartBtn = 4>this.account.money?"立即充值":"立即刷新";
     }
});
function init_center(){
     // selectInit();
   selectInitInput();
     selectInitPos();
   refreshEventBind();
   navEventBind();
   showContact();
   vipEventBind();
   modalEventBind();
   uploadEventBind();
}
init_center();

function selectInit(){
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


function navEventBind(){
     $(".sideBox .sub-li p").unbind("click").bind("click",function(){
         $(this).siblings("p.on").removeClass("on");
         $(this).addClass("on");
         $(".content").children().hide();
         $(".content").children("."+$(this).attr("paneid")).show();
         selectInitPos();
         return false;
     });

    $(".sideBox>li").bind("click",function(){
        $(".sideBox").children("li.on").removeClass("on");
        $(this).addClass("on");
        $(".sideBox .sub-li").hide();
        if($(this).find(".sub-li").length>0){
            $(this).find(".sub-li").show();
            $(".content").children().hide();
            $(".content").children("."+$(this).find(".sub-li .on").attr("paneid")).show();
        }
        //需求面板请求结果
        if($(this).attr("paneid")=="requireBox"){
             var postdata = {
                  userId:parObj.userId,
                  loginIdentifier:parObj.loginId,
                  demandType:2,
                  index:1,
                  count:3
             }
             console.log(postdata);
             EventUtils.ajaxReq("/demand/getList","get",postdata,function(resp,status){
                  console.log(resp);
                  appCont.require.totalpages = resp.data.totalPage;
                  appCont.require.pagesize = resp.data.pageSize;
                  appCont.require.demandSrc = 0;
                  appCont.require.results = resp.data.list;
                  appCont.require.totalitems = resp.data.totalRow;

             })
        }
        if($(this).attr("paneid")){
            $(".content").children().hide();
            $(".content").children("."+$(this).attr("paneid")).show();
        }
        selectInitPos();
    });
}

//如果有主题跳转信息
if(parObj.theme){
     switch (parObj.theme) {
          case "vip":
               $(".sideBox li[paneid='vip-center']").trigger("click");
               break;
          case "require":
               $(".sideBox li[paneid='requireBox']").trigger("click");
               break;
          case "combi":
               $(".sideBox li[paneid='uni-coop']").trigger("click");
               break;
          case "collect":
               $(".sideBox li[paneid='collectBox']").trigger("click");
               break;
     }
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
function init_safepos(percent){
     var p_left= Math.floor($(".safe-range").width()*percent/100)-16+"px";
     $(".r-pointer").css("left",p_left);
     $("#safe-progress").css("width",percent+"%");
}
function modalEventBind(){

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

function refreshEventBind(){
     $(".plan-sticky-table td").click(function(){
          if(!$(this).hasClass("td-title")){
               $(".plan-sticky-table td[name='"+$(this).attr("name")+"']").removeClass("on");
               $(this).addClass("on");
               var summe = 0;
               $(".plan-sticky-table tr").each(function(index){
                    if(index==1){
                         summe += $(this).find("td.on").length*70;
                    }else if(index==2){
                         summe += $(this).find("td.on").length*50;
                    };
               });
               appModal.sticky.sum =summe;
          }
     })
}
