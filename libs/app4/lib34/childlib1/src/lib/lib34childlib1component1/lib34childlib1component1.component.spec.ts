import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib34childlib1component1Component } from './lib34childlib1component1.component';

describe('Lib34childlib1component1Component', () => {
  let component: Lib34childlib1component1Component;
  let fixture: ComponentFixture<Lib34childlib1component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib34childlib1component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib34childlib1component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
