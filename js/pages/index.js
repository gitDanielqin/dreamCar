//初始化首屏的尺寸和元素位置
function init_pos(){
     var winH = getViewport().height;
     $(".mod-page").height($(window).height());
     $(".center-teil").css({
          "margin-top": Math.floor(winH * 0.135) + "px"
     });
     $(".module-entry").css({
          "margin-top": Math.floor(winH * 0.09) + "px"
     });
     $(".weiter").height(Math.floor(winH*0.065));
     $(".class-show .p-title").css({
          "padding-top": Math.floor(winH * 0.079) + "px"
     })
}

function showEventBind(){
     $(".show-pics li").mouseover(function(){
          if($(this).hasClass("rotate-left")){
               $(this).removeClass("rotate-left");
               $(".show-pics .rotate-center").removeClass("rotate-center").addClass("rotate-left");
               $(this).addClass("rotate-center");
          }else if($(this).hasClass("rotate-right")){
               $(this).removeClass("rotate-right");
               $(".show-pics .rotate-center").removeClass("rotate-center").addClass("rotate-right");
               $(this).addClass("rotate-center");
          }
     })
}

function turnEventBind(){
     $(".class-show .turn-left").click(function(){
          $(".show-pics li:first-child").removeClass("rotate-left").addClass("rotate-right");
          $(".show-pics").append($(".show-pics li:first-child"));
          $(".show-pics .rotate-center").removeClass("rotate-center").addClass("rotate-left");
          $(".show-pics .rotate-right:nth-child(4)").removeClass("rotate-right").addClass("rotate-center");
     })
};

function wheelEventBind(element,index){
     var oEl = document.getElementById(element);
     if(oEl.onwheel){
          oEl.onwheel = function(ev){
               var ev = ev || window.event;
               var wheelValue;
               if(ev.wheelDelta){
                    wheelValue = ev.wheelDelta
               }else{
                    wheelValue = ev.detail
               };
               if(wheelValue<0){
                    if(document.body.scrollTop<getViewport().height*(index-1)){
                         $("body").animate({
                              scrollTop:getViewport().height*(index-1)
                         },500)
                    }else{
                         $("body").animate({
                              scrollTop:getViewport().height*index
                         },500)
                    }
               }
          }
     }else{
          oEl.addEventListener("wheel",function(ev){
               var ev = ev || window.event;
               var wheelValue;
               if(ev.wheelDelta){
                    wheelValue = ev.wheelDelta
               }else{
                    wheelValue = ev.detail
               };
               if(wheelValue<0){
                    if(document.body.scrollTop<getViewport().height*(index-1)){
                         $("body").animate({
                              scrollTop:getViewport().height*(index-1)
                         },500)
                    }else{
                         $("body").animate({
                              scrollTop:getViewport().height*index
                         },500)
                    }
               }
          });
     }

}

var appFront = new Vue({
     el:"#app-front",
     data:{
          database:{
               address:{
                    provinces:[],
                    citys:[],
                    hotcitys:["北京","上海","杭州","广州","深圳"]
               }
          },
          showAddr:false,
          address:{
               selProvince:"",
               selCity:"",
               displayCity:"北京市",
          }
     },
     methods:{
          selhotcity:function(city){
               this.address.displayCity = city+"市";
               this.showAddr=false;
          },
          downwards:function(){
               $("body").animate({
                    scrollTop:getViewport().height
               },500)
          }
     },
     mounted:function(){
          init_pos();
          for(var i=0; i<addArray.length; i++){
               this.database.address.provinces.push(addArray[i].name);
          };
          this.address.selProvince=addArray[0].name;
          for(var j=0; j<addArray[0].citys.length;j++){
               this.database.address.citys.push(addArray[0].citys[j].city);
          };
          this.address.selCity=addArray[0].citys[0].city;
          $("body").click(function(){
               appFront.showAddr=false;
          })
     },
     watch:{
          "address.selProvince":function(curval){
               this.database.address.citys=[];
               for(var i=0; i<addArray.length;i++){
                    if(addArray[i].name==curval){
                         for(var j=0;j<addArray[i].citys.length;j++){
                              this.database.address.citys.push(addArray[i].citys[j].city);
                         };
                         break;
                    }
               }
               this.address.selCity=this.database.address.citys[0];
          },
          "address.selCity":function(curval){
               if(curval.indexOf("北京")>=0){
                    this.address.displayCity = "北京市";
               }else if(curval.indexOf("上海")>=0){
                    this.address.displayCity = "上海市";
               }else if(curval.indexOf("天津")>=0){
                    this.address.displayCity = "天津市";
               }else if(curval.indexOf("重庆")>=0){
                    this.address.displayCity = "重庆市";
               }else{
                    this.address.displayCity = curval;
               }
          }
     }
})
var appShow =  new Vue({
     el:"#app-show",
     data:{
          showInfos:[
               {imgsrc:"images/pic-class1.jpg",txt:"解决大学生从学习到就业的信息"},
               {imgsrc:"images/photo05.jpg",txt:"解决大学生从学习到就业的信息"},
               {imgsrc:"images/pic-class1.jpg",txt:"解决大学生从学习到就业的信息"},
               {imgsrc:"images/photo05.jpg",txt:"解决大学生从学习到就业的信息"},
               {imgsrc:"images/pic-class1.jpg",txt:"解决大学生从学习到就业的信息"},
               {imgsrc:"images/photo05.jpg",txt:"解决大学生从学习到就业的信息"},
               {imgsrc:"images/pic-class1.jpg",txt:"解决大学生从学习到就业的信息"},
          ]
     },
     methods:{
          cssrotate:function(index){
               if(index<3){
                    return "rotate-left";
               }else if(index>3){
                    return "rotate-right";
               }else if(index==3){
                    return "rotate-center"
               }
          },
          showSwitch:function(index){
               if(index!=3){
                    var activeItem = cloneObj(this.showInfos[index]);
                    this.showInfos.splice(index,1);
                    this.showInfos.splice(3,0,activeItem);
               }
          }
     },
     mounted:function(){
          $("#app-show").height(getViewport().height);
     //     wheelEventBind("app-show",2);
          turnEventBind();
          //showEventBind();
     }
});

var appAbout = new Vue({
     el:"#app-about",
     mounted:function(){
          $("#app-about").height(getViewport().height);
     //     wheelEventBind("app-about",3);
     }
})
var appCoop =  new Vue({
     el:"#app-coop",
     data:{
          coopInc:[
               {imgsrc:"images/coLogo02.jpg"},
               {imgsrc:"images/coLogo03.jpg"},
               {imgsrc:"images/coLogo04.jpg"},
               {imgsrc:"images/coLogo02.jpg"},
               {imgsrc:"images/coLogo03.jpg"},
               {imgsrc:"images/coLogo03.jpg"},
               {imgsrc:"images/coLogo03.jpg"},
          ],
          coopUni:[
               {imgsrc:"images/coLogo02.jpg"},
               {imgsrc:"images/coLogo03.jpg"},
               {imgsrc:"images/coLogo04.jpg"},
               {imgsrc:"images/coLogo02.jpg"},
               {imgsrc:"images/coLogo03.jpg"},
               {imgsrc:"images/coLogo04.jpg"},
               {imgsrc:"images/coLogo02.jpg"},
               {imgsrc:"images/coLogo03.jpg"},
               {imgsrc:"images/coLogo04.jpg"},
          ],
          showinc:true
     },
     methods:{
               incLeft:function(){
                    if($(".coop-inc").position().left>740-$(".coop-inc").width())
                    $(".coop-inc").animate({
                         left:"-="+$(".coop-inc").children("li:first-child").outerWidth(true)+"px"
                    },500)
               },
               incRight:function(){
                    if($(".coop-inc").position().left<0)
                    $(".coop-inc").animate({
                         left:"+="+$(".coop-inc").children("li:first-child").outerWidth(true)+"px"
                    },500)
               },
               uniLeft:function(){
                    if($(".coop-uni").position().left>740-$(".coop-uni").width())
                    $(".coop-uni").animate({
                         left:"-="+$(".coop-uni").children("li:first-child").outerWidth(true)+"px"
                    },500);
               },
               uniRight:function(){
                    if($(".coop-uni").position().left<0)
                    $(".coop-uni").animate({
                         left:"+="+$(".coop-uni").children("li:first-child").outerWidth(true)+"px"
                    },500);
               }
     },
     mounted:function(){
          $("#app-coop").height(getViewport().height-288);
     }
});

var appFooter =  new Vue({
     el:"#app-footer",
     data:{
          fBlocks:[
               {title:"关于我们",sublis:["企业文化","企业简介"]},
               {title:"联系我们",sublis:["公司地址","联系方式"]},
               {title:"网站合作",sublis:["合作条件","合作内容"]},
               {title:"帮助中心",sublis:["客服中心","常见问题","售后服务"]},
               {title:"招聘中心",sublis:["UI设计","WEB前端","后端人员","更多招聘"]},
          ]
     },
     methods:{
          linkFoo:function(item){
               switch (item) {
                    case "关于我们":window.open("footer-page.html?descript");break;
                    case "联系我们":window.open("footer-page.html?contact");break;
                    case "网站合作":window.open("footer-page.html?coop");break;
                    case "帮助中心":window.open("footer-page.html?help");break;
                    case "招聘中心":window.open("footer-page.html?employ");break;
                    default:window.open("footer-page.html?descript");
               }
          }
     }
})
