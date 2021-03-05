import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib5component0Component } from './lib9childlib5component0.component';

describe('Lib9childlib5component0Component', () => {
  let component: Lib9childlib5component0Component;
  let fixture: ComponentFixture<Lib9childlib5component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib9childlib5component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib5component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
