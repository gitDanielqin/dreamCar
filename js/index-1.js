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

var appShow =  new Vue({
     el:"#app-show",
     data:{
          showInfos:[
               {imgsrc:"images/pic-class1.jpg",txt:"解决大学生从学习到就业的信息"},
               {imgsrc:"images/pic-class1.jpg",txt:"解决大学生从学习到就业的信息"},
               {imgsrc:"images/pic-class1.jpg",txt:"解决大学生从学习到就业的信息"},
               {imgsrc:"images/pic-class1.jpg",txt:"解决大学生从学习到就业的信息"},
               {imgsrc:"images/pic-class1.jpg",txt:"解决大学生从学习到就业的信息"},
               {imgsrc:"images/pic-class1.jpg",txt:"解决大学生从学习到就业的信息"},
               {imgsrc:"images/pic-class1.jpg",txt:"解决大学生从学习到就业的信息"},
          ]
     },
     methods:{
          cssrotate:function(index){
               if(index<3){
                    return "rotate-left";
               }else if(index>3){
                    return "rotate-right";
               }
          },
          zStyle:function(index){
               var zstyle={};
               if(index<3){
                    zstyle={
                         "z-index":index
                    }
               }else if(index==3){
                    zstyle={
                         "z-index":10
                    }
               }else if(index>3){
                    zstyle={
                         "z-index":6-index
                    }
               }
               return zstyle;
          }
     }
})
