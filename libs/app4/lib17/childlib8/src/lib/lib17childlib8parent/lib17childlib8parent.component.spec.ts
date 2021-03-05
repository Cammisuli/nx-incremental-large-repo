import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib17childlib8parentComponent } from './lib17childlib8parent.component';

describe('Lib17childlib8parentComponent', () => {
  let component: Lib17childlib8parentComponent;
  let fixture: ComponentFixture<Lib17childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib17childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib17childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
