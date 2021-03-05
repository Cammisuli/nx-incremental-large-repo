import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19childlib7component1Component } from './lib19childlib7component1.component';

describe('Lib19childlib7component1Component', () => {
  let component: Lib19childlib7component1Component;
  let fixture: ComponentFixture<Lib19childlib7component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib19childlib7component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19childlib7component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
