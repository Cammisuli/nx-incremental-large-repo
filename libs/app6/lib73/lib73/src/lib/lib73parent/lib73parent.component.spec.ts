import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib73parentComponent } from './lib73parent.component';

describe('Lib73parentComponent', () => {
  let component: Lib73parentComponent;
  let fixture: ComponentFixture<Lib73parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib73parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib73parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
