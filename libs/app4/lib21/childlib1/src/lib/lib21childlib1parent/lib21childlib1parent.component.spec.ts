import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib21childlib1parentComponent } from './lib21childlib1parent.component';

describe('Lib21childlib1parentComponent', () => {
  let component: Lib21childlib1parentComponent;
  let fixture: ComponentFixture<Lib21childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib21childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib21childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
