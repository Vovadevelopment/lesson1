import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from '../services/message.model';

@Component({
  selector: 'app-massage',
  templateUrl: './massage.component.html',
  styleUrls: ['./massage.component.css']
})
export class MassageComponent implements OnInit {
  @Input() message: Message;
  @Output() onMessageEdit: EventEmitter<any> = new EventEmitter();
  isEditing: boolean;
  editingMessage = {
    title: '',
    message: ''
  };
  constructor() { }

  ngOnInit() {

  }

  editMessage() {
    this.onMessageEdit.emit({id: this.message.id, message: this.editingMessage});
    this.isEditing = false;
  }


  cancelEdit() {
    this.isEditing = false;
  }

  startEditMessage() {
    this.isEditing = true;
    this.editingMessage = {
      title: this.message.title,
      message: this.message.message
    };
  }
}
