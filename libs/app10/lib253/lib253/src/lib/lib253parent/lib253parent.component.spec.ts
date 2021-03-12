import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib253parentComponent } from './lib253parent.component';

describe('Lib253parentComponent', () => {
  let component: Lib253parentComponent;
  let fixture: ComponentFixture<Lib253parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib253parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib253parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
