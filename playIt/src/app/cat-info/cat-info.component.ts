import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CatsService} from "../services/cats.service";


@Component({
  selector: 'app-cat-info',
  templateUrl: './cat-info.component.html',
  styleUrls: ['./cat-info.component.scss']
})
export class CatInfoComponent implements OnInit {
  @Input() cat;
  @Output() onCatDelete = new EventEmitter();
  hideInput: boolean = true;
  selected: boolean = false;
  editingCat = {name: '', color: '', weight: ''};
  constructor() { }

  ngOnInit() {
  }
  btnEditClick(cat) {
    this.selected = true;
    this.hideInput = false;
    this.editingCat = {...cat};
  }
  saveEditedCat(id) {
    this.hideInput = true;
    this.selected = false;
 //   this.catsService.editCat( id , this.editingCat);
  }
  btnDeleteClick(id){
    this.onCatDelete.emit(id)
  }
  btnCancelEdit () {
    this.hideInput = true;
    this.selected = false;
  }

}
