import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15childlib1parentComponent } from './lib15childlib1parent.component';

describe('Lib15childlib1parentComponent', () => {
  let component: Lib15childlib1parentComponent;
  let fixture: ComponentFixture<Lib15childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib15childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
