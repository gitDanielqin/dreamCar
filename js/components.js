var tempDrop = '<div :class="classStyle" @click.stop="clickEv($event.target)"><input class="text" :placeholder="placeholder" :value="value"><ul>' +
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
           $(obj).parent().siblings("input").val($(this).text());
           $(obj).parent().hide();
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
    }
});

var templAddr ='<div>\
     <dropdown placeholder="省份" :options="province" v-model="selProvince"></dropdown>\
     <dropdown placeholder="城市" :options="city" v-model="selCity"></dropdown>\
     <dropdown placeholder="区/县" :options="district" v-model="selDistrict"></dropdown>\
</div>';
Vue.component("addr-select",{
     template: templAddr,
     props:["addrdata"],
     data:function(){
          var province=[];
          var city=[];
          var district=[];
          for(var i=0; i<this.addrdata.length; i++){
               province.push(this.addrdata[i].name);
          }
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
               selCityArray:[]
          };
          return dataBase;
     },
     watch:{
          "selProvince":function(curval){
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
               this.selCity = city[0];
               this.district= district;
               this.selDistrict= district[0];
               // selectEventBind();
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
               this.selDistrict=district[0];
               // selectEventBind();
          }
     }
});
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
function cloneObj(obj) {
    var o;
    switch (typeof obj) {
        case 'undefined':
            break;
        case 'string':
            o = obj + '';
            break;
        case 'number':
            o = obj - 0;
            break;
        case 'boolean':
            o = obj;
            break;
        case 'object':
            if (obj === null) {
                o = null;
            } else {
                if (obj instanceof Array) {
                    o = [];
                    for (var i = 0, len = obj.length; i < len; i++) {
                        o.push(cloneObj(obj[i]));
                    }
                } else {
                    o = {};
                    for (var k in obj) {
                        o[k] = cloneObj(obj[k]);
                    }
                }
            }
            break;
        default:
            o = obj;
            break;
    }
    return o;
};
function diffDay(dateObj){
     var nowDate = new Date();
     aDate = dateObj.split("-");
     var oldDate = new Date(aDate[1]+"-"+aDate[2]+"-"+aDate[0]);
     var iDays = parseInt(Math.abs(nowDate-oldDate)/1000/60/60/24);
     return iDays;
}
Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};
