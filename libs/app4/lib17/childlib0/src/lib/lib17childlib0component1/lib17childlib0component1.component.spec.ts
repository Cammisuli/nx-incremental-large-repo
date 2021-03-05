import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib17childlib0component1Component } from './lib17childlib0component1.component';

describe('Lib17childlib0component1Component', () => {
  let component: Lib17childlib0component1Component;
  let fixture: ComponentFixture<Lib17childlib0component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib17childlib0component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib17childlib0component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
