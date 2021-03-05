import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11childlib0parentComponent } from './lib11childlib0parent.component';

describe('Lib11childlib0parentComponent', () => {
  let component: Lib11childlib0parentComponent;
  let fixture: ComponentFixture<Lib11childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib11childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
