import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib31parentComponent } from './lib31parent.component';

describe('Lib31parentComponent', () => {
  let component: Lib31parentComponent;
  let fixture: ComponentFixture<Lib31parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib31parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib31parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
