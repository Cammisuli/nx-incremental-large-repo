import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib5component1Component } from './lib1childlib5component1.component';

describe('Lib1childlib5component1Component', () => {
  let component: Lib1childlib5component1Component;
  let fixture: ComponentFixture<Lib1childlib5component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1childlib5component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib5component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
