import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20childlib1parentComponent } from './lib20childlib1parent.component';

describe('Lib20childlib1parentComponent', () => {
  let component: Lib20childlib1parentComponent;
  let fixture: ComponentFixture<Lib20childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib20childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
