import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib27childlib9parentComponent } from './lib27childlib9parent.component';

describe('Lib27childlib9parentComponent', () => {
  let component: Lib27childlib9parentComponent;
  let fixture: ComponentFixture<Lib27childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib27childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib27childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
