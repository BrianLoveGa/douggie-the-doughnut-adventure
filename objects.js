// // ///////////////////////
// // ///
// // ///     Classes & Donut Adventure
// // ///
// // ///     Brian Loveless week 2 thursday HW
// // ///
// // //////////////////////


// // //////////////////////
// // //// hamster
// // //////////////////////

// // // attributes:
// // // owner - string, initially set as an empty string
// // // name - string, set the name from parameter in constructor method
// // // price - integer, set as 15
// // // methods:
// // // wheelRun() - log "squeak squeak"
// // // eatFood() - log "nibble nibble"
// // // getPrice() - return the price

//////////////here///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Hamster {
    constructor (owner, name, price){
        this.owner = owner;
        this.name = name;
        this.price = price || 15;
}
    wheelRun(){
        console.log("squeak squeak");
    }
    eatFood(){
        console.log("nibble nibble");
    }
    getPrice() {
        return this.price;
    }
  
};

// // // works fine - just don't my node 100 lines long...
//////////////here///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let hal = new Hamster(" ", "hal the hamster");
console.log(hal);
console.log(hal.wheelRun());
console.log(hal.eatFood());
console.log(hal.getPrice());
console.log(`my name is ${hal.name} gotta run`);
console.log(hal.wheelRun());


// // ////  the code above returns the following - please ignore the undefined lines 
// // // Hamster { owner: ' ', name: 'hal the hamster', price: 15 }
// // // nibble nibble
// // // undefined
// // // 15
// // // undefined
// // // my name is hal the hamster gotta run
// // // Brians-Air:HW6_Classes_donut_adventure blove$ node objects.js 
// // // Hamster { owner: ' ', name: 'hal the hamster', price: 15 }
// // // squeak squeak
// // // undefined
// // // nibble nibble
// // // undefined
// // // 15
// // // undefined
// // // my name is hal the hamster gotta run
// // // squeak squeak
// // // undefined

// // /////////////part 1 hamster done


// // //////////////////////
// // /// part #2 - Person
// // //////////////////////



// // // attributes:
// // // name - set name from parameter in constructor method
// // // age - initially 0
// // // height - initially 0
// // // weight - initially 0
// // // mood - integer starting at 0 initially
// // // hamsters - empty array initially
// // // bankAccount - initially set to 0
// // // methods:
// // // getName() - returns name
// // // getAge() - returns age
// // // getWeight() - returns weight
// // // greet() - logs a message with person's name
// // // eat() - increment weight, increment mood
// // // exercise() - decrement weight
// // // ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
// // // buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())

//////////////here///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


class Person {
    constructor (name, age, height, weight, mood ) {
        this.name = name;
        this.age = age || 0;
        this.height = height || 0;
        this.weight = weight || 0;
        this.mood = mood || 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName() {
        console.log(`${this.name}`);
    }
    getAge() {
        console.log(`I am ${this.age} years old.`);
    }
    getWeight() {
        console.log(`${this.weight} pounds.`);
    }
    greet() {
        console.log(`hi my name is ${this.name} .`);
    }
    eat() {
      this.weight++ 
        this.mood++
        console.log(` new weight is ${this.weight} new mood is ${this.mood}.`);
    }
    exercise() {
        this.weight+=-1;
        console.log(`Good job you're at ${this.weight} pounds now`);
    }
    ageUp() {
       this.age++;
         this.height++;
         this.weight+=2;
         this.mood+=-2;
         this.bankAccount+=10;
    }
    buyHamster (hamster) {
     
        this.mood+=10;
        this.bankAccount-=hamster.getPrice();  
        this.hamsters.push(hamster);
    }
};

//// thanks to Johnathan Goldfuss for assistance on this push to hamster array

let jim = new Person("Jim", 10, 5, 100, 20);

//////////////here///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// works fine - just don't my node 100 lines long...

console.log("jim now start");
console.log(jim);


///////////// loops for the iterations

const fiveYears=(name)=>{
    for (let y=1;y<6;y++) {
        console.log(name.ageUp());
    }
};

const fiveEats=(name)=>{
    for (let e=1;e<6;e++) {
        console.log(name.eat());
    }
};

const spinClass=(name)=>{
    for (let g=0;g<5;g++) {
        console.log(name.exercise());
    }
};


const nineLevels=(name)=>{
    for (l=0;l<9;l++) {
        console.log(name.ageUp());
    }
};

const fifteenYearsGone=(name)=>{
    for (y=0;y<15;y++) {
        console.log(name.ageUp());
    }
};

console.log(jim.getAge())
fiveYears(jim);
console.log(jim.getAge())
console.log(jim.bankAccount);
console.log("checking beginning above and setup correct...... tim story below....");

let tim = new Person("Timmy");
console.log(tim);
fiveYears(tim);
console.log("5 year check");
console.log(tim);
fiveEats(tim);
console.log("5 eat check");
console.log(tim);
spinClass(tim);
console.log("5 work outs check");
console.log(tim);

nineLevels(tim);

console.log(tim.getAge());
let gus = new Hamster("Timmy", "Mr. Gus Gus the happy hamster");
console.log(tim);
console.log("has a hamster check?");
tim.buyHamster(gus);
console.log(tim);
console.log("well good hamster moves .... does 15 year loop work below?");
console.log(tim)
fifteenYearsGone(tim);
console.log(tim)
console.log("......................... .... does 15 year loop work above? do functions inline work below");
////// eat 2x and work out 2x

tim.eat(); tim.eat(); tim.exercise(); tim.exercise();

/// to loop or not to loop ..... hmmmmmm////////
console.log(".............everything above is the answers portion for q's 1- 11 - below is me trying to figure out a loop to take name in and which function and run x times............");
console.log(tim)

console.log(".............does dbl down work............");



//////////// so I understand repetition is tedious and should be avoided - but aren't we programmers lazy?
///// to write a loop to run a function twice and only twice seems like more work and more lines of code than just piling them up like i did at the end for the 2 eats and the 2 exercises function with 2 params - instead of 2 seperate loops 


const doubleDown=(name,formula)=>{
    for (y=0;y<2;y++) {
        console.log(name, formula);
    }
};
doubleDown(tim, tim.eat());
doubleDown(tim, tim.exercise());

console.log(tim)

console.log(".............well did it?????? did dbl down work............");

// ///  so it works - but also doesn't - values for wqeight aren't going up - likely not accessing the eat function correctly.....  but lines 239-246 are equivelant to line 226 - so in this case It looks to me that one line is easier to understand than 6 lines
