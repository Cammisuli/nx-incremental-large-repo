import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib291parentComponent } from './lib291parent.component';

describe('Lib291parentComponent', () => {
  let component: Lib291parentComponent;
  let fixture: ComponentFixture<Lib291parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib291parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib291parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
