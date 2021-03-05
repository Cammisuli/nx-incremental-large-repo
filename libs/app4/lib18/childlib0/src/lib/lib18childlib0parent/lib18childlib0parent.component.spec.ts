import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18childlib0parentComponent } from './lib18childlib0parent.component';

describe('Lib18childlib0parentComponent', () => {
  let component: Lib18childlib0parentComponent;
  let fixture: ComponentFixture<Lib18childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib18childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
