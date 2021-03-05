import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib38childlib5component1Component } from './lib38childlib5component1.component';

describe('Lib38childlib5component1Component', () => {
  let component: Lib38childlib5component1Component;
  let fixture: ComponentFixture<Lib38childlib5component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib38childlib5component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib38childlib5component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
