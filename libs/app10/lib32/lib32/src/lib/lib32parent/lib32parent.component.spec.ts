import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib32parentComponent } from './lib32parent.component';

describe('Lib32parentComponent', () => {
  let component: Lib32parentComponent;
  let fixture: ComponentFixture<Lib32parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib32parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib32parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
