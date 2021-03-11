import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib76parentComponent } from './lib76parent.component';

describe('Lib76parentComponent', () => {
  let component: Lib76parentComponent;
  let fixture: ComponentFixture<Lib76parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib76parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib76parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
