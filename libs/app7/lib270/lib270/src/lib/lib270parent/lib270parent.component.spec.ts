import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib270parentComponent } from './lib270parent.component';

describe('Lib270parentComponent', () => {
  let component: Lib270parentComponent;
  let fixture: ComponentFixture<Lib270parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib270parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib270parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
