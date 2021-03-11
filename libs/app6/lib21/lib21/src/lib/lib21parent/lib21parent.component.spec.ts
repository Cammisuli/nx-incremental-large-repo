import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib21parentComponent } from './lib21parent.component';

describe('Lib21parentComponent', () => {
  let component: Lib21parentComponent;
  let fixture: ComponentFixture<Lib21parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib21parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib21parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
