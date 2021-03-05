import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19childlib9component1Component } from './lib19childlib9component1.component';

describe('Lib19childlib9component1Component', () => {
  let component: Lib19childlib9component1Component;
  let fixture: ComponentFixture<Lib19childlib9component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib19childlib9component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19childlib9component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
