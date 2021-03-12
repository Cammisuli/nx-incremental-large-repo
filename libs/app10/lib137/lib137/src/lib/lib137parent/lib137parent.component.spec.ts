import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib137parentComponent } from './lib137parent.component';

describe('Lib137parentComponent', () => {
  let component: Lib137parentComponent;
  let fixture: ComponentFixture<Lib137parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib137parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib137parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
