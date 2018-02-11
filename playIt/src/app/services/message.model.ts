export class Message {
  title: string;
  message: string;
  time: Date;
  id: number;

  constructor(title, message, time, id) {
    this.title = title;
    this.message = message;
    this.time = time;
    this.id = id;
  }
}
