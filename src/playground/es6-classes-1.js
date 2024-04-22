class Person {
    constructor(name = 'Anon', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        //return 'Hi ' + this.name;
        return `Hi I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old!`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major; //!! just changes it to a boolean value
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.` 
        }
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.homeLocation) {
             greeting += ` I'm visiting from ${this.homeLocation}.`
        }
        return greeting
    }
}

const you = new Person('Clara', 23);
const me = new Student('Clara', 18, 'Business Analytics')
const them = new Traveller('Bhas', 35, 'India')
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(them);
console.log(them.getGreeting());
console.log(them.getDescription());
