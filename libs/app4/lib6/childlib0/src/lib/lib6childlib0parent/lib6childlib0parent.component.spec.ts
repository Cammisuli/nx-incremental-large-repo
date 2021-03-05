import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib0parentComponent } from './lib6childlib0parent.component';

describe('Lib6childlib0parentComponent', () => {
  let component: Lib6childlib0parentComponent;
  let fixture: ComponentFixture<Lib6childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib6childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
