import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib3parentComponent } from './lib6childlib3parent.component';

describe('Lib6childlib3parentComponent', () => {
  let component: Lib6childlib3parentComponent;
  let fixture: ComponentFixture<Lib6childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib6childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
