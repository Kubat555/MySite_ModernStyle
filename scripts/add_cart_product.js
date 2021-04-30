"use strict";

let btnbag = document.getElementById("btnbag");
let act = false;
btnbag.onclick = function(){
    if(act==false){
        document.getElementById("bag").style.display = "inline";
        act = true;
    }
    else{
        document.getElementById("bag").style.display = "none";
        act = false;
    }
};

let element = document.getElementsByClassName("add_bag");
var bag = document.getElementById("bag");
var getinfo = function(){
  var prdname = this.parentNode.parentNode.parentNode.querySelectorAll(".product_name");
  var prdprise = this.parentNode.parentNode.parentNode.querySelectorAll(".product_prise");
  var prdimg = this.parentNode.parentNode.parentNode.querySelectorAll(".imgproduct");
  const styles = window.getComputedStyle(prdimg[0]);
  console.log(styles.backgroundImage);

  var cart = document.createElement("div");
  cart.className = "cart";
  cart.innerHTML = `<img class="cart__img" src="./img/product2.png" alt=""><div class="cart__info"><p class="cart_name">${prdname[0].innerText}</p><p class="cart__prise">Цена: <span class="prise__num">${prdprise[0].innerText}</span> рублей</p><button id="bagbtn" class="btn lg-hvr btnbox bagbtn">удалить</button></div>`;
  bag.append(cart);
};

for(var i = 0; i < element.length; i++){
  element[i].addEventListener('click', getinfo,false);
}

let deletebag = document.getElementsByClassName('bagbtn');
var deleteinfo = function(){
  var d = this.parentNode.parentNode;
  console.log(d);
}

for(var i = 0; i < btnbag.length; i++){
  btnbag[i].addEventListener('click', deleteinfo,false);
}

