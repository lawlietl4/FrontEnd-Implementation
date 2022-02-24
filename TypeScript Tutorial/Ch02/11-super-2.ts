export class Animal {
    age: number;
    legs: number;
    name: string;
    lives = 1;

    constructor(age: number, legs: number, name: string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }

    meow(): string {
        return 'roar roar roar';
    }
}

export class Cat extends Animal {
    lives = 9;//overwrote super.lives
    constructor(data: { age: number, legs: number, name: string }) {
        super(data.age, data.legs, data.name);
    }

    meow(): string {
        super.meow();
        super.lives;

        return 'Meow Meow Meow';
    }
}
