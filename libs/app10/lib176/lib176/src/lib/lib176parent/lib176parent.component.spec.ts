import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib176parentComponent } from './lib176parent.component';

describe('Lib176parentComponent', () => {
  let component: Lib176parentComponent;
  let fixture: ComponentFixture<Lib176parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib176parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib176parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
