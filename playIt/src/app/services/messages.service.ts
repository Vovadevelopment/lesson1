import { Injectable } from '@angular/core';
import {Message} from './message.model';

@Injectable()
export class MessagesService {
  private messages: any[] = [];
  id: number = 0;
  constructor() {}
  getMessages() {
    return [...this.messages];
  }
  addMessage(title, message) {
    this.messages.push(new Message(title, message, new Date(), this.id));
    this.id++;
  }
  editMessage(id, editedMessage) {
    for(let i = 0; i < this.messages.length; i++) {
      if (this.messages[i].id === id) {
        Object.assign(this.messages[i], editedMessage);
      }
    }
  }
}
