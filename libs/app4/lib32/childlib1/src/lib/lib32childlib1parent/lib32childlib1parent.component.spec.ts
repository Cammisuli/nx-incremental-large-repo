import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib32childlib1parentComponent } from './lib32childlib1parent.component';

describe('Lib32childlib1parentComponent', () => {
  let component: Lib32childlib1parentComponent;
  let fixture: ComponentFixture<Lib32childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib32childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib32childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
