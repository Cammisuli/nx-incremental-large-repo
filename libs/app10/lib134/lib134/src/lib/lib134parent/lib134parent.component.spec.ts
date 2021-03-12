import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib134parentComponent } from './lib134parent.component';

describe('Lib134parentComponent', () => {
  let component: Lib134parentComponent;
  let fixture: ComponentFixture<Lib134parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib134parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib134parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
