import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib24childlib3parentComponent } from './lib24childlib3parent.component';

describe('Lib24childlib3parentComponent', () => {
  let component: Lib24childlib3parentComponent;
  let fixture: ComponentFixture<Lib24childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib24childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib24childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
