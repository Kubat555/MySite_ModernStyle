"use strict";
// let ttl = document.getElementsByClassName("product_name");
// console.log(ttl[0].innerText);

// let prise = document.getElementsByClassName("product_prise");
// console.log(prise[0].innerText);

// var img = document.getElementById('product_img'),
//   style = img.currentStyle || window.getComputedStyle(img, false),
//   bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");

// // Display the url to the user
// console.log('../img/product2.png ' + bi);

let element = document.getElementsByClassName("add_bag");

var get_product_name = function(){
  var product = this.parentNode.parentNode.parentNode.querySelectorAll(".product_name");
  console.log(product[0].innerText);
};

for(var i = 0; i < element.length; i++){
  element[i].addEventListener('click', get_product_name,false);
}