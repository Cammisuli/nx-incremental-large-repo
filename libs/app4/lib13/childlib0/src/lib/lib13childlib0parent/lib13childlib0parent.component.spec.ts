import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib13childlib0parentComponent } from './lib13childlib0parent.component';

describe('Lib13childlib0parentComponent', () => {
  let component: Lib13childlib0parentComponent;
  let fixture: ComponentFixture<Lib13childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib13childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib13childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
