import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib10childlib0parentComponent } from './lib10childlib0parent.component';

describe('Lib10childlib0parentComponent', () => {
  let component: Lib10childlib0parentComponent;
  let fixture: ComponentFixture<Lib10childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib10childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib10childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
