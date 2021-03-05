import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20childlib4parentComponent } from './lib20childlib4parent.component';

describe('Lib20childlib4parentComponent', () => {
  let component: Lib20childlib4parentComponent;
  let fixture: ComponentFixture<Lib20childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib20childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
