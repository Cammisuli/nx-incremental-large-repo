import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib26childlib1parentComponent } from './lib26childlib1parent.component';

describe('Lib26childlib1parentComponent', () => {
  let component: Lib26childlib1parentComponent;
  let fixture: ComponentFixture<Lib26childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib26childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib26childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
