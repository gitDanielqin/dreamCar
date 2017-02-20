
var tempDrop='<div :class="classStyle"><input class="text" :placeholder="placeholder" :value="value"><ul>'+
        '<li v-for="option in options" @click="selectItem(option)">{{option}}</li>'+
   '</ul></div>'
Vue.component("dropdown",{
     template:tempDrop,
     props:["placeholder","options","value","classes"],
     data:function(){
          return {
            classStyle: this.classes+" selectee"
          }
     },
     methods:{
          selectItem:function(item){
               this.$emit('input', item)
          }
     }
});

function cloneObj(obj){
    var o;
    switch(typeof obj){
    case 'undefined': break;
    case 'string'   : o = obj + '';break;
    case 'number'   : o = obj - 0;break;
    case 'boolean'  : o = obj;break;
    case 'object'   :
        if(obj === null){
            o = null;
        }else{
            if(obj instanceof Array){
                o = [];
                for(var i = 0, len = obj.length; i < len; i++){
                    o.push(cloneObj(obj[i]));
                }
            }else{
                o = {};
                for(var k in obj){
                    o[k] = cloneObj(obj[k]);
                }
            }
        }
        break;
    default:
        o = obj;break;
    }
    return o;
};

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
