import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib230parentComponent } from './lib230parent.component';

describe('Lib230parentComponent', () => {
  let component: Lib230parentComponent;
  let fixture: ComponentFixture<Lib230parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib230parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib230parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
