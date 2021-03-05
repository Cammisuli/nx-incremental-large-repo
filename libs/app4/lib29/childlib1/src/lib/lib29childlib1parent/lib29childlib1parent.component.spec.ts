import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib29childlib1parentComponent } from './lib29childlib1parent.component';

describe('Lib29childlib1parentComponent', () => {
  let component: Lib29childlib1parentComponent;
  let fixture: ComponentFixture<Lib29childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib29childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib29childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
