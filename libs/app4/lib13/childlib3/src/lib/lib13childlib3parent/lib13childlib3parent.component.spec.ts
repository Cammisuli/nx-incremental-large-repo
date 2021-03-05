import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib13childlib3parentComponent } from './lib13childlib3parent.component';

describe('Lib13childlib3parentComponent', () => {
  let component: Lib13childlib3parentComponent;
  let fixture: ComponentFixture<Lib13childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib13childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib13childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
