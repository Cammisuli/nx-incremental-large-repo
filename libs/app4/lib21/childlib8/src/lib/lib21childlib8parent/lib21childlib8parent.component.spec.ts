import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib21childlib8parentComponent } from './lib21childlib8parent.component';

describe('Lib21childlib8parentComponent', () => {
  let component: Lib21childlib8parentComponent;
  let fixture: ComponentFixture<Lib21childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib21childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib21childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
