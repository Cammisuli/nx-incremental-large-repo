import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib38childlib8parentComponent } from './lib38childlib8parent.component';

describe('Lib38childlib8parentComponent', () => {
  let component: Lib38childlib8parentComponent;
  let fixture: ComponentFixture<Lib38childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib38childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib38childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
