import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRoundComponent } from './form-round.component';

describe('FormRoundComponent', () => {
  let component: FormRoundComponent;
  let fixture: ComponentFixture<FormRoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
