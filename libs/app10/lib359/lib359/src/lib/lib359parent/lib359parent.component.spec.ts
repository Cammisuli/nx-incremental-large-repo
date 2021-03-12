import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib359parentComponent } from './lib359parent.component';

describe('Lib359parentComponent', () => {
  let component: Lib359parentComponent;
  let fixture: ComponentFixture<Lib359parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib359parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib359parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
