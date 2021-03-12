import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib351parentComponent } from './lib351parent.component';

describe('Lib351parentComponent', () => {
  let component: Lib351parentComponent;
  let fixture: ComponentFixture<Lib351parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib351parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib351parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
