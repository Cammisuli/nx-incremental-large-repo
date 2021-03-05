import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib1parentComponent } from './lib5childlib1parent.component';

describe('Lib5childlib1parentComponent', () => {
  let component: Lib5childlib1parentComponent;
  let fixture: ComponentFixture<Lib5childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib5childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
