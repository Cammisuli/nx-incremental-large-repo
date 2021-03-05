import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib0parentComponent } from './lib5childlib0parent.component';

describe('Lib5childlib0parentComponent', () => {
  let component: Lib5childlib0parentComponent;
  let fixture: ComponentFixture<Lib5childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib5childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
