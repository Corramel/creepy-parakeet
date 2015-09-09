//Variables
var swordLength = prompt("How long is your sword?", "Short, medium, or long?").toLowerCase();
var strength = prompt("Are you strong?").toLowerCase();
var reflexes = prompt("Are you fast?").toLowerCase();
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
    alert("You did it! You have slain the ogre.");
} else if (ogreHealth > 0 && userHealth <= 0) {
    alert("You have been gobbled up by the ogre!");
} else {
    console.log();
}
