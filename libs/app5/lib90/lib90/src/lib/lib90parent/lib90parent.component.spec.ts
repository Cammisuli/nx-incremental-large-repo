import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib90parentComponent } from './lib90parent.component';

describe('Lib90parentComponent', () => {
  let component: Lib90parentComponent;
  let fixture: ComponentFixture<Lib90parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib90parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib90parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
