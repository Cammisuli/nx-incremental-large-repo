import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib77parentComponent } from './lib77parent.component';

describe('Lib77parentComponent', () => {
  let component: Lib77parentComponent;
  let fixture: ComponentFixture<Lib77parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib77parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib77parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
