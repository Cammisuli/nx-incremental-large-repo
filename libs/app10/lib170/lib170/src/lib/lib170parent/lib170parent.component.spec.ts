import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib170parentComponent } from './lib170parent.component';

describe('Lib170parentComponent', () => {
  let component: Lib170parentComponent;
  let fixture: ComponentFixture<Lib170parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib170parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib170parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
