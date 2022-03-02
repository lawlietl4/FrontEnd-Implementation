/*
1. method /param overriding -> child overrides parent method
2. method overloading -> same name methods (JavaScript doesn't support this)
3. interfaces / abstract classes implements
*/
export class User {
	firstName: string;
	age: number;
	email: string;

	constructor(firstName: string, email: string, age: number) {}
}

class BaseUser extends User {
	protected role: string;

	public hasAllAccess(): boolean {
		return this.role === "Admin";
	}
}

export class SuperAdmin extends BaseUser {
	role = "Admin";
	password: string;

	constructor(firstName: string, lastName: string, age: number) {
		super(firstName, lastName, age);
	}

	//override
	public hasAllAccess(): boolean {
		return true;
	}

	//overload failure
	// public hasAllAccess(user: User) {
	//     return User.age > 18 && this.role;
	// }

	// to fix:
	// solution 1:
	// public hasAllAccess(user?: User): boolean { return user.age > 18 && this.role; }
	// solution 2:
	// public hasAllAccess(user = new User('Nicholas', 'Roberson', 20)): boolean { return user.age > 18 && this.role; }
}
