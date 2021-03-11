import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib84parentComponent } from './lib84parent.component';

describe('Lib84parentComponent', () => {
  let component: Lib84parentComponent;
  let fixture: ComponentFixture<Lib84parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib84parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib84parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
