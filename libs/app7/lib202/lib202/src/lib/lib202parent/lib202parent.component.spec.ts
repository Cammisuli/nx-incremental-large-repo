import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib202parentComponent } from './lib202parent.component';

describe('Lib202parentComponent', () => {
  let component: Lib202parentComponent;
  let fixture: ComponentFixture<Lib202parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib202parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib202parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
