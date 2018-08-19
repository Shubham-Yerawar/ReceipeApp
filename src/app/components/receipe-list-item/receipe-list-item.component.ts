import { Component, OnInit, Input } from '@angular/core';
import { IReceipe } from '../../models/receipe';

@Component({
  selector: 'app-receipe-list-item',
  templateUrl: './receipe-list-item.component.html',
  styleUrls: ['./receipe-list-item.component.css']
})
export class ReceipeListItemComponent implements OnInit {

  
   @Input() receipe : IReceipe;
  constructor() { }

  ngOnInit() {
  }

}
