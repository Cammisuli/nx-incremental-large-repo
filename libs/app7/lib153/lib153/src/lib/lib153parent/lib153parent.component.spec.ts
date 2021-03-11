import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib153parentComponent } from './lib153parent.component';

describe('Lib153parentComponent', () => {
  let component: Lib153parentComponent;
  let fixture: ComponentFixture<Lib153parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib153parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib153parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
