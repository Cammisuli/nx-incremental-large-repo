import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18childlib3parentComponent } from './lib18childlib3parent.component';

describe('Lib18childlib3parentComponent', () => {
  let component: Lib18childlib3parentComponent;
  let fixture: ComponentFixture<Lib18childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib18childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
