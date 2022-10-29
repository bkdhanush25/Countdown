console.log('JS Loaded');

var countdownElement=document.getElementById('countdown');
var bgImageElement=document.getElementById('bg-image');
var n=15;
var initailCountdownVal=countdownElement.innerHTML;
setInterval(function() {
    initailCountdownVal=initailCountdownVal>0? initailCountdownVal-1:0;
    countdownElement.innerHTML=initailCountdownVal;
    var backImgPath=initailCountdownVal%2===0?'https://themepack.me/i/c/749x467/media/g/739/3d-theme-qj17.jpg':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpkNz3oQfYIHfi3fzRobj3Oo_kCCA-r1Ygu2OcsLhONrSk4uXoGbBOPs1-EdO2uVdDf1E&usqp=CAU';
    bgImageElement.src=backImgPath;
    countdownElement.style.fontSize=initailCountdownVal*100+"px";
    bgImageElement.style.height=n*100+"px";
    n-=1;
},1000);