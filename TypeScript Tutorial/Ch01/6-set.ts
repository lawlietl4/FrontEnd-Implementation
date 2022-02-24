export class Message {
    title: string;
    message: string;
    private _isSent: boolean;
    set isSent(value: boolean){
        if (value === true){
            this.deliveryDate = new Date();
        }
        this._isSent = value;
    }

    get isSent(): boolean {
        return this.isSent;
    }
    deliveryDate: Date;

    constructor(title: string, message: string){
        this.title = title;
        this.message = message;
        this.isSent = false;
    }

    get messageStatus(): string{
        const sentMessage = this.isSent ? 'Has been set':'Has not been sent.';
        return `${this.message} | ${sentMessage}`;
    }//getters always require a return of some sort

    previewMessage(): string{
        return this.message.slice(0,10).concat('...');
    }
}

const message = new Message(
    'New course!!! Just 9.99',
    'Check out latest courses on OOP with TS'
)

message.isSent = true;
message.messageStatus;
message.previewMessage();