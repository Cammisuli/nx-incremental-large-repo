import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib7component1Component } from './lib8childlib7component1.component';

describe('Lib8childlib7component1Component', () => {
  let component: Lib8childlib7component1Component;
  let fixture: ComponentFixture<Lib8childlib7component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib8childlib7component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib7component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
