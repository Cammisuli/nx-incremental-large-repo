import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib27childlib0component1Component } from './lib27childlib0component1.component';

describe('Lib27childlib0component1Component', () => {
  let component: Lib27childlib0component1Component;
  let fixture: ComponentFixture<Lib27childlib0component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib27childlib0component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib27childlib0component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
