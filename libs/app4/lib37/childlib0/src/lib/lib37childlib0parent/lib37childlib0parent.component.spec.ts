import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib37childlib0parentComponent } from './lib37childlib0parent.component';

describe('Lib37childlib0parentComponent', () => {
  let component: Lib37childlib0parentComponent;
  let fixture: ComponentFixture<Lib37childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib37childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib37childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
