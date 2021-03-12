import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib322parentComponent } from './lib322parent.component';

describe('Lib322parentComponent', () => {
  let component: Lib322parentComponent;
  let fixture: ComponentFixture<Lib322parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib322parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib322parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
