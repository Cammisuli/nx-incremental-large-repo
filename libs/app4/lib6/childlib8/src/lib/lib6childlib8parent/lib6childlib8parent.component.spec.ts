import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib8parentComponent } from './lib6childlib8parent.component';

describe('Lib6childlib8parentComponent', () => {
  let component: Lib6childlib8parentComponent;
  let fixture: ComponentFixture<Lib6childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib6childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
