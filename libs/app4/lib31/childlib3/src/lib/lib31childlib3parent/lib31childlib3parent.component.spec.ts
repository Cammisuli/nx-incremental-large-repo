import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib31childlib3parentComponent } from './lib31childlib3parent.component';

describe('Lib31childlib3parentComponent', () => {
  let component: Lib31childlib3parentComponent;
  let fixture: ComponentFixture<Lib31childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib31childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib31childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
