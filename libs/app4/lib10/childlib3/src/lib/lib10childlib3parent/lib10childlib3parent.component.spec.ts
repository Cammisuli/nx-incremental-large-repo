import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib10childlib3parentComponent } from './lib10childlib3parent.component';

describe('Lib10childlib3parentComponent', () => {
  let component: Lib10childlib3parentComponent;
  let fixture: ComponentFixture<Lib10childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib10childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib10childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
