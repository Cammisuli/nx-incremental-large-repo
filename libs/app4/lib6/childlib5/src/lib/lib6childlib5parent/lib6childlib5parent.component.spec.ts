import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib5parentComponent } from './lib6childlib5parent.component';

describe('Lib6childlib5parentComponent', () => {
  let component: Lib6childlib5parentComponent;
  let fixture: ComponentFixture<Lib6childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib6childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
