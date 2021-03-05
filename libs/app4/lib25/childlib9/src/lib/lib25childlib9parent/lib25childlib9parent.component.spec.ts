import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25childlib9parentComponent } from './lib25childlib9parent.component';

describe('Lib25childlib9parentComponent', () => {
  let component: Lib25childlib9parentComponent;
  let fixture: ComponentFixture<Lib25childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib25childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
