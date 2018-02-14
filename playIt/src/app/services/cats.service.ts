import { Injectable } from '@angular/core';

@Injectable()
export class CatsService {
  private allCats: any[] = [];
  private id: number = 0;
  testData = [
    {name: 'Gloria', sex: 'female', age: 26},
    {name: 'Alla', sex: 'female', age: 28},
    {name: 'Barbara', sex: 'female', age: 41},
    {name: 'John', sex: 'male', age: 18},
    {name: 'Ben', sex: 'male', age: 22},
    {name: 'Mike', sex: 'male', age: 35}
  ];
  constructor() {
    for(let i = 0; i < this.testData.length; i++) {
      if(1) {
        console.log(this.testData[i]);
      }
    }
    this.generateCats(3);
  }
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
  generateCats(catsNumber) {
    catsNumber = catsNumber ? catsNumber : 1;
    let words = ['Rock', 'Paper', 'Scissor', 'Tampon', 'Chipa', 'Kyzya'];
    for(let i = 0; i < catsNumber; i++) {
      this.addCat(words[Math.floor(Math.random()*words.length)],words[Math.floor(Math.random()*words.length)],words[Math.floor(Math.random()*words.length)]);
    }
  }
}
