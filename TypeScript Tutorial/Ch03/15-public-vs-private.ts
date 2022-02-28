export class Animal {
	age: number;
	private legs: number;
	name: string;

	constructor(age: number, legs: number, name: string) {
		this.age = age;
		this.legs = legs;
		this.name = name;
	}
}

export class Cat extends Animal {
	constructor(data: { age: number; legs: number; name: string }) {
		super(data.age, data.legs, data.name);
	}

    // public get ourLegs(){
    //     return this.legs;
    // }
}

const cat = new Cat({ age: 19, legs: 4, name: "Baby" });
cat.age; // public
cat.legs; // private