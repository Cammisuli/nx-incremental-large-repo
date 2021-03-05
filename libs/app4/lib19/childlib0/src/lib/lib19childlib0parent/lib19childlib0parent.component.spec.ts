import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19childlib0parentComponent } from './lib19childlib0parent.component';

describe('Lib19childlib0parentComponent', () => {
  let component: Lib19childlib0parentComponent;
  let fixture: ComponentFixture<Lib19childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib19childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
