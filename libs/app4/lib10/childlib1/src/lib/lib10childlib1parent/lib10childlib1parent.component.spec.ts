import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib10childlib1parentComponent } from './lib10childlib1parent.component';

describe('Lib10childlib1parentComponent', () => {
  let component: Lib10childlib1parentComponent;
  let fixture: ComponentFixture<Lib10childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib10childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib10childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
