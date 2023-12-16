/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
var domain = "http://127.0.0.1:8000"
function viewCrafts(){

    window.location.href = domain+"/crafts";
}
function viewContact(){

    window.location.href =  domain+"/#contact";
}
function viewAbout(){

    window.location.href =  domain+"/#about";
}

function viewCraftsHome(){

    window.location.href = domain+"#portfolio";
}

function navigateEnquire(image,name,price,folder,price_info) {
    localStorage.selectedItem = image
    localStorage.name = name
    localStorage.price = price
    localStorage.folder = folder
    localStorage.price_info = price_info
    window.location.href =  domain+"/enquire";
    
}