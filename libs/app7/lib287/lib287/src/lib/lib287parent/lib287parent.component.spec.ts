import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib287parentComponent } from './lib287parent.component';

describe('Lib287parentComponent', () => {
  let component: Lib287parentComponent;
  let fixture: ComponentFixture<Lib287parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib287parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib287parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
