import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib17childlib4parentComponent } from './lib17childlib4parent.component';

describe('Lib17childlib4parentComponent', () => {
  let component: Lib17childlib4parentComponent;
  let fixture: ComponentFixture<Lib17childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib17childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib17childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
