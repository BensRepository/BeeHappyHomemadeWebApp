function searchMarketIgnore(){
            

    Hashnames = {"ESLKatowice14":"Katowice 2014",
                "ESLCologne14":"Cologne 2014",
                "ESLKatowice15":"Katowice 2015",
                "IntelRio22":"Rio 2022",
                "PGLAntwerp22":"Antwerp 2022",
                "PGLStockholm21":"Stockholm 2021",
                "FACEITLondon18":"London 2018",
                "StarLadderBerlin19":"Berlin 2019",
                "ELEAGUEBoston18":"Boston 2018",
                "ELEAGUEAtlanta17":"Atlanta 2017",
                "ESLCologne16":"Cologne 2016",
                "MLGColumbus16":"MLG Columbus 2016",
                "ClujNapoca2015":"Cluj-Napoca 2015",
                "DreamHack14":"DreamHack 2014",
                "DreamHack13":"",
                "RMR20":"2020 RMR",
                "ESLKatowice19":"Katowice 2019",
                "PGLKrakow17":"Krakow 2017",
                "ESLCologne15":"Cologne 2015",
                "Misc":"",
                "Paris23": "Paris 2023"}
    var weaponSearch = document.getElementById("weaponSelector").value;
    var typeSearch = document.getElementById("typeSelector").value;

    try{
        var stickerSearch = document.getElementById("selectedStickerImage").src;
        stickerSearch = stickerSearch.split("/")[7].substring(0, stickerSearch.split("/")[7].length-4).replaceAll("_","%20")+"%20"+ Hashnames[stickerSearch.split("/")[6]]
    }
    catch {
        var stickerSearch = ""   
    }

    try{
        var stickerSearch2 = document.getElementById("selectedSticker2Image2").src;
        stickerSearch2 = stickerSearch2.split("/")[7].substring(0, stickerSearch2.split("/")[7].length-4).replaceAll("_","%20")+"%20"+ Hashnames[stickerSearch2.split("/")[6]]
    }
    catch {
        var stickerSearch2 = ""   
    }

    try{
        var stickerSearch3 = document.getElementById("selectedSticker3Image3").src;
        stickerSearch3 = stickerSearch3.split("/")[7].substring(0, stickerSearch3.split("/")[7].length-4).replaceAll("_","%20")+"%20"+ Hashnames[stickerSearch3.split("/")[6]]
    }   
    catch {
        var stickerSearch3 = ""   
    }

    try{
        var stickerSearch4 = document.getElementById("selectedSticker4Image4").src;
        stickerSearch4 = stickerSearch4.split("/")[7].substring(0, stickerSearch4.split("/")[7].length-4).replaceAll("_","%20")+"%20"+ Hashnames[stickerSearch4.split("/")[6]]
    }
    catch {
        var stickerSearch4 = ""   
    }


    if(document.getElementById('wearFN').checked == true){

        wearSearchFN = "category_730_Exterior%5B%5D=tag_WearCategory0&"
    }
    else{
        wearSearchFN = ""
    }
    if(document.getElementById('wearMW').checked == true){

        wearSearchMW = "category_730_Exterior%5B%5D=tag_WearCategory1&"
    }        
    else{
        wearSearchMW = ""
    }    
    if(document.getElementById('wearFT').checked == true){

        wearSearchFT = "category_730_Exterior%5B%5D=tag_WearCategory2&"
    }    
    else{
        wearSearchFT = ""
    }        
    if(document.getElementById('wearWW').checked == true){

        wearSearchWW = "category_730_Exterior%5B%5D=tag_WearCategory3&"
    }   
    else{
        wearSearchWW = ""
    }         
    if(document.getElementById('wearBS').checked == true){

        wearSearchBS = "category_730_Exterior%5B%5D=tag_WearCategory4&"
    }
    else{
        wearSearchBS = ""
    }

    var stickers = '"'+stickerSearch +'"'+" "+'"'+stickerSearch2+'"'+" " +'"'+stickerSearch3+'"'+" " +'"'+stickerSearch4+'"'
    var wearCategory = ""
    var weapon =  document.getElementById("weaponSelector").value;
    var gunType = document.getElementById("typeSelector").value;
    var query = 'https://steamcommunity.com/market/search?q='+stickers+'&descriptions=1&category_730_ItemSet%5B%5D=any&'+wearSearchFN+wearSearchMW+wearSearchFT+wearSearchWW+wearSearchBS+'category_730_Weapon%5B%5D='+weapon+'&category_730_Quality%5B%5D='+gunType+'#p1_price_asc';
    window.open(query, '_blank');

}

function searchMarket(){


    Hashnames = {"ESLKatowice14":"Katowice 2014",
                "ESLCologne14":"Cologne 2014",
                "ESLKatowice15":"Katowice 2015",
                "IntelRio22":"Rio 2022",
                "PGLAntwerp22":"Antwerp 2022",
                "PGLStockholm21":"Stockholm 2021",
                "FACEITLondon18":"London 2018",
                "StarLadderBerlin19":"Berlin 2019",
                "ELEAGUEBoston18":"Boston 2018",
                "ELEAGUEAtlanta17":"Atlanta 2017",
                "ESLCologne16":"Cologne 2016",
                "MLGColumbus16":"MLG Columbus 2016",
                "ClujNapoca2015":"Cluj-Napoca 2015",
                "DreamHack14":"DreamHack 2014",
                "DreamHack13":"",
                "RMR20":"2020 RMR",
                "ESLKatowice19":"Katowice 2019",
                "PGLKrakow17":"Krakow 2017",
                "ESLCologne15":"Cologne 2015",
                "Misc":"",
                "Paris23": "Paris 2023"}
    var weaponSearch = document.getElementById("weaponSelector").value;
    var typeSearch = document.getElementById("typeSelector").value;

    try{
        var stickerSearch = document.getElementById("selectedStickerImage").src;
        stickerSearch = stickerSearch.split("/")[7].substring(0, stickerSearch.split("/")[7].length-4).replaceAll("_","%20")+"%20"+ Hashnames[stickerSearch.split("/")[6]]
    }
    catch {
        var stickerSearch = ""   
    }

    try{
        var stickerSearch2 = document.getElementById("selectedSticker2Image2").src;
        stickerSearch2 = stickerSearch2.split("/")[7].substring(0, stickerSearch2.split("/")[7].length-4).replaceAll("_","%20")+"%20"+ Hashnames[stickerSearch2.split("/")[6]]
    }
    catch {
        var stickerSearch2 = ""   
    }

    try{
        var stickerSearch3 = document.getElementById("selectedSticker3Image3").src;
        stickerSearch3 = stickerSearch3.split("/")[7].substring(0, stickerSearch3.split("/")[7].length-4).replaceAll("_","%20")+"%20"+ Hashnames[stickerSearch3.split("/")[6]]
    }   
    catch {
        var stickerSearch3 = ""   
    }

    try{
        var stickerSearch4 = document.getElementById("selectedSticker4Image4").src;
        stickerSearch4 = stickerSearch4.split("/")[7].substring(0, stickerSearch4.split("/")[7].length-4).replaceAll("_","%20")+"%20"+ Hashnames[stickerSearch4.split("/")[6]]
    }
    catch {
        var stickerSearch4 = ""   
    }
    

    if(document.getElementById('wearFN').checked == true){

        wearSearchFN = "category_730_Exterior%5B%5D=tag_WearCategory0&"
    }
    else{
        wearSearchFN = ""
    }
    if(document.getElementById('wearMW').checked == true){

        wearSearchMW = "category_730_Exterior%5B%5D=tag_WearCategory1&"
    }        
    else{
        wearSearchMW = ""
    }    
    if(document.getElementById('wearFT').checked == true){

        wearSearchFT = "category_730_Exterior%5B%5D=tag_WearCategory2&"
    }    
    else{
        wearSearchFT = ""
    }        
    if(document.getElementById('wearWW').checked == true){

        wearSearchWW = "category_730_Exterior%5B%5D=tag_WearCategory3&"
    }   
    else{
        wearSearchWW = ""
    }         
    if(document.getElementById('wearBS').checked == true){

        wearSearchBS = "category_730_Exterior%5B%5D=tag_WearCategory4&"
    }
    else{
        wearSearchBS = ""
    }
    
    var stickers = stickerSearch +" "+stickerSearch2+" " +stickerSearch3+" " +stickerSearch4
    var wearCategory = ""
    var weapon =  document.getElementById("weaponSelector").value;
    var gunType = document.getElementById("typeSelector").value;
    var query = 'https://steamcommunity.com/market/search?q='+'"'+stickers+'"'+'&descriptions=1&category_730_ItemSet%5B%5D=any&'+wearSearchFN+wearSearchMW+wearSearchFT+wearSearchWW+wearSearchBS+'category_730_Weapon%5B%5D='+weapon+'&category_730_Quality%5B%5D='+gunType+'#p1_price_asc';
    window.open(query, '_blank');
    
}

function clearStickerSelection(){

    document.getElementById("selectedSticker").innerHTML =""
    document.getElementById("selectedSticker2").innerHTML =""
    document.getElementById("selectedSticker3").innerHTML =""
    document.getElementById("selectedSticker4").innerHTML =""

}
function getImages(){

var tournamantName = document.getElementById("tournamentSelector").value
updateStickers(tournamantName)
}




function displayStickerSelected(stickerdiv,value,imagez){
    var img = document.createElement("IMG");
    url = "/static/stickers/"+value+".png"
    img.src = url;
    img.id = stickerdiv+imagez;
    var myVariable = value
    img.style.width = "100%";
    img.style.height = "auto";
    img.addEventListener("click", function(){removeSelected(stickerdiv) });; 
    document.getElementById(stickerdiv).appendChild(img);

}

function removeSelected(id){
    document.getElementById(id).innerHTML =""
}

function stickerSelected(value){
    var contentCheck = document.getElementById("selectedSticker").innerHTML ===""
    var contentCheck2 = document.getElementById("selectedSticker2").innerHTML ==="";
    var contentCheck3 = document.getElementById("selectedSticker3").innerHTML ==="";
    var contentCheck4 = document.getElementById("selectedSticker4").innerHTML ==="";
    if(contentCheck==true){
        displayStickerSelected("selectedSticker",value,"Image");

    }

    else if(contentCheck2==true){
        displayStickerSelected("selectedSticker2",value,"Image2");
   
    }
    else if(contentCheck3==true){
        displayStickerSelected("selectedSticker3",value,"Image3");
   
    }

    else if(contentCheck4==true){
        displayStickerSelected("selectedSticker4",value,"Image4");
   
    }
    else{
        alert("Sticker selection full")
    }

    
    }

function makeImages(value,stickerType){
    var img = document.createElement("IMG");
    url = "/static/stickers/"+stickerType+"\\"+value+".png"
    img.src = url;
    img.id = ""+stickerType+"\\"+value;
    var myVariable = value
    img.style.width = "8%";
    img.style.height = "auto"; 
    img.addEventListener("click", function(){stickerSelected(img.id) });;
    document.getElementById(stickerType+'Content').appendChild(img);

}

function updateStickers(tournamantName){

    document.getElementById('PaperContent').innerHTML = "";
    document.getElementById('HoloContent').innerHTML = "";
    document.getElementById('FoilContent').innerHTML = "";
    document.getElementById('GoldContent').innerHTML = "";

    document.getElementById('stickerDescPaper').innerHTML = tournamantName + " Paper Stickers";
    document.getElementById('stickerDescHolo').innerHTML = tournamantName + " Holo Stickers";
    document.getElementById('stickerDescFoil').innerHTML = tournamantName + " Foil Stickers";
    document.getElementById('stickerDescGold').innerHTML = tournamantName + " Gold Stickers";


    stickerNames = JSON.parse(document.getElementById(tournamantName+'_filespaper').textContent).sort();
    if (stickerNames.length > 0) {
    for (let i = 0; i < stickerNames.length; i++) {
        makeImages(stickerNames[i],"Paper");
     
    }
    }
    else
    {
        document.getElementById('PaperContent').innerHTML = "No paper stickers exist for "+tournamantName;

    }
    stickerNames = JSON.parse(document.getElementById(tournamantName+'_filesholo').textContent).sort();
    if (stickerNames.length > 0) {
        for (let i = 0; i < stickerNames.length; i++) {
        makeImages(stickerNames[i],"Holo");
    }

    }
    else{
        document.getElementById('HoloContent').innerHTML = "No holo stickers exist for "+tournamantName;

    }
    
    stickerNames = JSON.parse(document.getElementById(tournamantName+'_filesfoil').textContent).sort();
    if (stickerNames.length > 0) {
    for (let i = 0; i < stickerNames.length; i++) {
        makeImages(stickerNames[i],"Foil");
    }
}
    else{
        document.getElementById('FoilContent').innerHTML = "No foil stickers exist for "+tournamantName;
    }

    stickerNames = JSON.parse(document.getElementById(tournamantName+'_filesgold').textContent).sort();
    if (stickerNames.length > 0) {

    for (let i = 0; i < stickerNames.length; i++) {
        makeImages(stickerNames[i],"Gold");
    }
}
    else{
        document.getElementById('GoldContent').innerHTML = "No gold stickers exist for "+tournamantName;
    }
}


function openTitleTab(tabName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabTitlecontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(tabName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
    }

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
    

    function openTabContent(evt, tabName) {
        // Declare all variables
        var i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tabName+'Content').style.display = "block";
        evt.currentTarget.className += " active";
    }
    
