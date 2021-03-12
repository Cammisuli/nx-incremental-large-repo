import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib329parentComponent } from './lib329parent.component';

describe('Lib329parentComponent', () => {
  let component: Lib329parentComponent;
  let fixture: ComponentFixture<Lib329parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib329parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib329parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
