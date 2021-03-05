import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19childlib9component0Component } from './lib19childlib9component0.component';

describe('Lib19childlib9component0Component', () => {
  let component: Lib19childlib9component0Component;
  let fixture: ComponentFixture<Lib19childlib9component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib19childlib9component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19childlib9component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
