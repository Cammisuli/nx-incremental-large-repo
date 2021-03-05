import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib29childlib3parentComponent } from './lib29childlib3parent.component';

describe('Lib29childlib3parentComponent', () => {
  let component: Lib29childlib3parentComponent;
  let fixture: ComponentFixture<Lib29childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib29childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib29childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
