import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib310parentComponent } from './lib310parent.component';

describe('Lib310parentComponent', () => {
  let component: Lib310parentComponent;
  let fixture: ComponentFixture<Lib310parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib310parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib310parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
