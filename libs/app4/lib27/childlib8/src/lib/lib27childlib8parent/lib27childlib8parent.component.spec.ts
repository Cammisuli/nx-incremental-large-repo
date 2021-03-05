import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib27childlib8parentComponent } from './lib27childlib8parent.component';

describe('Lib27childlib8parentComponent', () => {
  let component: Lib27childlib8parentComponent;
  let fixture: ComponentFixture<Lib27childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib27childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib27childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
