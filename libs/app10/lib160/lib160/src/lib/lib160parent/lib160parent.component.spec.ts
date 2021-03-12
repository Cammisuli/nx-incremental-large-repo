import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib160parentComponent } from './lib160parent.component';

describe('Lib160parentComponent', () => {
  let component: Lib160parentComponent;
  let fixture: ComponentFixture<Lib160parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib160parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib160parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
