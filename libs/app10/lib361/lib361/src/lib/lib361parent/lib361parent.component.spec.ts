import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib361parentComponent } from './lib361parent.component';

describe('Lib361parentComponent', () => {
  let component: Lib361parentComponent;
  let fixture: ComponentFixture<Lib361parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib361parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib361parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
