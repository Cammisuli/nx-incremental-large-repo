import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib34childlib8parentComponent } from './lib34childlib8parent.component';

describe('Lib34childlib8parentComponent', () => {
  let component: Lib34childlib8parentComponent;
  let fixture: ComponentFixture<Lib34childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib34childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib34childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
