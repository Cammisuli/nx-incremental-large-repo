import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib38childlib7component1Component } from './lib38childlib7component1.component';

describe('Lib38childlib7component1Component', () => {
  let component: Lib38childlib7component1Component;
  let fixture: ComponentFixture<Lib38childlib7component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib38childlib7component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib38childlib7component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
