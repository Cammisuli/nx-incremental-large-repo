import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib35childlib1component0Component } from './lib35childlib1component0.component';

describe('Lib35childlib1component0Component', () => {
  let component: Lib35childlib1component0Component;
  let fixture: ComponentFixture<Lib35childlib1component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib35childlib1component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib35childlib1component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
