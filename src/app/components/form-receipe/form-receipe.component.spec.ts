import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReceipeComponent } from './form-receipe.component';

describe('FormReceipeComponent', () => {
  let component: FormReceipeComponent;
  let fixture: ComponentFixture<FormReceipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReceipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReceipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
