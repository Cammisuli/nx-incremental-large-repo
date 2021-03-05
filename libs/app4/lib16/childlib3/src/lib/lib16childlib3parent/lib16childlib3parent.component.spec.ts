import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib16childlib3parentComponent } from './lib16childlib3parent.component';

describe('Lib16childlib3parentComponent', () => {
  let component: Lib16childlib3parentComponent;
  let fixture: ComponentFixture<Lib16childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib16childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib16childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
