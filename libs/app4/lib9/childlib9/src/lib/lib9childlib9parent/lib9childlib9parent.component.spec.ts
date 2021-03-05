import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib9parentComponent } from './lib9childlib9parent.component';

describe('Lib9childlib9parentComponent', () => {
  let component: Lib9childlib9parentComponent;
  let fixture: ComponentFixture<Lib9childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib9childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
