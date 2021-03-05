import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib22childlib8parentComponent } from './lib22childlib8parent.component';

describe('Lib22childlib8parentComponent', () => {
  let component: Lib22childlib8parentComponent;
  let fixture: ComponentFixture<Lib22childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib22childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib22childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
