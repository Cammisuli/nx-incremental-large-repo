import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15childlib6component0Component } from './lib15childlib6component0.component';

describe('Lib15childlib6component0Component', () => {
  let component: Lib15childlib6component0Component;
  let fixture: ComponentFixture<Lib15childlib6component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib15childlib6component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15childlib6component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
