import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib193parentComponent } from './lib193parent.component';

describe('Lib193parentComponent', () => {
  let component: Lib193parentComponent;
  let fixture: ComponentFixture<Lib193parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib193parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib193parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
