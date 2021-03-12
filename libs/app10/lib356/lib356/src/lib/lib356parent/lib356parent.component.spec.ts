import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib356parentComponent } from './lib356parent.component';

describe('Lib356parentComponent', () => {
  let component: Lib356parentComponent;
  let fixture: ComponentFixture<Lib356parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib356parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib356parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
