//Variables
alert("An ogre appears to take back his swamp!");
var whatDo = prompt("Now, what do you do?, You can run, attack, or hide.").toLowerCase();
var strength = prompt("Are you strong?").toLowerCase();
var reflexes = prompt("Are you fast?").toLowerCase();
switch(whatDo){
    case "attack":
    alert("Are you stupid, brave, or both?");
    var swordLength = prompt("Well, since you decided to attack, you must have a sword. How long is your sword?", "Short, medium, or long?").toLowerCase();
var userHealth = 100;
var ogreHealth = 100;
var ogreVariation = ["The ogre's onion breath dealt ", "The ogre's repulsiveness dealt ", "The ogre's meat hands hit you for ", "The ogre's amazingness and love wraps its hand around your heart for ", "The ogre's donkey kicks your knees for ", "The ogre sends all of it's memes at you for "];
var userAttack = {
    long:Math.floor(Math.random()*15),
    medium:Math.floor(Math.random()*10),
    short:0
};
var ogreAttackdmg = Math.floor(Math.random()*12);
var ogreHitChance = Math.floor(Math.random()*12);
if(swordLength === "long" && strength === "yes"){
    userAttack.long;
} else if(swordLength === "medium" && reflexes === "yes"){
    userAttack.medium;
    var ogreHitChance = ogreHitChance - 5;
} else if(swordLength === "short" && reflexes === "yes"){
    var userAttack = 0;
} else {
    userHealth = 0;
}

while(ogreHealth > 0 && userHealth > 0){
    if(ogreHitChance >= 4){
    console.log();
    ogreHitChance = Math.floor(Math.random()*12);
} else {
    ogreAttackdmg = 0;
    ogreHitChance = Math.floor(Math.random()*12);
}

    if(ogreAttackdmg > 0){
        alert(ogreVariation[Math.floor(Math.random()*5)] + ogreAttackdmg + " damage!");
    } else {
        alert("You dodged the ogre's attack!");
    }
    userHealth = userHealth - ogreAttackdmg;
    ogreAttackdmg = Math.floor(Math.random()*12);
    switch(swordLength){
        case "long":
            alert("You did " + userAttack.long + " damage to the ogre!");
            ogreHealth = ogreHealth - userAttack.long;
            userAttack.long = Math.floor(Math.random()*15);
        break;
        case "medium":
            alert("You did " + userAttack.medium + " damage to the ogre!");
            ogreHealth = ogreHealth - userAttack.medium;
            userAttack.medium = Math.floor(Math.random()*10);
        break;
        default:
        console.log();
    }
    
    
}
if(ogreHealth <= 0 && userHealth > 0){
    alert("You defeated the ogre! But... Is victory sweet? You have murdered the great ogre god Shrek. Never again will he grace you with his love. He will never grace anyone again with his love, because you have defeated him. R.I.P. Shrek 20 o' meme-20memeteen");
} else if (ogreHealth > 0 && userHealth <= 0) {
    alert("The ogre kicks you out of his swamp and smites you, as you were too weak for him.");
} else {
    console.log();
}
break;
case "run":
    if(reflexes === "yes"){
            alert("You escape the swamp! No one got hurt, and Shrek has his swamp back. You are a good person. You shall recieve Shrek's blessing later in your life, when you really need it.");
        } else {
            alert("You try to run, but the ogre smites you and stomps you into the ground. You die. R.I.P. filthy plebian, don't mess with Shrek!");
        }
break;
case 'hide':
        alert("You tried to hide in HIS swamp. Seriously? Are you stupid? He found you and absolutely oblitterated you. Come on, fam.");
break;
default :
    alert("You didn't do anything right and you just spilled your spaghetti. You spilt so much, everyone on earth died. R.I.P. spaghettimonster");
    
}
//IT JUST WERKS
