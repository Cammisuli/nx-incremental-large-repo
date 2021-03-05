import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib30childlib3parentComponent } from './lib30childlib3parent.component';

describe('Lib30childlib3parentComponent', () => {
  let component: Lib30childlib3parentComponent;
  let fixture: ComponentFixture<Lib30childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib30childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib30childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
