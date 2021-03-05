import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib16childlib1parentComponent } from './lib16childlib1parent.component';

describe('Lib16childlib1parentComponent', () => {
  let component: Lib16childlib1parentComponent;
  let fixture: ComponentFixture<Lib16childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib16childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib16childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
