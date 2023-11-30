function randomStrat(){
   
    const strats = [
    ["Fragile Cargo📦", "The bomb carrier must throw away all their weapons"],
    ["Chicken Hunter🐔", "Players must each kill a chicken before they can use their weapon"],
    ["Stephen Hawking👨🏽‍🦽", "You must crouch the whole round"],
    ["Mo Farah🏃", "Players must hold W key the whole round"],
    ["Conscientious Objector🙅", "Yellow cannot buy a gun or nades"],
    ["Spawn Jail⛓️🧑⛓️", "Players can only leave spawn one at a time. The next player can only go once the preceeding player has died or all players if bomb has been planeted"],
    ["Sexy Body💀❌🔫", "No headshots - if one player fails the whole team can only use pistols next round"],
    ["No hope for your scope🤞", "Scoped Weapons only - No scopes allowed"],
    ["The Classic😎", "Scouts n Deagles only"],
    ["No Kevlar allowed🪖", "You may not buy amour this round"],
    ["Snake🐍", "Players must crouch walk in a line, order of players must be based on leaderboard. can move normally once bomb has been planted"],
    ["Electric Prizes⚡", "Players can only use a Zeus - weapons obtained from killing the enemy are usable"],
    ["BOT Waldo you're my only hope😫", "Top fragger cannot leave spawn until the bottom fragger has killed someone or bomb has been planted"],
    ["Feel the power💥", "Pick a site - Negev and decoys only"],
    ["Twin Towers🏢🏢", "2 x two man towers. Last player must hold bomb or rush enemies "],
    ["One in the Chamber1️⃣", "Team buys one gun - Players must rotate the weapon after 1 shot"],
    ["Rewind Time🔙", "Players can only walk backwards to move. Once a player dies round resumes as normal"],
    ["CYKA BLAYT 🏃🏃🏃🏃🏃", "RUSH B NO STOP!"],
    ["I Promise it's 🅱", "Stack B"],
    ["🅰 is the way", "Stack A"],
    ["10 guns will be funs🤚🤚","All players must buy dualies"],
    ["'He's a one shot'👺","Players must lie about the estimated damage delt to opponents"],
    ["It's time for a Change 𐀏 ","Change your crosshair to the enemy of the same leaderboard colour"],
    ["Low on guns😞","The teams allowed weapons are: 1 Pistol, 1 Shotgun, 1 Sniper, 1 Rifle, 1 Zeus - Blue determines gun allocation"],
    ["Sugar Daddy🤑","Only the wealthiest player can buy"],
    ["Bait Sandwich🥪","The two bottom players must rush with p90s as bait. The top fragger must follow next with the rest of the players protecting behind with shotugns"],
    ["S1mple strat💪","one player buys a gun, everyone else must follow and pick up gun when he dies"],
    ["VIP Extraction🌟","Green is the VIP, your objective is to win the round without Green dying. If Green dies remaining players must leave the game to forfeit the round"],
    ["Are you okay bro?🏳️‍🌈","For the next 5 ROUNDS yellow must Meow when they get a kill and UwU when they die"],
    ["COMS!!!!🎙️","Players must communicate everything in significant details e.g 'shot a man with black jeans, white shirt and white hair; he looked about 55'"],
    ["Every Randomer❌🎤","Players must mute their microphone for the whole round"],
    ["Trading💱","Every kill you must take your opponents weapon"],
    ["Peek me now👀","All players must buy a scout and go Middle. "],
    ["Smoke B no Stop🅱💨","As T's you must create a path into B only using smokes."],
    ["Debility with no utility ❌💣💨🔥❌","You may not buy any grenades this round"],
    ["One-Taps only1️⃣","You must wait one full second between shots, caught cheating will result in using a Zeus only for the next round"],
    ["Gun Roulette🎲🎰","All players must auto buy (f3) at the start of the round. Players can not buy any aditional equpment"],
    ["'Cum Swap Sites'💱","All players must swap positions, if T each player tells another where to go"],
    ["Unexpected Leader🫅","All players must listen to the bottom fragger, players must be told or ask before doing anything"],
    ['Around the world🌍','Mid -> A -> B > Mid -> Plant A'],
    ["A Hard Choice🧐","You can only buy a shotgun if you have amour"],
    ["Post Plant🧊 ","When Bomb has been planted you can no longer move. As CT's you must hold down W when bomb has been planted"],
    ["Odd or Even🔢","If your personal score is Even go A, if odd go B"],
    ["Designated 'Moral Support'💌","bottom 4 players rush while the top player stays behind 'inspiring' them."],
    ["Russian Calllouts🤬","You must incorrectly callout everything"],
    ["Ready...Set...🚦","Only leave spawn when bomb has been planted"],
    ["A usual CS game🤬","Bottom player must make a plan, you must insult the plan at every point of failure"],
    ["'Over rotating💱'","Players must all go B, wait 15 seconds then rotate to A. Repeat until bomb has been planted"],
    ["💯'SWAG'😎","Players must all buy a MAG-7. when a kill has been made everyone must type SWAG in the chat"],
    ["COVID!🦠📏","Nobody can be in the same room as another person."]
    ];
    const randomIndex = Math.floor(Math.random() * strats.length);
    
    initTitle(strats[randomIndex][0]);
    init(strats[randomIndex][1])
    
}


var dictionary = "0123456789qwertyuiopasdfghjklzxcvbnm!?></\a`~+*=@#$%".split('');

var el = document.querySelector('h3');
var btn = document.querySelector('.button');
var el2 = document.querySelector('h1');

var ran = function() {
    return Math.floor(Math.random() * dictionary.length)
}

var ranString = function(amt) {
    var string = '';
    for(var i = 0; i < amt; i++) {
        string += dictionary[ran()];
    }
    return string;
}


var init = function(str) {
    var count = str.length;
    var delay = 50;

    btn.classList.remove('show');
    btn.classList.remove('hover');
    btn.onclick = null;
    el.innerHTML = '';

var gen = setInterval(function() {
    el.setAttribute('data-before', ranString(count));
    el.setAttribute('data-after', ranString(count));
    if(delay > 0) {
    delay--;
    }
    else {
    if(count < str.length) {
        el.innerHTML += str[str.length - count-1];
    }
    count--;
    if(count === -1) {
        clearInterval(gen);
        showButton();
            
       
}
}
},32);
}
var initTitle = function(str) {
    var count = str.length;
    var delay = 50;

    btn.classList.remove('show');
    btn.classList.remove('hover');
    btn.onclick = null;
    el2.innerHTML = '';

var gen = setInterval(function() {
    el2.setAttribute('data-before', ranString(count));
    el2.setAttribute('data-after', ranString(count));
    if(delay > 0) {
    delay--;
    }
    else {
    if(count < str.length) {
        el2.innerHTML += str[str.length - count-1];
    }
    count--;
    if(count === -1) {
        clearInterval(gen);
        
    }
    }
}, 32);
}
var showButton = function() {
    btn.onclick =randomStrat;
    btn.classList.add('show');
    btn.classList.add('hover');
}
var desctext =[
"Looking for some strats?😀",
"Best strats EU (Promise😉)",
"Works against Global Elites 11/10🙄",
"🎵When the IGL dont work like he used to before🎶"]
const randomIndexDescText = Math.floor(Math.random() * desctext.length);
initTitle("Strat Roulette🎲");
init(desctext[randomIndexDescText]);
