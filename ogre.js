//confrontation
confirm("An ogre appears, wanting to take back his swamp!");
//variables
var reflexes = prompt("Do you have fast reflexes?").toLowerCase();
var strength = prompt("Do you happen to be strong?").toLowerCase();
var whatDo = prompt("Now, what do you do?", "You can run, attack, or hide.").toLowerCase();
var swordLength = prompt("How Long is your sword? (Short, Medium, or Long)").toLowerCase();
var reactionTime = 30;
//If they have fast reflexes, give them a buff, but if they don't have fast reflexes, give them a debuff.
if(reflexes === "yes") {
    fastBuff = reactionTime - 10;
}
if(reflexes === "no") {
    fastDebuff = reactionTime + 10;
}
ogreVariation = ["The ogre's onion breath dealt ", "The ogre's repulsiveness dealt ", "The ogre's meat hands hit you for", "The ogre's amazingness and love wraps its hand around your heart for ", "The ogre's donkey kicks your knees for "];
confrontationEnd = false;
var ogreSpeed = 35;
var ogreHealth = 100;
var userHealth = 100;
var ogreAttack = Math.floor(Math.random() * 5);
//functions
var strengthFunct = function() {
    if(strength === "yes"){
        var userAttackLS = Math.floor(Math.random() * 6);
        while(ogreHealth < 0) {
            confirm("You hit the ogre for " + userAttackLS + " damage!");
            confirm(ogreVariation[Math.floor(Math.random()* 5)] + ogreAttack + " damage!");
            userHealth = userHealth - ogreAttack;
            ogreHealth = ogreHealth - userAttackLS;
        }
        if(ogreHealth === 0){
            confrontationEnd = false;
            confirm("You defeated the ogre! But... Is victory sweet? You have murdered the great ogre god Shrek. Never again will he grace you with his love. He will never grace anyone again with his love, because you have defeated him. R.I.P. Shrek 20 o' meme-20memeteen");
        }
        } else if(strength === "no"){
            confrontationEnd = false;
            confirm("The ogre kicks you out of his swamp and smites you as you are not strong enough to wield the sword. R.I.P. in pieces.");
            }
}
/* attackFunct = function(){
    //asking if they have a long sword, long sword means they need to be strong, short sword will result in death due to ogre's thick skin, and medium will take fast reflexes.
    
    
        } else if(swordLength === "medium" && reflexes === "yes") {
            var userAttackMS = Math.floor(Math.random() * 4);
            var ogreAttackPerc = Math.floor((Math.random() * 10) - Math.floor(Math.random()*5));
            while(ogreHealth < 0) {
                if(ogreAttackPerc <= 5){
                    confirm(ogreVariation[Math.floor(Math.random()*5)] + ogreAttack + " damage!");
                    confirm("You hit the ogre for " + userAttackMS + " damage!");
                    userHealth = userHealth - ogreAttack;
                    ogreHealth = ogreHealth - userAttackMS;
                } else if(ogreAttackPerc >= 6){
                    confirm("You roll out of the ogre's way!");
                    ogreAttack = 0;
                    confirm("You hit the ogre for " + userAttackMS + " damage!");
                }
            }
            if(ogreHealth === 0){
                confrontationEnd = false;
                confirm("You defeated the ogre! But... Is victory sweet? You have murdered the great ogre god Shrek. Never again will he grace you with his love. He will never grace anyone again with his love, because you have defeated him. R.I.P. Shrek 20 o' meme-20memeteen");
            } else if(userHealth === 0){
                confrontationEnd = false;
                confirm("You died to the ogre! Shrek has his swamp back. R.I.P.in pieces you filthy ciscum!");
            }
        }
};
*/
//cases
switch (whatDo) {
    case 'attack':
        confirm("Are you stupid, brave, or both?");
        /* while (!confrontationEnd){
            attackFunct(); */
            switch (swordLength) {
                case 'long':
                    while (confrontationEnd === false){
                   strengthFunct();
                    }
            break;
            }
    break;
    case 'run':
        if(reflexes === "yes"){
            confirm("You escape the swamp! No one got hurt, and Shrek has his swamp back. You are a good person. You shall recieve Shrek's blessing later in your life, when you really need it.");
        } else {
            confirm("You try to run, but the ogre smites you and stomps you into the ground. You die. R.I.P. filthy plebian, don't mess with Shrek!");
        }
    break;
    case 'hide':
        confirm("You tried to hide in HIS swamp. Seriously? Are you stupid? He found you and absolutely oblitterated you. Come on, fam.");
    break;
    default :
    confirm("You didn't do anything right and you just spilled your spaghetti. You spilt so much, everyone on earth died. R.I.P. spaghettimonster");
}
