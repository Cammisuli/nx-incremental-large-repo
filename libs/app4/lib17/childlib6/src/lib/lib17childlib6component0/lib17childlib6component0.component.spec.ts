import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib17childlib6component0Component } from './lib17childlib6component0.component';

describe('Lib17childlib6component0Component', () => {
  let component: Lib17childlib6component0Component;
  let fixture: ComponentFixture<Lib17childlib6component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib17childlib6component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib17childlib6component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
