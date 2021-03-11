import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib163parentComponent } from './lib163parent.component';

describe('Lib163parentComponent', () => {
  let component: Lib163parentComponent;
  let fixture: ComponentFixture<Lib163parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib163parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib163parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
