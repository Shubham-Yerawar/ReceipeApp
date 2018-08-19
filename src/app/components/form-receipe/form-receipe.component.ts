import { Component, OnInit } from '@angular/core';
import { IReceipe } from '../../models/receipe';
import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { ReceipesService } from '../../services/receipes/receipes.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanDeactivateGuard, CanComponentDeactivate } from '../../guards/can-deactivate/can-deactivate.guard';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-form-receipe',
  templateUrl: './form-receipe.component.html',
  styleUrls: ['./form-receipe.component.css']
})
export class FormReceipeComponent implements OnInit,CanDeactivateGuard  {
  
  editMode : boolean = false;
  localReceipeForm : IReceipe;
  receipeForm : FormGroup;
  id: number;

  constructor(private _receipesService : ReceipesService, private _router : Router) { }

  ngOnInit() {
    
    this.id = this._receipesService.getNextId();

    this.localReceipeForm = null;
    // {
    //   'id': 1,
    //   'name': 'Chana-Poha',
    //   'image': 'http://1.bp.blogspot.com/-5ZCnLKQx9oA/VUBJG388fmI/AAAAAAAAEYQ/JxVzGXkZr98/s1600/IMG_4343.JPG',
    //   'desc': 'Under construction poha',
    //   'ingredients' : [
    //     { 'name' : 'poha',
    //       'qty' : 2
    //     },
    //     { 'name' : 'vegies',
    //     'qty' : 3
    //     },
    //     { 'name' : ' tez masala',
    //       'qty' : 5
    //     } 
    //   ]
    // };


    this.receipeForm = new FormGroup({
      'id' : new FormControl(this.id, Validators.required),
      'name': new FormControl(null, Validators.required),
      'image' : new FormControl(null, Validators.required),
      'desc' : new FormControl(null, Validators.required),
      'ingredients' : new FormArray([
        // this.initIngredients()
      ])
  });
    // this.receipeForm = new FormGroup({
    //     'id' : new FormControl(this.localReceipeForm.id, Validators.required),
    //     'name': new FormControl(this.localReceipeForm.name, Validators.required),
    //     'image' : new FormControl(this.localReceipeForm.image, Validators.required),
    //     'desc' : new FormControl(this.localReceipeForm.desc, Validators.required),
    //     'ingredients' : new FormArray([
    //       new FormGroup({
    //         'name' : new FormControl(this.localReceipeForm.ingredients[0].name ,Validators.required),
    //         'qty' : new FormControl(this.localReceipeForm.ingredients[0].qty,Validators.required)
    //       }),
    //       new FormGroup({
    //         'name' : new FormControl(this.localReceipeForm.ingredients[1].name,Validators.required),
    //         'qty' : new FormControl(this.localReceipeForm.ingredients[1].qty,Validators.required)
    //       }),
    //       new FormGroup({
    //         'name' : new FormControl(this.localReceipeForm.ingredients[2].name,Validators.required),
    //         'qty' : new FormControl(this.localReceipeForm.ingredients[2].qty,Validators.required)
    //       })

    //     ])
    // });

    console.log(this.receipeForm.invalid);

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
    this._receipesService.addReceipe(this.localReceipeForm);
    this.localReceipeForm=null;
    this.receipeForm.reset();
    this._router.navigate(['/receipe-list']);
  }

  cancelClicked(){
    // go back to default component
    this._router.navigate(['/receipe-list']);

  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
      
      if(this.receipeForm.touched && this.receipeForm.valid){
        return true;
      } else{
        return confirm(" are u sure to leave?");
      }
      

    // throw new Error("Method not implemented.");
  }

}
