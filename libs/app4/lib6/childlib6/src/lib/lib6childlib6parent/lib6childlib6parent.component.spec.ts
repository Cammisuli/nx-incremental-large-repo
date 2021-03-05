import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib6parentComponent } from './lib6childlib6parent.component';

describe('Lib6childlib6parentComponent', () => {
  let component: Lib6childlib6parentComponent;
  let fixture: ComponentFixture<Lib6childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib6childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
