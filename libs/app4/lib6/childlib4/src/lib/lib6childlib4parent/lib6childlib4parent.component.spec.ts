import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib4parentComponent } from './lib6childlib4parent.component';

describe('Lib6childlib4parentComponent', () => {
  let component: Lib6childlib4parentComponent;
  let fixture: ComponentFixture<Lib6childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib6childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
