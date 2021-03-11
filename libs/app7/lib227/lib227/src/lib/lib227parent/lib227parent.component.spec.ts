import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib227parentComponent } from './lib227parent.component';

describe('Lib227parentComponent', () => {
  let component: Lib227parentComponent;
  let fixture: ComponentFixture<Lib227parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib227parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib227parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
