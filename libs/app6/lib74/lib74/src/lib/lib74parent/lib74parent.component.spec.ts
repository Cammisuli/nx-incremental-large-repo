import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib74parentComponent } from './lib74parent.component';

describe('Lib74parentComponent', () => {
  let component: Lib74parentComponent;
  let fixture: ComponentFixture<Lib74parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib74parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib74parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
