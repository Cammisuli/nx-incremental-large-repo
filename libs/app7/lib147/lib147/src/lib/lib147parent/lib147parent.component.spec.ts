import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib147parentComponent } from './lib147parent.component';

describe('Lib147parentComponent', () => {
  let component: Lib147parentComponent;
  let fixture: ComponentFixture<Lib147parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib147parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib147parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
