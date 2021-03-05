import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib33childlib3parentComponent } from './lib33childlib3parent.component';

describe('Lib33childlib3parentComponent', () => {
  let component: Lib33childlib3parentComponent;
  let fixture: ComponentFixture<Lib33childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib33childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib33childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
