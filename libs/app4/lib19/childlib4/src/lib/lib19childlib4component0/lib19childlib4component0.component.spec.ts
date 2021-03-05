import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19childlib4component0Component } from './lib19childlib4component0.component';

describe('Lib19childlib4component0Component', () => {
  let component: Lib19childlib4component0Component;
  let fixture: ComponentFixture<Lib19childlib4component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib19childlib4component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19childlib4component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
