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



// Defines the event listener
function customChoice(item){
    document.getElementById('pick-design').innerText = "Custom"
    //document.getElementById('item_picture_value').src = "/static/images/item-types/"+folder+"/"+this.innerText+".jpg"
}

function addToEnquiriesList(item){
    if (item == "Pick Design") {
        alert("please pick a design!")
    } else {
        itemlist = document.getElementById("item-list")
        itemlist2 = document.getElementById("item-list")
        alert(itemlist.querySelectorAll("li").length)
        if (itemlist.querySelectorAll("li").length < 5) {
            var opt = document.createElement("li"); 
            opt.innerHTML = item
            itemlist.appendChild(opt)
        } else {
            var opt = document.createElement("li"); 
            opt.innerHTML = item
            itemlist2.appendChild(opt)
        }
   
        
    }
 

    
}