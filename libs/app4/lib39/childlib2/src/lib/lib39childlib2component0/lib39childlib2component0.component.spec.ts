import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib39childlib2component0Component } from './lib39childlib2component0.component';

describe('Lib39childlib2component0Component', () => {
  let component: Lib39childlib2component0Component;
  let fixture: ComponentFixture<Lib39childlib2component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib39childlib2component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib39childlib2component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
