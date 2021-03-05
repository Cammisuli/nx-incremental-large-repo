import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib31childlib5component1Component } from './lib31childlib5component1.component';

describe('Lib31childlib5component1Component', () => {
  let component: Lib31childlib5component1Component;
  let fixture: ComponentFixture<Lib31childlib5component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib31childlib5component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib31childlib5component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
