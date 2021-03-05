import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib29childlib0parentComponent } from './lib29childlib0parent.component';

describe('Lib29childlib0parentComponent', () => {
  let component: Lib29childlib0parentComponent;
  let fixture: ComponentFixture<Lib29childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib29childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib29childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
