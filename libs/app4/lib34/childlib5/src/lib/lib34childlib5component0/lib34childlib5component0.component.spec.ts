import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib34childlib5component0Component } from './lib34childlib5component0.component';

describe('Lib34childlib5component0Component', () => {
  let component: Lib34childlib5component0Component;
  let fixture: ComponentFixture<Lib34childlib5component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib34childlib5component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib34childlib5component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
