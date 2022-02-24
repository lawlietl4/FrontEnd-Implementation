const message1 = { title: undefined, message: undefined, id: undefined };
const message2 = { title: undefined, message: undefined, id: undefined };
const message3 = { title: undefined, message: undefined, id: undefined };
//variables are declared this way

export class Message{
    title;
    message;
    id;
}
//class that has variables that don't have type

const message4 = new Message();
const message5 = new Message();
//making new instances of the class Message