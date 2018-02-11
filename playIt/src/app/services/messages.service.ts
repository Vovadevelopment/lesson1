import { Injectable } from '@angular/core';
import {Message} from './message.model';

@Injectable()
export class MessagesService {
  private messages: Message[] = [];
  id: number = 0;
  constructor() {}
  getMessages(): Message[] {
    return [...this.messages];
  }
  addMessage(title, message: Message): void {
    this.messages.push(new Message(title, message, new Date(), this.id));
    this.id++;
  }
  editMessage(id, editedMessage): void {
    for(let i = 0; i < this.messages.length; i++) {
      if (this.messages[i].id === id) {
        Object.assign(this.messages[i], editedMessage);
      }
    }
  }
}
