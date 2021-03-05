import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib32childlib0parentComponent } from './lib32childlib0parent.component';

describe('Lib32childlib0parentComponent', () => {
  let component: Lib32childlib0parentComponent;
  let fixture: ComponentFixture<Lib32childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib32childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib32childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
