import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib128parentComponent } from './lib128parent.component';

describe('Lib128parentComponent', () => {
  let component: Lib128parentComponent;
  let fixture: ComponentFixture<Lib128parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib128parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib128parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
