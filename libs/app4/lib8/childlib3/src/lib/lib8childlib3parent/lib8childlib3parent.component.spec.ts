import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib3parentComponent } from './lib8childlib3parent.component';

describe('Lib8childlib3parentComponent', () => {
  let component: Lib8childlib3parentComponent;
  let fixture: ComponentFixture<Lib8childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib8childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
