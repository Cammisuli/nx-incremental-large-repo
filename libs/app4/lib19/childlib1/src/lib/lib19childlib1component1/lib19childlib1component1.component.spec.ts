import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19childlib1component1Component } from './lib19childlib1component1.component';

describe('Lib19childlib1component1Component', () => {
  let component: Lib19childlib1component1Component;
  let fixture: ComponentFixture<Lib19childlib1component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib19childlib1component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19childlib1component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
