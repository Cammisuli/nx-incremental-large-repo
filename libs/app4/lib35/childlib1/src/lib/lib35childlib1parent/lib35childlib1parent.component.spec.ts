import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib35childlib1parentComponent } from './lib35childlib1parent.component';

describe('Lib35childlib1parentComponent', () => {
  let component: Lib35childlib1parentComponent;
  let fixture: ComponentFixture<Lib35childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib35childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib35childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
