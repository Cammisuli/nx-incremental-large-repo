import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib183parentComponent } from './lib183parent.component';

describe('Lib183parentComponent', () => {
  let component: Lib183parentComponent;
  let fixture: ComponentFixture<Lib183parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib183parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib183parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
