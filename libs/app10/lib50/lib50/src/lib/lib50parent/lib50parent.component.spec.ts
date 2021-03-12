import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib50parentComponent } from './lib50parent.component';

describe('Lib50parentComponent', () => {
  let component: Lib50parentComponent;
  let fixture: ComponentFixture<Lib50parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib50parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib50parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
