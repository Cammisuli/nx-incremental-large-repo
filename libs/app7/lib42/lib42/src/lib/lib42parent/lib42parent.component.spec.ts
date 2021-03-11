import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib42parentComponent } from './lib42parent.component';

describe('Lib42parentComponent', () => {
  let component: Lib42parentComponent;
  let fixture: ComponentFixture<Lib42parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib42parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib42parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
