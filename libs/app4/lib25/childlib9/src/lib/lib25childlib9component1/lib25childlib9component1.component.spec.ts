import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25childlib9component1Component } from './lib25childlib9component1.component';

describe('Lib25childlib9component1Component', () => {
  let component: Lib25childlib9component1Component;
  let fixture: ComponentFixture<Lib25childlib9component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib25childlib9component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25childlib9component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
