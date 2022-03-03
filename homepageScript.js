var scaleX=(window.innerHeight/722)*100;
var scale=(window.outerHeight/824);
var introImg=document.getElementById("introImg");
introImg.style.left=introImg.offsetLeft*scale+"px";
introImg.style.top=introImg.offsetTop*scale+"px";
const text=document.getElementsByClassName("textContainer");
for(t of text){
    t.style.fontSize=scale+"em";
    //document.getElementById("hi").innerHTML=window.innerHeight;
}
const nav=document.getElementById("topNavigaion");
nav.style.fontSize=scale*1.5+"em";
const navLink=document.getElementsByClassName("navigationLinks");
for(l of navLink){
    l.style.padding=(16*scale)+"px "+(25*scale)+"px";
}
document.getElementById("navPosition").style.padding=(14*scale)+"px "+(35*scale)+"px";
document.getElementById("overlayText").style.fontSize=scale*2+"em";

document.getElementById("aboutMeText").style.fontSize=scaleX+"%";
document.getElementById("footer").style.fontSize=scaleX+"%";

//Makes it fix/absolute position
var lock=document.getElementById("lockIcon");
document.getElementById("navPosition").addEventListener("click",function(){
    if(nav.style.position=="absolute"){
        //Changes the icon based on position
        lock.className="fa fa-unlock";
        nav.style.position="fixed";
    } else{
        lock.className="fa fa-lock";
        nav.style.position="absolute";
    }
});
/*window.addEventListener("resize",function(){
    for(div of alldiv){
        div.style.width=window.innerWidth;
        div.style.height=window.innerHeight;
        div.style.left=window.pageXOffset+"px";
        div.style.top=window.oofse+"px";
    }
},false);*/
/*
const sections=document.getElementsByClassName("allDiv");
sections[1].style.bottom=sections[0].offsetTop+"px";
for(let i=2;i<sections.length;i++){
    if(i==2){
        sections[i].style.top=sections[0].offsetHeight+sections[0].offsetTop+"px";
    } else{
        sections[i].style.top=sections[i-1].offsetHeight+sections[i-1].offsetTop+"px";
    }
}*/
var time=20;
const slideLeft=document.getElementById("slideLeft");
const slideRight=document.getElementById("slideRight");
const introSlide=document.getElementById("intro");
const mapSlide=document.getElementById("mapGame");
const airSlide=document.getElementById("airQuiz");
const bombSlide=document.getElementById("bombGame");
const multitaskSlide=document.getElementById("multitask");
const progressSlide=document.getElementById("progression");
const continueSlide=document.getElementById("toBeContinue");
var slideNum=0;
slideLeft.addEventListener("click",function(){
    if(slideNum!=0){
        slideNum--;
    }
    //hideLArrow();
});
slideRight.addEventListener("click",function(){
    if(slideNum!=6){
        slideNum++;
    }
    //hideRArrow();
});
//Changes the inventory slide color when hovering(1/12)
slideLeft.addEventListener("mouseleave", function(){
    slideLeft.style.borderRightColor="black";
});
slideLeft.addEventListener("mouseover", function(){
    slideLeft.style.borderRightColor="rgb(6, 54, 212)";
});
slideRight.addEventListener("mouseleave", function(){
    slideRight.style.borderLeftColor="black";
});
slideRight.addEventListener("mouseover", function(){
    slideRight.style.borderLeftColor="rgb(6, 54, 212)";
});
var showCircleL=false;
var showCircleR=false;
document.addEventListener("mousemove",function(mouse){
    //Show slide arrows only when mouse is approaching them(width of arrow is 60, left=77 and 1399, 76 and 1383 with scrollbar)
    //change left to 75 to make it better
    if(mouse.x<=135*scale&&slideNum!=0){
        slideLeft.style.display="block";
        showCircleL=true;
    } else{
        slideLeft.style.display="none";
        showCircleL=false;
    }
    if(mouse.x>=1383*scale+window.innerWidth-document.documentElement.clientWidth&&slideNum!=6){
        slideRight.style.display="block";
        showCircleR=true;
    } else{
        slideRight.style.display="none";
        showCircleR=false;
    }
    //document.getElementById("hi").innerHTML=mouse.x;
});
/*Can't hide because mouse move and show arrows, think something else later
function hideLArrow(){
    slideLeft.style.display="none";
}
function hideRArrow(){
    slideRight.style.display="none";
}*/
setInterval(function(){
    let x=document.getElementsByClassName("slideCircle");
    //Shows or hides all slide circles
    for(let i=0; i<x.length; i++){
        if(showCircleL||showCircleR){
            x[i].style.opacity="1";
        } else if(!showCircleL&&!showCircleR){
            x[i].style.opacity="0";
        }
        //Change colors based on the slide number
        if(i==slideNum){
            x[i].style.backgroundColor="rgb(49, 135, 233)";
        } else{
            x[i].style.backgroundColor="rgb(253, 222, 175)";
        }
    }
    //Changes the picture on each slide
    let img=document.getElementsByClassName("slideImg");
    switch(slideNum){
        case 0:
            introSlide.style.left="0%";
            mapSlide.style.left="100%";
            airSlide.style.left="200%";
            bombSlide.style.left="300%";
            multitaskSlide.style.left="400%";
            progressSlide.style.left="500%";
            continueSlide.style.left="600%";
            img[slideNum].src="https://assets.skyfilabs.com/images/blog/be-projects-for-cse.webp";
            break;
        case 1:
            introSlide.style.left="-100%";
            mapSlide.style.left="0%";
            airSlide.style.left="100%";
            bombSlide.style.left="200%";
            multitaskSlide.style.left="300%";
            progressSlide.style.left="400%";
            continueSlide.style.left="500%";
            img[slideNum].src="USH_Map-removebg-preview.png";
            break;
        case 2:
            introSlide.style.left="-200%";
            mapSlide.style.left="-100%";
            airSlide.style.left="0%";
            bombSlide.style.left="100%";
            multitaskSlide.style.left="200%";
            progressSlide.style.left="300%";
            continueSlide.style.left="400%";
            img[slideNum].src="airPollutionGamePic.png";
            break;
        case 3:
            introSlide.style.left="-300%";
            mapSlide.style.left="-200%";
            airSlide.style.left="-100%";
            bombSlide.style.left="0%";
            multitaskSlide.style.left="100%";
            progressSlide.style.left="200%";
            continueSlide.style.left="300%";
            img[slideNum].src="bombGamePic.png";
            break;
        case 4:
            introSlide.style.left="-400%";
            mapSlide.style.left="-300%";
            airSlide.style.left="-200%";
            bombSlide.style.left="-100%";
            multitaskSlide.style.left="0%";
            progressSlide.style.left="100%";
            continueSlide.style.left="200%";
            img[slideNum].src="multitaskGamePic.png";
            break;
        case 5:
            introSlide.style.left="-500%";
            mapSlide.style.left="-400%";
            airSlide.style.left="-300%";
            bombSlide.style.left="-200%";
            multitaskSlide.style.left="-100%";
            progressSlide.style.left="0%";
            continueSlide.style.left="100%";
            img[slideNum].src="progressPic.png";
            break;
        case 6:
            introSlide.style.left="-600%";
            mapSlide.style.left="-500%";
            airSlide.style.left="-400%";
            bombSlide.style.left="-300%";
            multitaskSlide.style.left="-200%";
            progressSlide.style.left="-100%";
            continueSlide.style.left="0%";
            img[slideNum].src="upcomingProjects.png";
            break;
        default:
            break;
    }
    //Resize the image to make it fit
    let imgContainer=document.getElementsByClassName("imgContainer")[0];
    while(img[slideNum].offsetWidth>imgContainer.offsetWidth){
        img[slideNum].style.width=img[slideNum].offsetWidth/1.1+"px";
    }
    while(img[slideNum].offsetHeight>imgContainer.offsetHeight){
        img[slideNum].style.height=img[slideNum].offsetHeight/1.1+"px";
    }
    //Change the image to the center of the container
    img[slideNum].style.left=(imgContainer.offsetWidth-img[slideNum].offsetWidth)/2+"px";
    img[slideNum].style.top=(imgContainer.offsetHeight-img[slideNum].offsetHeight)/2+"px";
},time);