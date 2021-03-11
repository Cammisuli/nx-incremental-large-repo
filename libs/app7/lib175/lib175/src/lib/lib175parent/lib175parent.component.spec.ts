import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib175parentComponent } from './lib175parent.component';

describe('Lib175parentComponent', () => {
  let component: Lib175parentComponent;
  let fixture: ComponentFixture<Lib175parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib175parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib175parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
