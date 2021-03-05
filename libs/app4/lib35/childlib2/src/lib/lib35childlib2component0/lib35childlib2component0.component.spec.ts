import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib35childlib2component0Component } from './lib35childlib2component0.component';

describe('Lib35childlib2component0Component', () => {
  let component: Lib35childlib2component0Component;
  let fixture: ComponentFixture<Lib35childlib2component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib35childlib2component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib35childlib2component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
