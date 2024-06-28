setInterval(function(){
    let dateNow = new Date();

let hour =dateNow.getHours();
if (hour>12){hour=`${hour-12}`}
if (hour<10){hour=`0${hour}`}
let minute =dateNow.getMinutes();
if (minute<10){minute=`0${minute}`}
let second =dateNow.getSeconds();
if (second<10){second=`0${second}`}
document.querySelector(".clock").innerHTML=`${hour} : ${minute} : ${second}`

},1000)
$('.services-nav').click(  function () {$(".services-menu").toggle(1000);  
})
document.querySelector('.services-menu').classList.remove("click")

$('.pags-nav').click(  function () {$(".pags-menu").toggle(1000);   
})

window.onscroll=function () {
   if(window.scrollY>=800){
    document.querySelector(".btn-up").style.display = "block";
}else{
    document.querySelector(".btn-up").style.display = "none";  
}
}
document.querySelector(".btn-up").onclick =function(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}

// dark mood
document.querySelector('#dark-mood').onclick = function(){
    document.querySelector('body').classList.add('body')
}
document.querySelector('#light-mood').onclick = function(){
    document.querySelector('body').classList.remove('body')
}

// menu open
document.querySelector(".menu").onclick = function () {
 document.querySelector(".nav-middle ul").classList.toggle("open")  
}