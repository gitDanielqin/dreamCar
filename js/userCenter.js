/**
 * Created by xuanyuan on 2016/11/27.
 */

var objMe=this;
var appPorto = new Vue({
     el:"#app-porto",
     data:{
          viewInfo:false,
          newInfo:{
               gender:"",
               birthyear:"",
               birthmonth:"",
               birthday:"",
               address:{
                    province:"",
                    city:"",
                    district:""
               },
               phone:"",
               state:""
          },
          oldInfo:{
               gender:"男",
               birthyear:1988,
               birthmonth:1,
               birthday:1,
               address:{
                    province:"浙江",
                    city:"杭州",
                    district:"滨江区"
               },
               phone:15264598785,
               state:"在职，打算换个新环境"
          }
     },
     methods:{
          save:function(){
               this.oldInfo=cloneObj(this.newInfo);
               this.viewInfo=true;
          },
          cancel:function(){
               this.viewInfo=true;
          },
          edit:function(){
               this.newInfo=cloneObj(this.oldInfo);
               this.viewInfo=false;
          },
          age:function(birthyear){
               var date = new Date();
               return (date.getFullYear()-birthyear);
          },
          showPre:function(){
               appModal.showModal=true;
               appModal.showPreview=true;
          }
     }
})

var appCont = new Vue({
     el:"#app-content",
     data:{
          data:{
               years:[1988,1989,1990,1991,1992],
               months:[1,2,3,4,5,6,7,8,9,10,11,12],
               address:{
                    province:["浙江","河南","安徽"],
                    city:["杭州","新乡"],
                    district:["滨江区","红旗区"]
               },
               nations:["汉族","回族","维吾尔族"],
               salary:["4000-6000","6000-8000","8000-10000"],
               major:{
                    main:["信息技术","数学系"],
                    sub:["计算机科学","通信工程","应用数学"]
               },
               qualification:["专科","本科","硕士","博士"],
               languages:[
                    "英语","法语","日语","韩语","德语","俄语","西班牙语","葡萄牙语","阿拉伯语","其他"
               ]
          },
          resume:{
               birthyear:1988,
               birthmonth:1,
               family:"",
               phone:"",
               email:"",
               province:"",
               nation:"",
               expect:{
                    tradeItems:"",
                    posItems:"",
                    province:"",
                    city:"",
                    district:"",
                    salary:""
               },
               worksExps:[{
                    show:true,
                    firma:"",
                    trade:"",
                    pos:"",
                    startyear:2010,
                    startmonth:2,
                    endyear:2016,
                    endmonth:10,
                    resp:""}
               ],
               edus:[{
                    show:true,
                    uni:"",
                    major:"",
                    submajor:"",
                    exmajor:"",
                    startyear:2010,
                    startmonth:2,
                    endyear:2016,
                    endmonth:10,
                    qualification:"",

               }],
               projects:[{
                    show:true,
                    name:"",
                    firma:"杭州黄巢信息科技有限公司",
                    startyear:2010,
                    startmonth:2,
                    endyear:2016,
                    endmonth:10,
                    desc:"",
                    resp:"",
                    achiev:""
               }],
               laSkills:[],
               selfEval:"",
               psInfo:"",
               skills:""
          }
     },
     methods:{
          popTrade:function(){
               appModal.showModal=true;
               appModal.showTrade=true;
          },
          showPre:function(){
               appModal.showModal=true;
               appModal.showPreview=true;
          },
          checkLan:function(target,language){
               if(target.checked&&this.resume.laSkills.indexOf(language)<0){
                    this.resume.laSkills.push(language);
               }
               if(!target.checked){
                    this.resume.laSkills.remove(language);
               }
          },
          addWorksexp:function(){
               for(var i=0; i<this.resume.worksExps.length; i++){
                    this.resume.worksExps[i].show=false;
               }
               var worksexp ={
                    show:true,
                    firma:"",
                    trade:"",
                    pos:"",
                    startyear:2010,
                    startmonth:2,
                    endyear:2016,
                    endmonth:10,
                    resp:""}
               this.resume.worksExps.push(worksexp);
          },
          workSwipe:function(index){
               for(var i=0; i<this.resume.worksExps.length; i++){
                    this.resume.worksExps[i].show=false;
               }
               this.resume.worksExps[index].show=true;
          },
          addEdu:function(){
               for(var i=0; i<this.resume.edus.length; i++){
                    this.resume.edus[i].show=false;
               };
               var edusExp ={
                    show:true,
                    uni:"",
                    major:"",
                    submajor:"",
                    exmajor:"",
                    startyear:2010,
                    startmonth:2,
                    endyear:2016,
                    endmonth:10,
                    qualification:"",
               };
               this.resume.edus.push(edusExp);
          },
          eduSwipe:function(index){
               for(var i=0; i<this.resume.edus.length; i++){
                    this.resume.edus[i].show=false;
               };
               this.resume.edus[index].show=true;
          },
          addProject:function(){
               for(var i=0; i<this.resume.projects.length; i++){
                    this.resume.projects[i].show=false;
               };
               var project = {
                    show:true,
                    name:"",
                    firma:"杭州黄巢信息科技有限公司",
                    startyear:2010,
                    startmonth:2,
                    endyear:2016,
                    endmonth:10,
                    desc:"",
                    resp:"",
                    achiev:""
               };
               this.resume.projects.push(project);
          },
          projectSwipe:function(index){
               for(var i=0; i<this.resume.edus.length; i++){
                    this.resume.projects[i].show=false;
               }
               this.resume.projects[index].show=true;
          }
     },
     updated:function(){
          window.selectInitPos();
          window.selectEventBind();
     }
});

var appModal = new Vue({
     el:"#app-modal",
     data:{
          checkedTrades:[],
          showModal:false,
          showTrade:false,
          showPreview:false,
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
          }
     }
});
function init_center(){
     selectInitPos();
    init_pos();
    selectEventBind();
   // init_paneAdd();
    navEventBind();
    modalEventBind();
}
init_center();

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
function init_pos(){
    var p_left= Math.floor($(".safe-range p").width()*$(".safe-range").width()/100)-16+"px";
    $(".r-pointer").css("left",p_left);
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
