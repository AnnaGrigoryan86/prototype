// 1st method
/* function Person() {
    this.hashead = true;
    this.eyes = 'two';
}
function Man() {
    this.gender = "male";
}
function Beard() {
    this.hasBeard = true;
}
let person = new Person();
    Man.prototype = person;
let man = new Man();
    Beard.prototype = man;
let beard = new Beard();

*/

//2nd method

/*let person = Object.create(null, {
    eyes: {
        value: "two"
    },
    hashead: {
        value: true
    }
});    
let man = Object.create(person, {
    gender: {
        value: "male"
    }
});
let beard = Object.create(man, {
    hasBeard: {
        value: true
    }
}); 
   */


// 3rd method
function Person() {
    this.hashead = true;
    this.eyes = 'two';
}
function Man() {
    this.gender = "male";
}
function Beard() {
    this.hasBeard = true;
}
let person = new Person();
let man = new Man();
let beard = new Beard();
man.__proto__ = person;
beard.__proto__ = man;

console.log(beard.hasBeard);
console.log(beard.gender);
console.log(beard.hashead);
console.log(beard.eyes);
console.log(man.eyes);