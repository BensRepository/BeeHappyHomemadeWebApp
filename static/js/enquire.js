
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
    document.getElementById('pick-design').innerText = "Selected: Custom"
    document.getElementById('item_picture_value').src = " /static/images/thumbnails/Custom.jpg"
   
    //document.getElementById('item_picture_value').src = "/static/images/item-types/"+folder+"/"+this.innerText+".jpg"
}

function clearList(){
    localStorage.removeItem('students')
    document.getElementById('total-price').style.display = "none"
    document.getElementById('clear-button').style.display = "none"
    generateItemList()


}
function addToEnquiriesList(item,design,price){

    design = design.split("Selected: ")[1]
    design = design.split(" ")[0]
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
                    storageArray[3] = Number(storageArray[3]) +Number(price)
                    localStorage.setItem('students',JSON.stringify(storageArray))
                    
                } else {
                    //HERE ISSUE

                    storageArray = [[storageArray[0],storageArray[1],storageArray[2],storageArray[3]],[item,design,1,price]]
                    localStorage.setItem('students',JSON.stringify(storageArray))
                
                }

            } else {
                //Check for dups
                added = false
                for (let i = 0; i < storageArray.length; i++) {
                    if (storageArray[i][1] == design && storageArray[i][0] == item) {
  
                        storageArray[i][2] = Number(storageArray[i][2]) + 1
                        storageArray[i][3] = Number(storageArray[i][3]) +Number(price)
                        localStorage.setItem('students',JSON.stringify(storageArray))
                        added = true
                        break
                    } else{

                    }   }
                if (added == true) {
                    
                }  else{
                 
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
    if ("students" in localStorage) {
        document.getElementById('clear-button').style.display = "block"
        document.getElementById('enquire').style.display = "block"
        document.getElementById('total-price').style.display = "block"
        document.getElementById("no-crafts-disclaimer").style.display = "none"
        oldtable = document.getElementById("item-list")
        oldtable.remove()
        table = document.createElement("table"); 
        row = document.createElement("tr"); 

        var name_cell = document.createElement("th"); 
        var design_cell = document.createElement("th"); 
        var price_cell = document.createElement("th");
        var quantity_cell = document.createElement("th"); 
        var action_cell = document.createElement("th"); 
        table.id = "item-list"
        name_cell.innerHTML = "Name"
        design_cell.innerHTML = "Design"
        price_cell.innerHTML = "Price"
        quantity_cell.innerHTML = "Quantity"
        action_cell.innerHTML = ""
        table.style.fontWeight = "bold"
        name_cell.style.fontWeight = "bold"
        design_cell.style.fontWeight = "bold"
        price_cell.style.fontWeight = "bold"
        quantity_cell.style.fontWeight = "bold"
        action_cell.className = "removeButton hover"
        
        row.append(name_cell)
        row.append(design_cell)
        row.append(quantity_cell)
        row.append(price_cell)
        row.append(action_cell)
        table.appendChild(row)
    
        document.getElementById("add-table").appendChild(table)
    }
    else{
        document.getElementById("no-crafts-disclaimer").style.display = "block"
        oldtable = document.getElementById("item-list")
        oldtable.remove()
        table = document.createElement("table")
        table.id = "item-list"
        document.getElementById("add-table").appendChild(table)
    }
    if ("students" in localStorage) {
        storageArray = localStorage.getItem("students") 
        storageArray = JSON.parse(storageArray)
        table = document.getElementById("item-list")
        if (storageArray.every(entry => !Array.isArray(entry))) {
            // One dimensional alert
            //alert("One dimensional")
            price= localStorage.getItem("price");
            var row = document.createElement("tr"); 
            row.id = 0
            var name_cell = document.createElement("th"); 
            var design_cell = document.createElement("th"); 
            var price_cell = document.createElement("th");
            var quantity_cell = document.createElement("th"); 
            var action_cell = document.createElement("th"); 
            name_cell.innerHTML = storageArray[0]
            design_cell.innerHTML = storageArray[1]

            price_cell.innerHTML =formatter.format(Number(storageArray[3]))
            quantity_cell.innerHTML = storageArray[2]
            action_cell.onclick = function () { removeRow(0)}
            action_cell.innerHTML = "Remove"
            action_cell.className = "removeButton"
            action_cell.className = "removeButton hover"
            row.append(name_cell)
            row.append(design_cell)
            row.append(quantity_cell)
            row.append(price_cell)
            row.append(action_cell)
            table.appendChild(row)
         
      

       
        } else {
            price= localStorage.getItem("price");
            //alert("Two dimensional")
            for (let i = 0; i < storageArray.length; i++) {
             
                //alert(storageArray[i][0])
                var row = document.createElement("tr"); 
                row.id = i
                var name_cell = document.createElement("th"); 
                var design_cell = document.createElement("th"); 
                var price_cell = document.createElement("th");
                var quantity_cell = document.createElement("th"); 
                var action_cell = document.createElement("th"); 
                name_cell.innerHTML = storageArray[i][0]
                design_cell.innerHTML = storageArray[i][1]
                action_cell.className = "removeButton"
                action_cell.className = "removeButton hover"
                price_cell.innerHTML = formatter.format(Number(storageArray[i][3]))
                quantity_cell.innerHTML = storageArray[i][2]
                action_cell.innerHTML = "Remove"
                action_cell.onclick = function () { removeRow(i)}
                row.append(name_cell)
                row.append(design_cell)
                row.append(quantity_cell)
                row.append(price_cell)
                row.append(action_cell)
                table.appendChild(row)
            }


        } // Has at least one entry that is an array
        
    } else {
        document.getElementById('clear-button').style.display = "none"
        document.getElementById('enquire').style.display = "none"
    }
   
    
    calaculateTotal()
}


function removeRow(id){

    storageArray = localStorage.getItem("students") 
    storageArray = JSON.parse(storageArray) 
    if (storageArray.every(entry => !Array.isArray(entry))) {
        localStorage.removeItem('students')

    }
    else{
        storageArray.splice(id,1)
        localStorage.setItem('students',JSON.stringify(storageArray))
        if (storageArray.length == 0) {
            localStorage.removeItem('students')
            document.getElementById('clear-button').style.display = "none"
            document.getElementById('enquire').style.display = "none"
        } else {
            
        }

    }

    generateItemList()

}


function calaculateTotal(){
    storageArray = localStorage.getItem("students") 
    storageArray = JSON.parse(storageArray)

    if ("students" in localStorage) {
        document.getElementById('total-price').style.display = "block"
        total = 0
        if (storageArray.every(entry => !Array.isArray(entry))) {
            total = Number(storageArray[3])
            
        }
        else{
            for (let i = 0; i < storageArray.length; i++) {
                total += Number(storageArray[i][3])
              }
        }
        if (total != 0) {
            document.getElementById('total-price').innerHTML = "Total: £" + total
            document.getElementById('total-price').style.paddingTop = "50px"
        } else {
            document.getElementById('total-price').style.display = "none"
        }
    }else{
        document.getElementById('total-price').style.display = "none"
    }
   

}

async function contactSubmitList(){
    name = document.getElementById("name").value
    email = document.getElementById("email").value
    phone = document.getElementById("phone").value
    message = document.getElementById("message").value
    total = document.getElementById("total-price").innerHTML

    storageArray = localStorage.getItem("students") 
    storageArray = JSON.parse(storageArray)

    let javascript_info = {"name":name,"email":email,"phone":phone,"message":message,"items" : storageArray,"total":total}
    let data = await aJAX('postList', method='post',body= JSON.stringify({javascript_info: javascript_info}),"Enquire")
    alert(await data['view-information'])
    clearList()
}