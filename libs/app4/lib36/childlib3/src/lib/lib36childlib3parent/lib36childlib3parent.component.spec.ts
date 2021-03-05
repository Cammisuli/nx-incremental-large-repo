import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib36childlib3parentComponent } from './lib36childlib3parent.component';

describe('Lib36childlib3parentComponent', () => {
  let component: Lib36childlib3parentComponent;
  let fixture: ComponentFixture<Lib36childlib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib36childlib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib36childlib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
