import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib207parentComponent } from './lib207parent.component';

describe('Lib207parentComponent', () => {
  let component: Lib207parentComponent;
  let fixture: ComponentFixture<Lib207parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib207parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib207parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
