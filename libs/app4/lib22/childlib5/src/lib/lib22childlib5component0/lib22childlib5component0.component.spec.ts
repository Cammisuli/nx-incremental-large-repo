import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib22childlib5component0Component } from './lib22childlib5component0.component';

describe('Lib22childlib5component0Component', () => {
  let component: Lib22childlib5component0Component;
  let fixture: ComponentFixture<Lib22childlib5component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib22childlib5component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib22childlib5component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
