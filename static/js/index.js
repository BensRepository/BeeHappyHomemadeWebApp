/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
var domain = "http://127.0.0.1:8000"
function viewCrafts(){

    window.location.href = domain+"/crafts";
}
function viewCraftsHome(){

    window.location.href = domain+"#portfolio";
}
function viewContact(){

    window.location.href =  domain+"/#contact";
}

function contactSubmit2(){
    name = document.getElementById("name").value
    email = document.getElementById("email").value
    phone = document.getElementById("phone").value
    message = document.getElementById("message").value
    alert(name+" " + email+" " + phone+ " "+ message)
    
}
var selectedItem = "test"

function navigateEnquire(image,name,price,folder,price_info) {
    localStorage.selectedItem = image
    localStorage.name = name
    localStorage.price = price
    localStorage.folder = folder
    localStorage.price_info = price_info
    window.location.href =  domain+"/enquire";
    
}

async function contactSubmit(){
    name = document.getElementById("name").value
    email = document.getElementById("email").value
    phone = document.getElementById("phone").value
    message = document.getElementById("message").value
    let javascript_info = {"name":name,"email":email,"phone":phone,"message":message}
    let data = await aJAX('', method='post',body= JSON.stringify({javascript_info: javascript_info}),"Home")
    //alert(await data['view-information'])
}

async function aJAX(url, method, body,page){

    let headers = {
        'X-Requested-With':'XMLHttpRequest',
        'Content-Type': 'application/json'
    }

    if (method == 'post') {
        const csrf = document.querySelector('[name=csrfmiddlewaretoken]').value
        headers['X-CSRFToken'] = csrf
        
    } 
 
    if (page == "Home") {
        let response = await fetch('/post',{
            method: method,
            headers: headers,
            body: body
        })
    } else {
        let response = await fetch('/postList',{
            method: method,
            headers: headers,
            body: body
        })
    }

    return await response.json()
}

