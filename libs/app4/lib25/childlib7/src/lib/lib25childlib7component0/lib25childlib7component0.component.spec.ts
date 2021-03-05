import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25childlib7component0Component } from './lib25childlib7component0.component';

describe('Lib25childlib7component0Component', () => {
  let component: Lib25childlib7component0Component;
  let fixture: ComponentFixture<Lib25childlib7component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib25childlib7component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25childlib7component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
