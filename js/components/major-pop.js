(function(){
     var templMajor= '<div style="position:relative" class="pop-major-box">\
          <span @click.stop="pop(1,$event.target)" class="major-input major-input-1"><input type="text" placeholder="一级学科" disabled v-model="selMajor" ></span>\
          <span @click.stop="pop(2,$event.target)" class="major-input major-input-2"><input type="text" placeholder="二级学科" disabled v-model="selSubMajor"></span>\
          <input type="text" class="ex-major" placeholder="请输入专业名称" v-model="exMajor" v-show="showExMajor"/>\
          <div class="pop-major-1 pop-major" v-show="showMajor1">\
               <h3 class="pop-major-title">专业名称<i class="pic-wrapper major-closer" @click=closePop><span class="pic-icon icon-close"></span></i></h3>\
               <div class="major-table-box pop-box">\
                    <table>\
                         <tr v-for="tr in major.trs">\
                              <td @click="clickMajor($event.target)">{{major.dataArray[tr*4]}}</td>\
                              <td @click="clickMajor($event.target)">{{major.dataArray[tr*4+1]}}</td>\
                              <td @click="clickMajor($event.target)">{{major.dataArray[tr*4+2]}}</td>\
                              <td @click="clickMajor($event.target)">{{major.dataArray[tr*4+3]}}</td>\
                         </tr>\
                    </table>\
               </div>\
          </div>\
          <div class="pop-major-2 pop-major" v-show="showMajor2">\
               <h3 class="pop-major-title">专业名称<i class="pic-wrapper major-closer" @click=closePop><span class="pic-icon icon-close"></span></i></h3>\
               <div class="major-table-box pop-box">\
                    <table>\
                         <tr v-for="tr in submajor.trs">\
                              <td @click="clickSubMajor($event.target)">{{submajor.dataArray[tr*3]}}</td>\
                              <td @click="clickSubMajor($event.target)">{{submajor.dataArray[tr*3+1]}}</td>\
                              <td @click="clickSubMajor($event.target)">{{submajor.dataArray[tr*3+2]}}</td>\
                         </tr>\
                    </table>\
               </div>\
          </div>\
     </div>';
     Vue.component("major-pop",{
          template:templMajor,
          props:["majordata"],
          data:function(){
               var major={
                    trs:[],
                    dataArray:[]
               };
               var submajor={
                    trs:[],
                    dataArray:[]
               };

               for(var i=0; i<this.majordata.length;i++){
                    major.dataArray.push(this.majordata[i].major);
                    if(i%4==0){
                         major.trs.push(Math.floor(i/4));
                    }
               };
               submajor.dataArray= this.majordata[0].submajor;
               for(var j=0; j<submajor.dataArray.length;j++){
                    if(j%3==0){
                         submajor.trs.push(Math.floor(j/3));
                    }
               }
               var dataBase={
                    showMajor1:false,
                    showMajor2:false,
                    showExMajor:false,
                    major:major,
                    submajor:submajor,
                    selMajor:"",
                    selSubMajor:"",
                    exMajor:""
               };
               return dataBase;
          },
          methods:{
               pop:function(index,obj){
                    $(".pop-major").hide();
                    $(obj).parent().siblings(".pop-major-"+index).show();
               },
               clickMajor:function(obj){
                    this.selMajor = $(obj).html();
                    $(".pop-major").hide();
               },
               clickSubMajor:function(obj){
                    this.selSubMajor = $(obj).html();
                    $(".pop-major").hide();
               },
               closePop:function(){
                    $(".pop-major").hide();
               }
          },
          mounted:function(){
               $(".pop-major-1").each(function(){
                    $(this).css({
                         "left":0,
                         "top":$(this).siblings(".major-input-1").height()-2+"px"
                    })
               })
               $(".pop-major-2").each(function(){
                    //console.log($(this).siblings(".major-input-2").offset().left)
                    //console.log($(this).siblings(".major-input-2").offset().left-$(this).parent(".pop-major-box").offset().left);
                    $(this).css({
                         "left":$(this).siblings(".major-input-2").offset().left-$(this).parent(".pop-major-box").offset().left+"px",
                         "top":$(this).siblings(".major-input-2").height()-2+"px"
                    })
               });
          },
          watch:{
               "selMajor":function(curval){
                    for(var i=0; i<this.majordata.length;i++){
                         if(this.majordata[i].major==curval){
                              this.submajor.dataArray=this.majordata[i].submajor;
                              this.selSubMajor=this.submajor.dataArray[0];
                              this.submajor.trs=[];
                              for(var j=0; j<this.submajor.dataArray.length;j++){
                                   if(j%3==0){
                                        this.submajor.trs.push(Math.floor(j/3));
                                   }
                              }
                              break;
                         }
                    }
               },
               "showMajor1":function(curval){
                    if(curval){
                         $(".pop-major-1").each(function(){
                              $(this).css({
                                   "left":$(this).siblings(".major-input-1").position().left+"px",
                                   "top":$(this).siblings(".major-input-1").height()-2+"px"
                              })
                         })
                    }
               },
               "showMajor2":function(curval){
                    if(curval){
                         $(".pop-major-2").each(function(){
                              var left = $(this).siblings(".major-input-2").position().left;
                              if(left + $(this).width()>$(window).width()){
                                   left = $(window).width()-$(this).width();
                              }
                              $(this).css({
                                   "left":left+"px",
                                   "top":$(this).siblings(".major-input-2").height()-2+"px"
                              })
                         });
                    }
               },
               "selSubMajor":function(curval){
                    if(curval=="其他"){
                         this.showExMajor=true;
                    }else{
                         this.showExMajor=false;
                    }
               }
          }
     })

})();
