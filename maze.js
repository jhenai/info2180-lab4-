/* global $ */

window.onload= function(){
    var youlose= false;
    var wall1 = document.getElementById("boundary1");
    wall1.addEventListener("mouseover", function(){
         
     this.setAttribute("class","boundary youlose");});
     
    var walls = document.querySelectorAll(".boundary");
    for (var i = 0; i < walls.length; i++) {
        walls[i].onmouseover = overBoundary;}
        
    document.getElementById("end").addEventListener("mouseover", function(){
             if (youlose== false){
             alert("you win");}
        
    });
    
    document.getElementById("start").addEventListener("click", function(){
          for (var i = 0; i < walls.length; i++) {
              walls[i].setAttribute("class","boundary");
          }});
    
function overBoundary() {
    youlose= true;
    var boundaries = document.querySelectorAll(".boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].setAttribute("class","boundary youlose");
    }
       alert("you lose");

}
    
   

}
