import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib363parentComponent } from './lib363parent.component';

describe('Lib363parentComponent', () => {
  let component: Lib363parentComponent;
  let fixture: ComponentFixture<Lib363parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib363parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib363parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
