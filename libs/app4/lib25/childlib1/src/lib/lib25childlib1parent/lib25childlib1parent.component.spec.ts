import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25childlib1parentComponent } from './lib25childlib1parent.component';

describe('Lib25childlib1parentComponent', () => {
  let component: Lib25childlib1parentComponent;
  let fixture: ComponentFixture<Lib25childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib25childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
