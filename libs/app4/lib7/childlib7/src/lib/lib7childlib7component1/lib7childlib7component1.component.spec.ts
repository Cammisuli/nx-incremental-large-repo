import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib7component1Component } from './lib7childlib7component1.component';

describe('Lib7childlib7component1Component', () => {
  let component: Lib7childlib7component1Component;
  let fixture: ComponentFixture<Lib7childlib7component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib7childlib7component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib7component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
