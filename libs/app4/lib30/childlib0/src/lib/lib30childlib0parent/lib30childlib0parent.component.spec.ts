import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib30childlib0parentComponent } from './lib30childlib0parent.component';

describe('Lib30childlib0parentComponent', () => {
  let component: Lib30childlib0parentComponent;
  let fixture: ComponentFixture<Lib30childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib30childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib30childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
