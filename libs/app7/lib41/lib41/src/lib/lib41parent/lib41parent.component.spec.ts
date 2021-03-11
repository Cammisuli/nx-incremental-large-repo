import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib41parentComponent } from './lib41parent.component';

describe('Lib41parentComponent', () => {
  let component: Lib41parentComponent;
  let fixture: ComponentFixture<Lib41parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib41parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib41parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
