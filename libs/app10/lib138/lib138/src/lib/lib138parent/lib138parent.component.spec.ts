import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib138parentComponent } from './lib138parent.component';

describe('Lib138parentComponent', () => {
  let component: Lib138parentComponent;
  let fixture: ComponentFixture<Lib138parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib138parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib138parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
