import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11childlib6component1Component } from './lib11childlib6component1.component';

describe('Lib11childlib6component1Component', () => {
  let component: Lib11childlib6component1Component;
  let fixture: ComponentFixture<Lib11childlib6component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib11childlib6component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11childlib6component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
