import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib26childlib4component1Component } from './lib26childlib4component1.component';

describe('Lib26childlib4component1Component', () => {
  let component: Lib26childlib4component1Component;
  let fixture: ComponentFixture<Lib26childlib4component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib26childlib4component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib26childlib4component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
