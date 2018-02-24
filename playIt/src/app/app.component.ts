import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessagesService} from './services/messages.service';
import {Subscriber} from 'rxjs/Subscriber';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  messages: any[];
  messagesSub: Subscription;
  message = {
    title: '',
    message: '',
  };

  constructor(private messagesService: MessagesService) {

  }

  ngOnInit() {
    this.messages = this.messagesService.getMessages();
    this.messagesSub = this.messagesService.updateMessagesEvent.subscribe((data) => {
      this.messages = this.messagesService.getMessages();
    })
  }

  ngOnDestroy() {

  }

  addMessage() {
    this.messagesService.addMessage(this.message.title, this.message.message);
    this.message = {
      title: '',
      message: '',
    };
  }

  onEditMessage(event) {
    this.messagesService.editMessage(event.id, event.message);
  }

}
