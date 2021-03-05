import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23childlib0parentComponent } from './lib23childlib0parent.component';

describe('Lib23childlib0parentComponent', () => {
  let component: Lib23childlib0parentComponent;
  let fixture: ComponentFixture<Lib23childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib23childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
