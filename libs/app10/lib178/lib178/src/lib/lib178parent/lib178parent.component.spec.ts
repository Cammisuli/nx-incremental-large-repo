import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib178parentComponent } from './lib178parent.component';

describe('Lib178parentComponent', () => {
  let component: Lib178parentComponent;
  let fixture: ComponentFixture<Lib178parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib178parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib178parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
