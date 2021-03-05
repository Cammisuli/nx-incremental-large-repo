import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib8parentComponent } from './lib9childlib8parent.component';

describe('Lib9childlib8parentComponent', () => {
  let component: Lib9childlib8parentComponent;
  let fixture: ComponentFixture<Lib9childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib9childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
