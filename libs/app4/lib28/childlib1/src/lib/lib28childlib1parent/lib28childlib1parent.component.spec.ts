import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib28childlib1parentComponent } from './lib28childlib1parent.component';

describe('Lib28childlib1parentComponent', () => {
  let component: Lib28childlib1parentComponent;
  let fixture: ComponentFixture<Lib28childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib28childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib28childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
