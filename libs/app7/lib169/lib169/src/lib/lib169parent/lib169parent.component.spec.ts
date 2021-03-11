import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib169parentComponent } from './lib169parent.component';

describe('Lib169parentComponent', () => {
  let component: Lib169parentComponent;
  let fixture: ComponentFixture<Lib169parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib169parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib169parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
