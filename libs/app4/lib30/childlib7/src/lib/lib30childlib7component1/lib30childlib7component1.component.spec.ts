import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib30childlib7component1Component } from './lib30childlib7component1.component';

describe('Lib30childlib7component1Component', () => {
  let component: Lib30childlib7component1Component;
  let fixture: ComponentFixture<Lib30childlib7component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib30childlib7component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib30childlib7component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
