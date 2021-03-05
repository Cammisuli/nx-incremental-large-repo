import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25childlib0parentComponent } from './lib25childlib0parent.component';

describe('Lib25childlib0parentComponent', () => {
  let component: Lib25childlib0parentComponent;
  let fixture: ComponentFixture<Lib25childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib25childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
