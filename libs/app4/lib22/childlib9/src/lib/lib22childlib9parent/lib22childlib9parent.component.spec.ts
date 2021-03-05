import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib22childlib9parentComponent } from './lib22childlib9parent.component';

describe('Lib22childlib9parentComponent', () => {
  let component: Lib22childlib9parentComponent;
  let fixture: ComponentFixture<Lib22childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib22childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib22childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
