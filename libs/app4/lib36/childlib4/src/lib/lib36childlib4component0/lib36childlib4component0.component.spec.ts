import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib36childlib4component0Component } from './lib36childlib4component0.component';

describe('Lib36childlib4component0Component', () => {
  let component: Lib36childlib4component0Component;
  let fixture: ComponentFixture<Lib36childlib4component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib36childlib4component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib36childlib4component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
