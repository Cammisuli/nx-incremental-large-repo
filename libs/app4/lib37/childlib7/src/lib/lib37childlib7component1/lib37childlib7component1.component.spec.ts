import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib37childlib7component1Component } from './lib37childlib7component1.component';

describe('Lib37childlib7component1Component', () => {
  let component: Lib37childlib7component1Component;
  let fixture: ComponentFixture<Lib37childlib7component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib37childlib7component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib37childlib7component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
