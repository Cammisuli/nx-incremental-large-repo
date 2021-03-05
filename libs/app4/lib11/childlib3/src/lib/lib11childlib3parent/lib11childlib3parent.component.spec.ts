import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11childlib3parentComponent } from './lib11childlib3parent.component';

describe('Lib11childlib3parentComponent', () => {
  let component: Lib11childlib3parentComponent;
  let fixture: ComponentFixture<Lib11childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib11childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
