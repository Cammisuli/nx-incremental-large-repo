import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib22childlib2component0Component } from './lib22childlib2component0.component';

describe('Lib22childlib2component0Component', () => {
  let component: Lib22childlib2component0Component;
  let fixture: ComponentFixture<Lib22childlib2component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib22childlib2component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib22childlib2component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
