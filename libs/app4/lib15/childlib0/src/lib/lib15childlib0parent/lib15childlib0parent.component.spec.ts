import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15childlib0parentComponent } from './lib15childlib0parent.component';

describe('Lib15childlib0parentComponent', () => {
  let component: Lib15childlib0parentComponent;
  let fixture: ComponentFixture<Lib15childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib15childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
