
(function(){
     var date = {
          year:[],
          month:[],
          day:[]
     }
     var year = new Date().getFullYear();
     year = parseInt(year);
     for(var i=1950; i<=year;i++){
          date.year.push(i)
     };
     for(var j=1;j<=12;j++){
          if(j<10){
               j = "0"+j;
          }
          date.month.push(j);
     };
     for(var k=1;k<=31;k++){
          if(k<10){
               k = "0"+k;
          }
          date.day.push(k);
     };
     window.date = date;
})()
