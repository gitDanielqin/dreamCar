(function(){
     var templMajor= '<div style="position:relative">\
          <span @click="pop(\'major\')" class="major-input major-input-1"><input placeholder="一级学科" disabled v-model="selMajor" ></span>\
          <span @click="pop(\'submajor\')" class="major-input major-input-2"><input placeholder="二级学科" disabled v-model="selSubMajor"></span>\
          <div class="pop-major-1 pop-major" v-show="showMajor1">\
               <h3 class="pop-major-title">专业名称<i class="pic-wrapper major-closer" @click=closePop><img src="images/icon-close3.png" /></i></h3>\
               <div class="table-box">\
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
               <h3 class="pop-major-title">专业名称<i class="pic-wrapper major-closer" @click=closePop><img src="images/icon-close3.png" /></i></h3>\
               <div class="table-box">\
                    <table>\
                         <tr v-for="tr in submajor.trs">\
                              <td @click="clickSubMajor($event.target)">{{submajor.dataArray[tr*4]}}</td>\
                              <td @click="clickSubMajor($event.target)">{{submajor.dataArray[tr*4+1]}}</td>\
                              <td @click="clickSubMajor($event.target)">{{submajor.dataArray[tr*4+2]}}</td>\
                              <td @click="clickSubMajor($event.target)">{{submajor.dataArray[tr*4+3]}}</td>\
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
                    if(j%4==0){
                         submajor.trs.push(Math.floor(j/4));
                    }
               }
               var dataBase={
                    showMajor1:false,
                    showMajor2:false,
                    major:major,
                    submajor:submajor,
                    selMajor:"",
                    selSubMajor:""
               };
               return dataBase;
          },
          methods:{
               pop:function(type){
                    if(type=="major"){
                         this.showMajor2=false;
                         this.showMajor1 = true;
                    }else if(type=="submajor"){
                         this.showMajor1=false;
                         this.showMajor2 = true;
                    }
               },
               clickMajor:function(obj){
                    this.selMajor = $(obj).html();
                    this.showMajor1=false;
                    this.showMajor2 = false;
               },
               clickSubMajor:function(obj){
                    this.selSubMajor = $(obj).html();
                    this.showMajor1=false;
                    this.showMajor2 = false;
               },
               closePop:function(){
                    this.showMajor1=false;
                    this.showMajor2 = false;
               }
          },
          mounted:function(){
               $(".pop-major-1").each(function(){
                    $(this).css({
                         "left":0,
                         "top":$(this).siblings(".major-input-1").height()-1+"px"
                    })
               })
               $(".pop-major-2").each(function(){
                    $(this).css({
                         "left":$(this).siblings(".major-input-2").position().left+"px",
                         "top":$(this).siblings(".major-input-2").height()-1+"px"
                    })
               });
          },
          watch:{
               "selMajor":function(curval){
                    for(var i=0; i<this.majordata.length;i++){
                         if(this.majordata[i].major==curval){
                              this.submajor.dataArray=this.majordata[i].submajor;
                              this.selSubMajor=this.submajor.dataArray[0];
                              break;
                         }
                    }
               },
               "showMajor1":function(curval){
                    if(curval){
                         $(".pop-major-1").each(function(){
                              $(this).css({
                                   "left":$(this).siblings(".major-input-1").position().left+"px",
                                   "top":$(this).siblings(".major-input-1").height()-1+"px"
                              })
                         })
                         $(".pop-major-2").each(function(){
                              $(this).css({
                                   "left":$(this).siblings(".major-input-2").position().left+"px",
                                   "top":$(this).siblings(".major-input-2").height()-1+"px"
                              })
                         });
                    }
               },
               "showMajor2":function(curval){
                    if(curval){
                         $(".pop-major-1").each(function(){
                              $(this).css({
                                   "left":$(this).siblings(".major-input-1").position().left+"px",
                                   "top":$(this).siblings(".major-input-1").height()-1+"px"
                              })
                         })
                         $(".pop-major-2").each(function(){
                              $(this).css({
                                   "left":$(this).siblings(".major-input-2").position().left+"px",
                                   "top":$(this).siblings(".major-input-2").height()-1+"px"
                              })
                         });
                    }
               }
          }
     })

})();
