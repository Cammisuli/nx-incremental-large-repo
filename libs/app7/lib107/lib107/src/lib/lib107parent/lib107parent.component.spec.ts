import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib107parentComponent } from './lib107parent.component';

describe('Lib107parentComponent', () => {
  let component: Lib107parentComponent;
  let fixture: ComponentFixture<Lib107parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib107parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib107parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
