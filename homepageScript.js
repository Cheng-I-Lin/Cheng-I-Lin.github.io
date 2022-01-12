var time=20;
const slideLeft=document.getElementById("slideLeft");
const slideRight=document.getElementById("slideRight");
const introSlide=document.getElementById("intro");
const mapSlide=document.getElementById("mapGame");
const airSlide=document.getElementById("airQuiz");
const continueSlide=document.getElementById("toBeContinue");
var slideNum=0;
slideLeft.addEventListener("click",function(){
    slideNum--;
});
slideRight.addEventListener("click",function(){
    slideNum++;
});
//Changes the inventory slide color when hovering(1/12)
document.getElementById("slideLeft").addEventListener("mouseleave", function(){
    document.getElementById("slideLeft").style.borderRightColor="blanchedalmond";
});
document.getElementById("slideLeft").addEventListener("mouseover", function(){
    document.getElementById("slideLeft").style.borderRightColor="rgb(241, 183, 94)";
});
document.getElementById("slideRight").addEventListener("mouseleave", function(){
    document.getElementById("slideRight").style.borderLeftColor="blanchedalmond";
});
document.getElementById("slideRight").addEventListener("mouseover", function(){
    document.getElementById("slideRight").style.borderLeftColor="rgb(241, 183, 94)";
});
setInterval(function(){
    if(slideNum==0){
        slideLeft.style.display="none";
    } else{
        slideLeft.style.display="block";
    }
    if(slideNum==3){
        slideRight.style.display="none";
    } else{
        slideRight.style.display="block";
    }
    switch(slideNum){
        case 0:
            introSlide.style.left="0%";
            mapSlide.style.left="100%";
            airSlide.style.left="200%";
            continueSlide.style.left="300%";
            break;
        case 1:
            introSlide.style.left="-100%";
            mapSlide.style.left="0%";
            airSlide.style.left="100%";
            continueSlide.style.left="200%";
            break;
        case 2:
            introSlide.style.left="-200%";
            mapSlide.style.left="-100%";
            airSlide.style.left="0%";
            continueSlide.style.left="100%";
            break;
        case 3:
            introSlide.style.left="-300%";
            mapSlide.style.left="-200%";
            airSlide.style.left="-100%";
            continueSlide.style.left="0%";
            break;
    }
},time);