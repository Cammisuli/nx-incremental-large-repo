import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15childlib2component0Component } from './lib15childlib2component0.component';

describe('Lib15childlib2component0Component', () => {
  let component: Lib15childlib2component0Component;
  let fixture: ComponentFixture<Lib15childlib2component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib15childlib2component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15childlib2component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
