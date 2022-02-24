export class Message {
    title: string;
    message: string;
    isSent: boolean;

    constructor(title:string,message:string){
        this.title = title;
        this.message = message;
        this.isSent = false;
    }
}//how to set variables explicitly

const message = new Message('Hello', 'World');