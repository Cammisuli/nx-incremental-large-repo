import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib39childlib0component0Component } from './lib39childlib0component0.component';

describe('Lib39childlib0component0Component', () => {
  let component: Lib39childlib0component0Component;
  let fixture: ComponentFixture<Lib39childlib0component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib39childlib0component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib39childlib0component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
