//Base / Parent Class
export class Animal {
    age: number;
    legs: number;
    name: string;

    constructor(age: number, legs: number, name: string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
}

// Derived /Child class(s) /same shape
export class Dog implements Animal{
    age: number;
    legs: number;
    name: string;

    woof(): string{
        return 'WOOF! WOOF! WOOF!';
    }
}