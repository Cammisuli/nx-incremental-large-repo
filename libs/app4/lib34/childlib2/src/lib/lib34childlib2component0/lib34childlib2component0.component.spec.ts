import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib34childlib2component0Component } from './lib34childlib2component0.component';

describe('Lib34childlib2component0Component', () => {
  let component: Lib34childlib2component0Component;
  let fixture: ComponentFixture<Lib34childlib2component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib34childlib2component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib34childlib2component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
