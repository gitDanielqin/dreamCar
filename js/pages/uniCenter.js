var appPorto = new Vue({
    el: "#app-porto",
    data: {
        viewInfo: true,
        uni: "中国美术学院",
        classic: "重点大学",
        address: {
            province: "浙江",
            city: "杭州",
            district: "滨江"
        },
        email: "xqztc@qq.com"
   },
   methods:{
        uploading:function(){
             appModal.showModal=true;
             appModal.showUpload=true;
        }
   }
});
var appCont = new Vue({
    el: "#app-content",
    data:{
         database:{
              classific:["综合类","理工类","师范类","艺术类","体育类","职业技术类"],
              amount:["1-10000","10001-20000","20001-30000","30001-40000","40000以上",],
              unilevel:["重点","本科","大专","高职"],
              majors:[
                   {major:"艺术",submajor:["行为艺术","人体艺术"]},
                   {major:"信息技术",submajor:["计算机科学","通信工程"]},
                   {major:"经济",submajor:["国民经济","企业经济"]},
              ],
         },
         resume:{
              uni:"中国美术学院",
              classific:"艺术类",
              amount:"",
              level:"重点",
              specialLv:"",
              specialmajor:[
                   {major:"艺术",submajor:"行为艺术"},
                   {major:"艺术",submajor:"行为艺术"}
              ],
              intro:"世界一流的艺术大学",
              comLicense:"",
              uniLicense:"",
              firstEdit:true,
              edit:true,
              view:false
         },
         require:{
              state:"全部状态",
              curpage:1,
              items:[
                   {classic:"校企合作",major:"专业名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",trainWay:"企业提供的培训方式",uniname:"高校名称",uniLevel:"高校性质",date:"2017.11.11"},
                   {classic:"校企合作",major:"通信工程",IncProps:"国有企业",IncScale:"600人以上",IncArea:"通信技术",trainWay:"到校培训",uniname:"浙江大学",uniLevel:"重点大学",date:"2017.11.11"},
                   {classic:"校企合作",major:"通信工程",IncProps:"国有企业",IncScale:"600人以上",IncArea:"通信技术",trainWay:"到校培训",uniname:"浙江大学",uniLevel:"重点大学",date:"2017.11.11"},
                   {classic:"校企合作",major:"通信工程",IncProps:"国有企业",IncScale:"600人以上",IncArea:"通信技术",trainWay:"到校培训",uniname:"浙江大学",uniLevel:"重点大学",date:"2017.11.11"},
                   {classic:"招聘会",major:"专业名称",IncProps:"企业性质",IncScale:"企业规模",IncPos:"岗位名称",unireq:"高校对企要求",majorScale:"专业人数",IncArea:"通信技术",trainWay:"到校培训",uniname:"浙江大学",uniLevel:"重点大学",date:"2017.11.11",recruitDate:"招聘会时间",recruitAddr:"地点"},
                   {classic:"招聘会",major:"专业名称",IncProps:"企业性质",IncScale:"企业规模",IncPos:"岗位名称",unireq:"高校对企要求",majorScale:"专业人数",IncArea:"通信技术",trainWay:"到校培训",uniname:"浙江大学",uniLevel:"重点大学",date:"2017.11.11",recruitDate:"招聘会时间",recruitAddr:"地点"},
                   {classic:"招聘会",major:"专业名称",IncProps:"企业性质",IncScale:"企业规模",IncPos:"岗位名称",unireq:"高校对企要求",majorScale:"专业人数",IncArea:"通信技术",trainWay:"到校培训",uniname:"浙江大学",uniLevel:"重点大学",date:"2017.11.11",recruitDate:"招聘会时间",recruitAddr:"地点"},
                   {classic:"招聘会",major:"专业名称",IncProps:"企业性质",IncScale:"企业规模",IncPos:"岗位名称",unireq:"高校对企要求",majorScale:"专业人数",IncArea:"通信技术",trainWay:"到校培训",uniname:"浙江大学",uniLevel:"重点大学",date:"2017.11.11",recruitDate:"招聘会时间",recruitAddr:"地点"},
              ],
              results:[
                   {classic:"校企合作",major:"专业名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",trainWay:"企业提供的培训方式",uniname:"高校名称",uniLevel:"高校性质",date:"2017.11.11"},
                   {classic:"校企合作",major:"通信工程",IncProps:"国有企业",IncScale:"600人以上",IncArea:"通信技术",trainWay:"到校培训",uniname:"浙江大学",uniLevel:"重点大学",date:"2017.11.11"},
                   {classic:"校企合作",major:"通信工程",IncProps:"国有企业",IncScale:"600人以上",IncArea:"通信技术",trainWay:"到校培训",uniname:"浙江大学",uniLevel:"重点大学",date:"2017.11.11"},
                   {classic:"校企合作",major:"通信工程",IncProps:"国有企业",IncScale:"600人以上",IncArea:"通信技术",trainWay:"到校培训",uniname:"浙江大学",uniLevel:"重点大学",date:"2017.11.11"},
                   {classic:"招聘会",major:"专业名称",IncProps:"企业性质",IncScale:"企业规模",IncPos:"岗位名称",unireq:"高校对企要求",majorScale:"专业人数",IncArea:"通信技术",trainWay:"到校培训",uniname:"浙江大学",uniLevel:"重点大学",date:"2017.11.11",recruitDate:"招聘会时间",recruitAddr:"地点"},
                   {classic:"招聘会",major:"专业名称",IncProps:"企业性质",IncScale:"企业规模",IncPos:"岗位名称",unireq:"高校对企要求",majorScale:"专业人数",IncArea:"通信技术",trainWay:"到校培训",uniname:"浙江大学",uniLevel:"重点大学",date:"2017.11.11",recruitDate:"招聘会时间",recruitAddr:"地点"},
                   {classic:"招聘会",major:"专业名称",IncProps:"企业性质",IncScale:"企业规模",IncPos:"岗位名称",unireq:"高校对企要求",majorScale:"专业人数",IncArea:"通信技术",trainWay:"到校培训",uniname:"浙江大学",uniLevel:"重点大学",date:"2017.11.11",recruitDate:"招聘会时间",recruitAddr:"地点"},
                   {classic:"招聘会",major:"专业名称",IncProps:"企业性质",IncScale:"企业规模",IncPos:"岗位名称",unireq:"高校对企要求",majorScale:"专业人数",IncArea:"通信技术",trainWay:"到校培训",uniname:"浙江大学",uniLevel:"重点大学",date:"2017.11.11",recruitDate:"招聘会时间",recruitAddr:"地点"},
              ],
              showCombi:true,
              showRecruit:true
         },
         collect:{
              state:"全部状态",
              curpage:1,
              items:[
                   {pos:"岗位名称",major:"专业",stuScale:"人数",IncName:"公司名称",publicDate:"发布时间",IncProps:"企业性质",uniApply:"高校需要提供的",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",date:"2017.11.11",time:"24:00"},
                   {pos:"岗位名称",major:"通信工程",stuScale:"人数",IncName:"公司名称",publicDate:"发布时间",IncProps:"企业性质",uniApply:"高校需要提供的",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",date:"2017.11.11",time:"24:00"},
                   {pos:"岗位名称",major:"专业",stuScale:"人数",IncName:"公司名称",publicDate:"发布时间",IncProps:"企业性质",uniApply:"高校需要提供的",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",date:"2017.11.11",time:"24:00"},
                   {pos:"岗位名称",major:"专业",stuScale:"人数",IncName:"公司名称",publicDate:"发布时间",IncProps:"企业性质",uniApply:"高校需要提供的",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",date:"2017.11.11",time:"24:00"},
                   {pos:"岗位名称",major:"专业",stuScale:"人数",IncName:"公司名称",publicDate:"发布时间",IncProps:"企业性质",uniApply:"高校需要提供的",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",date:"2017.11.11",time:"24:00"},
                   {pos:"岗位名称",major:"专业",stuScale:"人数",IncName:"公司名称",publicDate:"发布时间",IncProps:"企业性质",uniApply:"高校需要提供的",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",date:"2017.11.11",time:"24:00"},
              ],
              results:[
                   {pos:"岗位名称",major:"专业",stuScale:"人数",IncName:"公司名称",publicDate:"发布时间",IncProps:"企业性质",uniApply:"高校需要提供的",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",date:"2017.11.11",time:"24:00"},
                   {pos:"岗位名称",major:"通信工程",stuScale:"人数",IncName:"公司名称",publicDate:"发布时间",IncProps:"企业性质",uniApply:"高校需要提供的",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",date:"2017.11.11",time:"24:00"},
                   {pos:"岗位名称",major:"专业",stuScale:"人数",IncName:"公司名称",publicDate:"发布时间",IncProps:"企业性质",uniApply:"高校需要提供的",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",date:"2017.11.11",time:"24:00"},
                   {pos:"岗位名称",major:"专业",stuScale:"人数",IncName:"公司名称",publicDate:"发布时间",IncProps:"企业性质",uniApply:"高校需要提供的",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",date:"2017.11.11",time:"24:00"},
                   {pos:"岗位名称",major:"专业",stuScale:"人数",IncName:"公司名称",publicDate:"发布时间",IncProps:"企业性质",uniApply:"高校需要提供的",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",date:"2017.11.11",time:"24:00"},
                   {pos:"岗位名称",major:"专业",stuScale:"人数",IncName:"公司名称",publicDate:"发布时间",IncProps:"企业性质",uniApply:"高校需要提供的",IncScale:"企业规模",IncArea:"企业所属行业",uniname:"高校名称",uniLevel:"高校性质",date:"2017.11.11",time:"24:00"},
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
                        {code:"02",major:"专业名称",IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",trainWay:"企业提供的培训方式",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00",applystate:"01"},
                        {code:"02",major:"专业名称",IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",trainWay:"企业提供的培训方式",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00",applystate:"01"},
                        {code:"02",major:"专业名称",IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",trainWay:"企业提供的培训方式",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00",applystate:"03"},
                   ],
                   results:[
                        {code:"01",pos:"岗位名称",major:"专业",stuScale:"人数",uniLevel:"高校性质",uniApply:"高校需要提供的",IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00"},
                        {code:"01",pos:"岗位名称",major:"专业",stuScale:"人数",uniLevel:"高校性质",uniApply:"高校需要提供的",IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00"},
                        {code:"01",pos:"岗位名称",major:"专业",stuScale:"人数",uniLevel:"高校性质",uniApply:"高校需要提供的",IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00"},
                        {code:"02",major:"专业名称",IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",trainWay:"企业提供的培训方式",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00",applystate:"01"},
                        {code:"02",major:"专业名称",IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",trainWay:"企业提供的培训方式",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00",applystate:"01"},
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
                        {major:"工业设计",salary:"7K-9K",posAmount:"20人",qualific:"本科",IncAddress:{province:"浙江省",city:"杭州市",district:"滨江区"},IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00"},
                   ],
                   results:[
                        {major:"工业设计",salary:"7K-9K",posAmount:"20人",qualific:"本科",IncAddress:{province:"浙江省",city:"杭州市",district:"滨江区"},IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00"},
                        {major:"工业设计",salary:"7K-9K",posAmount:"20人",qualific:"本科",IncAddress:{province:"浙江省",city:"杭州市",district:"滨江区"},IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00"},
                        {major:"工业设计",salary:"7K-9K",posAmount:"20人",qualific:"本科",IncAddress:{province:"浙江省",city:"杭州市",district:"滨江区"},IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00"},
                        {major:"工业设计",salary:"7K-9K",posAmount:"20人",qualific:"本科",IncAddress:{province:"浙江省",city:"杭州市",district:"滨江区"},IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00"},
                        {major:"工业设计",salary:"7K-9K",posAmount:"20人",qualific:"本科",IncAddress:{province:"浙江省",city:"杭州市",district:"滨江区"},IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",contactpep:"郑先生",contactway:"18984565569",date:"2017.11.11",time:"24:00"},
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
                 {IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",trainWay:"企业提供的培训方式",date:"2017.11.11",time:"24:00",coopState:"02",major:"公共管理专业"},
                 {IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",trainWay:"企业提供的培训方式",date:"2017.11.11",time:"24:00",coopState:"03",major:"合作专业"},
                 {IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",trainWay:"企业提供的培训方式",date:"2017.11.11",time:"24:00",coopState:"03",major:"合作专业"},
                 {IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",trainWay:"企业提供的培训方式",date:"2017.11.11",time:"24:00",coopState:"03",major:"合作专业"},
                 {IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",trainWay:"企业提供的培训方式",date:"2017.11.11",time:"24:00",coopState:"01",major:"公共管理专业"},
            ],
            results:[
                 {IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",trainWay:"企业提供的培训方式",date:"2017.11.11",time:"24:00",coopState:"02",major:"公共管理专业"},
                 {IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",trainWay:"企业提供的培训方式",date:"2017.11.11",time:"24:00",coopState:"03",major:"合作专业"},
                 {IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",trainWay:"企业提供的培训方式",date:"2017.11.11",time:"24:00",coopState:"03",major:"合作专业"},
                 {IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",trainWay:"企业提供的培训方式",date:"2017.11.11",time:"24:00",coopState:"03",major:"合作专业"},
                 {IncName:"公司名称",IncProps:"企业性质",IncScale:"企业规模",IncArea:"企业所属行业",trainWay:"企业提供的培训方式",date:"2017.11.11",time:"24:00",coopState:"01",major:"公共管理专业"},
            ]
       }
    },
    watch:{
      "require.state":function(curval,oldval){
           if(curval=="全部状态"){
                this.require.results = cloneObj(this.require.items);
           }else if(curval=="校企合作"){
                 this.require.results=[];
                for(var i=0; i<this.require.items.length; i++){
                     if(this.require.items[i].classic=="校企合作"){
                          this.require.results.push(this.require.items[i]);
                     }
                }
           }else if(curval=="招聘会"){
                 this.require.results=[];
                for(var i=0; i<this.require.items.length; i++){
                     if(this.require.items[i].classic=="招聘会"){
                          this.require.results.push(this.require.items[i]);
                     }
                }
           };
           this.require.curpage=1;
      },
      "collect.state":function(curval,oldval){
           var mydate = new Date();
           if(curval=="全部状态"){
                $(".collectBox .info-items li").show();
           }else if(curval=="近一个星期"){

           }
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
              }else if(type=="uni"){
                    this.resume.uniLicense=$(obj).val();
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
    updated:function(){
         selectInitPos();
         selectEventBind();
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
          trades:[
               {title:"互联网",items:["互联网/移动互联网/电子商务","互联网/移动互联网/电子商务","互联网/移动互联网/电子商务","互联网/移动互联网/电子商务"]},
               {title:"互联网",items:["互联网/移动互联网/电子商务","互联网/移动互联网/电子商务","互联网/移动互联网/电子商务","互联网/移动互联网/电子商务"]},
               {title:"互联网",items:["互联网/移动互联网/电子商务","互联网/移动互联网/电子商务","互联网/移动互联网/电子商务","互联网/移动互联网/电子商务"]},
               {title:"互联网",items:["互联网/移动互联网/电子商务","互联网/移动互联网/电子商务","互联网/移动互联网/电子商务","互联网/移动互联网/电子商务"]},
               {title:"互联网",items:["互联网/移动互联网/电子商务","互联网/移动互联网/电子商务","互联网/移动互联网/电子商务","互联网/移动互联网/电子商务"]}
          ],
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
               appCont.resume.expect.tradeItems = this.checkedTrades.join();
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
     }
});
function init_center(){
     selectInitPos();
   init_safepos();
    selectEventBind();
  //  editEventBind();
   // init_paneAdd();
   navEventBind();
   showContact();
   vipEventBind();
   modalEventBind();
   uploadEventBind();
}
init_center();

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

function selectInitPos(){
     $(".selectee input").each(function(){
        var bgPos=$(this).width()-10+"px center";
        $(this).attr("disabled","true").css("background-position",bgPos);
    });
    $(".selectee ul").each(function(){
        var sibInput=$(this).siblings("input")
        $(this).width(sibInput.width()+10);
        $(this).css({
            left:sibInput.css("margin-left"),
            top:sibInput.height()
        })
    });
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
                return false;
            });
        }
        $(".content").children().hide();
        $(".content").children("."+$(this).attr("paneid")).show();
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
     //console.log($(".safe-range p").width(),$(".safe-range").width());
    var p_left= Math.floor($(".safe-range p").width())-16+"px";
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
