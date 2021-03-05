import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib35childlib0parentComponent } from './lib35childlib0parent.component';

describe('Lib35childlib0parentComponent', () => {
  let component: Lib35childlib0parentComponent;
  let fixture: ComponentFixture<Lib35childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib35childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib35childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
