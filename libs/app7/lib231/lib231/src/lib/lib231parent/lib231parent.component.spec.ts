import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib231parentComponent } from './lib231parent.component';

describe('Lib231parentComponent', () => {
  let component: Lib231parentComponent;
  let fixture: ComponentFixture<Lib231parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib231parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib231parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
