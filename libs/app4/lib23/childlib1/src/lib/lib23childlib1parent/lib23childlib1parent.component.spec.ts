import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23childlib1parentComponent } from './lib23childlib1parent.component';

describe('Lib23childlib1parentComponent', () => {
  let component: Lib23childlib1parentComponent;
  let fixture: ComponentFixture<Lib23childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib23childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
