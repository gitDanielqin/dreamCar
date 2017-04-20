// 克隆对象函数
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

// 计算日期差值
function diffDay(dateObj){
     var nowDate = new Date();
     aDate = dateObj.split("-");
     var oldDate = new Date(aDate[1]+"-"+aDate[2]+"-"+aDate[0]);
     var iDays = parseInt(Math.abs(nowDate-oldDate)/1000/60/60/24);
     return iDays;
}

//取得屏幕高度
function getViewport(){
     if(document.compatMode == 'BackCompat'){
          return {
               width:document.body.clientWidth,
               height:document.body.clientHeight
          };
     }else {
          return {
               width: document.documentElement.clientWidth,
               height:document.documentElement.clientHeight
          }
     }
}

var eventUtils = {
     urlExtrac:function(url){
          var paraStr = url.search.substr(1);
          var paraArray = paraStr.split("&");
          var paraObj={};
          for(var i=0; i<paraArray.length; i++){
               var pars = paraArray[i].split("=");
               paraObj[pars[0]]=pars[1];
          };
          return paraObj;
     }
}
// 数组对象功能扩充
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
