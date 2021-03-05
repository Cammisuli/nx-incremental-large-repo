import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6childlib1parentComponent } from './lib6childlib1parent.component';

describe('Lib6childlib1parentComponent', () => {
  let component: Lib6childlib1parentComponent;
  let fixture: ComponentFixture<Lib6childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib6childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
