import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialInputComponent } from './initial-input.component';

describe('InitialInputComponent', () => {
  let component: InitialInputComponent;
  let fixture: ComponentFixture<InitialInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
