import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib2parentComponent } from './lib6childlib2parent.component';

describe('Lib6childlib2parentComponent', () => {
  let component: Lib6childlib2parentComponent;
  let fixture: ComponentFixture<Lib6childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib6childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
