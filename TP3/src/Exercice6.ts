
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Student extends Person {
    school: string;

    constructor(name: string, age: number, school: string) {
        super(name, age);
        this.school = school;
    }

    greet(): void {
        super.greet();
        console.log(`I study at ${this.school}.`);
    }
}

abstract class Shape {
    abstract area(): number;
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
}

interface Drivable {
    drive(): void;
}

class Car implements Drivable {
    model: string;

    constructor(model: string) {
        this.model = model;
    }

    drive(): void {
        console.log(`The ${this.model} is driving 🚗`);
    }
}


const p = new Person("Ismail", 20);
p.greet();

const s = new Student("Ali", 21, "ENSI");
s.greet();

const c = new Circle(5);
console.log("Circle area:", c.area());

const r = new Rectangle(4, 6);
console.log("Rectangle area:", r.area());

const car = new Car("Tesla");
car.drive();
