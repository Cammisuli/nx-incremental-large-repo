import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib17childlib9parentComponent } from './lib17childlib9parent.component';

describe('Lib17childlib9parentComponent', () => {
  let component: Lib17childlib9parentComponent;
  let fixture: ComponentFixture<Lib17childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib17childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib17childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
