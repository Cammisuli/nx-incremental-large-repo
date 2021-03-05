import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib16childlib7component1Component } from './lib16childlib7component1.component';

describe('Lib16childlib7component1Component', () => {
  let component: Lib16childlib7component1Component;
  let fixture: ComponentFixture<Lib16childlib7component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib16childlib7component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib16childlib7component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
