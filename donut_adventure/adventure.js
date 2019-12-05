alert ("donuts and rats oh my!");
console.log("rats and donuts oh my");

//////////////   hero    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Hero {
    constructor (name){
        this.name = name;
        this.health = 100;
        this.weapons = {
            sprinkleSpray: 5,
            sugarShock: 10
        };
        this.catchPhrases = ['i\'m fresher than day old pizza', 
        'you can\'t count my calories']
}
        talkSas() {
            let rUp = this.catchPhrases[Math.floor(Math.random()*2)];
            console.log(rUp);
        }
        announceHealth(){
            console.log("I am " + this.name + " my health is now " + this.health);
        }
        fight(target) {
            console.log(this.talkSas());
            console.log(this.name + " used sprinkle spray " + this.weapons.sprinkleSpray + " hitpoints dealt");
            console.log(target.name + " got hit with cheese grease, his health is down to");
            console.log(target.health += -5);
        }
        usePotion(){
            console.log(this.name + " used a health potion " );
            console.log(this.health+=50);
            this.announceHealth();
        }
        attack(target) {
            console.log(this.talkSas());
            console.log(this.name + " used  sugar shock 10 hitpoints dealt");
            console.log(target.name + " got hit with a sugar shock, his health is down to");
            console.log(target.health += -10);

        }
};

let dd = new Hero("Dougie the wonder Doughnut!");
////////////////////////////////////
///////     pizza rat!
////////////////////////////////////
class Enemy {
    constructor (name){
        this.name = name;
        this.health = 100;
        this.weapons = {
            pepperoniStars: 5,
            cheeseGrease: 10    
        };
        this.catchPhrases = ['i\'m youtube famous',
        'i\'m more dangerous than an uncovered sewer']
}
        talkSmack() {
            let rUp = this.catchPhrases[Math.floor(Math.random()*2)];
            console.log(rUp);
        }
        announceHealth(){
            console.log("I am " + this.name + " my health is " + this.health);
        }
        fight(enemy) {
            console.log(this.talkSmack());
            console.log(this.name + " used cheese grease " + this.weapons.cheeseGrease + " hitpoints dealt");
            console.log(enemy.name + " got hit with cheese grease, his health is down");
            console.log(enemy.health += -10);

        }
};


let pr = new Enemy("Sir nasty, the greasy Pizza Rat");

console.log("Our Story Begins on the mean streets where our hero dougie the wonder doughnut runs into the dreaded pizza rat");
/////// on the mean streets /////////////
console.log("....................prefight...........................")
dd.talkSas();
pr.talkSmack();
dd.announceHealth();
pr.announceHealth();
console.log("....................round one fight!...........................")
pr.fight(dd);
dd.fight(pr);
dd.fight(pr);

/////// time for a fight      //////////
//////// Huggggeeee thanks to Nathaniel for expalining the syntax missing from passing in parameters for the fight.
console.log(".....................second round......................");
doughnutAttack =()=>{dd.fight(pr)};
ratSmackdown =()=>{ pr.fight(dd)};

ratSmackdown();
doughnutAttack();
console.log(".....................third round......................");

const roundOne =()=>{
    for (let f = 1; f < 8; f++) {
        console.log(ratSmackdown());
        
    }
} ;


dd.fight(pr);
console.log(".....................Pizza rat says,\"\ can you handle my cheese grease super loop Dougie?\"\......................");
roundOne();

console.log(".....................4th  round......................");
// use a for loop to replace multiple console.logs to check game
/// must be too sleepy - can't get it will look norning
console.log("...................... Dougie says, \"\This potion will give me the strenght to finish you off you nasty vile mouse!\"\ !.......................");
dd.usePotion();

dd.attack(pr);
dd.attack(pr);

console.log("......................why are we fighting?.......................");
dd.announceHealth();
pr.announceHealth();
console.log("...................... Dougie says, \"\let's stop fighting and go get sushi.\"\ !.......................");
console.log("...................... Pizza Rat says, \"\sounds good to me Dougie.\"\ !.......................");
console.log("......................the end.......................");

//// I see now about loop and function to call a function or 2 and console.log it se we can see the results - I love gaming this is right up my alley - can't wait for tomorrow - 