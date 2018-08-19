import { Component, OnInit } from '@angular/core';
import { IShoppingList } from "../../models/shopping-list";
import { ShoppingService } from "../../services/shopping/shopping.service";
import { FormGroup, FormArray, FormControl, Validators } from "@angular/forms";
import { CanComponentDeactivate } from '../../guards/can-deactivate/can-deactivate.guard';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, CanComponentDeactivate {
 

  shoppingList : IShoppingList[];
  editMode : boolean = false;
  shoppingForm : FormGroup;

  constructor(private _shoppingService : ShoppingService) { }

  ngOnInit() {
    this.shoppingList = this._shoppingService.getShoppingList();

    this.shoppingForm = new FormGroup({
      'ingredients' : new FormArray([])
    });

  //   let userFormAddlength = this.shoppingForm.get('ingredients')['controls'].length;
  //   let userModelAddlength = this.shoppingList.length;
  //   let diff = Math.abs(userFormAddlength - userModelAddlength );
  //  // console.log(this.shoppingForm.get('ingredients').value);
  //   // console.log(this.shoppingList);
    
  //   if(diff !=0){
  //     for(let i=0; i<diff; i++){
  //       if(userFormAddlength > userModelAddlength ){
  //         <FormArray>this.shoppingForm.controls['ingredients']['controls'].pop();
  //       }else{
  //         this.addIngredients();
  //       }
  //     }
  //   }
  
  //   // this.user = this.userForm.value;
  //   this.shoppingForm.controls.ingredients.setValue(this.shoppingList);

  this.check();
    
  }

  initIngredients(){
    return new FormGroup({
      'name' : new FormControl(null,Validators.required),
      'qty' : new FormControl(null,Validators.required)
    });
  }

  addIngredients(){
    // console.log("add is clicked 1");
    const control = <FormArray> this.shoppingForm.controls['ingredients'];
    const addctrl = this.initIngredients();

    control.push(addctrl);
    // console.log("add is clicked 2");
  }

  deleteItem(i : number){
    this.shoppingList.splice(i,1);
  }

  editClicked(){
    this.editMode = !this.editMode;
  }

  cancelClicked(){
    this.check();
    this.editMode = !this.editMode;
  }

  updateClicked(){
    this.shoppingList = this.shoppingForm.controls.ingredients.value;
    // this._shoppingService.addToShoppingList(this.shoppingList);
    this._shoppingService.setShoppingList(this.shoppingList);
    this.editMode = !this.editMode;

  }

  clearAllClicked(){
    this.shoppingForm.reset();
    this.check();
    // this.editMode = !this.editMode;
  }

  removeIngredient(i: number){
    const control = <FormArray> this.shoppingForm.controls['ingredients'];
    control.removeAt(i);
  }

  check(){
    let userFormAddlength = this.shoppingForm.get('ingredients')['controls'].length;
    let userModelAddlength = this.shoppingList.length;
    let diff = Math.abs(userFormAddlength - userModelAddlength );
   // console.log(this.shoppingForm.get('ingredients').value);
    // console.log(this.shoppingList);
    
    if(diff !=0){
      for(let i=0; i<diff; i++){
        if(userFormAddlength > userModelAddlength ){
          <FormArray>this.shoppingForm.controls['ingredients']['controls'].pop();
        }else{
          this.addIngredients();
        }
      }
    }
  
    // this.user = this.userForm.value;
    this.shoppingForm.controls.ingredients.setValue(this.shoppingList);
  }

  checkoutClicked(){
    this._shoppingService.deleteShoppingList();
  }

  CanDeactivate():boolean | Observable<boolean> | Promise<boolean> {
    if(!this.editMode) return true;
    return confirm("the changes havenot been saved! Are you sure to proceed?");
  };
}
