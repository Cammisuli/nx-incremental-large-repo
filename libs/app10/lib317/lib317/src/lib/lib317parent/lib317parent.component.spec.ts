import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib317parentComponent } from './lib317parent.component';

describe('Lib317parentComponent', () => {
  let component: Lib317parentComponent;
  let fixture: ComponentFixture<Lib317parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib317parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib317parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
