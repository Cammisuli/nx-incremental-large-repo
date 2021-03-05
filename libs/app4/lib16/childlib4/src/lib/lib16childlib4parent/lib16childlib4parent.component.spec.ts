import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib16childlib4parentComponent } from './lib16childlib4parent.component';

describe('Lib16childlib4parentComponent', () => {
  let component: Lib16childlib4parentComponent;
  let fixture: ComponentFixture<Lib16childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib16childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib16childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
