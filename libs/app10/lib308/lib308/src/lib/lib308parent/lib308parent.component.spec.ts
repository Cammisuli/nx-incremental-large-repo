import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib308parentComponent } from './lib308parent.component';

describe('Lib308parentComponent', () => {
  let component: Lib308parentComponent;
  let fixture: ComponentFixture<Lib308parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib308parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib308parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
