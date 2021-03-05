import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib33childlib1parentComponent } from './lib33childlib1parent.component';

describe('Lib33childlib1parentComponent', () => {
  let component: Lib33childlib1parentComponent;
  let fixture: ComponentFixture<Lib33childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib33childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib33childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
