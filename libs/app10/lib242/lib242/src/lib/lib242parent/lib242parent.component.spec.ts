import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib242parentComponent } from './lib242parent.component';

describe('Lib242parentComponent', () => {
  let component: Lib242parentComponent;
  let fixture: ComponentFixture<Lib242parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib242parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib242parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
