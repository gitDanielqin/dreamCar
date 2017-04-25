

var appCont = new Vue({
     el:"#app-content",
     data:{
          show:{
               step1:false,
               step2:true,
               mobilehint:true,
               validhint:false
          },
          account:{
               mobile:"18868965654",
          },
          userInfo:{
               account:"",
               picCode:"",
               mobile:"",
               validCode:""
          }
     }
})
