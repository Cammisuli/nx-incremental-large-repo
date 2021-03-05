import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib58parentComponent } from './lib58parent.component';

describe('Lib58parentComponent', () => {
  let component: Lib58parentComponent;
  let fixture: ComponentFixture<Lib58parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib58parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib58parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
