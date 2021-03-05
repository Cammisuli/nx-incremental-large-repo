import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib12childlib9parentComponent } from './lib12childlib9parent.component';

describe('Lib12childlib9parentComponent', () => {
  let component: Lib12childlib9parentComponent;
  let fixture: ComponentFixture<Lib12childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib12childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib12childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
