import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib37childlib1parentComponent } from './lib37childlib1parent.component';

describe('Lib37childlib1parentComponent', () => {
  let component: Lib37childlib1parentComponent;
  let fixture: ComponentFixture<Lib37childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib37childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib37childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
