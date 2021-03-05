import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib9parentComponent } from './lib6childlib9parent.component';

describe('Lib6childlib9parentComponent', () => {
  let component: Lib6childlib9parentComponent;
  let fixture: ComponentFixture<Lib6childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib6childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
