function init_pos(){
     var winH = $(window).height();
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
init_pos();


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
}
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
               console.log(this.showInfos[index]);
               if(index!=3){
                    var activeItem = cloneObj(this.showInfos[index]);
                    this.showInfos.splice(index,1);
                    this.showInfos.splice(3,0,activeItem);
               }
          }
     },
     mounted:function(){
          turnEventBind();
          //showEventBind();
     }
});

var appCoop =  new Vue({
     el:"#app-coop",
     data:{
          coopInc:[
               {imgsrc:"images/coLogo02.jpg"},
               {imgsrc:"images/coLogo03.jpg"},
               {imgsrc:"images/coLogo04.jpg"},
               {imgsrc:"images/coLogo02.jpg"},
               {imgsrc:"images/coLogo03.jpg"},
          ]
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
     }
})
