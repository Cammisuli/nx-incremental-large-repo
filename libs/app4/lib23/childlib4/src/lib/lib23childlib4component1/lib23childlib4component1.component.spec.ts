import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23childlib4component1Component } from './lib23childlib4component1.component';

describe('Lib23childlib4component1Component', () => {
  let component: Lib23childlib4component1Component;
  let fixture: ComponentFixture<Lib23childlib4component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib23childlib4component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23childlib4component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
