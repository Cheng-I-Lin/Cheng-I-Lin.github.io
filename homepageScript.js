var time=20;
const slideLeft=document.getElementById("slideLeft");
const slideRight=document.getElementById("slideRight");
//Creates another arrow to be the border of slide arrows
const leftBorder=document.getElementById("leftBorder");
const rightBorder=document.getElementById("rightBorder");
const introSlide=document.getElementById("intro");
const mapSlide=document.getElementById("mapGame");
const airSlide=document.getElementById("airQuiz");
const continueSlide=document.getElementById("toBeContinue");
var slideNum=0;
slideLeft.addEventListener("click",function(){
    if(slideNum!=0){
        slideNum--;
    }
    //hideLArrow();
});
slideRight.addEventListener("click",function(){
    if(slideNum!=3){
        slideNum++;
    }
    //hideRArrow();
});
//Changes the inventory slide color when hovering(1/12)
slideLeft.addEventListener("mouseleave", function(){
    slideLeft.style.borderRightColor="rgb(253, 222, 175)";
});
slideLeft.addEventListener("mouseover", function(){
    slideLeft.style.borderRightColor="rgb(241, 183, 94)";
});
slideRight.addEventListener("mouseleave", function(){
    slideRight.style.borderLeftColor="rgb(253, 222, 175)";
});
slideRight.addEventListener("mouseover", function(){
    slideRight.style.borderLeftColor="rgb(241, 183, 94)";
});
var showCircleL=false;
var showCircleR=false;
document.addEventListener("mousemove",function(mouse){
    //Show slide arrows only when mouse is approaching them(width of arrow is 60, left=77 and 1399, 76 and 1383 with scrollbar)
    //change left to 75 to make it better
    if(mouse.x<=135&&slideNum!=0){
        slideLeft.style.display="block";
        leftBorder.style.display="block";
        showCircleL=true;
    } else{
        slideLeft.style.display="none";
        leftBorder.style.display="none";
        showCircleL=false;
    }
    if(mouse.x>=1383&&slideNum!=3){
        slideRight.style.display="block";
        rightBorder.style.display="block";
        showCircleR=true;
    } else{
        slideRight.style.display="none";
        rightBorder.style.display="none";
        showCircleR=false;
    }
    document.getElementById("hi").innerHTML=1;
});
/*Can't hide because mouse move and show arrows, think something else later
function hideLArrow(){
    leftBorder.style.display="none";
    slideLeft.style.display="none";
}
function hideRArrow(){
    rightBorder.style.display="none";
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
            continueSlide.style.left="300%";
            img[slideNum].src="https://assets.skyfilabs.com/images/blog/be-projects-for-cse.webp";
            break;
        case 1:
            introSlide.style.left="-100%";
            mapSlide.style.left="0%";
            airSlide.style.left="100%";
            continueSlide.style.left="200%";
            img[slideNum].src="USH_Map-removebg-preview.png";
            break;
        case 2:
            introSlide.style.left="-200%";
            mapSlide.style.left="-100%";
            airSlide.style.left="0%";
            continueSlide.style.left="100%";
            img[slideNum].src="airPollutionGamePic.png";
            break;
        case 3:
            introSlide.style.left="-300%";
            mapSlide.style.left="-200%";
            airSlide.style.left="-100%";
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