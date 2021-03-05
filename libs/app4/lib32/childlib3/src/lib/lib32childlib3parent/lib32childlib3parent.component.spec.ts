import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib32childlib3parentComponent } from './lib32childlib3parent.component';

describe('Lib32childlib3parentComponent', () => {
  let component: Lib32childlib3parentComponent;
  let fixture: ComponentFixture<Lib32childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib32childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib32childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
