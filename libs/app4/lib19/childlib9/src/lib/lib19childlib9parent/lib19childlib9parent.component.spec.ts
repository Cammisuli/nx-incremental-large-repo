import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19childlib9parentComponent } from './lib19childlib9parent.component';

describe('Lib19childlib9parentComponent', () => {
  let component: Lib19childlib9parentComponent;
  let fixture: ComponentFixture<Lib19childlib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib19childlib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19childlib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
