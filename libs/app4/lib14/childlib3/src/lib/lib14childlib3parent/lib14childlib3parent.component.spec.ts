import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib14childlib3parentComponent } from './lib14childlib3parent.component';

describe('Lib14childlib3parentComponent', () => {
  let component: Lib14childlib3parentComponent;
  let fixture: ComponentFixture<Lib14childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib14childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib14childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
