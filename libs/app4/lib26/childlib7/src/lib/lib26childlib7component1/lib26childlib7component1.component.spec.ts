import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib26childlib7component1Component } from './lib26childlib7component1.component';

describe('Lib26childlib7component1Component', () => {
  let component: Lib26childlib7component1Component;
  let fixture: ComponentFixture<Lib26childlib7component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib26childlib7component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib26childlib7component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
