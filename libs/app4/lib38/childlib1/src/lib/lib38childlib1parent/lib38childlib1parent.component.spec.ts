import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib38childlib1parentComponent } from './lib38childlib1parent.component';

describe('Lib38childlib1parentComponent', () => {
  let component: Lib38childlib1parentComponent;
  let fixture: ComponentFixture<Lib38childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib38childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib38childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
