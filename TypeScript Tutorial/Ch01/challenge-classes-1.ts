/**
 * --------------------
 * Challenge 1: Classes
 * --------------------
 * 1. Create a User Class
 * 2. Add a firstName, lastName, and email property.
 * 3. Add a 
 */
export class User {
    firstName: string;
    lastName: string;
    email: string;
    constructor(firstname: string, lastname: string, email: string) {
        this.firstName = firstname;
        this.lastName = lastname;
        this.email = email;
    }
    get fullnameGet(): string {
        return `${this.firstName}, ${this.lastName}`;
    }
    emailCheck(email: string): boolean {
        return email === this.email;
    }
}