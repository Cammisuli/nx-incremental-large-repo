import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib22childlib9component0Component } from './lib22childlib9component0.component';

describe('Lib22childlib9component0Component', () => {
  let component: Lib22childlib9component0Component;
  let fixture: ComponentFixture<Lib22childlib9component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib22childlib9component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib22childlib9component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
