import {Component, OnInit,} from '@angular/core';

import {CatsService} from "./services/cats.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  catName:string = "";
  catColor:string ="";
  catWeight:string ="";
  allCats: any[] = [];
  isSelected:boolean = false;
  // selected: boolean = false;
  // selected;
  // hideInput;
  // editingCat;
  // editingCat = {name: '', color: '', weight: ''};




  constructor(private catsService: CatsService) {

  }
  ngOnInit() {
    this.allCats = this.catsService.getCats();


  }

  addCat() {
    this.catsService.addCat(this.catName, this.catColor, this.catWeight);
    this.allCats = this.catsService.getCats();
    this.isSelected = true;
    // console.log(this.catName, this.catColor, this.catWeight);
    this.catName = "";
    this.catColor = "";
    this.catWeight = "";
  }
  // btnEditClick(cat) {
  //   this.selected = true;
  //   this.hideInput = false;
  //   this.editingCat = {...cat};
  //
  // }
  // saveEditedCat(id) {
  //   this.hideInput = true;
  //   this.selected = false;
  //   this.catsService.editCat( id , this.editingCat);
  //   this.allCats = this.catsService.getCats();
  // }
  btnDeleteClick(id){
    this.catsService.deleteCat(id);
    this.allCats = this.catsService.getCats();
  }
  // btnCancelEdit () {
  //   this.hideInput = true;
  //   this.selected = false;
  // }


}


