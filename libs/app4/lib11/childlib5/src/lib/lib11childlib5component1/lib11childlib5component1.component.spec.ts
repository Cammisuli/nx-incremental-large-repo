import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11childlib5component1Component } from './lib11childlib5component1.component';

describe('Lib11childlib5component1Component', () => {
  let component: Lib11childlib5component1Component;
  let fixture: ComponentFixture<Lib11childlib5component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib11childlib5component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11childlib5component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
