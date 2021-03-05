import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib22childlib0component1Component } from './lib22childlib0component1.component';

describe('Lib22childlib0component1Component', () => {
  let component: Lib22childlib0component1Component;
  let fixture: ComponentFixture<Lib22childlib0component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib22childlib0component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib22childlib0component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
