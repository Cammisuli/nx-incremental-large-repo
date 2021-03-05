import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib37childlib5parentComponent } from './lib37childlib5parent.component';

describe('Lib37childlib5parentComponent', () => {
  let component: Lib37childlib5parentComponent;
  let fixture: ComponentFixture<Lib37childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib37childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib37childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
