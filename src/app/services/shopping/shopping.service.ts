import { Injectable } from '@angular/core';
import { IShoppingList } from '../../models/shopping-list';

@Injectable()
export class ShoppingService {

  shoppingList : IShoppingList[];
  constructor() { 
    this.shoppingList=[];
  }

  getShoppingList() : IShoppingList[]{
    return this.shoppingList;
  }

  addToShoppingList( list : IShoppingList[]){
    // this.shoppingList.concat(list);
    for(let i=0;i< list.length; i++){
      this.addIngredient(list[i].name,list[i].qty);
    }
  }

  addIngredient(name : string, qty : number){
    let newItem = { 'name' : name,
                    'qty' : qty            
    };


    let found = false;
    let index = -1;
    for(let i=0; i<this.shoppingList.length;i++ ){
      if(this.shoppingList[i].name == newItem.name){
        found = true;
        index =i;
      }
    }
    
    if(found){
      // let index = this.shoppingList.indexOf(newItem);
      // this.shoppingList[index].name = newItem.name;
      this.shoppingList[index].qty  =  this.shoppingList[index].qty + newItem.qty;
    }else{
      this.shoppingList.push(newItem);
    }

  }

  setShoppingList(list : IShoppingList[]){
    this.shoppingList = list;

  }

  deleteShoppingList(){
    this.shoppingList = [];
  }

}
