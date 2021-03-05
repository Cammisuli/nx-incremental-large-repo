import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18childlib1parentComponent } from './lib18childlib1parent.component';

describe('Lib18childlib1parentComponent', () => {
  let component: Lib18childlib1parentComponent;
  let fixture: ComponentFixture<Lib18childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib18childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
