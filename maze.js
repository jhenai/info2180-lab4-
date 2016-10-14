/* global $ */

window.onload= function(){
   
     
 
    var wall1 = document.getElementById("boundary1");
     wall1.addEventListener("mouseover", function(){
     this.setAttribute("class","boundary youlose");});
     var walls = document.querySelectorAll(".boundary");
     changeColor();
     
    document.getElementById("start").addEventListener("mouseover", function(event){ 
         var youlose= false;
       // alert("hey");
    document.getElementById("end").addEventListener("mouseover", function(){
             if (youlose== false){
             document.getElementById("status").innerHTML = "You Win!";}
        
    });
    
    document.getElementById("start").addEventListener("click", function(){ // delete red
          for (var i = 0; i < walls.length; i++) {
              walls[i].setAttribute("class","boundary"); }
         youlose= false;
         document.getElementById("status").innerHTML = "Move your mouse over the 'S' to begin";
    });
    
   
    
             
                
          

document.getElementsByTagName("BODY")[0].addEventListener("mousemove", function(event) {
    var x = event.clientX;
    var y = event.clientY;
    var divLEFT = document.getElementById("maze").offsetLeft;
    var divTOP = document.getElementById("maze").offsetTop;
    var mazeHEIGHT= document.getElementById("maze").offsetHeight;
    var mazeWIDTH= document.getElementById("maze").offsetWidth;
    
    if (x < divLEFT || y < divTOP ||  y > (divTOP + mazeHEIGHT) ){
        overBoundary();
        console.log("hey");
    }
   
   // document.getElementById("status").innerHTML = x + " " + y ; 
    
});

});
    
    
    
function changeColor(){
    
    var walls = document.querySelectorAll(".boundary");
                for (var i = 0; i < walls.length; i++) {
                walls[i].onmouseover = overBoundary;}
}
         
     
function overBoundary() {
    document.getElementById("status").innerHTML = "You Lose!";
    youlose= true;
    var boundaries = document.querySelectorAll(".boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].setAttribute("class","boundary youlose");
    }
     

}
    
    

}
