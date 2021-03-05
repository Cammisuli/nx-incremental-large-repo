import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib21childlib6component0Component } from './lib21childlib6component0.component';

describe('Lib21childlib6component0Component', () => {
  let component: Lib21childlib6component0Component;
  let fixture: ComponentFixture<Lib21childlib6component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib21childlib6component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib21childlib6component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
