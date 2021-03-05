import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib16childlib0parentComponent } from './lib16childlib0parent.component';

describe('Lib16childlib0parentComponent', () => {
  let component: Lib16childlib0parentComponent;
  let fixture: ComponentFixture<Lib16childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib16childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib16childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
