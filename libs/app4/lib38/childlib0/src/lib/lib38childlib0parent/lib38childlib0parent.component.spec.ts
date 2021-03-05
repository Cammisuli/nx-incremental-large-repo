import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib38childlib0parentComponent } from './lib38childlib0parent.component';

describe('Lib38childlib0parentComponent', () => {
  let component: Lib38childlib0parentComponent;
  let fixture: ComponentFixture<Lib38childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib38childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib38childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
