(function(){
     var tempDrop = '<div :class="classStyle" @click.stop="clickEv($event.target)" style="display:inline-block"><input type="text" :placeholder="placeholder" :value="value" disabled><ul>' +
         '<li v-for="option in options" @click="selectItem(option,$event.target)" @mouseover="overItem($event.target)" @mouseout="outItem($event.target)">{{option}}</li>' +
         '</ul></div>'
     Vue.component("dropdown", {
         template: tempDrop,
         props: ["placeholder", "options", "value", "classes"],
         data: function() {
             var classStyle="";
             if(this.classes){
                  classStyle=this.classes+" selectee";
             }else{
                  classStyle="selectee";
             };
             return {
                  showOps:true,
                  classStyle:classStyle
             }
         },
         methods: {
            selectItem: function(item,obj) {
                this.$emit('input', item);
                $(obj).siblings(".selected").removeClass("selected");
                $(obj).addClass("selected");
                $(obj).parent("ul").siblings("input").val($(obj).text());
                $(obj).parent("ul").hide();
                this.$emit('callback');
                return false;
            },
            overItem: function(obj){
                 $(obj).addClass("over");
            },
            outItem: function(obj){
                 $(obj).removeClass("over");
            },
            clickEv: function(obj){
               $(".selectee ul").hide();
               $(obj).siblings("ul").show();
                return false;
            }
       },
       mounted:function(){
            $("body").click(function(){
                 $(".selectee ul").hide();
            });
       }
     });

     //岗位选择
     var templPos = '<div class="sel-position" style="display:inline-block;">\
          <dropdown placeholder="一级岗位" :options="posArray1" v-model="selpos1" class="sel-pos-1"></dropdown>\
          <dropdown placeholder="二级岗位" :options="posArray2" v-model="selpos2" class="sel-pos-2"></dropdown>\
          <dropdown placeholder="三级岗位" :options="posArray3" v-model="selpos3" class="sel-pos-3"></dropdown>\
     </div>';

     Vue.component("pos-select",{
          template: templPos,
          props:["posdata","initpos"],
          data:function(){
               var posArray1=[];
               var posArray2=[];
               var posArray3=[];
               var selPos2Array=[];
               for(var i=0; i<this.posdata.length; i++){
                    posArray1.push(this.posdata[i].name);
               }
               for(var j=0;j<this.posdata[0].subpos.length;j++){
                    posArray2.push(this.posdata[0].subpos[j].name);
               };
               selPos2Array = this.posdata[0].subpos;
               posArray3 = this.posdata[0].subpos[0].subpos;
               var dataBase={
                    posArray1:posArray1,
                    posArray2:posArray2,
                    posArray3:posArray3,
                    selpos1:"",
                    selpos2:"",
                    selpos3:"",
                    selPos2Array:selPos2Array,
                    initFlag:true
               };
               return dataBase;
          },
          watch:{
               "selpos1":function(curval){
                    var posArray2=[];
                    var posArray3=[];
                    for(var i=0; i<this.posdata.length; i++){
                         if(this.posdata[i].name==curval){
                              this.selPos2Array = this.posdata[i].subpos;
                              for(var j=0; j<this.posdata[i].subpos.length; j++){
                                   posArray2.push(this.posdata[i].subpos[j].name);
                              };
                              posArray3= this.posdata[i].subpos[0].subpos;
                              break;
                         }
                    }
                    this.posArray2= posArray2;
                    if(this.initpos&&this.initpos.pos_2&&this.initFlag){
                      this.selpos2 = this.initpos.pos_2;
                      if(!this.initpos.pos_3){
                        this.initFlag=false;
                      }
                    }else{
                      this.selpos2 = posArray2[0];
                    }
               },
               "selpos2":function(curval){
                    var posArray3=[];
                    for(var i=0; i<this.selPos2Array.length; i++){
                         if(this.selPos2Array[i].name==curval){
                              posArray3 = this.selPos2Array[i].subpos;
                              break;
                         }
                    }
                    this.posArray3=posArray3;
                    if(this.initpos&&this.initpos.pos_3&&this.initFlag){
                      this.selpos3=this.initpos.pos_3;
                      this.initFlag=false;
                    }else{
                      this.selpos3=posArray3[0];
                    }

               }
          },
          mounted:function(){
               if(this.initpos){
                    this.selpos1 = this.initpos.pos_1
               }
          }
     });

     // 地址选择
     var templAddr ='<div>\
          <dropdown placeholder="省份" :options="province" v-model="selProvince" class="sel-province"></dropdown>\
          <dropdown placeholder="城市" :options="city" v-model="selCity" class="sel-city"></dropdown>\
          <dropdown placeholder="区/县" :options="district" v-model="selDistrict" class="sel-district"></dropdown>\
     </div>';
     Vue.component("addr-select",{
          template: templAddr,
          props:["addrdata","initaddress"],
          data:function(){
               var province=[];
               var city=[];
               var district=[];
               var selCityArray=[];
               for(var i=0; i<this.addrdata.length; i++){
                    province.push(this.addrdata[i].name);
               }
               selCityArray = this.addrdata[0].citys;
               for(var j=0;j<this.addrdata[0].citys.length;j++){
                    city.push(this.addrdata[0].citys[j].city);
               };
               district = this.addrdata[0].citys[0].conts;
               var dataBase={
                    province:province,
                    city:city,
                    district:district,
                    selProvince:"",
                    selCity:"",
                    selDistrict:"",
                    selCityArray:selCityArray,
                    initFlag:true
               };
               return dataBase;
          },
          watch:{
               "selProvince":function(curval){
                //  console.log(1);
                    var city=[];
                    var district=[];
                    for(var i=0; i<this.addrdata.length; i++){
                         if(this.addrdata[i].name==curval){
                              this.selCityArray = this.addrdata[i].citys;
                              for(var j=0; j<this.addrdata[i].citys.length; j++){
                                   city.push(this.addrdata[i].citys[j].city);
                              };
                              district= this.addrdata[i].citys[0].conts;
                              break;
                         }
                    }
                    this.city= city;
                    if(this.initaddress&&this.initaddress.city&&this.initFlag){
                      this.selCity = this.initaddress.city;
                      if(!this.initaddress.district){
                        this.initFlag=false;
                      }
                    }else{
                      this.selCity = city[0];
                    }
               },
               "selCity":function(curval){
                    var district=[];
                    for(var i=0; i<this.selCityArray.length; i++){
                         if(this.selCityArray[i].city==curval){
                              district = this.selCityArray[i].conts;
                              break;
                         }
                    }
                    this.district=district;
                    if(this.initaddress&&this.initaddress.district&&this.initFlag){
                      this.selDistrict=this.initaddress.district;
                      this.initFlag=false;
                    }else{
                      this.selDistrict=district[0];
                    }

                    // selectEventBind();
               },
               "initaddress":function(curval){
                  if(curval){
                      this.selProvince = curval.province;
                  }
               }
          },
          mounted:function(){
               if(this.initaddress){
                     this.selProvince = this.initaddress.province;
               };
          }
     });
     //行业选择
     var templArea='<div style="display:inline-block" class="select-area">\
          <dropdown placeholder="一级行业" :options="workarea" v-model="selArea" class="input-area-1"></dropdown>\
          <dropdown placeholder="二级行业" :options="subarea" v-model="selsubArea" class="input-area-2"></dropdown>\
     </div>';
     Vue.component("area-select",{
          template:templArea,
          props:["areadata"],
          data:function(){
               var workarea=[];
               var subarea=[];
               for(var i=0; i<this.areadata.length;i++){
                    workarea.push(this.areadata[i].title);
               };
               subarea= this.areadata[0].subareas;
               var dataBase={
                    workarea:workarea,
                    subarea:subarea,
                    selArea:"",
                    selsubArea:""
               };
               return dataBase;
          },
          watch:{
               "selArea":function(curval){
                    for(var i=0; i<this.areadata.length;i++){
                         if(this.areadata[i].title==curval){
                              this.subarea=this.areadata[i].subareas;
                              this.selsubArea=this.subarea[0];
                              break;
                         }
                    }
               }
          }
     })
     // 学科选择
     var templMajor='<div>\
          <dropdown placeholder="一级学科" :options="major" v-model="selMajor"></dropdown>\
          <dropdown placeholder="二级学科" :options="submajor" v-model="selsubMajor"></dropdown>\
     </div>';
     Vue.component("major-select",{
          template:templMajor,
          props:["majordata"],
          data:function(){
               var major=[];
               var submajor=[];
               for(var i=0; i<this.majordata.length;i++){
                    major.push(this.majordata[i].major);
               };
               submajor= this.majordata[0].submajor;
               var dataBase={
                    major:major,
                    submajor:submajor,
                    selMajor:"",
                    selsubMajor:""
               };
               return dataBase;
          },
          watch:{
               "selMajor":function(curval){
                    for(var i=0; i<this.majordata.length;i++){
                         if(this.majordata[i].major==curval){
                              this.submajor=this.majordata[i].submajor;
                              this.selsubMajor=this.submajor[0];
                              break;
                         }
                    }
               }
          }
     })
     // 选择下拉框定位
     function selectInitPos(){
         $(".selectee ul").each(function(){
               var sibInput=$(this).siblings("input");
               var parentObj = $(this).parent(".selectee");
             // console.log(sibInput.height());
             $(this).width(sibInput.outerWidth()-2); //2 为边框
             $(this).css({
                 left:sibInput.offset().left-parentObj.offset().left+"px",
                 top:sibInput.height()+"px"
             })
         });
         $("body").click(function(){
              $(".selectee ul").hide();
         });
     }
     function selectInitInput(){
          $(".selectee input").each(function(){
               $(this).width($(this).width()-20);
               $(this).css("padding-right",20+"px");
             var bgPos=$(this).width()+10+"px center";
             $(this).attr("disabled","true").css("background-position",bgPos);
         });
     }
     window.selectInitInput = selectInitInput;
     window.selectInitPos = selectInitPos;
})()
