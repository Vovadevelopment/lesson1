import { Injectable } from '@angular/core';

@Injectable()
export class CatsService {
  private allCats: any[] = [];
  private id: number = 0;
  constructor() { }
  getCats() {
    return [...this.allCats];
  }
  addCat(name, color, weight) {
    this.allCats.push({name: name, color: color, weight: weight, id: this.id});
    this.id++;
  }

  editCat(id, newCat) {
    for(let i = 0; i < this.allCats.length; i++) {
      if(this.allCats[i].id === id) {
        Object.assign(this.allCats[i], newCat);
        break;
      }
    }
    // console.log(newCat);
  }
  deleteCat(id) {
    for(let i = 0; i < this.allCats.length; i++) {
      if(this.allCats[i].id === id) {
        this.allCats.splice(i, 1);
        break;
      }
    }
  }
}
