import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15childlib9parentComponent } from './lib15childlib9parent.component';

describe('Lib15childlib9parentComponent', () => {
  let component: Lib15childlib9parentComponent;
  let fixture: ComponentFixture<Lib15childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib15childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
