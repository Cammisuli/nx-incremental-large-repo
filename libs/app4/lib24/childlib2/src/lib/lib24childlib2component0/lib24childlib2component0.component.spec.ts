import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib24childlib2component0Component } from './lib24childlib2component0.component';

describe('Lib24childlib2component0Component', () => {
  let component: Lib24childlib2component0Component;
  let fixture: ComponentFixture<Lib24childlib2component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib24childlib2component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib24childlib2component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
