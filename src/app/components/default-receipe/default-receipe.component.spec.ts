import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultReceipeComponent } from './default-receipe.component';

describe('DefaultReceipeComponent', () => {
  let component: DefaultReceipeComponent;
  let fixture: ComponentFixture<DefaultReceipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultReceipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultReceipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
