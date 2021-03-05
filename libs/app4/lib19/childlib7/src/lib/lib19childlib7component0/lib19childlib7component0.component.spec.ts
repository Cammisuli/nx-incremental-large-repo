import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19childlib7component0Component } from './lib19childlib7component0.component';

describe('Lib19childlib7component0Component', () => {
  let component: Lib19childlib7component0Component;
  let fixture: ComponentFixture<Lib19childlib7component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib19childlib7component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19childlib7component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
