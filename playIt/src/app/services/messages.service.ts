import { Injectable } from '@angular/core';
import {Message} from './message.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class MessagesService {
  private messages: Message[] = [];
  updateMessagesEvent: Subject<boolean> = new Subject();
  id: number = 0;
  constructor() {}
  getMessages(): Message[] {
    return [...this.messages];
  }
  addMessage(title: string, message: string): void {
    this.messages.push(new Message(title, message, new Date(), this.id));
    this.id++;
    this.updateMessagesEvent.next(true);
  }
  editMessage(id, editedMessage): void {
    for(let i = 0; i < this.messages.length; i++) {
      if (this.messages[i].id === id) {
        Object.assign(this.messages[i], editedMessage);
        break;
      }
    }
    this.updateMessagesEvent.next(true);
  }
}
