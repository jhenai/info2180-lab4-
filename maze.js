/* global $ */

window.onload= function(){


    
    alert("hi");
    // document.getElementById("boundary1").setAttribute("class","youlose");
    var wall1 = document.getElementById("boundary1");
    wall1.addEventListener("mouseover", function(){
         
     this.setAttribute("class","boundary youlose");
});
        alert("bye");

}
