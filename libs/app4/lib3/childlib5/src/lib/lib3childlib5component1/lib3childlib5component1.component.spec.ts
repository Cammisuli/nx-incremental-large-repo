import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib5component1Component } from './lib3childlib5component1.component';

describe('Lib3childlib5component1Component', () => {
  let component: Lib3childlib5component1Component;
  let fixture: ComponentFixture<Lib3childlib5component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib3childlib5component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib5component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
