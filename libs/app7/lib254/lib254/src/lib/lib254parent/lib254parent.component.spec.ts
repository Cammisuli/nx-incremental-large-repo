import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib254parentComponent } from './lib254parent.component';

describe('Lib254parentComponent', () => {
  let component: Lib254parentComponent;
  let fixture: ComponentFixture<Lib254parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib254parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib254parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
