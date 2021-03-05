import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib12childlib8parentComponent } from './lib12childlib8parent.component';

describe('Lib12childlib8parentComponent', () => {
  let component: Lib12childlib8parentComponent;
  let fixture: ComponentFixture<Lib12childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib12childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib12childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
