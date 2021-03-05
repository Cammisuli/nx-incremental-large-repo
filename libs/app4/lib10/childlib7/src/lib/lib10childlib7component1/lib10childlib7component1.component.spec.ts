import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib10childlib7component1Component } from './lib10childlib7component1.component';

describe('Lib10childlib7component1Component', () => {
  let component: Lib10childlib7component1Component;
  let fixture: ComponentFixture<Lib10childlib7component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib10childlib7component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib10childlib7component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
