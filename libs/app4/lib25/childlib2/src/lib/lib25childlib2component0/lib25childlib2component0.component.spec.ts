import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25childlib2component0Component } from './lib25childlib2component0.component';

describe('Lib25childlib2component0Component', () => {
  let component: Lib25childlib2component0Component;
  let fixture: ComponentFixture<Lib25childlib2component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib25childlib2component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25childlib2component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
