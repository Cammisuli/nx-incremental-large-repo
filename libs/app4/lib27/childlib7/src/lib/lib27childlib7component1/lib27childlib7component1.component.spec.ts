import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib27childlib7component1Component } from './lib27childlib7component1.component';

describe('Lib27childlib7component1Component', () => {
  let component: Lib27childlib7component1Component;
  let fixture: ComponentFixture<Lib27childlib7component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib27childlib7component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib27childlib7component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
