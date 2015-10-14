jQuery.fn.extend({
game: function(){
    function nicememe(){
//Variables
playing = true
while (playing){
var monsters = ["<p>A dragon flies overhead, spewing flames everywhere!</p>", "<p>An ogre appears to take back his swamp!</p>", "<p>A goblin tries to steal your gold!</p>"]
var monstersImage = ["<img src= \"http://cdn.playbuzz.com/cdn/845ff10a-f092-4740-b866-36d9e705cd95/79d156c0-83f3-4af2-826e-f963b2283042.jpg\"; height = \"250px\"; width = \"auto\"; />", "<img src= \"http://pre14.deviantart.net/7da2/th/pre/i/2013/349/d/c/ogre__troll_or_something___by_dancuka-d6y1v8n.png\"; height = \"250px\"; width = \"auto\"; />", "<img src = \"http://orig15.deviantart.net/8931/f/2012/282/a/0/goblin_dancer_by_mariusbota-d5h9uyi.jpg\"; height = \"250px\"; width = \"auto\"; />"]
var monsterRandomChoice = Math.floor(Math.random()*3)
var monstersChoice = monsters[monsterRandomChoice]
var monstersImageChoice = monstersImage[monsterRandomChoice]
$(monstersChoice).appendTo('#monstersdiv');
$(monstersImageChoice).appendTo('#monstersdiv');
if(monstersChoice === monsters[0]){
    var enemyName = ["Dragon", "dragon"];
    var enemySpeed = 25;
    var enemyHealth = 75;
    var enemyDodgeVariation = ["<p>You roll away from the dragon's burning flames!</p>", "<p>You block the dragon's fire with your shield.</p>", "<p>You jump over the dragon's tail, barely getting grazed.</p>", "<p>Taking cover from a rock, you dodge the blast of fire directed at your way.</p>", "<p>You parry the dragons attack! Now is your time!</p>"]
    var enemyVariation = ["<p>The dragon slams it's tail down and covers you in dust! Your eyes hurt so much you take ", "<p>The dragon spews it's firey breath at you and singes your hair off for ", "<p>The dragon swings it's tail at you for ", "<p>The dragon brings it's claw so close you can taste it. You take "];
    var enemyAttackdmg = Math.floor(Math.random()*12);
    var enemyHitChance = Math.floor(Math.random()*15);
    var enemyDodgeChance = 0; //Dragons can't dodge
    var enemyWinMessage = "<p>The dragon falls down like a mighty... Well, dragon. You've slain the dragon! You win!</p>";
    var enemyLoseMessage = "<p>The dragon stomps on you! You're crushed by the heavy weight, and are now a pancake. You lose.</p>";
    var enemyFastMessage = "<p>You run away from the dragon, who is too lazy to chase after you. ...I guess you win?</p>";
    var enemySlowMessage = "<p>You tried to run away from the dragon, but it sees your lame attempt, and decides to gobble you up.</p>";
    var enemyHideMessage = "<p>The dragon burns the entire field! Taking shelter in a cave, you made a grave mistake. It's the dragon's cave...</p>"
} else if(monstersChoice === monsters[1]){
    var enemyName = ["Ogre", "ogre"];
    var enemySpeed = 10;
    var enemyHealth = 50;
    var enemyDodgeVariation = ["<p>You dodge the ogre's club!", "<p>You avoid his oinion breath!</p>", "<p>The ogre misses his grab.</p>", "<p>You shield your eyes from his repulsiveness.</p>", "<p>The ogre misses his kick.</p>", "<p>You dodge the orge's punch!</p>" ];
    var enemyVariation = ["<p>The ogre's onion breath dealt ", "<p>The ogre's repulsiveness dealt ", "<p>The ogre's meaty hands hit you for ", "<p>The ogre punches you with all his might ", "<p>The ogre's donkey kicks your knees for ", "<p>The ogre hits you with his club "];
    var enemyAttackdmg = Math.floor(Math.random()*10);
    var enemyHitChance = Math.floor(Math.random()*12);
    var enemyDodgeChance = Math.floor(Math.random()*10);
    var enemyWinMessage = "<p>You defeated the ogre! You get to keep his swamp!</p>";
    var enemyLoseMessage = "<p>The ogre kicks you out of his swamp and smites you, as you were too weak for him.</p>";
    var enemySlowMessage = "<p>You try to run, but the ogre cathes you and gobbles you up!</p>"
    var enemyFastMessage = "<p>You're super speedy and escape the ogre! You win!</p>" //placeholder
    var enemyHideMessage = "<p>you hid and lost</p>" //quick placeholder
} else if(monstersChoice === monsters[2]){
    var enemyName = ["Goblin", "goblin"];
    var enemySpeed = 50;
    var enemyHealth = 30;
    var enemyDodgeVariation = ["<p>You dodge the goblin's dagger", "<p>You jump over you goblin's leg sweep!", "<p>You swipe the goblin's hands before he can poke your eyes", "<p>You dodge the goblin's kidney punch", "<p>You duck to avoid the goblin's drop kick", "<p>You matrix dodge the goblin's dagger" ]; // Possible for the goblin to take when he misses the drop kick? 
    var enemyVariation = ["<p>The goblin shanks you with his dagger and deals ", "<p>The goblin sweeps your legs out from under you and deals ", "<p>The goblin manages to poke your eyes and dealt ", "<p>The goblin punches you in your kidney for ", "<p>The goblin drop kicks you in the face to deal ", "<p>The goblin throws his dagger at you and dealt " ]; 
    var enemyAttackdmg = Math.floor(Math.random()*8);
    var enemyHitChance = Math.floor(Math.random()*20);
    var enemyDodgeChance = Math.floor(Math.random()*15); //Real luck if you're able to dodge this
    var enemyWinMessage = "<p>You defeated the goblin and keep your gold. Win win scenario! You win!</p>";
    var enemyLoseMessage = "<p>You've suffered enough damage that the goblin gets his goblin friends and they steal your stuff! You lose.</p>";
    var enemyFastMessage = "<p>The goblin is too fast for you and steals your gold anyways, you lose.</p>" // placeholder
    var enemySlowMessage = "<p>The goblin is too fast for you and steals your gold anyways, you lose.</p>" // placeholder
    var enemyHideMessage = "<p>You hid, but the goblin knows the terrain better than you. The goblin manages to find you and steal your gold when you aren't looking. You're poor again!</p>" //placeholder
    
}
// prompt Variables
var whatDo = prompt("Quickly! What do you do?", "You can run, attack, or hide.").toLowerCase();
var strength = prompt("Are you strong?").toLowerCase();
var reflexes = prompt("Are you fast?").toLowerCase();
var weapons = ["Bow and Arrows", "Sword"] //Will add staff system later, this is to show them what weapon they can choose.
// User Variables
var userHealth = 50;
var userSpeed = [];
var userDodgeChance = [];
var userHitChance = Math.floor(Math.random()*10);
if(reflexes === "yes"){
    var userSpeed = 50;
    var userDodgeChance = Math.floor(Math.random()*17.5);
} else {
    var userSpeed = 10;
    var userDodgeChance = Math.floor(Math.random()*12);
}
var userAttack = {
    long:Math.floor(Math.random()*10),
    medium:Math.floor(Math.random()*9),
    short:Math.floor(Math.random()*7.21),
    bowgob:Math.floor(Math.random()*7.5),
    bowdrag:Math.floor(Math.random()*9),
    bowogr:Math.floor(Math.random()*8)
};

switch(whatDo){
    case "attack":
    var weaponChoice = prompt("What kind of weapon do you want to use? You currently have in your handy dandy backpack, a " + weapons[1] + " and " + weapons[0] + ".").toLowerCase();
    
    switch(weaponChoice){
        case "sword":
            var userAttacks = ["<p>You perform a thrust at the " + enemyName[1] + " with your sword for ", "<p>You bring your sword down on the " + enemyName[1] + " for "] 
            var swordLength = prompt("How long is your sword?", "Short, medium, or long?").toLowerCase();
                if(strength === "yes" && swordLength === "medium"){
                alert("You're strong enough to wield a shield along with your medium-length sword!");
                var confirmShield = confirm("Do you want to use a shield? Your speed will be lowered by a small amount. Press OK to take the shield.");
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
            alert("So be it! You pick up your bow, and your quiver full of arrows!")
            if(monstersChoice[2]){
                var enemyDodgeChance = Math.floor(Math.random*30);
                var userDamageAlert = "<p>You did " + userAttack.bowgob + " damage to the " + enemyName[1] + ".</p>";
		$(userDamageAlert).appendTo('#combatlog');
                enemyHealth = enemyHealth - userAttack.long;
                userAttack.bowgob = Math.floor(Math.random()*7.5);
            } else if(monstersChoice[1]){
                var userDamageAlert = "<p>You did " + userAttack.bowogr + " damage to the " + enemyName[1] + ".</p>";
		$(userDamageAlert).appendTo('#combatlog');
            } else if(monstersChoice[0]){
                var userDamageAlert = "<p>You did " + userAttack.bowdrag + " damage to the " + enemyName[1] + ".</p>";
		$(userDamageAlert).appendTo('#combatlog');
            }
            
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
        var enemyAttackMessage = enemyVariation[Math.floor(Math.random()*6)] + enemyAttackdmg + " damage!</p>";
        $(enemyAttackMessage).appendTo('#combatlog');
    } else {
        var enemyDodgeMessage = enemyDodgeVariation[Math.floor(Math.random()*6)];
        $(enemyAttackMesasge).appendTo('#combatlog');
    }
    userHealth = userHealth - enemyAttackdmg;
    if(monstersChoice[0]){
    enemyAttackdmg =  Math.floor(Math.random()*12);
} else if(monstersChoice[1]){
    enemyAttackdmg = Math.floor(Math.random()*10);
}
    switch(swordLength){
        case "long":
            var userDamageAlert = "<p>You did " + userAttack.long + " damage to the " + enemyName[1] + ".</p>";
	    $(userDamageAlert).appendTo('#combatlog');
            enemyHealth = enemyHealth - userAttack.long;
            userAttack.long = Math.floor(Math.random()*10.3);
        break;
        case "medium":
           var userDamageAlert = userAttacks[Math.floor(Math.random())] + userAttack.medium + " health points.</p>";
           $(userDamageAlert).appendTo('#combatlog');
            enemyHealth = enemyHealth - userAttack.medium;
            userAttack.medium = Math.floor(Math.random()*10);
        break;
        default:
        alert("You did not follow rules and therefore lose.");
    }
    
    
}
if(enemyHealth <= 0 && userHealth > 0){
    $(enemyWinMessage).appendTo('#wlmessage');
    console.log("Win");
    
} else if (enemyHealth > 0 && userHealth <= 0) {
    $(enemyLoseMessage).appendTo('#wlmessage');
} else {
    $("Something went wrong").appendTo('#wlmessage');
}
break;
case "run":
    if(reflexes === "yes"){
            $(enemyFastMessage).appendTo('#wlmessage');
        } else {
            $(enemySlowMessage).appendTo('#wlmessage');
        }
break;
case 'hide':
        $(enemyHideMessage).appendTo('#wlmessage');
break;
default :
    alert("You did not follow rules and therefore lose.");
    



}
var playing = confirm("Want to play again?");
}
   
   
//IT JUST WERKS

}
console.log(nicememe());
}
});
$(document).ready(function(){
	$("#weaponsdiv").hide();
    
	$('#meme').click(function(){
	$
    $('#meme').game();
});
});
