import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib265parentComponent } from './lib265parent.component';

describe('Lib265parentComponent', () => {
  let component: Lib265parentComponent;
  let fixture: ComponentFixture<Lib265parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib265parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib265parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
