(function(){
     var templpos =  '<div class="pos-pop-box W770">\
          <h3 class="LH-H36 bg-gray-e6 fSize14 paLeft30">选择职能<i class="pic-wrapper pos-closer fr maR30"><i class="pic-icon icon-close"></i></i></h3>\
          <div class="H330">\
               <div class="LH40 paLeft30">\
                    <label class="color-gray6">最多可以选择3项</label>\
                    <ul class="lis-inline selectItems disInline v-mid maL15">\
                         <li v-for="item in selectedItems">{{item}}<img src="images/icon-close-1.png" @click.stop="delItem(item)"/></li>\
                    </ul>\
               </div>\
               <ul class="pos-navs lis-inline LH28 paLeft30 maT8">\
                    <li class="on" @click.stop="clickNav(1)">全部职能<span class="pic-icon icon-arrow-down"></span><i class="blank-bot"></i></li>\
                    <li v-show="posCont.cont2||posCont.cont3" @click.stop="clickNav(2)">{{selpos.pos1}}<span class="pic-icon icon-arrow-down"></span><i class="blank-bot"></i></li>\
                    <li v-show="posCont.cont3">{{selpos.pos2}}<span class="pic-icon icon-arrow-down"></span><i class="blank-bot"></i></li>\
               </ul>\
               <ul class="pos-nav-cont lis-inline" v-show="posCont.cont1">\
                    <li v-for="item in posArray1"><span @click.stop="clickPos(1,item)">{{item}}</span></li>\
               </ul>\
               <ul class="pos-nav-cont lis-inline" v-show="posCont.cont2">\
                    <li v-for="item in posArray2"><span @click.stop="clickPos(2,item)">{{item}}</span></li>\
               </ul>\
               <ul class="pos-nav-cont lis-inline" v-show="posCont.cont3">\
                    <li v-for="item in posArray3"><span @click.stop="clickPos(3,item)">{{item}}</span></li>\
               </ul>\
          </div>\
          <div class="LH-H58 pos-pop-bot bg-gray-e6 t-center">\
               <button @click.stop="confirm">确定</button><button @click.stop="cancel">取消</button>\
          </div>\
     </div>';

     Vue.component("pop-position",{
          template:templpos,
          props:["posdata"],
          data:function(){
               var posArray1=[];
               for(var i=0; i<this.posdata.length;i++){
                    posArray1.push(this.posdata[i].name);
               };
               var database = {
                    posCont:{
                         cont1:true,
                         cont2:false,
                         cont3:false
                    },
                    selpos:{
                         pos1:"",
                         pos2:"",
                         pos3:""
                    },
                    posArray1:posArray1,
                    posArray2:[],
                    posArray3:[],
                    subArray:[],
                    selectedItems:[]
               };
               return database;
          },
          methods:{
               clickPos:function(level,item){
                    if(level==1){
                         if(item=="不限"){
                              if(this.selectedItems.length<3){
                                   this.selectedItems=["全部职能"];
                              }
                              return;
                         }
                         for(var i=0; i<this.posdata.length;i++){
                              if(this.posdata[i].name==item){
                                   this.subArray = this.posdata[i].subpos;
                                   break;
                              }
                         };
                         this.posArray2=[];
                         for(var j=0; j<this.subArray.length;j++){
                              this.posArray2.push(this.subArray[j].name);
                         };
                         this.selpos.pos1=item;
                         this.posCont.cont1=false;
                         this.posCont.cont2=true;
                         $(".pos-navs .on").removeClass("on");
                         $(".pos-navs li:nth-child(2)").addClass("on");
                    }else if(level==2){
                         if(item=="不限"){
                              if(this.selectedItems.length<3){
                                   if(this.selectedItems.indexOf(this.selpos.pos1)<0){
                                        this.selectedItems.push(this.selpos.pos1);
                                   }
                              }
                              return;
                         }
                         for(var i=0; i<this.subArray.length;i++){
                              if(this.subArray[i].name==item){
                                   this.posArray3 = this.subArray[i].subpos;
                                   break;
                              }
                         }
                         $(".pos-navs .on").removeClass("on");
                         $(".pos-navs li:nth-child(3)").addClass("on");
                         this.selpos.pos2=item;
                         this.posCont.cont2=false;
                         this.posCont.cont3=true;
                    }else if(level==3){
                         if(this.selectedItems.length<3){
                              if(item=="不限"){
                                   if(this.selectedItems.indexOf(this.selpos.pos2)<0){
                                        this.selectedItems.push(this.selpos.pos2);
                                   }
                              }else{
                                   if(this.selectedItems.indexOf(item)<0){
                                        this.selectedItems.push(item);
                                   }
                              }
                         }

                    }
               },
               delItem:function(item){
                    this.selectedItems.remove(item);
               },
               clickNav:function(num){
                    if(num==1){
                         $(".pos-navs .on").removeClass("on");
                         $(".pos-navs li:nth-child(1)").addClass("on");
                         this.posCont.cont2=false;
                         this.posCont.cont3=false;
                         this.posCont.cont1=true;
                    }else if(num==2){
                         $(".pos-navs .on").removeClass("on");
                         $(".pos-navs li:nth-child(2)").addClass("on");
                         this.posCont.cont1=false;
                         this.posCont.cont3=false;
                         this.posCont.cont2=true;
                    }
               },
               confirm:function(){
                    this.$emit("confirm",this.selectedItems);
               },
               cancel:function(){
                    this.$emit("cancel");
               }
          }
     })
})()
