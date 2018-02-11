import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {
  private messages: any[] = [];
  constructor() {}
  getMessages() {
    return [...this.messages];
  }
  addMessage(title, message) {
    this.messages.push({title: title, message: message});
  }
}
