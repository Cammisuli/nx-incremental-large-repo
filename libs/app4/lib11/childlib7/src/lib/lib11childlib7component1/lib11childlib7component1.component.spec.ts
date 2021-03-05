import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11childlib7component1Component } from './lib11childlib7component1.component';

describe('Lib11childlib7component1Component', () => {
  let component: Lib11childlib7component1Component;
  let fixture: ComponentFixture<Lib11childlib7component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib11childlib7component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11childlib7component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
