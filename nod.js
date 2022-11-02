var a=0;
var time=setInterval(function(){
    a+=2;
    console.log(a +"seconds later");
    if(a>10){
        clearInterval(time);
    }
},2000);