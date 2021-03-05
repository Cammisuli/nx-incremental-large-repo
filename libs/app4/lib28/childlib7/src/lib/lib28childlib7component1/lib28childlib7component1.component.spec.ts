import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib28childlib7component1Component } from './lib28childlib7component1.component';

describe('Lib28childlib7component1Component', () => {
  let component: Lib28childlib7component1Component;
  let fixture: ComponentFixture<Lib28childlib7component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib28childlib7component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib28childlib7component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
