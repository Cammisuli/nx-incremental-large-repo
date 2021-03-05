import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib26childlib2component0Component } from './lib26childlib2component0.component';

describe('Lib26childlib2component0Component', () => {
  let component: Lib26childlib2component0Component;
  let fixture: ComponentFixture<Lib26childlib2component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib26childlib2component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib26childlib2component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
