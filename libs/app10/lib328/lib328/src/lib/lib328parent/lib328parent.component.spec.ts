import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib328parentComponent } from './lib328parent.component';

describe('Lib328parentComponent', () => {
  let component: Lib328parentComponent;
  let fixture: ComponentFixture<Lib328parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib328parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib328parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
