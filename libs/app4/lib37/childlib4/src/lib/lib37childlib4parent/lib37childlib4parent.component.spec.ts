import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib37childlib4parentComponent } from './lib37childlib4parent.component';

describe('Lib37childlib4parentComponent', () => {
  let component: Lib37childlib4parentComponent;
  let fixture: ComponentFixture<Lib37childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib37childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib37childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
