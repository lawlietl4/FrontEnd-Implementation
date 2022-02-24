export class Message {
    title: string;
    message: string;
    isSent: boolean;

    constructor(title: string, message: string){
        this.title = title;
        this.message = message;
        this.isSent = false;
    }

    previewMessage(): string{
        return this.message.slice(0,10).concat('...');
    }//methods are no more than just a function within a class
}

const message = new Message(
    'New course!!! Just 9.99',
    'Check out latest courses on OOP with TS'
)

message.previewMessage();