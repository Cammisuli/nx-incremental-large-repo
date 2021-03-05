import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib24childlib0parentComponent } from './lib24childlib0parent.component';

describe('Lib24childlib0parentComponent', () => {
  let component: Lib24childlib0parentComponent;
  let fixture: ComponentFixture<Lib24childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib24childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib24childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
