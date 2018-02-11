import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {
  private messages: any[] = [];
  id: number = 0;
  constructor() {}
  getMessages() {
    return [...this.messages];
  }
  addMessage(title, message) {
    this.messages.push({title: title, message: message, time: new Date(), id: this.id});
    this.id++;
  }
}
