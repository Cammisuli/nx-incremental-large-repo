import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib67parentComponent } from './lib67parent.component';

describe('Lib67parentComponent', () => {
  let component: Lib67parentComponent;
  let fixture: ComponentFixture<Lib67parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib67parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib67parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
