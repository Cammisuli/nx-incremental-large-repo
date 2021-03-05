import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib21childlib5parentComponent } from './lib21childlib5parent.component';

describe('Lib21childlib5parentComponent', () => {
  let component: Lib21childlib5parentComponent;
  let fixture: ComponentFixture<Lib21childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib21childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib21childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
