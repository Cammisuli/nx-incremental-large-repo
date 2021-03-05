import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23childlib9component1Component } from './lib23childlib9component1.component';

describe('Lib23childlib9component1Component', () => {
  let component: Lib23childlib9component1Component;
  let fixture: ComponentFixture<Lib23childlib9component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib23childlib9component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23childlib9component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
