import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20childlib3parentComponent } from './lib20childlib3parent.component';

describe('Lib20childlib3parentComponent', () => {
  let component: Lib20childlib3parentComponent;
  let fixture: ComponentFixture<Lib20childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib20childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
