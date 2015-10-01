//Variables
monsters = ["A dragon flies overhead, spewing flames everywhere!", "An ogre appears to take back his swamp!", "A goblin tries to steal your gold!"]
alert(monsters[Math.floor(Math.random()*3.5)]);
if(monsters[0]){
    var enemyName = ["Dragon", "dragon"];
    var enemyHealth = 75;
    var enemyDodgeVariation = ["You roll away from the dragon's burning flames!", "You block the dragon's fire with your shield.", "You jump over the dragon's tail, barely getting grazed.", "Taking cover from a rock, you dodge the blast of fire directed at your way.", "You parry the dragons attack! Now is your time!"]
    var enemyVariation = ["The dragon slams it's tail down and covers you in dust! You're blinded!"];
    var enemyAttackdmg = Math.floor(Math.random()*12);
    var enemyHitChance = Math.floor(Math.random()*15);
    var enemyDodgeChance = 0; //Dragons can't dodge
} else if(monsters[1]){
    var enemyName = ["Ogre", "ogre"];
    var enemyHealth = 50;
    var enemyDodgeVariation = ["You dodge the ogre's club!", "You avoid his oinion breath!", "The ogre misses his grab.", "You shield your eyes from his repulsiveness.", "The ogre misses his kick.", "You dodge the orge's punch!" ];
    var enemyVariation = ["The ogre's onion breath dealt ", "The ogre's repulsiveness dealt ", "The ogre's meaty hands hit you for ", "The ogre punches you with all his might ", "The ogre's donkey kicks your knees for ", "The ogre hits you with his club "];
    var enemyAttackdmg = Math.floor(Math.random()*10);
    var enemyHitChance = Math.floor(Math.random()*12);
    var enemyDodgeChance = Math.floor(Math.random()*10);
} else if(monsters[2]){
    var enemyName = ["Goblin", "goblin"];
    var enemyHealth = 30;
    var enemyDodgeVariation = ["You dodge the godlin's dagger", "You jump over you goblin's leg sweep!", "You swipe the goblin's hands before he can poke your eyes", "You dodge the goblin's kidney punch", "You duck to avoid the goblin's drop kick", "You matrix dodge the goblin's dagger" ]; // Possible for the goblin to take when he misses the drop kick? 
    var enemyVariation = ["The goblin shanks you with his dagger and deals ", "The goblin sweeps your legs out from under you and deals ", "The goblin manages to poke your eyes and dealt ", "The goblin punches you in your kidney for ", "The goblin drop kicks you in the face to deal ", "The goblin throws his dagger at you and dealt " ]; 
    var enemyAttackdmg = Math.floor(Math.random()*8);
    var enemyHitChance = Math.floor(Math.random()*20);
    var enemyDodgeChance = Math.floor(Math.random()*15); //Real luck if you're able to dodge this
}
// Important Variables
var whatDo = prompt("Quickly! What do you do?", "You can run, attack, or hide.").toLowerCase();
var strength = prompt("Are you strong?").toLowerCase();
var reflexes = prompt("Are you fast?").toLowerCase();
var weapons = ["Bow and Arrows", "Sword", "Bombs"] //Will add staff system later, this is to show them what weapon they can choose.
var ogreHealth = 50;
var ogreAttackdmg = Math.floor(Math.random()*12);
var ogreHitChance = Math.floor(Math.random()*12);

var userHealth = 50;
var userAttack = {
    long:Math.floor(Math.random()*15),
    medium:Math.floor(Math.random()*10),
    short:0
};
function shield(strength, reflexes, weapons){
    if(strength === "yes" && reflexes === "yes" && weapons === "sword"){
        var userHealth = 75;
    } else {
        return 0
    }
}
switch(whatDo){
    case "attack":
    alert("Are you stupid, brave, or both?");
    
    var swordLength = prompt("How long is your sword?", "Short, medium, or long?").toLowerCase();
        if(swordLength === "long" && strength === "yes"){
            userAttack.long;
        } else if(swordLength === "medium" && reflexes === "yes"){
            userAttack.medium;
            var enemyHitChance = enemyHitChance - 5;
        } else if(swordLength === "medium" && reflexes === "yes" && strength === "yes"){
            userAttack.medium;
            shield(weapons[1], strength, reflexes);
        }
        } else if(swordLength === "short" && reflexes === "yes" && monsters[2]){
            var enemyHitChance = Math.floor(Math.random()*10);
            var enemyDodgeChance = Math.floor(Math.random()*10);
        } else {
                userHealth = 0;
        } 

while(enemyHealth > 0 && userHealth > 0){
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
    alert("You defeated the ogre! You get to keep his swamp!");
    console.log("Win");
    
} else if (ogreHealth > 0 && userHealth <= 0) {
    alert("The ogre kicks you out of his swamp and smites you, as you were too weak for him.");
    console.log("Lose");
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
var playAgain = confirm("You do want to play again, right?")
while (playAgain){
    
}
//IT JUST WERKS
