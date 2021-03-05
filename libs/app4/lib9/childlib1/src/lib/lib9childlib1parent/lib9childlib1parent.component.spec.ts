import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib1parentComponent } from './lib9childlib1parent.component';

describe('Lib9childlib1parentComponent', () => {
  let component: Lib9childlib1parentComponent;
  let fixture: ComponentFixture<Lib9childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib9childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
