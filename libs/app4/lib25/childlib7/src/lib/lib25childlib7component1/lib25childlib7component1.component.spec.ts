import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25childlib7component1Component } from './lib25childlib7component1.component';

describe('Lib25childlib7component1Component', () => {
  let component: Lib25childlib7component1Component;
  let fixture: ComponentFixture<Lib25childlib7component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib25childlib7component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25childlib7component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
