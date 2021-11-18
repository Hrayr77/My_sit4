let modal = document.getElementById("mod");
let span = document.getElementsByClassName("mySpan")[0];
let btn = document.getElementById("contact");


btn.onclick = function() {
    modal.style.display = "block";
  }

span.onclick = function() {
    modal.style.display = "none";
  }

   window.onclick = function(event) {
     if (event.target == modal) {
       modal.style.display = "none";
     }
   }

let myImg= document.getElementsByClassName("im_a");
let menu = document.getElementById("men");

// function abc(){
//   menu.classList.toggle("activ");
// }

function abc(){
  if(menu.className == "sidbar"){
    menu.classList.add("activ")
  }else{
    menu.classList.remove("activ");
  }
}