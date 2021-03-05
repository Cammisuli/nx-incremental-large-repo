import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib6component0Component } from './lib9childlib6component0.component';

describe('Lib9childlib6component0Component', () => {
  let component: Lib9childlib6component0Component;
  let fixture: ComponentFixture<Lib9childlib6component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib9childlib6component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib6component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
