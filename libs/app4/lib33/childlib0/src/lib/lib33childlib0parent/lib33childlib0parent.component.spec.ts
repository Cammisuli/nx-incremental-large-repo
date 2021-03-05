import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib33childlib0parentComponent } from './lib33childlib0parent.component';

describe('Lib33childlib0parentComponent', () => {
  let component: Lib33childlib0parentComponent;
  let fixture: ComponentFixture<Lib33childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib33childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib33childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
