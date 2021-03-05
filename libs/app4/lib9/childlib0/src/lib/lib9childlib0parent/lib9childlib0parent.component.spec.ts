import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib0parentComponent } from './lib9childlib0parent.component';

describe('Lib9childlib0parentComponent', () => {
  let component: Lib9childlib0parentComponent;
  let fixture: ComponentFixture<Lib9childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib9childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
