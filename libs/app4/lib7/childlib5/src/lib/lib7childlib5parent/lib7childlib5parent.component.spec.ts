import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib5parentComponent } from './lib7childlib5parent.component';

describe('Lib7childlib5parentComponent', () => {
  let component: Lib7childlib5parentComponent;
  let fixture: ComponentFixture<Lib7childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib7childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
