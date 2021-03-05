import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib33childlib4parentComponent } from './lib33childlib4parent.component';

describe('Lib33childlib4parentComponent', () => {
  let component: Lib33childlib4parentComponent;
  let fixture: ComponentFixture<Lib33childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib33childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib33childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
