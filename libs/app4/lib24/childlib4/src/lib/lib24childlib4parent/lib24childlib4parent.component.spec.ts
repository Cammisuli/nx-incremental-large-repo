import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib24childlib4parentComponent } from './lib24childlib4parent.component';

describe('Lib24childlib4parentComponent', () => {
  let component: Lib24childlib4parentComponent;
  let fixture: ComponentFixture<Lib24childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib24childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib24childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
