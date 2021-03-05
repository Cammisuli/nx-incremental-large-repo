import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib7component0Component } from './lib9childlib7component0.component';

describe('Lib9childlib7component0Component', () => {
  let component: Lib9childlib7component0Component;
  let fixture: ComponentFixture<Lib9childlib7component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib9childlib7component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib7component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
