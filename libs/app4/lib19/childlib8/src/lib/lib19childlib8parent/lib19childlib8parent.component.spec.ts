import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19childlib8parentComponent } from './lib19childlib8parent.component';

describe('Lib19childlib8parentComponent', () => {
  let component: Lib19childlib8parentComponent;
  let fixture: ComponentFixture<Lib19childlib8parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib19childlib8parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19childlib8parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
