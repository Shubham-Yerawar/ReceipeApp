import { Component, OnInit } from '@angular/core';
import { IReceipe } from '../../models/receipe';
import { ReceipesService } from '../../services/receipes/receipes.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {

  receipes : IReceipe[];
  constructor(private _receipeService : ReceipesService) { }

  ngOnInit() {
    
    this.receipes = this._receipeService.getAllReceipes();
  }



}
