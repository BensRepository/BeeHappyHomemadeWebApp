var previousKey = "F1"
function keyboardKeyClick(key){
    if (key == "test"){
        key = "'"
    }
   
    if (previousKey == key) {
        document.getElementById(previousKey).style.backgroundColor = "gray"
        document.getElementById(key).style.backgroundColor = "gray"
        key = ""
        previousKey = "F1"
        document.getElementById("selectedKey").innerHTML="Selected Key: "+"None";
        previousBind2 = previousBind //Need to fix: num Enter. Cnrl,Shift, F1 , \
        previousBind = ""
        bindClick(previousBind2)
    }
    else{
        //change key in gun bind
           //change for bind
     
        document.getElementById(key).style.backgroundColor = "green"
        document.getElementById(previousKey).style.backgroundColor = "gray"
        previousKey = key
        if(key == "Cntrl2"){
            key = "Cntrl"
        }
        if(key == "Shift2"){
            key = "Shift"
        }
        if(key == "kp_enter2"){
            key = "kp_enter"
         }
         selectedBind = key
        document.getElementById("selectedKey").innerHTML="Selected Key: "+key;
        document.getElementById("secondTwoTitle").innerHTML="2. What type of bind do you need?";
        document.getElementById("binds").style.display = "Block"
        try{
            if(gunsSelected!=""){
                
                var newBind = 'Bind' + " "+key+ " '" + Primary + Secondary + Grenade1 + Grenade2 + Grenade3 + Grenade4 + Equipment1 + Equipment2 + Equipment3 +"'"
                document.getElementById("consoleCode").innerText =  newBind
            }
            else{
                previousBind2 = previousBind
                previousBind = ""
                bindClick(previousBind2)
            }
        }
        catch{}
        
     

        
    }

}

gunsSelected = ""
previousBind = ""
function displayBindDescription(){
    
}
function bindClick(bind){
    clearBinds()
    document.getElementById(bind).style.backgroundColor = "green"
    if (previousBind == "") {
        previousBind = bind
    }

    else if (previousBind == bind) {
        document.getElementById("loadoutChoice").style.display ="none"
        document.getElementById("thirdSection").style.display ="none"
        document.getElementById(previousBind).style.backgroundColor = "rgb(54, 54, 58)" 
        previousBind = ""
        bind = ""
        
        clearBinds()
    } 
   
    else{
        document.getElementById(previousBind).style.backgroundColor = "rgb(54, 54, 58)"    
        previousBind = bind
    }
   
    bindsCode = {"Mute": "bind " + '"'+selectedBind+'"'+ ' "'+"toggle voice_enable 0 1"+'"',
                 "Remove Crosshair": "bind " + '"'+selectedBind+'"'+ ' "'+"toggle crosshair 0 1"+'"',
                "Clear Decals":"bind "+'"'+selectedBind+'"'+' "'+"r_cleardecals"+'"',
                "Toggle Hands":"bind "+'"'+selectedBind+'" '+'"'+"toggle cl_righthand 0 1"+'"',
                "Jumpthrow":'alias "+jumpthrow" "+jump;-attack"; alias "-jumpthrow" "-jump"; bind '+'"'+selectedBind+'"'+' "+jumpthrow"',
                "Net_graph":'alias +netg "net_graph 1;+showscores";alias -netg "net_graph 0;-showscores";bind ' + '"'+selectedBind+'"' +' "+netg";',
                "Zoom Radar":'bind ' +'"'+selectedBind+'"'+ ' "incrementvar cl_radar_scale 0 1 0.25"',
                }

    if (bind == "Weapon Buys"){
        document.getElementById("loadoutChoice").style.display ="Block"
        document.getElementById("thirdSection").style.display ="none"
    }
    else if (bind == "") {
        document.getElementById("thirdSection").style.display ="none"
    } else{
        gunsSelected = ""
        document.getElementById("loadoutChoice").style.display ="none"
        document.getElementById("thirdSection").style.display ="Block"
        document.getElementById("consoleCode").innerText = bindsCode[bind]
    }
    


}
function clearBinds(){
    Primary = ""
    Secondary = ""
    Grenade1 = "" 
    Grenade2 = ""
    Grenade3 = ""
    Grenade4 = ""
    Equipment1 = ""
    Equipment2 = ""
    Equipment3 = ""
    document.getElementById("consoleCode").innerText =""
    document.getElementById("CT-Price").innerHTML =""
    document.getElementById("T-Price").innerHTML =""
    TPrice = 0
    CTPrice = 0
    CTPricePrimary = 0
    CTPriceSecondary = 0
    CTPriceGrenade1 = 0
    CTPriceGrenade2 = 0
    CTPriceGrenade3 = 0
    CTPriceGrenade4 = 0
    CTPriceEquipment1 = 0
    CTPriceEquipment2 = 0
    CTPriceEquipment3= 0

    TPricePrimary = 0
    TPriceSecondary = 0
    TPriceGrenade1 = 0
    TPriceGrenade2 = 0
    TPriceGrenade3 = 0
    TPriceGrenade4 = 0
    TPriceEquipment1 = 0
    TPriceEquipment2 = 0
    TPriceEquipment3= 0
 
  
    try {
        document.getElementById(selectedPrimary).style.backgroundColor = "transparent"
    } catch (error) { 
    }
    try {
        document.getElementById(selectedSecondary).style.backgroundColor = "transparent"
    } catch (error) {
        
    }    try {
        document.getElementById(positions_selected_grenades["grenade1"]+".png").style.backgroundColor = "transparent"
    } catch (error) {

    }    try {
        document.getElementById(positions_selected_grenades["grenade2"]+".png").style.backgroundColor = "transparent"
    } catch (error) {
        
    }    try {
        document.getElementById(positions_selected_grenades["grenade3"]+".png").style.backgroundColor = "transparent"
    } catch (error) {
        
    }    try {
        document.getElementById(positions_selected_grenades["grenade4"]+".png").style.backgroundColor = "transparent"
    } catch (error) {
        
    }
    try {
        document.getElementById(positions_selected_equipment["equipment1"]+".png").style.backgroundColor = "transparent"
    } catch (error) {
        
    }
    try {
        document.getElementById(positions_selected_equipment["equipment2"]+".png").style.backgroundColor = "transparent"
    } catch (error) {
        
    }
    try {
        document.getElementById(positions_selected_equipment["equipment3"]+".png").style.backgroundColor = "transparent"
    } catch (error) {
        
    }

    positions_selected_grenades = {"grenade1":"","grenade2":"","grenade3":"","grenade4":""}
    positions_selected_equipment = {"equipment1":"","equipment2":"","equipment3":""}
    selectedPrimary = ""
    selectedSecondary = ""
}
function CopyFunction(){
    var copyText = document.getElementById("consoleCode");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}

function displayLoadoutImage(type){
    var filenames = JSON.parse(document.getElementById('Filenames').textContent); 

    for (let i = 0; i < filenames[type].length; i++) {
        var img = document.createElement("IMG");
        url = filenames[type][i]
        img.src = url.slice(1,);
        if (filenames[type][i].split("\\")[1] !== undefined) {
            img.id = filenames[type][i].split("\\")[1];
            img.style.width = "150px";
            img.style.height = "auto";
            img.setAttribute("class", "gunBackground");
            img.addEventListener("click", function(){configureBuyBind(filenames[type][i].split("\\")[1].split(".")[0])});
            document.getElementById(type).appendChild(img);

        } else if(filenames[type][i].split("\\")[1] === undefined) { //For AWS website url path
            img.id = filenames[type][i].split("/")[4];
            img.style.width = "150px";
            img.style.height = "auto";
            img.setAttribute("class", "gunBackground");
            img.addEventListener("click", function(){configureBuyBind(filenames[type][i].split("/")[4].split(".")[0])});
            document.getElementById(type).appendChild(img);
        }
        
      }

}

var Primary = ""
var Secondary = ""
var Grenade1 = "" 
var Grenade2 = ""
var Grenade3 = ""
var Grenade4 = ""
var Equipment1 = ""
var Equipment2 = ""
var Equipment3 = ""
var TPrice =0
var CTPrice =0

var selectedPrimary = ""
var selectedSecondary = ""


var CTPricePrimary = 0
var CTPriceSecondary = 0
var CTPriceGrenade1 = 0
var CTPriceGrenade2 = 0
var CTPriceGrenade3 = 0
var CTPriceGrenade4 = 0
var CTPriceEquipment1 = 0
var CTPriceEquipment2 = 0
var CTPriceEquipment3= 0

var TPricePrimary = 0
var TPriceSecondary = 0
var TPriceGrenade1 = 0
var TPriceGrenade2 = 0
var TPriceGrenade3 = 0
var TPriceGrenade4 = 0
var TPriceEquipment1 = 0
var TPriceEquipment2 = 0
var TPriceEquipment3= 0
var positions_selected_grenades = {"grenade1":"","grenade2":"","grenade3":"","grenade4":""}
var positions_selected_equipment = {"equipment1":"","equipment2":"","equipment3":""}
function configureBuyBind(gun){
    
    weapons = {"ak47":"Primary","aug":"Primary","awp":"Primary","famas":"Primary","g3sg1":"Primary","galilar":"Primary","m4a1":"Primary","m4a4":"Primary","scar20":"Primary","sg556":"Primary","ssg08":"Primary",
    "m249":"Primary","mag-7":"Primary","negev":"Primary","nova":"Primary","sawed-off":"Primary","xm1014":"Primary",
    "bizon":"Primary","mac10":"Primary","mp5":"Primary","mp7":"Primary","mp9":"Primary","p90":"Primary","ump45":"Primary",
    "cz75-auto":"Secondary","deagle":"Secondary","elite":"Secondary","fiveseven":"Secondary","p250":"Secondary","revolver":"Secondary","tec9":"Secondary",
    "decoy":"Grenades","flashbang":"Grenades","flashbang2":"Grenades","hegrenade":"Grenades","incgrenade":"Grenades","molitov":"Grenades","smokegrenade":"Grenades",
    "defuser":"Equipment","taser":"Equipment","vest":"Equipment","vesthelm":"Equipment"}
    
    costs = {"ak47":2700,"aug":3300,"awp":4750,"famas":2050,"g3sg1":5000,"galilar":1800,"m4a1":2900,"m4a4":3100,"scar20":5000,"sg556":3000,"ssg08":1700,
    "m249":5200,"mag-7":1300,"negev":1700,"nova":1050,"sawed-off":1100,"xm1014":2000,
    "bizon":1400,"mac10":1050,"mp5":1500,"mp7":1700,"mp9":1250,"p90":2350,"ump45":1200,
    "cz75-auto":500,"deagle":700,"elite":300,"fiveseven":500,"p250":300,"revolver":600,"tec9":500,
    "decoy":50,"flashbang":200,"flashbang2":200,"hegrenade":300,"incgrenade":600,"molitov":400,"smokegrenade":300, // MAKE PRICES TAKE AWAY AFTER NEW CLICK
    "defuser":400,"taser":200,"vest":650,"vesthelm":1000}
    //alert(document.getElementById("consoleCode").innerHTML.split("'")[3])

    //document.getElementsByClassName("gunBackground").backgroundColor ="transparent"

    //document.getElementById(gun+".png").style.borderColor = "green"

    document.getElementById("thirdSection").style.display = "Block"
    var key = document.getElementById("selectedKey").innerHTML.slice(14,)

    //if(document.getElementById("consoleCode").value ==""){
        //newBind = "bind " +key.slice(14,)+" 'buy " + gun+";'"
    //}
    //else{
        //newBind = "buy " +gun +";'"
    //}

    

    if(weapons[gun] == "Primary"){
        if (selectedPrimary == "") {
            document.getElementById(gun+".png").style.backgroundColor = "green"
            selectedPrimary = gun + ".png"}
        else if(selectedPrimary ==  gun + ".png"){
            document.getElementById(selectedPrimary).style.backgroundColor = "transparent"
            Primary = ""
            selectedPrimary =""
            CTPricePrimary = 0 
            TPricePrimary = 0
            gun=""
        }
        else {
        document.getElementById(gun+".png").style.backgroundColor = "green"
        document.getElementById(selectedPrimary).style.backgroundColor = "transparent"
        selectedPrimary = gun + ".png"
        }
       
        if(gun == "ak47" || gun == "m4a1" || gun == "m4a4"){
            Primary = "buy " + "ak47" + ";" +"buy " + "m4a1" + ";"
            if(gun =="ak47"){
                TPricePrimary = costs[gun]
                CTPricePrimary = costs["m4a1"]
            }
            else if(gun =="m4a1" || "m4a4"){
                CTPricePrimary = costs[gun]
                TPricePrimary = costs["ak47"]
            }
        }
        else if(gun == "famas" || gun == "galilar"){
            Primary = "buy " + "galilar" + ";" +"buy " + "famas" + ";"
            if(gun =="galilar"){
                TPricePrimary = costs[gun]
                CTPricePrimary = costs["famas"]
            }
            else if(gun =="famas"){
                CTPricePrimary = costs[gun]
                TPricePrimary = costs["galilar"]
            }
        }
        else if(gun == "scar20" || gun == "g3sg1"){
            Primary = "buy " + "scar20" + ";" +"buy " + "g3sg1" + ";"
            if(gun =="scar20"){
                TPricePrimary = costs[gun]
                CTPricePrimary = costs["g3sg1"]
            }
            else if(gun =="g3sg1"){
                CTPricePrimary = costs[gun]
                TPricePrimary = costs["scar20"]
            }
        }
        else if(gun == "aug" || gun == "sg556"){
            Primary = "buy " + "aug" + ";" +"buy " + "sg556" + ";"
            if(gun =="sg556"){
                TPricePrimary = costs[gun]
                CTPricePrimary = costs["aug"]
            }
            else if(gun =="aug"){
                CTPricePrimary = costs[gun]
                TPricePrimary = costs["sg556"]
            }
        }
        else if(gun == "sawedoff" || gun == "mag7"){
            Primary = "buy " + "sawedoff" + ";" +"buy " + "mag7" + ";"
            if(gun =="sawedoff"){
                TPricePrimary = costs[gun]
                CTPricePrimary = costs["mag7"]
            }
            else if(gun =="mag7"){
                CTPricePrimary = costs[gun]
                TPricePrimary = costs["sawedoff"]
            }
        }
        else if(gun == "mac10" || gun == "mp9"){
            Primary = "buy " + "mac10" + ";" +"buy " + "mp9" + ";"
            if(gun =="mac10"){
                TPricePrimary = costs[gun]
                CTPricePrimary = costs["mp9"]
            }
            else if(gun =="mp9"){
                CTPricePrimary = costs[gun]
                TPricePrimary = costs["mac10"]
            }
        }
        else if(gun == "mp5" || gun == "mp7"){
            Primary = "buy " + "mp5" + ";" +"buy " + "mp7" + ";"
            CTPricePrimary = costs[gun]
            TPricePrimary = costs[gun]
        }

        else if (gun != ""){
            Primary = "buy " + gun + ";"
            CTPricePrimary = costs[gun]
            TPricePrimary = costs[gun]
        }
        
    }
    
    else if(weapons[gun] == "Secondary"){
        if (selectedSecondary == "") {
            document.getElementById(gun+".png").style.backgroundColor = "green"
            selectedSecondary = gun + ".png"
           } 
           else if(selectedSecondary ==  gun + ".png"){
            document.getElementById(selectedSecondary).style.backgroundColor = "transparent"
            Secondary = ""
            selectedSecondary =""
            gun=""
            CTPriceSecondary = 0 
            TPriceSecondary = 0
            }
        else {
            document.getElementById(gun+".png").style.backgroundColor = "green"
            document.getElementById(selectedSecondary).style.backgroundColor = "transparent"
            selectedSecondary = gun + ".png"
           }
        if(gun == "autec9" || gun == "fiveseven"){
            Secondary = "buy " + "tec9" + ";" +"buy " + "fiveseven" + ";"
            CTPriceSecondary = costs[gun]
            TPriceSecondary = costs[gun]
        }
        if(gun == "deagle" || gun == "revolver"){
            Secondary = "buy " + "deagle" + ";" +"buy " + "revolver" + ";"
            if(gun =="revolver"){
                TPriceSecondary = costs["revolver"]
                CTPriceSecondary = costs["revolver"]
            }
            else if(gun =="deagle"){
                CTPriceSecondary = costs["deagle"]
                TPriceSecondary = costs["deagle"]
            }
        }
        else if (gun != ""){
            Secondary = "buy " + gun + ";"
            CTPriceSecondary = costs[gun]
            TPriceSecondary = costs[gun]
        }
        
    }
    else if(weapons[gun] == "Grenades"){
        gun2 = gun
        if(gun == "flashbang2"){
            gun = "flashbang"
        }
        
        position = ""
        
        //iterate through values and find key with earliest blank slot. 
        for (const [key, value] of Object.entries(positions_selected_grenades)) {
            if(value == ""){
                position = key
                break;
            }
            else{
                continue
            } 
        }
        //iterate through to find if any are dups
        dups = ""
        for (const [key, value] of Object.entries(positions_selected_grenades)) {
            if(gun2 == value){
                dups = "yes"
                document.getElementById(gun2+".png").style.backgroundColor = "transparent"
                positions_selected_grenades[key] = ""
                if (key == "grenade1") {
                    TPriceGrenade1 = 0
                    CTPriceGrenade1 = 0
                    Grenade1 = ""
             
                } else if(key == "grenade2") {
                    TPriceGrenade2 = 0
                    CTPriceGrenade2 = 0
                    Grenade2 = ""
    
                }
                else if(key == "grenade3") {
                    TPriceGrenade3 = 0
                    CTPriceGrenade3 = 0
                    Grenade3 = ""
                }
                else if(key == "grenade4") {
                    TPriceGrenade4 = 0
                    CTPriceGrenade4 = 0
                    Grenade4 = ""
                }
                break;
            } 
            continue
           }
        
        if(dups == ""){
        for (const [key, value] of Object.entries(positions_selected_grenades)) {
            
            if((positions_selected_grenades[key] == "incgrenade") && (gun == "molitov")){
                document.getElementById(gun2+".png").style.backgroundColor = "green"
                document.getElementById("incgrenade.png").style.backgroundColor = "transparent"
                positions_selected_grenades[key] = "molitov"
                if (key == "grenade1") {
                    TPriceGrenade1 = costs["molitov"]
                    CTPriceGrenade1 = costs["incgrenade"]
                    Grenade1 = "buy molitov;buy incgrenade;"
                } else if(key == "grenade2") {
                    TPriceGrenade2 = costs["molitov"]
                    CTPriceGrenade2 = costs["incgrenade"]
                    Grenade2 = "buy molitov;buy incgrenade;"
                }
                else if(key == "grenade3") {
                    TPriceGrenade3 = costs["molitov"]
                    CTPriceGrenade3 = costs["incgrenade"]
                    Grenade3 = "buy molitov;buy incgrenade;"
                }
                else if(key == "grenade4") {
                    TPriceGrenade4 = costs["molitov"] 
                    CTPriceGrenade4 = costs["incgrenade"]
                    Grenade4 = "buy molitov;buy incgrenade;"
                }
                break
            }
            if((positions_selected_grenades[key] == "molitov") && (gun == "incgrenade")){
                document.getElementById(gun2+".png").style.backgroundColor = "green"
                document.getElementById("molitov.png").style.backgroundColor = "transparent"
                positions_selected_grenades[key] = "incgrenade"
                
                if (key == "grenade1") {
                    TPriceGrenade1 = costs["molitov"]
                    CTPriceGrenade1 = costs["incgrenade"]
                    Grenade1 = "buy incgrenade;buy molitov;"
                } else if(key == "grenade2") {
                    TPriceGrenade2 = costs["molitov"]
                    CTPriceGrenade2 = costs["incgrenade"]
                    Grenade2 = "buy incgrenade;buy molitov;"
                }
                else if(key == "grenade4") {
                    TPriceGrenade3 = costs["molitov"]
                    CTPriceGrenade3 = costs["incgrenade"]
                    Grenade3 = "buy incgrenade;buy molitov;"
                }
                else if(key == "grenade4") {
                    TPriceGrenade4 = costs["molitov"] 
                    CTPriceGrenade4 = costs["incgrenade"]
                    Grenade4 = "buy incgrenade;buy molitov;"
                }
                break
            }
            else if(position != "") {
            document.getElementById(gun2+".png").style.backgroundColor = "green"
            positions_selected_grenades[position] = gun2
            fire = false
            if(gun == "molitov"){
                gun2 = "molitov;buy incgrenade"
                fire = true
            }
            if(gun == "incgrenade"){
                gun2 = "incgrenade;buy molitov"
                fire = true
            }
            if (position == "grenade1") {
                if(fire == true){
                    TPriceGrenade1 = costs["molitov"]
                    CTPriceGrenade1 = costs["incgrenade"]
                    Grenade1 = "buy " +gun2 +";"
                }
                else{
                    TPriceGrenade1 = costs[gun]
                    CTPriceGrenade1 = costs[gun]
                    Grenade1 = "buy " +gun2 +";"
                }

            } else if(position == "grenade2") {
                if(fire == true){
                    TPriceGrenade2 = costs["molitov"]
                    CTPriceGrenade2 = costs["incgrenade"]
                    Grenade2 = "buy " +gun2 +";"
                }
                else{
                    TPriceGrenade2 = costs[gun]
                    CTPriceGrenade2 = costs[gun]
                    Grenade2 = "buy " +gun+ ";"
                }
          
            }
            else if(position == "grenade3") {
                if(fire == true){
                    TPriceGrenade3 = costs["molitov"]
                    CTPriceGrenade3 = costs["incgrenade"]
                    Grenade3 = "buy " +gun2 +";"
                }
                else{
                    TPriceGrenade3 = costs[gun]
                    CTPriceGrenade3 = costs[gun]
                    Grenade3 = "buy " +gun +";"
                }

            }
            else if(position == "grenade4") {
                if(fire == true){
                    TPriceGrenade4 = costs["molitov"]
                    CTPriceGrenade4 = costs["incgrenade"]
                    Grenade4 = "buy " +gun2 +";"
                }
                else{
                    TPriceGrenade4 = costs[gun]
                    CTPriceGrenade4 = costs[gun]
                    Grenade4 = "buy " +gun +";"
                }
        
            }
            break;
            }  
            else{
                alert("Grenades full!")
                break
            }
        }
        
    }
 
}
    else if(weapons[gun] == "Equipment"){
        position = ""
        
        //iterate through values and find key with earliest blank slot. 
        for (const [key, value] of Object.entries(positions_selected_equipment)) {
            if(value == ""){
                position = key
                break;
            }
            else{
                continue
            } 
        }
        //iterate through to find if any are dups
        dups = ""
        for (const [key, value] of Object.entries(positions_selected_equipment)) {
            if(gun == value){
                dups = "yes"
                document.getElementById(gun+".png").style.backgroundColor = "transparent"
                positions_selected_equipment[key] = ""
                if (key == "equipment1") {
                    TPriceEquipment1 = 0
                    CTPriceEquipment1 = 0
                    Equipment1 = ""
             
                } else if(key == "equipment2") {
                    TPriceEquipment2 = 0
                    CTPriceEquipment2 = 0
                    Equipment2 = ""
    
                }
                else if(key == "equipment3") {
                    TPriceEquipment3 = 0
                    CTPriceEquipment3 = 0
                    Equipment3 = ""
                }
                break;
            } 
            continue
           }
        
        if(dups == ""){
        for (const [key, value] of Object.entries(positions_selected_equipment)) {
           
            if((positions_selected_equipment[key] == "vest") && (gun == "vesthelm")){
                document.getElementById(gun+".png").style.backgroundColor = "green"
                document.getElementById("vest.png").style.backgroundColor = "transparent"
                positions_selected_equipment[key] = "vesthelm"
                if (key == "equipment1") {
                    TPriceEquipment1 = costs["vesthelm"]
                    CTPriceEquipment1 = costs["vesthelm"]
                    Equipment1 = "buy vesthelm;"
                } else if(key == "equipment2") {
                    TPriceEquipment2 = costs["vesthelm"]
                    CTPriceEquipment2 = costs["vesthelm"]
                    Equipment2 = "buy vesthelm;"
                }
                else if(key == "equipment3") {
                    TPriceEquipment3 = costs["vesthelm"]
                    CTPriceEquipment3 = costs["vesthelm"]
                    Equipment3 = "buy vesthelm;"
                }
                else if(key == "equipment4") {
                    TPriceEquipment4 = costs["vesthelm"] 
                    CTPriceEquipment4 = costs["vesthelm"]
                    Equipment4 = "buy vesthelm;"
                }
                break
            }
            if((positions_selected_equipment[key] == "vesthelm") && (gun == "vest")){
                document.getElementById(gun+".png").style.backgroundColor = "green"
                document.getElementById("vesthelm.png").style.backgroundColor = "transparent"
                positions_selected_equipment[key] = "vest"
                
                if (key == "equipment1") {
                    TPriceEquipment1 = costs["vest"]
                    CTPriceEquipment1 = costs["vest"]
                    Equipment1 = "buy vest;"
                } else if(key == "equipment2") {
                    TPriceEquipment2 = costs["vest"]
                    CTPriceEquipment2 = costs["vest"]
                    Equipment2 = "buy vest;"
                }
                else if(key == "equipment4") {
                    TPriceEquipment3 = costs["vest"]
                    CTPriceEquipment3 = costs["vest"]
                    Equipment3 = "buy vest;"
                }
                else if(key == "equipment4") {
                    TPriceEquipment4 = costs["vest"] 
                    CTPriceEquipment4 = costs["vest"]
                    Equipment4 = "buy vest;"
                }
                break
            }

           if(position != "") {
            document.getElementById(gun+".png").style.backgroundColor = "green"
            positions_selected_equipment[position] = gun
    
            if (position == "equipment1") {
                TPriceEquipment1 = costs[gun]
                CTPriceEquipment1 = costs[gun]
                Equipment1 = "buy " +gun +";"
            } else if(position == "equipment2") {
                TPriceEquipment2 = costs[gun]
                CTPriceEquipment2 = costs[gun]
                Equipment2 = "buy " +gun+ ";"
            }
            else if(position == "equipment3") {
                TPriceEquipment3 = costs[gun]
                CTPriceEquipment3 = costs[gun]
                Equipment3 = "buy " +gun +";"
            }
            break;
            }  
            else{
                alert("equipment full!")
                break
            }
        }
    }
    }
        
     
    else{
        alert("fuck")
    }
    CTPrice = CTPricePrimary + CTPriceSecondary + CTPriceGrenade1 + CTPriceGrenade2 + CTPriceGrenade3 + CTPriceGrenade4 + CTPriceEquipment1 + CTPriceEquipment2 + CTPriceEquipment3
    TPrice = TPricePrimary + TPriceSecondary + TPriceGrenade1 + TPriceGrenade2 + TPriceGrenade3 + TPriceGrenade4 + TPriceEquipment1 + TPriceEquipment2 + TPriceEquipment3
    document.getElementById("T-Price").innerHTML = "Terroist Price: $"+TPrice
    document.getElementById("CT-Price").innerHTML = "Counter-Terroist Price : $"+CTPrice
    var newBind = 'Bind' + " "+'"'+key+'"'+ ' "' + Primary + Secondary + Grenade1 + Grenade2 + Grenade3 + Grenade4 + Equipment1 + Equipment2 + Equipment3 +'"'
    gunsSelected = newBind
    document.getElementById("consoleCode").innerText =  newBind

    if(newBind == ('Bind ' +'"'+key+'" '+'""') ){
   
        document.getElementById("consoleCode").innerText = "" 
    }
     
    
}


