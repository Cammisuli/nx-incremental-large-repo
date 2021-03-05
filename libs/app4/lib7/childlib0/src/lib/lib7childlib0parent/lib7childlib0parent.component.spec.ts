import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib0parentComponent } from './lib7childlib0parent.component';

describe('Lib7childlib0parentComponent', () => {
  let component: Lib7childlib0parentComponent;
  let fixture: ComponentFixture<Lib7childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib7childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
