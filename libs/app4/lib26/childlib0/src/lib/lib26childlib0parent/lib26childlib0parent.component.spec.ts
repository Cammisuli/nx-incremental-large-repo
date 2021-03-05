import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib26childlib0parentComponent } from './lib26childlib0parent.component';

describe('Lib26childlib0parentComponent', () => {
  let component: Lib26childlib0parentComponent;
  let fixture: ComponentFixture<Lib26childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib26childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib26childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
