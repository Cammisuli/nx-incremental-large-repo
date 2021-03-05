import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20childlib0parentComponent } from './lib20childlib0parent.component';

describe('Lib20childlib0parentComponent', () => {
  let component: Lib20childlib0parentComponent;
  let fixture: ComponentFixture<Lib20childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib20childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
