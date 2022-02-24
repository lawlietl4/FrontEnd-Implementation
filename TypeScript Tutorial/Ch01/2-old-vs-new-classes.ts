export class Message {
    title;
    message;
    id;
}//create class and variables are any type, this is old type

function Message2(title, message, id) {
    this.title = title;
    this.message = message;
    this.id = id;
} //this is new type

const message2 = new Message2('hello','world','Infinity');