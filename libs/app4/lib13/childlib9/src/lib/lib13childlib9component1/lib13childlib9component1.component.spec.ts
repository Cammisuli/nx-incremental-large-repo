import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib13childlib9component1Component } from './lib13childlib9component1.component';

describe('Lib13childlib9component1Component', () => {
  let component: Lib13childlib9component1Component;
  let fixture: ComponentFixture<Lib13childlib9component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib13childlib9component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib13childlib9component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
