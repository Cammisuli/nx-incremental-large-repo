import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib27childlib9component1Component } from './lib27childlib9component1.component';

describe('Lib27childlib9component1Component', () => {
  let component: Lib27childlib9component1Component;
  let fixture: ComponentFixture<Lib27childlib9component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib27childlib9component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib27childlib9component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
