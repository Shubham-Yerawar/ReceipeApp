import { Injectable } from '@angular/core';
import { IReceipe } from '../../models/receipe';

@Injectable()
export class ReceipesService {

  receipes: IReceipe[];

  constructor() {
    // static database for receipe

    this.receipes = [
      {
        'id': 1,
        'name': 'Chana-Poha',
        'image': 'http://1.bp.blogspot.com/-5ZCnLKQx9oA/VUBJG388fmI/AAAAAAAAEYQ/JxVzGXkZr98/s1600/IMG_4343.JPG',
        'desc': 'Under construction poha',
        'ingredients' : [
          { 'name' : 'poha',
            'qty' : 2
          },
          { 'name' : 'vegies',
          'qty' : 3
          },
          { 'name' : ' tez masala',
            'qty' : 5
          } 
        ]
      },
      {
        'id': 2,
        'name': 'Dosa',
        'image': 'https://indianhealthyrecipes.com/wp-content/uploads/2016/03/dosa.jpg',
        'desc': 'Under construction dosa',
        'ingredients' : [
          { 'name' : 'flour',
            'qty' : 4
          },
          { 'name' : 'vegies',
          'qty' : 3
          },
          { 'name' : 'masala',
            'qty' : 2
          } 
        ]
      }
    ];
  }

  getAllReceipes() : IReceipe[]{
    return this.receipes;
  }

  getReceipeById(rid : number) : IReceipe{
    return this.receipes.filter(
      (receipe) => receipe.id == rid )[0];
  }

  addReceipe(newReceipe : IReceipe){
    this.receipes.push(newReceipe);
  }

  deleteReceipe(id : number){
    for(let i=0;i<this.receipes.length;i++){
        if(this.receipes[i].id == id){
          this.receipes.splice(i,1);
        }
    }
  }

  updateReceipe(updatedReceipe : IReceipe){
    for(let i=0;i<this.receipes.length;i++){
      if(this.receipes[i].id == updatedReceipe.id){
        this.receipes[i] = updatedReceipe;
      }
    }
  }

  getNextId():number{
    let ids : number[] = [];
    for(let i=0;i<this.receipes.length;i++){
      ids.push(this.receipes[i].id);
    }
    ids.sort();
    return ids[ids.length-1]+1;
  }
}
