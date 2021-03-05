import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib17childlib5parentComponent } from './lib17childlib5parent.component';

describe('Lib17childlib5parentComponent', () => {
  let component: Lib17childlib5parentComponent;
  let fixture: ComponentFixture<Lib17childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib17childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib17childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
