import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib17childlib7component0Component } from './lib17childlib7component0.component';

describe('Lib17childlib7component0Component', () => {
  let component: Lib17childlib7component0Component;
  let fixture: ComponentFixture<Lib17childlib7component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib17childlib7component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib17childlib7component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
