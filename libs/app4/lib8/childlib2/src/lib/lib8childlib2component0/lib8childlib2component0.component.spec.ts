import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib2component0Component } from './lib8childlib2component0.component';

describe('Lib8childlib2component0Component', () => {
  let component: Lib8childlib2component0Component;
  let fixture: ComponentFixture<Lib8childlib2component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib8childlib2component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib2component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
