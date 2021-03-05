import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15childlib2component1Component } from './lib15childlib2component1.component';

describe('Lib15childlib2component1Component', () => {
  let component: Lib15childlib2component1Component;
  let fixture: ComponentFixture<Lib15childlib2component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib15childlib2component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15childlib2component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
