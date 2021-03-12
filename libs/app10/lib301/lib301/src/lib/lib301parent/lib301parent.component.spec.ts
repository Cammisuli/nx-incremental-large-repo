import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib301parentComponent } from './lib301parent.component';

describe('Lib301parentComponent', () => {
  let component: Lib301parentComponent;
  let fixture: ComponentFixture<Lib301parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib301parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib301parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
