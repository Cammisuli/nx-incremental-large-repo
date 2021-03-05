import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib28childlib0parentComponent } from './lib28childlib0parent.component';

describe('Lib28childlib0parentComponent', () => {
  let component: Lib28childlib0parentComponent;
  let fixture: ComponentFixture<Lib28childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib28childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib28childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
