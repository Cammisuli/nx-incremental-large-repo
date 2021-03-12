import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib281parentComponent } from './lib281parent.component';

describe('Lib281parentComponent', () => {
  let component: Lib281parentComponent;
  let fixture: ComponentFixture<Lib281parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib281parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib281parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
