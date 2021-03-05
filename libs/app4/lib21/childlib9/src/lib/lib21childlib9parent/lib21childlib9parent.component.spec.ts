import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib21childlib9parentComponent } from './lib21childlib9parent.component';

describe('Lib21childlib9parentComponent', () => {
  let component: Lib21childlib9parentComponent;
  let fixture: ComponentFixture<Lib21childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib21childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib21childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
