import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib229parentComponent } from './lib229parent.component';

describe('Lib229parentComponent', () => {
  let component: Lib229parentComponent;
  let fixture: ComponentFixture<Lib229parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib229parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib229parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
