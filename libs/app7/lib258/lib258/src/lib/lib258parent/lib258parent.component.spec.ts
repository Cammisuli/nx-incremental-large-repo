import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib258parentComponent } from './lib258parent.component';

describe('Lib258parentComponent', () => {
  let component: Lib258parentComponent;
  let fixture: ComponentFixture<Lib258parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib258parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib258parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
