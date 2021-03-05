import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib9parentComponent } from './lib7childlib9parent.component';

describe('Lib7childlib9parentComponent', () => {
  let component: Lib7childlib9parentComponent;
  let fixture: ComponentFixture<Lib7childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib7childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
