import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23childlib9parentComponent } from './lib23childlib9parent.component';

describe('Lib23childlib9parentComponent', () => {
  let component: Lib23childlib9parentComponent;
  let fixture: ComponentFixture<Lib23childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib23childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
