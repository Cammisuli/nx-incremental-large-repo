import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib26childlib6component0Component } from './lib26childlib6component0.component';

describe('Lib26childlib6component0Component', () => {
  let component: Lib26childlib6component0Component;
  let fixture: ComponentFixture<Lib26childlib6component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib26childlib6component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib26childlib6component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
