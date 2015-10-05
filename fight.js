//Variables
playing = true
while (playing){
monsters = ["A dragon flies overhead, spewing flames everywhere!", "An ogre appears to take back his swamp!", "A goblin tries to steal your gold!"]
monstersChoice = monsters[Math.floor(Math.random()*3.5)]
alert(monstersChoice);
if(monstersChoice === monsters[0]){
    var enemyName = ["Dragon", "dragon"];
    var enemySpeed = 25;
    var enemyHealth = 75;
    var enemyDodgeVariation = ["You roll away from the dragon's burning flames!", "You block the dragon's fire with your shield.", "You jump over the dragon's tail, barely getting grazed.", "Taking cover from a rock, you dodge the blast of fire directed at your way.", "You parry the dragons attack! Now is your time!"]
    var enemyVariation = ["The dragon slams it's tail down and covers you in dust! Your eyes hurt so much you take ", "The dragon spews it's firey breath at you and singes your hair off for ", "The dragon swings it's tail at you for ", "The dragon brings it's claw so close you can taste it. You take "];
    var enemyAttackdmg = Math.floor(Math.random()*12);
    var enemyHitChance = Math.floor(Math.random()*15);
    var enemyDodgeChance = 0; //Dragons can't dodge
    var enemyWinMessage = "The dragon falls down like a mighty... Well, dragon. You've slain the dragon! You win!";
    var enemyLoseMessage = "The dragon stomps on you! You're crushed by the heavy weight, and are now a pancake. You lose.";
    var enemyFastMessage = "You run away from the dragon, who is too lazy to chase after you. ...I guess you win?";
    var enemySlowMessage = "You tried to run away from the dragon, but it sees your lame attempt, and decides to gobble you up.";
} else if(monstersChoice === monsters[1]){
    var enemyName = ["Ogre", "ogre"];
    var enemySpeed = 10;
    var enemyHealth = 50;
    var enemyDodgeVariation = ["You dodge the ogre's club!", "You avoid his oinion breath!", "The ogre misses his grab.", "You shield your eyes from his repulsiveness.", "The ogre misses his kick.", "You dodge the orge's punch!" ];
    var enemyVariation = ["The ogre's onion breath dealt ", "The ogre's repulsiveness dealt ", "The ogre's meaty hands hit you for ", "The ogre punches you with all his might ", "The ogre's donkey kicks your knees for ", "The ogre hits you with his club "];
    var enemyAttackdmg = Math.floor(Math.random()*10);
    var enemyHitChance = Math.floor(Math.random()*12);
    var enemyDodgeChance = Math.floor(Math.random()*10);
    var enemyWinMessage = "You defeated the ogre! You get to keep his swamp!";
    var enemyLoseMessage = "The ogre kicks you out of his swamp and smites you, as you were too weak for him.";
    var enemySlowMessage = "You try to run, but the ogre cathes you and gobbles you up!"
    var enemyFastMessage = "You're super speedy and escape the ogre! You win!" //placeholder
} else if(monstersChoice === monsters[2]){
    var enemyName = ["Goblin", "goblin"];
    var enemySpeed = 50;
    var enemyHealth = 30;
    var enemyDodgeVariation = ["You dodge the goblin's dagger", "You jump over you goblin's leg sweep!", "You swipe the goblin's hands before he can poke your eyes", "You dodge the goblin's kidney punch", "You duck to avoid the goblin's drop kick", "You matrix dodge the goblin's dagger" ]; // Possible for the goblin to take when he misses the drop kick? 
    var enemyVariation = ["The goblin shanks you with his dagger and deals ", "The goblin sweeps your legs out from under you and deals ", "The goblin manages to poke your eyes and dealt ", "The goblin punches you in your kidney for ", "The goblin drop kicks you in the face to deal ", "The goblin throws his dagger at you and dealt " ]; 
    var enemyAttackdmg = Math.floor(Math.random()*8);
    var enemyHitChance = Math.floor(Math.random()*20);
    var enemyDodgeChance = Math.floor(Math.random()*15); //Real luck if you're able to dodge this
    var enemyWinMessage = "You defeated the goblin and keep your gold. Win win scenario! You win!";
    var enemyLoseMessage = "You've suffered enough damage that the goblin gets his goblin friends and they steal your stuff! You lose.";
    var enemyFastMessage = "goblin is sanic and steals your gold anyways, you lose" // placeholder
    var enemySlowMessage = "goblin is sanic and steals your gold anyways, you lose" // placeholder
    
}
// prompt Variables
var whatDo = prompt("Quickly! What do you do?", "You can run, attack, or hide.").toLowerCase();
var strength = prompt("Are you strong?").toLowerCase();
var reflexes = prompt("Are you fast?").toLowerCase();
var weapons = ["Bow and Arrows", "Sword", "Bombs"] //Will add staff system later, this is to show them what weapon they can choose.
// User Variables
var userHealth = 50;
var userSpeed = [];
var userDodgeChance = [];
if(reflexes === "yes"){
    var userSpeed = 50;
    var userDodgeChance = Math.floor(Math.random()*17.5);
} else {
    var userSpeed = 10;
    var userDodgeChance = Math.floor(Math.random()*12);
}
var userAttack = {
    long:Math.floor(Math.random()*15),
    medium:Math.floor(Math.random()*10),
    short:Math.floor(Math.random()*8.21)
};

switch(whatDo){
    case "attack":
    var weaponChoice = prompt("What kind of weapon do you want to use? You can use a " + weapons[0] + ", a " + weapons[1] + ", or " + weapons[2] + ".").toLowerCase();
    
    switch(weaponChoice){
        case "sword":
            var swordLength = prompt("How long is your sword?", "Short, medium, or long?").toLowerCase();
                if(strength === "yes" && swordLength === "medium"){
                alert("You're strong enough to wield a shield along with your medium-length sword!");
                var confirmShield = confirm("Do you want to use a shield? Your speed will be lowered by a small amount.");
                if(confirmShield === true){
                    var userHealth = 50 + Math.floor(Math.random()*12.5);
                    var userSpeed = 40;
                }
                }
            if(swordLength === "long" && strength === "yes"){
                userAttack.long;
            } else if(swordLength === "medium" && reflexes === "yes"){
                userAttack.medium;
                var enemyHitChance = enemyHitChance - 5;
            } else if(swordLength === "medium" && reflexes === "yes" && strength === "yes"){
                userAttack.medium;
        } else if(swordLength === "short" && reflexes === "yes" && monsters[2]){
            var enemyHitChance = Math.floor(Math.random()*10);
            var enemyDodgeChance = Math.floor(Math.random()*10);
        } else { 
            if(monstersChoice[0] || mosntersChoice[1]){
               userHealth = 0;
        } else {
            console.log();
        }
        }
        break;
        case "bow and arrows":
            //ENTER CODE or DESCRIPTION FOR BOW & ARROWS HERE
        break;
        case "bombs":
            //ENTER CODE or DESCRIPTION FOR BOMBS HERE
        break;
    }

while(enemyHealth > 0 && userHealth > 0){
    if(enemyHitChance >= userDodgeChance){
    console.log();
    if(monstersChoice[0]){
        enemyHitChance = Math.floor(Math.random()*15);
    } else if(monstersChoice[1]){
        enemyHitChance = Math.floor(Math.random()*12);
    } else if(monstersChoice[2]){
        enemyHitChance = Math.floor(Math.random()*20);
    }
    
} else {
    enemyAttackdmg = 0;
    if(monsters[0]){
        enemyHitChance = Math.floor(Math.random()*15);
    } else if(monsters[1]){
        enemyHitChance = Math.floor(Math.random()*12);
    } else if(monsters[2]){
        enemyHitChance = Math.floor(Math.random()*20);
    }
}

    if(enemyAttackdmg > 0){
        alert(enemyVariation[Math.floor(Math.random()*6)] + enemyAttackdmg + " damage!");
    } else {
        alert(enemyDodgeVariation[Math.floor(Math.random()*6)]);
    }
    userHealth = userHealth - enemyAttackdmg;
    if(monstersChoice[0]){
    enemyAttackdmg =  Math.floor(Math.random()*12);
} else if(monstersChoice[1]){
    enemyAttackdmg = Math.floor(Math.random()*10);
}
    switch(swordLength){
        case "long":
            alert("You did " + userAttack.long + " damage to the " + enemyName[1] + ".");
            enemyHealth = enemyHealth - userAttack.long;
            userAttack.long = Math.floor(Math.random()*10.3);
        break;
        case "medium":
            alert("You did " + userAttack.medium + " damage to the " + enemyName[1] + ".");
            enemyHealth = enemyHealth - userAttack.medium;
            userAttack.medium = Math.floor(Math.random()*10);
        break;
        default:
        console.log();
    }
    
    
}
if(enemyHealth <= 0 && userHealth > 0){
    alert(enemyWinMessage);
    console.log("Win");
    
} else if (enemyHealth > 0 && enemyHealth <= 0) {
    alert(enemyLoseMessage);
    console.log("Lose");
} else {
    console.log("Something went wrong");
}
break;
case "run":
    if(reflexes === "yes"){
            alert(enemyFastMessage);
        } else {
            alert(enemySlowMessage);
        }
break;
case 'hide':
        alert(enemyHideMessage);
break;
default :
    alert("You did not folow rules and therfore lose.");
    



}
var playing = confirm("Want to play again?");
}
   
//IT JUST WERKS
