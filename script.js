let MenuIems = document.getElementById("MenuItems");

MenuIems.style.maxHeight = "0px";

function menutoggle(){
    if(MenuIems.style.maxHeight == "0px"){
        MenuIems.style.maxHeight = "200px"
    } else {
        MenuIems.style.maxHeight = "0px"
    }
}

/* Galeria de Produtos */

let ProductImg = document.getElementById("ProductImg");
let SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclick = function(){
    ProductImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function(){
    ProductImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function(){
    ProductImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function(){
    ProductImg.src = SmallImg[3].src;
}