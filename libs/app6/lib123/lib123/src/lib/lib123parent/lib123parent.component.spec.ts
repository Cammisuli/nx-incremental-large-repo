import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib123parentComponent } from './lib123parent.component';

describe('Lib123parentComponent', () => {
  let component: Lib123parentComponent;
  let fixture: ComponentFixture<Lib123parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib123parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib123parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
