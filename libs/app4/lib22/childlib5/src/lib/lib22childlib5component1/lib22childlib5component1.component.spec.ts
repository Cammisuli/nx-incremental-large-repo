import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib22childlib5component1Component } from './lib22childlib5component1.component';

describe('Lib22childlib5component1Component', () => {
  let component: Lib22childlib5component1Component;
  let fixture: ComponentFixture<Lib22childlib5component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib22childlib5component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib22childlib5component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
