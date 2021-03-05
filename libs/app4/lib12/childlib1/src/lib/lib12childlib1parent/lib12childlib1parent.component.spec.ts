import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib12childlib1parentComponent } from './lib12childlib1parent.component';

describe('Lib12childlib1parentComponent', () => {
  let component: Lib12childlib1parentComponent;
  let fixture: ComponentFixture<Lib12childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib12childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib12childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
