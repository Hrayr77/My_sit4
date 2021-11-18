let sliderItems = document.getElementsByClassName("pp");
let main = document.getElementById("mainModal");
let wrp = document.getElementById("mod");
let price = document.getElementById("price");
let nw = document.getElementById("new");
let right = document.getElementById("right");
let close = document.getElementById("mySpan");
let modalWrapper = document.getElementById("modal_wrapper");
let l = "269.03px";


function myFunc() {
    for(let i = 0; i < sliderItems.length; i++){
      sliderItems[i].onclick = function () {
      //  alert("hello");
       console.log(sliderItems[i]);
       console.log(main);
       console.log(modalWrapper);
       console.log(price);
       main.classList.add("activ");
       modalWrapper.innerHTML = price.innerHTML;
      }
    }
  }
  myFunc();

  console.log(sliderItems);

  close.onclick = function (){
    main.classList.remove("activ");
  }
  
// function rig() {
//   for(let r = 0; r < sliderItems.length; r++){
//     if(sliderItems[i] == l){l = 0; }
//     sliderItems[i].style.left = '-' + l + 'px';
//   }
  
// } 
right.onclick = function () {
  for(let r = 0; r < sliderItems.length; r++){
    if(sliderItems[i] == l)
    sliderItems[i].style.left = '-' + l + 'px';
  }
}

// console.log(sliderItems);




// let slider = document.getElementsByClassName("price_imig", "img")
// let nw = document.getElementsByClassName("new");
// let next = document.getElementById("next");
// let back = document.getElementById("back");
// let Modal = document.getElementById("mod");
// let myModal = document.getElementById("myModal");
// let slideShow = document.getElementById("xxx");
// let i;
// console.log(slider);

// function myFunc() {
//   for(let i = 0; i < slider.length; i++){
//     slider[i].onclick = function () {
//       Modal.classList.add("activ");
//       console.log(slider[i]);
//       myModal.append(slider[i]);
      // nw.classList.add("newer");
      // nw.remove();
      // myModal.innerHTML =  slider[i].innerHTML;
//     }
//   }
// }
// myFunc();

// mySpan.onclick = function () {
//   Modal.classList.remove("activ");
// }

// ================

// slider[i].onclick = function(){
//   myModal.style.display = "block";
//   for(i = 0; i < slider.length; i++){
//     this.slider[i] = myModal.innerHTML;
//     if(slider[i] = 0){
//       i++
//     }else{
//       slider[i] = 0;
//     }
//   }
// }


// let md = document.getElementById("mod");
// let span = document.getElementsByClassName("mySpan")[0];
// let bt = document.getElementById("price_img");
// let box = document.getElementById("myModal");
// let ele = document.getElementsByClassName("price_imig", "src");
// let ar = [];
// let xxx = document.getElementById("xxx");
// let back = document.getElementById("back");
// let next = document.getElementById("next");

// for (let i = 0; i < ele.length; i++) {
//   ar.push(ele[i]);
//   document.getElementById("xxx").src = ar[i];
// }

// console.log(bt);

// bt.onclick = function(event) {
//   md.style.display = "block";
//    event.currentTarget = document.getElementById("xxx").src;
//    console.log(currentTarget);
//   }

// function slideShow() {
//   next.onclick = function () {
//    for (let i = 0; i < ele.length; i++) {
//   ar.push(ele[i]);
//   document.getElementById("xxx").src = ar[i];
// }
//     if (i < ar.length - 1) {
//       i++;
//     } else {
//       i = 0;
//     }
//   }
// }
// slideShow();



// span.onclick = function() {
//     md.style.display = "none";

//   }
 










