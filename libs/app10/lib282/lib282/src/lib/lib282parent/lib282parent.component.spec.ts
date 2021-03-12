import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib282parentComponent } from './lib282parent.component';

describe('Lib282parentComponent', () => {
  let component: Lib282parentComponent;
  let fixture: ComponentFixture<Lib282parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib282parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib282parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
