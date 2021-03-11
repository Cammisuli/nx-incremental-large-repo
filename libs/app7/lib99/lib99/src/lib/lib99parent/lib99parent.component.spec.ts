import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib99parentComponent } from './lib99parent.component';

describe('Lib99parentComponent', () => {
  let component: Lib99parentComponent;
  let fixture: ComponentFixture<Lib99parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib99parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib99parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
