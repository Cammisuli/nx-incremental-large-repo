import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib34childlib0parentComponent } from './lib34childlib0parent.component';

describe('Lib34childlib0parentComponent', () => {
  let component: Lib34childlib0parentComponent;
  let fixture: ComponentFixture<Lib34childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib34childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib34childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
