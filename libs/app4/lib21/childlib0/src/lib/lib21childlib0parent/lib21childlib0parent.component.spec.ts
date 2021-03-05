import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib21childlib0parentComponent } from './lib21childlib0parent.component';

describe('Lib21childlib0parentComponent', () => {
  let component: Lib21childlib0parentComponent;
  let fixture: ComponentFixture<Lib21childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib21childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib21childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
