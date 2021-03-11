import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib209parentComponent } from './lib209parent.component';

describe('Lib209parentComponent', () => {
  let component: Lib209parentComponent;
  let fixture: ComponentFixture<Lib209parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib209parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib209parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
