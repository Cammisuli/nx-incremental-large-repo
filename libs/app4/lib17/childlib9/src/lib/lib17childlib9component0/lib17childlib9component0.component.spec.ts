import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib17childlib9component0Component } from './lib17childlib9component0.component';

describe('Lib17childlib9component0Component', () => {
  let component: Lib17childlib9component0Component;
  let fixture: ComponentFixture<Lib17childlib9component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib17childlib9component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib17childlib9component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
