import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib75parentComponent } from './lib75parent.component';

describe('Lib75parentComponent', () => {
  let component: Lib75parentComponent;
  let fixture: ComponentFixture<Lib75parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib75parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib75parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
