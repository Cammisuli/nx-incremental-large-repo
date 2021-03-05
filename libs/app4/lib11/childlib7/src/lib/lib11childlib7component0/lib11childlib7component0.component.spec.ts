import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11childlib7component0Component } from './lib11childlib7component0.component';

describe('Lib11childlib7component0Component', () => {
  let component: Lib11childlib7component0Component;
  let fixture: ComponentFixture<Lib11childlib7component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib11childlib7component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11childlib7component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
