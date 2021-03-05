import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib31childlib0parentComponent } from './lib31childlib0parent.component';

describe('Lib31childlib0parentComponent', () => {
  let component: Lib31childlib0parentComponent;
  let fixture: ComponentFixture<Lib31childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib31childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib31childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
