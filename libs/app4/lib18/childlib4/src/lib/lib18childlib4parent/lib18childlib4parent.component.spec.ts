import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18childlib4parentComponent } from './lib18childlib4parent.component';

describe('Lib18childlib4parentComponent', () => {
  let component: Lib18childlib4parentComponent;
  let fixture: ComponentFixture<Lib18childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib18childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
