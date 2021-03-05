import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib28childlib3parentComponent } from './lib28childlib3parent.component';

describe('Lib28childlib3parentComponent', () => {
  let component: Lib28childlib3parentComponent;
  let fixture: ComponentFixture<Lib28childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib28childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib28childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
