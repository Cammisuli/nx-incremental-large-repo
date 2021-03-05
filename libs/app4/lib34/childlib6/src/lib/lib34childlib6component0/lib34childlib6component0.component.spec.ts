import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib34childlib6component0Component } from './lib34childlib6component0.component';

describe('Lib34childlib6component0Component', () => {
  let component: Lib34childlib6component0Component;
  let fixture: ComponentFixture<Lib34childlib6component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib34childlib6component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib34childlib6component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
