import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib276parentComponent } from './lib276parent.component';

describe('Lib276parentComponent', () => {
  let component: Lib276parentComponent;
  let fixture: ComponentFixture<Lib276parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib276parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib276parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
