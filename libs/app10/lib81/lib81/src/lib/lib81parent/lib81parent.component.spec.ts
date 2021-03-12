import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib81parentComponent } from './lib81parent.component';

describe('Lib81parentComponent', () => {
  let component: Lib81parentComponent;
  let fixture: ComponentFixture<Lib81parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib81parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib81parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
