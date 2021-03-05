import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib3component1Component } from './lib7childlib3component1.component';

describe('Lib7childlib3component1Component', () => {
  let component: Lib7childlib3component1Component;
  let fixture: ComponentFixture<Lib7childlib3component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib7childlib3component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib3component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
