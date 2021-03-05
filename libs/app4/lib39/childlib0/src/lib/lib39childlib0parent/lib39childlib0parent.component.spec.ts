import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib39childlib0parentComponent } from './lib39childlib0parent.component';

describe('Lib39childlib0parentComponent', () => {
  let component: Lib39childlib0parentComponent;
  let fixture: ComponentFixture<Lib39childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib39childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib39childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
