(function(){
//set variables for Team 1; shots taken, goals, shoot
let shootButton1 = document.querySelector("#teamone-shoot");
//let incrementButton = document.querySelector("#increment");
let shotsCount1 = document.querySelector("#teamone-numshots");
let goals1 = document.querySelector("#teamone-numhits");
let shootButton2 = document.querySelector("#teamtwo-shoot");
//let incrementButton = document.querySelector("#increment");
let shotsCount2 = document.querySelector("#teamtwo-numshots");
let goals2 = document.querySelector("#teamtwo-numhits");
let reset = document.querySelector("#reset") ;
let resetCount = document.querySelector("#num-resets");

//click shoot1 button
shootButton1.addEventListener("click", function(){
  //console.log("button clicked");
  //console.log(shotsCount1.innerHTML);
  //console.log("shoot works");
shotsCount1.innerHTML = parseInt(shotsCount1.innerHTML) + 1;
//add a random number gen function to determine IF you should increment the goals:
if (Math.random() > .5) {

goals1.innerHTML = parseInt(goals1.innerHTML) + 1;
}

})

//click shoot2 button
shootButton2.addEventListener("click", function(){
  //console.log("button clicked");
  //console.log(shotsCount1.innerHTML);
  //console.log("shoot works");
  shotsCount2.innerHTML = parseInt(shotsCount2.innerHTML) + 1;
//add a random number gen function to determine IF you should increment the goals:
if (Math.random() > .5) {

goals2.innerHTML = parseInt(goals2.innerHTML) + 1;
}

})
//placeholder for Team2code:

reset.addEventListener("click", function(){
  //console.log("clicking works")
  //console.log(resetCount.innerHTML);
  //If reset is clicked, increment resetCount and zero out shots and goals:
  resetCount.innerHTML = parseInt(resetCount.innerHTML) + 1;
  shotsCount1.innerHTML = 0;
  shotsCount2.innerHTML = 0;
  goals1.innerHTML = 0;
  goals2.innerHTML = 0;
})

})()
