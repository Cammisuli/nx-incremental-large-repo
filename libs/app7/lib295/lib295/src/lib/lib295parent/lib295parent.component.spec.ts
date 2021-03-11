import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib295parentComponent } from './lib295parent.component';

describe('Lib295parentComponent', () => {
  let component: Lib295parentComponent;
  let fixture: ComponentFixture<Lib295parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib295parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib295parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
