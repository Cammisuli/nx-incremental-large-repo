import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib3component1Component } from './lib9childlib3component1.component';

describe('Lib9childlib3component1Component', () => {
  let component: Lib9childlib3component1Component;
  let fixture: ComponentFixture<Lib9childlib3component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib9childlib3component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib3component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
