import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25childlib8parentComponent } from './lib25childlib8parent.component';

describe('Lib25childlib8parentComponent', () => {
  let component: Lib25childlib8parentComponent;
  let fixture: ComponentFixture<Lib25childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib25childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
