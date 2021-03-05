import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib1parentComponent } from './lib7childlib1parent.component';

describe('Lib7childlib1parentComponent', () => {
  let component: Lib7childlib1parentComponent;
  let fixture: ComponentFixture<Lib7childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib7childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
