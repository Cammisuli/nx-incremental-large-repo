import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18childlib7component1Component } from './lib18childlib7component1.component';

describe('Lib18childlib7component1Component', () => {
  let component: Lib18childlib7component1Component;
  let fixture: ComponentFixture<Lib18childlib7component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib18childlib7component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18childlib7component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
