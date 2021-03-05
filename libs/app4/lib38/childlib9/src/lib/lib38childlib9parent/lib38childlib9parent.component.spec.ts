import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib38childlib9parentComponent } from './lib38childlib9parent.component';

describe('Lib38childlib9parentComponent', () => {
  let component: Lib38childlib9parentComponent;
  let fixture: ComponentFixture<Lib38childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib38childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib38childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
