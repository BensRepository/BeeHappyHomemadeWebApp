
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

function clearList(){
    localStorage.removeItem('students')
    generateItemList()
}
function addToEnquiriesList(item,design,price){

    design = design.split("Selected: ")[1]

    if (item == "Pick Design") {
        alert("please pick a design!")
    } else {
        if ("students" in localStorage) {
            storageArray = localStorage.getItem("students") 
            storageArray = JSON.parse(storageArray) 
            //work out if one dimensional still

            if (storageArray.every(entry => !Array.isArray(entry))) {
                // One dimensional alert
                //alert("One dimensional")
                //checking for dups
            
                if ((storageArray[0] == item)&& (storageArray[1] == design)) {
                    storageArray[2] = Number(storageArray[2]) +1
                    localStorage.setItem('students',JSON.stringify(storageArray))
                    
                } else {
                    
                    storageArray = [[storageArray[0],storageArray[1],storageArray[2],storageArray[3]],[item,design,1,price]]
                    localStorage.setItem('students',JSON.stringify(storageArray))
                
                }

            } else {
                //Check for dups
                added = false
                for (let i = 0; i < storageArray.length; i++) {
                    if (storageArray[i][1] == design && storageArray[i][0] == item) {
                        storageArray[i][2] = Number(storageArray[i][2]) + 1
                        localStorage.setItem('students',JSON.stringify(storageArray))
                        added = true
                        break
                    } else{

                    }   }
                if (added == true) {
                    
                }  else{
                    alert("alert")
                    storageArray.push([item,design,1,price])
                    localStorage.setItem('students',JSON.stringify(storageArray))
                }

            } 
            
        } else {
            //first entry
            localStorage.setItem('students',JSON.stringify([item,design,"1",price]))
        }
    }

    generateItemList()
}

function generateItemList(){
    oldtable = document.getElementById("item-list")
    oldtable.remove()
    table = document.createElement("table"); 
    row = document.createElement("tr"); 
    var name_cell = document.createElement("th"); 
    var design_cell = document.createElement("th"); 
    var price_cell = document.createElement("th");
    var quantity_cell = document.createElement("th"); 
    table.id = "item-list"
    name_cell.innerHTML = "Name"
    design_cell.innerHTML = "Design"
    price_cell.innerHTML = "Price"
    quantity_cell.innerHTML = "Quantity"
    row.append(name_cell)
    row.append(design_cell)
    row.append(quantity_cell)
    row.append(price_cell)
    table.appendChild(row)


    document.getElementById("add-table").appendChild(table)
    if ("students" in localStorage) {
        storageArray = localStorage.getItem("students") 
        storageArray = JSON.parse(storageArray)
        table = document.getElementById("item-list")
        if (storageArray.every(entry => !Array.isArray(entry))) {
            // One dimensional alert
            //alert("One dimensional")
         
            var row = document.createElement("tr"); 
            var name_cell = document.createElement("th"); 
            var design_cell = document.createElement("th"); 
            var price_cell = document.createElement("th");
            var quantity_cell = document.createElement("th"); 

            name_cell.innerHTML = storageArray[0]
            design_cell.innerHTML = storageArray[1]
            price_cell.innerHTML = storageArray[3]
            quantity_cell.innerHTML = storageArray[2]

            row.append(name_cell)
            row.append(design_cell)
            row.append(quantity_cell)
            row.append(price_cell)
            table.appendChild(row)
            
      

       
        } else {
      
            //alert("Two dimensional")
            for (let i = 0; i < storageArray.length; i++) {
          
                //alert(storageArray[i][0])
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


        } // Has at least one entry that is an array
        
    } else {
     
    }
   
    
    
}