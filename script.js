/* Declare variables below to save the different sections (divs) of your story*/

let storypart2jungle= document.querySelector(".option-one-screen");
let storypart2beach= document.querySelector(".option-two-screen");
let storypart3jungle = document.querySelector(".option-one-end");
let storypart3beach =document.querySelector(".option-two-end");

 let TheJungleMessage = document.querySelector(".message");
 let Thebeachquestions = document.querySelector(".question");
let Button1= document.querySelector(".button1");
let Screen1 =  document.querySelector(".Jungle");
let Button2 =  document.querySelector(".button2");
let Screen2 =  document.querySelector(".beach");




Button1.onclick=function(){
Screen1.style.display="block";
};

Button2.onclick=function(){
Screen2.style.display="block";
};

Screen1.onclick=function(){
storypart3jungle.style.display="block";
};







//When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!

//

