//confrontation
confirm("An ogre appears, wanting to take back his swamp!");
//variables
var reflexes = prompt("Do you have fast reflexes?").toLowerCase();
var strengh = prompt("Do you happen to be strong?").toLowerCase();
var whatDo = prompt("Now, what do you do?", "You can run, attack, or hide.").toLowerCase();
var reactionTime = 30;
//If they have fast reflexes, give them a buff, but if they don't have fast reflexes, give them a debuff.
if(reflexes === "yes") {
    fastBuff = reactionTime - 10;
}
if(reflexes === "no") {
    fastDebuff = reactionTime + 10;
}
//functions
ogreMeme = function(){
    ogreVariety = Math.floor(Math.random()*100);
    if(ogreVariety >= 0){
        ogreAttackType = "The ogre's onion breath dealt";
    } else if(ogreVariety >= 20) {
        ogreAttackType = "The ogre's repulsiveness dealt";
    } else if(ogreVariety >= 40) {
        ogreAttackType = "The ogre's meaty hands hit you for";
    } else if(ogreVariety >= 60) {
        ogreAttackType = "The ogre's amazingness and love wraps its hands around your heart for";
    } else if(ogreVariety >= 80) {
        ogreAttackType = "The ogre's donkey kicks your knees for ";
    }
};
attackFunct = function(){
    //asking if they have a long sword, long sword means they need to be strong, short sword will result in death due to ogre's thick skin, and medium will take fast reflexes.
    var ogreHealth = 100;
    var userHealth = 100;
    var ogreAttack = Math.floor(Math.random() * 5);
    var swordLength = prompt("Do you have a sword with you?", "If so, how long? (Short, Medium, or Long)").toLowerCase();
    if(swordLength === "long" && strength === "yes"){
        var userAttack = Math.floor(Math.random() * 6);
        while(ogreHealth === 100) {
            confirm("You hit the ogre for" + userAttack + " damage!");
            confirm(ogreAttackType + ogreAttack + " damage!");
        }
    }
};
