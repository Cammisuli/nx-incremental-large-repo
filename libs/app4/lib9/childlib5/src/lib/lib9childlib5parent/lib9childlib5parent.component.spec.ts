import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib5parentComponent } from './lib9childlib5parent.component';

describe('Lib9childlib5parentComponent', () => {
  let component: Lib9childlib5parentComponent;
  let fixture: ComponentFixture<Lib9childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib9childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
