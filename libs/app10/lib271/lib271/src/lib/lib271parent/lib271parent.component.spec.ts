import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib271parentComponent } from './lib271parent.component';

describe('Lib271parentComponent', () => {
  let component: Lib271parentComponent;
  let fixture: ComponentFixture<Lib271parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib271parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib271parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
