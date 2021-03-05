import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib34childlib9parentComponent } from './lib34childlib9parent.component';

describe('Lib34childlib9parentComponent', () => {
  let component: Lib34childlib9parentComponent;
  let fixture: ComponentFixture<Lib34childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib34childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib34childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
