import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib294parentComponent } from './lib294parent.component';

describe('Lib294parentComponent', () => {
  let component: Lib294parentComponent;
  let fixture: ComponentFixture<Lib294parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib294parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib294parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
