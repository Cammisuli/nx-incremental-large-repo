import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib36childlib6component1Component } from './lib36childlib6component1.component';

describe('Lib36childlib6component1Component', () => {
  let component: Lib36childlib6component1Component;
  let fixture: ComponentFixture<Lib36childlib6component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib36childlib6component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib36childlib6component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
