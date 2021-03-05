import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib22childlib1parentComponent } from './lib22childlib1parent.component';

describe('Lib22childlib1parentComponent', () => {
  let component: Lib22childlib1parentComponent;
  let fixture: ComponentFixture<Lib22childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib22childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib22childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
