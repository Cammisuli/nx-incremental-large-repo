import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib36childlib6component0Component } from './lib36childlib6component0.component';

describe('Lib36childlib6component0Component', () => {
  let component: Lib36childlib6component0Component;
  let fixture: ComponentFixture<Lib36childlib6component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib36childlib6component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib36childlib6component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
