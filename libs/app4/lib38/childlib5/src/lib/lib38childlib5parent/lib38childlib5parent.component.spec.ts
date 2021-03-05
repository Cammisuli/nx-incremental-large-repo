import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib38childlib5parentComponent } from './lib38childlib5parent.component';

describe('Lib38childlib5parentComponent', () => {
  let component: Lib38childlib5parentComponent;
  let fixture: ComponentFixture<Lib38childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib38childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib38childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
