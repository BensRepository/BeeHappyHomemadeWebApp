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

function addToEnquiriesList(item,design,price){

    let retString = localStorage.getItem("students") 
    let storageArray = JSON.parse(retString) 
    alert(storageArray)

    added = 0
    design = design.split("Selected: ")[1]
    for (let i = 0; i < storageArray.length; i++) {
        if (storageArray[i][1] == design && storageArray[i][0] == item) {
            storageArray[i][2] = 2
            added = 1
            break
        } }
    if (added != 1) {
        storageArray.push([item,design,1,price])
       } else {
    
       }
    
    alert(storageArray)

    if (item == "Pick Design") {
        alert("please pick a design!")
    } else {
        table = document.getElementById("item-list")
        var row = document.createElement("tr"); 
        var name_cell = document.createElement("th"); 
        var design_cell = document.createElement("th"); 
        var price_cell = document.createElement("th");
        var quantity_cell = document.createElement("th"); 

        name_cell.innerHTML = item
        design_cell.innerHTML = design
        price_cell.innerHTML = price
        quantity_cell.innerHTML = 1
        row.append(name_cell)
        row.append(design_cell)
        row.append(quantity_cell)
        row.append(price)
        table.appendChild(row)

        localStorage.setItem('students',JSON.stringify(storageArray)) 

        
    }

}

function generateItemList(){
    alert(localStorage.getItem("students"))
    if (localStorage.getItem("students").length < 5) {
        storageArray = localStorage.getItem("students") 
        storageArray = JSON.parse(storageArray)
        table = document.getElementById("item-list")
        for (let i = 0; i < storageArray.length; i++) {
            var row = document.createElement("tr"); 
            var name_cell = document.createElement("th"); 
            var design_cell = document.createElement("th"); 
            var price_cell = document.createElement("th");
            var quantity_cell = document.createElement("th"); 

            name_cell.innerHTML = storageArray[i][0]
            design_cell.innerHTML = storageArray[i][1]
            price_cell.innerHTML = storageArray[i][3]
            quantity_cell.innerHTML = storageArray[i][2]

            row.append(name_cell)
            row.append(design_cell)
            row.append(quantity_cell)
            row.append(price_cell)
            table.appendChild(row)
        }
    } else {
        storageArray =[] 
    }
   
    
    
}