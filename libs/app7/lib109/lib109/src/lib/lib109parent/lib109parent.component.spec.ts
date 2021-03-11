import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib109parentComponent } from './lib109parent.component';

describe('Lib109parentComponent', () => {
  let component: Lib109parentComponent;
  let fixture: ComponentFixture<Lib109parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib109parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib109parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
