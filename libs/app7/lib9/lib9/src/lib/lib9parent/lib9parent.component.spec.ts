import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9parentComponent } from './lib9parent.component';

describe('Lib9parentComponent', () => {
  let component: Lib9parentComponent;
  let fixture: ComponentFixture<Lib9parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib9parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
