import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib4component0Component } from './lib1childlib4component0.component';

describe('Lib1childlib4component0Component', () => {
  let component: Lib1childlib4component0Component;
  let fixture: ComponentFixture<Lib1childlib4component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1childlib4component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib4component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
