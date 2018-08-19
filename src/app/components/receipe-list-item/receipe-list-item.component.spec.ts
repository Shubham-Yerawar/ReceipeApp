import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipeListItemComponent } from './receipe-list-item.component';

describe('ReceipeListItemComponent', () => {
  let component: ReceipeListItemComponent;
  let fixture: ComponentFixture<ReceipeListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceipeListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
