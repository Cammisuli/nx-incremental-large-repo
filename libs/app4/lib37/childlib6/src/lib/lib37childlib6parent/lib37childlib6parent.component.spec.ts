import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib37childlib6parentComponent } from './lib37childlib6parent.component';

describe('Lib37childlib6parentComponent', () => {
  let component: Lib37childlib6parentComponent;
  let fixture: ComponentFixture<Lib37childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib37childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib37childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
