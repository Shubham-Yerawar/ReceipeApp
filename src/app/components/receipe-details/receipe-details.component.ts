import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IReceipe } from '../../models/receipe';
import { ReceipesService } from '../../services/receipes/receipes.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { IShoppingList } from "../../models/shopping-list";
import { ShoppingService } from "../../services/shopping/shopping.service";
import { CanComponentDeactivate } from '../../guards/can-deactivate/can-deactivate.guard';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-receipe-details',
  templateUrl: './receipe-details.component.html',
  styleUrls: ['./receipe-details.component.css']
})
export class ReceipeDetailsComponent implements OnInit, CanComponentDeactivate {

  rid : number;
  selectedReceipe : IReceipe;
  editMode : boolean = false;


  localReceipeForm : IReceipe;
  receipeForm : FormGroup;
  listIngredients : IShoppingList;

  constructor(private _route : ActivatedRoute, private _receipeService : ReceipesService,
  private _router: Router ,  private _shoppingService : ShoppingService) { }

  ngOnInit() {
    this._route.params.subscribe(
      (params) => {
        this.rid = +params.id;
        this.selectedReceipe = this._receipeService.getReceipeById(this.rid);
      }
    );

    this.localReceipeForm = this.selectedReceipe;

    this.receipeForm = new FormGroup({
      'id' : new FormControl(this.localReceipeForm.id, Validators.required),
      'name': new FormControl(this.localReceipeForm.name, Validators.required),
      'image' : new FormControl(this.localReceipeForm.image, Validators.required),
      'desc' : new FormControl(this.localReceipeForm.desc, Validators.required),
      'ingredients' : new FormArray([
        // this.initIngredients()
      ])
  });

  let userFormAddlength = this.receipeForm.get('ingredients')['controls'].length;
  let userModelAddlength = this.localReceipeForm.ingredients.length;
  let diff = Math.abs(userFormAddlength - userModelAddlength );

  if(diff !=0){
    for(let i=0; i<diff; i++){
      if(userFormAddlength > userModelAddlength ){
        <FormArray>this.receipeForm.controls['ingredients']['controls'].pop();
      }else{
        this.addIngredients();
      }
    }
  }

  // this.user = this.userForm.value;
  this.receipeForm.setValue(this.localReceipeForm);

  }

  toShoppingList(){
    // console.log("redirect to shopping list called with add of items");
    // console.log( this.receipeForm.get('ingredients')['controls'] );
    let userFormAddlength = this.receipeForm.get('ingredients')['controls'].length;
    for(let i=0; i < userFormAddlength; i++ ){
      // console.log(this.receipeForm.get('ingredients')['controls'][i].controls.name.value);
      let name= this.receipeForm.get('ingredients')['controls'][i].controls.name.value;
      let qty = this.receipeForm.get('ingredients')['controls'][i].controls.qty.value;
      this._shoppingService.addIngredient(name,qty);
    }
  }

  editReceipe(){
    this.editMode = !this.editMode;
  }
  initIngredients(){
    return new FormGroup({
      'name' : new FormControl(null,Validators.required),
      'qty' : new FormControl(null,Validators.required)
    });
  }

  addIngredients(){
    // console.log("add is clicked 1");
    const control = <FormArray> this.receipeForm.controls['ingredients'];
    const addctrl = this.initIngredients();

    control.push(addctrl);
    // console.log("add is clicked 2");
  }

  removeIngredient(i : number){
    const control = <FormArray> this.receipeForm.controls['ingredients'];
    control.removeAt(i);
  }

  saveClicked(){
    console.log("saved form ",this.receipeForm);
    this.localReceipeForm = this.receipeForm.value;
    console.log("  ** ", this.localReceipeForm);
    this._receipeService.updateReceipe(this.localReceipeForm);
    this.localReceipeForm=null;
    this.receipeForm.reset();
    this.editMode = !this.editMode;
    this._router.navigate(['/receipe-list']);
  }
  

  cancelClicked(){
    // go back to default component
    // this._router.navigate(['/receipe-list']);
    this.editMode = !this.editMode;
    this._router.navigate(['/receipe-list']);

  }


  deleteReceipe(){
    console.log("delete called for " + this.selectedReceipe.id);
    this._receipeService.deleteReceipe(this.selectedReceipe.id);
    this._router.navigate(['/receipe-list']);
  }

  CanDeactivate():boolean | Observable<boolean> | Promise<boolean> {
    if(!this.editMode) return true;
    return confirm("the changes havenot been saved! Are you sure to proceed?");
  };
}
