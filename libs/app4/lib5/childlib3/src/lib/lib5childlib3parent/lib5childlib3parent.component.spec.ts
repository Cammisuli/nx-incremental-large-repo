import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib3parentComponent } from './lib5childlib3parent.component';

describe('Lib5childlib3parentComponent', () => {
  let component: Lib5childlib3parentComponent;
  let fixture: ComponentFixture<Lib5childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib5childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
