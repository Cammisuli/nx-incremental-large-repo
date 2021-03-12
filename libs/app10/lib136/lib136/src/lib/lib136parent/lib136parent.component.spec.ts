import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib136parentComponent } from './lib136parent.component';

describe('Lib136parentComponent', () => {
  let component: Lib136parentComponent;
  let fixture: ComponentFixture<Lib136parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib136parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib136parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
