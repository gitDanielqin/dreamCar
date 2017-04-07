(function(){
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
})()
