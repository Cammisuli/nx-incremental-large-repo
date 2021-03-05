import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23childlib6component1Component } from './lib23childlib6component1.component';

describe('Lib23childlib6component1Component', () => {
  let component: Lib23childlib6component1Component;
  let fixture: ComponentFixture<Lib23childlib6component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib23childlib6component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23childlib6component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
