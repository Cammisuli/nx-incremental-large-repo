import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib36childlib0parentComponent } from './lib36childlib0parent.component';

describe('Lib36childlib0parentComponent', () => {
  let component: Lib36childlib0parentComponent;
  let fixture: ComponentFixture<Lib36childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib36childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib36childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
