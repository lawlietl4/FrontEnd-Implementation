export class User {
	firstName: string;
	lastName: string;
	email: string;

	constructor(firstName: string, lastName: string, email: string) {}

	doesEmailMatch(email: string): boolean {
		return this.email === email;
	}
}
//legacy style of above
function UserLegacy(firstName, lastName, email) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;

	this.doesEmailMatch = function (email) {
		return this.email === email;
	};
}

const user = new UserLegacy('Nicholas', 'Roberson','fake@notgiven.com');
