import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib14childlib0parentComponent } from './lib14childlib0parent.component';

describe('Lib14childlib0parentComponent', () => {
  let component: Lib14childlib0parentComponent;
  let fixture: ComponentFixture<Lib14childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib14childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib14childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
